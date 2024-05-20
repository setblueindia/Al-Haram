import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useSelector } from "react-redux"
import { NUMBER } from "../../constants/constants"

const useProductHook = () => {

  const navigation = useNavigation()
  const [sortFilter, setSortFilter] = useState(false)
  const [sizeFilter, setSizeFilter] = useState(false)
  const lang = useSelector(state => state.lang.data)
  const [data, setData] = useState([
    { id: 0, like: false },
    { id: 1, like: false },
    { id: 2, like: false },
    { id: 3, like: false },
    { id: 4, like: false },
    { id: 5, like: false }
  ])

  // console.log("=========> " , lang)

  const [like, setLike] = useState(false)

  const [pIndex, setIndex] = useState('')

  const Str = lang == NUMBER.num1 ?
    {
      Sort: "Sort",
      Filter: "Filter"

    }
    :
    {
      Sort: "نوع",
      Filter: "منقي"
    }


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
    data,
    navigation,
    like,
    lang,
    Str,
    sizeFilter,
    setSortFilter,
    setSizeFilter,
    sortFilter,
    setLike,
    setIndex,
    pIndex,
    likePress

  }

}

export default useProductHook

