import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
const { width, height } = Dimensions.get('window');
const AddressBookScreen = () => {
  const navigation = useNavigation();
    const [quantity, setQuantity] = useState(1);
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleGoBack = () => {
    navigation.goBack();
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
          <Text style={{ fontSize: 20, fontWeight: "600", color: "black" }}>Shopping Cart</Text>
        </View>
        <View >
          <Text style={{ color: "#fff" }}>fff</Text>
        </View>
      </View>
               <View >
       <View style={styles.stepContainer}>
        <View style={styles.round}>

       <Image
    source={require('../../assests/selected.png')}
    style={styles.roundImage} // Define a style for the image if needed
  />
          </View>
  
         <View style={styles.Cartline} />
         <Text style={styles.stepText}>Cart</Text>
         <View style={styles.ShippingdottedLine} />
         <View style={styles.Shippinground}/>
         <Text style={styles.ShippingText}>Shipping</Text>
         <View style={styles.PaymentdottedLine} />
         <View style={styles.Paymentround}/>
         <Text style={styles.ShippingText}>Payment</Text>  
       </View>
     </View> 
      <ScrollView>
      <View style={{backgroundColor:"#f7f7f7",width:width*90/100,justifyContent:"space-between",flexDirection:"row",alignSelf:"center",marginVertical:10,height:height*25/100,borderRadius:10,borderWidth:1,borderColor:"#eae8e8"}}>
   <View style={{  width: width * 30 / 100, alignSelf: "center",padding:15  }}>
      <Image
        source={require('../../assests/product.jpg')}
        style={{
          width: width * 30 / 100,
          height: height * 20 / 100,
          resizeMode: 'contain',
          borderRadius: 7,  
        }}
      />
    </View>
      <View style={{width:width*60/100,padding:20,marginVertical:10,}}>
      <Text style={{fontSize:16,color:"#707070",marginBottom:5}}>Men's Pajama Set..</Text>
      <Text style={{ fontSize: 16, color: "#990107", fontWeight: '700',marginBottom:5 }}>SAR 44</Text>
      <View style={{justifyContent:'flex-start',flexDirection:"row",marginBottom:5}}>
        <Text style={{color:"#b5b5b5",fontSize:14,fontWeight: '600',}}>Color:</Text>
        <Text style={{color:"#b5b5b5",fontSize:14,fontWeight: '600'}}>Light Gray</Text>
      </View>
      <View style={{justifyContent:'flex-start',flexDirection:"row"}}>
        <Text style={{color:"#b5b5b5",fontSize:14,fontWeight: '600'}}>Size:</Text>
        <Text style={{color:"#b5b5b5",fontSize:14,fontWeight: '600'}}>M</Text>
      </View>
      <View>

      <View style={{justifyContent:"space-between",flexDirection:"row",}}>
      
      <View style={{ marginVertical:5 }}>
        <Text style={{marginBottom:5,fontSize:14,fontWeight: '600',color:"#b5b5b5"}}>QTY: </Text>
      </View>
      <View style={{justifyContent:"space-between",flexDirection:"row",borderRadius:16,borderWidth:1,borderColor:"#B9B9B9"}}>
          
      <TouchableOpacity onPress={decrementQuantity}>
        <View style={{ width: 40, height: 30, }}>
          <Image source={require('../../assests/decrement.png')} style={{ width: 32, height: 32 }} />
        </View>
      </TouchableOpacity>
      <View style={{marginVertical:5,width: 20,}}>
        <Text>{quantity}</Text>
      </View>
      <TouchableOpacity onPress={incrementQuantity}>
        <View >
          <Image source={require('../../assests/increment.png')} style={{ width: 32, height: 32 }} />
        </View>
      </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity >
              <View style={{ marginVertical:5  }}>
                <Image source={require('../../assests/delter.png')} style={{ width: 12, height: 17 }} />
              </View>
            </TouchableOpacity>
        </View>
        </View>
      </View>
      </View>
    </View>
    {/* <View style={{backgroundColor:"#f7f7f7",width:width*90/100,justifyContent:"space-between",flexDirection:"row",alignSelf:"center",marginVertical:10,height:height*25/100,borderRadius:10,borderWidth:1,borderColor:"#eae8e8"}}>
   <View style={{  width: width * 30 / 100, alignSelf: "center",padding:15  }}>
      <Image
        source={require('../../assests/product.jpg')}
        style={{
          width: width * 30 / 100,
          height: height * 20 / 100,
          resizeMode: 'contain',
          borderRadius: 7,  
        }}
      />
    </View>
      <View style={{width:width*60/100,padding:20,marginVertical:10,}}>
      <Text style={{fontSize:16,color:"#707070",marginBottom:5}}>Men's Pajama Set..</Text>
      <Text style={{ fontSize: 16, color: "#990107", fontWeight: '700',marginBottom:5 }}>SAR 44</Text>
      <View style={{justifyContent:'flex-start',flexDirection:"row",marginBottom:5}}>
        <Text style={{color:"#b5b5b5",fontSize:14,fontWeight: '600',}}>Color:</Text>
        <Text style={{color:"#b5b5b5",fontSize:14,fontWeight: '600'}}>Light Gray</Text>
      </View>
      <View style={{justifyContent:'flex-start',flexDirection:"row"}}>
        <Text style={{color:"#b5b5b5",fontSize:14,fontWeight: '600'}}>Size:</Text>
        <Text style={{color:"#b5b5b5",fontSize:14,fontWeight: '600'}}>M</Text>
      </View>
      <View>

      <View style={{justifyContent:"space-between",flexDirection:"row",}}>
      
      <View style={{ marginVertical:5 }}>
        <Text style={{marginBottom:5,fontSize:14,fontWeight: '600',color:"black"}}>QTY: </Text>
      </View>
      <View style={{justifyContent:"space-between",flexDirection:"row",borderRadius:16,borderWidth:1,borderColor:"#B9B9B9"}}>
          
      <TouchableOpacity onPress={decrementQuantity}>
        <View style={{ width: 40, height: 30, }}>
          <Image source={require('../../assests/decrement.png')} style={{ width: 32, height: 32 }} />
        </View>
      </TouchableOpacity>
      <View style={{marginVertical:5,width: 20,}}>
        <Text>{quantity}</Text>
      </View>
      <TouchableOpacity onPress={incrementQuantity}>
        <View >
          <Image source={require('../../assests/increment.png')} style={{ width: 32, height: 32 }} />
        </View>
      </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity >
              <View style={{ marginVertical:5  }}>
                <Image source={require('../../assests/delter.png')} style={{ width: 17, height: 23 }} />
              </View>
            </TouchableOpacity>
        </View>
        </View>
      </View>
      </View>
    </View> */}
      
      </ScrollView>
      <View style={{ width: width, }}>
      <TouchableOpacity
          style={[
            styles.button,
            Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow,
          ]}
          >
          <Text style={styles.signInButtonText}>Proceed to Checkout</Text>
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
    backgroundColor: '#009834',
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
    stepContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  stepText: {
    textAlign: 'center',
    color: '#990107',
    fontWeight: 'bold',
    marginHorizontal: 1,
  },
  ShippingText: {
    textAlign: 'center',
    color: '#989898',
    fontWeight: 'bold',
    marginHorizontal: 1,
  },
  Cartline: {
    flex: 1,
    height: 2,
    backgroundColor: '#990107',
    marginHorizontal: 3,
  },
  round:{
    width: 20, // Initial width of the round
    height: 20, // Initial height of the round
    borderRadius: 15, // Make it round
    backgroundColor: '#fff', // Example color
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:3,
    borderColor:"#990107",
    backgroundColor:"#990107"
  },
  roundImage:{
    width:10,
    height:10
  },
  Shippinground:{
    width: 20, // Initial width of the round
    height: 20, // Initial height of the round
    borderRadius: 15, // Make it round
    backgroundColor: '#fff', // Example color
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    borderColor:"#989898"
  },
  Paymentround:{
    width: 20, // Initial width of the round
    height: 20, // Initial height of the round
    borderRadius: 15, // Make it round
    backgroundColor: '#fff', // Example color
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    borderColor:"#989898"
  },
  PaymentdottedLine: {
    height: 2, // Thickness of the line
    flex: 1,
    borderWidth: 0, // Set border width to 0
    borderBottomWidth: 1.5, // Set borderBottomWidth to render the border
    borderStyle: 'dotted',
    borderColor: '#989898',
    
  },
  ShippingdottedLine:{
    height: 2, // Thickness of the line
    flex: 1,
    borderWidth: 0, // Set border width to 0
    borderBottomWidth: 1.5, // Set borderBottomWidth to render the border
    borderStyle: 'dotted',
    borderColor: '#989898',
  }
});