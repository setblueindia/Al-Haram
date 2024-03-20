<<<<<<< HEAD
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
=======
import { View, Text ,Dimensions,TouchableOpacity,Image} from 'react-native'
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
const CustomHeader = () => {
  const HomeScreen = () => {
    navigation.navigate('Home');
  };
  return (
<<<<<<< HEAD
    <View style={{ backgroundColor: "#fff", justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
      <View style={{ marginHorizontal: 10 }}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </View>
      <View style={{}}>
        <TouchableOpacity onPress={HomeScreen}>
          <Image
            source={require('../../assests/Logo.png')} // Replace with your image path
            style={{
              width: width * 0.3, height: height * 0.1, resizeMode: "contain",
=======
    <View style={{backgroundColor:"#fff",justifyContent:"space-between",flexDirection:"row",height:height*8/100,alignItems:"center"}}>
      <View style={{marginHorizontal:10}}>

      <Ionicons name="arrow-back" size={28} color="black" />
      </View>
      <View style={{}}>

      <TouchableOpacity onPress={HomeScreen}>
          <Image
            source={require('../../assests/Logo.png')} // Replace with your image path
            style={{
              width: width*0.3, height: height*0.1, resizeMode: "contain", 
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
            }}
          />
        </TouchableOpacity>
      </View>
<<<<<<< HEAD
      <View style={{ marginRight: 10 }}>
=======
      <View style={{marginRight:10}}>
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
        <AntDesign name="shoppingcart" size={28} color="black" />
      </View>
    </View>
  )
}
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
export default CustomHeader