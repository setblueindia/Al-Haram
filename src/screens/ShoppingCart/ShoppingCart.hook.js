import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ASYNCSTORAGE, NAVIGATION, NUMBER } from '../../constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { CartList, CartListCount, DeleteCartItems, ExpireToken, PlaceeHolder2, getActonCoupan, getCoupan, getPlaceHolder1, getShippingListAxios, getStorePickupMethod, postUpdateCart, setPaymentMethod } from '../../api/axios.api'
import { addProduct } from '../../redux/Slices/AddToCartSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SHOWTOTS } from '../../utils/utils'
import { config } from '../YourWay/config'
import { Platform } from 'react-native'

const useShoppingcart = () => {
  const lang = useSelector(state => state?.lang?.data)
  const productNo = useSelector(state => state?.AddToCart?.data)
  const disPatch = useDispatch()
  const [index, setIndex] = useState(0)
  const [data, setData] = useState([])
  const [isLoadding, setLoadding] = useState(false)
  const navigation = useNavigation()
  const Token = useSelector(state => state?.userData?.data?.token)
  const userData = useSelector(state => state?.userData)
  const [outOfStock, setOutOfStock] = useState([])
  const productCount = useSelector(state => state?.AddToCart?.data)
  const [qty, setQnt] = useState(parseInt(data?.qty))
  const dispatch = useDispatch()



  // For Address
  const [addressCod, setAddressCode] = useState()
  const [billingAddress, setBillingAddress] = useState([])
  const [selectAddressList, setSelectAddress] = useState()



  const [ShhippingData, SetShippingdata] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [messages, setMessages] = useState()
  // const [showWallet, setShowWallet] = useState(false)
  const [shippingData, setShippingdata] = useState()
  const [paymentCode, setPaymentCode] = useState()
  const [storePickData, setStorePickUpData] = useState('')

  const [paymentScreenData, setPaymentScreen] = useState()
  const [selectPayment, setSelectPayment] = useState('')
  const [wallateAmount, setWallateAmount] = useState()
  const [coupanListData, setCoupanListData] = useState()
  const [coupanCode, setCoupanCode] = useState()
  const [actionCode, setActionCode] = useState()
  const [remove, setRemove] = useState(false)
  const [validationn, setValidation] = useState(false)

  const [extra, setEtrx] = useState()
  const [selectPayemrntMethod, setSelectPayemrntMethod] = useState()
  const [walletAmount, setWalletAmount] = useState()

  const [formData, setFormData] = useState({
    country: 'IN',
    first_name: 'John',
    last_name: 'Doe',
    address: '101 ABC Street',
    city: 'Kolkata',
    state: 'West Bengal',
    zip: '700001',
    phone_number: '9001010101',
    customerEmail: 'test@test.com',
    udf2: config.responseUrl,
    udf3: 'en',
    trackid: "000000682",
    tranid: '',
    currency: 'SAR',
    amount: '1.00',
    action: 1,
    tokenOperation: 'A',
    cardToken: '',
    maskCardNum: '',
    tokenizationType: 0,
    done: true
  });

  const billingAddressData = billingAddress.length > 0 ? billingAddress[0] : addressCod
  const name = userData?.data?.firstname + " " + userData?.data?.lastname

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

  const onPress = () => {
    if (index < 3) {
      if (index == 0) {
        setIndex(index + 1)
        RemoveCart()
      }
      if (index == 1) {
        if (!addressCod) {
          setShowModal(true)
          setMessages(lang == NUMBER.num1 ? "Please select address" : "الرجاء تحديد العنوان")
        } else {
          getShipingList()
          setIndex(index + 1)
        }
      }
      if (index == 2) {
        if (!shippingData) {
          setShowModal(true)
          setMessages(lang == NUMBER.num1 ? "Please select shipping method" : "الرجاء تحديد طريقة الشحن")
        } else {
          PlaceHolder1()
        }
      }
    } else {   
      if (!validationn) {
        setShowModal(true)
        setMessages(lang == NUMBER.num1 ? "Please select payment method!!!" : "الرجاء تحديد طريقة الدفع !!!")
      }else {
        PlaceHolder()
        setOutOfStock([])
        setData([])
      }


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
    if (index == 4) {
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
        getProductCount()
      } else {
        setLoadding(false)
      }
    } catch (error) {
      console.log("DELETE CART ITEMS :::::::::::::::::::: ", error)
      setLoadding(false)
    }
  }

  // remove out fo stock product from cart
  const RemoveCart = async (items) => {
    setLoadding(true)
    const formData = new FormData
    formData.append("token", Token)
    formData.append("item_id", outOfStock)
    try {
      const response = await DeleteCartItems(formData)
      if (response?.data?.status == NUMBER.num1) {
        setLoadding(false)
        // getData()
        // getData()
        // disPatch(addProduct(productNo - 1))
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
      },
      "custom": {
        "token": Token,
        "store_id": lang
      }
    }
    try {
      const response = await getPlaceHolder1(params)
      if (response?.status == 200) {
        setIndex(index + 1)
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
    setPaymentCode(cod)
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
  const getCoupanList = async () => {
    setLoadding(true)
    const formData = new FormData()
    formData.append("store_id", lang)
    formData.append("token", Token)
    try {
      const response = await getCoupan(formData)
      setCoupanListData(response?.data?.data?.coupenList)
      setLoadding(false)

    } catch (error) {
      console.log("COUPAN ERROR ::::::: ", error)
      setLoadding(false)

    }
  }

  // apply Coupan Api 
  const applyCoupan = async (coupanID, code) => {
    setLoadding(true)
    const formData = new FormData()
    formData.append("store_id", lang)
    formData.append("token", Token)
    formData.append("action", code)
    formData.append("coupen_code", coupanID)
    try {
      const response = await getActonCoupan(formData)
      if (response?.data?.status == 1) {
        setSelectPayment(response?.data?.data)
        remove ? setRemove(false) : setRemove(true)
      } else {
        SHOWTOTS(response?.data?.message)
        setLoadding(false)
      }
      setLoadding(false)
    } catch (error) {
      console.log("COUPAN UPADTE ERROR ::::::::::  ", error)
      setLoadding(false)
    }

  }

  const updateQnty = async (id, qty, n) => {
    setLoadding(true)
    const formData = new FormData()
    formData.append("store_id", lang)
    formData.append("item_id", id)
    formData.append("qty", qty)
    formData.append("token", Token)
    try {
      const res = await postUpdateCart(formData)
      if (res?.data?.status == NUMBER.num1) {
        setLoadding(false)
        getData()
        SHOWTOTS(res?.data?.message)
        n && disPatch(addProduct(productCount + 1))
        !n && disPatch(addProduct(productCount - 1))
        return true
      } else {
        setLoadding(false)
        SHOWTOTS(res?.data?.message)
        return false
      }
    } catch (error) {
      console.log("UPDATE QTY ERROR ::::::: ", error)
      setLoadding(false)

    }
  }

  const validation = (value , edata , WAmount) => {
   
    var validationTotal = 0
    // console.log("Valu :::::::::::::::::: " , {value : value  , selectPayemrntMethod : selectPayemrntMethod , edata:edata , walletAmount:wallateAmount})

    paymentScreenData?.total_segments?.map((items, index) => {
      if (items?.code == "grand_total") {
        validationTotal = items?.value
      }
    })

    if(edata == "walletsystem" && value == true) {
      setWalletAmount(WAmount)
    }
    if(edata == "walletsystem" && value == false) {
      setWalletAmount(0)
    }

    if (value) {
      if(edata == "walletsystem"){
        if(wallateAmount < validationTotal) {
          setValidation(false)
        } else{
          setValidation(true)
        }
      }
      if(edata != "walletsystem"){
        setValidation(true)
      }
    } else {
      setValidation(false)
    }
  }

  const PlaceHolder = async () => {
    setLoadding(true)
    var shoppingTotal = 0
    var subTotal = 0
    var grandTotal = 0
    const fromdata = new FormData()

    paymentScreenData?.total_segments?.map((items, index) => {
      if (items?.code == "grand_total") {
        grandTotal = items?.value
      }
      if (items?.code == 'subtotal') {
        subTotal = items?.value
      }
    })

    selectPayment?.total_segments?.map((items, index) => {
      if (items?.code == "grand_total") {
        grandTotal = items?.value
      }
      if (items?.code == 'subtotal') {
        subTotal = items?.value
      }
      if (items?.code == "shipping") {
        shoppingTotal = items?.value
      }

    })
    const params = {
      "paymentMethod": paymentCode ? paymentCode : "walletsystem",
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
        "store_id": lang,
        "email": userData?.data?.email,
        "name": name,
        "customer_id": userData?.data?.id,
        "subtotal": subTotal,
        "shipping": shoppingTotal,
        "grand_total": grandTotal,
        "storepickup_identifier": storePickData?.identifier ? storePickData?.identifier : '',
        "wallet_amount":walletAmount,
        "device_type": Platform.OS == 'ios' ? "react_ios" : "react_android",
        "device_version": 0.1
      }
    }
    try {
      const res = await PlaceeHolder2(params)
      if (res?.data?.status == NUMBER.num1) {
        const online_payment = res?.data?.data?.online_payment
        setLoadding(false)
        if (paymentCode == "magveg") {
          navigation.navigate(NAVIGATION.PaymentScreen, {
            request: {
              country: formData?.country,
              first_name: userData?.data?.firstname,
              last_name: userData?.data?.lastname,
              address: online_payment?.addresses,
              city: addressCod?.city,
              zip: online_payment?.postcode,
              phone_number: userData?.data?.mobile,
              customerEmail: online_payment?.email,
              udf2: formData.udf2,
              udf3: formData.udf3,
              trackid: online_payment?.order_id,
              tranid: formData?.tranid,
              currency: online_payment?.currency,
              amount: online_payment?.amount,
              action: online_payment?.action_code,
              tokenOperation: formData?.tokenOperation,
              cardToken: online_payment?.cardToken,
              maskCardNum: formData?.maskCardNum,
              tokenizationType: online_payment?.tokenizationType,
              done: true,
              responseId: res?.data?.data?.respon_id
            },
            callBack: onProcessPayment,
          });
          setIndex(0)
          setData([])
          disPatch(addProduct(0))
          const result = await ExpireToken(fromdata)
          setLoadding(false)
        } else {
          setLoadding(false)
          navigation.navigate(NAVIGATION.Done, {
            lang: lang,
            responseID: res?.data?.data?.respon_id,
            orderId: online_payment?.order_id
          })
          setIndex(0)
        }
      } else {
        setLoadding(false)
        console.log("PlaceOrder Inner error ::::::::: ", res?.data)
      }
    } catch (error) {
      console.log("Place Holder API ERROR ======> ", error)
      setLoadding(false)

    }
  }

  const onProcessPayment = (responseData) => {
    console.log("RESPONSE SCREEN DATA ::::::::::::::::", responseData)
    if (responseData.status == 'success') {
      navigation.navigate(NAVIGATION.ResponseScreen, {
        response: responseData.data,
      });
    } else {
      showMessage({ message: responseData.error, type: 'danger' });
      console.log("message ::::::::::::::::", { message: responseData.error, type: "danger" })
    }
  };

  const getProductCount = async () => {
    const result = await AsyncStorage.getItem(ASYNCSTORAGE.Langues);
    const fromData = new FormData()
    fromData.append("token", userData?.data?.token)
    fromData.append("store_id", result)
    try {
      if(userData?.data?.token) {
        const response = await CartListCount(fromData)
        if (response?.status == "200") {
          const count = parseInt(response?.data?.data?.items_qty)
          count ? dispatch(addProduct(count)) : dispatch(addProduct(0))
        } else {
          console.log("else respomnse :::::::::::::", response?.data)
          dispatch(addProduct(0))
        }
      } else{
        SHOWTOTS("TOKEN CAN-NOT GET")
        dispatch(addProduct(0))
      }
    } catch (error) {
      dispatch(addProduct(0))
      console.log("ERORR ::::::::::" , error)
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
    // showWallet,
    paymentScreenData,
    wallateAmount,
    coupanListData,
    coupanCode,
    remove,
    validationn,
    qty,
    setActionCode,
    setQnt,
    setShowModal,
    deleteProduct,
    setAddressCode,
    selectShipping,
    onPress,
    goBack,
    setLoadding,
    setEtrx,
    // setShowWallet,
    setShippingdata,
    setBillingAddress,
    setCoupanCode,
    getCoupanList,
    applyCoupan,
    updateQnty,
    setStorePickUpData,
    validation,
    selectPayment,
    setSelectPayment,
    PlaceHolder,
    setSelectPayemrntMethod,
    setWalletAmount,
    getProductCount
  }
}

export default useShoppingcart

