import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { NUMBER } from "../../constants/constants"

const useAddressHook = () => {
  const navigation = useNavigation()
  const lang = useSelector(state => state?.lang?.data)

  const data = lang == NUMBER.num0 ?
    {
      AddAddress:"اضف عنوان",
      FirstName: "الاسم الأول",
      LastName:"اسم العائلة",
      PhoneNumber:"رقم التليفون",
      Streetaddress: ".عنوان الشارع",
      Addressline1:"العنوان سطر 1",
      Addressline2 : "سطر العنوان 2",
      Pincode:"الرمز السري",
      StateProvince:"الولاية/المقاطعة",
      City:"مدينة",
      SaudiArabia:"المملكة العربية السعودية",
      Useasmydefaultbillingaddress:"استخدمه كعنوان إرسال الفواتير الافتراضي الخاص بي"
    } :
    {
      AddAddress:"Add Address",
      FirstName: "First Name",
      LastName:"Last  Name",
      PhoneNumber:"Phone Number",
      Streetaddress : "Street address",
      Addressline1:"Addressline 1",
      Addressline2 : "Addressline 2",
      Pincode:"Pincode",
      StateProvince:"State /Province",
      City:"City",
      SaudiArabia:"Saudi Arabia",
      Useasmydefaultbillingaddress:"Use as my default billing address"
    }

  return {
    navigation,
    lang,
    data
  }
}

export default useAddressHook

