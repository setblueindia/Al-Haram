import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NUMBER } from "../../constants/constants"
import { Ar, En } from "../../constants/localization"

const useSponserHook = () => {
    const lang = useSelector(state => state?.lang?.data)

    const [manageWallate, setManageWallate] = useState(false)
    const [addCustomer, setAddCustomer] = useState(false)
    const [isLoadding, setIsLodding] = useState(false)
    const [addCustomerToGroup, setAddCustomerToGroup] = useState(false)
    const [tranferAmount, setTranferAmount] = useState(false)
    const [loader , setloader] = useState(false)
    const [name, setName] = useState()
    const Str = lang == NUMBER.num0 ? Ar : En
    const navigation = useNavigation()

    const data = [
        {
            name: Str?.manageWallate
        },
        {
            name: Str?.addCustomer
        },
        {
            name: Str?.addCustomerToGroup
        },
        {
            name: Str?.tranferAmount
        },
    ]

    const menuBarOnPress = (items) => {
        setName(items)
    }
   
    useEffect(()=>{
        setName(Str.manageWallate)
    }, [])
    return {
        lang,
        navigation,
        data,
        manageWallate,
        addCustomer,
        addCustomerToGroup,
        tranferAmount,
        name,
        Str,
        loader,
        isLoadding,
        setIsLodding,
        setManageWallate,
        setAddCustomer,
        setAddCustomerToGroup,
        setTranferAmount,
        setName,
        menuBarOnPress,
        setloader

    }
}
export default useSponserHook

