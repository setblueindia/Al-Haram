import React,{useState,useEffect} from 'react';
import {View, Text, SafeAreaView, Pressable, TouchableOpacity, ScrollView,Image,Linking} from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import NumberOfItems from '../NumberOfItems/NumberOfItems';
const Profile  = () => {
  const [blink, setBlink] = useState(false);
  const phoneNumber = '8001111422'; 
  const emailAddress = 'support@alharamstores.com'; 
  const handlePresstel = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  const handlePressEmail = () => {
    Linking.openURL(`mailto:${emailAddress}`);
  };
  useEffect(() => {
    let intervalId;
    if (itemCount > 0) {
      intervalId = setInterval(() => {
        setBlink(prevBlink => !prevBlink);
      }, 1000); // Toggle blink every second
    } else {
      clearInterval(intervalId); 
      setBlink(false); 
    }
    return () => clearInterval(intervalId); 
  }, [itemCount]);
  const [isPressed, setIsPressed] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);
  const [isPressed3, setIsPressed3] = useState(false);
  const [isPressed4, setIsPressed4] = useState(false);
  const [isPressed5, setIsPressed5] = useState(false);
  const [isPressed6, setIsPressed6] = useState(false);
   const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigateToWishlist = () => {
    navigation.navigate('WishlistPage'); 
  };
  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  const handlePress2 = () => {
    setIsPressed2(!isPressed2);
  };
  const handlePress3 = () => {
    setIsPressed3(!isPressed3);
  };
  const navigation = useNavigation();
  const handlePress4 = () => {
    navigation.navigate('Addresslist'); 
  };
  const handlePresslogin = () => {
    if (!firstName || !lastName) {
      navigation.navigate('Login'); 
    }
  };
  useEffect(() => {
    AsyncStorage.getItem('userData')
      .then((userData) => {
        if (userData) {
          const { firstname, lastname,  } = JSON.parse(userData);
          setFirstName(firstname);
          setLastName(lastname);
          // setEmail(userEmail);
        }
      })
      .catch((error) => {
        console.error('Error retrieving user data from AsyncStorage:', error);
      });
  }, []);
  const itemCount = 2; 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View >
      <View style={{  padding: 20, borderBottomColor: 'lightgray',
            borderBottomWidth: 1.5,
            backgroundColor:"#fff5f5"
             }}>
          <View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
            <TouchableOpacity onPress={handlePresslogin}>
              <View>
              <Image
             source={
              firstName && lastName
                ? require('../../assests/user.png')
                : require('../../assests/userhand.png') 
            }
              style={{ width: 50, height: 50, tintColor: '#980404' }}
            />
               <View style={{}}>
             {firstName && lastName ? (
              <Text style={{ color: '#9f0202', fontSize: 18, }}>
                {`${firstName} ${lastName}`}
              </Text>
            ) : (
              <Text style={{ color: '#9f0202', fontSize: 18, }}>
                Login
              </Text>
            )}
            </View>
              </View>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
    <View style={{ alignSelf: 'center' }}>
      <Feather name="edit" size={20} color="black" />
    </View>
  </TouchableOpacity>
          </View>
                
        </View>
        <TouchableOpacity 
         style={{ backgroundColor: isPressed ? '#f8f8f8': '#fff'  }}
         onPress={handlePress}
>
        <View style={{  padding: 20, borderBottomColor: 'lightgray',
            borderBottomWidth: 1.5,
            }}>
               {firstName && lastName ? (
            <TouchableOpacity onPress={navigateToWishlist}>
              <View style={{ flexDirection: 'row' }}>
              {itemCount > 0 && (
        blink ? (
          <Feather name="heart" size={27} color={'black'} />
        ) : (
          <AntDesign name="heart" size={27} color="#990107" />
        )
      )}
                <View style={{ alignSelf: 'center', paddingHorizontal: 10, flex: 1,flexDirection:"row" }}>
                  <Text
                    style={{ color: 'black', fontSize: 18, fontWeight: "600" }}>
                    Wishlist 
                  </Text>
                  <View >

                  <NumberOfItems itemCount={itemCount} style={{ color: 'green' }}/>
                  </View>
                  {/* <NumberOfItems itemCount={itemCount} /> */}
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={{ flexDirection: 'row' }}>
                <Feather name="heart" size={27} color="black" />
                <View style={{ alignSelf: 'center', paddingHorizontal: 10, flex: 1 }}>
                  <Text
                    style={{ color: 'black', fontSize: 18, fontWeight: "600" }}>
                    Wishlist
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
                </View>
              </View>
            </TouchableOpacity>
          )}
              
        </View>
        </TouchableOpacity>
       <TouchableOpacity 
        style={{ backgroundColor: isPressed2 ? '#f8f8f8' : '#fff'  }}
        onPress={handlePress2}>

        <View style={{  padding: 20,borderBottomColor: 'lightgray',
            borderBottomWidth: 1.5,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="wallet-outline" size={28} color="black" />
            <View style={{ alignSelf: 'center', paddingHorizontal: 10, flex: 1 }}>
              <Text
                style={{ color: 'black', fontSize: 18, fontWeight:"600"}}>
                My Wallet
              </Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
            </View>
          </View>
        </View>
       </TouchableOpacity>
        <TouchableOpacity   style={{ backgroundColor: isPressed3 ? '#f8f8f8'  :'#fff'  }}
      onPress={handlePress3} >

        <View style={{  padding: 20, borderBottomColor: 'lightgray',
            borderBottomWidth: 1.5,
         }}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="shoppingcart" size={28} color="black" />
            <View style={{ alignSelf: 'center', paddingHorizontal: 10, flex: 1 }}>
              <Text
                style={{ color: 'black', fontSize: 18, fontWeight:"600" }}>
                My Order
              </Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
            </View>
          </View>
        </View>
        </TouchableOpacity>
        {firstName && lastName ? (
          <TouchableOpacity    style={{ backgroundColor: isPressed4 ? '#f8f8f8' :  '#fff' }}
          onPress={handlePress4}>
    
            <View style={{  padding: 20,  borderBottomColor: 'lightgray',
                borderBottomWidth: 1.5,
               }}>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome6 name="address-book" size={28} color="black" />
                <View style={{ alignSelf: 'center', paddingHorizontal: 10, flex: 1 }}>
                  <Text
                    style={{ color: 'black', fontSize: 18, fontWeight:"600" }}>
                    Address Book
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
                </View>
              </View>
            </View>
            </TouchableOpacity> 
          ) : (
             <TouchableOpacity    style={{ backgroundColor: isPressed4 ? '#f8f8f8' :  '#fff' }}
             onPress={() => navigation.navigate('Login')}>

        <View style={{  padding: 20,  borderBottomColor: 'lightgray',
            borderBottomWidth: 1.5,
           }}>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome6 name="address-book" size={28} color="black" />
            <View style={{ alignSelf: 'center', paddingHorizontal: 10, flex: 1 }}>
              <Text
                style={{ color: 'black', fontSize: 18, fontWeight:"600" }}>
                Address Book
              </Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
            </View>
          </View>
        </View>
        </TouchableOpacity> 
          )}
        <TouchableOpacity    
   >

        <View style={{  padding: 20, borderBottomColor: 'lightgray',
            borderBottomWidth: 1.5,
             }}>
          <View style={{ flexDirection: 'row' }}>
            <Feather name="phone-forwarded" size={28} color="black" />
            <View style={{ alignSelf: 'center', paddingHorizontal: 10, flex: 1 }}>
              <Text
                style={{color: 'black', fontSize: 18, fontWeight:"600" }}>
              Customer Service
              </Text>
            </View>
          </View>
          <View style={{padding:5}}>

          <TouchableOpacity onPress={handlePresstel}>
      <Text style={{ color: 'black', fontSize: 16 }}>Tel: {phoneNumber}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handlePressEmail}>
      <Text style={{ color: 'black', fontSize: 16, margin: 5 }}>
        E-Mail: {emailAddress}
      </Text>
    </TouchableOpacity>
          </View>
        </View>
        </TouchableOpacity>
        {!(firstName && lastName) && (
  <TouchableOpacity
    style={{ backgroundColor: isPressed6 ? '#f8f8f8' : '#fff' }}
    onPress={handlePresslogin}>
    <View
      style={{
        padding: 20,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1.5,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <SimpleLineIcons name="logout" size={28} color="black" />
        <View style={{ alignSelf: 'center', paddingHorizontal: 10, flex: 1 }}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: '600' }}>
            Login
          </Text>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
        </View>
      </View>
    </View>
  </TouchableOpacity>
)}

        {/* <TouchableOpacity
  style={{ backgroundColor: isPressed6 ? '#f8f8f8' : '#fff' }}>
  <View style={{
    padding: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1.5,
  }}>
    <View style={{ flexDirection: 'row' }}>
      <SimpleLineIcons name="logout" size={28} color="black" />
      <View style={{ alignSelf: 'center', paddingHorizontal: 10, flex: 1 }}>
        <Text
          style={{ color: 'black', fontSize: 18, fontWeight: "600" }}>
         Login
        </Text>
      </View>
      <View style={{ alignSelf: 'center' }}>
        <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
      </View>
    </View>
  </View>
</TouchableOpacity> */}

        {/* <TouchableOpacity   style={{ backgroundColor: isPressed6 ?  '#f8f8f8' :'#fff' }}
      onPress={handlePress6}>
        <View style={{  padding: 20, borderBottomColor: 'lightgray',
            borderBottomWidth: 1.5,
            }}>
          <View style={{ flexDirection: 'row' }}>
            <SimpleLineIcons name="logout" size={28} color="black" />
            <View style={{ alignSelf: 'center', paddingHorizontal: 10, flex: 1 }}>
              <Text
                style={{ color: 'black', fontSize: 18, fontWeight:"600" }}>
               Logout
              </Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
            </View>
          </View>
        </View>
        </TouchableOpacity> */}
     
      </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default Profile