import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { NAVIGATION, NUMBER } from "../../constants/constants"
import { Ar, En } from "../../constants/localization"


const useAddressBookHook = () => {

    const navigation = useNavigation()
    const lang = useSelector(state => state.lang.data)
    
    const Str = lang == NUMBER.num0 ? Ar :En

    const data = [
        {
            name : lang == NUMBER.num1 ? "John Deo" : "جون ديو",
            address : lang == NUMBER.num1 ? "Ring Rd, Maan Darwaja, Aanjada Nagar, Athwa Gate, Surat, Gujarat 395002" :"الطريق الدائري، معان درواجا، أنجادا نجار، بوابة أثوا، سورات، جوجارات 395002",
            number : "+97112-345-6789"

        },
        {
            name : lang == NUMBER.num1 ? "John Deo" : "جون ديو",
            address : lang == NUMBER.num1 ? "Ring Rd, Maan Darwaja, Aanjada Nagar, Athwa Gate, Surat, Gujarat 395002" :"الطريق الدائري، معان درواجا، أنجادا نجار، بوابة أثوا، سورات، جوجارات 395002",
            number : "+97112-345-6789"
        },
        {
            name : lang == NUMBER.num1 ? "John Deo" : "جون ديو",
            address : lang == NUMBER.num1 ? "Ring Rd, Maan Darwaja, Aanjada Nagar, Athwa Gate, Surat, Gujarat 395002" :"الطريق الدائري، معان درواجا، أنجادا نجار، بوابة أثوا، سورات، جوجارات 395002",
            number : "+97112-345-6789"
        },
        {
            name : lang == NUMBER.num1 ? "John Deo" : "جون ديو",
            address : lang == NUMBER.num1 ? "Ring Rd, Maan Darwaja, Aanjada Nagar, Athwa Gate, Surat, Gujarat 395002" :"الطريق الدائري، معان درواجا، أنجادا نجار، بوابة أثوا، سورات، جوجارات 395002",
            number : "+97112-345-6789"
        },
    ]

    const addAddress = () =>{
        navigation.navigate(NAVIGATION.addaddress)
    }

    return{
        data,
        navigation,
        lang,
        addAddress,
        Str
    }
}

export default useAddressBookHook

