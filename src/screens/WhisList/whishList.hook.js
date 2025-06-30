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
  const [lotti, setLotti] = useState(false)
  const [data, setData] = useState([])

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
        if (response?.data?.data?.length <= 0) {
          setIsLoading(false)
          setLotti(true)
        } else {
          setLotti(false)
        }
        setIsLoading(false)
      } else {
        setLotti(true)
        console.log("WHISHLIST INNER EROOR  ::::::::::::::::  ", response)
        setIsLoading(false)
      }
    } catch (error) {
      setLotti(true)
      console.log("WHISH LIST ERROR ::::::::::::::: ", error)
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
    lotti,
    isLoading,
    userData,
    dislikePress
  }
}
export default useWhishListHook

