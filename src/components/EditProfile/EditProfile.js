import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');
const EditProfile = () => {
  useEffect(() => {
    AsyncStorage.getItem('userData')
      .then((userData) => {
        if (userData) {
          const parsedUserData = JSON.parse(userData);
          const { email, firstname, lastname, mobile,id } = parsedUserData;
          console.log('id:', id);
          console.log('Email:', email);
          console.log('First Name:', firstname);
          console.log('Last Name:', lastname);
          console.log('Mobile Number:', mobile);
          setemail(email);
          setFirstname(firstname);
          setLastname(lastname);
          setMobileNumber(mobile);
          setId(id)
        }
      })
      .catch((error) => {
        console.error('Error retrieving user data from AsyncStorage:', error);
      }); 
  }, [dispatch]);

 
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [confirmpsw, setconfirmpsw] = useState('');
  const [id, setId] = useState()


  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();
  const [store_id, setstoreId] = useState('1');
  const [selectedTab, setSelectedTab] = useState('Edit Profile');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpResponse, setOtpResponse] = useState(null);
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const renderTab = tabName => {
    const isSelected = selectedTab === tabName;
    return (
      <TouchableOpacity
        key={tabName}
        style={[styles.tabButton, isSelected ? styles.selectedTab : null]}
        onPress={() => setSelectedTab(tabName)}>
        <Text style={[styles.tabText, isSelected ? {color: '#8b0000'} : null]}>
          {tabName}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderTabContent = () => {
    const navigation = useNavigation();
    if (selectedTab === 'Edit Profile') {
      return (
                  <View style={styles.tabContent}>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/profile.png')}
                style={[styles.icon, {marginLeft: 15}]}
              />
              <TextInput
                style={[styles.input, {color: 'black'}]}
                placeholder="Firstname"
                autoCapitalize="none"
                onChangeText={text => setFirstname(text)}
                value={firstname}
              />
            </View>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/profile.png')}
                style={[styles.icon, {marginLeft: 15}]}
              />
              <TextInput
                style={[styles.input, {color: 'black'}]}
                placeholder="Last Name"
                onChangeText={text => setLastname(text)}
                value={lastname}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/email.png')}
                style={[styles.icon, {marginLeft: 15}]}
              />
              <TextInput
                style={[styles.input, {color: 'black'}]}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={text => setemail(text)}
                value={email}
              />
            </View>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/password.png')}
                style={[styles.icon, {marginLeft: 15}]}
              />
              <TextInput
                
                style={[styles.input, {color: 'black'}]}
                placeholder="Mobile Number"
          onChangeText={text => setMobileNumber(text)}
          value={mobileNumber}
          editable={false} 
              />
            </View>
            <TouchableOpacity style={styles.signInButton}  >
            <Text style={styles.signInButtonText}>Update</Text>
            </TouchableOpacity>
           
          </View>
      );
    } else if (selectedTab === 'Change Password') {
      return (
          <View style={styles.tabContent}>
              <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/password.png')}
                style={[styles.icon, {marginLeft: 15}]}
              />
              <TextInput
                style={[styles.input, {color: 'black'}]}
                onChangeText={text => setpassword(text)}
                value={password}
                secureTextEntry={passwordVisibility}
                placeholder="Old Password"
              />
            </View>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/password.png')}
                style={[styles.icon, {marginLeft: 15}]}
              />
              <TextInput
                style={[styles.input, {color: 'black'}]}
                onChangeText={text => setnewPassword(text)}
                value={newPassword}
                placeholder="New Password"
              />
            </View>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/password.png')}
                style={[styles.icon, {marginLeft: 15}]}
              />
              <TextInput
                style={[styles.input, {color: 'black'}]}
                onChangeText={text => setconfirmpsw(text)}
              value={confirmpsw}
                secureTextEntry={passwordVisibility}
                placeholder="Confirm Password"
              />     
            </View>
            <TouchableOpacity style={styles.signInButton}  >
              <Text style={styles.signInButtonText}>Change Password</Text>
            </TouchableOpacity>
          </View>
      );
    }
  };
  return (
    <View>
      <View>
        <View style={{backgroundColor:"#f8f8f8",width:width,height:height*35/100}}>
        <View style={{ marginHorizontal: 10,margin:20 }}>
          <TouchableOpacity onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
        </View>
          <View style={{alignSelf:"center"}}>
                <Image
          source={require('../../assests/Logo.png')} // Replace with your splash image path
          style={{width:width*65/100,height:height*25/100}}
          resizeMode="contain"
        />
          </View>
        </View>
      </View>
      <View>
              <View style={{
                    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    height: 55,
    alignItems: 'center',}}>
           {renderTab('Edit Profile')}
           {renderTab('Change Password')}
         </View>
         <View style={{backgroundColor:"#fff",height:height}}>
         {renderTabContent()}
         </View>
       </View>
    </View>
  )
}
export default EditProfile;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    signInButtonDisabled: {
      backgroundColor: '#ccc', // Set a different color for the disabled state
    },
    buttonContainer: {
      top: 20,
      borderRadius: 20, // Set the border radius to 20
      overflow: 'hidden',
    },
    header: {
      height: '100%',
      //justifyContent: 'center',
      //alignItems: 'center',
    },
    headerred: {
      height: 170,
      // backgroundColor:"red"
      backgroundColor: '#8b0000',
    },
    logocontainer: {
      borderColor: '#d3d3d3', // Set your desired border color
      borderWidth: 2,
      backgroundColor: '#fff',
      borderRadius: 40,
      // width: "75%",
      alignSelf: 'center',
      marginVertical: 70,
      height: '50%',
    },
    logo: {
      alignItems: 'center',
      width: 140, // Set the width of the image as needed
      height: 80,
      marginHorizontal: 20,
    },
    container1: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
  
    input: {
      width: '80%',
      marginBottom: 15,
      padding: 10,
      borderBottomWidth: 1,
    },
    headerContent: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 500,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 20,
    },
    loginButtons: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    loginButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 10,
    },
    googleButton: {
      backgroundColor: 'red', // You can set your desired color
    },
    facebookButton: {
      backgroundColor: '#1877F2', // Facebook blue color
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    tabBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'lightgray',
      height: 50,
      alignItems: 'center',
    },
    tabButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
    },
    selectedTab: {
      borderBottomWidth: 2,
      borderColor: '#8b0000',
      paddingVertical: 15,
    },
    tabText: {
      color: 'black',
      fontSize: 17,
    },
  
    icon: {
      width: 20,
      height: 20,
      marginRight: 50,
    },
    input: {
      flex: 1,
      height: 40,
      color: 'black',
    },
    tabContent: {
      width: width*95/100,
      marginVertical: 30,
      alignSelf:"center"
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius:1,
      borderWidth:1,
      marginBottom: 20,
      borderColor:"lightgray"

    },
    icon: {
      width: 30,
      height: 30,
      marginRight: 20,
    },
    input: {
      flex: 1,
      height: 40,
      fontSize: 16,
    },
    rememberMeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    rememberMeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    checkboxPlaceholder: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: '#007bff',
      marginRight: 10,
    },
    checkIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    rememberMeText: {
      fontSize: 14,
      color: '#000',
    },
    signInButton: {
      backgroundColor: '#990107',
  
      paddingVertical: 7,
      borderRadius: 2,
      alignItems: 'center',
      marginBottom: 20,
      width: '95%',
      marginHorizontal: 10,
      marginVertical: 20,
    },
    signInButtonText: {
      color: '#fff',
      fontSize: 18,
    },
  });
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   signInButtonDisabled: {
//     backgroundColor: '#ccc', // Set a different color for the disabled state
//   },
//   signInButtonDisabled2: {
//     backgroundColor: '#ccc', // Set a different color for the disabled state
//   },
//   buttonContainer: {
//     top: 20,
//     borderRadius: 20, // Set the border radius to 20
//     overflow: 'hidden',
//   },
//   header: {
//     height: '100%',
//     //justifyContent: 'center',
//     //alignItems: 'center',
//   },
//   headerred: {
//     height: 170,
//     // backgroundColor:"red"
//     backgroundColor: '#8b0000',
//   },
//   logocontainer: {
//     borderColor: '#d3d3d3', // Set your desired border color
//     borderWidth: 2,
//     backgroundColor: '#fff',
//     borderRadius: 40,
//     // width: "75%",
//     alignSelf: 'center',
//     marginVertical: 70,
//     height: '50%',
//   },
//   logo: {
//     alignItems: 'center',
//     width: 140, // Set the width of the image as needed
//     height: 80,
//     marginHorizontal: 20,
//   },
//   container1: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },

//   input: {
//     width: '80%',
//     marginBottom: 15,
//     padding: 10,
//     borderBottomWidth: 1,
//   },
//   headerContent: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: 20,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 500,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//   },
//   loginButtons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   loginButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginHorizontal: 10,
//   },
//   googleButton: {
//     backgroundColor: 'red', // You can set your desired color
//   },
//   facebookButton: {
//     backgroundColor: '#1877F2', // Facebook blue color
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   tabBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: 'lightgray',
//     height: 50,
//     alignItems: 'center',
//   },
//   tabButton: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 10,
//   },
//   selectedTab: {
//     borderBottomWidth: 2,
//     borderColor: '#8b0000',
//     paddingVertical: 15,
//   },
//   tabText: {
//     color: 'black',
//     fontSize: 17,
//   },

//   icon: {
//     width: 20,
//     height: height*20/100,
   

//   },
//   input: {
//     flex: 1,
//     height: 40,
//     color: 'black',
//   },
//   tabContent: {
//     width:width*95/100,
//     marginVertical: 10,
//     alignSelf:"center",
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//    borderWidth:1,
//    borderRadius:3,
//    borderColor:"#d8dad8",
//   },
//   icon: {
//     width: 30,
//     height: 30,
//     marginRight: 20,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//   },
//   rememberMeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   rememberMeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 20,
//   },
//   checkboxPlaceholder: {
//     width: 20,
//     height: 20,
//     borderWidth: 1,
//     borderColor: '#007bff',
//     marginRight: 10,
//   },
//   checkIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   rememberMeText: {
//     fontSize: 14,
//     color: '#000',
//   },
//   signInButton: {
//     backgroundColor: '#990107',

//     paddingVertical: 7,
//     borderRadius:2,
//     alignItems: 'center',
//     marginBottom: 20,
//     width: '95%',
//     marginHorizontal: 10,
//     marginVertical: 15,
//   },
//   signInButton2: {
//     backgroundColor: '#F3F3F3',

//     paddingVertical: 7,
//     borderRadius:2,
//     alignItems: 'center',
//     marginBottom: 20,
//     width: '95%',
//     marginHorizontal: 10,
//     marginVertical: 15,
//     borderWidth:1,
//     borderColor:"#129A3C"
//   },
//   signInButtonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   signupButtonText: {
//     color: '#454545',
//     fontSize: 18,
//   },
// });