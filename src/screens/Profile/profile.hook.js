import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { NAVIGATION, NUMBER, PROFILEStr } from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Ar, En } from '../../constants/localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateLangCode } from '../../redux/Slices/LangSlices';

const useProfileHook = () => {

  const lang = useSelector(state => state.lang.data)
  const userData = useSelector(state => state?.userData)
  const loder = useSelector(state => state?.Categories?.loader)

  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState()
  const [arabic, setArabic] = useState(lang == NUMBER.num0 ? true : false)
  const dispatch = useDispatch();

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
    // { icon: 'phone', text: PROFILEStr?.CustomerService },

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

  const changeLungues = async () => {
    const num = lang == NUMBER.num0 ? NUMBER.num1 : lang == NUMBER.num1 ? NUMBER.num0 : NUMBER.num0;
    console.log("NUMBER ::::::::::::::: ", num)
    try {
      await AsyncStorage.setItem('Lang', num);
      dispatch(updateLangCode(num));
    } catch (error) {
      console.log('UPDATE LANGUES ERROR :: ', error);
    }
  };

  return {
    menuItems,
    lang,
    email,
    firstName,
    lastName,
    setSelectedItems,
    changeLungues,
    setArabic,
    navigation,
    onPress,
    navigation,
    name,
    userData,
    PROFILEStr,
    arabic,
    loder

  };
};

export default useProfileHook;

