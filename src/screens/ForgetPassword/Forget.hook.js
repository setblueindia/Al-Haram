import { useSelector } from "react-redux"
import { NUMBER } from "../../constants/constants"
import { Ar, En } from "../../constants/localization"

const useForgetPassword = () => {
    const lang = useSelector(state => state?.lang?.data)
    const lable = lang == NUMBER.num0 ? Ar : En
    
  return {
    lang,
    lable
  }
}

export default useForgetPassword

