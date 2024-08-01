import { useDispatch, useSelector } from "react-redux"
import { NUMBER } from "../../constants/constants"
import { Ar, En } from "../../constants/localization"
import { useState } from "react"
import { SHOWTOTS, emaileRegxp, passwordRegxp } from "../../utils/utils"
import { UpdateProfile } from "../../api/axios.api"
import { addUserData } from "../../redux/Slices/UserData.slice"
import { setUserData } from "../../utils/asyncStorage"


const useEditeHook = () => {

  const lang = useSelector(state => state?.lang?.data)
  const userData = useSelector(state => state.userData)
  const [editeProfile, setWithEmail] = useState(true)
  const [fName, setFname] = useState()
  const [lName, setLname] = useState()
  const [email, setemail] = useState()
  const [number, setNumber] = useState()
  const [modalShow, setModalShow] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [exampal, setExample] = useState('')
  const [loadding, setLoadding] = useState(false)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState('')
  const [confromPassword, setConfromPassword] = useState('')
  const langues = lang == NUMBER.num0 ? Ar : En
  const dispatch = useDispatch()

  const data = {
    email: userData?.data?.email,
    mobile: userData?.data?.mobile,
    id: userData?.data?.id,
    firstname: fName,
    lastname: lName,
    token: userData?.data?.token,
    group_id: userData?.data?.group_id,
    addresses: userData?.data?.addresses,
    created_at: userData?.data?.created_at,
    created_in: userData?.data?.created_in,
    custom_attributes: userData?.data?.custom_attributes,
    extension_attributes: userData?.data?.extension_attributes,
    quote_id: userData?.data?.quote_id,
    updated_at: userData?.data?.updated_at
  }

  const customerID = userData?.data?.id
  const onPress = async () => {
    setLoadding(true)
    const formDate = new FormData()
    fName && formDate.append("firstname", fName)
    lName && formDate.append("lastname", lName)
    formDate.append("email", userData?.data?.email)
    number && formDate.append("mobile", "+966" + number)
    formDate.append("store_id", lang)
    formDate.append("customer_id", customerID)
    try {
      const rep = await UpdateProfile(formDate)
      console.log("Response :::::::; " , rep?.data)
      if (rep?.data?.status) {
        setModalShow(true)
        SHOWTOTS(rep?.data?.message)
        setUserData(data)
        dispatch(addUserData(data))
        setLoadding(false)
      } else {
        setLoadding(false)
        SHOWTOTS(rep?.data?.message)
      }
    } catch (error) {
      console.log("=======> ", error)
      setLoadding(false)
    }
  }


  const Update = () => {
    if (!fName) {
      setModalShow(true)
      setErrorText(langues?.Enterfirstname)
    }
    else if (!lName) {
      setModalShow(true)
      setErrorText(langues?.Enterlastname)
    }
    else if (email) {
      setErrorText(langues?.Enteremailaddress)
      setModalShow(true)
    }
    else if (email && !emaileRegxp.test(email)) {
      setModalShow(true)
      setErrorText(langues?.Invalidemailaddress)
    }
    else if (number || number?.length > 9 || number?.length < 9) {
      setModalShow(true)
      setErrorText(langues?.Invalidnumber)
      setExample(langues?.Numbercontainsmustbe9digits)
    }
    else {
      onPress()
      setExample("")
    }

  }

  const onPressUpate = async () => {
    setLoadding(true)
    const formDate = new FormData()
    formDate.append("password", oldPassword)
    formDate.append("new_password", newPassword)
    formDate.append("store_id", lang)
    formDate.append("customer_id", customerID)
    try {
      const rep = await UpdateProfile(formDate)
      if (rep?.data == undefined) {
        setLoadding(false)
        // setModalShow(true)
        SHOWTOTS(lang == NUMBER.num1 ? "The password doesn't match this account. Verify the password and try again." : "كلمة المرور لا تتطابق مع هذا الحساب. تحقق من كلمة المرور وحاول مرة أخرى.")
      } else {
        // setModalShow(true)
        SHOWTOTS(rep?.data?.message)
        setLoadding(false)
      }
    } catch (error) {
      console.log("Response Err0r ===========> ", error)
      setLoadding(false)
    }
  }

  const updatePassword = () => {
    if (!oldPassword) {
      setErrorText(langues?.Enterpassword)
      setModalShow(true)
    }
    else if (!passwordRegxp.test(newPassword)) {
      setModalShow(true)
      setErrorText(langues?.Invalidpassword)
      setExample(langues?.EXPassword)

    }
    else if (newPassword !== confromPassword) {
      setModalShow(true)
      setErrorText(langues?.Passwordandconfirmpasswordmismatch)
      setExample("")
    } else {
      onPressUpate()
    }
  }


  return {
    fName,
    lName,
    email,
    number,
    modalShow,
    errorText,
    loadding,
    oldPassword,
    newPassword,
    setOldPassword,
    setNewPassword,
    setModalShow,
    setErrorText,
    setFname,
    setLname,
    setemail,
    setNumber,
    Update,
    updatePassword,
    setConfromPassword,
    confromPassword,
    langues,
    setWithEmail,
    editeProfile,
    exampal

  }
}

export default useEditeHook

