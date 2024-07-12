import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { NAVIGATION, NUMBER } from "../../constants/constants"
import { useState } from "react"
import { AddressList, CityList, StateList } from "../../api/axios.api"
import { SHOWTOTS } from "../../utils/utils"
import { Ar, En } from "../../constants/localization"

const useAddressHook = (props) => {
  const esiteData = props?.route?.params?.editeData
  const setReload = props.route.params.setReload
  const navigation = useNavigation()
  const lang = useSelector(state => state?.lang?.data)
  const userData = useSelector(state => state?.userData?.data)
  const lable = lang == NUMBER.num0 ? Ar : En
  const [on, setOn] = useState(false)
  const [firstName, setFirstName] = useState(esiteData?.firstname ? esiteData?.firstname : '')
  const [lastName, setlastname] = useState(esiteData?.lastname ? esiteData?.lastname : '')
  const [mNumaber, setMNumber] = useState(esiteData?.telephone ? esiteData?.telephone : '')
  const [address1, serAddress1] = useState(esiteData?.address1 ? esiteData?.address1 : '')
  const [address2, setAddress2] = useState(esiteData?.address2 ? esiteData?.address2 : '')
  const [address3, setAddress3] = useState(esiteData?.address3 ? esiteData?.address3 : '')
  const [pinCode, setPinCode] = useState("20001")
  const [isLoading, setIsLoading] = useState('')
  const [city, setCity] = useState(esiteData?.city ? esiteData?.city : '')
  const [state, setStae] = useState(esiteData?.region_name ? esiteData?.region_name : "")
  const [citydata, setCitydata] = useState([])
  const [stateCode, setStaeCode] = useState(esiteData?.region_id ? esiteData?.region_id : "")
  const [billing, setBilling] = useState(esiteData?.default_billing ? esiteData?.default_billing : false)
  const [shopping, setShopping] = useState(esiteData?.default_shipping ? esiteData?.default_shipping : false)
  const [popTex, setPopTex] = useState("")
  const getData = props?.route?.params?.getData
 
  const gwtStateData = async () => {
    setIsLoading(true)
    const formData = new FormData
    formData.append("country_code", "sa")
    formData.append("store_id", lang)
    try {
      const rep = await StateList(formData)
      if (rep?.data?.status == NUMBER.num1) {
        setCitydata(rep?.data?.data)
        setOn(true)
        setIsLoading(false)
        setPopTex("State/Province")
      } else {
        setIsLoading(false)
        SHOWTOTS(ep?.data?.message)
      }

    } catch (error) {
      console.log("GET STATE DATA ERROR :::::::::::::::: ", error)
      setIsLoading(false)
    }
  }

  const getCityData = async () => {
    setIsLoading(true)
    !stateCode && SHOWTOTS("FIRST SELECT STATE")
    const formData = new FormData
    formData.append("state_code", stateCode)
    formData.append("store_id", lang)
    try {
      const rep = await CityList(formData)
      if (rep?.data?.status == NUMBER.num1) {
        setCitydata(rep?.data?.data)
        setOn(true)
        setIsLoading(false)
        setPopTex("City")
        setIsLoading(false)
      } else {
        setIsLoading(false)
        SHOWTOTS(ep?.data?.message)
      }

    } catch (error) {
      console.log("GET CITY DATA ERROR :::::::::::::::: ", error)
      setIsLoading(false)
    }
  }

  const addAddress = async () => {
    setIsLoading(true)
    if (!firstName) {
      SHOWTOTS(lable?.Enterfirstname)
      setIsLoading(false)
    } else if (!lastName) {
      SHOWTOTS(lable?.Enterlastname)
      setIsLoading(false)
    } else if (!mNumaber) {
      SHOWTOTS(lable?.Entermobilenumber)
      setIsLoading(false)
    } else if (!address1) {
      SHOWTOTS(lable?.enteraddress1)
      setIsLoading(false)
    } else if (!address2) {
      SHOWTOTS(lable?.enteraddress2)
      setIsLoading(false)
    } else if (!address3) {
      SHOWTOTS(lable?.enteraddress3)
      setIsLoading(false)
    } else if (!address1) {
      SHOWTOTS(lable?.enteraddress1)
      setIsLoading(false)
    } else if (!pinCode) {
      SHOWTOTS(lable?.Enterpincode)
      setIsLoading(false)
    } else {

      try {
        const formData = new FormData
        formData.append("address_id" , esiteData?.id)
        formData.append("customer_id", userData?.id)
        formData.append("firstname", firstName)
        formData.append("lastname", lastName)
        formData.append("country_id", "SA")
        formData.append("region", stateCode)
        formData.append("city", city)
        formData.append("address1", address1)
        formData.append("address2", address2)
        formData.append("address3", address3)
        formData.append("postcode", "20001")
        formData.append("telephone", mNumaber)
        formData.append("set_is_default_billing", billing ? 1 : 0)
        formData.append("set_is_default_shipping", shopping ? 1 : 0)
        formData.append("store_id", lang)
        const response = await AddressList(formData)
        if (response?.data?.status) {
          navigation.navigate(props.route.params.setLoadding ? navigation.goBack() : NAVIGATION.AddressBookScreen)
          getData()
          SHOWTOTS(response?.data?.message)
          setReload(true)
          setIsLoading(false)
        } else {
          SHOWTOTS(response?.data?.message)
          setIsLoading(false)
        }
      } catch (error) {
        console.log("ADD ADDRESS ERROR ::::::::::::::::", error)
        setIsLoading(false)
      }
    }
  }


  const data = lang == NUMBER.num0 ?
    {
      AddAddress: "اضف عنوان",
      FirstName: "الاسم الأول",
      LastName: "اسم العائلة",
      PhoneNumber: "رقم التليفون",
      Streetaddress: ".عنوان الشارع",
      Addressline1: "العنوان سطر 1",
      Addressline2: "سطر العنوان 2",
      Pincode: "الرمز السري",
      StateProvince: "الولاية/المقاطعة",
      City: "مدينة",
      SaudiArabia: "المملكة العربية السعودية",
      Useasmydefaultbillingaddress: "استخدمه كعنوان إرسال الفواتير الافتراضي الخاص بي",
      UseasmydefaultShippingaddress: "استخدمه كعنوان الشحن الافتراضي الخاص بي"
    } :
    {
      AddAddress: "Add Address",
      FirstName: "First Name",
      LastName: "Last  Name",
      PhoneNumber: "Phone Number",
      Streetaddress: "Street address",
      Addressline1: "Addressline 1",
      Addressline2: "Addressline 2",
      Pincode: "Pincode",
      StateProvince: "State /Province",
      City: "City",
      SaudiArabia: "Saudi Arabia",
      Useasmydefaultbillingaddress: "Use as my default billing address",
      UseasmydefaultShippingaddress: "Use as my default Shipping address",

    }

  return {
    navigation,
    lang,
    data,
    firstName,
    billing,
    shopping,
    setFirstName,
    setOn,
    getCityData,
    citydata,
    on,
    city,
    setStae,
    state,
    isLoading,
    popTex,
    firstName,
    lastName,
    mNumaber,
    address1,
    address2,
    address3,
    pinCode,
    city,
    state,
    setStaeCode,
    gwtStateData,
    setCity,
    setlastname,
    setMNumber,
    serAddress1,
    setAddress2,
    setAddress3,
    setPinCode,
    setBilling,
    setShopping,
    addAddress
  }
}

export default useAddressHook

