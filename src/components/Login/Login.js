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
import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
import { setLogin } from '../../redux/auth/authSlice';
import { loginAPI } from '../../redux/auth/authApi';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { startLoading, loginSuccess, loginFailure } from '../../redux/auth/mobileLoginSlice'; // adjust the import path as needed
import { MoblieLoginAPI } from '../../redux/auth/authApi';
import { useTranslation } from 'react-i18next';
const Login = () => {
  const { t } = useTranslation();
  const [userData, setuserData] = useState(null)
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("data==>", userInfo)
      console.log("getdata==>", user.name)
      setuserData(userInfo)
    } catch (error) {
      // ToastAndroid.show("Error "+error, ToastAndroid.LONG);
      console.log("userdata==>", error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("SIGN_IN_CANCELLED==>", error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("IN_PROGRESS==>", error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("PLAY_SERVICES_NOT_AVAILABLE==>", error)
      } else {
        console.log("error==>", error)
      }
    }
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "934068840595-t5vl2tn16tubthfef9ue37d6ki6tj2d6.apps.googleusercontent.com",
      offlineAccess: true,
    });
  }, []);
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(t('Sign In With Email'));
  const [mobile, setMobileNumber] = useState('966');
  const [otpResponse, setOtpResponse] = useState(null);
  const [error, setError] = useState(null);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const MoblieLogin = async () => {
    try {
      dispatch(startLoading());
      const responseData = await MoblieLoginAPI(mobile);
      dispatch(loginSuccess(responseData));
      console.log("Login Response:", responseData);
      const { otp } = responseData;
      const phoneNumber = mobile;
      const OtpVerify = "login";
      navigation.navigate('OTPVerification', { phoneno: phoneNumber, otpcode: otp, OtpVerify });
    } catch (error) {
      dispatch(loginFailure(error.message));
      console.error("Login Error:", error);
    }
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword'); // Replace 'ForgotPassword' with the name of your Forgot Password screen
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    return password.length >= 6;
  };
  const handleLogin = async () => {
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
      const loginResponse = await loginAPI(email, password);
      if (loginResponse.success) {
        console.log('Login successful:', loginResponse.user);
        const userToken = await AsyncStorage.getItem('userToken');
        console.log('User Token:', userToken);
        dispatch(setLogin({ token: userToken }));
        navigation.navigate('Tabs');
      } else {
        console.error('Login failed:', loginResponse);
        alert(loginResponse.message || 'Invalid username or password!');
      }
    } catch (error) {
      console.error('API call failed:', error.message);
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  const handleSignUpPress = () => {
    navigation.navigate('Signup');
  };
  const renderTab = tabName => {
    const isSelected = selectedTab === tabName;
    const handleTabClick = () => {
      setSelectedTab(tabName);
    };
    return (
      <TouchableOpacity
        key={tabName}
        style={[styles.tabButton, isSelected ? styles.selectedTab : null]}
        onPress={handleTabClick}>
        <Text style={[styles.tabText, isSelected ? { color: '#8b0000' } : null]}>
          {tabName}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderTabContent = () => {
    if (selectedTab === t('Sign In With Email')) {
      return (
        <ScrollView >
          <View style={styles.tabContent}>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/iconEmail.png')}
                style={[styles.icon, { marginLeft: 15, }]}
              />
              <TextInput
                ref={emailRef}
                style={[styles.input, { color: 'black' }]}
                placeholder={t('E-mail')}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={text => setEmail(text)}
                value={email}
                placeholderTextColor={'#cacbcc'}
                onSubmitEditing={() => passwordRef.current.focus()}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/iconPassword.png')}
                style={[styles.icon, { marginLeft: 15 }]}
              />
              <TextInput
                ref={passwordRef}
                style={[styles.input, { color: 'black' }]}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={passwordVisibility}
                placeholder={t('Password')}
                placeholderTextColor={'#cacbcc'}
                onSubmitEditing={() => alert('Forgot Password pressed')}
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
                      tintColor: passwordVisibility ? '#8b0000' : '#9ADE7B',
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={{ alignSelf: 'flex-end', color: "#990107" }}>{t('Forgot Password')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rememberMeButton}>
              <Image
                source={require('../../assests/iconChecked.png')}
                style={styles.checkIcon}
              />

              <View />

              <Text style={styles.rememberMeText}>{t('Remember me')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleLogin}
              style={[styles.signInButton, loading && styles.signInButtonDisabled]}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.signInButtonText}>{t('Sign In1')}</Text>
              )}
            </TouchableOpacity>
            {userData != null && <Text style={{ fontSize: 20, color: "blue" }}>{userData.user.name}</Text>}
            <View
              style={{
                flex: 1,

              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: width,

                  marginVertical: 5
                }}>

                <TouchableOpacity
                  onPress={signIn}
                >
                  <View style={{ justifyContent: "flex-start", flexDirection: "row", borderRadius: 1, borderWidth: 1, borderColor: "#959B97", width: width * 40 / 100, height: height * 6 / 100, alignSelf: "center", paddingHorizontal: 10 }}>
                    <View style={{ alignSelf: "center", padding: 10 }}>

                      <Image
                        source={require('../../assests/google.png')}
                        style={styles.icon}
                      />
                    </View>
                    <View style={{ alignSelf: "center" }}>
                      <Text>Google</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity >
                  <View style={{ justifyContent: "flex-start", flexDirection: "row", borderRadius: 1, borderWidth: 1, borderColor: "#959B97", width: width * 40 / 100, height: height * 6 / 100, alignSelf: "center", paddingHorizontal: 10 }}>
                    <View style={{ alignSelf: "center", padding: 10 }}>

                      <Image
                        source={require('../../assests/apple.png')}
                        style={styles.icon}
                      />
                    </View>
                    <View style={{ alignSelf: "center" }}>
                      <Text>Apple</Text>
                    </View>
                  </View>

                </TouchableOpacity>

              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ backgroundColor: '#e3e3e4', height: 1, flex: 1, alignSelf: 'center' }} />
              <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: "#828282" }}>{t('New Customer')}</Text>
              <View style={{ backgroundColor: '#e3e3e4', height: 1, flex: 1, alignSelf: 'center' }} />
            </View>
            <TouchableOpacity
              style={styles.signInButton2}
              onPress={handleSignUpPress}
            >
              <Text style={styles.signupButtonText}>{t('Sign Up')}</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      );
    } else if (selectedTab === t('Use Mobile No')) {
      return (
        <ScrollView >
          <View style={styles.tabContent}>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/cellphone.png')}
                style={styles.icon}
              />
              <TextInput
                style={[styles.input, { color: 'black' }]}
                placeholder="Mobile number"
                keyboardType="phone-pad"
                value={mobile}
                onChangeText={text => setMobileNumber(text)}
                placeholderTextColor={'black'}
              />
            </View>

            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={{ alignSelf: 'flex-end' }}>{t('Forgot Password')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={MoblieLogin}
              style={[styles.signInButton, loading && styles.signInButtonDisabled]}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.signInButtonText}>{t('Send OTP')}</Text>
              )}
            </TouchableOpacity>
            <View
              style={{
                flex: 1,

              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: width,

                  marginVertical: 5
                }}>

                <TouchableOpacity
                  onPress={signIn}
                >
                  <View style={{ justifyContent: "flex-start", flexDirection: "row", borderRadius: 1, borderWidth: 1, borderColor: "#959B97", width: width * 40 / 100, height: height * 6 / 100, alignSelf: "center", paddingHorizontal: 10 }}>
                    <View style={{ alignSelf: "center", padding: 10 }}>

                      <Image
                        source={require('../../assests/google.png')}
                        style={styles.icon}
                      />
                    </View>
                    <View style={{ alignSelf: "center" }}>
                      <Text>Google</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity >
                  <View style={{ justifyContent: "flex-start", flexDirection: "row", borderRadius: 1, borderWidth: 1, borderColor: "#959B97", width: width * 40 / 100, height: height * 6 / 100, alignSelf: "center", paddingHorizontal: 10 }}>
                    <View style={{ alignSelf: "center", padding: 10 }}>

                      <Image
                        source={require('../../assests/apple.png')}
                        style={styles.icon}
                      />
                    </View>
                    <View style={{ alignSelf: "center" }}>
                      <Text>Apple</Text>
                    </View>
                  </View>

                </TouchableOpacity>

              </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <View style={{ backgroundColor: '#e3e3e4', height: 1, flex: 1, alignSelf: 'center' }} />
              <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: "#828282" }}>{t('New Customer')}</Text>
              <View style={{ backgroundColor: '#e3e3e4', height: 1, flex: 1, alignSelf: 'center' }} />
            </View>
            <TouchableOpacity
              style={styles.signInButton2}
              onPress={handleSignUpPress}
            >
              <Text style={styles.signupButtonText}>{t('Sign Up')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }
  };

  return (
    <View>
      <View>
        <View style={{ backgroundColor: "#f8f8f8", width: width, height: height * 35 / 100 }}>
          <View style={{ marginHorizontal: 10, margin: 20 }}>
            <TouchableOpacity onPress={handleGoBack}>
              <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Image
              source={require('../../assests/Logo.png')}
              style={{ width: width * 65 / 100, height: height * 25 / 100 }}
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
          alignItems: 'center',
        }}>
          {renderTab(t('Sign In With Email'))}
          {renderTab(t('Use Mobile No'))}
        </View>
        <View style={{ backgroundColor: "#fff", height: height }}>
          {renderTabContent()}
        </View>
      </View>
    </View>
  )
}
export default Login;
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
    height: height * 20 / 100,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  tabContent: {
    width: width * 95 / 100,
    marginVertical: 10,
    alignSelf: "center",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#d8dad8",
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
    marginVertical: 15,
  },
  signInButton2: {
    backgroundColor: '#F3F3F3',
    paddingVertical: 7,
    borderRadius: 2,
    alignItems: 'center',
    marginBottom: 20,
    width: '95%',
    marginHorizontal: 10,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#129A3C"
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  signupButtonText: {
    color: '#454545',
    fontSize: 18,
  },
});