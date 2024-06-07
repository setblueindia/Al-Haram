import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { NAVIGATION, NUMBER } from "../../constants/constants"
import { Ar, En } from "../../constants/localization"
import { useEffect, useState } from "react"
import { AddressList } from "../../api/axios.api"


const useAddressBookHook = () => {
    const lang = useSelector(state => state.lang.data)
    const userData = useSelector(state => state.userData.data)
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false)
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
    }, [navigation])


    const addAddress = () => {
        navigation.navigate(NAVIGATION.addaddress)
    }
    const getData = async () => {
        setIsLoading(true)
        const formData = new FormData
        formData.append("customer_id", userData?.id)
        formData.append("store_id", lang)
        try {
            const res = await AddressList(formData)
            if (res?.data?.status == NUMBER.num1) {
                setData(res?.data?.data)
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }

        } catch (error) {
            console.log("ADRESS-LIST ERROR :::::::::::::::::::: ", error)
            setIsLoading(false)
        }
    }
    return {
        data,
        navigation,
        lang,
        addAddress,
        Str,
        isLoading
    }
}

export default useAddressBookHook

