import { useSelector } from "react-redux"
import { NUMBER } from "../../constants/constants"
import { Ar, En } from "../../constants/localization"
import { useState } from "react"


const useEditeHook = () => {
    const lang = useSelector(state => state?.lang?.data)
    const [editeProfile,setWithEmail] = useState(true)
    const langues = lang == NUMBER.num0 ? Ar : En


    
  return {
    langues,
    setWithEmail,
    editeProfile
    
  }
}

export default useEditeHook

