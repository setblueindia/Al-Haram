import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal, Image,ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Addressget } from '../../redux/mainStack/mainStackApi';
import { setaddressgetData, setaddressgetError, setaddressgetLoading } from '../../redux/mainStackSlice/addressgetSlice'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddressDelete } from '../../redux/mainStack/mainStackApi';
import { deleteAddressLoading, deleteAddressSuccess, deleteAddressFailure } from '../../redux/mainStackSlice/addDeleteSlice';
const { width, height } = Dimensions.get('window');

const Addresslist = () => {
  const handlePress = () => {
    navigation.navigate('AddressBookScreen');
  };
  const [addresses, setAddresses] = useState([]);
  const [customerID, setCustomerID] = useState(null);
  const [loading, setLoading] = useState(false);
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
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        const userData = JSON.parse(userDataString);
        setCustomerID(userData.id);
      } catch (error) {
        console.error("Error fetching userData:", error);
      }
    };
    fetchUserData();
  }, []);
  useEffect(() => {
   setLoading(true);
    const fetchAddressList = async () => {
      if (!customerID) return;
      try {
        dispatch(setaddressgetLoading());
        const response = await Addressget(customerID,store_id);
        dispatch(setaddressgetData(response));
        setAddresses(response.data);
        setLoading(false)
        console.log("Addressget Response:", response);
      } catch (error) {
        dispatch(setaddressgetError(error.message));
        console.error("Addressget error:", error);
        setLoading(false)
      }
    };
    fetchAddressList();
  }, [customerID, dispatch,store_id]);
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleDelete = async (id) => {
    try {
      const customer_id = customerID;
      dispatch(deleteAddressLoading());
      await AddressDelete(customer_id, id);
      const updatedAddresses = addresses.filter(address => address.id !== id);
      setAddresses(updatedAddresses);
      dispatch(deleteAddressSuccess());
      await fetchData(); 
    } catch (error) {
      console.error("Error deleting address:", error);
      dispatch(deleteAddressFailure(error.message));
    }
  };
  const handleEdit = (id) => {
    console.log("Editing item with ID:", id);
  };
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
     
      {loading ? (
        <View style={styles.lodercontainer}>
          <TouchableOpacity onPress={() => fadeInOut()}>
          <ActivityIndicator size="large" color="#9f0202" />
          </TouchableOpacity>
        </View>
      ) : (
        
        <ScrollView>
        {addresses.map((address, index) => (
          <View key={index} style={{ paddingHorizontal: 10, width: width * 90 / 100, backgroundColor: "#F5F5F5", alignSelf: "center", height: height * 20 / 100, borderRadius: 10, borderColor: "#F7F7F7", borderWidth: 1, marginBottom: 10  }}>
            <View style={{ padding: 10 }}>
              <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#C8C8C8', borderRadius: 5, width: width * 60 / 100, height: 30 }}>
                  <Text style={{ color: "#990107", fontSize: 16 }}>{address.firstname} {address.lastname}</Text>
                </View>
                <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                  <TouchableOpacity onPress={() => handleEdit(address.id)}>
                    <View style={{}}>
                      <Image source={require('../../assests/edit.png')} style={{ width: 20, height: 20 }} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDelete(address.id)}>
                    <View style={{ marginHorizontal: 10 }}>
                      <Image source={require('../../assests/delter.png')} style={{ width: 12, height: 17 }} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ width: width * 60 / 100, marginVertical: 5 }}>
                <Text style={{ color: "#8f898a", fontSize: 13 }}>{address.street.join(", ")}, {address.city}, {address.country_name}, {address.postcode}</Text>
              </View>
              <View style={{ width: width * 60 / 100 }}>
                <Text>{address.telephone}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      )}
        <View style={{ width: width }}>
        <TouchableOpacity
          style={[
            styles.button,
            Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow,
          ]}
          onPress={handlePress}   >
          <Text style={styles.buttonText}>+ Add new Address</Text>
        </TouchableOpacity>
      </View>
      {/* )} */}
    
    </View>
  )
}
export default Addresslist;

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
    color: 'white',
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
  },
  button: {
    backgroundColor: '#fff',
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
    elevation: 5, // Change this value as needed
  },
  iosShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  lodercontainer:{
  flex:1,
  alignSelf:"center"
  }
});


