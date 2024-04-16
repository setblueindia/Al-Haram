import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal, Alert,ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import { AddressAdd } from '../../redux/mainStack/mainStackApi';
import { setAddresslistStart,setAddresslistSuccess,setAddresslistFailure} from '../../redux/mainStackSlice/addressaddSlice';
import { StateApi } from "../../redux/mainStack/mainStackApi";
import { setStateData, setError, selectStateData, selectStateError } from '../../redux/mainStackSlice/stateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CityApi } from "../../redux/mainStack/mainStackApi";
import { setCityData,  selectCityData, selectCityError } from '../../redux/mainStackSlice/citySlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');
const AddressBookScreen = () => {
  const stateData = useSelector(selectStateData);
  const [searchQuery, setSearchQuery] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [citymodalVisible, setcityModalVisible] = useState(false);
  const [loading,setLoading] = useState(false)
  const handleSubmit = async () => {
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

    if (!PhoneNumber) {
      setPhoneError('Mobile number is required');
      isValid = false;
    } else if (PhoneNumber.length !== 13) {
      setPhoneError('Mobile number should be 13 digits');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (!Address1) {
      setAddress1Error('Street Address is required');
      isValid = false;
    } else {
      setAddress1Error('');
    }

    if (!Address2) {
      setAddress2Error('Address is required');
      isValid = false;
    } else {
      setAddress2Error('');
    }

    if (!Postcode) {
      setPostcodeError('Pincode is required');
      isValid = false;
    } else {
      setPostcodeError('');
    }

    if (!Region) {
      setRegionError('State/Province is required');
      isValid = false;
    } else {
      setRegionError('');
    }

    if (!City) {
      setCityError('City is required');
      isValid = false;
    } else {
      setCityError('');
    }

    if (isValid) {
      try {
        setLoading(true);
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          const customer_id = userData.id;
          const firstname = Firstname;
          const lastname = Lastname;
          const country_id = countryid;
          const region = Region;
          const address1 =  Address1;
          const address2 = Address2;
          const address3 = Address3;
          const postcode = Postcode;
          const telephone = PhoneNumber;
          const city = City;
          const response = await AddressAdd(customer_id,firstname,lastname, country_id, region, address1, address2, address3, postcode, telephone, city,store_id);
          setLoading(false);
          dispatch(setAddresslistSuccess(response));
          navigation.navigate('Addresslist');
        } else {
          console.log('No user data found in AsyncStorage.');
          navigation.navigate('Login');
        }
      } catch (error) {
        setLoading(false);
        console.error('Error adding address:', error);
        dispatch(setAddresslistFailure(error.message));
      }
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
  const [Lastname, setLastName] = useState('');
  const [Firstname, setFirstName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('+96');
  const [Address1, setAddress1] = useState('');
  const [Address2, setAddress2] = useState('');
  const [Address3, setaddress3] = useState('');
  const [Postcode, setpostcode] = useState('');
  const [Region, setregion] = useState("");
  const [City, setCity] = useState('');
  const [countryid, setcountry_id] = useState("SA");
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');
  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [address1Error, setAddress1Error] = useState('');
  const [address2Error, setAddress2Error] = useState('');
  const [address3Error, setAddress3Error] = useState('');
  const [postcodeError, setPostcodeError] = useState('');
  const [regionError, setRegionError] = useState('');
  const [cityError, setCityError] = useState('');
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
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await StateApi(store_id);
          console.log("response---1212111", response);
          dispatch(setStateData(response.data));
        } catch (error) {
          console.log("error- I GET-", error);
          dispatch(setError(error.message));
        }
    };
    fetchData();
  }, [store_id]);
  useEffect(() => {
    if (stateData && stateData.length > 0) {
      stateData.forEach(item => {
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
  const cityData = useSelector(selectCityData);
  
  const [stateCode, setStateCode] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CityApi(stateCode,);
        dispatch(setCityData(response.data));
      } catch (error) {
        console.log("error- I GET-", error);
      }
    };
    fetchData();
  }, [dispatch, stateCode]);
  useEffect(() => {
    if (cityData && cityData.length > 0) {
      cityData.forEach(item => {
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
                  value={Firstname}
                  onChangeText={(text) => setFirstName(text)}
                />
              </View>
            </View>
            <View style={{bottom:5,marginHorizontal:15}}>
          {firstnameError ? <Text style={styles.errorText}>*{firstnameError}</Text> : null}
          </View>
      
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Last Name"
                  value={Lastname}
                  onChangeText={(text) => setLastName(text)}
                />
              </View>
            </View>
            <View style={{bottom:5,marginHorizontal:15}}>
          {lastnameError ? <Text style={styles.errorText}>*{lastnameError}</Text> : null}
          </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  keyboardType="phone-pad"
                  value={PhoneNumber}
                  maxLength={13}
                  onChangeText={(text) => handlePincodeChange(text)}
                />
              </View>
            </View>
            <View style={{bottom:5,marginHorizontal:15}}>
          {phoneError ? <Text style={styles.errorText}>*{phoneError}</Text> : null}
          </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Street Address"
                  value={Address3}
                  onChangeText={(text) => setaddress3(text)}
                />
              </View>
            </View>
            <View style={{bottom:5,marginHorizontal:15}}>
          {address1Error ? <Text style={styles.errorText}>*{address1Error}</Text> : null}
          </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Address 1"
                  value={Address1}
                  onChangeText={(text) => setAddress1(text)}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Address 2"
                  value={Address2}
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
                  value={Postcode}
                  onChangeText={(text) => setpostcode(text)}
                />
              </View>
            </View>
            <View style={{bottom:5,marginHorizontal:15}}>
          {postcodeError ? <Text style={styles.errorText}>*{postcodeError}</Text> : null}
          </View>
            <Text style={styles.label}>Saudi Arabia</Text>
            <View style={styles.inputContainer}>

              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="State/Province"
                  value={Region}
                  onChangeText={(text) => setregion(text)}
                  onFocus={handleInputClick}
                />
              </View>
            </View>
            <View style={{bottom:5,marginHorizontal:15}}>
          {regionError ? <Text style={styles.errorText}>*{regionError}</Text> : null}
          </View>
            <View style={styles.inputContainer}>

              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="City"
                  value={City}
                  onChangeText={(text) => setCity(text)}
                  onFocus={handleCity}
                />
              </View>
            </View>
            <View style={{bottom:5,marginHorizontal:15}}>
          {cityError ? <Text style={styles.errorText}>*{cityError}</Text> : null}
          </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                value={isChecked}
                onValueChange={handleCheckBoxChange}
                tintColors={{ true: '#9f0202', false: '#9f0202' }} 
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
                  <Text style={{ textAlign: "center", color: "#fff", fontSize: 19 }}>State/Province</Text>
                </View>
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
                            key={index}
                            onPress={() => handleTextClick(item.region_id, item.default_name)}
                          >
                            <View style={{ alignItems: "center", paddingVertical: 10 }}>
                              <Text style={{ fontSize: 16 }}>{item.default_name}</Text>
                            </View>
                          </TouchableOpacity>
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
                            key={index}
                            onPress={() => handleCityClick(item.city)}
                          >
                            <View style={{ alignItems: "center", paddingVertical: 5 }}>
                              <Text style={{ fontSize: 16 }}>{item.city}</Text>
                            </View>
                          </TouchableOpacity>
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
        <TouchableOpacity 
         disabled={loading}
        style={[styles.button,loading &&Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow,]} 
        onPress={() => handleSubmit()}>
          {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.signInButtonText}>Add Address</Text>
               )}
               
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
    elevation: 5,
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
  },
  modalContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  errorText: {
    color: '#980404',
    fontSize: 14,
    // marginTop: 5,
  },
});