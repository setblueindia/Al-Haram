import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { NUMBER } from "../../constants/constants"
import { Ar, En } from "../../constants/localization"

const useCustomerServiceHook = () => {
    const navigation = useNavigation()
    const lang = useSelector(state => state.lang.data)
    const Str = lang == NUMBER.num0 ? Ar : En

    const TelNUmber = lang == NUMBER.num1 ? "Tel : 920033093" : "920033093 : Tel"
    const Emaile = lang == NUMBER.num1 ? "Emaile : support@alharamstores.com" : "support@alharamstores.com : Emaile  "
    const VatNo = lang == NUMBER.num1 ? "Vat : 300054517800003" : "300054517800003 : Vat"
    const CRNumber = lang == NUMBER.num1 ? "CR : 4030138101" : "4030138101 : CR"
    const name = lang == NUMBER.num1 ? "Prince Mohammed Bin Abdulaziz St Jeddah Kingdom Of Saudi Arabia" : "شارع الأمير محمد بن عبد العزيز جدة المملكة العربية السعودية"
    return {
        navigation,
        lang,
        TelNUmber,
        Emaile,
        VatNo,
        CRNumber,
        name,
        Str
    }
}

export default useCustomerServiceHook

