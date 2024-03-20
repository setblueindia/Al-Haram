import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
<<<<<<< HEAD
  Dimensions, Alert
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Resetpass } from '../../redux/auth/authApi';
import { forgotpassStart, forgotpassSuccess, forgotpassFailure } from '../../redux/auth/forgotpassSlice';
import { useDispatch } from 'react-redux';
const { width, height } = Dimensions.get('window');
=======
  Dimensions,Alert
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Resetpass} from '../../redux/auth/authApi';
import {forgotpassStart,forgotpassSuccess, forgotpassFailure } from '../../redux/auth/forgotpassSlice'; 
import { useDispatch } from 'react-redux'; 
const {width, height} = Dimensions.get('window');
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
=======
  const [store_id, setstoreId] = useState('1');
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const handleGoBack = () => {
    navigation.goBack();
  };
<<<<<<< HEAD
  const dispatch = useDispatch();
  const handleResetPassword = async () => {
    setLoading(true);
    try {
      dispatch(forgotpassStart());
      const response = await Resetpass(email);
      dispatch(forgotpassSuccess(response));
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
=======
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const handleResetPassword = async () => {
    setLoading(true); // Set loading state to true to indicate loading

    try {
      // Dispatch resetPassStart action
      dispatch(forgotpassStart());

      // Call your API function here, passing the necessary data (email)
      const response = await Resetpass(email,store_id);

      // Dispatch resetPassSuccess action with the response data
      dispatch(forgotpassSuccess(response));

      console.log('Reset Password Success:', response);
      console.log('Reset Password Success:', response.message); // Logging the message

    // Display the message in an alert
    Alert.alert(
      'Password Reset Successful',
      response.message, // Access the message property from the response
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
      // Dispatch resetPassFailure action with the error message
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
      dispatch(forgotpassFailure(error.message));

      console.error('Reset Password Error:', error);
    } finally {
<<<<<<< HEAD
      setLoading(false);
=======
      setLoading(false); // Set loading state back to false after API call
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    }
  };

  return (
    <View>
      <View>
<<<<<<< HEAD
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
=======
        <View style={{backgroundColor:"#F5F5F5",width:width,height:height*35/100}}>
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
        <View style={{alignSelf:"center",width:"90%",borderBottomWidth:1,borderBottomColor:"lightgray"}}>
          <View style={{alignSelf:"center",width:"90%",}}>
          <Text style={{textAlign:"center",fontSize:22,color:"#202020"}}>Forgot Password</Text>
          <View style={{margin:5}}>
            <Text style={{textAlign:"center",fontSize:16,color:"#707070"}}>Please enter your email address and we will send you password by email immadiatly</Text>
          </View>
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          </View>
        </View>
      </View>
      <View>
        <View style={styles.inputContainer}>
<<<<<<< HEAD
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
=======
            <Image
              source={require('../../assests/iconEmail.png')}
              style={[styles.icon, {marginLeft: 15,}]}
            />
            <TextInput
              ref={emailRef}
              style={[styles.input, {color: 'black'}]}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setEmail(text)}
              value={email}
              placeholderTextColor={'#cacbcc'}
              // onSubmitEditing={() => passwordRef.current.focus()}
            />
          </View>
          <TouchableOpacity
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          style={[styles.signInButton, loading && styles.signInButtonDisabled]}
          disabled={loading}
          onPress={handleResetPassword} >
          <Text style={styles.signInButtonText}>Sign In</Text>
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
<<<<<<< HEAD
    backgroundColor: '#ccc',
=======
    backgroundColor: '#ccc', 
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  },
  signInButtonDisabled2: {
    backgroundColor: '#ccc',
  },
  buttonContainer: {
    top: 20,
<<<<<<< HEAD
    borderRadius: 20,
=======
    borderRadius: 20, 
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
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
<<<<<<< HEAD
    borderColor: '#d3d3d3',
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 40,
=======
    borderColor: '#d3d3d3', 
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
    width: 140, 
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
    backgroundColor: 'red', 
  },
  facebookButton: {
    backgroundColor: '#1877F2', 
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
<<<<<<< HEAD
    height: height * 20 / 100,
=======
    height: height*20/100,
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  tabContent: {
<<<<<<< HEAD
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
=======
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
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
<<<<<<< HEAD
    margin: 5
=======
   margin:5
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
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
<<<<<<< HEAD
    borderRadius: 2,
    alignSelf: "center",
=======
    borderRadius:2,
    alignSelf:"center",
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    marginBottom: 20,
    width: '90%',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  signInButton2: {
    backgroundColor: '#F3F3F3',

    paddingVertical: 7,
<<<<<<< HEAD
    borderRadius: 2,
=======
    borderRadius:2,
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    alignItems: 'center',
    marginBottom: 20,
    width: '95%',
    marginHorizontal: 10,
    marginVertical: 15,
<<<<<<< HEAD
    borderWidth: 1,
    borderColor: "#129A3C"
=======
    borderWidth:1,
    borderColor:"#129A3C"
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
<<<<<<< HEAD
    textAlign: "center"
=======
    textAlign:"center"
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  },
  signupButtonText: {
    color: '#454545',
    fontSize: 18,
  },
<<<<<<< HEAD
});
=======
});



>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
