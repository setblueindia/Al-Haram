import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useSelector } from "react-redux"
import { NUMBER } from "../../constants/constants"

const useProductHook = () => {

  const navigation = useNavigation()
  const lang = useSelector(state => state.lang.data)

  // console.log("=========> " , lang)

  const [like , setLike] = useState(false)
  const Str = lang == NUMBER.num1 ?
  {
    Sort:"Sort",
    Filter:"Filter"

  }
  :
  {
    Sort:"نوع",
    Filter:"منقي"
  }


  const data = [1,2,3,4,5,6] 

  return {
    data,
    navigation,
    like,
    lang,
    Str,
    setLike,

  }

}

export default useProductHook

