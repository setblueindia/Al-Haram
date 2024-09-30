import { useNavigation } from "@react-navigation/native"
import { useEffect, useRef, useState } from "react"
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
  const [sortBy, setSortBy] = useState()
  const [action, setActions] = useState('')
  const [currePage, setCurrentPage] = useState(0)
  const [moreData, setMoreData] = useState(false)
  const lable = lang == NUMBER.num1 ? En : Ar
  const [data, setData] = useState([])
  const [color, setColor] = useState({ visibale: false, data: {} })
  const [price, setPrice] = useState({ visibale: false, data: {} })
  const [size, setSize] = useState({ visibale: false, data: {} })
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const flatListRef = useRef(null);


  const [apicalling, setApicalling] = useState(false)

  useEffect(() => {
    const fdata = false
    setProductData(fdata)
    getFilterData()
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
      Sort: "فرز حسب",
      Filter: "تصنيف"
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

  const getFilterData = async () => {
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
      const res = await getFilterList(params, lang)
      if (res?.status == 200) {
        setFilterData(res?.data?.data?.products?.aggregations)
      } else {
      }
    } catch (error) {
      console.log("GER FILTER ERROR :::::::;:::: ", error)
    }
  }

  const likeDislike = async (id, wishlist) => {

    const formData = new FormData()
    formData.append("customer_id", userData?.id)
    formData.append("productId", id)
    formData.append("action", wishlist == true ? "false" : "true")
    formData.append("store_id", lang)
    try {
      const response = id && await AddRemoveToWhishLisst(formData)
      if (response?.data?.status == NUMBER.num1) {
        SHOWTOTS(response?.data?.message)
      }
    } catch (error) {
      console.log("Like / Dislike ERROR ::::::::::::: ", error)
    }
  }

  const setProductData = async (fdata) => {
    const qutes = "\""
    const colorStr = color?.visibale ? "color: { eq: " + qutes + color?.data + qutes + " }," : ""
    const sizeStr = size?.visibale ? "size: { eq: " + qutes + size?.data + qutes + " }," : ""
    const priceFilter = price?.data?.length > 0 ? "price: { from: " + qutes + price?.data[0] + qutes + ", to: " + qutes + price?.data[1] + qutes + " }," : ""
    const sortSTR = fdata?.data ? "sort: {price: " + fdata?.data + "}" : ""
    const sortSTR2 = action ? "sort: {price: " + action + "}" : ""

    const sortFilterSTR = fdata?.data ? sortSTR : sortSTR2

    currePage < 1 && setIsLoadding(true)
    fdata && setIsLoadding(true)
    currePage >= 1 && setMoreData(true)
    const nextPage = fdata ? 1 : currePage + 1
    const sdata = `{
    products(
      filter: {
        category_id: { eq: "${props?.route?.params?.cetegoriesId}" },
        ${colorStr}
        ${sizeStr}
        ${priceFilter}
      }
      ${sortFilterSTR}
      pageSize: ${10}
      currentPage: ${nextPage}
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
      const res = await getFilterList(sdata, lang)
      if (res?.data?.data) {
        // setFilterData(res?.data?.data?.products?.aggregations)
        // console.log(":::::::::::::::::::::" , res?.data?.data?.products?.items?.length)
        fdata ? setData(res?.data?.data?.products?.items) : setData([...data, ...res?.data?.data?.products?.items])
        setIsLoadding(false)
        setMoreData(false)
        setCurrentPage(nextPage)
        setApicalling(true)
      } else {
        console.log("INNER PRODUCT ERROR ::::::::::", res?.data)
        setIsLoadding(false)
        setMoreData(false)
        setSortBy('')
        setActions('')
      }
    } catch (error) {
      console.log("GET PRODUCT ERROE :::::::: ", error)
      setIsLoadding(false)
      setMoreData(false)
      setSortBy('')
      setActions('')
    }
  }



  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };



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
    setProductData,
    setColor,
    setPrice,
    setSize,
    pIndex,
    filterData,
    likePress,
    likeDislike,
    handleScroll,
    scrollToTop,
    sortBy,
    moreData,
    price,
    size,
    color,
    showScrollToTop,
    flatListRef


  }

}

export default useProductHook

