
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
  const dispatch = useDispatch();
  const { phoneno, otpcode, OtpVerify } = route.params;
  const handleVerifyOTP = async () => {
    const mobile= phoneno;
    const otpCode= otpcode;
    const otpType= OtpVerify;
    const isOtpFilled = otp.every(value => value.length > 0);
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
          <View style={{margin:10}}>
            <Text style={{textAlign:"center",fontSize:16,color:"#707070"}}>Verification has been send to</Text>
            <Text style={{textAlign:"center",fontSize:16,color:"#707070"}}>{phoneno}</Text>
          </View>
          <View style={{alignSelf:"center",width:"90%",}}>
          <Text style={{textAlign:"center",fontSize:18,color:"#990107"}}>Resend</Text>
          </View>
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
});