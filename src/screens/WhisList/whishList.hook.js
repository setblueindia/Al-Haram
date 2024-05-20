import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useSelector } from "react-redux"
const useWhishListHook = () => {
  const lang = useSelector(state => state.lang.data)
  const [like, setLike] = useState(true)
  const navigation = useNavigation()
  const [data, setData] = useState([
    { id: 0, like: true },
    { id: 1, like: true },
    { id: 2, like: true },
    { id: 3, like: true },
    { id: 4, like: true },
    { id: 5, like: true }
  ])

  const likePress = (items) => {
    setData((prevData) =>
      prevData?.map(
        (productDetails) => productDetails?.id == items ?
          { ...productDetails, like: !productDetails?.like } :
          productDetails
      )
    )
  }
  return {
    navigation,
    data,
    like,
    lang,
    setLike,
    likePress
  }
}
export default useWhishListHook

