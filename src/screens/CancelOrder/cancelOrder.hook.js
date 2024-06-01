import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'

const useCancelOrderHook = () => {
    const lang = useSelector(state => state.lang.data)
    const lable = lang == NUMBER.num0 ? Ar : En
    const navigation = useNavigation()
    const [showBox, setShowBox] = useState(false)
    const [yes, setYes] = useState(false)
    const [no, setNo] = useState(false)
    const [resone, setResone] = useState()
    const [sIndex, setSindex] = useState()
    const data = [1, 2, 3, 4, 5, 6]
    const Product = [1, 2, 3]



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
        lable

    }
}
export default useCancelOrderHook

