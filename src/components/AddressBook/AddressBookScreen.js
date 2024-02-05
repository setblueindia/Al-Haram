import { View, Text,Dimensions,TouchableOpacity,StyleSheet,TextInput, ScrollView,Modal } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
const { width, height } = Dimensions.get('window');
const AddressBookScreen = () => {
 
  const [isModalVisible, setModalVisible] = useState(false);

  const statesData = [
    'State 1',
    'State 2',
    'State 3',
    // Add more states as needed
  ];
  const [isChecked, setChecked] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderStateItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleStateSelection(item)}>
      <View style={styles.stateItem}>
        <Text style={styles.stateItemText}>{item}</Text>
      </View>
    </TouchableOpacity>
  );
  const handleStateSelection = (selectedState) => {
    setState(selectedState);
    toggleModal();
  };

  const handleCheckBoxChange = () => {
    setChecked(!isChecked);
  };
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const navigation = useNavigation();
    const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View>

    <View style={{justifyContent:"space-between",flexDirection:"row",height:height*8/100,alignItems:"center"}}>
    <View style={{marginHorizontal:10}}>
    <TouchableOpacity onPress={handleGoBack}>
    <Ionicons name="arrow-back" size={28} color="black" />
  </TouchableOpacity>
    </View>
    <View style={{}}>

  
        <Text style={{fontSize:20,fontWeight:"600",color:"black"}}>Add Address</Text>
    
    </View>

          <View >
           <Text style={{color:"#fff"}}>fff</Text>
          </View>
      
   
  </View>
  <ScrollView>

  <View style={{height:height}}>
  
      <View style={styles.container}>
      <View style={styles.inputContainer}>
     
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
       
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
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
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
      
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Street Address"
            value={streetAddress}
            onChangeText={(text) => setStreetAddress(text)}
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
            value={pincode}
            onChangeText={(text) => setPincode(text)}
          />
        </View>
      </View>
     
      <View style={styles.inputContainer}>
      <Text style={styles.label}>Saudi Arabia</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="State/Province"
            value={state}
            onChangeText={(text) => setState(text)}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
     
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={(text) => setCity(text)}
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
    <TouchableOpacity style={styles.signInButton} >
            <Text style={styles.signInButtonText}>Add Address</Text>
          </TouchableOpacity>
    </View>
   
   
      
  </View>

  
  </ScrollView>
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
});