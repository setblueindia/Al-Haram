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
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import { registerAPI } from '../../redux/auth/authApi'; 
import { registrationRequest, registrationSuccess, registrationFailure } from '../../redux/auth/registerSlice'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('window');
import {useDispatch} from 'react-redux';
import { useTranslation } from 'react-i18next';
const Signup = () => {
  const { t } = useTranslation();
    const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const [store_id, setstore_id] = useState("1")
  const getConsoleValue = async () => {
    try {
      const consoleValue = await AsyncStorage.getItem('consoleValue');
      // console.log("language id:", consoleValue);
      if (consoleValue !== null) {
        
        const storeIdFromAsyncStore = parseInt(consoleValue, 10);
        // Set the store_id state with the value retrieved from AsyncStoragess
        setstore_id(storeIdFromAsyncStore);
        // Log the store ID here
        console.log('Store ID:', storeIdFromAsyncStore);
      }
    } catch (error) {
      console.error('Error getting console value from AsyncStorage:', error);
    }
  };
  useEffect(() => {
    getConsoleValue();
  }, []);
  const validateEmail = (Email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(Email);
  };
 
  const handleRegistration = async () => {
    let isValid = true;
    if (!Firstname) {
      
      setFirstnameError('First name is required');
      isValid = false;
    } else {
      setFirstnameError('');
    }

    if (!Lastname) {
      setLastnameError('Last name is required');
      isValid = false;
    } else {
      setLastnameError('');
    }

    if (!Email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(Email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }
    if (!Mobile) {
      setMobileError('Mobile number is required');
      isValid = false;
    } else if (Mobile.length !== 13) {
      setMobileError('Mobile number must be 10 digits');
      isValid = false;
    } else {
      setMobileError('');
    }
    if (!Password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (Password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm password');
      isValid = false;
    } else if (confirmPassword !== Password) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }
    if (isValid) {
      try {
        setLoading(true);
        const firstname = Firstname;
        const lastname = Lastname;
        const email = Email;
        const password = Password;
        const mobile = Mobile;
        const otptype = "register";
        
        dispatch(registrationRequest());
        const responseData = await registerAPI(firstname, lastname, email, password, otptype, mobile,store_id);
        if (!responseData || !responseData.status) {
          throw new Error('Invalid response from server');
        }
        if (responseData.status === 1) {
          dispatch(registrationSuccess(responseData));
          console.log('Registration successful:', responseData);
          console.log("Registration otp:", responseData.otp);
          const OtpVerify = "register";
          const { otp } = responseData;
          const Otpdata= responseData.otp;
          navigation.navigate('OTPVerification', { phoneno:mobile, otpcode: otp, OtpVerify,Otpdata });
        } else {
          throw new Error(responseData.message);
        }
      } catch (error) {
        dispatch(registrationFailure(error.message));
        console.error('Registration failed:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const [Email, setEmail] = useState('');
  const [Firstname, setfirstname] = useState('');
  const [Lastname, setlastname] = useState('');
  const [Mobile, setmobile] = useState('+96');
  const [Password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [confirmpasswordVisibility, setconfirmPasswordVisibility] = useState(true);
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  return (
      <View>
        <View style={{backgroundColor:"#f8f8f8",width:width,height:height*30/100}}>
        <View style={{ marginHorizontal: 10,margin:10 }}>
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
      

      <SafeAreaView 
       style={{ 
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,}}>
 <ScrollView>
        <View style={{backgroundColor:"#fff"}}>
        <View style={{alignSelf:"center",width:"90%",borderBottomWidth:1,borderBottomColor:"lightgray",}}>
          <Text style={{textAlign:"center",fontSize:22,color:"#202020",marginVertical:10}}>{t('Create your Account')}</Text>
        </View>
        <View style={{marginVertical:10}}>
        <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/profile.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
            <TextInput
            ref={firstnameRef}
              style={[styles.input, {color: 'black'}]}
              placeholder={t('first name')}
              autoCapitalize="none"
              onChangeText={text => setfirstname(text)}
              value={Firstname}
              placeholderTextColor={'#cacbcc'}
              onSubmitEditing={() => lastnameRef.current.focus()}
            />
          </View>
          <View style={{bottom:5,marginHorizontal:15}}>
          {firstnameError ? <Text style={styles.errorText}>*{firstnameError}</Text> : null}
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/profile.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
            <TextInput
            ref={lastnameRef}
              style={[styles.input, {color: 'black'}]}
              placeholder={t('last name')}
              autoCapitalize="none"
              onChangeText={text => setlastname(text)}
              value={Lastname}
              placeholderTextColor={'#cacbcc'}
              onSubmitEditing={() => emailRef.current.focus()}
            />
          </View>
          <View style={{bottom:5,marginHorizontal:15}}>
          {lastnameError ? <Text style={styles.errorText}>*{lastnameError}</Text> : null}
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/email.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
                <TextInput
              ref={emailRef}
              style={[styles.input, {color: 'black'}]}
              placeholder={t('E-mail')}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setEmail(text)}
              value={Email}
              placeholderTextColor={'#cacbcc'}
              onSubmitEditing={() => mobileRef.current.focus()}
            />
          </View>
          <View style={{bottom:5,marginHorizontal:15}}>
          {emailError ? <Text style={styles.errorText}>*{emailError}</Text> : null}
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/phoneicon.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
             <TextInput
             ref={mobileRef}
              style={[styles.input, {color: 'black'}]}
              placeholder={t('Moblie No')}
              keyboardType="numeric"
              autoCapitalize="none"
              onChangeText={text => setmobile(text)}
              value={Mobile}
              maxLength={13}
              placeholderTextColor={'#cacbcc'}
              onSubmitEditing={() => passwordRef.current.focus()}
            />
          </View>
          <View style={{bottom:5,marginHorizontal:15}}>
          {mobileError ? <Text style={styles.errorText}>*{mobileError}</Text> : null}
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/password.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
            <TextInput
            ref={passwordRef}
              style={[styles.input, {color: 'black'}]}
              placeholder={t('Password')}
              autoCapitalize="none"
              onChangeText={text => setpassword(text)}
              value={Password}
              secureTextEntry={passwordVisibility}
              placeholderTextColor={'#cacbcc'}
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
            />
             <TouchableOpacity
                onPress={() => setPasswordVisibility(!passwordVisibility)}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/3257/3257787.png',
                  }}
                  style={[
                    styles.icon,
                    {
                      justifyContent: 'flex-end',
                      margin:5,
                      tintColor: passwordVisibility ? '#8b0000' : '#9ADE7B',
                    },
                  ]}
                />
              </TouchableOpacity>
          </View>
          <View style={{bottom:5,marginHorizontal:15}}>
         
          {passwordError ? <Text style={styles.errorText}>*{passwordError}</Text> : null}
          </View>
         
           <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/password.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
            <TextInput
            ref={confirmPasswordRef}
              style={[styles.input, {color: 'black'}]}
              placeholder={t('confirm-password')}
              autoCapitalize="none"
              onChangeText={text => setconfirmPassword(text)}
              value={confirmPassword}
              secureTextEntry={confirmpasswordVisibility}
              placeholderTextColor={'#cacbcc'}
             
            />
                   <TouchableOpacity
                onPress={() => setconfirmPasswordVisibility(!confirmpasswordVisibility)}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/3257/3257787.png',
                  }}
                  style={[
                    styles.icon,
                    {
                      justifyContent: 'flex-end',
                      margin:5,
                      tintColor: confirmpasswordVisibility ? '#8b0000' : '#9ADE7B',
                    },
                  ]}
                />
              </TouchableOpacity>
          </View>
          <View style={{bottom:5,marginHorizontal:15}}>
          {confirmPasswordError ? <Text style={styles.errorText}>*{confirmPasswordError}</Text> : null}
          </View>
          
          <TouchableOpacity
          style={[styles.signInButton, loading && styles.signInButtonDisabled]}
          disabled={loading}
          onPress={handleRegistration} 
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.signInButtonText}>{t('Submit')}</Text>
          )}
        </TouchableOpacity>
     </View>
            </View>
            </ScrollView>
      </SafeAreaView>
       
          
        
    </View>
  )
}
export default Signup
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
    height: height*30/100,
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
    marginBottom: 10,
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
  errorText: {
    color: '#980404',
    fontSize: 14,
    // marginTop: 5,
  },
});