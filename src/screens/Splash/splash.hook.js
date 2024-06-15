import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { CartListCount } from '../../api/axios.api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addLangCode } from '../../redux/Slices/LangSlices';
import { ASYNCSTORAGE, NAVIGATION } from '../../constants/constants';
import { addUserData } from '../../redux/Slices/UserData.slice';
import { AddToCart } from '../../constants/axios.url';
import { addProduct } from '../../redux/Slices/AddToCartSlice';
import { useNavigation } from '@react-navigation/native';

const useSplshHook = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()


  useEffect(() => {
    setTimeout(() => {
      navigation.replace(NAVIGATION.DrawerNavigation);
    }, 3000);
  }, []);


  const setLang = async () => {
    try {
      const result = await AsyncStorage.getItem(ASYNCSTORAGE.Langues);
      !result && setLangues();
      result && dispatch(addLangCode(result));
    } catch (error) { }
  };

  const setLangues = async () => {
    const langNum = '2';
    try {
      await AsyncStorage.setItem(ASYNCSTORAGE.Langues, langNum);
      dispatch(addLangCode(langNum));
    } catch (error) { }
  };

  const setUserData = async () => {
    try {
      const rep = await AsyncStorage.getItem("UserData")
      const response = JSON.parse(rep)
      dispatch(addUserData(response))
      getData(response?.token)
    } catch (error) {
      console.log("SPLASH SCREEN SET USER ERROR ======> ", error)
    }
  }



  useEffect(() => {
    setLang()
    setUserData()
  }, []);


  const getData = async (token) => {
    const result = await AsyncStorage.getItem(ASYNCSTORAGE.Langues);
    const fromData = new FormData()
    fromData.append("token", token)
    fromData.append("store_id", result)
    try {
      const response = await CartListCount(fromData)
      if (response?.status == "200") {
        const count = parseInt(response?.data?.data?.items_qty)
        count ? dispatch(addProduct(count)) : dispatch(addProduct(0))
      } else {
        console.log("else respomnse :::::::::::::", response)
        dispatch(addProduct(0))
      }

    } catch (error) {
      dispatch(addProduct(0))
    }
  }

  return {

  }
}

export default useSplshHook

const styles = StyleSheet.create({})