import { useEffect, useState } from "react"
import { CheckOTP } from "../../api/axios.api"
import { useNavigation } from "@react-navigation/native"
import { NAVIGATION, NUMBER } from "../../constants/constants"
import { setUserData } from "../../utils/asyncStorage"
import { useDispatch, useSelector } from "react-redux"
import { addUserData } from "../../redux/Slices/UserData.slice"
import { Ar, En } from "../../constants/localization"
import OtpVerify from 'react-native-otp-verify';
import { Platform } from "react-native"

const useOPTHook = (props) => {
  const lang = useSelector(state => state.lang?.data)
  const [mainOTP, setMainOTP] = useState()
  const [loading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [showModal, setShowModal] = useState(false)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const language = NUMBER.num0 ? Ar : En
  const onPress = async () => {
    setLoading(true)
    const formData = new FormData();
    formData.append('mobilenumber', "+966" + props?.number);
    formData.append('otpcode', mainOTP);
    formData.append('otptype', "login");

    const response = await CheckOTP(formData)
    if (response?.data?.status == NUMBER.num1) {
      navigation.replace(NAVIGATION.TabScreen)
      setUserData(response?.data?.data)
      dispatch(addUserData(response?.data?.data))
      setLoading(false)

    } else {
      setLoading(false)
      setErrorText(response?.data?.message)
      setShowModal(true)



    }
    setLoading(false)

  }


  useEffect(()=>{
    if(mainOTP?.length == 4){
      onPress()
    }
  }, [mainOTP])


  return {
    setMainOTP,
    onPress,
    mainOTP,
    loading,
    errorText,
    showModal,
    setShowModal,
    language
  }
}

export default useOPTHook

