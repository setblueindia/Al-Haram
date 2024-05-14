import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useSelector } from "react-redux"
const useWhishListHook = () => {
  const lang = useSelector(state => state.lang.data)
  const [like, setLike] = useState(true)
  const navigation = useNavigation()
  const data = [1, 2, 3, 4, 5, 6]
  return {
    navigation,
    data,
    like,
    lang,
    setLike
  }
}
export default useWhishListHook

