import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATION, NUMBER } from '../../constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { CartList, DeleteCartItems, getShippingListAxios, getStorePickupMethod } from '../../api/axios.api'
import { addProduct } from '../../redux/Slices/AddToCartSlice'
import { ShippingList } from '../../constants/axios.url'
import { useSharedValue } from 'react-native-reanimated'

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
  const [addressCod, setAddressCode] = useState()
  const [selectAddressList , setSelectAddress] = useState()
  const [ShhippingData , SetShippingdata] = useState([])
  const [showModal , setShowModal] = useState(false)
  const [messages , setMessages] = useState()
  const [showWallet , setShowWallet] = useState(false)

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
  }, [])
  // console.log("index =======> ", index)
  const onPress = () => {
    if (index < 3) {
      if(index == 0) {
        setIndex(index + 1) 
      }
      if(index == 1 &&  !addressCod) {
        setShowModal(true)
        setMessages("Please select address")
      }else{
        getShipingList()
        setIndex(index + 1)
      }
      if(index == 2){
        setIndex(index + 1) 
      }
    } else {
      navigation.navigate(NAVIGATION.Done, { lang: lang })
    }
  }
  const goBack = () => {
    index > 0 && setIndex(index - 1)
  }
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
      console.log("CART LIST ERROR ::::::::::::::::::::::: ", error)
    }
  }

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

  const getShipingList = async () => {
    setLoadding(true)
    const formData = new FormData()
    formData.append("token", Token)
    formData.append("store_id", lang)
    formData.append("addressId", addressCod?.id)
    try {
      const res = await getShippingListAxios(formData)
      console.log("Response :::::::::::::::::: ", res?.data?.data)
      SetShippingdata(res?.data?.data)
      setLoadding(false)


    } catch (error) {
      console.log("GET SHIPPING LIST ERROR :::: ", error)
      setLoadding(false)
    }

  }

  const selectShipping = async () =>{
    setLoadding(true)
    const formData = new FormData()
    formData.append("store_id" , lang)
   try {
    const response = await getStorePickupMethod(formData)
    if(response?.data?.status == NUMBER.num1) {
      setLoadding(false)
      setSelectAddress(response?.data?.data)
      console.log("=============> ", response?.data?.status)
    }else{
      console.log("ENNER SELECT LIST ERROR :::::: ", error)
    }
  

   } catch (error) {
    console.log("GET STORE SHIPPING ERROR :::::::::::::: " , error)
    setLoadding(false)

   }
}

  return {
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
    setShowModal,
    deleteProduct,
    setAddressCode,
    selectShipping,
    onPress,
    goBack,
    setLoadding,
    setShowWallet
  }
}

export default useShoppingcart

