import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NUMBER } from "../../constants/constants"
import { AddRemoveToWhishLisst, getFilterList, getProductList } from "../../api/axios.api"
import { Ar, En } from "../../constants/localization"
import { SHOWTOTS } from "../../utils/utils"

const useProductHook = (props) => {
  const navigation = useNavigation()
  const [sortFilter, setSortFilter] = useState(false)
  const [sizeFilter, setSizeFilter] = useState(false)
  const lang = useSelector(state => state.lang.data)
  const userData = useSelector(state => state.userData.data)
  const [isLoadding, setIsLoadding] = useState(false)
  const [filterData, setFilterData] = useState('')
  const [sortBy , setSortBy] = useState()
  const [action , setActions] = useState('')
  const [currePage, setCurrentPage] = useState(0)
  const [moreData, setMoreData] = useState(false)
  const lable = lang == NUMBER.num1 ? En : Ar
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, [])

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
          { ...productDetails, wishlist: !productDetails?.wishlist } :
          productDetails
      )
    )
  }

  const getData = async () => {
    currePage < 1 && setIsLoadding(true)
    currePage >= 1 && setMoreData(true)
    const nextPage = currePage + 1 

    const formData = new FormData
    formData.append("category_id", props?.route?.params?.cetegoriesId)
    formData.append("store_id", lang)
    formData.append("PageSize", 10)
    formData.append("CurPage", nextPage)
    formData.append("customer_id", userData?.id)
    formData.append("color", '')
    formData.append("size", '')
    formData.append("price_from", '')
    formData.append("price_to", '')
    formData.append("search", '')
    formData.append("sort_by", sortBy ? sortBy : '')
    formData.append("sort_action", action ? action : '')
    try {
      const res = await getProductList(formData)
      if (res?.status == '200') {
        setData([...data , ...res?.data?.data])
        // setData(res?.data?.data)
        setIsLoadding(false)
        setMoreData(false)
        setCurrentPage(nextPage)
        setSortBy(''),
        setActions('')
      } else {
        setIsLoadding(false)
        setMoreData(false)
        setSortBy('')
        setActions('')
      }
    } catch (error) {
      console.log("GET PRODUCT ERROR :::::::::: ", error)
      setIsLoadding(false)
      setMoreData(false)
      setSortBy('')
      setActions('')

    }
  }

  const getFilterData = async () => {
    setIsLoadding(true)
  const params = `
  {
    products(
      filter: {
        category_id: { eq: ${props?.route?.params?.cetegoriesId} }
      }
      pageSize: ${10}
      currentPage: ${1}
    ) {
      aggregations {
        attribute_code
        count
        label
        options {
          count
          label
          value
        }
      }
      items {
        id
        name
        sku
        small_image {
          url
        }
        price {
          regularPrice {
            amount {
              value
              currency
            }
          }
        }
        special_price
        display_sale_label
        display_new_label
      }
      page_info {
        current_page
        page_size
        total_pages
      }
      total_count
    }
  }
  
  `
    try {
      const res = await getFilterList(params , lang)
      // console.log("Response :::::::::::::::::: ", res?.data?.data?.products?.aggregations)
      if (res?.status == 200) {
        setFilterData(res?.data?.data?.products?.aggregations)
        setSizeFilter(true)
        setIsLoadding(false)
      } else {
        setIsLoadding(false)
      }
    } catch (error) {
      console.log("GER FILTER ERROR :::::::;:::: ", error)
      setIsLoadding(false)

    }
  }


  const likeDislike = async (id) => {
    const formData = new FormData()
    formData.append("customer_id", userData?.id)
    formData.append("productId", id)
    formData.append("action", "true")
    formData.append("store_id" , lang)
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
    data,
    navigation,
    like,
    lang,
    Str,
    sizeFilter,
    isLoadding,
    lable,
    userData,
    setSortBy,
    setSortFilter,
    setSizeFilter,
    setActions,
    sortFilter,
    setLike,
    setIndex,
    getData,
    pIndex,
    filterData,
    likePress,
    getFilterData,
    likeDislike,
    getData,
    moreData

  }

}

export default useProductHook

