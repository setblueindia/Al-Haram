import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Splash from '../screens/Splash/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '../constants/constants';
import OtpScreen from '../screens/OTPScreen/OtpScreen';
import SingUp from '../screens/SingUp/SingUp';
import TabNavigation from './Tab';
import DrowerNavigation from './DrowerNavigation';
import Product from '../screens/Product/Product';
import WhishList from '../screens/WhisList/WhishList';
import AddressBook from '../screens/AddreesBook/AddressBook';
import CustomerService from '../screens/CustomerServices/CustomerService';
import Wallet from '../screens/Wallet/Wallet';
import MyOrder from '../screens/MyOrder/MyOrder';
import ProductDetails from '../screens/ProductDetails/ProductDetails';
import ShoopingCart from '../screens/ShoppingCart/ShoopingCart';
import Done from '../screens/ShoppingCart/Done';
import Addaddress from '../screens/AddAdress/Addaddress';
import SerchScreen from '../screens/SercchScreen/SerchScreen';
import Sponser from '../screens/SponserFlow/Sponser';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NAVIGATION.DrawerNavigation);
    }, 3000);
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.Splash}
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Login}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.OTPScreen}
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.SinupSceen}
        component={SingUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.DrawerNavigation}
        component={DrowerNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.ProductScreen}
        component={Product}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.WhishListScreen}
        component={WhishList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.AddressBookScreen}
        component={AddressBook}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.CustomerService}
        component={CustomerService}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name={NAVIGATION.Wallet}
        component={Wallet}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name={NAVIGATION.MyOrderSscreen}
        component={MyOrder}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name={NAVIGATION.ProducDetails}
        component={ProductDetails}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name={NAVIGATION.Shoppingcart}
        component={ShoopingCart}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name={NAVIGATION.Done}
        component={Done}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name={NAVIGATION.addaddress}
        component={Addaddress}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name={NAVIGATION.SerchScreen}
        component={SerchScreen}
        options={{ headerShown: false }}
      />
          <Stack.Screen
        name={NAVIGATION.SponserScreen}
        component={Sponser}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
