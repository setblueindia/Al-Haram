import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllCategory } from '../../redux/mainStack/mainStackApi';
import { productsStart, productsSuccess, productsFailure } from '../../redux/mainStackSlice/productsSlice';
import { Alert, TouchableHighlight, Animated, StyleSheet, View, Text, SafeAreaView, Pressable, Image, ScrollView, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AddWishlist } from '../../redux/mainStack/mainStackApi';
import { addWishlistStart, addWishlistSuccess, addWishlistFailure } from '../../redux/mainStackSlice/addWishlistSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CheckBox from '@react-native-community/checkbox';
import { CategoryFilterAPI } from '../../redux/mainStack/mainStackApi';
import { setproductfilterlistStart, setproductfilterlistSuccess, setproductfilterlistFailure } from '../../redux/mainStackSlice/addresslistSlice';
const { width, height } = Dimensions.get('window');
const Products = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [products, setProducts] = useState([]);
  const [clickedItems, setClickedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = (item) => {
    if (clickedItems.includes(item.id)) {
      setClickedItems(clickedItems.filter(clickedId => clickedId !== item.id));
    } else {
      setClickedItems([...clickedItems, item.id]);
    }
  };
  const HomeScreen = () => {
    navigation.navigate('Home');
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  
  const [colors, setColors] = useState([]);
  const [category, setCategory] = useState([]);
  const [size, setSize] = useState([]);
  const [price, setprice] = useState([]);
  const [wishlistMessage, setWishlistMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const fetchCategoryFilter = async () => { 
    try {
      setLoad(true); 
      const category_id = number;
      const response = await CategoryFilterAPI(store_id, category_id);
      console.log("response:",response);
      console.log("response data:",response.data);
      const availableFilters = response.data.availablefilter;
      console.log("filter response:::", availableFilters);
      setLoad(false)
      dispatch(setproductfilterlistSuccess(response));
      setColors(availableFilters.Color);
      setCategory(availableFilters.Category);
      setSize(availableFilters.Size);
      setprice(availableFilters.Price);
      price.forEach(item => {
        console.log(`Display: ${item.display}`);
      });
    } catch (error) {
      console.log("error::::", error);
      dispatch(setproductfilterlistFailure(error.message));
    } finally {
      setLoad(false); 
    }
  };
  
  const route = useRoute();
  const { number } = route.params;
  const [store_id, setstore_id] = useState("1")
  const getConsoleValue = async () => {
    try {
      const consoleValue = await AsyncStorage.getItem('consoleValue');
      // console.log("language id:", consoleValue);
      if (consoleValue !== null) {
        
        const storeIdFromAsyncStore = parseInt(consoleValue, 10);
        // Set the store_id state with the value retrieved from AsyncStoragess
        setstore_id(storeIdFromAsyncStore);
        // Log the store ID here
        console.log('Store ID:', storeIdFromAsyncStore);
      }
    } catch (error) {
      console.error('Error getting console value from AsyncStorage:', error);
    }
  };
  useEffect(() => {
    getConsoleValue();
  }, []);
  const fetchUserData = async () => {
    setIsLoading(true)
    try {
        const category_id = number;
        const PageSize = 20;
        const CurPage = 1;
        const customer_id = 0;
        const color = selectedcolor ? selectedcolor.value : '';
        const size = selectedSize ? selectedSize.value : '';
        const sort_by = selectedId === 3 || selectedId === 4 ? 'price' : 'position';
        const sort_action = selectedId === 1 || selectedId === 4 ? 'DESC' : 'ASC';
        const price_from = minValue ? minValue : '';
        const price_to = maxValue ? maxValue : '';
        // const store_id=store_id
        dispatch(productsStart());
        AllCategory(store_id, category_id, PageSize, CurPage, customer_id, color, size, sort_by, sort_action, price_from, price_to)
          .then(response => {
            console.log("Products Response:", response);
            console.log("product msg:",response.message);
            setResponseMessage(response.message);
            setIsLoading(false)
            setProducts(response.data);
            dispatch(productsSuccess(response.data));
          })
          .catch(error => {
            dispatch(productsFailure(error.message));
            setIsLoading(false)
            console.log("Error:::", error);
            if (error.response.status === 404) {
              console.error("Product not found:", error.response.data.message);
            } else {
              console.error("Error:", error.message);
            }
          });
     
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };
  useEffect(() => {
    fetchUserData();
    fetchCategoryFilter();
  }, [number, selectedId, selectedcolor, selectedSize, minValue, maxValue,selectedcat]);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const handleHeartClick = async (item) => {
    console.log("Clicked on item with ID:", item.id);
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const customer_id = userData.id;
        const productId = item.id;
        const action = 'true';
        dispatch(addWishlistStart());
        const response = await AddWishlist(customer_id, productId, action);
        console.log("Added Wishlist response: ", response);
        if (response.message !== "Cannot add product without stock to wishlist") {
          console.log("message", response.message);
          setWishlistMessage(response.message);
          Alert.alert('Wishlist', response.message);
          setAddedToWishlist(true);
        }
      } else {
        console.log('No user data found in AsyncStorage.');
        navigation.navigate('Login');
        return;
      }
    } catch (error) {
      dispatch(addWishlistFailure(error));
      console.log("Error response: ", error);
    }
  };
  const renderItemnew = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        setSelectedId(item.id);
        console.log("Selected  id:", item.id);
        setModalVisible(false);
      }}>

      <View style={{ flexDirection: "column", borderWidth: 0.8, padding: 5, borderColor: "lightgray", width: width * 80 / 100, alignSelf: "center", height: height * 8 / 100 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
          <RadioButton
            value={item.id}
            status={selectedId === item.id ? 'checked' : 'unchecked'}
            color="#9f0202"
          />
          <Text style={{ marginLeft: 8, fontSize: 15, color: "gray" }}>{item.label}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  };
  const data = [
    { id: 1, label: 'Relevance' },
    { id: 2, label: 'New Arrivals' },
    { id: 3, label: 'Price Low-High' },
    { id: 4, label: 'Price High-Low' },
  ];
 
  const [minValue, setMinValue] = useState(price.length > 0 ? price[0].value : 0);
  const [maxValue, setMaxValue] = useState(price.length > 0 ? price[1].value : 499);
  const [selectedcolor, setSelectedcolor] = useState(null);
  const [selectedcat, setSelectedcat] = useState(null);
 
 
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  useEffect(() => {
    setSelectedButton(buttons[0]);
  }, []);
  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  //   switch (selectedButton) {
  //     case 'Size':
  //       setSelectedSize(item);
  //       break;
  //     case 'Color':
  //       setSelectedcolor(item);
  //       break;
  //     case 'Category':
  //       setSelectedcat(item);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  const onValuesChange = (values) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };
  const imageloder =(value,index)=>{
    setisLoading(value)
  }
  const [isloading, setisLoading] = useState(false);
  const [isModallist, setisModallist] = useState(false);
  const [isLoad, setLoad] = useState(false);
  const toggleModallist = () => {
    setisModallist(!isModallist);
  };
  const handleClearPress = () => {
    setSelectedcolor(null);
    setSelectedSize(null);
    setSelectedcat(null);
    setSelectedItem(null);
    setisModallist(false);
    setMinValue(0); 
  setMaxValue(499); 
  };
  const handleApplyPress = () => {
    setisModallist(false);
    fetchUserData();
  };
  const handleClick = async () => {
    try {
      setLoad(true);
      toggleModallist(); 

      const category_id = number;
      const response = await CategoryFilterAPI(store_id, category_id);
      const availableFilters = response.data.availablefilter;
      console.log("filter response:::", availableFilters);
      setColors(availableFilters.Color);
      setCategory(availableFilters.Category);
      setSize(availableFilters.Size);
      setprice(availableFilters.Price);
      price.forEach(item => {
        console.log(`Display: ${item.display}`);
      });
      dispatch(setproductfilterlistSuccess(response));
    } catch (error) {
      console.log("error::::", error);
      dispatch(setproductfilterlistFailure(error.message));
    } finally {
      setTimeout(() => {
        setLoad(false);
        toggleModallist();
      }, 2000);
    }
  };

  const buttons = ['Size', 'Color', 'Category', 'Price']; // Your list of buttons
  const [selectedButton, setSelectedButton] = useState(buttons[0]);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    // Update selectedButton to the first available button
    const firstAvailableButton = buttons.find(button => {
      switch (button) {
        case 'Size':
          return size && size.length > 0;
        case 'Color':
          return colors && colors.length > 0;
        case 'Category':
          return category && category.length > 0;
        case 'Price':
          return price && price.length > 0;
        default:
          return false;
      }
    });
    setSelectedButton(firstAvailableButton);
    switch (firstAvailableButton) {
      case 'Size':
        setSelectedItem(size && size.length > 0 ? size[0] : null);
        break;
      case 'Color':
        setSelectedItem(colors && colors.length > 0 ? colors[0] : null);
        break;
      case 'Category':
        setSelectedItem(category && category.length > 0 ? category[0] : null);
        break;
      default:
        break;
    }
  }, [size, colors, category, price]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    switch (selectedButton) {
      case 'Size':
        setSelectedSize(item);
        break;
      case 'Color':
        setSelectedcolor(item);
        break;
      case 'Category':
        setSelectedcat(item);
        break;
      default:
        break;
    }
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1, height: height }}>
      <View style={{ backgroundColor: "#fff", justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity onPress={HomeScreen}>
            <Image
              source={require('../../assests/Logo.png')}
              style={{
                width: width * 0.3, height: height * 0.1, resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity >
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assests/shopping-cart.png')}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <View style={[styles.loaderContainer, styles.horizontal]}>
          <ActivityIndicator size="large" color="#9f0202" />
        </View>
      ) : (
        <View>
      <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
              borderRadius: 5,
              padding: 5,
              borderColor: 'lightgray',
              borderWidth: 1,
              width: width * 0.9,
              backgroundColor: '#fff',
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={toggleModal}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../assests/iconSort.png')}
                style={{width: 20, height: 20, marginLeft: 5}}
              />
              <Text
                style={{
                  color: 'gray',
                  fontSize: 17,
                  textAlign: 'center',
                  fontWeight: '200',
                  paddingHorizontal: 5,
                }}>
                Sort
              </Text>
            </TouchableOpacity>
            <View
              style={{
                height: 30,
                width: 1,
                backgroundColor: 'gray',
                marginHorizontal: 0,
              }}></View>
            <TouchableOpacity
            onPress={handleClick}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../assests/iconFilter.png')}
                style={{width: 20, height: 20, marginLeft: 5}}
              />
              <Text
                style={{
                  color: 'gray',
                  fontSize: 17,
                  textAlign: 'center',
                  fontWeight: '200',
                  paddingHorizontal: 5,
                }}>
                Filter
              </Text>
            </TouchableOpacity>
          </View>
      <Modal
       isVisible={isModallist}
       backdropOpacity={0.2}
       style={styles.modal2}
       onBackdropPress={toggleModallist} 
       >
        <View style={{ }}>
            <View style={styles.modalContent}>
            <View style={{ borderColor: "lightgray", width: width * 90 / 100, alignSelf: "center", height: height * 70 / 100 }}>
            <View >
              <View style={{ flexDirection: "row", justifyContent: "space-between", width: width * 90 / 100, }}>
                <View>
                  <Text style={{ fontSize: 19, color: "#9f0202" }}>Filter By</Text>
                </View>
                <View style={{ marginRight: 10, flexDirection: "row", justifyContent: "space-between" }}>
                  <TouchableOpacity onPress={handleClearPress} style={{ width: width * 20 / 100, borderRadius: 1, borderWidth: 1, borderColor: "green", borderRightColor: "red", marginRight: 10, padding: 5 }}>
                    <Text style={{ textAlign: "center" }}>Clear</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleApplyPress} style={{ width: width * 20 / 100, borderRadius: 1, borderWidth: 1, borderColor: "green", borderRightColor: "red", backgroundColor: "#9f0202", padding: 5 }}>
                    <Text style={{ textAlign: "center", color: "#fff" }}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.line} />
              {isLoad ? (
                 <View style={{height:"100%",justifyContent: 'center', alignItems: 'center'}}>

                 <ActivityIndicator size="small" color="#9f0202" />
               </View>
          ) : (
<View
                style={{
                  width: width,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginVertical: 10,
                  
                }}>
                  <View
  style={{
    justifyContent: 'space-between',
    width: (width * 30) / 100,
    height: (height * 10) / 100,
  }}
>
  {['Size', 'Color', 'Category', 'Price']
    .filter(button => {
      switch (button) {
        case 'Size':
          return size && size.length > 0;
        case 'Color':
          return colors && colors.length > 0;
        case 'Category':
          return category && category.length > 0;
        case 'Price':
          return price && price.length > 0;
        default:
          return true;
      }
    })
    .map((button, index, arr) => (
      <TouchableHighlight
        key={index}
        style={[
          styles.filterButton,
          {
            backgroundColor: selectedButton === button ? '#9f0202' : 'transparent',
            borderColor: 'green',
          },
        ]}
        underlayColor="#ccc"
        onPress={() => setSelectedButton(button)}
      >
        <View>
          <Text
            style={[
              styles.filterButtonText,
              {
                color: selectedButton === button ? '#fff' : '#404040',
              },
            ]}
          >
            {button}
          </Text>
        </View>
      </TouchableHighlight>
    ))}
</View> 
                <View style={{width: (width * 70) / 100,paddingBottom:100,}}>
                {selectedButton !== 'Price' && (
    <View style={{ flexDirection: "row", justifyContent: 'space-around', width: (width * 65) / 100,}}>
      <Text style={{ fontSize: 17, marginBottom: 10,color:"#404040" }}>
        {selectedButton}
      </Text>
      <Text style={{ fontSize: 17, marginBottom: 10 ,color:"#404040" }}>
        Qty
      </Text>
    </View>
  )}
           <ScrollView >
                  <View >
                  {selectedButton === 'Size' && size ? (
  <View style={{ width: (width * 75) / 100 }}>
    {size.map((sizeItem, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => handleItemClick(sizeItem)}
        style={{
          // backgroundColor: selectedItem === sizeItem ? '#9f0202' : 'transparent',
        }}
      >
        <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: "space-between", width: (width * 55) / 100 }}>

          <CheckBox
            value={selectedItem === sizeItem}
            tintColors={{ true: '#9f0202', false: '#404040' }}
            style={{ borderWidth:-1}}
          />

          <View style={{ width: (width * 20) / 100, alignItems: "flex-start" }}>

         
            <Text style={{ color: selectedItem === sizeItem ? '#9f0202' : ' #404040', fontSize: 15 }}>{sizeItem.display}</Text>
          </View>
          <View style={{ width: (width * 15) / 100, alignItems: "center" }}>

            <Text style={{ color: selectedItem === sizeItem ? '#9f0202' : '#404040', fontSize: 15 }}>{sizeItem.count}</Text>
          </View>
        </View>
      </TouchableOpacity>
    ))}
  </View>
) : null}

                  
                    {selectedButton === 'Color' ? (
                      <View
                        style={{
                          width: (width * 60) / 100,
                          alignSelf: 'center',
                          
                        }}>
                        {colors.map((color, index) => (
                        <TouchableOpacity 
                        key={index} 
                        onPress={() => handleItemClick(color)} 
                        >
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5, justifyContent: "space-between" }}>
                        <CheckBox
                      
                value={selectedItem === color}
                tintColors={{ true: '#9f0202', false: '#404040' }}
              />
                 <View style={{width: (width * 30) / 100,alignSelf:"flex-start"}}>

                          <Text  style={{color: selectedItem === color ? '#9f0202' : '#404040',fontSize: 15,}}>{color.display}</Text>
                       </View>
                       <View style={{width: (width * 25) / 100,alignSelf:"center"}}>
                          <Text  style={{color: selectedItem === color ? '#9f0202' : '#404040',fontSize: 15,}}>{color.count}</Text>
                       </View>
                        </View>
                      </TouchableOpacity>
                        ))}
                      </View>
                    ) : null}
                    {selectedButton === 'Category' ? (
                      <View
                        style={{
                          width: (width * 60) / 100,
                          alignSelf: 'center',
                        }}>
                        {category && category.length > 0 ? (
                          category.map((categoryItem, index) => (
                            <TouchableOpacity key={index} 
                            onPress={() => handleItemClick(categoryItem)} 
                            style={{
                              // backgroundColor: selectedItem === categoryItem ? 'green' : 'transparent',
                              
                            }}
                            >
                            <View style={{ flexDirection: 'row', marginVertical: 5}}>
                         
                            <CheckBox
                value={selectedItem === categoryItem}
               
                tintColors={{ true: '#9f0202', false: '#404040' }}
              />

                              <View style={{width: (width * 30) / 100,alignItems:"flex-start",}}>

                              <Text style={{color: selectedItem === categoryItem ? '#9f0202' : '#404040',fontSize: 15,}}>{categoryItem.display}</Text>
                              </View>
                             <View style={{alignItems:"center",width: (width * 10) / 100,}}>

                              <Text style={{color: selectedItem === categoryItem ? '#9f0202' : '#404040',fontSize: 15,}}>{categoryItem.count}</Text>
                             </View>
                            </View>
                          </TouchableOpacity>
                          ))
                        ) : (
                          <Text>No categories available</Text>
                        )}
                      </View>
                    ) : null}
                    {selectedButton === 'Price' ? (
                      <View style={{width: (width * 60) / 100, padding: 10}}>
                        <Text style={{fontSize: 15, color: '#404040'}}>
                          Price Range: {minValue}-{maxValue}
                        </Text>
                        <View></View>
                        <View style={styles.sliderWrapper}>
                          <MultiSlider
                            values={[minValue, maxValue]}
                            min={price.length > 0 ? price[0].value : 0}
                            max={price.length > 0 ? price[1].value : 499}
                            sliderLength={150}
                            onValuesChange={onValuesChange}
                            selectedStyle={{
                              backgroundColor: '#9f0202',
                            }}
                            unselectedStyle={{
                              backgroundColor: '#ccc',
                            }}
                            containerStyle={{
                              height: 40,
                            }}
                            trackStyle={{
                              height: 3,
                            }}
                          />
                        </View>
                      </View>
                    ) : null}
                  </View>
                </ScrollView>
                </View>
              </View>
          )}

        
              
            </View>
          </View>
         
          
        </View>
         
        </View>
      </Modal>
          <View>
            {products.length === 0 && responseMessage ? (
              <Text>{responseMessage}</Text>
            ) : (
              <View style={{width: width, marginVertical: 10}}>
                <FlatList
                  data={products}
                  renderItem={({item, index}) => (
                    <View
                      key={index}
                      style={{
                        width: width / 2 - 20,
                        marginBottom: 20,
                        position: 'relative',
                        padding: 10,
                      }}>
                      <View
                        style={{
                          borderRadius: 4,
                          overflow: 'hidden',
                          borderWidth: 0.4,
                          position: 'relative',
                        }}>
                          {isloading &&
                          <View style={{justifyContent:"center",alignSelf:"center",alignContent:"center",borderRadius:1,zIndex:0,width:width,position:"absolute",height:height*20/100,backgroundColor:"#fff"}}>
                            <ActivityIndicator size="small" color="#9f0202"/>
                          </View>
                          }
                      {
                       <Image
                       source={{uri: item.image}}
                       style={{
                         width: '100%',
                         height: height * 0.25,
                         resizeMode: 'cover',
                       }}
                       onLoadStart={()=>imageloder(true,'onLoadStart')}
                        onLoadEnd={()=>imageloder(false,'onLoadStart')}
                     />
                      } 
                        {item.special_offer && (
                          <Image
                            source={{uri: item.special_offer}}
                            style={{
                              position: 'absolute',
                              top: 0,
                              right: 0,
                              width: width * 0.2,
                              height: height * 0.1,
                              resizeMode: 'cover',
                            }}
                          />
                        )}
                        <View
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                          }}>
                          <TouchableOpacity
                            style={{position: 'absolute', top: 5, left: 10}}
                            onPress={() => {
                              handleHeartClick(item);
                              handlePress(item);
                            }}>
                            <View
                              style={{
                                borderRadius: 15,
                                backgroundColor: '#fff',
                                borderColor: '#BFBCBC',
                                borderWidth: 1,
                                width: width * 0.08,
                                height: height * 0.04,
                              }}>
                              <Image
                                source={
                                  addedToWishlist &&
                                  clickedItems.includes(item.id)
                                    ? require('../../assests/selectedHeart.png')
                                    : require('../../assests/heart.png')
                                }
                                style={{
                                  width: width * 0.05,
                                  height: height * 0.04,
                                  resizeMode: 'contain',
                                  alignSelf: 'center',
                                }}
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={{marginHorizontal: 10}}>
                        <Text style={{fontSize: 15, color: 'black'}}>
                          {item.name}
                        </Text>
                        <Text style={{fontSize: 13, color: '#980404'}}>
                          SAR {item.price}
                        </Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    paddingBottom: height * 0.25,
                  }}
                />
              </View>
            )}
          </View>
        </View>
      )}
      <Modal isVisible={isModalVisible} style={styles.modal} onBackdropPress={toggleModal} backdropOpacity={0.5}>
        <View style={styles.modalContent}>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 20, color: "#9f0202", marginHorizontal: 10 }}>Sort By</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItemnew}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </Modal>
      
    </View>
  );
}
export default Products;
const styles = StyleSheet.create({
  itemview:{
    backgroundColor:"#fff"
  },
 
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modal2: {
    justifyContent: 'flex-end',
    margin: 0,
    
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 20
  },
  Content: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: height * 90 / 100,
    marginTop: 10
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    marginTop: 30,
  },
  row: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    width: 200,
    height: 200,
    textAlign: "center",
    fontSize: 18,
    color: "black",
    borderColor: "black",
  },
  icon: {

    width: 24,
    height: 24,
    marginRight: 20
  },
  container: {
    flex: 1,
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    padding: 10,
    color: '#9f0202'
  },
  filterButtonText: {
    fontSize: 16,
    textAlign: "center"
  },
  filterButton: {
    padding: 10,
    marginVertical: 2
    , width: width * 30 / 100,
    borderWidth:1
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.6,
    width: '100%',
    padding: 10
  },
  itemText: {
    marginLeft: 8,
    fontSize: 15,
    color: "gray",
    
  },
  closetext:{
    marginLeft: 8,
    fontSize: 15,
    color: "gray",
  },
  selectedText: {
    color:  "#fff" ,
  },
  sliderWrapper: {
    marginLeft: 10
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
