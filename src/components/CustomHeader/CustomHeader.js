import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');
const CustomHeader = () => {
  const HomeScreen = () => {
    navigation.navigate('Home');
  };
  return (
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
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginRight: 10 }}>
        <AntDesign name="shoppingcart" size={28} color="black" />
      </View>
    </View>
  )
}
export default CustomHeader