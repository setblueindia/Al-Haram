import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { NAVIGATION, NUMBER } from '../../constants/constants';
import { Ar, En } from '../../constants/localization';
import { useSelector } from 'react-redux';

const UseMyOrderHook = () => {
  const navigation = useNavigation();
  const lang = useSelector(state => state?.lang?.data);
  const Str = lang == NUMBER.num0 ? Ar : En
  const data = [
    {
      key: 2,
      ProductName  :lang == NUMBER.num1 ? "This product for testing" : "هذا المنتج للاختبار",
      ProID : "00059826"
    },
    {
      key: 3,
      ProductName  :lang == NUMBER.num1 ? "This product for testing" : "هذا المنتج للاختبار",
      ProID : "00059826"
    },
    {
      key: 4,
      ProductName  :lang == NUMBER.num1 ? "This product for testing" : "هذا المنتج للاختبار",
      ProID : "00059826"
    },
    {
      key: 5,
      ProductName  :lang == NUMBER.num1 ? "This product for testing" : "هذا المنتج للاختبار",
      ProID : "00059826"
    },
    {
      key: 6,
      ProductName  :lang == NUMBER.num1 ? "This product for testing" : "هذا المنتج للاختبار",
      ProID : "00059826"
    }
  ]



  return {
    navigation,
    lang,
    data,
    Str
  };
};

export default UseMyOrderHook

