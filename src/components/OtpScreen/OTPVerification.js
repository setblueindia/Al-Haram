
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Dimensions,Alert
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useNavigation,useRoute} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { otpVerificationRequest, otpVerificationSuccess, otpVerificationFailure } from '../../redux/auth/otpSlice'; // Adjust the import path as per your file structure
import { Otpverify } from '../../redux/auth/authApi'; 
const {width, height} = Dimensions.get('window');
const OTPVerification = () => {
  const route = useRoute();
<<<<<<< HEAD
  const dispatch = useDispatch();
  const { phoneno, otpcode, OtpVerify } = route.params;
=======
  // const phoneno = route.params.phoneno;
  // const otpcode = route.params.otpcode;
  const dispatch = useDispatch();
  const { phoneno, otpcode, OtpVerify } = route.params;

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  const handleVerifyOTP = async () => {
    const mobile= phoneno;
    const otpCode= otpcode;
    const otpType= OtpVerify;
    const isOtpFilled = otp.every(value => value.length > 0);
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    if (!isOtpFilled) {
      Alert.alert('Error', 'Please enter an OTP');
      return;
    }
    dispatch(otpVerificationRequest()); 
    try {
      const response = await Otpverify(mobile, otpCode, otpType);
      dispatch(otpVerificationSuccess(response.data)); 
      Alert.alert('Success', 'OTP verification successful');
      console.log("data122",response);
      navigation.navigate('Tabs');
    } catch (error) {
      dispatch(otpVerificationFailure(error.message)); 
      Alert.alert('Error', error.message);
    }
  };
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpTextInput = useRef([]);
  const handleChangeText = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value.length === 0 && index > 0) {
      otpTextInput.current[index - 1].focus();
    } else if (index < otp.length - 1 && value.length === 1) {
      otpTextInput.current[index + 1].focus();
    }
  }; 
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={{backgroundColor:"#F5F5F5",width:width,height:height*35/100}}>
        <View style={{ marginHorizontal: 10,margin:20 }}>
          <TouchableOpacity onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
        </View>
          <View style={{alignSelf:"center"}}>
                <Image
          source={require('../../assests/Logo.png')} 
          style={{width:width*65/100,height:height*25/100}}
          resizeMode="contain"
        />
          </View>
        </View>
        <View style={{alignSelf:"center",width:"90%",borderBottomWidth:1,borderBottomColor:"lightgray"}}>
          <View style={{alignSelf:"center",width:"90%",}}>
            <Text style={{textAlign:"center",fontSize:22,color:"#990107"}}>{phoneno}</Text>
          <View style={{margin:5}}>
            <Text style={{textAlign:"center",fontSize:16,color:"#707070"}}>OTP Verification</Text>
          </View>
          </View>
        </View>
      </View>
      <View>
     <View>
     <View style={styles.otp}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          style={styles.input}
          value={value}
          onChangeText={text => handleChangeText(index, text)}
          keyboardType="numeric"
          maxLength={1}
          ref={ref => otpTextInput.current[index] = ref}
        />
      ))}
    </View>
    <View style={{alignSelf:"center",width:"90%",}}>
<<<<<<< HEAD
=======
          
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          <View style={{margin:10}}>
            <Text style={{textAlign:"center",fontSize:16,color:"#707070"}}>Verification has been send to</Text>
            <Text style={{textAlign:"center",fontSize:16,color:"#707070"}}>{phoneno}</Text>
          </View>
          <View style={{alignSelf:"center",width:"90%",}}>
          <Text style={{textAlign:"center",fontSize:18,color:"#990107"}}>Resend</Text>
          </View>
<<<<<<< HEAD
=======
        
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          </View>
          <TouchableOpacity
          style={[styles.signInButton, loading && styles.signInButtonDisabled]}
          disabled={loading} 
          onPress={handleVerifyOTP}
          >
          <Text style={styles.signInButtonText}>Submit</Text>
        </TouchableOpacity>
     </View>
      </View>
    </View>
  )
}
export default OTPVerification
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  signInButtonDisabled: {
    backgroundColor: '#ccc', 
  },
  signInButtonDisabled2: {
    backgroundColor: '#ccc',
  },
  buttonContainer: {
    top: 20,
    borderRadius: 20, 
    overflow: 'hidden',
  },
  header: {
    height: '100%',
  },
  headerred: {
    height: 170,
    backgroundColor: '#8b0000',
  },
  logocontainer: {
    borderColor: '#d3d3d3', 
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 40,
<<<<<<< HEAD
=======
    // width: "75%",
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    alignSelf: 'center',
    marginVertical: 70,
    height: '50%',
  },
  logo: {
    alignItems: 'center',
    width: 140, 
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
    backgroundColor: 'red', 
  },
  facebookButton: {
    backgroundColor: '#1877F2', 
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
    height: height*20/100,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  tabContent: {
    width:width*95/100,
    marginVertical: 10,
    alignSelf:"center",
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf:"center",
    marginBottom: 15,
   borderWidth:1,
   borderRadius:3,
   borderColor:"#d8dad8",
   width:"90%",
   marginVertical:20
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
   margin:5
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
    borderRadius:2,
    alignSelf:"center",
    marginBottom: 20,
    width: '90%',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  signInButton2: {
    backgroundColor: '#F3F3F3',

    paddingVertical: 7,
    borderRadius:2,
    alignItems: 'center',
    marginBottom: 20,
    width: '95%',
    marginHorizontal: 10,
    marginVertical: 15,
    borderWidth:1,
    borderColor:"#129A3C"
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign:"center"
  },
  signupButtonText: {
    color: '#454545',
    fontSize: 18,
  },
  otp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: 'white',

  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 24,
    paddingHorizontal: 10, 
    borderRadius:10,
    borderColor:"#C5C5C5",
    backgroundColor:"#F3F3F3"
  },
<<<<<<< HEAD
});
=======
});

// import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
// import React, { useState, useEffect } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { Otpverify } from '../../redux/auth/authApi';
// import { useRoute } from '@react-navigation/native';
// const OTPVerification = ({ route }) => {
//   const { mobile } = route.params;
//   const phoneNumber = route.params?.phoneNumber || null;
//   const navigation = useNavigation();
//   const [otpCode, setOtpCode] = useState('');
//   const [mobileNumber, setMobileNumber] = useState(phoneNumber);
//   const handleVerifyOTP = async () => {
//     try {
//       if (!mobileNumber) {
//         console.error('Mobile number is empty or not provided');
//         // Handle the case where mobile number is empty or not provided
//         return;
//       }

//       // Verify the OTP using the Otpverify function from your authApi
//       const response = await Otpverify(mobileNumber, otpCode, 'login'); // Change 'login' to the appropriate value

//       // Check if the response is defined and has the expected structure
//       if (response && response.status !== undefined) {
//         // Check if the OTP verification was successful
//         if (response.status === 1) {
//           // Successful OTP verification
//           console.log('OTP verification successful:', response.message);

//           // You can navigate to the next screen or take appropriate actions here
//           // For example, you can use navigation.navigate('NextScreen');
//         } else {
//           // OTP verification failed
//           console.error('OTP verification failed:', response.message);
//           // Handle the error, show an alert, or take other appropriate actions
//         }
//       } else {
//         // Handle the case where the response is undefined or doesn't have the expected structure
//         console.error('Unexpected response format:', response);
//       }
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//       // Handle the error, show an alert, or take other appropriate actions
//     }
//   };


//   useEffect(() => {
//     if (phoneNumber) {
//       console.log('Received phone number:', phoneNumber);
//       // Do something with the received phone number if needed
//     }
//   }, [phoneNumber]);


//   return (
//     <View style={styles.container}>

//       <View style={styles.headerred}>
//         <View style={styles.logocontainer}>
//           <Image
//             source={require('../../assests/Logo.png')}
//             style={styles.logo}
//             resizeMode="contain"
//           />
//           <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 40 }}>

//             {phoneNumber && (
//               <Text style={{ fontSize: 20, fontWeight: '200', color: "black" }}>
//                 {phoneNumber}
//               </Text>
//             )}
//             <Text style={{ fontSize: 20, marginVertical: 10, fontWeight: '200', color: "black" }}>OTP Verification</Text>

//             <TextInput

//               style={{
//                 width: 300,
//                 height: 60,
//                 borderWidth: 0,
//                 borderColor: 'gray',
//                 marginHorizontal: 5,
//                 textAlign: 'center',
//                 fontSize: 18, borderRadius: 13, shadowColor: '#000',
//                 shadowOffset: {
//                   width: 0,
//                   height: 2,
//                 },
//                 shadowOpacity: 0.25,
//                 shadowRadius: 3.84,
//                 elevation: 5,
//                 backgroundColor: 'white',
//               }}
//               // maxLength={1}
//               keyboardType="numeric"

//               value={otpCode}
//               onChangeText={text => setOtpCode(text)}
//             />

//             <Text style={{ marginTop: 20, fontSize: 17, }}>Verification code has been send to</Text>
//             {/* <Text> {phoneNumber}</Text> */}
//             <Text style={{ marginTop: 10, fontSize: 19, fontWeight: "800", color: "#8b0000" }}>RESEND</Text>
//           </View>
//           <TouchableOpacity
//             style={{
//               backgroundColor: 'red',
//               paddingVertical: 7,
//               borderRadius: 28,
//               alignItems: 'center',
//               width: 290,
//               marginVertical: 25,
//             }}
//             onPress={handleVerifyOTP}
//           >
//             <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>Submit</Text>
//           </TouchableOpacity>

//         </View>

//       </View>


//     </View>
//   )
// }

// export default OTPVerification
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     flex: 1
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
//     backgroundColor: "#8b0000"
//   },
//   logocontainer: {
//     borderColor: '#d3d3d3', // Set your desired border color
//     borderWidth: 2,
//     backgroundColor: "#fff",
//     borderRadius: 40,
//     width: "75%",
//     alignSelf: "center",
//     marginVertical: 70,
//     height: "100%"
//   },
//   logo: {

//     alignItems: "center",
//     width: 230,  // Set the width of the image as needed
//     height: 160,
//     marginHorizontal: 15
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
//     marginTop: 500
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
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1, // Border Bottom Width for the underline
//     borderBottomColor: 'lightgray', // Border Bottom Color
//     paddingHorizontal: 30,
//     marginBottom: 60,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 20,
//     marginVertical: 30
//   },

//   icon: {
//     width: 20,
//     height: 20,
//     marginRight: 50,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//   },
//   tabContent: {
//     width: '100%',
//     marginVertical: 30
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1, // Border Bottom Width for the underline
//     borderBottomColor: 'lightgray', // Border Bottom Color
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,

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
//     marginHorizontal: 20
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
//     backgroundColor: 'red',
//     paddingVertical: 7,
//     borderRadius: 28,
//     alignItems: 'center',
//     marginBottom: 20,
//     width: "95%", marginHorizontal: 10,
//     marginVertical: 20
//   },
//   signInButtonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// })
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
