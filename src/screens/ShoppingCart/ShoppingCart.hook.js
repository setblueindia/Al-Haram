import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ASYNCSTORAGE, NAVIGATION, NUMBER } from '../../constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { CartList, DeleteCartItems, getCoupan, getPlaceHolder1, getShippingListAxios, getStorePickupMethod, setPaymentMethod } from '../../api/axios.api'
import { addProduct } from '../../redux/Slices/AddToCartSlice'
import { ShippingList } from '../../constants/axios.url'
import { useSharedValue } from 'react-native-reanimated'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useShoppingcart = () => {
  const lang = useSelector(state => state?.lang?.data)
  const productNo = useSelector(state => state?.AddToCart?.data)
  const disPatch = useDispatch()
  const [index, setIndex] = useState(0)
  const [data, setData] = useState([])
  const [isLoadding, setLoadding] = useState(false)
  const navigation = useNavigation()
  const Token = useSelector(state => state?.userData?.data?.token)
  const [outOfStock, setOutOfStock] = useState()


  // For Address
  const [addressCod, setAddressCode] = useState()
  const [billingAddress, setBillingAddress] = useState([])
  const [selectAddressList, setSelectAddress] = useState()



  const [ShhippingData, SetShippingdata] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [messages, setMessages] = useState()
  const [showWallet, setShowWallet] = useState(false)
  const [shippingData, setShippingdata] = useState()

  const [paymentScreenData, setPaymentScreen] = useState()
  const [selectPayment, setSelectPayment] = useState('')

  const [wallateAmount, setWallateAmount] = useState()

  const billingAddressData = billingAddress.length > 0 ? billingAddress[0] : addressCod

  const shopinfCratData = lang == NUMBER.num0 ? {
    ShoppingCart: "عربة التسوق",
    cart: "عربة التسوق",
    Shipping: "شحن",
    Payment: "قسط",
    ProceedtoCheckout: "الشروع في الخروج",
    YourAddreses: "عنوانك",
    PaymentOptions: "خيارات الدفع",
    COD: "الدفع عند الاستلام",
    credite: "الدفع باستخدام بطاقة الائتمان/الخصم",
    Subtotal: "المجموع الفرعي",
    ShippingHandling: "شحن وتسليم",
    Tax: "ضريبة",
    OrderTotal: "الطلب الكلي",
    data: [
      {
        produtName: "طقم بيجامة رجالي تيشيرت قصير...",
        Color: "اللون : رمادي فاتح",
        QTY: "الكمية :",
        Size: "مقاس : M",


      },
      {
        produtName: "طقم بيجامة رجالي تيشيرت قصير...",
        Color: "اللون : رمادي فاتح",
        QTY: "الكمية :",
        Size: "مقاس : M"

      },
      {
        produtName: "طقم بيجامة رجالي تيشيرت قصير...",
        Color: "اللون : رمادي فاتح",
        QTY: "الكمية :",
        Size: "مقاس : M"

      }]


  } :
    {

      ShoppingCart: "Shopping Cart",
      cart: "Cart",
      Shipping: "Shipping",
      Payment: "Payment",
      ProceedtoCheckout: "Proceed to Checkout",
      YourAddreses: "Your Addreses",
      PaymentOptions: "Payment Options",
      COD: "COD",
      credite: "Pay with Credit/Debit Card",
      Subtotal: "Subtotal",
      ShippingHandling: "Shipping & Handling",
      Tax: "Tax",
      OrderTotal: "Order Total",
      data: [
        {
          produtName: "Men's Pajama Set Short T-Shi...",
          Color: "Color : Light Gray",
          QTY: "QTY :",
          Size: "Size :"
          // LightGray : "Color : Light Gray"
        },
        {
          produtName: "Men's Pajama Set Short T-Shi...",
          Color: "Color : Light Gray",
          QTY: "QTY :",
          Size: "Size :"
        },
        {
          produtName: "Men's Pajama Set Short T-Shi...",
          Color: "Color : Light Gray",
          QTY: "QTY :",
          Size: "Size :",


        }]
    }
  useEffect(() => {
    getData()
    getWallateData()
  }, [])

  // Payment Check Out-Button
  const onPress = () => {
    if (index < 3) {
      if (index == 0) {
        setIndex(index + 1)
      }
      if (index == 1) {
        if (!addressCod) {
          setShowModal(true)
          setMessages("Please select address")
        } else {
          getShipingList()
          setIndex(index + 1)
        }
      }

      if (index == 2) {
        if (!shippingData) {
          setShowModal(true)
          setMessages("Please select shipping method")
        } else {
          PlaceHolder1()
        }
      }

    } else {
      navigation.navigate(NAVIGATION.Done, { lang: lang })
    }
  }
  // Back Button
  const goBack = () => {
    if (index == 2) {
      setAddressCode('')
      setSelectPayment('')
    }
    if (index == 3) {
      setShippingdata('')
      setSelectPayment('')
    }
    index > 0 && setIndex(index - 1)
  }

  // Get Cart Items API
  const getData = async () => {
    setIndex(0)
    setLoadding(true)
    const formData = new FormData
    formData.append("store_id", lang)
    formData.append("token", Token)
    try {
      const response = await CartList(formData)
      if (response.data.status) {
        const inStockItems = [];
        const outOfStockItems = [];
        response?.data?.data?.items.forEach(item => {
          if (item.isInStock) {
            inStockItems.push(item);
          } else {
            outOfStockItems.push(item);
          }
        });
        setData(inStockItems)
        setOutOfStock(outOfStockItems)
        setLoadding(false)
      }
    } catch (error) {
      setLoadding(false)
      console.log("CART LIST ERROR ::::::::::::::::::::::: ", error)
    }
  }

  // Delete Cart Product
  const deleteProduct = async (items) => {
    setLoadding(true)
    const formData = new FormData
    formData.append("token", Token)
    formData.append("item_id", items)
    try {
      const response = await DeleteCartItems(formData)
      if (response?.data?.status == NUMBER.num1) {
        getData()
        disPatch(addProduct(productNo - 1))
      } else {
        setLoadding(false)
      }

    } catch (error) {
      console.log("DELETE CART ITEMS :::::::::::::::::::: ", error)
      setLoadding(false)
    }
  }

  // Get Shipping Method API-List
  const getShipingList = async () => {
    setLoadding(true)
    const formData = new FormData()
    formData.append("token", Token)
    formData.append("store_id", lang)
    formData.append("addressId", addressCod?.id)
    try {
      const res = await getShippingListAxios(formData)
      SetShippingdata(res?.data?.data)
      setLoadding(false)


    } catch (error) {
      console.log("GET SHIPPING LIST ERROR :::: ", error)
      setLoadding(false)
    }

  }

  // Select Shipping Method API-List 
  const selectShipping = async () => {
    setLoadding(true)
    const formData = new FormData()
    formData.append("store_id", lang)
    try {
      const response = await getStorePickupMethod(formData)
      if (response?.data?.status == NUMBER.num1) {
        setLoadding(false)
        setSelectAddress(response?.data?.data)
        // console.log("=============> ", response?.data?.status)
      } else {
        console.log("ENNER SELECT LIST ERROR :::::: ", error)
      }


    } catch (error) {
      console.log("GET STORE SHIPPING ERROR :::::::::::::: ", error)
      setLoadding(false)

    }
  }

  // Place Holder API
  const PlaceHolder1 = async () => {
    setLoadding(true)
    const params = {
      "addressInformation": {
        "shipping_address": {
          "id": addressCod?.id,
          "customer_id": addressCod?.customer_id,
          "region": addressCod?.region,
          "region_id": addressCod?.region_id,
          "country_id": addressCod?.country_id,
          "street": addressCod?.street,
          "region_code": addressCod?.region_code,
          "telephone": addressCod?.telephone,
          "postcode": addressCod?.postcode,
          "city": addressCod?.city,
          "firstname": addressCod?.firstname,
          "lastname": addressCod?.lastname,
          "default_shipping": true,
          "default_billing": addressCod?.default_billing,
          "region_name": addressCod?.region_name,
          "country_name": addressCod?.country_name,
          "address1": addressCod?.address1,
          "address2": addressCod?.address2,
          "address3": addressCod?.address3,
          "city_display": addressCod?.city_display
        },
        "billing_address": {
          "id": billingAddressData?.id,
          "customer_id": billingAddressData?.customer_id,
          "region": billingAddressData?.region,
          "region_id": billingAddressData?.region_id,
          "country_id": billingAddressData?.country_id,
          "street": billingAddressData?.street,
          "region_code": billingAddressData?.region_code,
          "telephone": billingAddressData?.telephone,
          "postcode": billingAddressData?.postcode,
          "city": billingAddressData?.city,
          "firstname": billingAddressData?.firstname,
          "lastname": billingAddressData?.lastname,
          "default_shipping": false,
          "default_billing": true,
          "region_name": billingAddressData?.region_name,
          "country_name": billingAddressData?.country_name,
          "address1": billingAddressData?.address1,
          "address2": billingAddressData?.address2,
          "address3": billingAddressData?.address3,
          "city_display": billingAddressData?.city_display
        },
        "shipping_carrier_code": shippingData?.carrier_code,
        "shipping_method_code": shippingData?.method_code
      }, "custom": {
        "token": Token,
        "store_id": lang
      }
    }
    try {
      const response = await getPlaceHolder1(params)
      if (response?.status == 200) {
        setIndex(index + 1)
        // console.log("Response =========> ", response?.data?.data)
        setPaymentScreen(response?.data?.data)
        setLoadding(false)
        getCoupanList()

      } else {
        console.log("Inner Place Holder========> ", response?.data)
        setLoadding(false)
      }

    } catch (error) {
      console.log("PLACE-HOLDER 1 ERROR :::::::::::::: ", error)
      setLoadding(false)
    }


  }

  // get Wallet Amount
  const getWallateData = async () => {
    const response = await AsyncStorage.getItem(ASYNCSTORAGE.walletAmount)
    const amount = parseInt(response)
    setWallateAmount(amount)
  }

  // select PaymentMethod
  const selectPaymentMethod = async (cod) => {
    setLoadding(true)
    try {
      const params = {
        "paymentMethod": cod,
        "billing_address": {
          "id": billingAddressData?.id,
          "customer_id": billingAddressData?.customer_id,
          "region": billingAddressData?.region,
          "region_id": billingAddressData?.region_id,
          "country_id": billingAddressData?.country_id,
          "street": billingAddressData?.street,
          "region_code": billingAddressData?.region_code,
          "telephone": billingAddressData?.telephone,
          "postcode": billingAddressData?.postcode,
          "city": billingAddressData?.city,
          "firstname": billingAddressData?.firstname,
          "lastname": billingAddressData?.lastname,
          "default_shipping": false,
          "default_billing": true,
          "region_name": billingAddressData?.region_name,
          "country_name": billingAddressData?.country_name,
          "address1": billingAddressData?.address1,
          "address2": billingAddressData?.address2,
          "address3": billingAddressData?.address3,
          "city_display": billingAddressData?.city_display
        },
        "custom": {
          "token": Token,
          "store_id": lang
        }
      }
      const response = await setPaymentMethod(params)
      // console.log( "===================",response?.data?.data)
      setSelectPayment(response?.data?.data)
      setLoadding(false)

    } catch (error) {
      console.log("SELECTR PAYMENT ERROR :::::: ", error)
      setLoadding(false)
    }
  }

  // get Coupna List Api 
  const  getCoupanList = async () =>{
    const formData = new FormData()

    formData.append("store_id" , lang)
    formData.append("token" , Token)
    try {
   
      const response = await getCoupan(formData)
      console.log("Response of  ::::::::::::: ", response)
    } catch (error) {
      console.log("COUPAN ERROR ::::::: ", error)
    }
  }



  return {
    selectPaymentMethod,
    index,
    navigation,
    data,
    lang,
    shopinfCratData,
    outOfStock,
    ShhippingData,
    Token,
    addressCod,
    selectAddressList,
    isLoadding,
    showModal,
    messages,
    showWallet,
    paymentScreenData,
    wallateAmount,
    setShowModal,
    deleteProduct,
    setAddressCode,
    selectShipping,
    onPress,
    goBack,
    setLoadding,
    setShowWallet,
    setShippingdata,
    setBillingAddress,
    getCoupanList,
    selectPayment,
    setSelectPayment
  }
}

export default useShoppingcart

