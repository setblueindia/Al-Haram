import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"

const useSerchHook = () => {
  const navigation = useNavigation()
  const lang = useSelector(state => state?.lang?.data)
  return {
    navigation
  }
}

export default useSerchHook

