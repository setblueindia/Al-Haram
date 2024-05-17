import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useSelector } from "react-redux"

const useSerchHook = () => {
  const navigation = useNavigation()
  const lang = useSelector(state => state?.lang?.data)
  const [like, setLike] = useState(false)
  return {
    navigation,
    lang,
    like,
    setLike
  }
}

export default useSerchHook

