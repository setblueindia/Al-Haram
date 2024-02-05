import React,{useState,useEffect} from 'react';
import {View, Text, SafeAreaView, Pressable, TouchableOpacity, ScrollView,Image} from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const Profile  = (props) => {
  
  const [isPressed, setIsPressed] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);
  const [isPressed3, setIsPressed3] = useState(false);
  const [isPressed4, setIsPressed4] = useState(false);
  const [isPressed5, setIsPressed5] = useState(false);
  const [isPressed6, setIsPressed6] = useState(false);
   const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const handlePress = () => {
    // Toggle the state to switch between red and the original color
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

  const handlePress5 = () => {
    setIsPressed5(!isPressed5);
  };
  const handlePress6 = () => {
    setIsPressed6(!isPressed6);
  };
  useEffect(() => {
    AsyncStorage.getItem('userData')
      .then((userData) => {
        if (userData) {
          const { firstname, lastname, email: userEmail } = JSON.parse(userData);
          setFirstName(firstname);
          setLastName(lastname);
          setEmail(userEmail);
        }
      })
      .catch((error) => {
        console.error('Error retrieving user data from AsyncStorage:', error);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      <View >
      <View style={{  padding: 20, borderBottomColor: 'lightgray',
            borderBottomWidth: 1.5,
            
            backgroundColor:"#fff5f5"
             }}>
          <View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
                   <Image
              source={
                firstName && lastName
                  ? require('../../assests/user.png')
                  : require('../../assests/userhand.png') // Change to the admin image path
              }
              style={{ width: 50, height: 50, tintColor: '#980404' }}
            />
          
            <View style={{ alignSelf: 'center' }}>
              <Feather name="edit" size={20} color="black" />
            </View>
          </View>
                     <View style={{}}>
             {firstName && lastName ? (
              <Text style={{ color: '#9f0202', fontSize: 18, }}>
                {`${firstName} ${lastName}`}
              </Text>
            ) : (
              <Text style={{ color: '#9f0202', fontSize: 18, }}>
                User Login
              </Text>
            )}
              {email ? (
              <Text style={{ color: 'black', fontSize: 15, }}>
                {email}
              </Text>
            ) : (
              <Text style={{ color: 'black', fontSize: 15, }}>
                User email
              </Text>
            )}
            </View>
          
  
        </View>
        <TouchableOpacity 
         style={{ backgroundColor: isPressed ? '#f8f8f8': '#fff'  }}
         onPress={handlePress}
>
        <View style={{  padding: 20, borderBottomColor: 'lightgray',
            borderBottomWidth: 1.5,
            }}>
          <View style={{ flexDirection: 'row' }}>
            <Feather name="heart" size={27} color="black" />
            <View style={{ alignSelf: 'center', paddingHorizontal: 10, flex: 1 }}>
              <Text
                style={{ color: 'black', fontSize: 18, fontWeight:"600" }}>
                Wishlist
              </Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
              <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
            </View>
          </View>
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
        </TouchableOpacity >
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
        <TouchableOpacity    style={{ backgroundColor: isPressed5 ? '#f8f8f8' : '#fff'   }}
      onPress={handlePress5}>

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
            <View style={{ alignSelf: 'center' }}>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity   style={{ backgroundColor: isPressed6 ?  '#f8f8f8' :'#fff' }}
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
        </TouchableOpacity>
     
      </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default Profile