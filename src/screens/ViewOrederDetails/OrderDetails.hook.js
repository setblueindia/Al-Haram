import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { NAVIGATION, NUMBER } from "../../constants/constants"
import { Ar, En } from "../../constants/localization"
import { getOrderView, postReOrder } from "../../api/axios.api"
import { useEffect, useState } from "react"
import { SHOWTOTS } from "../../utils/utils"


const useOrderDetaisHook = (props) => {
    const [isLoadding, setIsLoadding] = useState(false)
    const [orderDetailsList, setOrderDeatils] = useState()
    const navigation = useNavigation()
    const lang = useSelector(state => state?.lang?.data)
    const userData = useSelector(state => state?.userData?.data)
    const lable = lang == NUMBER.num0 ? Ar : En
    const OId = props?.route?.params?.orderID

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
            if (response?.data?.data) {

                SHOWTOTS(response?.data?.message)
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

    useEffect(() => {
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
        Reorder: "إعادة الترتيب",
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
        ReOrder
    }
}

export default useOrderDetaisHook

