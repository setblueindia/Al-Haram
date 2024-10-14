
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { ASYNCSTORAGE, NAVIGATION, NUMBER } from '../../constants/constants';
import { Ar, En } from '../../constants/localization';
import { useEffect, useState } from 'react';
import { AddressList, GetWallateAmount, postAfterUrWay, postBeforUrWay } from '../../api/axios.api';
import { WallateAmount } from '../../utils/asyncStorage';
import { config } from '../YourWay/config';
import { SHOWTOTS } from '../../utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';


const UseWalletHook = (setloader, route) => {
  const navigation = useNavigation();
  const lang = useSelector(state => state?.lang?.data);
  const userId = useSelector(state => state?.userData?.data?.id)
  const userData = useSelector(state => state?.userData?.data)
  const [amount, setAmount] = useState('')
  const [isLoadding, setIsLoading] = useState(false)
  const [addAmount, setAddAmount] = useState(0)
  const [oID, setOId] = useState('')
  const Str = lang == NUMBER.num0 ? Ar : En



  useEffect(() => {
    getWallteAmount()
  }, [])

  const getWallteAmount = async () => {
    const data = `{ getWalletRemainingTotal(id : ${userData?.id}) }`
    setloader ? setloader(true) : setIsLoading(true)
    try {
      const rep = await GetWallateAmount(data, lang)
      if (rep) {
        setAmount(rep?.data?.data?.getWalletRemainingTotal ? rep?.data?.data?.getWalletRemainingTotal : 0)
        const strAmount = JSON.stringify(rep?.data?.data?.getWalletRemainingTotal ? rep?.data?.data?.getWalletRemainingTotal : 0)
        WallateAmount(strAmount)
        setloader ? setloader(false) : setIsLoading(false)
      } else {
        console.log("ERT AMOUNT INNER ERROR :::::::: ", rep?.data)
      }
    } catch (error) {
      console.log("GERT AMOUNT ERROR :::::: ", error)

      setloader ? setloader(false) : setIsLoading(false)

    }
  }

  const data = {
    ManageWallet: lang == NUMBER.num1 ? "Manage Wallet" : "إدارة المحفظة",
    WalletDetails: lang == NUMBER.num1 ? "Wallet Details" : "تفاصيل المحفظة",
    YourWalletBalance: lang == NUMBER.num1 ? "Your Wallet Balance" : "رصيد محفظتك",
    AddAmount: lang == NUMBER.num1 ? "AddAmount" : "أضف المبلغ",
    EnterAmount: lang == NUMBER.num1 ? "Enter Amount" : "أدخل المبلغ",
    AddAmounttoWallet: lang == NUMBER.num1 ? "Add Amount to Wallet" : "إضافة مبلغ إلى المحفظة"
  }

  const getAdreesList = async () => {
    setIsLoading(true)
    const formData = new FormData
    formData.append("customer_id", userData?.id)
    formData.append("store_id", lang)
    try {
      const response = await AddressList(formData)
      if (response?.data?.status == NUMBER.num1) {
        if (response?.data?.data?.length <= 0) {
          navigation?.navigate(NAVIGATION.addaddress)
          setIsLoading(false)
        } else {
          beforeUrwayPayment(response?.data?.data[0])
          setIsLoading(false)
        }
      } else {
        setIsLoading(false)
      }
    } catch (error) {
      console.log("Get Address API ERROER :::::::; ", error)
      setIsLoading(false)
    }
  }

  const beforeUrwayPayment = async (address) => {
    setIsLoading(true)
    const data = `
     mutation{
       placeOrder(input:{
       customer_id: ${userData?.id}
       currency_id: "SAR"
       email: "${userData?.email}"
       store_id: ${lang}
       wallet_amount: ${addAmount}
       billing_address: {
           firstname: "${address?.firstname}"
           lastname: "${address?.lastname}"
           street: "${address?.street}"
           city: "${address?.city}"
           country_id:"${address?.country_id}"
           region: "${address?.region?.region_id ? address?.region?.region_id : address?.region?.region}"
           postcode: "${address?.postcode}"
           telephone: "${address?.telephone}"
           fax: "0"
           save_in_address_book: 0
       }
       }){
      order_id
      status
      message 
      increment_id
     }
   }
`
    if (addAmount) {
      try {
        const resp = await postBeforUrWay(data, lang)
        const orderID = resp?.data?.data?.placeOrder?.order_id
        const inccrementID = resp?.data?.data?.placeOrder?.increment_id
        const wallateJasonData = {
          id: resp?.data?.data?.placeOrder?.order_id,
          wallerAmount: addAmount,
          inccrementID: inccrementID
        }
        const WJASONdata = JSON.stringify(wallateJasonData)
        AsyncStorage.setItem("walletData", WJASONdata)


        setOId(orderID)
        orderID &&
          navigation.navigate(NAVIGATION.PaymentScreen, {
            request: {
              country: address?.country_id,
              first_name: userData?.firstname,
              last_name: userData?.lastname,
              address: address?.address1 + " " + address?.address2,
              city: address?.city,
              zip: address?.postcode,
              phone_number: address?.telephone,
              customerEmail: userData?.email,
              udf2: config.responseUrl,
              udf3: 'en',
              trackid: inccrementID,
              tranid: "",
              currency: "SAR",
              amount: addAmount,
              action: 1,
              tokenOperation: "A",
              cardToken: "",
              maskCardNum: "",
              tokenizationType: 0,
              done: false
            },
            callBack: onProcessPayment,
          });
        setIsLoading(false)
      } catch (error) {
        console.log("ADD AMOUNT WALLATE ERROR ::::::::::::::::::: ")
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
      SHOWTOTS(lang == NUMBER.num1 ? "Please add amount" : "الرجاء إضافة المبلغ")
    }
  }

  const onProcessPayment = (responseData) => {
    if (responseData.status == 'success') {
      navigation.navigate(NAVIGATION.ResponseScreen, {
        response: responseData.data,
      });
    } else {
      console.log("message ::::::::::::::::", { message: responseData.error, type: "danger" })
    }
  };

  const afterUrWay = async (adata) => {
    const walletData = await AsyncStorage.getItem("walletData")
    const wallateJasonData = JSON.parse(walletData)

    setIsLoading(true)
    const data =
      `
      mutation{
      onlinePaymentAfterOrderUpdate(input:{
          order_id: ${wallateJasonData?.id}
          wallet_amount: ${wallateJasonData?.wallerAmount}
          tran_refrence_id: "${adata?.tranid}"
          status: ${adata?.status == "Successful" ? 1 : 0}
      }){
          order_id
          status
          message
      }
    }
`
    try {
      const res = await postAfterUrWay(data, lang)
      const message = res?.data?.data?.onlinePaymentAfterOrderUpdate?.message
      const messTost = message?.toString()
      getWallteAmount()
      SHOWTOTS(messTost ? messTost : " ")
      setIsLoading(false)
      setAddAmount("")
    } catch (error) {
      console.log("AFTER URWAY PAYMENT ERROR ::::::: ", error)
      setIsLoading(false)
    }
  }


  useEffect(() => {
    route?.params?.response?.data && afterUrWay(route?.params?.response?.data)
  }, [route])

  return {
    navigation,
    lang,
    data,
    Str,
    amount,
    isLoadding,
    getAdreesList,
    setAddAmount
  };
};

export default UseWalletHook

