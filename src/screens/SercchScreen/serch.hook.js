import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useSelector } from "react-redux"
import { AddRemoveToWhishLisst, SerchAPI } from "../../api/axios.api"
import { SHOWTOTS } from "../../utils/utils"
import { NUMBER } from "../../constants/constants"

const useSerchHook = () => {

  const navigation = useNavigation()
  const lang = useSelector(state => state?.lang?.data)
  const userData = useSelector(state => state?.userData)
  const [like, setLike] = useState(false)
  const [isLoadding, setIsLoadding] = useState(false)
  const [serch, setSerch] = useState('')
  const [currePage, setCurrentPage] = useState(0)
  const [moreData, setMoreData] = useState(false)
  const [serchText, setSerchTex] = useState('')
  const [productId, setProductID] = useState()

  const [data, setData] = useState([
    // { id: 0, like: false },
    // { id: 1, like: false },
    // { id: 2, like: false },
    // { id: 3, like: false },
    // { id: 4, like: false },
    // { id: 5, like: false }
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

  const getData = async (text, first) => {
    first ? setIsLoadding(true) : setMoreData(true)
    const nextPage = currePage + 1
    const sData =
      `
    {
      products(search:${text ? text : serchText},pageSize:${10},currentPage:${first ? 1 : nextPage}) {
        total_count
        items {
          id
          name
          sku
          media_gallery_entries {
            file
          }
          thumbnail {
            url
            label
            position
            disabled
          }
          price {
            regularPrice {
              amount {
                value
                currency
              }
            }
          }
        }
        page_info {
          page_size
          current_page
        }
      }
    }
    `
    try {
      const response = await SerchAPI(sData, lang)
      if (response) {
        response?.data?.data?.products?.items.map((item) => {
          return item["like"] = false;
        })
        !first ?
          setData([...data, ...response?.data?.data?.products?.items]) :
          setData(response?.data?.data?.products?.items)
        setIsLoadding(false)
        setMoreData(false)
        first ? setCurrentPage(1) : setCurrentPage(nextPage)
      } else {
        setIsLoadding(false)
        setMoreData(false)
        console.log("INNER SERCH ERROR :::::::::::", response)
      }

    } catch (error) {
      console.log("SERCH ERRROR ::::::::::", error)
      setIsLoadding(false)
      setMoreData(false)
    }
  }

  const onHandalPress = (text) => {
    clearTimeout(timerId);
    const timerId = setTimeout(() => {
      getData(text, first = true)
    }, 3000)
  }

  const SerchPress = (text) => {
    onHandalPress(text)
    setSerch(text)

  }


  const likeDislike = async (id) => {

    const formData = new FormData()
    formData.append("customer_id", userData?.data?.id)
    formData.append("productId", id)
    formData.append("action", "true")
    try {
      const response = id && await AddRemoveToWhishLisst(formData)
      if (response?.data?.status == NUMBER.num1) {
        SHOWTOTS(response?.data?.message)
      }
    } catch (error) {
      console.log("Like / Dislike ERROR ::::::::::::: ", error)
    }
  }


  return {
    likeDislike,
    navigation,
    lang,
    like,
    setLike,
    SerchPress,
    getData,
    data,
    serch,
    isLoadding,
    moreData,
    setSerchTex,
    setProductID,
    likePress
  }
}

export default useSerchHook

