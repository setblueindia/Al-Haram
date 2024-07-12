import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { NAVIGATION, NUMBER } from '../../constants/constants';
import { Ar, En } from '../../constants/localization';
import { useSelector } from 'react-redux';
import { getOrderDetailsList } from '../../api/axios.api';

const UseMyOrderHook = () => {
  const navigation = useNavigation();
  const userData = useSelector(state => state.userData?.data)
  const [isLoadding, setIsLoadding] = useState(false)
  const [data , setData] = useState([])
  const lang = useSelector(state => state?.lang?.data);
  const Str = lang == NUMBER.num0 ? Ar : En
  // const data = [
  //   {
  //     key: 2,
  //     ProductName: lang == NUMBER.num1 ? "This product for testing" : "هذا المنتج للاختبار",
  //     ProID: "00059826",
  //     Compalated: lang == NUMBER.num1 ? "completed" : "مكتمل",
  //   },
  //   {
  //     key: 3,
  //     ProductName: lang == NUMBER.num1 ? "This product for testing" : "هذا المنتج للاختبار",
  //     ProID: "00059826",
  //     Compalated: lang == NUMBER.num1 ? "completed" : "مكتمل",
  //   },
  //   {
  //     key: 4,
  //     ProductName: lang == NUMBER.num1 ? "This product for testing" : "هذا المنتج للاختبار",
  //     ProID: "00059826",
  //     Compalated: lang == NUMBER.num1 ? "completed" : "مكتمل",
  //   },
  //   {
  //     key: 5,
  //     ProductName: lang == NUMBER.num1 ? "This product for testing" : "هذا المنتج للاختبار",
  //     ProID: "00059826",
  //     Compalated: lang == NUMBER.num1 ? "completed" : "مكتمل",
  //   },
  //   {
  //     key: 6,
  //     ProductName: lang == NUMBER.num1 ? "This product for testing" : "هذا المنتج للاختبار",
  //     ProID: "00059826",
  //     Compalated: lang == NUMBER.num1 ? "completed" : "مكتمل",
  //   }
  // ]

  const getOrderDeatails = async () => {
    setIsLoadding(true)
    const formData = new FormData()
    formData.append("customer_id", userData?.id)
    formData.append("store_id", lang)
    try {
      const res = await getOrderDetailsList(formData)
      setIsLoadding(false)
      setData(res?.data?.data)
    } catch (error) {
      console.log("ORDER DETAILS ERROR ::::::::: ", error)
      setIsLoadding(false)
    }
  }

  useEffect(() => {
    getOrderDeatails()
  }, [])

  return {
    navigation,
    lang,
    data,
    Str,
    isLoadding
  };
};

export default UseMyOrderHook

