import { useSelector } from "react-redux"
import { NUMBER } from "../../constants/constants"
import { Ar, En } from "../../constants/localization"
import { useState } from "react"
import { ForgetPassword } from "../../api/axios.api"
import { SHOWTOTS } from "../../utils/utils"

const useForgetPassword = () => {
  const [email, setEmail] = useState()
  const lang = useSelector(state => state?.lang?.data)
  const [isLoading, setIsLoanding] = useState()
  const [showModal, setShowModal] = useState(false)
  const [msg, setMsg] = useState()
  const [oppsHide, setOppsHide] = useState(false)
  const lable = lang == NUMBER.num0 ? Ar : En


  const forgetPassword = async () => {
    if(email) {
      setIsLoanding(true)
    const formData = new FormData()
    formData.append("email", email)
    formData.append("store_id", lang)
    try {
      const res = await ForgetPassword(formData)
      if (res?.data?.status == NUMBER.num1) {
        setOppsHide(true)
        setMsg(res.data?.message)
        setShowModal(true)
        setIsLoanding(false)
      } else {
        setIsLoanding(false),
          setMsg(res?.data?.message)
        setShowModal(true)
        setOppsHide(false)
      }
    } catch (error) {
      console.log("FORGET-PASSWORD ERROR ::::::::::: ", error)
      setOppsHide(false)
    }
    }else{
      SHOWTOTS(lable?.Enteremailaddress)
    }
    
  }




  return {
    lang,
    lable,
    email,
    isLoading,
    showModal,
    msg,
    setShowModal,
    setEmail,
    forgetPassword,
    setShowModal,
    oppsHide
  }
}

export default useForgetPassword

