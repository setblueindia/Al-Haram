import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useSelector } from "react-redux"

const useSerchHook = () => {
  const [data, setData] = useState([
    { id: 0, like: false },
    { id: 1, like: false },
    { id: 2, like: false },
    { id: 3, like: false },
    { id: 4, like: false },
    { id: 5, like: false }
  ])
  const navigation = useNavigation()
  const lang = useSelector(state => state?.lang?.data)
  const [like, setLike] = useState(false)


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
    likePress,
    navigation,
    lang,
    like,
    setLike,
    data
  }
}

export default useSerchHook

