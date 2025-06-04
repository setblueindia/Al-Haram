import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { NAVIGATION, NUMBER } from "../../constants/constants"
import { Ar, En } from "../../constants/localization"
import { ProductlistCount, getOrderView, getTraberckingNum, postReOrder } from "../../api/axios.api"
import { useEffect, useState } from "react"
import { SHOWTOTS } from "../../utils/utils"
import { addProduct } from "../../redux/Slices/AddToCartSlice"

const useOrderDetaisHook = (props) => {
  const [isLoadding, setIsLoadding] = useState(false)
  const [orderDetailsList, setOrderDeatils] = useState()
  const [review, setReview] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState([])
  const navigation = useNavigation()
  const lang = useSelector(state => state?.lang?.data)
  const userData = useSelector(state => state?.userData?.data)
  const lable = lang == NUMBER.num0 ? Ar : En
  const OId = props?.route?.params?.orderID
  const dispatch = useDispatch()

  const orderDetails = async () => {
    setIsLoadding(true)
    const formData = new FormData()
    formData.append("order_id", OId)
    formData.append("store_id", lang)
    formData.append("view_option", "ordered")
    try {
      const res = await getOrderView(formData)
      if (res?.data?.status == 1) {
        setOrderDeatils(res?.data?.data)
        setIsLoadding(false)
      } else {
        console.log("INNER ORDER DETAILS VIEW ERROR :::::::: ", res?.data)
        setIsLoadding(false)
      }

    } catch (error) {
      console.log("ORDER DETAILS VIEW ERROR :::::::: ", error)
      setIsLoadding(false)
    }
  }

  const ReOrder = async () => {
    setIsLoadding(true)
    const fromData = new FormData()
    fromData.append("store_id", lang)
    fromData.append("token", userData?.token)
    fromData.append("order_id", OId)
    try {
      const response = await postReOrder(fromData)
      if (response?.data?.status == "1") {
        SHOWTOTS(response?.data?.message)
        PoductCount()
        // navigation.navigate(NAVIGATION.DrawerNavigation)
        navigation.navigate(NAVIGATION.Shoppingcart)
        setIsLoadding(false)
      } else {
        console.log("RE ORDER ERROR ::::::::::: ", response?.data?.message)
        SHOWTOTS(response?.data?.message)
        setIsLoadding(false)
      }
    } catch (error) {
      console.log("RE ORDER ERROR ::::::::::: ", error)
      setIsLoadding(false)
    }
  }

  const PoductCount = async () => {
    const fromdata = new FormData()
    const resultt = await ExpireToken(fromdata, lang)
    if (resultt?.data) {
      const countData = `
      query {
        getQuoteItemCount(quote_id: ${resultt?.data})
      }
      `
      try {
        if (userData?.token) {
          const result = await ProductlistCount(countData, lang)
          dispatch(addProduct(result?.data?.data?.getQuoteItemCount))
          // const arrOFItems = result?.data?.data?.customerCart?.items
          // const totalQuantity = arrOFItems?.length > 0 && arrOFItems?.reduce((sum, item) => sum + item?.quantity, 0);

          // console.log("totalQuantity ::::::::::::::::::::", totalQuantity)
          // totalQuantity > 0 ? dispatch(addProduct(totalQuantity)) : dispatch(addProduct(0))
        } else {
          dispatch(addProduct(0))
        }
      } catch (error) {
        console.log("GET PRODUCT LIST ERROR ::::::::::::: ", error)
        dispatch(addProduct(0))
      }
    }

  }

  const getTrackingNumber = async () => {
    setIsLoadding(true)
    const query = `
    {
    getShipmentTrackingByOrderId(order_id : ${OId}){
        success
        message
        title
        data{
            shipment_id
            carrier_code
            title
            track_number
                 track_url
            created_at
        }     
    }
}
    `
    try {
      const response = await getTraberckingNum(query, lang)
      if (response?.data?.data?.getShipmentTrackingByOrderId?.success) {
        setTrackingNumber(response?.data?.data?.getShipmentTrackingByOrderId)
        setIsLoadding(false)
      } else {
        setIsLoadding(false)
      }
    } catch (error) {
      console.log("GET TRACKING NUMBER ERROR ::::::::::: ", error)
      setIsLoadding(false)
    }
  }

  useEffect(() => {
    getTrackingNumber()
    orderDetails()
  }, [])

  const data = lang == NUMBER.num1 ? {
    oderId: "#000000680",
    Compalated: "completed",
    date: "Order Date : March 27, 2024",
    PrintOrder: "Print Order",
    Reorder: "Reorder",
    ItemsOrdered: "Items Ordered",
    TESTNavyBlue: "TEST-Navy-Blue",
    TESTNBlue: "TEST-N-Blue",
    Product: "Ordered 1 | Shipped 1 \n Refunded1",
    Riyadhbuilding: "Riyadh building",
    address2: "Riyadh, Central and Northern Regions, 20001 Saudi Arabia",
    TNo: "T : +966567876451",
    shipping1: "Shipping - Overnight (Parcel)",
    shipping2: "Estimated Shipment Delivery",
    shippingDate: "Date : 28 Mar - 04 Apr",
    AramexCOD: "Aramex COD"
  } : {
    oderId: "#000000680",
    Compalated: "مكتمل",
    date: "تاريخ الطلب : 27 مارس 2024",
    PrintOrder: "طلب طباعة",
    Reorder: "إعادة الطلب",
    ItemsOrdered: "العناصر المطلوبة",
    TESTNavyBlue: "اختبار-البحرية-الأزرق",
    TESTNBlue: "اختبار-N-الأزرق",
    Product: "أمرت 1 | تم الشحن 1 \n مسترد 1",
    Riyadhbuilding: "عمارة الرياض",
    address2: "الرياض، المنطقة الوسطى والشمالية، 20001 المملكة العربية السعودية",
    TNo: "+966567876451 : T",
    shipping1: "الشحن - بين عشية وضحاها (الطرود)",
    shipping2: "تسليم الشحنة المقدرة",
    shippingDate: "التاريخ : 28 مارس - 04 أبريل",
    AramexCOD: "أرامكس COD"
  }
  return {
    navigation,
    lang,
    data,
    lable,
    isLoadding,
    orderDetailsList,
    OId,
    trackingNumber,
    ReOrder,
    review, setReview
  }
}

export default useOrderDetaisHook

