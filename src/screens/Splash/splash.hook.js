import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { CartListCount } from '../../api/axios.api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addLangCode } from '../../redux/Slices/LangSlices';
import { ASYNCSTORAGE } from '../../constants/constants';
import { addUserData } from '../../redux/Slices/UserData.slice';
import { AddToCart } from '../../constants/axios.url';
import { addProduct } from '../../redux/Slices/AddToCartSlice';

const useSplshHook = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state?.userData?.data)
  const lang = useSelector(state => state?.lang?.data)

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
    } catch (error) {
      console.log("SPLASH SCREEN SET USER ERROR ======> ", error)
    }
  }

  useEffect(() => {
    setLang()
    setUserData()
    getData()
  }, []);

  const getData = async () => {
    const fromData = new FormData()
    fromData.append("token", userData?.token)
    fromData.append("store_id", lang)
    try {
      const response = await CartListCount(fromData)
      const count = parseInt(response?.data?.data?.items_qty)
      dispatch(addProduct(count))
    } catch (error) {
    }
  }

  return {

  }
}

export default useSplshHook

const styles = StyleSheet.create({})