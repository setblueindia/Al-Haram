import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { NAVIGATION, NUMBER } from "../../constants/constants"
import { Ar, En } from "../../constants/localization"
import { useEffect, useState } from "react"
import { AddressList, DeleteAddress } from "../../api/axios.api"
import { SHOWTOTS } from "../../utils/utils"


const useAddressBookHook = (setAddressCode , setLoadding , setBillingAddress) => {
    const lang = useSelector(state => state.lang.data)
    const userData = useSelector(state => state.userData.data)
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false)
    const [aindex , setAindex] = useState() 
    const [resload , setReload] = useState(false)
    const [deletePopp , setDetetePopp] = useState(false)
    const [deleteId , setdeteteId] = useState() 
    const Str = lang == NUMBER.num0 ? Ar : En
    const [data, setData] = useState(
        [
            // {
            //     name: lang == NUMBER.num1 ? "John Deo" : "جون ديو",
            //     address: lang == NUMBER.num1 ? "Ring Rd, Maan Darwaja, Aanjada Nagar, Athwa Gate, Surat, Gujarat 395002" : "الطريق الدائري، معان درواجا، أنجادا نجار، بوابة أثوا، سورات، جوجارات 395002",
            //     number: "+97112-345-6789"

            // },
            // {
            //     name: lang == NUMBER.num1 ? "John Deo" : "جون ديو",
            //     address: lang == NUMBER.num1 ? "Ring Rd, Maan Darwaja, Aanjada Nagar, Athwa Gate, Surat, Gujarat 395002" : "الطريق الدائري، معان درواجا، أنجادا نجار، بوابة أثوا، سورات، جوجارات 395002",
            //     number: "+97112-345-6789"
            // },
            // {
            //     name: lang == NUMBER.num1 ? "John Deo" : "جون ديو",
            //     address: lang == NUMBER.num1 ? "Ring Rd, Maan Darwaja, Aanjada Nagar, Athwa Gate, Surat, Gujarat 395002" : "الطريق الدائري، معان درواجا، أنجادا نجار، بوابة أثوا، سورات، جوجارات 395002",
            //     number: "+97112-345-6789"
            // },
            // {
            //     name: lang == NUMBER.num1 ? "John Deo" : "جون ديو",
            //     address: lang == NUMBER.num1 ? "Ring Rd, Maan Darwaja, Aanjada Nagar, Athwa Gate, Surat, Gujarat 395002" : "الطريق الدائري، معان درواجا، أنجادا نجار، بوابة أثوا، سورات، جوجارات 395002",
            //     number: "+97112-345-6789"
            // },
        ]
    )
    useEffect(() => {
        getData()
    }, [navigation , resload])

    const addAddress = () => {
        navigation.navigate(NAVIGATION.addaddress , {setLoadding : setLoadding , setReload : setReload , getData:getData})
    }
    const getData = async () => {
        !setLoadding && setIsLoading(true)
        setLoadding && setLoadding(true)
        const formData = new FormData
        formData.append("customer_id", userData?.id)
        formData.append("store_id", lang)
        try {
            const res = await AddressList(formData)
         
            if (res?.data?.status == NUMBER.num1) {
                const temp = [];
                setData(res?.data?.data)
                res?.data?.data.map((items , index)=>{
                    if(items?.default_billing){
                        temp.push(items)
                    }
                })
                setLoadding && setBillingAddress(temp)
                setIsLoading(false)
                setLoadding &&   setLoadding(false)
            } else {
                setIsLoading(false)
            }
        } catch (error) {
            console.log("ADRESS-LIST ERROR :::::::::::::::::::: ", error)
            setIsLoading(false)
            setLoadding &&  setLoadding(false)
        }
    }
    const deleteAdress = async (items) => {
        setIsLoading(true)
        const formData = new FormData
        formData.append("customer_id", userData?.id)
        formData.append("store_id", lang)
        formData.append("address_id", deleteId)
        try {
            const response = await DeleteAddress(formData)
            if (response?.data?.status == NUMBER.num1) {
                SHOWTOTS(response?.data?.message)
                getData()
            } else {
                setIsLoading(false)
                SHOWTOTS(response?.data?.message)
            }
        } catch (error) {
            console.log("DELETE ADDRESS :::::::::::: ", error)
            setIsLoading(false)
        }
    }
    return {
        data,
        navigation,
        lang,
        addAddress,
        Str,
        isLoading,
        aindex,
        setAindex,
        deleteAdress,
        getData,
        setDetetePopp,
        deletePopp,
        setdeteteId
    }
}

export default useAddressBookHook

