import { Linking, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NAVIGATION, NUMBER, PROFILEStr } from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Ar, En } from '../../constants/localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateLangCode } from '../../redux/Slices/LangSlices';
import { ProductlistCount, getCetergourisList, getProductDetails } from '../../api/axios.api';
import { addCetegoriesData } from '../../redux/Slices/CetegoriesList';
import { addProduct } from '../../redux/Slices/AddToCartSlice';
import DeviceInfo from 'react-native-device-info';

const useProfileHook = () => {

  const lang = useSelector(state => state.lang.data)
  const userData = useSelector(state => state?.userData)
  const loder = useSelector(state => state?.Categories?.loader)
  const [isLoadding, setIsLoadding] = useState(false)
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState()
  const [arabic, setArabic] = useState(lang == NUMBER.num0 ? true : false)
  const dispatch = useDispatch();
  const version = DeviceInfo.getVersion()


  const PROFILEStr = lang == NUMBER.num0 ? Ar : En

  const email = userData?.data?.email
  const firstName = userData?.data?.firstname
  const lastName = userData?.data?.lastname
  const name = (firstName && lastName) ? firstName + " " + lastName : NUMBER.num0 == lang ? "حسابي" : "User"

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

  const changeLungues = async () => {
    const num = lang == NUMBER.num0 ? NUMBER.num1 : lang == NUMBER.num1 ? NUMBER.num0 : NUMBER.num0;

    try {
      await AsyncStorage.setItem('Lang', num);
      dispatch(updateLangCode(num));
      CetegouriesList(num)

    } catch (error) {
      console.log('UPDATE LANGUES ERROR :: ', error);
    }
  };


  const CetegouriesList = async (num) => {
    setIsLoadding(true)
    const params = `
    {
      categoryList(filters: {ids: {in: ["2"]}}) {
        children_count
        children {
          id
          level
          name
          path
          url_path
          url_key
          image
          description
          mobile_thumbnail
          mobile_image
          display_mode
          children {
            id
            level
            name
            path
            url_path
            url_key
            image
            description
            mobile_thumbnail
            mobile_circle_thumbnail
            mobile_image
            children {
                id
                level
                name
                path
                url_path
                url_key
                image
                description
                mobile_thumbnail
                mobile_image
            }
          }
        }
      }
    }
    `
    try {
      const res = await getCetergourisList(params, num)
      if (res?.status == '200') {
        dispatch(addCetegoriesData(res?.data?.data?.categoryList[0]))
        setIsLoadding(false)

      }

    } catch (error) {
      console.log("CETEGORIERS LIST ERROR ::::::::::::::: ", error)
      setIsLoadding(false)


    }
  }

  const PoductCount = async () => {
    const countData = `
    query {
      customerCart {
        items {
          quantity
        }
      }
    }
    `
    try {
      if (userData?.data?.token) {
        const result = await ProductlistCount(countData , lang)
        const arrOFItems = result?.data?.data?.customerCart?.items
        const totalQuantity = arrOFItems?.length > 0 && arrOFItems?.reduce((sum, item) => sum + item.quantity, 0);
        totalQuantity > 0 ?  dispatch(addProduct(totalQuantity))  : dispatch(addProduct(0)) 
      }else{
        dispatch(addProduct(0)) 
      }
    } catch (error) {
      console.log("GET PRODUCT LIST ERROR ::::::::::::: ", error)
      dispatch(addProduct(0)) 
    }
  }

  const socialPress = (social) =>{
    if(social == '1'){
      const instagramURL = 'https://www.instagram.com/alharamksa/';
      Linking.openURL(instagramURL);
    }
    if(social == '2'){
      const instagramURL = 'https://www.facebook.com/alharamksa/';
      Linking.openURL(instagramURL);
    }
    if(social == '3'){
      const instagramURL = 'https://maroof.sa/businesses/';
      Linking.openURL(instagramURL);
    }
    if(social == '4'){
      const instagramURL = 'https://alharamstores.com/vat-document';
      Linking.openURL(instagramURL);
    }
    if(social == '5'){
      const instagramURL = 'https://alharamstores.com/e-commerce-authentication-certificate';
      Linking.openURL(instagramURL);
    }
  }

  const handleInstagramPress = () => {
    const instagramURL = 'https://www.instagram.com/alharamksa/';
    Linking.openURL(instagramURL);
  };
  const handleFacebookPress = () => {
    const facebookURL = 'https://www.facebook.com/alharamksa/';
    Linking.openURL(facebookURL);
  };
  const handlechatPress = () => {
    const businessesURL = 'https://maroof.sa/businesses/';
    Linking.openURL(businessesURL);
  };

useEffect(()=>{
  PoductCount()
}, [])

  return {
    menuItems,
    lang,
    email,
    firstName,
    lastName,
    version,
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
    loder,
    isLoadding,
    socialPress

  };
};

export default useProfileHook;

