import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AddRemoveToWhishLisst, WhisList } from "../../api/axios.api"
import { NUMBER } from "../../constants/constants"
import { SHOWTOTS } from "../../utils/utils"
const useWhishListHook = () => {
  const lang = useSelector(state => state?.lang?.data)
  const userData = useSelector(state => state?.userData?.data)
  const [like, setLike] = useState(true)
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage , setCurrentPage] = useState(0)



  const [data, setData] = useState([
    // { id: 0, like: true },
    // { id: 1, like: true },
    // { id: 2, like: true },
    // { id: 3, like: true },
    // { id: 4, like: true },
    // { id: 5, like: true }
  ])


  useEffect(() => {
    getData()
  }, [])

  const likePress = (items) => {
    setData((prevData) =>
      prevData?.map(
        (productDetails) => productDetails?.id == items ?
          { ...productDetails, like: !productDetails?.like } :
          productDetails
      )
    )
  }

  const getData = async () => {
    setIsLoading(true)
    // const nextPage = currentPage + 1
    const formData = new FormData()
    formData.append("customer_id", userData?.id)
    formData.append("store_id", lang)
    try {
      const response = await WhisList(formData)
      if (response?.data?.status == NUMBER.num1) {
        response?.data?.data.map((item) => {
          return item["like"] = true;
        })
        setData(response?.data?.data)
        setIsLoading(false)
      } else {
        console.log("WHISHLIST INNER EROOR  :::::::::::::::::::::::  ", response?.data)
        setIsLoading(false)
      }
    } catch (error) {
      console.log("WHISH LIST ERROR :::::::::::::::::::::; ", error)
      setIsLoading(false)
    }
  }

  const dislikePress = async (id) => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append("customer_id", userData?.id)
    formData.append("productId", id)
    formData.append("action", "false")
    try {
      const response = await AddRemoveToWhishLisst(formData)
      if (response?.data?.status == NUMBER.num1) {
        SHOWTOTS(response?.data?.message)
        getData()
        setIsLoading(false)
      } else {
        setIsLoading(false)
      }
    } catch (error) {
      console.log("WHISHLIST DISLIKE ERROR ::::::::::::: ", error)
      setIsLoading(false)
    }
  }


  return {
    navigation,
    data,
    like,
    lang,
    setLike,
    likePress,
    isLoading,
    dislikePress
  }
}
export default useWhishListHook

