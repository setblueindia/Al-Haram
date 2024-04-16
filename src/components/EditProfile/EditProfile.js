import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,ActivityIndicator,Alert
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Profileupdate } from '../../redux/auth/authApi'
import { profileUpdateStart, profileUpdateSuccess, profileUpdateFailure } from '../../redux/auth/profileSlice';
import { Changepassw } from '../../redux/auth/authApi';
import {changepassStart,changepassSuccess,changepassFailure} from "../../redux/auth/changepassSlice"
const {width, height} = Dimensions.get('window');
const EditProfile = () => {

  const [store_id, setstore_id] = useState("1")
  const getConsoleValue = async () => {
    try {
      const consoleValue = await AsyncStorage.getItem('consoleValue');
      console.log("language id:", consoleValue);
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
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    const customer_id=Id;
    const email=Email;
    
    dispatch(profileUpdateStart()); 
    setLoading(true);
    try {
      const response = await Profileupdate(firstname, lastname, customer_id, email, store_id);
      dispatch(profileUpdateSuccess()); 
      setLoading(false);
      console.log("Profile update successful:", response);
      // navigation.navigate("Profile")
      navigation.navigate("Profile", {
        updatedData: {
          firstName: firstname,
          lastName: lastname,
          email:email
        }
      });
    } catch (error) {
      dispatch(profileUpdateFailure(error)); 
      console.error("Profile update failed:", error);
      setLoading(false);
    }
  };
  const handleChangePassword = async () => {
    dispatch(changepassStart());
    setLoading(true);
    const customer_id = Id;
    const password =oldpassword;
    const new_password =newPassword;

    try {
      let response = await Changepassw(customer_id, store_id, password, new_password); 
      response = response || {}; 
      if (Object.keys(response).length === 0 && response.constructor === Object) {
        console.log("Password changed successfully!");
        Alert.alert('Success', 'Password changed successfully!');
        navigation.navigate("Profile");
      } else {
        dispatch(changepassSuccess(response));
        console.log("Change Password successful:", response);
        navigation.navigate("Profile");
      }
      setLoading(false);
    } catch (error) {
      dispatch(changepassFailure(error)); // Dispatch failure action
      console.error("Change Password failed:", error);
      setLoading(false);
    }
  };
  
  
  // const handleChangePassword = async () => {
  //   dispatch(changepassStart());
  //   setLoading(true);
  //   const customer_id = Id;
  //   const password ="sneha.321";
  //   const new_password = "sneha=321";
  //   const store_id = 1;
  //   try {
  //     let response = await Changepassw(customer_id, store_id, password, new_password); 
  //   response = response || {}; 
  //   dispatch(changepassSuccess(response));
  //   setLoading(false);
  //   console.log("Change Password successful:", response);
  //   } catch (error) {
  //     dispatch(changepassFailure(error)); // Dispatch failure action
  //     console.error("Change Password failed:", error);
  //     setLoading(false);
  //   }
  // };
  useEffect(() => {
    AsyncStorage.getItem('userData')
      .then((userData) => {
        if (userData) {
          const parsedUserData = JSON.parse(userData);
          console.log("parsedUserData::",parsedUserData);
          const { email, firstname, lastname, mobile,id } = parsedUserData;
          console.log('id))))))))):', id);
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
  const [Email, setemail] = useState('');
  const [oldpassword, setpassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [confirmpsw, setconfirmpsw] = useState('');
  const [Id, setId] = useState();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  }
  const [selectedTab, setSelectedTab] = useState('Edit Profile');
  const [mobileNumber, setMobileNumber] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [newpasswordVisibility, setnewPasswordVisibility] = useState(true);
  const [confirmpasswordVisibility, setconfirmPasswordVisibility] = useState(true);
  const firstnameRef = useRef(null);
  const LastnameRef = useRef(null);
  const emailRef = useRef(null);
  const  PasswordRef = useRef(null);
  const  newPasswordRef = useRef(null);
  const confirmPassword = useRef(null);
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
              ref={firstnameRef}
                style={[styles.input, {color: 'black'}]}
                placeholder="Firstname"
                autoCapitalize="none"
                onChangeText={text => setFirstname(text)}
                value={firstname}
                onSubmitEditing={() => LastnameRef.current.focus()}
              />
            </View>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/profile.png')}
                style={[styles.icon, {marginLeft: 15}]}
              />
              <TextInput
              ref={LastnameRef}
                style={[styles.input, {color: 'black'}]}
                placeholder="Last Name"
                onChangeText={text => setLastname(text)}
                value={lastname}
                autoCapitalize="none"
                onSubmitEditing={() => emailRef.current.focus()}
              />
            </View>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/email.png')}
                style={[styles.icon, {marginLeft: 15}]}
              />
              <TextInput
              ref={emailRef}
                style={[styles.input, {color: 'black'}]}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={text => setemail(text)}
                value={Email}
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
            <TouchableOpacity 
            style={[styles.signInButton, loading && styles.signInButtonDisabled]}
              onPress={handleSubmit}> 
            {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.signInButtonText}>Update</Text>
              )}
           
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
              ref={PasswordRef}
                style={[styles.input, {color: 'black'}]}
                onChangeText={text => setpassword(text)}
                value={oldpassword}
                secureTextEntry={passwordVisibility}
                placeholder="Old Password"
                onSubmitEditing={() => newPasswordRef.current.focus()}
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
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/password.png')}
                style={[styles.icon, {marginLeft: 15}]}
              />
              <TextInput
              ref={newPasswordRef}
                style={[styles.input, {color: 'black'}]}
                onChangeText={text => setnewPassword(text)}
                value={newPassword}
                secureTextEntry={newpasswordVisibility}
                placeholder="New Password"
                onSubmitEditing={() => confirmPassword.current.focus()}
              />
              <TouchableOpacity
                onPress={() => setnewPasswordVisibility(!newpasswordVisibility)}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/3257/3257787.png',
                  }}
                  style={[
                    styles.icon,
                    {
                      justifyContent: 'flex-end',
                      tintColor: newpasswordVisibility ? '#8b0000' : '#9ADE7B',
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assests/password.png')}
                style={[styles.icon, {marginLeft: 15}]}
              />
              <TextInput
              ref={confirmPassword}
                style={[styles.input, {color: 'black'}]}
                onChangeText={text => setconfirmpsw(text)}
              value={confirmpsw}
                secureTextEntry={confirmpasswordVisibility}
                placeholder="Confirm Password"
                onSubmitEditing={() => passwordRef.current.focus()}
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
                      tintColor: confirmpasswordVisibility ? '#8b0000' : '#9ADE7B',
                    },
                  ]}
                />
              </TouchableOpacity>  
            </View>
            <TouchableOpacity 
            style={[styles.signInButton, loading && styles.signInButtonDisabled]}
            onPress={handleChangePassword}> 
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.signInButtonText}>Change Password</Text>
              )}
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
    signInButtonDisabled:{
      backgroundColor: '#ccc',
    }
  });