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
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { CategoryFilterAPI } from '../../redux/mainStack/mainStackApi';
import { setproductfilterlistStart, setproductfilterlistSuccess, setproductfilterlistFailure } from '../../redux/mainStackSlice/addresslistSlice';
const { width, height } = Dimensions.get('window');
const Products = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isfilterModalVisible, setfilterModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [products, setProducts] = useState([]);
  const [clickedItems, setClickedItems] = useState([]);
  const [selectedButton, setSelectedButton] = useState('Size');
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
  const toggleModalFilter = () => {
    setfilterModalVisible(!isfilterModalVisible);
  };
  const [colors, setColors] = useState([]);
  const [category, setCategory] = useState([]);
  const [size, setSize] = useState([]);
  const [prize, setprize] = useState([]);
  const [wishlistMessage, setWishlistMessage] = useState('');
  useEffect(() => {
    const fetchCategoryFilter = async () => {
      dispatch(setproductfilterlistStart());
      try {
        const store_id = 1;
        const category_id = 2;
        const response = await CategoryFilterAPI(store_id, category_id);
        const availableFilters = response.data.availablefilter;
        setColors(availableFilters.Color);
        setCategory(availableFilters.Category);
        setSize(availableFilters.Size);
        setprize(availableFilters.Price);
        prize.forEach(item => {
          console.log(`Display: ${item.display}, Value: ${item.value}`);
        });
        dispatch(setproductfilterlistSuccess(response));
      } catch (error) {
        console.log("error::::", error);
        dispatch(setproductfilterlistFailure(error.message));
      }
    };
    fetchCategoryFilter();
  }, [dispatch]);
  const route = useRoute();
  const { number } = route.params;
  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        console.log('User Data String:', userDataString);
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          const { id } = userData;
          console.log('User ID:', id);
          const category_id = number;
          const PageSize = 20;
          const CurPage = 1;
          const customer_id = id ? id : 0;
          const color = selectedcolor ? selectedcolor.value : '';
          const size = selectedSize ? selectedSize.value : '';
          const sort_by = selectedId === 3 || selectedId === 4 ? 'price' : 'position';
          const sort_action = selectedId === 1 || selectedId === 4 ? 'DESC' : 'ASC';
          const store_id = 1;
          const price_from = minValue ? minValue : '';
          const price_to = maxValue ? maxValue : '';
          dispatch(productsStart());
          AllCategory(store_id, category_id, PageSize, CurPage, customer_id, color, size, sort_by, sort_action, price_from, price_to)
            .then(response => {
              console.log("Products Response:", response);
              setIsLoading(false)
              setProducts(response.data);
              dispatch(productsSuccess(response.data));
            })
            .catch(error => {
              dispatch(productsFailure(error.message));
              console.log("Error:", error);
            });
        } else {
          console.error('No user data found');
        }
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
    fetchUserData();
  }, [number, selectedId, selectedcolor, selectedSize, minValue, maxValue]);
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
      <View style={{ flexDirection: "column", borderWidth: 0.8, padding: 5, borderColor: "lightgray", width: width * 80 / 100, alignSelf: "center", height: height * 8 / 100 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
          <RadioButton
            value={item.id}
            status={selectedId === item.id ? 'checked' : 'unchecked'}
            onPress={() => {
              setSelectedId(item.id);
              console.log("Selected  id:", item.id);
              setModalVisible(false);
            }}
            color="#9f0202"
          />
          <Text style={{ marginLeft: 8, fontSize: 15, color: "gray" }}>{item.label}</Text>
        </View>
      </View>
    );
  };
  const data = [
    { id: 1, label: 'Relevance' },
    { id: 2, label: 'New Arrivals' },
    { id: 3, label: 'Price Low-High' },
    { id: 4, label: 'Price High-Low' },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [minValue, setMinValue] = useState(prize.length > 0 ? prize[0].value : 0);
  const [maxValue, setMaxValue] = useState(prize.length > 0 ? prize[1].value : 499);
  const [selectedcolor, setSelectedcolor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedcat, setSelectedcat] = useState(null);
  (null);
  const handleApplyPress = () => {

    if (selectedcat) {
      // console.log("Selected Category Display:", selectedcat.display);
      console.log("Selected Category Value:", selectedcat.value);
    }
    if (selectedSize) {
      // console.log("Selected Size Display:", selectedSize.display);
      console.log("Selected Size Value:", selectedSize.value);
    }
    if (selectedcolor) {
      // console.log("Selected Size Display:", selectedcolor.display);
      console.log("Selected Size Value:", selectedcolor.value);
    }
    if (minValue !== null) {
      console.log("Minimum Prize Value:", minValue);
    }
    if (maxValue !== null) {
      console.log("Maximum Prize Value:", maxValue);
    }

    if (!selectedcat && !selectedSize && !selectedcolor && minValue === null && maxValue === null) {
      console.log("No item selected");
    }
    setfilterModalVisible(false);
    setIsLoading(false);
  };
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
  const onValuesChange = (values) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
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
        <ScrollView>

          <View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
              borderRadius: 5,
              padding: 5,
              borderColor: 'lightgray',
              borderWidth: 1,
              width: width * 0.9,
              backgroundColor: "#fff", alignSelf: "center",
            }}>
              <TouchableOpacity onPress={toggleModal} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../../assests/iconSort.png')}
                  style={{ width: 20, height: 20, marginLeft: 5 }}
                />
                <Text style={{
                  color: 'gray',
                  fontSize: 17,
                  textAlign: 'center',
                  fontWeight: "200", paddingHorizontal: 5
                }}>Sort</Text>
              </TouchableOpacity>
              <View style={{
                height: 30,
                width: 1,
                backgroundColor: 'gray',
                marginHorizontal: 0,
              }}>
              </View>
              <TouchableOpacity
                onPress={toggleModalFilter}
                style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../../assests/iconFilter.png')}
                  style={{ width: 20, height: 20, marginLeft: 5 }}
                />
                <Text style={{
                  color: 'gray',
                  fontSize: 17,
                  textAlign: 'center',
                  fontWeight: "200", paddingHorizontal: 5
                }}>Filter</Text>
              </TouchableOpacity>
            </View>

            <View style={{ width: width, marginVertical: 10 }}>

              <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 10 }}>

                {products.map((item, index) => (
                  <View key={index} style={{ width: (width - 40) / 3, marginBottom: 20, }}>
                    <View style={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      borderWidth: 0.4,
                      position: 'relative',
                    }}>
                      <Image
                        source={{ uri: item.image }}
                        style={{ width: '100%', height: height * 0.25, resizeMode: 'cover' }}
                      />
                      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                        <TouchableOpacity style={{ position: 'absolute', top: 5, left: 10 }} onPress={() => { handleHeartClick(item); handlePress(item); }}>
                          <View style={{ borderRadius: 15, backgroundColor: "#fff", borderColor: "#BFBCBC", borderWidth: 1, width: width * 0.08, height: height * 0.04 }}>
                            <Image
                              source={addedToWishlist && clickedItems.includes(item.id) ? require('../../assests/selectedHeart.png') : require('../../assests/heart.png')}
                              style={{ width: width * 0.05, height: height * 0.04, resizeMode: 'contain', alignSelf: "center" }}
                            />
                          </View>
                        </TouchableOpacity>
                        {item.special_offer && (
                          <Image
                            source={{ uri: item.special_offer }}
                            style={{ position: 'absolute', left: 35, width: width * 0.2, height: height * 0.1, resizeMode: 'cover' }}
                          />
                        )}
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
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
      <Modal
        isVisible={isfilterModalVisible}
        style={styles.modal}
        onBackdropPress={toggleModalFilter}
        backdropOpacity={0.5}
      >
        <View style={styles.modalContent}>
          <View style={{ borderColor: "lightgray", width: width * 90 / 100, alignSelf: "center", height: height * 70 / 100 }}>
            <View >
              <View style={{ flexDirection: "row", justifyContent: "space-between", width: width * 90 / 100, }}>
                <View>
                  <Text style={{ fontSize: 19, color: "#9f0202" }}>Filter By</Text>
                </View>
                <View style={{ marginRight: 10, flexDirection: "row", justifyContent: "space-between" }}>
                  <TouchableOpacity onPress={() => console.log('Clear button pressed')} style={{ width: width * 20 / 100, borderRadius: 1, borderWidth: 1, borderColor: "green", borderRightColor: "red", marginRight: 10, padding: 5 }}>
                    <Text style={{ textAlign: "center" }}>Clear</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleApplyPress} style={{ width: width * 20 / 100, borderRadius: 1, borderWidth: 1, borderColor: "green", borderRightColor: "red", backgroundColor: "#9f0202", padding: 5 }}>
                    <Text style={{ textAlign: "center", color: "#fff" }}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.line} />
              <View style={{ width: width, justifyContent: "space-between", flexDirection: "row", marginVertical: 10 }}>
                <View style={{ justifyContent: 'space-between', width: width * 40 / 100, height: height * 10 / 100 }}>
                  {['Size', 'Color', 'Category', 'Prize'].map((button, index) => (
                    <TouchableHighlight
                      key={index}
                      style={[
                        styles.filterButton,
                        {
                          backgroundColor: selectedButton === button ? '#9f0202' : 'lightgray',
                          borderColor: selectedButton === button ? '#9f0202' : '#9f0202',
                        },
                      ]}
                      underlayColor="#ccc"
                      onPress={() => setSelectedButton(button)}
                    >
                      <View style={{ alignSelf: "center" }}>
                        <Text style={[styles.filterButtonText, { color: selectedButton === button ? '#fff' : '#9f0202' }]}>
                          {button}
                        </Text>
                      </View>
                    </TouchableHighlight>
                  ))}
                </View>
                <ScrollView>
                  <View style={{ width: width * 60 / 100 }}>
                    {selectedButton === 'Size' ? (
                      <View style={{ width: width * 40 / 100, alignSelf: "center" }}>
                        {size.map((sizeItem, index) => (
                          <TouchableOpacity key={index} onPress={() => handleItemClick(sizeItem)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: "space-between" }}>
                              <Text style={[styles.itemText, selectedItem === sizeItem && styles.selectedText]}>{sizeItem.display}</Text>
                              <Text style={[styles.itemText, selectedItem === sizeItem && styles.selectedText]}>{sizeItem.value}</Text>
                            </View>
                          </TouchableOpacity>
                        ))}
                      </View>
                    ) : null}
                    {selectedButton === 'Color' ? (
                      <View style={{ width: width * 40 / 100, alignSelf: "center" }}>
                        {colors.map((color, index) => (
                          <TouchableOpacity key={index} onPress={() => handleItemClick(color)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: "space-between" }}>
                              <Text style={[styles.itemText, selectedItem === color && styles.selectedText]}>{color.display}</Text>
                              <Text style={[styles.itemText, selectedItem === color && styles.selectedText]}>{color.value}</Text>
                            </View>
                          </TouchableOpacity>
                        ))}
                      </View>
                    ) : null}
                    {selectedButton === 'Category' ? (
                      <View style={{ width: width * 40 / 100, alignSelf: "center" }}>
                        {category.map((categoryItem, index) => (
                          <TouchableOpacity key={index} onPress={() => handleItemClick(categoryItem)}>
                            <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: "space-between" }}>
                              <Text style={[styles.itemText, selectedItem === categoryItem && styles.selectedText]}>{categoryItem.display}</Text>
                              <Text style={[styles.itemText, selectedItem === categoryItem && styles.selectedText]}>{categoryItem.value}</Text>
                            </View>
                          </TouchableOpacity>
                        ))}
                      </View>
                    ) : null}
                    {selectedButton === 'Prize' ? (
                      <View style={{ width: width * 60 / 100, padding: 10 }}>
                        <Text style={{ fontSize: 15, color: "#9f0202", }}>Price Range: {minValue}-{maxValue}</Text>
                        <View>
                        </View>
                        <View style={styles.sliderWrapper}>
                          <MultiSlider
                            values={[minValue, maxValue]}
                            min={prize.length > 0 ? prize[0].value : 0}
                            max={prize.length > 0 ? prize[1].value : 499}
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
          </View>
        </View>
      </Modal>
    </View>
  );
}
export default Products;
const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modal2: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
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
    fontSize: 17,
    textAlign: "center"
  },
  filterButton: {
    padding: 10,
    marginVertical: 2
    , width: width * 40 / 100
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
  selectedText: {
    color: "#990107",
  },
  sliderWrapper: {
    marginLeft: 10
    // alignItems: 'center',
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
