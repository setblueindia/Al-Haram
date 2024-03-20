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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          const customer_id = userData.id;
          const store_id = '1';
          setLoading(true);
          dispatch(getWishlistStart());
          getWishlist(customer_id, store_id)
            .then(response => {
              dispatch(getWishlistSuccess(response));
              setWishlistData(response.data);
              setLoading(false);
              console.log("Wishlist data:", response); 
              navigation.navigate('Profile', { wishlistLength: response.data.length });
            })
            .catch(error => {
              dispatch(getWishlistFailure(error));
              console.error('Error fetching wishlist:', error);
              setLoading(false); 
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
  const renderItem = ({ item }) => {
    const imageSize = width / 2 - 20;
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
      ) : wishlistData.length === 0 ? (
        <View style={styles.emptyContainer}>
         
          <Image source={require('../../assests/wishlist-icon.png')} style={styles.emptyImage} />
          <Text style={styles.emptyText}>No items..!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View>
            <Text style={styles.addnowText}>Add Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={wishlistData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={styles.container}
        />
      )}
    </View>
  );
};
const styles = {
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
    },
    container2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',flex:0.9
  },
  container: {
    flexGrow: 1,
  },
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
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    // color:"#990107"
  },
  addnowText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"#990107",
    textDecorationLine: 'underline'
  },
  emptyImage: {
    width:width*69/100, 
    height:height*30/100,
    resizeMode: 'contain',
  },
};
export default WishlistPage;