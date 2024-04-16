import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Dimensions, Alert,ActivityIndicator
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Resetpass } from '../../redux/auth/authApi';
import { forgotpassStart, forgotpassSuccess, forgotpassFailure } from '../../redux/auth/forgotpassSlice';
import { useDispatch } from 'react-redux';
const { width, height } = Dimensions.get('window');
const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const handleGoBack = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();
  const handleResetPassword = async () => {
    setLoading(true);
    try {
      dispatch(forgotpassStart());
      const response = await Resetpass(email);
      dispatch(forgotpassSuccess(response));
      setLoading(false);
      console.log('Reset Password Success:', response);
      console.log('Reset Password Success:', response.message);
      Alert.alert(
        'Password Reset Successful',
        response.message,
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      dispatch(forgotpassFailure(error.message));

      console.error('Reset Password Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <View>
        <View style={{ backgroundColor: "#F5F5F5", width: width, height: height * 35 / 100 }}>
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
        <View style={{ alignSelf: "center", width: "90%", borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
          <View style={{ alignSelf: "center", width: "90%", }}>
            <Text style={{ textAlign: "center", fontSize: 22, color: "#202020" }}>Forgot Password</Text>
            <View style={{ margin: 5 }}>
              <Text style={{ textAlign: "center", fontSize: 16, color: "#707070" }}>Please enter your email address and we will send you password by email immadiatly</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assests/iconEmail.png')}
            style={[styles.icon, { marginLeft: 15, }]}
          />
          <TextInput
            ref={emailRef}
            style={[styles.input, { color: 'black' }]}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
            value={email}
            placeholderTextColor={'#cacbcc'}
          />
        </View>
        <TouchableOpacity
          style={[styles.signInButton, loading && styles.signInButtonDisabled]}
          disabled={loading}
          onPress={handleResetPassword} >
            {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.signInButtonText}>Send</Text>
              )}
          
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default ForgotPassword
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
    alignSelf: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#d8dad8",
    width: "90%",
    marginVertical: 20
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    margin: 5
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
    alignSelf: "center",
    marginBottom: 20,
    width: '90%',
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
    textAlign: "center"
  },
  signupButtonText: {
    color: '#454545',
    fontSize: 18,
  },
});