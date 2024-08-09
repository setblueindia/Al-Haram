import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { NUMBER } from "../../constants/constants"
import { Ar, En } from "../../constants/localization"
import { customerSuppot } from "../../api/axios.api"
import { useEffect, useState } from "react"
import { SHOWTOTS } from "../../utils/utils"

const useCustomerServiceHook = () => {
    const navigation = useNavigation()
    const [data , setData] = useState()
    const [isLoadding , setIsLoadding] = useState()
    const lang = useSelector(state => state.lang.data)
    const Str = lang == NUMBER.num0 ? Ar : En
    
    const getData = async () => {
        setIsLoadding(true)
        const data = `
        {
         customerServiceForMobileApp(store_id : ${lang}){
        status
        address
        tel
        email
        vat
        cr
          }
       }
   `
        try {
            const res = await customerSuppot(data)
            if(res) {
                setData(res?.data?.data?.customerServiceForMobileApp)
                setIsLoadding(false)
            }else{
                setIsLoadding(false)
            }
        } catch (error) {
            console.log("GET CSTOMER SERVICIS ERROR :::::::", error)
            setIsLoadding(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        navigation,
        lang,
        Str,
        data,
        isLoadding
    }
}

export default useCustomerServiceHook

