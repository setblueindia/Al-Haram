// import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal, Image, FlatList } from 'react-native'
// import React, { useEffect, useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useDispatch, useSelector } from 'react-redux';
// import { getWishlist } from '../../redux/mainStack/mainStackApi';
// import { getWishlistStart, getWishlistSuccess, getWishlistFailure } from '../../redux/mainStackSlice/wishlistSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Profile from '../../components/Profile/Profile';
// import { AddWishlist } from '../../redux/mainStack/mainStackApi'; 
// import { addWishlistStart, addWishlistSuccess, addWishlistFailure } from '../../redux/mainStackSlice/addWishlistSlice'; // Import your Redux slice actions
// const windowWidth = Dimensions.get('window').width;
// const { width, height } = Dimensions.get('window');
// const WishlistPage = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const [wishlistData, setWishlistData] = useState([]);
//   const handleAddToWishlist = (productId) => {
//     // Here, you can dispatch an action to add the product to the wishlist
//     const fetchData = async () => {
//       try {
//         const userDataString = await AsyncStorage.getItem('userData');
//         if (userDataString) {
//           const userData = JSON.parse(userDataString);
//           const customer_id = userData.id;
//           const action = 'false';
//           dispatch(addWishlistStart());
//           AddWishlist(customer_id, productId, action)
//             .then(response => {
//               console.log("new wishlist add:", response);
//               dispatch(addWishlistSuccess(response));
//             })
//             .catch(error => {
//               dispatch(addWishlistFailure(error));
//               console.log("error response:", error);
//             });
//         } else {
//           console.log('No user data found in AsyncStorage.');
//           navigation.navigate('Login');
//         }
//       } catch (error) {
//         console.error('Error retrieving data from AsyncStorage:', error);
//       }
//     };
//     fetchData();
//   };
//   useEffect(() => {
//       const fetchData = async () => {
//           try {
//               const userDataString = await AsyncStorage.getItem('userData');
//               if (userDataString) {
//                   const userData = JSON.parse(userDataString);
//                   const customer_id = userData.id;
//                   const store_id = '1';
//                   dispatch(getWishlistStart());
//                   getWishlist(customer_id, store_id)
//                       .then(response => {
//                           dispatch(getWishlistSuccess(response));
//                           setWishlistData(response.data);
//                       })
//                       .catch(error => {
//                           dispatch(getWishlistFailure(error));
//                           console.error('Error fetching wishlist:', error);
//                       });
//               } else {
//                   console.log('No user data found in AsyncStorage.');
//                   navigation.navigate('Login');
//               }
//           } catch (error) {
//               console.error('Error retrieving data from AsyncStorage:', error);
//           }
//       };
//       fetchData();
//   }, [dispatch, navigation]);

//   const handleGoBack = () => {
//       navigation.goBack();
//   };

//   const renderItem = ({ item }) => {
//       const imageSize = windowWidth / 2 - 20;
//       const textSize = imageSize / 10;
//       const textContainerWidth = imageSize;
//       return (
//         <View>
//   <Image source={{ uri: item.image }} style={[styles.itemImage, { width: imageSize, height: imageSize }]} />
//   <TouchableOpacity onPress={() => handleAddToWishlist(item.id)}>
//     <Image source={require('../../assests/selectedHeart.png')} style={styles.heartIcon} />
//   </TouchableOpacity>
//   <View style={[styles.textContainer, { width: textContainerWidth }]}>
//     <Text style={[styles.itemName, { fontSize: textSize }]} numberOfLines={1}>{item.name}</Text>
//   </View>
// </View>
//       );
//   };

//   return (
//       <View style={{ backgroundColor: "#fff", flex: 1 }}>
//           <View style={{ justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
//               <View style={{ marginHorizontal: 10 }}>
//                   <TouchableOpacity onPress={handleGoBack}>
//                       <Ionicons name="arrow-back" size={28} color="black" />
//                   </TouchableOpacity>
//               </View>
//               <View style={{}}>
//                   <Image source={require('../../assests/Logo.png')} style={{ width: 120, height:43 }} />
//               </View>
//               <View >
//                   <Text style={{ color: "#fff" }}>fff</Text>
//               </View>
//           </View>
//           <View>
//             <Text style={{ color: "black" }}>Number of Items: {wishlistData.length}</Text>
//         </View>
//           <View style={styles.container}>
//               <FlatList
//                   data={wishlistData}
//                   keyExtractor={item => item.id}
//                   renderItem={renderItem}
//                   horizontal={false}
//                   numColumns={2}
//               />
//           </View>
//       </View>
//   );
// }


// export default WishlistPage;
// import React, { useEffect, useState } from 'react';
// import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal, Image, FlatList, ActivityIndicator } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useDispatch, useSelector } from 'react-redux';
// import { getWishlist } from '../../redux/mainStack/mainStackApi';
// import { getWishlistStart, getWishlistSuccess, getWishlistFailure } from '../../redux/mainStackSlice/wishlistSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AddWishlist } from '../../redux/mainStack/mainStackApi';
// import { addWishlistStart, addWishlistSuccess, addWishlistFailure } from '../../redux/mainStackSlice/addWishlistSlice';
// import NumberOfItems from '../NumberOfItems/NumberOfItems';
// const windowWidth = Dimensions.get('window').width;
// const { width, height } = Dimensions.get('window');
// const WishlistPage = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const [wishlistData, setWishlistData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const handleAddToWishlist = (productId) => {
//     // Here, you can dispatch an action to add the product to the wishlist
//     const fetchData = async () => {
//       try {
//         const userDataString = await AsyncStorage.getItem('userData');
//         if (userDataString) {
//           const userData = JSON.parse(userDataString);
//           const customer_id = userData.id;
//           const action = 'false';
//           dispatch(addWishlistStart());
//           AddWishlist(customer_id, productId, action)
//             .then(response => {
//               console.log("new wishlist add:", response);
//               dispatch(addWishlistSuccess(response));
//             })
//             .catch(error => {
//               dispatch(addWishlistFailure(error));
//               console.log("error response:", error);
//             });
//         } else {
//           console.log('No user data found in AsyncStorage.');
//           navigation.navigate('Login');
//         }
//       } catch (error) {
//         console.error('Error retrieving data from AsyncStorage:', error);
//       }
//     };
//     fetchData();
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userDataString = await AsyncStorage.getItem('userData');
//         if (userDataString) {
//           const userData = JSON.parse(userDataString);
//           const customer_id = userData.id;
//           const store_id = '1';
//           dispatch(getWishlistStart());
//           getWishlist(customer_id, store_id)
//             .then(response => {
//               dispatch(getWishlistSuccess(response));
//               setWishlistData(response.data);
//               setLoading(false);
//             })
//             .catch(error => {
//               dispatch(getWishlistFailure(error));
//               console.error('Error fetching wishlist:', error);
//               setLoading(false); // Hide loader in case of error
//             });
//         } else {
//           console.log('No user data found in AsyncStorage.');
//           navigation.navigate('Login');
//         }
//       } catch (error) {
//         console.error('Error retrieving data from AsyncStorage:', error);
//         setLoading(false); 
//       }
//     };
//     fetchData();
//   }, [dispatch, navigation]);
//   const handleGoBack = () => {
//     navigation.goBack();
//   };
//   const renderItem = ({ item }) => {
//     const imageSize = windowWidth / 2 - 20;
//     const textSize = imageSize / 10;
//     const textContainerWidth = imageSize;
//     return (
//       <View style={{
//         width: width * 50 / 100,
//         height: height * 25 / 100,
//         padding: 10
//       }}>
//         <Image
//           source={{ uri: item.image }}
//           style={{ flex: 1 }}
//         />
//         <View style={{ alignSelf: "center" }}>
//           <Text style={{ color: "#202020", fontSize: 15, fontWeight: "500" }} numberOfLines={1}>{item.name}</Text>
//         </View>
//         <TouchableOpacity onPress={() => handleAddToWishlist(item.id)} style={{
//           position: 'absolute',
//           top: 10,
//           left: 130,
//           width: 30,
//           height: 30,
//           borderRadius: 15,
//           borderWidth: 1,
//           borderColor: "#BFBCBC"
//         }}>
//           <Image
//             source={require('../../assests/selectedHeart.png')}
//             style={{
//               position: 'absolute',
//               left: 5,
//               width: 18,
//               height: 16,
//               resizeMode: 'cover',
//               top: 6
//             }}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   };
//   return (
// <View style={{ backgroundColor: "#fff", flex: 1 }}>
//       <View style={{ justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
//         <View style={{ marginHorizontal: 10 }}>
//           <TouchableOpacity onPress={() =>handleGoBack()}>
//             <Ionicons name="arrow-back" size={28} color="black" />
//           </TouchableOpacity>
//         </View>
//         <View style={{}}>
//           <Image source={require('../../assests/Logo.png')} style={{ width: 120, height: 43 }} />
//         </View>
//         <View >
//           <Text style={{ color: "#fff" }}>fff</Text>
//         </View>
//       </View>
//       {loading ? (
//          <View style={styles.loaderContainer}>
//          <ActivityIndicator size="large" color="#990107" />
//          {/* <NumberOfItems itemCount={wishlistData.length} style={{color:"#fff"}}/> */}
//        </View>
//       ) : (
//         <View style={styles.container}>
//           <FlatList
//             data={wishlistData}
//             keyExtractor={item => item.id}
//             renderItem={renderItem}
//             horizontal={false}
//             numColumns={2}
//           />
//         </View>
//       )}
//     </View>

//     // <View style={{ backgroundColor: "#fff", flex: 1 }}>
//     //   <View style={{ justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
//     //     <View style={{ marginHorizontal: 10 }}>
//     //       <TouchableOpacity onPress={handleGoBack}>
//     //         <Ionicons name="arrow-back" size={28} color="black" />
//     //       </TouchableOpacity>
//     //     </View>
//     //     <View style={{}}>
//     //       <Image source={require('../../assests/Logo.png')} style={{ width: 120, height: 43 }} />
//     //     </View>
//     //     <View >
//     //       <Text style={{ color: "#fff" }}>fff</Text>
//     //     </View>
//     //   </View>
     
      
//     //   {/* <View>
//     //     <Text style={{ color: "black" }}>Number of Items: {wishlistData.length}</Text>
//     //   </View> */}
//     //   {loading ? (
//     //      <View style={styles.loaderContainer}>
//     //      <ActivityIndicator size="large" color="#990107" />
//     //      {/* <NumberOfItems itemCount={wishlistData.length} style={{color:"#fff"}}/> */}
//     //    </View>
//     //   ) : (
//     //     <View style={styles.container}>
//     //       <FlatList
//     //         data={wishlistData}
//     //         keyExtractor={item => item.id}
//     //         renderItem={renderItem}
//     //         horizontal={false}
//     //         numColumns={2}
//     //       />
//     //     </View>
//     //   )}
//     // </View>
//   );
// }
// export default WishlistPage;
// import React, { useEffect, useState } from 'react';
// import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal, Image, FlatList, ActivityIndicator, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useDispatch, useSelector } from 'react-redux';
// import { getWishlist } from '../../redux/mainStack/mainStackApi';
// import { getWishlistStart, getWishlistSuccess, getWishlistFailure } from '../../redux/mainStackSlice/wishlistSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AddWishlist } from '../../redux/mainStack/mainStackApi';
// import { addWishlistStart, addWishlistSuccess, addWishlistFailure } from '../../redux/mainStackSlice/addWishlistSlice';
// const windowWidth = Dimensions.get('window').width;
// const { width, height } = Dimensions.get('window');
// const WishlistPage = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const [wishlistData, setWishlistData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const handleAddToWishlist = (productId, productName) => {
//     Alert.alert(
//       'Add to Wishlist',
//       `Do you want to ${productName} to your wishlist?`,
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'OK',
//           onPress: () => RemoveToWishlist(productId),
//         },
//       ],
//       { cancelable: false }
//     );
//   };
//   const RemoveToWishlist = async (productId) => {
//     const fetchData = async () => {
//       try {
//         const userDataString = await AsyncStorage.getItem('userData');
//         if (userDataString) {
//           const userData = JSON.parse(userDataString);
//           const customer_id = userData.id;
//           const action = 'false';
//           dispatch(addWishlistStart());
//           AddWishlist(customer_id, productId, action)
//             .then(response => {
//               console.log("new wishlist add:", response);
//               dispatch(addWishlistSuccess(response));
  
//               // Filter out the removed item from the wishlistData state
//               setWishlistData(prevData => prevData.filter(item => item.id !== productId));
//             })
//             .catch(error => {
//               dispatch(addWishlistFailure(error));
//               console.log("error response:", error);
//             });
//         } else {
//           console.log('No user data found in AsyncStorage.');
//           navigation.navigate('Login');
//         }
//       } catch (error) {
//         console.error('Error retrieving data from AsyncStorage:', error);
//       }
//     };
//     fetchData();
//   };
  
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userDataString = await AsyncStorage.getItem('userData');
//         if (userDataString) {
//           const userData = JSON.parse(userDataString);
//           const customer_id = userData.id;
//           const store_id = '1';
//           dispatch(getWishlistStart());
//           getWishlist(customer_id, store_id)
//             .then(response => {
//               dispatch(getWishlistSuccess(response));
//               setWishlistData(response.data);
//               setLoading(false);
//             })
//             .catch(error => {
//               dispatch(getWishlistFailure(error));
//               console.error('Error fetching wishlist:', error);
//               setLoading(false); // Hide loader in case of error
//             });
//         } else {
//           console.log('No user data found in AsyncStorage.');
//           navigation.navigate('Login');
//         }
//       } catch (error) {
//         console.error('Error retrieving data from AsyncStorage:', error);
//         setLoading(false); 
//       }
//     };
//     fetchData();
//   }, [dispatch, navigation]);

//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   const renderItem = ({ item }) => {
//     const imageSize = windowWidth / 2 - 20;
//     const textSize = imageSize / 10;
//     const textContainerWidth = imageSize;
//     return (
//       <View style={{
//         width: width * 50 / 100,
//         height: height * 25 / 100,
//         padding: 10
//       }}>
//         <Image
//           source={{ uri: item.image }}
//           style={{ flex: 1 }}
//         />
//         <View style={{ alignSelf: "center" }}>
//           <Text style={{ color: "#202020", fontSize: 15, fontWeight: "500" }} numberOfLines={1}>{item.name}</Text>
//         </View>
//         <TouchableOpacity onPress={() => handleAddToWishlist(item.id, item.name)} style={{
//           position: 'absolute',
//           top: 10,
//           left: 130,
//           width: 30,
//           height: 30,
//           borderRadius: 15,
//           borderWidth: 1,
//           borderColor: "#BFBCBC"
//         }}>
//           <Image
//             source={require('../../assests/selectedHeart.png')}
//             style={{
//               position: 'absolute',
//               left: 5,
//               width: 18,
//               height: 16,
//               resizeMode: 'cover',
//               top: 6
//             }}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={{ backgroundColor: "#fff", flex: 1 }}>
//       <View style={{ justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
//         <View style={{ marginHorizontal: 10 }}>
//           <TouchableOpacity onPress={() =>handleGoBack()}>
//             <Ionicons name="arrow-back" size={28} color="black" />
//           </TouchableOpacity>
//         </View>
//         <View style={{}}>
//           <Image source={require('../../assests/Logo.png')} style={{ width: 120, height: 43 }} />
//         </View>
//         <View >
//           <Text style={{ color: "#fff" }}>fff</Text>
//         </View>
//       </View>
//       {loading ? (
//          <View style={styles.loaderContainer}>
//          <ActivityIndicator size="large" color="#990107" />
//          {/* <NumberOfItems itemCount={wishlistData.length} style={{color:"#fff"}}/> */}
//        </View>
//       ) : (
//         <View style={styles.container}>
//           <FlatList
//             data={wishlistData}
//             keyExtractor={item => item.id}
//             renderItem={renderItem}
//             horizontal={false}
//             numColumns={2}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// export default WishlistPage;
// import React, { useEffect, useState } from 'react';
// import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal, Image, FlatList, ActivityIndicator, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useDispatch, useSelector } from 'react-redux';
// import { getWishlist } from '../../redux/mainStack/mainStackApi';
// import { getWishlistStart, getWishlistSuccess, getWishlistFailure } from '../../redux/mainStackSlice/wishlistSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AddWishlist } from '../../redux/mainStack/mainStackApi';
// import { addWishlistStart, addWishlistSuccess, addWishlistFailure } from '../../redux/mainStackSlice/addWishlistSlice';

// const windowWidth = Dimensions.get('window').width;
// const { width, height } = Dimensions.get('window');

// const WishlistPage = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const [wishlistData, setWishlistData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userDataString = await AsyncStorage.getItem('userData');
//         if (userDataString) {
//           const userData = JSON.parse(userDataString);
//           const customer_id = userData.id;
//           const store_id = '1';
//           dispatch(getWishlistStart());
//           getWishlist(customer_id, store_id)
//             .then(response => {
//               dispatch(getWishlistSuccess(response));
//               setWishlistData(response.data);
//               setLoading(false);
//             })
//             .catch(error => {
//               dispatch(getWishlistFailure(error));
//               console.error('Error fetching wishlist:', error);
//               setLoading(false); // Hide loader in case of error
//             });
//         } else {
//           console.log('No user data found in AsyncStorage.');
//           navigation.navigate('Login');
//         }
//       } catch (error) {
//         console.error('Error retrieving data from AsyncStorage:', error);
//         setLoading(false); 
//       }
//     };
//     fetchData();
//   }, [dispatch, navigation]);

//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   const handleAddToWishlist = (productId, productName) => {
//     Alert.alert(
//       'Add to Wishlist',
//       `Do you want to ${productName} to your wishlist?`,
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'OK',
//           onPress: () => RemoveToWishlist(productId),
//         },
//       ],
//       { cancelable: false }
//     );
//   };

//   const RemoveToWishlist = async (productId) => {
//     const fetchData = async () => {
//       try {
//         const userDataString = await AsyncStorage.getItem('userData');
//         if (userDataString) {
//           const userData = JSON.parse(userDataString);
//           const customer_id = userData.id;
//           const action = 'false';
//           dispatch(addWishlistStart());
//           AddWishlist(customer_id, productId, action)
//             .then(response => {
//               console.log("new wishlist add:", response);
//               dispatch(addWishlistSuccess(response));
  
//               // Filter out the removed item from the wishlistData state
//               setWishlistData(prevData => prevData.filter(item => item.id !== productId));
//             })
//             .catch(error => {
//               dispatch(addWishlistFailure(error));
//               console.log("error response:", error);
//             });
//         } else {
//           console.log('No user data found in AsyncStorage.');
//           navigation.navigate('Login');
//         }
//       } catch (error) {
//         console.error('Error retrieving data from AsyncStorage:', error);
//       }
//     };
//     fetchData();
//   };

//   const renderItem = ({ item }) => {
//     const imageSize = windowWidth / 2 - 20;
//     const textSize = imageSize / 10;
//     const textContainerWidth = imageSize;
//     return (
//       <View style={{
//         width: width * 50 / 100,
//         height: height * 25 / 100,
//         padding: 10
//       }}>
//         <Image
//           source={{ uri: item.image }}
//           style={{ flex: 1 }}
//         />
//         <View style={{ alignSelf: "center" }}>
//           <Text style={{ color: "#202020", fontSize: 15, fontWeight: "500" }} numberOfLines={1}>{item.name}</Text>
//         </View>
//         <TouchableOpacity onPress={() => handleAddToWishlist(item.id, item.name)} style={{
//           position: 'absolute',
//           top: 10,
//           left: 130,
//           width: 30,
//           height: 30,
//           borderRadius: 15,
//           borderWidth: 1,
//           borderColor: "#BFBCBC"
//         }}>
//           <Image
//             source={require('../../assests/selectedHeart.png')}
//             style={{
//               position: 'absolute',
//               left: 5,
//               width: 18,
//               height: 16,
//               resizeMode: 'cover',
//               top: 6
//             }}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={{ backgroundColor: "#fff", flex: 1 }}>
//       <View style={{ justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
//         <View style={{ marginHorizontal: 10 }}>
//           <TouchableOpacity onPress={() =>handleGoBack()}>
//             <Ionicons name="arrow-back" size={28} color="black" />
//           </TouchableOpacity>
//         </View>
//         <View style={{}}>
//           <Image source={require('../../assests/Logo.png')} style={{ width: 120, height: 43 }} />
//         </View>
//         <View >
//           <Text style={{ color: "#fff" }}>{wishlistData.length}</Text>
//         </View>
//       </View>
//       {loading ? (
//          <View style={styles.loaderContainer}>
//          <ActivityIndicator size="large" color="#990107" />
//        </View>
//       ) : (
//         <View style={styles.container}>
//           <FlatList
//             data={wishlistData}
//             keyExtractor={item => item.id}
//             renderItem={renderItem}
//             horizontal={false}
//             numColumns={2}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// export default WishlistPage;
import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal, Image, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { getWishlist } from '../../redux/mainStack/mainStackApi';
import { getWishlistStart, getWishlistSuccess, getWishlistFailure } from '../../redux/mainStackSlice/wishlistSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddWishlist } from '../../redux/mainStack/mainStackApi';
import { addWishlistStart, addWishlistSuccess, addWishlistFailure } from '../../redux/mainStackSlice/addWishlistSlice';

const windowWidth = Dimensions.get('window').width;
const { width, height } = Dimensions.get('window');

const WishlistPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [wishlistData, setWishlistData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          const customer_id = userData.id;
          const store_id = '1';
          dispatch(getWishlistStart());
          getWishlist(customer_id, store_id)
            .then(response => {
              dispatch(getWishlistSuccess(response));
              setWishlistData(response.data);
              setLoading(false);
              console.log("Wishlist data:", response); 
              // Navigate to Profile screen with wishlist length as parameter
              navigation.navigate('Profile', { wishlistLength: response.data.length });
            })
            .catch(error => {
              dispatch(getWishlistFailure(error));
              console.error('Error fetching wishlist:', error);
              setLoading(false); // Hide loader in case of error
            });
        } else {
          console.log('No user data found in AsyncStorage.');
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
        setLoading(false); 
      }
    };
    fetchData();
  }, [dispatch, navigation]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddToWishlist = (productId, productName) => {
    Alert.alert(
      'Add to Wishlist',
      `Are you sure you want to remove this item from your wishlist?
      `,
      [
        {
          text: 'Keep',
          style: 'Keep',
        },
        {
          text: 'YES',
          onPress: () => RemoveToWishlist(productId),
        },
      ],
      { cancelable: false }
    );
  };

  const RemoveToWishlist = async (productId) => {
    const fetchData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          const customer_id = userData.id;
          const action = 'false';
          dispatch(addWishlistStart());
          AddWishlist(customer_id, productId, action)
            .then(response => {
              console.log("new wishlist add:", response);
              dispatch(addWishlistSuccess(response));
  
              // Filter out the removed item from the wishlistData state
              setWishlistData(prevData => prevData.filter(item => item.id !== productId));
            })
            .catch(error => {
              dispatch(addWishlistFailure(error));
              console.log("error response:", error);
            });
        } else {
          console.log('No user data found in AsyncStorage.');
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };
    fetchData();
  };

  const renderItem = ({ item }) => {
    const imageSize = windowWidth / 2 - 20;
    const textSize = imageSize / 10;
    const textContainerWidth = imageSize;
    return (
      <View style={{
        width: width * 50 / 100,
        height: height * 25 / 100,
        padding: 10
      }}>
        <Image
          source={{ uri: item.image }}
          style={{ flex: 1 }}
        />
        <View style={{ alignSelf: "center" }}>
          <Text style={{ color: "#202020", fontSize: 15, fontWeight: "500" }} numberOfLines={1}>{item.name}</Text>
        </View>
        <TouchableOpacity onPress={() => handleAddToWishlist(item.id, item.name)} style={{
          position: 'absolute',
          top: 10,
          left: 130,
          width: 30,
          height: 30,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: "#BFBCBC"
        }}>
          <Image
            source={require('../../assests/selectedHeart.png')}
            style={{
              position: 'absolute',
              left: 5,
              width: 18,
              height: 16,
              resizeMode: 'cover',
              top: 6
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity onPress={() =>handleGoBack()}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <Image source={require('../../assests/Logo.png')} style={{ width: 120, height: 43 }} />
        </View>
        <View >
          <Text style={{ color: "#fff" }}>{wishlistData.length}</Text>
        </View>
      </View>
      {loading ? (
         <View style={styles.loaderContainer}>
         <ActivityIndicator size="large" color="#990107" />
       </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={wishlistData}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            horizontal={false}
            numColumns={2}
          />
        </View>
      )}
    </View>
  );
};

export default WishlistPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: height,
        padding: 20,
    },
    loaderContainer:{
    margin:200
    },
    firstNameContainer: {
        marginBottom: 20,
    },
    label: {
        color: 'white',
        fontSize: 16,
    },
    lastNameContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        borderRadius: 5,
    },
    lastNameInput: {
        fontSize: 16,
        padding: 10,
        color: 'white',
    },
    container: {
        backgroundColor: '#FFF',
        height: height,
        padding: 20,
    },
    inputContainer: {
        marginBottom: 10,
    },
    label: {
        color: 'black',
        fontSize: 20,
        marginBottom: 5,
    },
    inputWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        borderRadius: 5,
    },
    input: {
        fontSize: 16,
        padding: 10,
        color: 'white',
    },
    signInButton: {
        backgroundColor: '#9f0202',
        paddingVertical: 7,
        borderRadius: 3,
        alignItems: 'center',
        marginBottom: 20,
        width: '95%',
        marginHorizontal: 10,
        marginVertical: 20,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 7,
        borderRadius: 3,
        marginBottom: 20,
        width: '80%',
        marginHorizontal: 10,
        marginVertical: 20,
        alignSelf: 'center',
        borderColor: '#d99ea0',
        borderWidth: 1,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
    },
    androidShadow: {
        elevation: 5, 
    },
    iosShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    itemContainer: {
      margin: 10,
    
      },
    itemImage: {
      resizeMode: 'cover',
    },
    itemName: {
      fontWeight: 'bold',
      marginTop: 5,
      textAlign: 'center',
    },
    itemPrice: {
      marginTop: 5,
      textAlign: 'center',
    },
    heartIcon: {
      position: 'absolute',
      top: 0,
      right: 10, 
      width: 18, 
      height: 16,
      
    }
});

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { StyleSheet, Text, View } from 'react-native';
// import { getWishlist } from '../../redux/mainStack/mainStackApi'
// import { getWishlistStart, getWishlistSuccess, getWishlistFailure } from '../../redux/mainStackSlice/wishlistSlice';

// const WishlistPage = () => {
//   const dispatch = useDispatch();
//   const wishlist = useSelector(state => state.wishlist);
//   const loading = useSelector(state => state.loading);
//   const error = useSelector(state => state.error);

//   useEffect(() => {
//     dispatch(getWishlist('58755', '1'));
//   }, [dispatch]);

//   console.log('Wishlist:', wishlist); 

//   return (
//     <View>
//       <Text>WishlistPage</Text>
//       {loading && <Text>Loading...</Text>}
//       {error && <Text>Error: {error}</Text>}
//       {wishlist && ( // Render wishlist if data is available
//         <View>
//           {/* Render wishlist items */}
//           {wishlist.map(item => (
//             <Text key={item.id}>{item.name}</Text> 
//           ))}
//         </View>
//       )}
//     </View>
//   );
// }

// export default WishlistPage;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { StyleSheet, Text, View } from 'react-native';
// import { getWishlist } from '../../redux/mainStack/mainStackApi'
// import { getWishlistStart, getWishlistSuccess, getWishlistFailure } from '../../redux/mainStackSlice/wishlistSlice';

// const WishlistPage = () => {
//   const dispatch = useDispatch();
//   const { wishlist, loading, error } = useSelector(state => state.wishlist); // Destructure wishlist from state

//   useEffect(() => {
//     dispatch(getWishlist('58755', '1'));
//   }, [dispatch]);

//   console.log('Wishlist:', wishlist); 

//   return (
//     <View>
//       <Text>WishlistPage</Text>
//       {loading && <Text>Loading...</Text>}
//       {error && <Text>Error: {error}</Text>}
//       {wishlist && wishlist.length > 0 && ( // Check if wishlist is not null and not empty
//         <View>
//           {/* Render wishlist items */}
//           {wishlist.map(item => (
//             <Text key={item.id}>{item.name}</Text> 
//           ))}
//         </View>
//       )}
//       {!wishlist && !loading && !error && ( // Check if wishlist is null and not loading or with error
//         <Text>No wishlist items found</Text>
//       )}
//     </View>
//   );
// }

// export default WishlistPage;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { StyleSheet, Text, View } from 'react-native';
// import { getWishlist } from '../../redux/mainStack/mainStackApi'
// import { getWishlistStart, getWishlistSuccess, getWishlistFailure } from '../../redux/mainStackSlice/wishlistSlice';

// const WishlistPage = () => {
//   const dispatch = useDispatch();
//   // Assuming customer_id and store_id are static
//   const customer_id = '58755';
//   const store_id = '1';

//   useEffect(() => {
//     // Dispatch the action to start fetching the wishlist
//     dispatch(getWishlistStart());

//     // Make the API call with static customer_id and store_id
//     getWishlist(customer_id, store_id)
//       .then(response => {
//         // Dispatch the action with the successful response
//         dispatch(getWishlistSuccess(response));
//         // Log the response to the console
//         console.log('Wishlist Response:', response);
//       })
//       .catch(error => {
//         // Dispatch the action with the error
//         dispatch(getWishlistFailure(error));
//         // Log the error to the console
//         console.error('Error fetching wishlist:', error);
//       });
//   }, [dispatch]);

//   return (
//     <View>
//       <Text>WishlistPage</Text>
//       {/* You can render wishlist items here */}
//     </View>
//   );
// }

// export default WishlistPage;


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
// import { getWishlist } from '../../redux/mainStack/mainStackApi';
// import { getWishlistStart, getWishlistSuccess, getWishlistFailure } from '../../redux/mainStackSlice/wishlistSlice';

// const WishlistPage = () => {
//     const dispatch = useDispatch();
//   // Assuming customer_id and store_id are static
//   const customer_id = '58755';
//   const store_id = '1';
//   const [wishlistData, setWishlistData] = useState([]);
//   useEffect(() => {
//     // Dispatch the action to start fetching the wishlist
//     dispatch(getWishlistStart());

//     // Make the API call with static customer_id and store_id
//     getWishlist(customer_id, store_id)
//       .then(response => {
//         // Dispatch the action with the successful response
//         dispatch(getWishlistSuccess(response));
//         // Log the response to the console
//         console.log('Wishlist Response:', response);
//         setWishlistData(response.data);
//       })
//       .catch(error => {
//         // Dispatch the action with the error
//         dispatch(getWishlistFailure(error));
//         // Log the error to the console
//         console.error('Error fetching wishlist:', error);
//       });
//   }, [dispatch]);

//   const renderItemImage = ({ item }) => (
//     <Image source={{ uri: item.image }} style={styles.itemImage} />
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>WishlistPage</Text>
//       <FlatList
//         data={wishlistData}
//         keyExtractor={item => item.id}
//         renderItem={renderItemImage}
//         horizontal={false}
//         numColumns={2}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   itemImage: {
//     width: 150,
//     height: 150,
//     margin: 10,
//   },
// });

// export default WishlistPage;
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
// import { getWishlist } from '../../redux/mainStack/mainStackApi';
// import { getWishlistStart, getWishlistSuccess, getWishlistFailure } from '../../redux/mainStackSlice/wishlistSlice';

// const windowWidth = Dimensions.get('window').width;

// const WishlistPage = () => {
//     const dispatch = useDispatch();
//   // Assuming customer_id and store_id are static
//   const customer_id = '58755';
//   const store_id = '1';
//   const [wishlistData, setWishlistData] = useState([]);
//   useEffect(() => {
//     // Dispatch the action to start fetching the wishlist
//     dispatch(getWishlistStart());

//     // Make the API call with static customer_id and store_id
//     getWishlist(customer_id, store_id)
//       .then(response => {
//         // Dispatch the action with the successful response
//         dispatch(getWishlistSuccess(response));
//         // Log the response to the console
//         console.log('Wishlist Response:', response);
//         setWishlistData(response.data);
//       })
//       .catch(error => {
//         // Dispatch the action with the error
//         dispatch(getWishlistFailure(error));
//         // Log the error to the console
//         console.error('Error fetching wishlist:', error);
//       });
//   }, [dispatch]);
// const renderItem = ({ item }) => {
//   const imageSize = windowWidth / 2 - 20; // Assuming 10 margin on each side
//   const textSize = imageSize / 10; // Adjust this factor according to your preference
//   const textContainerWidth = imageSize; // Assuming you want the text container to have the same width as the image

//   return (
//     <View style={styles.itemContainer}>
//       <View>
//         <Image source={{ uri: item.image }} style={[styles.itemImage, { width: imageSize, height: imageSize }]} />
//         <View style={[styles.textContainer, { width: textContainerWidth }]}>
//           <Text style={[styles.itemName, { fontSize: textSize }]} numberOfLines={1}>{item.name}</Text>
//           <Text style={[styles.itemPrice, { fontSize: textSize }]}>SAR {item.price}</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>WishlistPage</Text>
//       <FlatList
//         data={wishlistData}
//         keyExtractor={item => item.id}
//         renderItem={renderItem}
//         horizontal={false}
//         numColumns={2}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   itemContainer: {
//     margin: 10,
  
//     },
//   itemImage: {
//     resizeMode: 'cover',
//   },
//   itemName: {
//     fontWeight: 'bold',
//     marginTop: 5,
//     textAlign: 'center',
//   },
//   itemPrice: {
//     marginTop: 5,
//     textAlign: 'center',
//   },
// });

// export default WishlistPage;




