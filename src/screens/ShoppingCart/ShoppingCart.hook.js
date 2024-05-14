import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATION, NUMBER } from '../../constants/constants'
import { useSelector } from 'react-redux'

const useShoppingcart = () => {
  const lang = useSelector(state => state.lang.data)
  const [index, setIndex] = useState(0)
  const navigation = useNavigation()

  const data = [1, 2, 3, 4]

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

  return {
    index,
    navigation,
    data,
    lang,
    shopinfCratData,
    onPress,
    goBack

  }
}

export default useShoppingcart

