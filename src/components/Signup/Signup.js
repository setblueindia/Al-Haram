import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import { registerAPI } from '../../redux/auth/authApi'; 
import { registrationRequest, registrationSuccess, registrationFailure } from '../../redux/auth/registerSlice'; 
const {width, height} = Dimensions.get('window');
import {useDispatch} from 'react-redux';
<<<<<<< HEAD
import { useTranslation } from 'react-i18next';
const Signup = () => {
  const { t } = useTranslation();
=======
const Signup = () => {
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const validateEmail = (email) => {
<<<<<<< HEAD
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    return password.length >= 6; 
  };
  const handleRegistration = async () => {
  if (!firstname || !lastname || !email || !mobile || !password || !confirmPassword) {
    alert('Please fill in all fields');
    return;
  }
    const otptype = "register";
    try {
        setLoading(true);
=======
    // Use a regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    // Add your password validation logic here
    // For example, you can check if the password meets certain criteria
    return password.length >= 6; // Minimum 6 characters for this example
  };
  const handleRegistration = async () => {
    
      // Validation checks for required fields
  if (!firstname || !lastname || !email || !mobile || !password || !confirmPassword) {
    // If any of the required fields are empty, show an alert
    alert('Please fill in all fields');
    return;
  }

    const otptype = "register";
    const store_id = storeid;
    try {
      
        setLoading(true);
    
        // Validate email
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
        if (!validateEmail(email)) {
          setLoading(false);
          return alert('Invalid email address');
        }
<<<<<<< HEAD
=======
    
        // Validate password
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
        if (!validatePassword(password)) {
          setLoading(false);
          return alert('Invalid password. Minimum 6 characters required');
        }
<<<<<<< HEAD
      dispatch(registrationRequest());
      const responseData = await registerAPI(firstname, lastname, email, password, otptype, mobile);
      dispatch(registrationSuccess(responseData));
      console.log('Registration successful:', responseData);
      const OtpVerify ="register"
=======
    
      dispatch(registrationRequest());
      const responseData = await registerAPI(firstname, lastname, email, password, otptype, store_id, mobile);
      dispatch(registrationSuccess(responseData));
      console.log('Registration successful:', responseData);
      const OtpVerify ="register"
  
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
      const { message, otp } = responseData;
      navigation.navigate("OTPVerification", { phoneno: mobile, otpcode: otp,OtpVerify });
  
    } catch (error) {
      dispatch(registrationFailure(error.message));
      console.error('Registration failed:', error);
    }
  };
  const emailRef = useRef(null);
  const [email, setEmail] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [mobile, setmobile] = useState('+966');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
<<<<<<< HEAD
  const [loading, setLoading] = useState(false);
  return (
=======
  const [storeid, setstoreid] = useState('1');
  const [loading, setLoading] = useState(false);
  return (
  
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
      <View>
        <View style={{backgroundColor:"#f8f8f8",width:width,height:height*30/100}}>
        <View style={{ marginHorizontal: 10,margin:10 }}>
          <TouchableOpacity onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
        </View>
          <View style={{alignSelf:"center"}}>
          <Image
<<<<<<< HEAD
          source={require('../../assests/Logo.png')} 
=======
          source={require('../../assests/Logo.png')} // Replace with your splash image path
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          style={{width:width*65/100,height:height*25/100}}
          resizeMode="contain"
        />
          </View>
        </View>
        <ScrollView>
        <View style={{backgroundColor:"#fff",height:height}}>
        <View style={{alignSelf:"center",width:"90%",borderBottomWidth:1,borderBottomColor:"lightgray",}}>
<<<<<<< HEAD
          <Text style={{textAlign:"center",fontSize:22,color:"#202020",marginVertical:10}}>{t('Create your Account')}</Text>
        </View>
        <View style={{marginVertical:10}}>
=======
          <Text style={{textAlign:"center",fontSize:22,color:"#202020",marginVertical:10}}>Create your Account</Text>
        </View>
        <View style={{marginVertical:10}}>
      

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
        <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/profile.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
<<<<<<< HEAD
              placeholder={t('first name')}
=======
              placeholder="first name"

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
              autoCapitalize="none"
              onChangeText={text => setfirstname(text)}
              value={firstname}
              placeholderTextColor={'#cacbcc'}
<<<<<<< HEAD
=======
            
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/profile.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
<<<<<<< HEAD
              placeholder={t('last name')}
=======
              placeholder="last name"
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
              autoCapitalize="none"
              onChangeText={text => setlastname(text)}
              value={lastname}
              placeholderTextColor={'#cacbcc'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/email.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
                <TextInput
              ref={emailRef}
              style={[styles.input, {color: 'black'}]}
<<<<<<< HEAD
              placeholder={t('E-mail')}
=======
              placeholder="Email"
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setEmail(text)}
              value={email}
              placeholderTextColor={'#cacbcc'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/phoneicon.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
             <TextInput
              style={[styles.input, {color: 'black'}]}
<<<<<<< HEAD
              placeholder={t('Moblie No')}
=======
              placeholder="Mobile no"
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
              keyboardType="numeric"
              autoCapitalize="none"
              onChangeText={text => setmobile(text)}
              value={mobile}
              placeholderTextColor={'#cacbcc'}
            />
<<<<<<< HEAD
=======
         
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/password.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
            <TextInput
<<<<<<< HEAD
              style={[styles.input, {color: 'black'}]}
              placeholder={t('Password')}
=======
         
              style={[styles.input, {color: 'black'}]}
              placeholder="Password"
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
              autoCapitalize="none"
              onChangeText={text => setpassword(text)}
              value={password}
              placeholderTextColor={'#cacbcc'}
<<<<<<< HEAD
=======
          
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
            />
          </View>
           <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/password.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
            <TextInput
<<<<<<< HEAD
              style={[styles.input, {color: 'black'}]}
              placeholder={t('confirm-password')}
=======
            
              style={[styles.input, {color: 'black'}]}
              placeholder="confirmPassword"
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
              autoCapitalize="none"
              onChangeText={text => setconfirmPassword(text)}
              value={confirmPassword}
              placeholderTextColor={'#cacbcc'}
            />
<<<<<<< HEAD
          </View>
          <TouchableOpacity
=======
           
          </View>
          <TouchableOpacity
     
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          style={[styles.signInButton, loading && styles.signInButtonDisabled]}
          disabled={loading}
          onPress={handleRegistration} 
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
<<<<<<< HEAD
            <Text style={styles.signInButtonText}>{t('Submit')}</Text>
=======
            <Text style={styles.signInButtonText}>Submit</Text>
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          )}
        </TouchableOpacity>
     </View>
            </View>
            </ScrollView>
    </View>
  )
}
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
export default Signup
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  signInButtonDisabled: {
<<<<<<< HEAD
    backgroundColor: '#ccc', 
  },
  signInButtonDisabled2: {
    backgroundColor: '#ccc', 
  },
  buttonContainer: {
    top: 20,
    borderRadius: 20, 
=======
    backgroundColor: '#ccc', // Set a different color for the disabled state
  },
  signInButtonDisabled2: {
    backgroundColor: '#ccc', // Set a different color for the disabled state
  },
  buttonContainer: {
    top: 20,
    borderRadius: 20, // Set the border radius to 20
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    overflow: 'hidden',
  },
  header: {
    height: '100%',
<<<<<<< HEAD
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
=======
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
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    alignSelf: 'center',
    marginVertical: 70,
    height: '50%',
  },
  logo: {
    alignItems: 'center',
<<<<<<< HEAD
    width: 140, 
=======
    width: 140, // Set the width of the image as needed
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
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
<<<<<<< HEAD
    backgroundColor: 'red',
  },
  facebookButton: {
    backgroundColor: '#1877F2',
=======
    backgroundColor: 'red', // You can set your desired color
  },
  facebookButton: {
    backgroundColor: '#1877F2', // Facebook blue color
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
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
    alignSelf: 'center',
    marginBottom: 15,
   borderWidth:1,
   borderRadius:3,
   borderColor:"#d8dad8",
   width:width*90/100
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
    borderRadius:2,
    alignSelf: 'center',
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
<<<<<<< HEAD
});
=======
});



// import { View, Text } from 'react-native'
// import React from 'react'

// const Signup = () => {
//   return (
//     <View>
//       <Text>Signup</Text>
//     </View>
//   )
// }

// export default Signup
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
