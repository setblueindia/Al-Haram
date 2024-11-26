import { Linking } from 'react-native';
import { useEffect, useState } from 'react';
import { NAVIGATION, NUMBER } from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Ar, En } from '../../constants/localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addLangCode, updateLangCode } from '../../redux/Slices/LangSlices';
import { DeleteAccountAPI, ProductlistCount } from '../../api/axios.api';
import { addProduct } from '../../redux/Slices/AddToCartSlice';
import DeviceInfo from 'react-native-device-info';
import { addUserData } from '../../redux/Slices/UserData.slice';
import { SHOWTOTS } from '../../utils/utils';

const useProfileHook = () => {

  const lang = useSelector(state => state.lang.data)
  const userData = useSelector(state => state?.userData)
  const HomeScreen = useSelector(state => state?.HomeScreen)
  const loder = useSelector(state => state?.Categories?.loader)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const version = DeviceInfo.getVersion()
  const [modal, setModal] = useState(false)
  const [shoeDelete, setShoewDelete] = useState(false)
  const PROFILEStr = lang == NUMBER.num0 ? Ar : En
  const email = userData?.data?.email
  const firstName = userData?.data?.firstname
  const lastName = userData?.data?.lastname
  const name = (firstName && lastName) ? firstName + " " + lastName : NUMBER.num0 == lang ? "حسابي" : "User"
  const valiTemp = userData?.data
  const menuItems = [
    { icon: 'hearto', text: PROFILEStr?.Wishlist, display: 1 },
    { icon: 'wallet', text: PROFILEStr?.MyWallet, display: 1 },
    { icon: 'gift', text: PROFILEStr?.giftCardBalcnce, display: 1 },
    { icon: 'shoppingcart', text: PROFILEStr?.MyOrder, display: 1 },
    { icon: 'shoppingcart', text: PROFILEStr?.Sponser, display: 1 },
    { icon: 'book', text: PROFILEStr?.AddressBook, display: 1 },
    { icon: 'phone', text: PROFILEStr?.CustomerService, display: 1 },
    { icon: valiTemp ? 'logout' : "login", text: valiTemp ? PROFILEStr?.Notifications : PROFILEStr?.LOGIN, display: 1 },
    valiTemp &&
    { icon: "delete", text: PROFILEStr?.DeleteAccount, display: HomeScreen?.data?.gdpr }
  ];

  useEffect(() => {
    PoductCount()
  }, [])

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
      if (item == PROFILEStr.giftCardBalcnce) {
        navigation.navigate(NAVIGATION.giftBalanceCheck)
      }
      if (item == PROFILEStr.MyOrder) {
        navigation.navigate(NAVIGATION.MyOrderSscreen)
      }
      if (item == PROFILEStr.Sponser) {
        navigation.navigate(NAVIGATION.SponserScreen)
      }
      if (item == PROFILEStr.Notifications) {
        if (item == PROFILEStr.LOGIN) {
          navigation.navigate(NAVIGATION.Login)
        } else {
          setModal(true)
        }
      }
      if (item == PROFILEStr.DeleteAccount) {
        setShoewDelete(true)
      }
    } else {

      if (item !== PROFILEStr.Notifications) {
        if (item == PROFILEStr.giftCardBalcnce) {
          navigation.navigate(NAVIGATION.giftBalanceCheck)
        } else {
          navigation.navigate(NAVIGATION.Login)
        }
      }
    }
  }

  const changeLungues = async () => {
    const num = lang == NUMBER.num0 ? NUMBER.num1 : lang == NUMBER.num1 ? NUMBER.num0 : NUMBER.num0;

    try {
      await AsyncStorage.setItem('Lang', num);
      dispatch(updateLangCode(num));
      // CetegouriesList(num)

    } catch (error) {
      console.log('UPDATE LANGUES ERROR :: ', error);
    }
  };

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
        const result = await ProductlistCount(countData, lang)
        const arrOFItems = result?.data?.data?.customerCart?.items
        const totalQuantity = arrOFItems?.length > 0 && arrOFItems?.reduce((sum, item) => sum + item.quantity, 0);
        totalQuantity > 0 ? dispatch(addProduct(totalQuantity)) : dispatch(addProduct(0))
      } else {
        dispatch(addProduct(0))
      }
    } catch (error) {
      console.log("GET PRODUCT LIST ERROR ::::::::::::: ", error)
      dispatch(addProduct(0))
    }
  }

  const socialPress = (social) => {
    if (social == '1') {
      const instagramURL = 'https://www.instagram.com/alharamksa/';
      Linking.openURL(instagramURL);
    }
    if (social == '2') {
      const instagramURL = 'https://www.facebook.com/alharamksa/';
      Linking.openURL(instagramURL);
    }
    if (social == '3') {
      const instagramURL = 'https://maroof.sa/businesses/';
      Linking.openURL(instagramURL);
    }
    if (social == '4') {
      const instagramURL = 'https://alharamstores.com/vat-document';
      Linking.openURL(instagramURL);
    }
    if (social == '5') {
      const instagramURL = 'https://alharamstores.com/e-commerce-authentication-certificate';
      Linking.openURL(instagramURL);
    }
  }

  const singOut = async () => {
    const langNum = '2'
    try {
      await AsyncStorage.clear()
      //  console.log("result :::" ,result )
      dispatch(addUserData(undefined))
      dispatch(addLangCode(langNum))
      //  navigation.navigate(NAVIGATION.Login , {type : true})
      navigation.navigate(NAVIGATION.Login)
    } catch (error) {
      console.log("SINGOUTE ERROR ::::::", error)
    }
  }

  // delete account API
  const deleteAccount = async () => {
    const fromData = new FormData()
    fromData.append("email", email)
    fromData.append("customer_id", userData?.data?.id)
    fromData.append("store_id", lang)
    try {
      const result = await DeleteAccountAPI(fromData, lang)
      SHOWTOTS(result?.data?.message)
      singOut()
    } catch (error) {
      console.log("Delete account error ::::: ", error)
    }
  }



  return {
    menuItems,
    lang,
    email,
    firstName,
    lastName,
    version,
    changeLungues,
    navigation,
    onPress,
    navigation,
    name,
    userData,
    PROFILEStr,
    loder,
    socialPress,
    setModal,
    singOut,
    modal,
    deleteAccount,
    setShoewDelete, shoeDelete
  };
};

export default useProfileHook;

