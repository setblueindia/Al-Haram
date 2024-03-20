<<<<<<< HEAD
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
=======
// import { TouchableHighlight, Animated, StyleSheet, View, Text, SafeAreaView, Pressable, Image, ScrollView, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
// import React, { useState, useEffect, useRef } from 'react'
// import { useNavigation, useRoute } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Modal from 'react-native-modal';
// import { RadioButton } from 'react-native-paper';
// import { useDispatch, useSelector } from 'react-redux';
// import { AllCategory } from '../../redux/mainStack/mainStackApi';
// import { setCategoryList } from '../../redux/mainStackSlice/categoryList';
// import { CategoryFilterAPI } from '../../redux/mainStack/mainStackApi';
// import MultiSlider from '@ptomasroos/react-native-multi-slider'
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import { AddWishlist } from '../../redux/mainStack/mainStackApi'; 
// import { addWishlistStart, addWishlistSuccess, addWishlistFailure } from '../../redux/mainStackSlice/addWishlistSlice'; // Import your Redux slice actions
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const { width, height } = Dimensions.get('window');
// const Products = () => {
  
//   const [range, setRange] = useState([1, 50]);
//   const onValuesChange = (values) => {
//     setRange(values);
//   };
//   const navigation = useNavigation();
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [isfilterModalVisible, setfilterModalVisible] = useState(false);
//   const [selectedId, setSelectedId] = useState(null);
//   const HomeScreen = () => {
//     navigation.navigate('Home');
//   };
//   const toggleModalFilter = () => {
//     setfilterModalVisible(!isfilterModalVisible);
//   };
//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };
//   const data = [
//     { id: 1, label: 'Relevance' },
//     { id: 2, label: 'New Arrivals' },
//     { id: 3, label: 'Price Low-High' },
//     { id: 4, label: 'Price High-Low' },
//   ];
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const scaleValue = useRef(new Animated.Value(1)).current;
//   const handlstore = () => {
//     setCounter(counter + 1);
//     Animated.sequence([
//       Animated.timing(scaleValue, {
//         toValue: 1.2,
//         duration: 100,
//         useNativeDriver: false,
//       }),
//       Animated.timing(scaleValue, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: false,
//       }),
//     ]).start();
//   };
//   const categoryList = useSelector((state) => state.categoryList.categoryList);
//   const route = useRoute();
//   const { number } = route.params;
//   useEffect(() => {
//     const store_id = 1;
//     const category_id = selectedcat ? selectedcat.value : number;  
//     const PageSize = 20;
//     const CurPage = 1;
//     const customer_id = 14;
//     const color = selectedcolor ? selectedcolor.value : '';
//     const size = selectedSize ? selectedSize.value : '';
//     const sort_by = selectedId === 3 || selectedId === 4 ? 'price' : 'position';
//     const sort_action = selectedId === 1 || selectedId === 4 ? 'DESC' :'ASC';
//     const fetchCategoryList = async () => {
//       try {
//         const categoryListData = await AllCategory(store_id, category_id, PageSize, CurPage, customer_id, color, size,sort_by,sort_action);
//         dispatch(setCategoryList(categoryListData));
//         console.log('Category List Response:', categoryListData);
//       } catch (error) {
//         console.error('Error fetching category list', error);
//       }
//     };
//     fetchCategoryList();
//   }, [dispatch, number]);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [selectedcat, setSelectedcat] = useState(null);
//   const [selectedcolor, setSelectedcolor] = useState(null);
//   const [selectedButtonValue, setSelectedButtonValue] = useState(null);
//   const handleApplyPress = () => {
//     if (selectedcat) {
//       console.log("Selected Category Display:", selectedcat.display);
//       console.log("Selected Category Value:", selectedcat.value);
//     }
  
//     if (selectedSize) {
//       console.log("Selected Size Display:", selectedSize.display);
//       console.log("Selected Size Value:", selectedSize.value);
//     }
//     if (selectedcolor) {
//       console.log("Selected Size Display:", selectedcolor.display);
//       console.log("Selected Size Value:", selectedcolor.value);
//     }
//     if (!selectedcat && !selectedSize && !selectedcolor) {
//       console.log("No item selected");
//     }
//     setModalVisible(false);
//   };
//   const [colors, setColors] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [size, setSize] = useState([]);
//   const [prize, setprize] = useState([]);
//   useEffect(() => {
//     const storeId = 1;
//      const category_id =2;
//     CategoryFilterAPI(storeId, category_id)
//       .then(responseData => {
//         if (responseData.status === 1 && responseData.data) {
//           const availableFilters = responseData.data.availablefilter;
//           if (availableFilters.Color) {
//             setColors(availableFilters.Color);
//             availableFilters.Color.forEach(color => {
//             });
//           }
//           if (availableFilters.Category) {
//             setCategory(availableFilters.Category);
//             availableFilters.Category.forEach(category => {
//             });
//           }
//           if (availableFilters.Price) {
//             console.log("Price Filters:", availableFilters.Price);
//             setprize(availableFilters.Price);

//             availableFilters.Price.forEach((priceFilter, index) => {
//               console.log(`Display: ${priceFilter.display}, Value: ${priceFilter.value}`);
//               if (index === 0) {
//                 console.log(`Value at index 0: ${priceFilter.value}`);
//               }
//               if (index === 1) {
//                 console.log(`Value at index 1: ${priceFilter.value}`);
//               }
//             });
//           }
//           if (availableFilters.Size) {
//             setSize(availableFilters.Size);
//             availableFilters.Size.forEach(size => {
//             });
//           }
//           setLoading(false);
//         } else {
//           setLoading(false);
//         }
//       })
//       .catch(error => {
//         setLoading(false);
//       });
//   }, []);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userDataString = await AsyncStorage.getItem('userData');
//         if (userDataString) {
//           const userData = JSON.parse(userDataString);
//           console.log('Retrieved user id:', userData.id);
//           if (userData.id) {
//             const customer_id = userData.id; 
//             const productId = selectedId; 
//             const action = 'true';
//             if (productId) {
//               dispatch(addWishlistStart());
//               AddWishlist(customer_id, productId, action)
//                 .then(response => {
//                   console.log("new wishlist add:", response); 
//                   dispatch(addWishlistSuccess(response));
//                 })
//                 .catch(error => {
//                   dispatch(addWishlistFailure(error));
//                   console.log("error response:", error); 
//                 });
//             }
//           } else {
//             console.log('No user id found in user data.');
//           }
//         } else {
//           console.log('No user data found in AsyncStorage.');
//           // Redirect to login screen
//           navigation.navigate('Login');
//         }
//       } catch (error) {
//         console.error('Error retrieving data from AsyncStorage:', error);
//       }
//     };
//     fetchData();
//   }, [selectedId, dispatch, navigation]);
//   const [clickedItems, setClickedItems] = useState([]);

//   const renderProductItem = ({ item }) => {
   
//     const handleHeartClick = async () => {
//       // Check if user is logged in
//       try {
//         const userDataString = await AsyncStorage.getItem('userData');
//         if (!userDataString) {
//           navigation.navigate('Login');
//           return;
//         }
//         handlePress();
//       } catch (error) {
//         console.error('Error retrieving user data:', error);
//       }
//     };
  
//     const handlePress = () => {
//       if (clickedItems.includes(item.id)) {
//         // If already clicked, remove from clickedItems
//         setClickedItems(clickedItems.filter(clickedId => clickedId !== item.id));
//       } else {
//         // If not clicked, add to clickedItems
//         setClickedItems([...clickedItems, item.id]);
//       }
//     };
  
//     const isItemClicked = clickedItems.includes(item.id);
//     return (
//       <View style={{
//         borderRadius: 3,
//         overflow: 'hidden',
//         width: width * 30 / 100,
//         height: height * 25 / 100,
//         borderWidth: 0.4,
//         marginBottom: 10,
//         position: 'relative',
//         marginHorizontal: 5,
//       }}>
//         <Image
//           source={{ uri: item.image }}
//           style={{ flex: 1, resizeMode: 'cover' }}
//         />
//         <View style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//         }}>
//           <TouchableOpacity
//             style={{
//               position: 'absolute',
//             }}
//             onPress={handleHeartClick}
//           >
//             <View style={{
//               borderRadius: 15,
//               backgroundColor: "#fff",
//               borderColor: "#BFBCBC",
//               borderWidth: 1,
//               width: width * 8 / 100,
//               height: height * 4 / 100,
//               top: 5,
//               left: 10,
//             }}>
//               <Image
//                 source={
//                   isItemClicked
//                     ? require('../../assests/selectedHeart.png')
//                     : require('../../assests/iconHeart.png')
//                 }
//                 style={{
//                   position: 'absolute',
//                   top: 2,
//                   left: 4,
//                   width: width * 5 / 100,
//                   height: height * 3 / 100,
//                   resizeMode: 'contain',
//                   tintColor: '#980404',
//                 }}
//               />
//             </View>
//           </TouchableOpacity>
//           {item.special_offer && (
//             <Image
//               source={{ uri: item.special_offer }}
//               style={{
//                 position: 'absolute',
//                 left: 35,
//                 width: width * 20 / 100,
//                 height: height * 10 / 100,
//                 resizeMode: 'cover',
//               }}
//             />
//           )}
//         </View>
//       </View>
//     );
//   };
  
//   const renderItemnew = ({ item }) => {
//     return (
//       <View style={{ flexDirection: "column", borderWidth: 0.8, padding: 5, borderColor: "lightgray" }}>
//         <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
//           <RadioButton
//             value={item.id}
//             status={selectedId === item.id ? 'checked' : 'unchecked'}
//             onPress={() => {
//               setSelectedId(item.id);
//               console.log("Selected  id:", item.id);
//               setModalVisible(false);
//             }}
//             color="#9f0202"
//           />
//           <Text style={{ marginLeft: 8, fontSize: 15, color: "gray" }}>{item.label}</Text>
//         </View>
//       </View>
//     );
//   };
//   const handleGoBack = () => {
//     navigation.goBack();
//   };
//   const [selectedButton, setSelectedButton] = useState('Size');
//   const handlePressbutton = (button) => {
//     setSelectedButton(button);
//   };
//   return (
//     <View style={{ backgroundColor: "#fff", flex: 1, height: height }}>
//       <View style={{ backgroundColor: "#fff", justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
//         <View style={{ marginHorizontal: 10 }}>

//           <TouchableOpacity onPress={handleGoBack}>
//             <Ionicons name="arrow-back" size={28} color="black" />
//           </TouchableOpacity>
//         </View>
//         <View style={{}}>

//           <TouchableOpacity onPress={HomeScreen}>
//             <Image
//               source={require('../../assests/Logo.png')}
//               style={{
//                 width: width * 0.3, height: height * 0.1, resizeMode: "contain",
//               }}
//             />
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity onPress={handlstore}>
//           <View style={styles.iconContainer}>
//             <Image
//               source={require('../../assests/shopping-cart.png')}
//               style={styles.icon}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>
//       {loading ? (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 300 }}>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View>
//       ) : (

//      <View>
//       <View style={{
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginTop: 10,
//         borderRadius: 5,
//         padding: 5,
//         borderColor: 'lightgray',
//         borderWidth: 1,
//         width: width * 0.9,
//         backgroundColor: "#fff", alignSelf: "center",
//       }}>
//         <TouchableOpacity onPress={toggleModal} style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <Image
//             source={require('../../assests/iconSort.png')}
//             style={{ width: 20, height: 20, marginLeft: 5 }}
//           />
//           <Text style={{
//             color: 'gray',
//             fontSize: 17,
//             textAlign: 'center',
//             fontWeight: "200", paddingHorizontal: 5
//           }}>Sort</Text>
//         </TouchableOpacity>
//         <View style={{
//           height: 30,
//           width: 1,
//           backgroundColor: 'gray',
//           marginHorizontal: 0,
//         }}></View>
//         <TouchableOpacity onPress={toggleModalFilter} style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <Image
//             source={require('../../assests/iconFilter.png')} 
//             style={{ width: 20, height: 20, marginLeft: 5 }} 
//           />
//           <Text style={{
//             color: 'gray',
//             fontSize: 17,
//             textAlign: 'center',
//             fontWeight: "200", paddingHorizontal: 5
//           }}>Filter</Text>
//         </TouchableOpacity>
//       </View>
//       <View>
//         <View style={{paddingBottom:100}}>
//         <FlatList
//       data={categoryList.data}
//       renderItem={renderProductItem}
//       numColumns={3}
//       contentContainerStyle={{ flexGrow: 2}}
//     />
//         </View>
//       </View>
//       <Modal isVisible={isModalVisible} style={styles.modal} onBackdropPress={toggleModal} backdropOpacity={0.5}>
//         <View style={styles.modalContent}>
//           <View style={{ marginBottom: 10 }}>
//             <Text style={{ fontSize: 18, color: "#9f0202", }}>Sort By</Text>
//           </View>
//           <FlatList
//             data={data}
//             renderItem={renderItemnew}
//             keyExtractor={(item) => item.label}
//           />
//         </View>
//       </Modal>
//       <Modal isVisible={isfilterModalVisible} style={styles.modal2} onBackdropPress={toggleModalFilter} backdropOpacity={0.5}>
//         <View style={styles.Content}>
//           <View style={{ alignSelf: "flex-end", margin: 15 }}>
//             <TouchableOpacity onPress={toggleModalFilter}>
//               <SimpleLineIcons name="close" size={25} color="#9f0202" />
//             </TouchableOpacity>
//           </View>
//           <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
//             <View style={{ paddingHorizontal: 20 }}>
//               <Text style={{ fontSize: 22, color: "#9f0202" }}>Filter By</Text>
//             </View>
//             <View style={{ flexDirection: 'row', justifyContent: "space-between", marginRight: 10 }}>
//               <TouchableOpacity style={{ width: width * 20 / 100, borderRadius: 1, borderWidth: 1, borderColor: "green", borderRightColor: "red", marginRight: 10, padding: 5 }}>
//                 <Text style={{ textAlign: "center" }}>Clear</Text>
//               </TouchableOpacity>

//               <TouchableOpacity 
//                style={{ width: width * 20 / 100, borderRadius: 1, borderWidth: 1, borderColor: "green", borderRightColor: "red", backgroundColor: "#9f0202", padding: 5 }}
//               onPress={handleApplyPress}
//               >
//                 <Text style={{ textAlign: "center", color: "#fff" }}>Apply</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={{ paddingVertical: 10, }}>
//             <View
//               style={{
//                 borderBottomColor: '#eae0e0',
//                 borderBottomWidth: 1,

//               }}
//             />
//             <View style={{ justifyContent: "space-between", flexDirection: "row", height: height }}>
//               <View style={{ 
              
//                 backgroundColor: "#f9f8f8",
//                  width: width * 40 / 100 }}>
//                 <View style={{}}>
//                   <TouchableHighlight
//                     underlayColor="#f8f2f2"
//                     style={{
//                       backgroundColor: selectedButton === 'Size' ? '#f8f2f2' : '#fff',
//                       padding: 15,
//                       borderBottomWidth: 1,
//                       borderColor: '#f8f2f2',
//                     }}
//                     onPress={() => handlePressbutton('Size')}
//                   >
//                     <Text style={{ fontSize: 16, textAlign: 'center' }}>Size</Text>
//                   </TouchableHighlight>
//                   <TouchableHighlight
//                     underlayColor="#f8f2f2"
//                     style={{
//                       backgroundColor: selectedButton === 'Category' ? '#f8f2f2' : '#fff',
//                       padding: 15,
//                       borderBottomWidth: 1,
//                       borderColor: '#f8f2f2',
//                     }}
//                     onPress={() => handlePressbutton('Category')}
//                   >
//                     <Text style={{ textAlign: 'center' }}>Category</Text>
//                   </TouchableHighlight>
//                   <TouchableHighlight
//                     underlayColor="#f8f2f2"
//                     style={{
//                       backgroundColor: selectedButton === 'Prize' ? '#f8f2f2' : '#fff',
//                       padding: 15,
//                       borderBottomWidth: 1,
//                       borderColor: '#f8f2f2',
//                     }}
//                     onPress={() => handlePressbutton('Prize')}
//                   >
//                     <Text style={{ textAlign: 'center' }}>Prize</Text>
//                   </TouchableHighlight>
//                   <TouchableHighlight
//                     underlayColor="#f8f2f2"
//                     style={{
//                       backgroundColor: selectedButton === 'Color' ? '#f8f2f2' : '#fff',
//                       padding: 15,
//                       borderBottomWidth: 1,
//                       borderColor: '#f8f2f2',
//                     }}
//                     onPress={() => handlePressbutton('Color')}
//                   >
//                     <Text style={{ textAlign: 'center' }}>Color</Text>
//                   </TouchableHighlight>
//                 </View>
//               </View>
//               <View style={{ width: 1, backgroundColor: '#f8f2f2' }} />
//               <View style={{ backgroundColor: "#fff", width: width * 60 / 100, paddingBottom: 10 }}>
//                 <ScrollView>
//                   <View >
//                     {selectedButton === 'Prize' && (
//                       <View style={styles.container}>
//                         <Text style={styles.text}> {range[0]} - {range[1]} </Text>
//                         <View style={{ alignSelf: "center", }}>

//                           <MultiSlider
//                             values={range}
//                             min={0}
//                             max={499}
//                             step={1}
//                             sliderLength={160}
//                             onValuesChange={onValuesChange}
//                             allowOverlap
//                             snapped
//                           />
//                         </View>

//                       </View>
//                     )}

//                   </View>
//                   {selectedButton === 'Size' && size.map(s => (
//                     <TouchableOpacity key={s.id} 
//                     onPress={() => {
//                       setSelectedSize(s);
//                       setSelectedButtonValue(s.value); 
//                     }}
//                     >
//                       <View style={{
//                         justifyContent: "space-between",
//                         flexDirection: "row",
//                         paddingVertical: 10,
//                         width: width * 50 / 100,
//                         alignSelf: "center",

//                       }}>
//                        <Text style={{
//         color: selectedSize && selectedSize.display === s.display ? '#9f0202' : 'black',
//         fontWeight: selectedSize && selectedSize.value === s.value ? 'bold' : 'normal', // Add bold style for selected size
//       }}>
//         {s.display}
//       </Text>
//       <Text style={{
//         color: selectedSize && selectedSize.value === s.value ? '#9f0202' : 'black',
//         fontWeight: selectedSize && selectedSize.value === s.value ? 'bold' : 'normal', // Add bold style for selected size
//       }}>
//         {s.value}
//       </Text>
//                       </View>
//                     </TouchableOpacity>
//                   ))}
//                   {selectedButton === 'Category' && (
//                     category.map((cat) => (
//                       <TouchableOpacity
//                         key={cat.id}
//                         style={{
//                           justifyContent: 'space-between', flexDirection: "row", paddingVertical: 10, width: width * 50 / 100, alignSelf: "center"
//                         }}
//                         onPress={() => {
//                           setSelectedcat(cat);
//                           setSelectedButtonValue(cat.value); // Set the selected display value
//                         }}
//                       >
//                         <Text style={{ color: selectedcat && selectedcat.display === cat.display ? '#9f0202' : 'black' }}>{cat.display}</Text>
//                         <Text style={{ color: selectedcat && selectedcat.value === cat.value ? '#9f0202' : 'black' }}>{cat.value}</Text>
//                       </TouchableOpacity>
//                     ))
//                   )}
//                   {selectedButton === 'Color' && colors.map(color => (
//                     <TouchableOpacity 
//                     onPress={() => {
//                       setSelectedcolor(color);
//                       setSelectedButtonValue(color.value); // Set the selected display value
//                     }}
                  
//                     >
//                       <View style={{ justifyContent: "space-between", flexDirection: "row", paddingVertical: 10, width: width * 50 / 100, alignSelf: "center" }}>
//                         <Text key={color.display} style={{ color: selectedcolor && selectedcolor.display === color.display ? '#9f0202' : 'black' }}>{color.display}</Text>
//                         <Text style={{ color: selectedcolor && selectedcolor.display === color.value ? '#9f0202' : 'black' }}>{color.value}</Text>
//                       </View>
//                     </TouchableOpacity>
//                   ))}
//                 </ScrollView>
//               </View>
//             </View>
//           </View>
//         </View>
//       </Modal>
//       </View>
//         )}
//     </View>
//   )
// }
// export default Products
// const styles = StyleSheet.create({
//   modal: {
//     justifyContent: 'flex-end',
//     margin: 0,
//   },
//   modal2: {
//     justifyContent: 'flex-end',
//     margin: 0,
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 50,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15
//   },
//   Content: {
//     backgroundColor: '#FFF',
//     // padding: 10,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     height: height * 90 / 100,
//     marginTop: 10
//   },
//   button: {
//     backgroundColor: '#3498db',
//     padding: 10,
//     margin: 5,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   table: {
//     borderWidth: 1,
//     borderColor: "black",
//     marginBottom: 10,
//     marginTop: 30,
//   },
//   row: {
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   cell: {
//     flex: 1,
//     padding: 10,
//     borderWidth: 1,
//     width: 200,
//     height: 200,
//     textAlign: "center",
//     fontSize: 18,
//     color: "black",
//     borderColor: "black",
//   },
//   icon: {

//     width: 24,
//     height: 24,
//     marginRight: 20
//   },
//   container: {
//     flex: 1,
//     alignSelf: "center",
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 10,
//     textAlign: "center",
//     padding: 10,
//     color: '#9f0202'
//   },
// });



// // import { TouchableHighlight, Animated, StyleSheet, View, Text, SafeAreaView, Pressable, Image, ScrollView, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
// // import React, { useState, useEffect, useRef } from 'react'
// // import { useNavigation, useRoute } from '@react-navigation/native';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import AntDesign from 'react-native-vector-icons/AntDesign';
// // import Modal from 'react-native-modal';
// // import { RadioButton } from 'react-native-paper';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { AllCategory } from '../../redux/mainStack/mainStackApi';
// // import { setCategoryList } from '../../redux/mainStackSlice/categoryList';
// // import { CategoryFilterAPI } from '../../redux/mainStack/mainStackApi';
// // import MultiSlider from '@ptomasroos/react-native-multi-slider'
// // import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// // import { AddWishlist } from '../../redux/mainStack/mainStackApi'; 
// // import { addWishlistStart, addWishlistSuccess, addWishlistFailure } from '../../redux/mainStackSlice/addWishlistSlice'; // Import your Redux slice actions
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const { width, height } = Dimensions.get('window');
// // const Products = () => {

// //   const navigation = useNavigation();

// //   const [selectedId, setSelectedId] = useState(null);
// //   const HomeScreen = () => {
// //     navigation.navigate('Home');
// //   };

// //   const dispatch = useDispatch();
// //   const [loading, setLoading] = useState(true);
// //   const scaleValue = useRef(new Animated.Value(1)).current;
 
// //   const categoryList = useSelector((state) => state.categoryList.categoryList);
// //   const route = useRoute();
// //   const { number } = route.params;
 
    
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const userDataString = await AsyncStorage.getItem('userData');
// //         if (userDataString) {
// //           const userData = JSON.parse(userDataString);
// //           console.log('Retrieved user id:', userData.id);
// //           if (userData.id) {
// //             const customer_id = userData.id; 
// //             const productId = selectedId; 
// //             const action = 'true';
// //             if (productId) {
// //               dispatch(addWishlistStart());
// //               AddWishlist(customer_id, productId, action)
// //                 .then(response => {
// //                   console.log("new wishlist add:", response); 
// //                   dispatch(addWishlistSuccess(response));
// //                 })
// //                 .catch(error => {
// //                   dispatch(addWishlistFailure(error));
// //                   console.log("error response:", error); 
// //                 });
// //             }
// //           } else {
// //             console.log('No user id found in user data.');
// //           }
// //         } else {
// //           console.log('No user data found in AsyncStorage.');
// //           // Redirect to login screen
// //           navigation.navigate('Login');
// //         }
// //       } catch (error) {
// //         console.error('Error retrieving data from AsyncStorage:', error);
// //       }
// //     };
// //     fetchData();
// //   }, [selectedId, dispatch, navigation]);
// //   const renderProductItem = ({ item }) => {
// //     const toggleSelection = (id) => {
// //       console.log("Your ID--:", id);
// //       if (selectedId !== id) {
// //         setSelectedId(id);
// //       }
// //     };
  
// //     const handleHeartClick = async () => {
// //       try {
// //         const userDataString = await AsyncStorage.getItem('userData');
// //         if (!userDataString) {
// //           navigation.navigate('Login');
// //           return;
// //         }
// //         toggleSelection(item.id);
// //       } catch (error) {
// //         console.error('Error retrieving user data:', error);
// //       }
// //     };
  
// //     return (
// //       <View style={{
// //         borderRadius: 3,
// //         overflow: 'hidden',
// //         width: width * 30 / 100,
// //         height: height * 25 / 100,
// //         borderWidth: 0.4,
// //         marginBottom: 10,
// //         position: 'relative',
// //         marginHorizontal: 5,
// //       }}>
// //         <Image
// //           source={{ uri: item.image }}
// //           style={{ flex: 1, resizeMode: 'cover' }}
// //         />
// //         <View style={{
// //           position: 'absolute',
// //           top: 0,
// //           left: 0,
// //           right: 0,
// //           bottom: 0,
// //         }}>
// //           <TouchableOpacity style={{ position: 'absolute', }} onPress={handleHeartClick}>
// //             <View style={{
// //               borderRadius: 15,
// //               backgroundColor: "#fff",
// //               borderColor: "#BFBCBC",
// //               borderWidth: 1,
// //               width: width * 8 / 100,
// //               height: height * 4 / 100,
// //               top: 5,
// //               left: 10,
// //             }}>
// //               <Image
// //                 source={selectedId === item.id ? require('../../assests/selectedHeart.png') : require('../../assests/iconHeart.png')}
// //                 style={{
// //                   position: 'absolute',
// //                   top: 2,
// //                   left: 4,
// //                   width: width * 5 / 100,
// //                   height: height * 3 / 100,
// //                   resizeMode: 'contain',
// //                   tintColor: selectedId === item.id ? '#980404' : '#000',
// //                 }}
// //               />
// //             </View>
// //           </TouchableOpacity>
// //           {item.special_offer && (
// //             <Image
// //               source={{ uri: item.special_offer }}
// //               style={{
// //                 position: 'absolute',
// //                 left: 35,
// //                 width: width * 20 / 100,
// //                 height: height * 10 / 100,
// //                 resizeMode: 'cover',
// //               }}
// //             />
// //           )}
// //         </View>
// //       </View>
// //     );
// //   };
  

// // // const renderProductItem = ({ item }) => {
// // //   const toggleSelection = (id) => {
  
// // //   console.log("your ID--:", id);
// // //   if (selectedId !== id) {
// // //     setSelectedId(id);
// // //   }
// // // };
// // //   const handleHeartClick = async () => {
// // //     // Check if user is logged in
// // //     try {
// // //       const userDataString = await AsyncStorage.getItem('userData');
// // //       if (!userDataString) {
// // //         navigation.navigate('Login');
// // //         return;
// // //       }
// // //       toggleSelection(item.id);
// // //     } catch (error) {
// // //       console.error('Error retrieving user data:', error);
// // //     }
// // //   };

// // //   return (
// // //        <View style={{
// // //       borderRadius: 3,
// // //       overflow: 'hidden',
// // //       width: width * 30 / 100,
// // //       height: height * 25 / 100,
// // //       borderWidth: 0.4,
// // //       marginBottom: 10,
// // //       position: 'relative',
// // //       marginHorizontal: 5,
// // //     }}>
// // //       <Image
// // //         source={{ uri: item.image }}
// // //         style={{ flex: 1, resizeMode: 'cover' }}
// // //       />
// // //       <View style={{
// // //         position: 'absolute',
// // //         top: 0,
// // //         left: 0,
// // //         right: 0,
// // //         bottom: 0,
// // //       }}>
// // //          <TouchableOpacity style={{
// // //       position: 'absolute', }}  
// // //       onPress={handleHeartClick}
   
// // //     >
// // //       <View style={{borderRadius:15,
// // //           backgroundColor:"#fff",
// // //           borderColor:"#BFBCBC",
// // //           borderWidth:1,width:width*8/100,height:height*4/100,top: 5,
// // //           left: 10,}}>
// // //           <Image
// // //            source={
// // //               require('../../assests/iconHeart.png')}
// // //             style={{
// // //               position: 'absolute',
// // //               top: 2,
// // //               left: 4,
// // //               width: width * 5 / 100,
// // //               height: height * 3 / 100,
// // //               resizeMode: 'contain',
// // //               tintColor: '#980404',
// // //             }}
// // //           />
// // //       </View>
// // //     </TouchableOpacity>
// // //         {item.special_offer && (
// // //           <Image
// // //             source={{ uri: item.special_offer }}
// // //             style={{
// // //               position: 'absolute',
// // //               left: 35,
// // //               width: width * 20 / 100,
// // //               height: height * 10 / 100,
// // //               resizeMode: 'cover',
// // //             }}
// // //           />
// // //         )}
// // //       </View>
// // //     </View>
// // //   )
// // // }
// //   const renderItemnew = ({ item }) => {
// //     return (
// //       <View style={{ flexDirection: "column", borderWidth: 0.8, padding: 5, borderColor: "lightgray" }}>
// //         <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
// //           <RadioButton
// //             value={item.id}
// //             status={selectedId === item.id ? 'checked' : 'unchecked'}
// //             onPress={() => {
// //               setSelectedId(item.id);
// //               console.log("Selected  id:", item.id);
// //               setModalVisible(false);
// //             }}
// //             color="#9f0202"
// //           />
// //           <Text style={{ marginLeft: 8, fontSize: 15, color: "gray" }}>{item.label}</Text>
// //         </View>
// //       </View>
// //     );
// //   };
// //   const handleGoBack = () => {
// //     navigation.goBack();
// //   };
// //   const [selectedButton, setSelectedButton] = useState('Size');
// //   const handlePressbutton = (button) => {
// //     setSelectedButton(button);
// //   };
// //   return (
// //     <View style={{ backgroundColor: "#fff", flex: 1, height: height }}>
// //       <View style={{ backgroundColor: "#fff", justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
// //         <View style={{ marginHorizontal: 10 }}>

// //           <TouchableOpacity onPress={handleGoBack}>
// //             <Ionicons name="arrow-back" size={28} color="black" />
// //           </TouchableOpacity>
// //         </View>
// //         <View style={{}}>

// //           <TouchableOpacity onPress={HomeScreen}>
// //             <Image
// //               source={require('../../assests/Logo.png')}
// //               style={{
// //                 width: width * 0.3, height: height * 0.1, resizeMode: "contain",
// //               }}
// //             />
// //           </TouchableOpacity>
// //         </View>
// //         <TouchableOpacity >
// //           <View style={styles.iconContainer}>
// //             <Image
// //               source={require('../../assests/shopping-cart.png')}
// //               style={styles.icon}
// //             />
// //           </View>
// //         </TouchableOpacity>
// //       </View>
// //       {loading ? (
// //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 300 }}>
// //           <ActivityIndicator size="large" color="#0000ff" />
// //         </View>
// //       ) : (

// //      <View>
// //       <View style={{
// //         flexDirection: 'row',
// //         justifyContent: 'space-around',
// //         marginTop: 10,
// //         borderRadius: 5,
// //         padding: 5,
// //         borderColor: 'lightgray',
// //         borderWidth: 1,
// //         width: width * 0.9,
// //         backgroundColor: "#fff", alignSelf: "center",
// //       }}>
// //         <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center' }}>
// //           <Image
// //             source={require('../../assests/iconSort.png')}
// //             style={{ width: 20, height: 20, marginLeft: 5 }}
// //           />
// //           <Text style={{
// //             color: 'gray',
// //             fontSize: 17,
// //             textAlign: 'center',
// //             fontWeight: "200", paddingHorizontal: 5
// //           }}>Sort</Text>
// //         </TouchableOpacity>
// //         <View style={{
// //           height: 30,
// //           width: 1,
// //           backgroundColor: 'gray',
// //           marginHorizontal: 0,
// //         }}></View>
// //         <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center' }}>
// //           <Image
// //             source={require('../../assests/iconFilter.png')} 
// //             style={{ width: 20, height: 20, marginLeft: 5 }} 
// //           />
// //           <Text style={{
// //             color: 'gray',
// //             fontSize: 17,
// //             textAlign: 'center',
// //             fontWeight: "200", paddingHorizontal: 5
// //           }}>Filter</Text>
// //         </TouchableOpacity>
// //       </View>
// //       <View>
// //         <View style={{paddingBottom:100}}>
// //         <FlatList
// //       data={categoryList.data}
// //       renderItem={renderProductItem}
// //       numColumns={3}
// //       contentContainerStyle={{ flexGrow: 2}}
// //     />
// //         </View>
// //       </View>
   
  
// //       </View>
// //         )}
// //     </View>
// //   )
// // }
// // export default Products
// // const styles = StyleSheet.create({
// //   modal: {
// //     justifyContent: 'flex-end',
// //     margin: 0,
// //   },
// //   modal2: {
// //     justifyContent: 'flex-end',
// //     margin: 0,
// //   },
// //   modalContent: {
// //     backgroundColor: 'white',
// //     padding: 50,
// //     borderTopLeftRadius: 15,
// //     borderTopRightRadius: 15
// //   },
// //   Content: {
// //     backgroundColor: '#FFF',
// //     // padding: 10,
// //     borderTopLeftRadius: 15,
// //     borderTopRightRadius: 15,
// //     height: height * 90 / 100,
// //     marginTop: 10
// //   },
// //   button: {
// //     backgroundColor: '#3498db',
// //     padding: 10,
// //     margin: 5,
// //     borderRadius: 5,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// //   table: {
// //     borderWidth: 1,
// //     borderColor: "black",
// //     marginBottom: 10,
// //     marginTop: 30,
// //   },
// //   row: {
// //     flexDirection: "column",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "#fff",
// //   },
// //   cell: {
// //     flex: 1,
// //     padding: 10,
// //     borderWidth: 1,
// //     width: 200,
// //     height: 200,
// //     textAlign: "center",
// //     fontSize: 18,
// //     color: "black",
// //     borderColor: "black",
// //   },
// //   icon: {

// //     width: 24,
// //     height: 24,
// //     marginRight: 20
// //   },
// //   container: {
// //     flex: 1,
// //     alignSelf: "center",
// //   },
// //   text: {
// //     fontSize: 16,
// //     marginBottom: 10,
// //     textAlign: "center",
// //     padding: 10,
// //     color: '#9f0202'
// //   },
// // });

// // // import { TouchableHighlight, Animated, StyleSheet, View, Text, SafeAreaView, Pressable, Image, ScrollView, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
// // // import React, { useState, useEffect, useRef } from 'react'
// // // import { useNavigation, useRoute } from '@react-navigation/native';
// // // import Ionicons from 'react-native-vector-icons/Ionicons';
// // // import AntDesign from 'react-native-vector-icons/AntDesign';
// // // import Modal from 'react-native-modal';
// // // import { RadioButton } from 'react-native-paper';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { AllCategory } from '../../redux/mainStack/mainStackApi';
// // // import { setCategoryList } from '../../redux/mainStackSlice/categoryList';
// // // import { CategoryFilterAPI } from '../../redux/mainStack/mainStackApi';
// // // import MultiSlider from '@ptomasroos/react-native-multi-slider'
// // // import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// // // import { AddWishlist } from '../../redux/mainStack/mainStackApi'; // Import your AddWishlist function
// // // import { addWishlistStart, addWishlistSuccess, addWishlistFailure } from '../../redux/mainStackSlice/addWishlistSlice'; // Import your Redux slice actions

// // // const { width, height } = Dimensions.get('window');

// // // const Products = () => {
// // //   const HomeScreen = () => {
// // //     navigation.navigate('Home');
// // //   };
// // //   const dispatch = useDispatch();
// // //   const [isModalVisible, setModalVisible] = useState(false);
// // //   const [isfilterModalVisible, setfilterModalVisible] = useState(false);
// // //   const [loading, setLoading] = useState(true);
// // //   const [selectedId, setSelectedId] = useState(null);
// // //   const categoryList = useSelector((state) => state.categoryList.categoryList);
// // //   const route = useRoute();
// // //   const { number } = route.params;
// // //   useEffect(() => {
// // //     const store_id = 1;
// // //     const category_id = selectedcat ? selectedcat.value : number;  
// // //     const PageSize = 20;
// // //     const CurPage = 1;
// // //     const customer_id = 14;
// // //     const color = selectedcolor ? selectedcolor.value : '';
// // //     const size = selectedSize ? selectedSize.value : '';
// // //     const sort_by = selectedId === 3 || selectedId === 4 ? 'price' : 'position';
// // //     const sort_action = selectedId === 1 || selectedId === 4 ? 'DESC' :'ASC';
// // //     const fetchCategoryList = async () => {
// // //       try {
// // //         const categoryListData = await AllCategory(store_id, category_id, PageSize, CurPage, customer_id, color, size,sort_by,sort_action);
// // //         dispatch(setCategoryList(categoryListData));
// // //         console.log('Category List Response:', categoryListData);
// // //       } catch (error) {
// // //         console.error('Error fetching category list', error);
// // //       }
// // //     };
// // //     fetchCategoryList();
// // //   }, [dispatch, number]);
// // //   const [selectedSize, setSelectedSize] = useState(null);
// // //   const [selectedcat, setSelectedcat] = useState(null);
// // //   const [selectedcolor, setSelectedcolor] = useState(null);
// // //   const [selectedButtonValue, setSelectedButtonValue] = useState(null);
// // //   const data = [
// // //     { id: 1, label: 'Relevance' },
// // //     { id: 2, label: 'New Arrivals' },
// // //     { id: 3, label: 'Price Low-High' },
// // //     { id: 4, label: 'Price High-Low' },
// // //   ];
// // //   const handleGoBack = () => {
// // //     navigation.goBack();
// // //   };
// // //   const navigation = useNavigation();
// // //   const renderProductItem = ({ item }) => (
// // //     <View style={{
// // //       borderRadius: 3,
// // //       overflow: 'hidden',
// // //       width: width * 30 / 100,
// // //       height: height * 25 / 100,
// // //       borderWidth: 0.5,
// // //       marginBottom: 10,
// // //       position: 'relative',
// // //       marginHorizontal: 5,
// // //     }}>
// // //       <Image
// // //         source={{ uri: item.image }}
// // //         style={{ flex: 1, resizeMode: 'cover' }}
// // //       />
// // //       <View style={{
// // //         position: 'absolute',
// // //         top: 0,
// // //         left: 0,
// // //         right: 0,
// // //         bottom: 0,
// // //       }}>
// // //         <TouchableOpacity style={{
// // //           position: 'absolute',
// // //           top: 5,
// // //           left: 2,
// // //         }}>
          
// // //                   <Image
// // //               source={require('../../assests/iconHeart.png')} // Heart icon when item is not in wishlist
// // //               style={{
// // //                 position: 'absolute',
// // //                 top: 5,
// // //                 left: 10,
// // //                 width: 20,
// // //                 height: 20,
// // //                 resizeMode: 'contain',
// // //                 tintColor: 'black', 
// // //               }}
// // //             />
// // //         </TouchableOpacity>
// // //         {item.special_offer && (
// // //           <Image
// // //             source={{ uri: item.special_offer }}
// // //             style={{
// // //               position: 'absolute',
// // //               left: 35,
// // //               width: width * 20 / 100,
// // //               height: height * 10 / 100,
// // //               resizeMode: 'cover',
// // //             }}
// // //           />
// // //         )}
// // //       </View>
// // //     </View>
// // //   );
// // //     const toggleModalFilter = () => {
// // //     setfilterModalVisible(!isfilterModalVisible);
// // //   };
// // //   const toggleModal = () => {
// // //     setModalVisible(!isModalVisible);
// // //   };
// // //   const renderItemnew = ({ item }) => {
// // //     return (
// // //       <View style={{ flexDirection: "column", borderWidth: 0.8, padding: 5, borderColor: "lightgray" }}>
// // //         <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
// // //           <RadioButton
// // //             value={item.id}
// // //             status={selectedId === item.id ? 'checked' : 'unchecked'}
// // //             onPress={() => {
// // //               setSelectedId(item.id);
// // //               console.log("Selected  id:", item.id);
// // //               setModalVisible(false);
// // //             }}
// // //             color="#9f0202"
// // //           />
// // //           <Text style={{ marginLeft: 8, fontSize: 15, color: "gray" }}>{item.label}</Text>
// // //         </View>
// // //       </View>
// // //     );
// // //   };
  
// // //    const handleApplyPress = () => {
// // //     if (selectedcat) {
// // //       console.log("Selected Category Display:", selectedcat.display);
// // //       console.log("Selected Category Value:", selectedcat.value);
// // //     }
  
// // //     if (selectedSize) {
// // //       console.log("Selected Size Display:", selectedSize.display);
// // //       console.log("Selected Size Value:", selectedSize.value);
// // //     }
// // //     if (selectedcolor) {
// // //       console.log("Selected Size Display:", selectedcolor.display);
// // //       console.log("Selected Size Value:", selectedcolor.value);
// // //     }
// // //     if (!selectedcat && !selectedSize && !selectedcolor) {
// // //       console.log("No item selected");
// // //     }
// // //     setModalVisible(false);
    
// // //   };

  



  
// // //   return (
// // //     <SafeAreaView style={{flex:1}}>
// // //       {/* {loading ? (
// // //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 300 }}>
// // //           <ActivityIndicator size="large" color="#0000ff" />
// // //         </View>
// // //       ) : ( */}
// // //         <View>
// // //           <View style={{ backgroundColor: "#fff", justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
// // //             <View style={{ marginHorizontal: 10 }} >
// // //               <TouchableOpacity onPress={handleGoBack}>
// // //                 <Ionicons name="arrow-back" size={28} color="black" />
// // //               </TouchableOpacity>
// // //             </View>
// // //             <View style={{}}>
// // //               <TouchableOpacity onPress={HomeScreen}>
// // //                 <Image
// // //                   source={require('../../assests/Logo.png')} // Replace with your image path
// // //                   style={{
// // //                     width: width * 0.3, height: height * 0.1, resizeMode: "contain",
// // //                   }}
// // //                 />
// // //               </TouchableOpacity>
// // //             </View>
// // //             <View style={{ marginRight: 10 }}>
// // //               <AntDesign name="shoppingcart" size={28} color="black" />
// // //             </View>
// // //           </View>
// // //           <View style={{backgroundColor:"#fff"}}>
// // //              <View style={{
// // //         flexDirection: 'row',
// // //         justifyContent: 'space-around',
// // //         marginTop: 10,
// // //         borderRadius: 5,
// // //         padding: 5,
// // //         borderColor: 'lightgray',
// // //         borderWidth: 1,
// // //         width: width * 0.9,
// // //         backgroundColor: "#fff", alignSelf: "center",
// // //       }}>
// // //         <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center' }} onPress={toggleModal}>
// // //           <Image
// // //             source={require('../../assests/iconSort.png')}
// // //             style={{ width: 20, height: 20, marginLeft: 5 }}
// // //           />
// // //           <Text style={{
// // //             color: 'gray',
// // //             fontSize: 17,
// // //             textAlign: 'center',
// // //             fontWeight: "200", paddingHorizontal: 5
// // //           }}>Sort</Text>
// // //         </TouchableOpacity>
// // //         <View style={{
// // //           height: 30,
// // //           width: 1,
// // //           backgroundColor: 'gray',
// // //           marginHorizontal: 0,
// // //         }}></View>
// // //         <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={toggleModalFilter}>
// // //           <Image
// // //             source={require('../../assests/iconFilter.png')} 
// // //             style={{ width: 20, height: 20, marginLeft: 5 }} 
// // //           />
// // //           <Text style={{
// // //             color: 'gray',
// // //             fontSize: 17,
// // //             textAlign: 'center',
// // //             fontWeight: "200", paddingHorizontal: 5
// // //           }}>Filter</Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //                <View style={{paddingBottom:250,marginVertical:10}}>
// // //          <FlatList
// // //       data={categoryList.data}
// // //       renderItem={renderProductItem}
// // //       numColumns={3}
// // //       contentContainerStyle={{ flexGrow: 2}}
// // //     />
// // //         </View>
// // //           </View>

// // //                  <Modal isVisible={isModalVisible} style={styles.modal} onBackdropPress={toggleModal} backdropOpacity={0.5}>
// // //          <View style={styles.modalContent}>
// // //            <View style={{ marginBottom: 10 }}>
// // //              <Text style={{ fontSize: 18, color: "#9f0202", }}>Sort By</Text>
// // //            </View>
// // //            <FlatList
// // //             data={data}
// // //             renderItem={renderItemnew}
// // //             keyExtractor={(item) => item.label}
// // //           />
// // //         </View>
// // //       </Modal>
// // //              <Modal isVisible={isfilterModalVisible} style={styles.modal2} onBackdropPress={toggleModalFilter} backdropOpacity={0.5}>
// // //          <View style={styles.Content}>
// // //            <View style={{ alignSelf: "flex-end", margin: 15 }}>
// // //              <TouchableOpacity onPress={toggleModalFilter}>
// // //                <SimpleLineIcons name="close" size={25} color="#9f0202" />
// // //              </TouchableOpacity>
// // //            </View>
// // //            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
// // //              <View style={{ paddingHorizontal: 20 }}>
// // //                <Text style={{ fontSize: 22, color: "#9f0202" }}>Filter By</Text>
// // //              </View>
// // //              <View style={{ flexDirection: 'row', justifyContent: "space-between", marginRight: 10 }}>
// // //                <TouchableOpacity style={{ width: width * 20 / 100, borderRadius: 1, borderWidth: 1, borderColor: "green", borderRightColor: "red", marginRight: 10, padding: 5 }}>
// // //                  <Text style={{ textAlign: "center" }}>Clear</Text>
// // //                </TouchableOpacity>

// // //                <TouchableOpacity 
// // //                style={{ width: width * 20 / 100, borderRadius: 1, borderWidth: 1, borderColor: "green", borderRightColor: "red", backgroundColor: "#9f0202", padding: 5 }}
// // //               onPress={handleApplyPress}
// // //               >
// // //                 <Text style={{ textAlign: "center", color: "#fff" }}>Apply</Text>
// // //               </TouchableOpacity>
// // //             </View>
// // //           </View>
// // //           <View style={{ paddingVertical: 10, }}>
// // //             <View
// // //               style={{
// // //                 borderBottomColor: '#eae0e0',
// // //                 borderBottomWidth: 1,

// // //               }}
// // //             />
// // //             <View style={{ justifyContent: "space-between", flexDirection: "row", height: height }}>
// // //               <View style={{ 
              
// // //                 backgroundColor: "#f9f8f8",
// // //                  width: width * 40 / 100 }}>
// // //                 <View style={{}}>
// // //                   <TouchableHighlight
// // //                     underlayColor="#f8f2f2"
// // //                     style={{
// // //                       backgroundColor: selectedButton === 'Size' ? '#f8f2f2' : '#fff',
// // //                       padding: 15,
// // //                       borderBottomWidth: 1,
// // //                       borderColor: '#f8f2f2',
// // //                     }}
// // //                     onPress={() => handlePressbutton('Size')}
// // //                   >
// // //                     <Text style={{ fontSize: 16, textAlign: 'center' }}>Size</Text>
// // //                   </TouchableHighlight>
// // //                   <TouchableHighlight
// // //                     underlayColor="#f8f2f2"
// // //                     style={{
// // //                       backgroundColor: selectedButton === 'Category' ? '#f8f2f2' : '#fff',
// // //                       padding: 15,
// // //                       borderBottomWidth: 1,
// // //                       borderColor: '#f8f2f2',
// // //                     }}
// // //                     onPress={() => handlePressbutton('Category')}
// // //                   >
// // //                     <Text style={{ textAlign: 'center' }}>Category</Text>
// // //                   </TouchableHighlight>
// // //                   <TouchableHighlight
// // //                     underlayColor="#f8f2f2"
// // //                     style={{
// // //                       backgroundColor: selectedButton === 'Prize' ? '#f8f2f2' : '#fff',
// // //                       padding: 15,
// // //                       borderBottomWidth: 1,
// // //                       borderColor: '#f8f2f2',
// // //                     }}
// // //                     onPress={() => handlePressbutton('Prize')}
// // //                   >
// // //                     <Text style={{ textAlign: 'center' }}>Prize</Text>
// // //                   </TouchableHighlight>
// // //                   <TouchableHighlight
// // //                     underlayColor="#f8f2f2"
// // //                     style={{
// // //                       backgroundColor: selectedButton === 'Color' ? '#f8f2f2' : '#fff',
// // //                       padding: 15,
// // //                       borderBottomWidth: 1,
// // //                       borderColor: '#f8f2f2',
// // //                     }}
// // //                     onPress={() => handlePressbutton('Color')}
// // //                   >
// // //                     <Text style={{ textAlign: 'center' }}>Color</Text>
// // //                   </TouchableHighlight>
// // //                 </View>
// // //               </View>
// // //               <View style={{ width: 1, backgroundColor: '#f8f2f2' }} />
// // //               <View style={{ backgroundColor: "#fff", width: width * 60 / 100, paddingBottom: 10 }}>
// // //                 <ScrollView>
// // //                   <View >
// // //                     {selectedButton === 'Prize' && (
// // //                       <View style={styles.container}>
// // //                         <Text style={styles.text}> {range[0]} - {range[1]} </Text>
// // //                         <View style={{ alignSelf: "center", }}>

// // //                           <MultiSlider
// // //                             values={range}
// // //                             min={0}
// // //                             max={499}
// // //                             step={1}
// // //                             sliderLength={160}
// // //                             onValuesChange={onValuesChange}
// // //                             allowOverlap
// // //                             snapped
// // //                           />
// // //                         </View>

// // //                       </View>
// // //                     )}

// // //                   </View>
// // //                   {selectedButton === 'Size' && size.map(s => (
// // //                     <TouchableOpacity key={s.id} 
// // //                     onPress={() => {
// // //                       setSelectedSize(s);
// // //                       setSelectedButtonValue(s.value); 
// // //                     }}
// // //                     >
// // //                       <View style={{
// // //                         justifyContent: "space-between",
// // //                         flexDirection: "row",
// // //                         paddingVertical: 10,
// // //                         width: width * 50 / 100,
// // //                         alignSelf: "center",

// // //                       }}>
// // //                        <Text style={{
// // //         color: selectedSize && selectedSize.display === s.display ? '#9f0202' : 'black',
// // //         fontWeight: selectedSize && selectedSize.value === s.value ? 'bold' : 'normal', // Add bold style for selected size
// // //       }}>
// // //         {s.display}
// // //       </Text>
// // //       <Text style={{
// // //         color: selectedSize && selectedSize.value === s.value ? '#9f0202' : 'black',
// // //         fontWeight: selectedSize && selectedSize.value === s.value ? 'bold' : 'normal', // Add bold style for selected size
// // //       }}>
// // //         {s.value}
// // //       </Text>
// // //                       </View>
// // //                     </TouchableOpacity>
// // //                   ))}
// // //                   {selectedButton === 'Category' && (
// // //                     category.map((cat) => (
// // //                       <TouchableOpacity
// // //                         key={cat.id}
// // //                         style={{
// // //                           justifyContent: 'space-between', flexDirection: "row", paddingVertical: 10, width: width * 50 / 100, alignSelf: "center"
// // //                         }}
// // //                         onPress={() => {
// // //                           setSelectedcat(cat);
// // //                           setSelectedButtonValue(cat.value); // Set the selected display value
// // //                         }}
// // //                       >
// // //                         <Text style={{ color: selectedcat && selectedcat.display === cat.display ? '#9f0202' : 'black' }}>{cat.display}</Text>
// // //                         <Text style={{ color: selectedcat && selectedcat.value === cat.value ? '#9f0202' : 'black' }}>{cat.value}</Text>
// // //                       </TouchableOpacity>
// // //                     ))
// // //                   )}
// // //                   {selectedButton === 'Color' && colors.map(color => (
// // //                     <TouchableOpacity 
// // //                     onPress={() => {
// // //                       setSelectedcolor(color);
// // //                       setSelectedButtonValue(color.value); // Set the selected display value
// // //                     }}
                  
// // //                     >
// // //                       <View style={{ justifyContent: "space-between", flexDirection: "row", paddingVertical: 10, width: width * 50 / 100, alignSelf: "center" }}>
// // //                         <Text key={color.display} style={{ color: selectedcolor && selectedcolor.display === color.display ? '#9f0202' : 'black' }}>{color.display}</Text>
// // //                         <Text style={{ color: selectedcolor && selectedcolor.display === color.value ? '#9f0202' : 'black' }}>{color.value}</Text>
// // //                       </View>
// // //                     </TouchableOpacity>
// // //                   ))}
// // //                 </ScrollView>
// // //               </View>
// // //             </View>
// // //           </View>
// // //         </View>
// // //       </Modal>
// // //         </View>
      
// // //     </SafeAreaView>
// // //   );
// // // };

// // // export default Products;

// // // const styles = StyleSheet.create({
// // //   modal: {
// // //     justifyContent: 'flex-end',
// // //     margin: 0,
// // //   },
// // //   modal2: {
// // //     justifyContent: 'flex-end',
// // //     margin: 0,
// // //   },
// // //   modalContent: {
// // //     backgroundColor: 'white',
// // //     padding: 50,
// // //     borderTopLeftRadius: 15,
// // //     borderTopRightRadius: 15
// // //   },
// // //   Content: {
// // //     backgroundColor: '#FFF',
// // //     // padding: 10,
// // //     borderTopLeftRadius: 15,
// // //     borderTopRightRadius: 15,
// // //     height: height * 90 / 100,
// // //     marginTop: 10
// // //   },
// // //   button: {
// // //     backgroundColor: '#3498db',
// // //     padding: 10,
// // //     margin: 5,
// // //     borderRadius: 5,
// // //   },
// // //   buttonText: {
// // //     color: '#fff',
// // //     fontSize: 16,
// // //   },
// // //   table: {
// // //     borderWidth: 1,
// // //     borderColor: "black",
// // //     marginBottom: 10,
// // //     marginTop: 30,
// // //   },
// // //   row: {
// // //     flexDirection: "column",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     backgroundColor: "#fff",
// // //   },
// // //   cell: {
// // //     flex: 1,
// // //     padding: 10,
// // //     borderWidth: 1,
// // //     width: 200,
// // //     height: 200,
// // //     textAlign: "center",
// // //     fontSize: 18,
// // //     color: "black",
// // //     borderColor: "black",
// // //   },
// // //   icon: {

// // //     width: 24,
// // //     height: 24,
// // //     marginRight: 20
// // //   },
// // //   container: {
// // //     flex: 1,
// // //     alignSelf: "center",
// // //   },
// // //   text: {
// // //     fontSize: 16,
// // //     marginBottom: 10,
// // //     textAlign: "center",
// // //     padding: 10,
// // //     color: '#9f0202'
// // //   },
// // // });
import { TouchableHighlight, Animated, StyleSheet, View, Text, SafeAreaView, Pressable, Image, ScrollView, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useRef } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { AllCategory } from '../../redux/mainStack/mainStackApi';
import { setCategoryList } from '../../redux/mainStackSlice/categoryList';
import { CategoryFilterAPI } from '../../redux/mainStack/mainStackApi';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { AddWishlist } from '../../redux/mainStack/mainStackApi'; // Import your AddWishlist function
import { addWishlistStart, addWishlistSuccess, addWishlistFailure } from '../../redux/mainStackSlice/addWishlistSlice'; // Import your Redux slice actions
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');
const Products = () => {
  const [range, setRange] = useState([1, 50]);
  const onValuesChange = (values) => {
    setRange(values);
  };
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isfilterModalVisible, setfilterModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const HomeScreen = () => {
    navigation.navigate('Home');
  };
  const toggleModalFilter = () => {
    setfilterModalVisible(!isfilterModalVisible);
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
<<<<<<< HEAD
  const toggleModalFilter = () => {
    setfilterModalVisible(!isfilterModalVisible);
=======
  const data = [
    { id: 1, label: 'Relevance' },
    { id: 2, label: 'New Arrivals' },
    { id: 3, label: 'Price Low-High' },
    { id: 4, label: 'Price High-Low' },
  ];
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const handlstore = () => {
    setCounter(counter + 1);
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const categoryList = useSelector((state) => state.categoryList.categoryList);
  const route = useRoute();
  const { number } = route.params;
  useEffect(() => {
    const store_id = 1;
    const category_id = selectedcat ? selectedcat.value : number;
    const PageSize = 20;
    const CurPage = 1;
    const customer_id = 14;
    const color = selectedcolor ? selectedcolor.value : '';
    const size = selectedSize ? selectedSize.value : '';
    const sort_by = selectedId === 3 || selectedId === 4 ? 'price' : 'position';
    const sort_action = selectedId === 1 || selectedId === 4 ? 'DESC' : 'ASC';
    const fetchCategoryList = async () => {
      try {
        const categoryListData = await AllCategory(store_id, category_id, PageSize, CurPage, customer_id, color, size, sort_by, sort_action);
        dispatch(setCategoryList(categoryListData));
        console.log('Category List Response:', categoryListData);
      } catch (error) {
        console.error('Error fetching category list', error);
      }
    };
    fetchCategoryList();
  }, [dispatch, number]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedcat, setSelectedcat] = useState(null);
  const [selectedcolor, setSelectedcolor] = useState(null);
  const [selectedButtonValue, setSelectedButtonValue] = useState(null);
  const handleApplyPress = () => {
    if (selectedcat) {
      console.log("Selected Category Display:", selectedcat.display);
      console.log("Selected Category Value:", selectedcat.value);
    }

    if (selectedSize) {
      console.log("Selected Size Display:", selectedSize.display);
      console.log("Selected Size Value:", selectedSize.value);
    }
    if (selectedcolor) {
      console.log("Selected Size Display:", selectedcolor.display);
      console.log("Selected Size Value:", selectedcolor.value);
    }
    if (!selectedcat && !selectedSize && !selectedcolor) {
      console.log("No item selected");
    }
    setModalVisible(false);
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  };
  const [colors, setColors] = useState([]);
  const [category, setCategory] = useState([]);
  const [size, setSize] = useState([]);
  const [prize, setprize] = useState([]);
<<<<<<< HEAD
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
=======
  useEffect(() => {
    const storeId = 1;
    const category_id = 2;
    CategoryFilterAPI(storeId, category_id)
      .then(responseData => {
        if (responseData.status === 1 && responseData.data) {
          const availableFilters = responseData.data.availablefilter;
          if (availableFilters.Color) {
            setColors(availableFilters.Color);
            availableFilters.Color.forEach(color => {
            });
          }
          if (availableFilters.Category) {
            setCategory(availableFilters.Category);
            availableFilters.Category.forEach(category => {
            });
          }
          if (availableFilters.Price) {
            console.log("Price Filters:", availableFilters.Price);
            setprize(availableFilters.Price);

            availableFilters.Price.forEach((priceFilter, index) => {
              console.log(`Display: ${priceFilter.display}, Value: ${priceFilter.value}`);

              // Log the value at index 0
              if (index === 0) {
                console.log(`Value at index 0: ${priceFilter.value}`);
              }
              if (index === 1) {
                console.log(`Value at index 1: ${priceFilter.value}`);
              }
            });
          }
          if (availableFilters.Size) {
            setSize(availableFilters.Size);
            availableFilters.Size.forEach(size => {
            });
          }
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
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
<<<<<<< HEAD
        if (response.message !== "Cannot add product without stock to wishlist") {
          console.log("message", response.message);
          setWishlistMessage(response.message);
          Alert.alert('Wishlist', response.message);
          setAddedToWishlist(true);
        }
      } else {
        console.log('No user data found in AsyncStorage.');
=======
        if (response.status === 1 && response.message === "Cannot add product without stock to wishlist.") {
          dispatch(addWishlistOutOfStock(response.message));
        } else {
          dispatch(addWishlistSuccess(response));
        }
      } else {
        console.log('No user data found in AsyncStorage.');

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
        navigation.navigate('Login');
        return;
      }
    } catch (error) {
      dispatch(addWishlistFailure(error));
      console.log("Error response: ", error);
    }
  };
<<<<<<< HEAD
  const renderItemnew = ({ item }) => {
    return (
      <View style={{ flexDirection: "column", borderWidth: 0.8, padding: 5, borderColor: "lightgray", width: width * 80 / 100, alignSelf: "center", height: height * 8 / 100 }}>
=======
  const [clickedItems, setClickedItems] = useState([]);
  const handlePress = (item) => {
    if (clickedItems.includes(item.id)) {
      setClickedItems(clickedItems.filter(clickedId => clickedId !== item.id));
    } else {
      setClickedItems([...clickedItems, item.id]);
    }
  };
  const renderProductItem = ({ item }) => (
    <View style={{
      borderRadius: 3,
      overflow: 'hidden',
      width: width * 30 / 100,
      height: height * 25 / 100,
      borderWidth: 0.4,
      marginBottom: 10,
      position: 'relative',
      marginHorizontal: 5,

    }}>
      <Image
        source={{ uri: item.image }}
        style={{ flex: 1, resizeMode: 'cover' }}
      />
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}>
        <TouchableOpacity style={{
          position: 'absolute',

        }}
          onPress={() => {
            handleHeartClick(item);
            handlePress(item); // Call handlePress to update clickedItems array
          }}

        >
          <View style={{
            borderRadius: 15,
            backgroundColor: "#fff",
            borderColor: "#BFBCBC",
            borderWidth: 1, width: width * 8 / 100, height: height * 4 / 100, top: 5,
            left: 10,
          }}>
            <Image
              source={
                clickedItems.includes(item.id)
                  ? require('../../assests/selectedHeart.png') // Change to selectedHeart.png if item is clicked
                  : require('../../assests/heart.png') // Otherwise, use heart.png
              }
              style={{
                position: 'absolute',
                top: 2,
                left: 4,
                width: width * 5 / 100,
                height: height * 3 / 100,
                resizeMode: 'contain',
              }}
            />
          </View>
        </TouchableOpacity>
        {item.special_offer && (
          <Image
            source={{ uri: item.special_offer }}
            style={{
              position: 'absolute',
              left: 35,
              width: width * 20 / 100,
              height: height * 10 / 100,
              resizeMode: 'cover',
            }}
          />
        )}
      </View>
    </View>
  );
  const renderItemnew = ({ item }) => {
    return (
      <View style={{ flexDirection: "column", borderWidth: 0.8, padding: 5, borderColor: "lightgray" }}>
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
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
<<<<<<< HEAD
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
=======
  const handleGoBack = () => {
    navigation.goBack();
  };
  const [selectedButton, setSelectedButton] = useState('Size');
  const handlePressbutton = (button) => {
    setSelectedButton(button);
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  };
  return (
    <View style={{ backgroundColor: "#fff", flex: 1, height: height }}>
      <View style={{ backgroundColor: "#fff", justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
        <View style={{ marginHorizontal: 10 }}>
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          <TouchableOpacity onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{}}>
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          <TouchableOpacity onPress={HomeScreen}>
            <Image
              source={require('../../assests/Logo.png')}
              style={{
                width: width * 0.3, height: height * 0.1, resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>
<<<<<<< HEAD
        <TouchableOpacity >
=======
        <TouchableOpacity onPress={handlstore}>
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assests/shopping-cart.png')}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
<<<<<<< HEAD
      {isLoading ? (
        <View style={[styles.loaderContainer, styles.horizontal]}>
          <ActivityIndicator size="large" color="#9f0202" />
        </View>
      ) : (
        <ScrollView>

          <View>

=======
      {loading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 300 }}>
          <ActivityIndicator size="large" color="#0000ff" />
          {/* <Image source={require('../../assests/gif/app_Loader.gif')} style={{ width: 50, height: 50 }} /> */}
        </View>
      ) : (

          <View>
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
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
<<<<<<< HEAD
              }}>
              </View>
              <TouchableOpacity
                onPress={toggleModalFilter}
                style={{ flexDirection: 'row', alignItems: 'center' }}>
=======
              }}></View>
              <TouchableOpacity onPress={toggleModalFilter} style={{ flexDirection: 'row', alignItems: 'center' }}>
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
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
<<<<<<< HEAD

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
=======
            <View>
              <View style={{ paddingBottom: 100 }}>
                <FlatList
                  data={categoryList.data}
                  renderItem={renderProductItem}
                  numColumns={3}
                  contentContainerStyle={{ flexGrow: 2 }}
                />
              </View>
            </View>
            <Modal isVisible={isModalVisible} style={styles.modal} onBackdropPress={toggleModal} backdropOpacity={0.5}>
              <View style={styles.modalContent}>
                <View style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 18, color: "#9f0202", }}>Sort By</Text>
                </View>
                <FlatList
                  data={data}
                  renderItem={renderItemnew}
                  keyExtractor={(item) => item.id.toString()}
                />
                <TouchableOpacity onPress={handleApplyPress} style={styles.applyButton}>
                  <Text style={{ color: "#fff" }}>Apply</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <Modal isVisible={isfilterModalVisible} style={styles.modal} onBackdropPress={toggleModalFilter} backdropOpacity={0.5}>
              <View style={styles.modalContent}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, color: "#9f0202" }}>Filter By</Text>
                  </View>
                  <View style={{}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                      {['Size', 'Color', 'Category', 'Prize'].map((button, index) => (
                        <TouchableHighlight
                          key={index}
                          onPress={() => handlePressbutton(button)}
                          style={[
                            styles.filterButton,
                            {
                              backgroundColor: selectedButton === button ? '#9f0202' : '#fff',
                              borderColor: selectedButton === button ? '#9f0202' : '#9f0202',
                            },
                          ]}
                          underlayColor="#ccc"
                        >
                          <Text style={[styles.filterButtonText, { color: selectedButton === button ? '#fff' : '#9f0202' }]}>
                            {button}
                          </Text>
                        </TouchableHighlight>
                      ))}
                    </View>
                  </View>
                  {selectedButton === 'Size' ? (
                    <View>
                      {size.map((size, index) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
                          <RadioButton
                            value={size.id}
                            status={selectedSize === size ? 'checked' : 'unchecked'}
                            onPress={() => {
                              setSelectedSize(size);
                            }}
                            color="#9f0202"
                          />
                          <Text style={{ marginLeft: 8, fontSize: 15, color: "gray" }}>{size.display}</Text>
                        </View>
                      ))}
                    </View>
                  ) : null}
                  {selectedButton === 'Color' ? (
                    <View>
                      {colors.map((color, index) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
                          <RadioButton
                            value={color.id}
                            status={selectedcolor === color ? 'checked' : 'unchecked'}
                            onPress={() => {
                              setSelectedcolor(color);
                            }}
                            color="#9f0202"
                          />
                          <Text style={{ marginLeft: 8, fontSize: 15, color: "gray" }}>{color.display}</Text>
                        </View>
                      ))}
                    </View>
                  ) : null}
                  {selectedButton === 'Category' ? (
                    <View>
                      {category.map((category, index) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
                          <RadioButton
                            value={category.id}
                            status={selectedcat === category ? 'checked' : 'unchecked'}
                            onPress={() => {
                              setSelectedcat(category);
                            }}
                            color="#9f0202"
                          />
                          <Text style={{ marginLeft: 8, fontSize: 15, color: "gray" }}>{category.display}</Text>
                        </View>
                      ))}
                    </View>
                  ) : null}
                  {selectedButton === 'Prize' ? (
                    <View style={{ marginVertical: 10 }}>
                      <Text style={{ fontSize: 15, color: "#9f0202" }}>Price Range: ${range[0]} - ${range[1]}</Text>
                      <MultiSlider
                        values={[range[0], range[1]]}
                        min={1}
                        max={100}
                        sliderLength={280}
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
                  ) : null}
                  <TouchableOpacity onPress={handleApplyPress} style={styles.applyButton}>
                    <Text style={{ color: "#fff" }}>Apply</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </Modal>
          </View>
        )}
    </View>
  );
};
// const Products = () => {
  
//   const [range, setRange] = useState([1, 50]);
//   const onValuesChange = (values) => {
//     setRange(values);
//   };
//   const navigation = useNavigation();
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [isfilterModalVisible, setfilterModalVisible] = useState(false);
//   const [selectedId, setSelectedId] = useState(null);
//   const HomeScreen = () => {
//     navigation.navigate('Home');
//   };
//   const toggleModalFilter = () => {
//     setfilterModalVisible(!isfilterModalVisible);
//   };
//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };
//   const data = [
//     { id: 1, label: 'Relevance' },
//     { id: 2, label: 'New Arrivals' },
//     { id: 3, label: 'Price Low-High' },
//     { id: 4, label: 'Price High-Low' },
//   ];
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const scaleValue = useRef(new Animated.Value(1)).current;
//   const handlstore = () => {
//     setCounter(counter + 1);
//     Animated.sequence([
//       Animated.timing(scaleValue, {
//         toValue: 1.2,
//         duration: 100,
//         useNativeDriver: false,
//       }),
//       Animated.timing(scaleValue, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: false,
//       }),
//     ]).start();
//   };
//   const categoryList = useSelector((state) => state.categoryList.categoryList);
//   const route = useRoute();
//   const { number } = route.params;
//   useEffect(() => {
//     const store_id = 1;
//     const category_id = selectedcat ? selectedcat.value : number;  
//     const PageSize = 20;
//     const CurPage = 1;
//     const customer_id = 14;
//     const color = selectedcolor ? selectedcolor.value : '';
//     const size = selectedSize ? selectedSize.value : '';
//     const sort_by = selectedId === 3 || selectedId === 4 ? 'price' : 'position';
//     const sort_action = selectedId === 1 || selectedId === 4 ? 'DESC' :'ASC';
//     const fetchCategoryList = async () => {
//       try {
//         const categoryListData = await AllCategory(store_id, category_id, PageSize, CurPage, customer_id, color, size,sort_by,sort_action);
//         dispatch(setCategoryList(categoryListData));
//         console.log('Category List Response:', categoryListData);
//       } catch (error) {
//         console.error('Error fetching category list', error);
//       }
//     };
//     fetchCategoryList();
//   }, [dispatch, number]);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [selectedcat, setSelectedcat] = useState(null);
//   const [selectedcolor, setSelectedcolor] = useState(null);
//   const [selectedButtonValue, setSelectedButtonValue] = useState(null);
//   const handleApplyPress = () => {
//     if (selectedcat) {
//       console.log("Selected Category Display:", selectedcat.display);
//       console.log("Selected Category Value:", selectedcat.value);
//     }
  
//     if (selectedSize) {
//       console.log("Selected Size Display:", selectedSize.display);
//       console.log("Selected Size Value:", selectedSize.value);
//     }
//     if (selectedcolor) {
//       console.log("Selected Size Display:", selectedcolor.display);
//       console.log("Selected Size Value:", selectedcolor.value);
//     }
//     if (!selectedcat && !selectedSize && !selectedcolor) {
//       console.log("No item selected");
//     }
//     setModalVisible(false);
    
//   };
//   const [colors, setColors] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [size, setSize] = useState([]);
//   const [prize, setprize] = useState([]);
//   useEffect(() => {
//     const storeId = 1;
//      const category_id =2;
//     CategoryFilterAPI(storeId, category_id)
//       .then(responseData => {
//         if (responseData.status === 1 && responseData.data) {
//           const availableFilters = responseData.data.availablefilter;
//           if (availableFilters.Color) {
//             setColors(availableFilters.Color);
//             availableFilters.Color.forEach(color => {
//             });
//           }
//           if (availableFilters.Category) {
//             setCategory(availableFilters.Category);
//             availableFilters.Category.forEach(category => {
//             });
//           }
//           if (availableFilters.Price) {
//             console.log("Price Filters:", availableFilters.Price);
//             setprize(availableFilters.Price);

//             availableFilters.Price.forEach((priceFilter, index) => {
//               console.log(`Display: ${priceFilter.display}, Value: ${priceFilter.value}`);

//               // Log the value at index 0
//               if (index === 0) {
//                 console.log(`Value at index 0: ${priceFilter.value}`);
//               }
//               if (index === 1) {
//                 console.log(`Value at index 1: ${priceFilter.value}`);
//               }
//             });
//           }
//           if (availableFilters.Size) {
//             setSize(availableFilters.Size);
//             availableFilters.Size.forEach(size => {
//             });
//           }
//           setLoading(false);
//         } else {
//           setLoading(false);
//         }
//       })
//       .catch(error => {
//         setLoading(false);
//       });
//   }, []);
//   const handleHeartClick = async (item) => {
//     console.log("Clicked on item with ID:", item.id);
//     try {
//       const userDataString = await AsyncStorage.getItem('userData');
//       if (userDataString) {
//         const userData = JSON.parse(userDataString);
//         const customer_id = userData.id;
//         const productId = item.id; 
//         const action = 'true';
//         dispatch(addWishlistStart());
//         const response = await AddWishlist(customer_id, productId, action);
//         console.log("Added Wishlist response: ", response);
//         if (response.status === 1 && response.message === "Cannot add product without stock to wishlist.") {
//           dispatch(addWishlistOutOfStock(response.message));
//         } else {
//           dispatch(addWishlistSuccess(response));
//         }
//       } else {
//         console.log('No user data found in AsyncStorage.');

//         navigation.navigate('Login');
//         return; 
//       }
//     } catch (error) {
//       dispatch(addWishlistFailure(error));
//       console.log("Error response: ", error);
//     }
//   };
//   const [clickedItems, setClickedItems] = useState([]); // Initialize clickedItems state

//   const isItemClicked = clickedItems.includes(item.id); // Declare isItemClicked after clickedItems
  
//   const handlePress = () => {
//     if (clickedItems.includes(item.id)) {
//       setClickedItems(clickedItems.filter(clickedId => clickedId !== item.id));
//     } else {
//       setClickedItems([...clickedItems, item.id]);
//     }
//   };
  
//   const renderProductItem = ({ item }) => (
//     <View style={{
//       borderRadius: 3,
//       overflow: 'hidden',
//       width: width * 30 / 100,
//       height: height * 25 / 100,
//       borderWidth: 0.4,
//       marginBottom: 10,
//       position: 'relative',
//       marginHorizontal: 5,
     
//     }}>
//       <Image
//         source={{ uri: item.image }}
//         style={{ flex: 1, resizeMode: 'cover' }}
//       />
//       <View style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//       }}>
//          <TouchableOpacity style={{
//       position: 'absolute',
     
//     }} 
//     onPress={() => {
//       handleHeartClick(item);
//       handlePress(); // Call handlePress to update clickedItems array
//     }}
    
//     >
//       <View style={{borderRadius:15,
//           backgroundColor:"#fff",
//           borderColor:"#BFBCBC",
//           borderWidth:1,width:width*8/100,height:height*4/100,top: 5,
//           left: 10,}}>
// <Image 
//  source={
//   isItemClicked
//     ? require('../../assests/selectedHeart.png') // Change to selectedHeart.png if item is clicked
//     : require('../../assests/heart.png') // Otherwise, use heart.png
// }
// style={{
//   position: 'absolute',
//   top: 2,
//   left: 4,
//   width:width*5/100,
//   height: height*3/100,
//   resizeMode: 'contain',
  

// }}
// />
//       </View>
//     </TouchableOpacity>
//         {/* <TouchableOpacity style={{
//           position: 'absolute',
//           top: 5,
//           left: 2,
//         }}>
          
//                   <Image
//               source={require('../../assests/iconHeart.png')} 
//               style={{
//                 position: 'absolute',
//                 top: 5,
//                 left: 10,
//                 width: 20,
//                 height: 20,
//                 resizeMode: 'contain',
//                 tintColor: 'black', 
//               }}
//             />
//         </TouchableOpacity> */}
//         {item.special_offer && (
//           <Image
//             source={{ uri: item.special_offer }}
//             style={{
//               position: 'absolute',
//               left: 35,
//               width: width * 20 / 100,
//               height: height * 10 / 100,
//               resizeMode: 'cover',
//             }}
//           />
//         )}
//       </View>
//     </View>
//   );
//   const renderItemnew = ({ item }) => {
//     return (
//       <View style={{ flexDirection: "column", borderWidth: 0.8, padding: 5, borderColor: "lightgray" }}>
//         <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
//           <RadioButton
//             value={item.id}
//             status={selectedId === item.id ? 'checked' : 'unchecked'}
//             onPress={() => {
//               setSelectedId(item.id);
//               console.log("Selected  id:", item.id);
//               setModalVisible(false);
//             }}
//             color="#9f0202"
//           />
//           <Text style={{ marginLeft: 8, fontSize: 15, color: "gray" }}>{item.label}</Text>
//         </View>
//       </View>
//     );
//   };
//   const handleGoBack = () => {
//     navigation.goBack();
//   };
//   const [selectedButton, setSelectedButton] = useState('Size');
//   const handlePressbutton = (button) => {
//     setSelectedButton(button);
//   };
//   return (
//     <View style={{ backgroundColor: "#fff", flex: 1, height: height }}>
//       <View style={{ backgroundColor: "#fff", justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
//         <View style={{ marginHorizontal: 10 }}>

//           <TouchableOpacity onPress={handleGoBack}>
//             <Ionicons name="arrow-back" size={28} color="black" />
//           </TouchableOpacity>
//         </View>
//         <View style={{}}>

//           <TouchableOpacity onPress={HomeScreen}>
//             <Image
//               source={require('../../assests/Logo.png')}
//               style={{
//                 width: width * 0.3, height: height * 0.1, resizeMode: "contain",
//               }}
//             />
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity onPress={handlstore}>
//           <View style={styles.iconContainer}>
//             <Image
//               source={require('../../assests/shopping-cart.png')}
//               style={styles.icon}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>
//       {loading ? (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 300 }}>
//           <ActivityIndicator size="large" color="#0000ff" />
//           {/* <Image source={require('../../assests/gif/app_Loader.gif')} style={{ width: 50, height: 50 }} /> */}
//         </View>
//       ) : (

//      <View>
//       <View style={{
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginTop: 10,
//         borderRadius: 5,
//         padding: 5,
//         borderColor: 'lightgray',
//         borderWidth: 1,
//         width: width * 0.9,
//         backgroundColor: "#fff", alignSelf: "center",
//       }}>
//         <TouchableOpacity onPress={toggleModal} style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <Image
//             source={require('../../assests/iconSort.png')}
//             style={{ width: 20, height: 20, marginLeft: 5 }}
//           />
//           <Text style={{
//             color: 'gray',
//             fontSize: 17,
//             textAlign: 'center',
//             fontWeight: "200", paddingHorizontal: 5
//           }}>Sort</Text>
//         </TouchableOpacity>
//         <View style={{
//           height: 30,
//           width: 1,
//           backgroundColor: 'gray',
//           marginHorizontal: 0,
//         }}></View>
//         <TouchableOpacity onPress={toggleModalFilter} style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <Image
//             source={require('../../assests/iconFilter.png')} 
//             style={{ width: 20, height: 20, marginLeft: 5 }} 
//           />
//           <Text style={{
//             color: 'gray',
//             fontSize: 17,
//             textAlign: 'center',
//             fontWeight: "200", paddingHorizontal: 5
//           }}>Filter</Text>
//         </TouchableOpacity>
//       </View>
//       <View>
//         <View style={{paddingBottom:100}}>
//         <FlatList
//       data={categoryList.data}
//       renderItem={renderProductItem}
//       numColumns={3}
//       contentContainerStyle={{ flexGrow: 2}}
//     />
//         </View>
//       </View>
//       <Modal isVisible={isModalVisible} style={styles.modal} onBackdropPress={toggleModal} backdropOpacity={0.5}>
//         <View style={styles.modalContent}>
//           <View style={{ marginBottom: 10 }}>
//             <Text style={{ fontSize: 18, color: "#9f0202", }}>Sort By</Text>
//           </View>
//           <FlatList
//             data={data}
//             renderItem={renderItemnew}
//             keyExtractor={(item) => item.label}
//           />
//         </View>
//       </Modal>
//       <Modal isVisible={isfilterModalVisible} style={styles.modal2} onBackdropPress={toggleModalFilter} backdropOpacity={0.5}>
//         <View style={styles.Content}>
//           <View style={{ alignSelf: "flex-end", margin: 15 }}>
//             <TouchableOpacity onPress={toggleModalFilter}>
//               <SimpleLineIcons name="close" size={25} color="#9f0202" />
//             </TouchableOpacity>
//           </View>
//           <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
//             <View style={{ paddingHorizontal: 20 }}>
//               <Text style={{ fontSize: 22, color: "#9f0202" }}>Filter By</Text>
//             </View>
//             <View style={{ flexDirection: 'row', justifyContent: "space-between", marginRight: 10 }}>
//               <TouchableOpacity style={{ width: width * 20 / 100, borderRadius: 1, borderWidth: 1, borderColor: "green", borderRightColor: "red", marginRight: 10, padding: 5 }}>
//                 <Text style={{ textAlign: "center" }}>Clear</Text>
//               </TouchableOpacity>

//               <TouchableOpacity 
//                style={{ width: width * 20 / 100, borderRadius: 1, borderWidth: 1, borderColor: "green", borderRightColor: "red", backgroundColor: "#9f0202", padding: 5 }}
//               onPress={handleApplyPress}
//               >
//                 <Text style={{ textAlign: "center", color: "#fff" }}>Apply</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={{ paddingVertical: 10, }}>
//             <View
//               style={{
//                 borderBottomColor: '#eae0e0',
//                 borderBottomWidth: 1,

//               }}
//             />
//             <View style={{ justifyContent: "space-between", flexDirection: "row", height: height }}>
//               <View style={{ 
              
//                 backgroundColor: "#f9f8f8",
//                  width: width * 40 / 100 }}>
//                 <View style={{}}>
//                   <TouchableHighlight
//                     underlayColor="#f8f2f2"
//                     style={{
//                       backgroundColor: selectedButton === 'Size' ? '#f8f2f2' : '#fff',
//                       padding: 15,
//                       borderBottomWidth: 1,
//                       borderColor: '#f8f2f2',
//                     }}
//                     onPress={() => handlePressbutton('Size')}
//                   >
//                     <Text style={{ fontSize: 16, textAlign: 'center' }}>Size</Text>
//                   </TouchableHighlight>
//                   <TouchableHighlight
//                     underlayColor="#f8f2f2"
//                     style={{
//                       backgroundColor: selectedButton === 'Category' ? '#f8f2f2' : '#fff',
//                       padding: 15,
//                       borderBottomWidth: 1,
//                       borderColor: '#f8f2f2',
//                     }}
//                     onPress={() => handlePressbutton('Category')}
//                   >
//                     <Text style={{ textAlign: 'center' }}>Category</Text>
//                   </TouchableHighlight>
//                   <TouchableHighlight
//                     underlayColor="#f8f2f2"
//                     style={{
//                       backgroundColor: selectedButton === 'Prize' ? '#f8f2f2' : '#fff',
//                       padding: 15,
//                       borderBottomWidth: 1,
//                       borderColor: '#f8f2f2',
//                     }}
//                     onPress={() => handlePressbutton('Prize')}
//                   >
//                     <Text style={{ textAlign: 'center' }}>Prize</Text>
//                   </TouchableHighlight>
//                   <TouchableHighlight
//                     underlayColor="#f8f2f2"
//                     style={{
//                       backgroundColor: selectedButton === 'Color' ? '#f8f2f2' : '#fff',
//                       padding: 15,
//                       borderBottomWidth: 1,
//                       borderColor: '#f8f2f2',
//                     }}
//                     onPress={() => handlePressbutton('Color')}
//                   >
//                     <Text style={{ textAlign: 'center' }}>Color</Text>
//                   </TouchableHighlight>
//                 </View>
//               </View>
//               <View style={{ width: 1, backgroundColor: '#f8f2f2' }} />
//               <View style={{ backgroundColor: "#fff", width: width * 60 / 100, paddingBottom: 10 }}>
//                 <ScrollView>
//                   <View >
//                     {selectedButton === 'Prize' && (
//                       <View style={styles.container}>
//                         <Text style={styles.text}> {range[0]} - {range[1]} </Text>
//                         <View style={{ alignSelf: "center", }}>

//                           <MultiSlider
//                             values={range}
//                             min={0}
//                             max={499}
//                             step={1}
//                             sliderLength={160}
//                             onValuesChange={onValuesChange}
//                             allowOverlap
//                             snapped
//                           />
//                         </View>

//                       </View>
//                     )}

//                   </View>
//                   {selectedButton === 'Size' && size.map(s => (
//                     <TouchableOpacity key={s.id} 
//                     onPress={() => {
//                       setSelectedSize(s);
//                       setSelectedButtonValue(s.value); 
//                     }}
//                     >
//                       <View style={{
//                         justifyContent: "space-between",
//                         flexDirection: "row",
//                         paddingVertical: 10,
//                         width: width * 50 / 100,
//                         alignSelf: "center",

//                       }}>
//                        <Text style={{
//         color: selectedSize && selectedSize.display === s.display ? '#9f0202' : 'black',
//         fontWeight: selectedSize && selectedSize.value === s.value ? 'bold' : 'normal', // Add bold style for selected size
//       }}>
//         {s.display}
//       </Text>
//       <Text style={{
//         color: selectedSize && selectedSize.value === s.value ? '#9f0202' : 'black',
//         fontWeight: selectedSize && selectedSize.value === s.value ? 'bold' : 'normal', // Add bold style for selected size
//       }}>
//         {s.value}
//       </Text>
//                       </View>
//                     </TouchableOpacity>
//                   ))}
//                   {selectedButton === 'Category' && (
//                     category.map((cat) => (
//                       <TouchableOpacity
//                         key={cat.id}
//                         style={{
//                           justifyContent: 'space-between', flexDirection: "row", paddingVertical: 10, width: width * 50 / 100, alignSelf: "center"
//                         }}
//                         onPress={() => {
//                           setSelectedcat(cat);
//                           setSelectedButtonValue(cat.value); // Set the selected display value
//                         }}
//                       >
//                         <Text style={{ color: selectedcat && selectedcat.display === cat.display ? '#9f0202' : 'black' }}>{cat.display}</Text>
//                         <Text style={{ color: selectedcat && selectedcat.value === cat.value ? '#9f0202' : 'black' }}>{cat.value}</Text>
//                       </TouchableOpacity>
//                     ))
//                   )}
//                   {selectedButton === 'Color' && colors.map(color => (
//                     <TouchableOpacity 
//                     onPress={() => {
//                       setSelectedcolor(color);
//                       setSelectedButtonValue(color.value); // Set the selected display value
//                     }}
                  
//                     >
//                       <View style={{ justifyContent: "space-between", flexDirection: "row", paddingVertical: 10, width: width * 50 / 100, alignSelf: "center" }}>
//                         <Text key={color.display} style={{ color: selectedcolor && selectedcolor.display === color.display ? '#9f0202' : 'black' }}>{color.display}</Text>
//                         <Text style={{ color: selectedcolor && selectedcolor.display === color.value ? '#9f0202' : 'black' }}>{color.value}</Text>
//                       </View>
//                     </TouchableOpacity>
//                   ))}
//                 </ScrollView>
//               </View>
//             </View>
//           </View>
//         </View>
//       </Modal>
//       </View>
//         )}
//     </View>
//   )
// }
export default Products
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
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
<<<<<<< HEAD
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 20
  },
  Content: {
    backgroundColor: '#FFF',
=======
    padding: 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  Content: {
    backgroundColor: '#FFF',
    // padding: 10,
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
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
<<<<<<< HEAD
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
=======
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
});
