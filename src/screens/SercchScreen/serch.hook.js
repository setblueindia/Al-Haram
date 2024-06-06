import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useSelector } from "react-redux"
import { SerchAPI } from "../../api/axios.api"

const useSerchHook = () => {
  const [data, setData] = useState([
    // { id: 0, like: false },
    // { id: 1, like: false },
    // { id: 2, like: false },
    // { id: 3, like: false },
    // { id: 4, like: false },
    // { id: 5, like: false }
  ])
  const navigation = useNavigation()
  const lang = useSelector(state => state?.lang?.data)
  const [like, setLike] = useState(false)
  const [isLoadding, setIsLoadding] = useState(false)
  const [serch, setSerch] = useState('')
  const [currePage, setCurrentPage] = useState(0)
  const [moreData, setMoreData] = useState(false)
  const [serchText , setSerchTex] = useState('')




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
    // currePage < 1 && setIsLoadding(true)
    // currePage >= 1 && setMoreData(true)
    console.log("First ======> ",first )
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
        console.log("::::::::::::::: ", first)
        !first ?
          setData([...data, ...response?.data?.data?.products?.items]) :
          setData(response?.data?.data?.products?.items)
          setIsLoadding(false)
          setMoreData(false)
        first ? setCurrentPage(1) : setCurrentPage(nextPage)
      }

    } catch (error) {
      console.log("SERCH ERRROR::::::::::", error)
      setIsLoadding(false)
    }
  }

  const onHandalPress = (text) => {
    clearTimeout(timerId);
    const timerId = setTimeout(() => {
      getData(text, first = true)
    }, 3000)
  }


  const SerchPress = (text) => {
    // setSerchTex(text)
    onHandalPress(text)
    setSerch(text)

  }


  return {
    likePress,
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
    setSerchTex
  }
}

export default useSerchHook

