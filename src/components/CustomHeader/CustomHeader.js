import React, { useState, useRef, useEffect } from 'react';
import {
  Image, View, Text, ScrollView,
  Dimensions,
  StyleSheet, Animated, Linking, TextInput, FlatList, ActivityIndicator,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { createDrawerNavigator } from '@react-navigation/drawer';

const CustomHeader = () => {
  const { width, height } = Dimensions.get('window');
  const DrawerNavigator = createDrawerNavigator();
  const navigation = useNavigation();
  const handleDrawerOpen = () => {
    navigation.openDrawer();
  };
  const HomeScreen = () => {
    navigation.navigate('Home');
  };
  const [animatedValue] = useState(new Animated.Value(1));
  const handlePress = () => {
    Animated.sequence([
      Animated.timing(animatedValue, { toValue: 1.4, duration: 100, useNativeDriver: false }),
      Animated.timing(animatedValue, { toValue: 1, duration: 100, useNativeDriver: false }),
    ]).start();
  };
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [counter, setCounter] = useState(0);
  const handlstore = () => {
    setCounter(counter + 1);
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2, 
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const animatedStyle = { transform: [{ scale: scaleValue }], padding: 5 };
  const handleCancel = () => {
    setIsSearchVisible(false);
  };
    const handleNavigateToSearch = () => {
    // Navigate to the search screen here
    navigation.navigate('SearchScreen');
  };
  return (
    <View style={{ width: width,backgroundColor:"#fff"}}>
        <View style={{ flexDirection: "row", alignSelf: "center", width: width, justifyContent: "space-between", height:height*8/100,backgroundColor:"#fff",borderBottomEndRadius:1,borderBottomColor:"lightgray",borderBottomWidth:1,padding:5 }}>
        <View style={{ alignSelf: "center", width: width * 15 / 100,padding:10 }}>
          <TouchableOpacity onPress={handleDrawerOpen}>
            <Icons
              name="menu"
              size={30}
              color="#444444"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.9 }}>
          <TouchableOpacity onPress={HomeScreen}>
            <Image
              source={require('../../assests/Logo.png')}
              style={{
                width: "70%", height: 50, resizeMode: "contain", alignSelf: "center"
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <TouchableOpacity onPress={handleNavigateToSearch}>
            <View style={{ padding: 5 }}>
              <Image
                source={require('../../assests/search..png')}
                style={{ width: 25, height: 25, tintColor: '#444444' }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Animated.View style={{ transform: [{ scale: animatedValue }], padding: 5 }}>
              <Feather name="heart" size={26} color="#444444" />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlstore}>
            <Animated.View style={[styles.iconContainer, animatedStyle]}>
              <Image
                source={require('../../assests/shopping-cart.png')}
                style={styles.icon}
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
      
  
    </View>
  )
}
export default CustomHeader
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
 
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  languageItem: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
 
  selectedBtn: {
  },
  container: {
    flex: 1,
  },
  drawerItem: (active = false) => ({
    padding: 11,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
  }),
  drawerRouteText: {
    letterSpacing: 0.4,
    color: 'black',
    fontSize: 15,
    fontWeight: '400'
  },
  itemContainer: {
    flex: 0.8,
    padding: 15,
  },
  bottomSection: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  logoutContainer: {
    borderTopColor: 'black',
    borderTopWidth: 0.5,
  },
  versionText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    padding: 5
  },
  logoutSection: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 0.2,
  },
  verticalLine: {
    height: '100%', 
    width: 1, 
    backgroundColor: 'black', 
  },
  copyRightText: {
    fontSize: 12
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191266',
  },
  button: {
    backgroundColor: '#6258e8',
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    marginBottom: 100,
    fontSize: 18,
    color: 'white',
  },
  languagesList: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#6258e8',
  },
  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: 'white',
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  versionInfo: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10
  },
  verticalLine: {
    width: '100%',
    backgroundColor: 'red',
    marginHorizontal: 10,
  },
  iconContainer: {
    marginRight: 10
  },
  iconchat: {
    marginRight: 10
  },
  roundedIcon: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#980404"
  },
  whatsappIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  chatImage: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 10
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    width: "80%",
    borderRadius: 15,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    color: "black"
  },
});