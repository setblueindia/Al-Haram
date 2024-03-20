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
import { useTranslation } from 'react-i18next';
const Signup = () => {
  const { t } = useTranslation();
    const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const validateEmail = (email) => {
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
        if (!validateEmail(email)) {
          setLoading(false);
          return alert('Invalid email address');
        }
        if (!validatePassword(password)) {
          setLoading(false);
          return alert('Invalid password. Minimum 6 characters required');
        }
      dispatch(registrationRequest());
      const responseData = await registerAPI(firstname, lastname, email, password, otptype, mobile);
      dispatch(registrationSuccess(responseData));
      console.log('Registration successful:', responseData);
      const OtpVerify ="register"
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
  const [loading, setLoading] = useState(false);
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
        <ScrollView>
        <View style={{backgroundColor:"#fff",height:height}}>
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
              style={[styles.input, {color: 'black'}]}
              placeholder={t('first name')}
              autoCapitalize="none"
              onChangeText={text => setfirstname(text)}
              value={firstname}
              placeholderTextColor={'#cacbcc'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/profile.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder={t('last name')}
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
              placeholder={t('E-mail')}
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
              placeholder={t('Moblie No')}
              keyboardType="numeric"
              autoCapitalize="none"
              onChangeText={text => setmobile(text)}
              value={mobile}
              placeholderTextColor={'#cacbcc'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/password.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder={t('Password')}
              autoCapitalize="none"
              onChangeText={text => setpassword(text)}
              value={password}
              placeholderTextColor={'#cacbcc'}
            />
          </View>
           <View style={styles.inputContainer}>
            <Image
              source={require('../../assests/password.png')}
              style={[styles.icon, {marginLeft: 15,margin:5}]}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder={t('confirm-password')}
              autoCapitalize="none"
              onChangeText={text => setconfirmPassword(text)}
              value={confirmPassword}
              placeholderTextColor={'#cacbcc'}
            />
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
});