import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { NAVIGATION, NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'
import { postReOrder, postRefundOrder } from '../../api/axios.api'
import { SHOWTOTS } from '../../utils/utils'

const useCancelOrderHook = (props) => {
    const lang = useSelector(state => state.lang.data)
    const token = useSelector(state => state.userData.data?.token)
    const lable = lang == NUMBER.num0 ? Ar : En
    const navigation = useNavigation()
    const [showBox, setShowBox] = useState(false)
    const [yes, setYes] = useState(true)
    const [no, setNo] = useState(false)
    const [resone, setResone] = useState()
    const [sIndex, setSindex] = useState()
    const data = [1, 2, 3, 4, 5, 6]
    const Product = [1, 2, 3]
    const orderID = props?.route?.params?.orderID
    const [openProduct, setOpenProduct] = useState(1)
    const [selectList, setSelectLis] = useState(lang == NUMBER.num1 ? "Product Damaged" : "المنتج تالف")
    const [customResone, setCustomResone] = useState()
    const [isLoadding, setIsLoadding] = useState(false)


    const resoneList = {
        data: lang == NUMBER.num1 ?
            [
                "Product Damaged",
                "Color/Size Mismatch",
                "Not satisfied with product quality"
            ]
            : [
                "المنتج تالف",
                "عدم تطابق اللون \ المقاس",
                "غير راض عن جودة المنتج"
            ]
    }

    const refundOrderFunction = async () => {
        setIsLoadding(true)
        const fromData = new FormData()
        fromData.append("bss-option", selectList)
        fromData.append("bss-radio", openProduct)
        fromData.append("bss-refund-reason", customResone)
        fromData.append("bss-refund-order-id", orderID)
        fromData.append("store_id" , lang)
        fromData.append("token" , token)
        try {
            const rep = await postRefundOrder(fromData)
            SHOWTOTS(rep?.data?.message)
            navigation.navigate(NAVIGATION.MyOrderSscreen)
            setIsLoadding(false)
        } catch (error) {
            setIsLoadding(false)
            console.log("RESFUND ORDER API ::::::::::::: ", error)
        }
    }

    return {
        navigation,
        showBox,
        setShowBox,
        resone,
        setResone,
        data,
        no,
        yes,
        setYes,
        setNo,
        Product,
        setSindex,
        sIndex,
        lang,
        lable,
        resoneList,
        selectList,
        isLoadding,
        refundOrderFunction,
        setOpenProduct,
        setSelectLis,
        setCustomResone

    }
}
export default useCancelOrderHook

