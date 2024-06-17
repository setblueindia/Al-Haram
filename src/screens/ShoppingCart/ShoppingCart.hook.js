import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATION, NUMBER } from '../../constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { CartList, DeleteCartItems } from '../../api/axios.api'
import { addProduct } from '../../redux/Slices/AddToCartSlice'

const useShoppingcart = () => {
  const lang = useSelector(state => state?.lang?.data)
  const productNo = useSelector(state => state?.AddToCart?.data)
  const disPatch =  useDispatch()
  const [index, setIndex] = useState(0)
  const [data, setData] = useState([])
  const [isLoadding, setLoadding] = useState(false)
  const navigation = useNavigation()
  const Token = useSelector(state => state?.userData?.data?.token)

  console.log("============> ", productNo)

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

  const onPress = () => {
    if (index < 2) {
      setIndex(index + 1)
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
        setData(response?.data?.data?.items)
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
      }else{
        setLoadding(false)
      }

    } catch (error) {
      console.log("DELETE CART ITEMS :::::::::::::::::::: ", error)
      setLoadding(false)
    }
  }

  return {
    index,
    navigation,
    data,
    lang,
    shopinfCratData,
    onPress,
    goBack,
    isLoadding,
    deleteProduct

  }
}

export default useShoppingcart

