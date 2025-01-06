import { Linking } from 'react-native';
import { useEffect, useState } from 'react';
import { ASYNCSTORAGE, NAVIGATION, NUMBER } from '../../constants/constants';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Ar, En } from '../../constants/localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addLangCode, updateLangCode } from '../../redux/Slices/LangSlices';
import { DeleteAccountAPI, ExpireToken, ProductlistCount, getCount, oldAddressDeleted } from '../../api/axios.api';
import { addProduct } from '../../redux/Slices/AddToCartSlice';
import DeviceInfo from 'react-native-device-info';
import { addUserData } from '../../redux/Slices/UserData.slice';
import { SHOWTOTS } from '../../utils/utils';
import { addNotificationCount } from '../../redux/Slices/AddNotificationCount';

const useProfileHook = () => {

  const lang = useSelector(state => state.lang.data)
  const userData = useSelector(state => state?.userData)
  const HomeScreen = useSelector(state => state?.HomeScreen)
  const loder = useSelector(state => state?.Categories?.loader)
  const navigation = useNavigation();
  const isFoucs = useIsFocused()
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
    PoductCount();
  }, [isFoucs]);

  useEffect(() => {
    getUnReadeNotifications()
    oldAddressDetele()
  }, [userData?.data?.id])

  {/* OnPress Logic*/ }
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

  {/* Chnage Langues Logic*/ }
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


  {/* Product Count API*/ }
  const PoductCount = async () => {
    const fromdata = new FormData()
    const resultt = await ExpireToken(fromdata, lang)

    if (resultt?.data) {
      const countData = `
      query {
        getQuoteItemCount(quote_id: ${resultt?.data})
      }
      `
      try {

        const result = await ProductlistCount(countData, lang)
        dispatch(addProduct(result?.data?.data?.getQuoteItemCount))
        // const arrOFItems = result?.data?.data?.customerCart?.items
        // const totalQuantity = arrOFItems?.length > 0 && arrOFItems?.reduce((sum, item) => sum + item.quantity, 0);
        // totalQuantity > 0 ? dispatch(addProduct(totalQuantity)) : dispatch(addProduct(0))

      } catch (error) {
        console.log("GET PRODUCT LIST ERROR ::::::::::::: ", error)
        dispatch(addProduct(0))
      }
    } else {
      console.log("::::::: QUOTE ID NOT FOUND :::::::")
    }
  }

  {/* Social Media Press Logic */ }
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


  {/* Sing Out API */ }
  const singOut = async () => {
    const langNum = '2'
    setTimeout(async () => {
      console.log("Done::::::")
      const tempTerms = "true"
      await AsyncStorage.setItem(ASYNCSTORAGE.Terms, tempTerms)
    }, 3000);
    try {
      await AsyncStorage.clear()
      dispatch(addUserData(undefined))
      dispatch(addLangCode(langNum))
      dispatch(addNotificationCount(0))
      dispatch(addProduct(0))
      navigation.navigate(NAVIGATION.Login)

    } catch (error) {
      console.log("SINGOUTE ERROR ::::::", error)
    }
  }



  {/* Delete Account API */ }
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


  {/* Unread Notification Count API */ }
  const getUnReadeNotifications = async () => {
    const qrry = `{
      getUnReadNotificationCountByCustomerId(customer_id : ${userData?.data?.id}){
          status 
          count
          message
      }
  } `
    if (userData?.data?.id) {
      try {
        const result = await getCount(qrry, lang?.data)
        if (result?.data?.data?.getUnReadNotificationCountByCustomerId?.status) {
          dispatch(addNotificationCount(result?.data?.data?.getUnReadNotificationCountByCustomerId?.count))
        }
      } catch (error) {
        console.log("GET NOTIFICATIONS COUNT :::::: ", error)
      }
    } else {
      console.log("USER ID NOT FOUND ::::::: ")
    }
  }


  {/* Address Remove API */ }
  const oldAddressDetele = async () => {
    const tempAddress = await AsyncStorage.getItem(ASYNCSTORAGE.oldAddress)
    if (userData?.data?.id && tempAddress !== "true") {
      const params = `
      {
        deleteOldAddress(customer_id : ${userData?.data?.id}){
            status
            message        
        }
    }
      `
      try {
        const res = await oldAddressDeleted(params, lang?.data)
        const tempAddress = "true"
        await AsyncStorage.setItem(ASYNCSTORAGE.oldAddress, tempAddress)
        console.log("message :", res?.data?.data?.deleteOldAddress?.message)
      } catch (error) {
        console.log(":::::::::: ADDRESS DELETE EROOR ::::::::::::::", error)
      }
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

