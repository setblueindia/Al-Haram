import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { NAVIGATION, NUMBER, PROFILEStr } from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Ar, En } from '../../constants/localization';

const useProfileHook = () => {

  const lang = useSelector(state => state.lang.data)
  const userData = useSelector(state => state?.userData)
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState()
  const PROFILEStr = lang == NUMBER.num0 ? Ar : En

  const email = userData?.data?.email
  const firstName = userData?.data?.firstname
  const lastName = userData?.data?.lastname
  const name = (firstName && lastName) ? firstName + " " + lastName : "User"

  const menuItems = [

    { icon: 'hearto', text: PROFILEStr?.Wishlist },
    { icon: 'wallet', text: PROFILEStr?.MyWallet },
    { icon: 'shoppingcart', text: PROFILEStr?.MyOrder },
    { icon: 'shoppingcart', text: PROFILEStr?.Sponser },
    { icon: 'book', text: PROFILEStr?.AddressBook },
    { icon: 'phone', text: PROFILEStr?.CustomerService },

  ];
  const onPress = (item) => {
    if (userData?.data) {
      if (item == PROFILEStr.Wishlist) {
        navigation.navigate(NAVIGATION.WhishListScreen)
      }
      if (item == PROFILEStr.AddressBook) {
        navigation.navigate(NAVIGATION.AddressBookScreen)
      }
      if (item == PROFILEStr.CustomerService) {
        navigation.navigate(NAVIGATION.CustomerService)
      }
      if (item == PROFILEStr.MyWallet) {
        navigation.navigate(NAVIGATION.Wallet)
      }
      if (item == PROFILEStr.MyOrder) {
        navigation.navigate(NAVIGATION.MyOrderSscreen)
      }
      if (item == PROFILEStr.Sponser) {
        navigation.navigate(NAVIGATION.SponserScreen)
      }

    } else {
      navigation.navigate(NAVIGATION.Login)
    }

  }





  return {
    menuItems,
    lang,
    email,
    firstName,
    lastName,
    setSelectedItems,
    navigation,
    onPress,
    navigation,
    name,
    userData

  };
};

export default useProfileHook;

