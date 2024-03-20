<<<<<<< HEAD
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal, Alert } from 'react-native'
=======
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal,Alert} from 'react-native'
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
<<<<<<< HEAD
import { AddressAdd } from '../../redux/mainStack/mainStackApi';
import { setAddressLoading, setAddressData, setAddressError } from '../../redux/mainStackSlice/addressaddSlice';
=======
import { AddressList } from '../../redux/mainStack/mainStackApi';
import { setAddressData } from '../../redux/mainStackSlice/addressListSlice';
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
import { StateApi } from "../../redux/mainStack/mainStackApi";
import { setStateData, setError, selectStateData, selectStateError } from '../../redux/mainStackSlice/stateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CityApi } from "../../redux/mainStack/mainStackApi";
import { setCityData, setCityError, selectCityData, selectCityError } from '../../redux/mainStackSlice/citySlice';
<<<<<<< HEAD
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');
const AddressBookScreen = () => {
  const stateData = useSelector(selectStateData);
=======

const { width, height } = Dimensions.get('window');
const AddressBookScreen = () => {
  const stateData = useSelector(selectStateData);

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  const [searchQuery, setSearchQuery] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [citymodalVisible, setcityModalVisible] = useState(false);
<<<<<<< HEAD
  const handleSubmit = async () => {
    try {
      setLoading(true);
      dispatch(setAddressLoading());
      const response = await AddressAdd(customer_id, firstname, lastname, country_id, region, city, address1, address2, address3, telephone, postcode);
      setLoading(false);
      dispatch(setAddressData(response.data));
      console.log("Response after adding address:", response.data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      dispatch(setAddressError(error.message));
      console.log("error:", error);
=======
  
  const handlePress = async () => {
    try {
      const missingFields = [];
      if (!firstname) missingFields.push('First Name');
      if (!lastname) missingFields.push('Last Name');
      if (!telephone) missingFields.push('Phone Number');
      if (!address3) missingFields.push('Street Address');
      if (!address1) missingFields.push('Address 1');
      if (!address2) missingFields.push('Address 2');
      if (!postcode) missingFields.push('Pin Code');
      if (!region) missingFields.push('State/Province');
      if (!city) missingFields.push('City');

      if (missingFields.length > 0) {
        const errorMessage = `Please enter ${missingFields.join(', ')}`;
        Alert.alert('Error', errorMessage);
        return;
      }

      const response = await AddressList(
        customer_id,
        firstname,
        lastname,
        country_id,
        region,
        city,
        address1,
        address2,
        address3,
        telephone,
        store_id,
        postcode
      );

      console.log('Entire Response:', response);
      
      const responseData = response.data;
      console.log('Response Data:', responseData);

      if (responseData.status === 0) {
        Alert.alert('Error', responseData.message);
      } else {
        navigation.navigate('Addresslist');
      }
    } catch (error) {
      console.error('Error adding address:', error);
      Alert.alert('Error', 'Failed to add address. Please try again later.');
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    }
  };
  const handleCheckBoxChange = () => {
    setChecked(!isChecked);
  };
  const handleCityClick = (selectedCity) => {
    console.log("Clicked city:", selectedCity);
    setCity(selectedCity);
    setcityModalVisible(false);
  };
  const handleTextClick = (regionId, defaultName) => {
    console.log("Clicked region_id:", regionId);
    setStateCode(regionId);
    setregion(defaultName);
    setModalVisible(false)
  };
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [telephone, setPhoneNumber] = useState('+96');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setaddress3] = useState('');
  const [postcode, setpostcode] = useState('');
  const [region, setregion] = useState("");
<<<<<<< HEAD
  const [store_id, setstore_id] = useState(1);
  const [city, setCity] = useState('');
  // const [customer_id, setcustomer_id] = useState("61258");
  const [country_id, setcountry_id] = useState("SA");
  const stateError = useSelector(selectStateError);
  const [customer_id, setCustomerID] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        const userData = JSON.parse(userDataString);
        console.log("id:", userData.id);
        setCustomerID(userData.id);
      } catch (error) {
        console.error("Error fetching userData:", error);
      }
    };
    fetchUserData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StateApi(store_id);
        console.log("response---1212111", response);
        dispatch(setStateData(response.data));
=======
  const [city, setCity] = useState('');
  const [store_id, setstore_id] = useState("1");
  const [customer_id, setcustomer_id] = useState("60245");
  const [country_id, setcountry_id] = useState("SA");
  const stateError = useSelector(selectStateError);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StateApi(store_id); 
        console.log("response---1212111", response);

        dispatch(setStateData(response.data)); 
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
      } catch (error) {
        console.log("error- I GET-", error);
        dispatch(setError(error.message));
      }
    };
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    fetchData();
  }, [dispatch, store_id]);
  useEffect(() => {
    if (stateData && stateData.length > 0) {
      stateData.forEach(item => {
<<<<<<< HEAD
=======
       
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
      });
    }
  }, [stateData]);
  const handlePincodeChange = (text) => {

    if (!text.startsWith("+96")) {
      text = "+96" + text;
    }
    if (text.length > 13) {
      text = text.slice(0, 13);
    }
    setPhoneNumber(text);
    const last12Digits = text.slice(-12);
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleInputClick = () => {
    setModalVisible(true);
  };
  const handleCity = () => {
    setcityModalVisible(true);
  };
  const dispatch = useDispatch();
<<<<<<< HEAD
  const cityData = useSelector(selectCityData);
  const cityError = useSelector(selectCityError);
  const [stateCode, setStateCode] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CityApi(stateCode,);
=======
  useEffect(() => {
    const fetchAddressList = async () => {
      try {
        console.log("Before API Call"); 
        const response = await AddressList(
          country_id,
          firstname,
          lastname,
          customer_id,
          region,
          city,
          address1,
          address2,
          address3,
          telephone,
          store_id
        );
        dispatch(setAddressData(response.data.data));
      } catch (error) {
        console.error('Error fetching address list:', error);
      }
    };
    fetchAddressList();
  }, [dispatch, country_id, firstname, lastname, customer_id, region, city, address1, address2, address3, telephone, store_id]);
  const cityData = useSelector(selectCityData);
  const cityError = useSelector(selectCityError);
  const [stateCode, setStateCode] = useState(); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CityApi(stateCode, store_id);
        console.log("CIRY response---", response);
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
        dispatch(setCityData(response.data));
      } catch (error) {
        console.log("error- I GET-", error);
        dispatch(setCityError(error.message));
      }
    };
<<<<<<< HEAD
    fetchData();
  }, [dispatch, stateCode]);
  useEffect(() => {
    if (cityData && cityData.length > 0) {
      cityData.forEach(item => {
=======

    fetchData();
  }, [dispatch, stateCode, store_id]);
  useEffect(() => {
    if (cityData && cityData.length > 0) {
      cityData.forEach(item => {
        // console.log("city:", item.city);
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
      });
    }
  }, [cityData]);
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <Text style={{ fontSize: 20, fontWeight: "600", color: "black" }}>Address Book</Text>
        </View>
        <View >
          <Text style={{ color: "#fff" }}>fff</Text>
        </View>
      </View>
      <ScrollView>
        <View style={{ height: height }}>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="First Name"
                  value={firstname}
                  onChangeText={(text) => setFirstName(text)}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Last Name"
                  value={lastname}
                  onChangeText={(text) => setLastName(text)}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  keyboardType="phone-pad"
                  value={telephone}
<<<<<<< HEAD
                  maxLength={13}
=======
                  // onChangeText={(text) => setPhoneNumber(text)}
                  maxLength={13}
                  // onChangeText={(text) => setPincode(text)}
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
                  onChangeText={(text) => handlePincodeChange(text)}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Street Address"
                  value={address3}
<<<<<<< HEAD
                  onChangeText={(text) => setaddress3(text)}
=======
                  onChangeText={(text) =>setaddress3(text)}
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Address 1"
                  value={address1}
                  onChangeText={(text) => setAddress1(text)}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Address 2"
                  value={address2}
                  onChangeText={(text) => setAddress2(text)}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Pin Code"
                  keyboardType="numeric"
                  value={postcode}
<<<<<<< HEAD
                  onChangeText={(text) => setpostcode(text)}
=======
                  onChangeText={(text) => setpostcode(text)} 
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
                />
              </View>
            </View>
            <Text style={styles.label}>Saudi Arabia</Text>
            <View style={styles.inputContainer}>

              <View style={styles.inputWrapper}>
<<<<<<< HEAD
                <TextInput
                  style={styles.input}
                  placeholder="State/Province"
                  value={region}
                  onChangeText={(text) => setregion(text)}
                  onFocus={handleInputClick}
                />
=======
              <TextInput
  style={styles.input}
  placeholder="State/Province"
  value={region}
  onChangeText={(text) => setregion(text)}
  onFocus={handleInputClick}
/>
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
              </View>
            </View>
            <View style={styles.inputContainer}>

              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="City"
                  value={city}
                  onChangeText={(text) => setCity(text)}
                  onFocus={handleCity}
                />
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                value={isChecked}
                onValueChange={handleCheckBoxChange}
                tintColors={{ true: '#9f0202', false: '#9f0202' }} // Set the checkbox color
              />
              <Text style={{ color: '#9f0202', marginLeft: 10 }}>Use as my default billing address</Text>
            </View>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={{ backgroundColor: "#fff", width: width * 80 / 100, height: height * 40 / 100, borderRadius: 20, justifyContent: "space-between", }}>
              <View>

                <View style={{ alignItems: "center", backgroundColor: "#9f0202", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: width * 80 / 100, height: height * 8 / 100, paddingVertical: 10, }}>
<<<<<<< HEAD
                  <Text style={{ textAlign: "center", color: "#fff", fontSize: 19 }}>State/Province</Text>
                </View>

=======
                  <Text style={{ textAlign: "center", color: "#fff", fontSize: 19 }}>State/Province11</Text>
                </View>
               
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
                <View>
                  <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#C8C8C8',
                    borderRadius: 5
                  }}>
                    <TextInput
                      style={styles.input}
                      placeholder="Search"
                      onChangeText={(text) => setSearchQuery(text)}
                      value={searchQuery}
                    />
                  </View>
                </View>
                <View>
                  <View style={{ height: height * 20 / 100 }}>
                    <ScrollView >
                      {stateData && stateData.length > 0 ? (
                        stateData.map((item, index) => (
                          <TouchableOpacity
<<<<<<< HEAD
                            key={index}
                            onPress={() => handleTextClick(item.region_id, item.default_name)}
                          >
                            <View style={{ alignItems: "center", paddingVertical: 10 }}>
                              <Text style={{ fontSize: 16 }}>{item.default_name}</Text>
                            </View>
                          </TouchableOpacity>
=======
                          key={index}
                          onPress={() => handleTextClick(item.region_id, item.default_name)}
                        >
                          <View style={{ alignItems: "center", paddingVertical: 10 }}>
                            <Text style={{ fontSize: 16 }}>{item.default_name}</Text>
                          </View>
                        </TouchableOpacity>
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
                        ))
                      ) : (
                        <Text>No data available</Text>
                      )}
                    </ScrollView>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <View style={{ backgroundColor: "#9f0202", width: width * 38 / 100, borderBottomLeftRadius: 20, height: height * 5.1 / 100, paddingVertical: 5 }}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Cancel</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <View style={{ backgroundColor: "#9f0202", width: width * 38 / 100, height: height * 5.1 / 100, borderBottomRightRadius: 20, paddingVertical: 5 }}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Clear</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={citymodalVisible}
          onRequestClose={() => {
            setcityModalVisible(false);
          }}
        >
          <View style={styles.modalContainer1}>
            <View style={{ backgroundColor: "#fff", width: width * 80 / 100, height: height * 40 / 100, borderRadius: 20, justifyContent: "space-between", }}>
              <View>

                <View style={{ alignItems: "center", backgroundColor: "#9f0202", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: width * 80 / 100, height: height * 8 / 100, paddingVertical: 10, }}>

                  <Text style={{ textAlign: "center", color: "#fff", fontSize: 19 }}>City1111</Text>
                </View>
                <View style={{}}>

                  <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#C8C8C8',
                    borderRadius: 5,
                  }}>
                    <TextInput
                      style={styles.input}
                      placeholder="Search"
                      onChangeText={(text) => setSearchQuery(text)}
                      value={searchQuery}
                    />
                  </View>
                  <View style={{ height: height * 20 / 100 }}>
                    <ScrollView >
                      {cityData && cityData.length > 0 ? (
                        cityData.map((item, index) => (
                          <TouchableOpacity
<<<<<<< HEAD
                            key={index}
                            onPress={() => handleCityClick(item.city)}
                          >
                            <View style={{ alignItems: "center", paddingVertical: 5 }}>
                              <Text style={{ fontSize: 16 }}>{item.city}</Text>
                            </View>
                          </TouchableOpacity>
=======
        key={index}
        onPress={() => handleCityClick(item.city)}
      >
        <View style={{ alignItems: "center", paddingVertical: 5 }}>
          <Text style={{ fontSize: 16 }}>{item.city}</Text>
        </View>
      </TouchableOpacity>
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
                        ))
                      ) : (
                        <Text>No data available</Text>
                      )}
                    </ScrollView>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => setcityModalVisible(false)}>
                  <View style={{ backgroundColor: "#9f0202", width: width * 38 / 100, borderBottomLeftRadius: 20, height: height * 5.1 / 100, paddingVertical: 5 }}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Cancel</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setcityModalVisible(false)}>
                  <View style={{ backgroundColor: "#9f0202", width: width * 38 / 100, height: height * 5.1 / 100, borderBottomRightRadius: 20, paddingVertical: 5 }}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Clear</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <View style={{ width: width, }}>
<<<<<<< HEAD
        <TouchableOpacity style={[styles.button, Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow,]} onPress={() => handleSubmit(customer_id, firstname, lastname, country_id, region, city, address1, address2, address3, telephone, postcode)}>
=======
        <TouchableOpacity
          style={[
            styles.button,
            Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow,
          ]}
          onPress={handlePress}>
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          <Text style={styles.signInButtonText}>Add Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default AddressBookScreen
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: height,
    padding: 20,
  },
  firstNameContainer: {
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
  lastNameContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    borderRadius: 5,
  },
  lastNameInput: {
    fontSize: 16,
    padding: 10,
    color: 'white',
  },
  container: {
    backgroundColor: '#FFF',
    height: height,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    borderRadius: 5,
  },
  input: {
    fontSize: 16,
    padding: 10,
    color: 'black',
  },
  signInButton: {
    backgroundColor: '#9f0202',
    paddingVertical: 7,
    borderRadius: 3,
    alignItems: 'center',
    marginBottom: 20,
    width: '95%',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: "center"
  },
  button: {
    backgroundColor: '#9f0202',
    paddingVertical: 7,
    borderRadius: 3,
    marginBottom: 20,
    width: '80%',
    marginHorizontal: 10,
    marginVertical: 20,
    alignSelf: 'center',
    borderColor: '#d99ea0',
    borderWidth: 1,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  androidShadow: {
<<<<<<< HEAD
    elevation: 5,
=======
    elevation: 5, // Change this value as needed
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  },
  iosShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  },
  modalContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
<<<<<<< HEAD
  },
});
=======

  },
});

















// import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal,Alert} from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import CheckBox from '@react-native-community/checkbox';
// import { AddressList } from '../../redux/mainStack/mainStackApi';
// import { setAddressData } from '../../redux/mainStackSlice/addressListSlice';
// import { StateApi } from "../../redux/mainStack/mainStackApi";
// import { setStateData, setError, selectStateData, selectStateError } from '../../redux/mainStackSlice/stateSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { CityApi } from "../../redux/mainStack/mainStackApi";
// import { setCityData, setCityError, selectCityData, selectCityError } from '../../redux/mainStackSlice/citySlice';
// import axios from 'axios';
// // import styles from './style';
// const { width, height } = Dimensions.get('window');
// const AddressBookScreen = () => {
//   const stateData = useSelector(selectStateData);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [isChecked, setChecked] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [citymodalVisible, setcityModalVisible] = useState(false);
//   const handleAddAddress = async () => {
//     try {
//       const response = await AddressList({
//         customer_id,
//         firstname,
//         lastname,
//         country_id,
//         region,
//         city,
//         address1,
//         address2,
//         address3,
//         postcode,
//         telephone,
//         store_id,
//       });
//       console.log('Address List Response:', response); // Log the response to the console
//     } catch (error) {
//       console.error('Error adding address:', error);
//     }
//   };
//   // const handlePress = () => {
//   //   const missingFields = [];
  
//   //   // Validate if all required fields are entered
//   //   if (!firstname) missingFields.push('First Name');
//   //   if (!lastname) missingFields.push('Last Name');
//   //   if (!telephone) missingFields.push('Phone Number');
//   //   if (!address3) missingFields.push('Street Address');
//   //   if (!address1) missingFields.push('Address 1');
//   //   if (!address2) missingFields.push('Address 2');
//   //   if (!postcode) missingFields.push('Pin Code');
//   //   if (!region) missingFields.push('State/Province');
//   //   if (!city) missingFields.push('City');
  
//   //   // If any required field is missing, show an alert
//   //   if (missingFields.length > 0) {
//   //     const errorMessage = `Please enter ${missingFields}`;
//   //     Alert.alert('Error', errorMessage);
//   //     return;
//   //   }
  
//   //   // Log the entered details
//   //   console.log("Entered Details:");
//   //   console.log("First Name:", firstname);
//   //   console.log("Last Name:", lastname);
//   //   console.log("Phone Number:", telephone);
//   //   console.log("Street Address:", address3);
//   //   console.log("Address 1:", address1);
//   //   console.log("Address 2:", address2);
//   //   console.log("Pin Code:", postcode);
//   //   console.log("State/Province:", region);
//   //   console.log("City:", city);
//   //   console.log("Use as default billing address:", isChecked ? 'Yes' : 'No');
  
//   //   // Dispatch an action to add the address to the store or navigate to the next screen
//   // };
  
//   // const handlePress = () => {
//   //   const missingFields = [];

//   //   // Validate if all required fields are entered
//   //   if (!firstname) missingFields.push('First Name');
//   //   if (!lastname) missingFields.push('Last Name');
//   //   if (!telephone) missingFields.push('Phone Number');
//   //   if (!address3) missingFields.push('Street Address');
//   //   if (!address1) missingFields.push('Address 1');
//   //   if (!address2) missingFields.push('Address 2');
//   //   if (!postcode) missingFields.push('Pin Code');
//   //   if (!state) missingFields.push('State/Province');
//   //   if (!city) missingFields.push('City');
  
//   //   // If any required field is missing, show an alert
//   //   if (missingFields.length > 0) {
//   //     const errorMessage = `Please enter ${missingFields}`;
//   //     Alert.alert('Error', errorMessage);
//   //     return;
//   //   }
//   //   // navigation.navigate('Addresslist');
//   // };
//   const handleCheckBoxChange = () => {
//     setChecked(!isChecked);
//   };
//   const handleCityClick = (selectedCity) => {
//     // console.log("Clicked city:", selectedCity);
//     setCity(selectedCity);
//     setcityModalVisible(false);
//   };
//   const handleTextClick = (regionId, defaultName) => {
//     // console.log("Clicked region_id:", regionId);
//     setStateCode(regionId);
//     setregion(defaultName);
//     setModalVisible(false)
//   };
//   const [lastname, setLastName] = useState('');
//   const [firstname, setFirstName] = useState('');
//   const [telephone, setPhoneNumber] = useState('+96');
//   const [address1, setAddress1] = useState('');
//   const [address2, setAddress2] = useState('');
//   const [address3, setaddress3] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [postcode, setpostcode] = useState('');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');
//   const [store_id, setstore_id] = useState("1");
//   const [customer_id, setcustomer_id] = useState("60245");
//   const [region, setregion] = useState("");
//   const [country_id, setcountry_id] = useState("SA");
//   const stateError = useSelector(selectStateError);
//   const navigation = useNavigation();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await StateApi(store_id); 
//         // console.log("response---1212111", response);

//         dispatch(setStateData(response.data)); 
//       } catch (error) {
//         // console.log("error- I GET-", error);
//         dispatch(setError(error.message));
//       }
//     };

//     fetchData();
//   }, [dispatch, store_id]);
//   useEffect(() => {
//     if (stateData && stateData.length > 0) {
//       stateData.forEach(item => {
       
//       });
//     }
//   }, [stateData]);
//   const handlePincodeChange = (text) => {

//     if (!text.startsWith("+96")) {
//       text = "+96" + text;
//     }
//     if (text.length > 13) {
//       text = text.slice(0, 13);
//     }
//     setPhoneNumber(text);
//     const last12Digits = text.slice(-12);
//   };
//   const handleGoBack = () => {
//     navigation.goBack();
//   };
//   const handleInputClick = () => {
//     setModalVisible(true);
//   };
//   const handleCity = () => {
//     setcityModalVisible(true);
//   };
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const fetchAddressList = async () => {
//       try {
//         console.log("Before API Call"); 
//         const response = await AddressList(
//           country_id,
//           firstname,
//           lastname,
//           customer_id,
//           region,
//           city,
//           address1,
//           address2,
//           address3,
//           telephone,
//           store_id,
//           postcode
//         );
//         dispatch(setAddressData(response.data.data));
//       } catch (error) {
//         console.error('Error fetching address list:', error);
//       }
//     };
//     fetchAddressList();
//   }, [dispatch, country_id, firstname, lastname, customer_id, region, city, address1, address2, address3, telephone, store_id]);
//   const cityData = useSelector(selectCityData);
//   const cityError = useSelector(selectCityError);
//   const [stateCode, setStateCode] = useState(); 


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await CityApi(stateCode, store_id);
//         // console.log("CIRY response---", response);
//         dispatch(setCityData(response.data));
//       } catch (error) {
//         // console.log("error- I GET-", error);
//         dispatch(setCityError(error.message));
//       }
//     };

//     fetchData();
//   }, [dispatch, stateCode, store_id]);
//   useEffect(() => {
//     if (cityData && cityData.length > 0) {
//       cityData.forEach(item => {
//         // console.log("city:", item.city);
//       });
//     }
//   }, [cityData]);
//   return (
//     <View style={{ backgroundColor: "#fff", flex: 1 }}>
//       <View style={{ justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
//         <View style={{ marginHorizontal: 10 }}>
//           <TouchableOpacity onPress={handleGoBack}>
//             <Ionicons name="arrow-back" size={28} color="black" />
//           </TouchableOpacity>
//         </View>
//         <View style={{}}>
//           <Text style={{ fontSize: 20, fontWeight: "600", color: "black" }}>Address Book</Text>
//         </View>
//         <View >
//           <Text style={{ color: "#fff" }}>fff</Text>
//         </View>
//       </View>
//       <ScrollView>
//         <View style={{ height: height }}>
//           <View style={styles.container}>
//             <View style={styles.inputContainer}>
//               <View style={styles.inputWrapper}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="First Name"
//                   value={firstname}
//                   onChangeText={(text) => setFirstName(text)}
//                 />
//               </View>
//             </View>
//             <View style={styles.inputContainer}>
//               <View style={styles.inputWrapper}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Last Name"
//                   value={lastname}
//                   onChangeText={(text) => setLastName(text)}
//                 />
//               </View>
//             </View>
//             <View style={styles.inputContainer}>
//               <View style={styles.inputWrapper}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Phone Number"
//                   keyboardType="phone-pad"
//                   value={telephone}
//                   // onChangeText={(text) => setPhoneNumber(text)}
//                   maxLength={13}
                 
//                   onChangeText={(text) => handlePincodeChange(text)}
//                 />
//               </View>
//             </View>
//             <View style={styles.inputContainer}>
//               <View style={styles.inputWrapper}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Street Address"
//                   value={address3}
//                   onChangeText={(text) =>setaddress3(text)}
//                 />
//               </View>
//             </View>
//             <View style={styles.inputContainer}>
//               <View style={styles.inputWrapper}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Address 1"
//                   value={address1}
//                   onChangeText={(text) => setAddress1(text)}
//                 />
//               </View>
//             </View>
//             <View style={styles.inputContainer}>
//               <View style={styles.inputWrapper}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Address 2"
//                   value={address2}
//                   onChangeText={(text) => setAddress2(text)}
//                 />
//               </View>
//             </View>
//             <View style={styles.inputContainer}>
//               <View style={styles.inputWrapper}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Pin Code"
//                   keyboardType="numeric"
//                   value={postcode}
//                   onChangeText={(text) => setpostcode(text)} 
//                 />
//               </View>
//             </View>
//             <Text style={styles.label}>Saudi Arabia</Text>
//             <View style={styles.inputContainer}>

//               <View style={styles.inputWrapper}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="State/Province"
//                   value={region}
//                   onChangeText={(text) => setregion(text)}
//                   onFocus={handleInputClick}
//                 />
//               </View>
//             </View>
//             <View style={styles.inputContainer}>

//               <View style={styles.inputWrapper}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="City"
//                   value={city}
//                   onChangeText={(text) => setCity(text)}
//                   onFocus={handleCity}
//                 />
//               </View>
//             </View>

//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               <CheckBox
//                 value={isChecked}
//                 onValueChange={handleCheckBoxChange}
//                 tintColors={{ true: '#9f0202', false: '#9f0202' }} // Set the checkbox color
//               />
//               <Text style={{ color: '#9f0202', marginLeft: 10 }}>Use as my default billing address</Text>
//             </View>
//           </View>
//         </View>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             setModalVisible(false);
//           }}
//         >
//           <View style={styles.modalContainer}>
//             <View style={{ backgroundColor: "#fff", width: width * 80 / 100, height: height * 40 / 100, borderRadius: 20, justifyContent: "space-between", }}>
//               <View>

//                 <View style={{ alignItems: "center", backgroundColor: "#9f0202", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: width * 80 / 100, height: height * 8 / 100, paddingVertical: 10, }}>
//                   <Text style={{ textAlign: "center", color: "#fff", fontSize: 19 }}>State/Province11</Text>
//                 </View>
               
//                 <View>
//                   <View style={{
//                     borderBottomWidth: 1,
//                     borderBottomColor: '#C8C8C8',
//                     borderRadius: 5
//                   }}>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Search"
//                       onChangeText={(text) => setSearchQuery(text)}
//                       value={searchQuery}
//                     />
//                   </View>
//                 </View>
//                 <View>
//                   <View style={{ height: height * 20 / 100 }}>
//                     <ScrollView >
//                       {stateData && stateData.length > 0 ? (
//                         stateData.map((item, index) => (
//                           <TouchableOpacity
//                           key={index}
//                           onPress={() => handleTextClick(item.region_id, item.default_name)}
//                         >
//                           <View style={{ alignItems: "center", paddingVertical: 10 }}>
//                             <Text style={{ fontSize: 16 }}>{item.default_name}</Text>
//                           </View>
//                         </TouchableOpacity>
//                         ))
//                       ) : (
//                         <Text>No data available</Text>
//                       )}
//                     </ScrollView>


//                   </View>

//                 </View>
//               </View>

//               <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

//                 <TouchableOpacity onPress={() => setModalVisible(false)}>
//                   <View style={{ backgroundColor: "#9f0202", width: width * 38 / 100, borderBottomLeftRadius: 20, height: height * 5.1 / 100, paddingVertical: 5 }}>

//                     <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Cancel</Text>
//                   </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => setModalVisible(false)}>
//                   <View style={{ backgroundColor: "#9f0202", width: width * 38 / 100, height: height * 5.1 / 100, borderBottomRightRadius: 20, paddingVertical: 5 }}>

//                     <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Clear</Text>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={citymodalVisible}
//           onRequestClose={() => {
//             setcityModalVisible(false);
//           }}
//         >
//           <View style={styles.modalContainer1}>
//             <View style={{ backgroundColor: "#fff", width: width * 80 / 100, height: height * 40 / 100, borderRadius: 20, justifyContent: "space-between", }}>
//               <View>

//                 <View style={{ alignItems: "center", backgroundColor: "#9f0202", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: width * 80 / 100, height: height * 8 / 100, paddingVertical: 10, }}>

//                   <Text style={{ textAlign: "center", color: "#fff", fontSize: 19 }}>City1111</Text>
//                 </View>
//                 <View style={{}}>

//                   <View style={{
//                     borderBottomWidth: 1,
//                     borderBottomColor: '#C8C8C8',
//                     borderRadius: 5,
//                   }}>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Search"
//                       onChangeText={(text) => setSearchQuery(text)}
//                       value={searchQuery}
//                     />
//                   </View>
//                   <View style={{ height: height * 20 / 100 }}>
//                     <ScrollView >
//                       {cityData && cityData.length > 0 ? (
//                         cityData.map((item, index) => (
//                           <TouchableOpacity
//         key={index}
//         onPress={() => handleCityClick(item.city)}
//       >
//         <View style={{ alignItems: "center", paddingVertical: 5 }}>
//           <Text style={{ fontSize: 16 }}>{item.city}</Text>
//         </View>
//       </TouchableOpacity>
//                         ))
//                       ) : (
//                         <Text>No data available</Text>
//                       )}
//                     </ScrollView>


//                   </View>
//                 </View>

//               </View>

//               <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

//                 <TouchableOpacity onPress={() => setcityModalVisible(false)}>
//                   <View style={{ backgroundColor: "#9f0202", width: width * 38 / 100, borderBottomLeftRadius: 20, height: height * 5.1 / 100, paddingVertical: 5 }}>

//                     <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Cancel</Text>
//                   </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => setcityModalVisible(false)}>
//                   <View style={{ backgroundColor: "#9f0202", width: width * 38 / 100, height: height * 5.1 / 100, borderBottomRightRadius: 20, paddingVertical: 5 }}>

//                     <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Clear</Text>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>
//       </ScrollView>
//       <View style={{ width: width, }}>
//         <TouchableOpacity
//           style={[
//             styles.button,
//             Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow,
//           ]}
//           onPress={handleAddAddress}>
//           <Text style={styles.signInButtonText}>Add Address</Text>
//         </TouchableOpacity>
//       </View>

//     </View>
//   )
// }
// export default AddressBookScreen
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     height: height,
//     padding: 20,
//   },
//   firstNameContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     color: 'white',
//     fontSize: 16,
//   },
//   lastNameContainer: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'green',
//     borderRadius: 5,
//   },
//   lastNameInput: {
//     fontSize: 16,
//     padding: 10,
//     color: 'white',
//   },
//   container: {
//     backgroundColor: '#FFF',
//     height: height,
//     padding: 20,
//   },
//   inputContainer: {
//     marginBottom: 10,
//   },
//   label: {
//     color: 'black',
//     fontSize: 20,
//     marginBottom: 5,
//   },
//   inputWrapper: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'lightgray',
//     borderRadius: 5,
//   },
//   input: {
//     fontSize: 16,
//     padding: 10,
//     color: 'black',
//   },
//   signInButton: {
//     backgroundColor: '#9f0202',
//     paddingVertical: 7,
//     borderRadius: 3,
//     alignItems: 'center',
//     marginBottom: 20,
//     width: '95%',
//     marginHorizontal: 10,
//     marginVertical: 20,
//   },
//   signInButtonText: {
//     color: '#fff',
//     fontSize: 20,
//     textAlign: "center"
//   },
//   button: {
//     backgroundColor: '#9f0202',
//     paddingVertical: 7,
//     borderRadius: 3,
//     marginBottom: 20,
//     width: '80%',
//     marginHorizontal: 10,
//     marginVertical: 20,
//     alignSelf: 'center',
//     borderColor: '#d99ea0',
//     borderWidth: 1,
//   },
//   buttonText: {
//     color: 'black',
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   androidShadow: {
//     elevation: 5, // Change this value as needed
//   },
//   iosShadow: {
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',

//   },
//   modalContainer1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',

//   },
// });


>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
