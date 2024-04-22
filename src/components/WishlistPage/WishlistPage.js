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
// const { width, height } = Dimensions.get('window');
// const WishlistPage = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const [wishlistData, setWishlistData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const userDataString = await AsyncStorage.getItem('userData');
//       if (userDataString) {
//         const userData = JSON.parse(userDataString);
//         const customer_id = userData.id;
//         const store_id = '1';
//         const response = await getWishlist(customer_id, store_id);
//         dispatch(getWishlistSuccess(response));
//         setWishlistData(response.data);
//       } else {
//         console.log('No user data found in AsyncStorage.');
//         navigation.navigate('Login');
//       }
//     } catch (error) {
//       console.error('Error fetching wishlist:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(fetchData, 60000); // Fetch data every 60 seconds
//     fetchData(); // Fetch data immediately on mount
//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   const handleAddToWishlist = (productId, productName) => {
//     Alert.alert(
//       'Add to Wishlist',
//       `Are you sure you want to remove this item from your wishlist?
//       `,
//       [
//         {
//           text: 'Keep',
//           style: 'Keep',
//         },
//         {
//           text: 'YES',
//           onPress: () => RemoveToWishlist(productId),
//         },
//       ],
//       { cancelable: false }
//     );
//   };

//   const RemoveToWishlist = async (productId) => {
//     try {
//       const userDataString = await AsyncStorage.getItem('userData');
//       if (userDataString) {
//         const userData = JSON.parse(userDataString);
//         const customer_id = userData.id;
//         const action = 'false';
//         dispatch(addWishlistStart());
//         const response = await AddWishlist(customer_id, productId, action);
//         dispatch(addWishlistSuccess(response));
//         setWishlistData(prevData => prevData.filter(item => item.id !== productId));
//       } else {
//         console.log('No user data found in AsyncStorage.');
//         navigation.navigate('Login');
//       }
//     } catch (error) {
//       console.error('Error removing item from wishlist:', error);
//     }
//   };
//   const renderItem = ({ item }) => {
//     const imageSize = width / 2 - 20;
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
//           <TouchableOpacity onPress={handleGoBack}>
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
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#990107" />
//         </View>
//       ) : 
//       wishlistData.length === 0 ? (
//         <View style={styles.emptyContainer}>
//           <Image source={require('../../assests/wishlist-icon.png')} style={styles.emptyImage} />
//           <Text style={styles.emptyText}>No items..!</Text>
//           <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//             <View>
//             <Text style={styles.addnowText}>Add Now</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       ) :
//        (
//         <FlatList
//           data={wishlistData}
//           keyExtractor={item => item.id}
//           renderItem={renderItem}
//           horizontal={false}
//           numColumns={2}
//           contentContainerStyle={styles.container}
//         />
//       )}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emptyText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   addnowText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color:"#990107",
//     textDecorationLine: 'underline'
//   },
//   emptyImage: {
//     width:width*69/100, 
//     height:height*30/100,
//     resizeMode: 'contain',
//   },
// });
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

const { width, height } = Dimensions.get('window');

const WishlistPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [wishlistData, setWishlistData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [store_id, setstore_id] = useState(1);


const getConsoleValue = async () => {
  try {
    const consoleValue = await AsyncStorage.getItem('consoleValue');
    console.log("language id:", consoleValue);
    if (consoleValue !== null) {
      const storeIdFromAsyncStore = parseInt(consoleValue, 10);
      setstore_id(storeIdFromAsyncStore);
      console.log('Store ID:', storeIdFromAsyncStore);
    }
  } catch (error) {
    console.error('Error getting console value from AsyncStorage:', error);
  }
};

useEffect(() => {
  getConsoleValue();
}, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const customer_id = userData.id;
        const response = await getWishlist(customer_id, store_id);
        dispatch(getWishlistSuccess(response));
        setWishlistData(response.data);
        setLoading(false);
      } else {
        console.log('No user data found in AsyncStorage.');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error fetching wishlist:', error);
      dispatch(getWishlistFailure(error.message));
    } finally {
      setLoading(false);
    }
  };
  fetchData(); 
}, [store_id, dispatch, navigation]);


  // const [store_id, setstore_id] = useState(1)
  // const getConsoleValue = async () => {
  //   try {
  //     const consoleValue = await AsyncStorage.getItem('consoleValue');
  //     console.log("language id:", consoleValue);
  //     if (consoleValue !== null) {
        
  //       const storeIdFromAsyncStore = parseInt(consoleValue, 10);
  //       // Set the store_id state with the value retrieved from AsyncStoragess
  //       setstore_id(storeIdFromAsyncStore);
  //       // Log the store ID here
  //       console.log('Store ID:', storeIdFromAsyncStore);
  //     }
  //   } catch (error) {
  //     console.error('Error getting console value from AsyncStorage:', error);
  //   }
  // };
  // useEffect(() => {
  //   getConsoleValue();
  // }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const userDataString = await AsyncStorage.getItem('userData');
  //       if (userDataString) {
  //         const userData = JSON.parse(userDataString);
  //         const customer_id = userData.id;
  //         const response = await getWishlist(customer_id, store_id);
  //         dispatch(getWishlistSuccess(response));
  //         setWishlistData(response.data);
  //         setLoading(false);
  //       } else {
  //         console.log('No user data found in AsyncStorage.');
  //         navigation.navigate('Login');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching wishlist:', error);
  //       dispatch(getWishlistFailure(error.message)); // You might want to dispatch failure action here
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData(); 
  // }, [store_id]);
  const [quantity, setQuantity] = useState(1);
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
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
  const handlePress = () => {
    navigation.navigate('AddToCart');
  };
  const RemoveToWishlist = async (productId) => {
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const customer_id = userData.id;
        const action = 'false';
        dispatch(addWishlistStart());
        const response = await AddWishlist(customer_id, productId, action);
        dispatch(addWishlistSuccess(response));
        setWishlistData(prevData => prevData.filter(item => item.id !== productId));
      } else {
        console.log('No user data found in AsyncStorage.');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
      dispatch(addWishlistFailure(error.message)); // You might want to dispatch failure action here
    }
  };

  const renderItem = ({ item }) => {
    const imageSize = width / 2 - 20;
    const textSize = imageSize / 10;
    const textContainerWidth = imageSize;

    return (
      <View style={{
        
        padding: 10
      }}>

      <View style={{
        width: width * 45 / 100,
        // height: height * 40 / 100,
        padding: 10
      }}>
        <Image
          source={{ uri: item.image }}
          style={{ flex: 1, height: height * 30 / 100,  }}
        />
        <View style={{ alignSelf: "center" }}>
          <Text style={{ color: "#202020", fontSize: 15, fontWeight: "500" }} numberOfLines={1}>{item.name}</Text>
        </View>
        <TouchableOpacity onPress={() => handleAddToWishlist(item.id, item.name)} style={{
          position: 'absolute',
          top: 10,
          left: 115,
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
      <View style={{ justifyContent: "space-between", flexDirection: "row", borderRadius: 16, borderWidth: 1, borderColor: "#B9B9B9",width:width*0.3,alignSelf:"center",margin:10 }}>
                  <TouchableOpacity onPress={decrementQuantity}>
                    <View style={{ width: 40, height: 30, }}>
                      <Image source={require('../../assests/decrement.png')} style={{ width: 32, height: 32 }} />
                    </View>
                  </TouchableOpacity>
                  <View style={{ marginVertical: 5, width: 20, }}>
                    <Text>{quantity}</Text>
                  </View>
                  <TouchableOpacity onPress={incrementQuantity}>
                    <View >
                      <Image source={require('../../assests/increment.png')} style={{ width: 32, height: 32 }} />
                    </View>
                  </TouchableOpacity>
                </View>
                    <View style={{ backgroundColor: '#990107', width: width * 0.4, alignItems: 'center', height:35, justifyContent: 'center',alignItems:"center",alignSelf:"center" }}>
                    <TouchableOpacity onPress={handlePress}>
                      <Text style={{ fontSize: 17, fontWeight: "700", color: "#F5F5F5" }}>Add to cart</Text>
                  </TouchableOpacity>
                    </View>
                    
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity onPress={handleGoBack}>
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
      ) :
      (wishlistData.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image source={require('../../assests/wishlist-icon.png')} style={styles.emptyImage} />
          <Text style={styles.emptyText}>No items..!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View>
              <Text style={styles.addnowText}>Add Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) :
      (
        <FlatList
          data={wishlistData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={styles.container}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  emptyText: {
    fontSize: 20,
    marginTop: 20,
  },
  addnowText: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
  container: {
    paddingBottom: 20,
  },
});

export default WishlistPage;
