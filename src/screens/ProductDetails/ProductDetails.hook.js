import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { NUMBER } from "../../constants/constants"
import { ColorSpace } from "react-native-reanimated"
import { useEffect, useState } from "react"
import { addProduct } from "../../redux/Slices/AddToCartSlice"
import { AddToCartAPI, ProductDetalsBySKU } from "../../api/axios.api"
import { BASE_URL } from "../../constants/axios.url"
import { SHOWTOTS } from "../../utils/utils"
// import Share from 'react-native-share';


const useProductDetails = (props) => {
  const lang = useSelector(state => state.lang)
  const userData = useSelector(state => state?.userData?.data)
  const productCountToCart = useSelector(state => state?.AddToCart?.data)
  const [sindex, setIndex] = useState()
  const navigation = useNavigation()
  const [like, setLike] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [details, setDetails] = useState()
  const [showAnimation, setShowAnimation] = useState(false)
  const [isLoading, setIsLoading] = useState()
  const dispatch = useDispatch()
  const ProductSKU = props?.props?.route?.params?.SKU
  const [defaultColor, setDefultColor] = useState()
  const [defaultSize, setDefultSize] = useState()
  const [avalabeSize, setAvalableSize] = useState()
  const [avalabeColor, setAvalableColor] = useState()
  const [shoeColor, setShowColor] = useState(true)
  const [sizeShow, setSizeShow] = useState(true)
  const [sizeIndex, setSizeIndex] = useState()
  const [size, setSize] = useState()
  const [color, setColor] = useState()
  const [qnt, setQnts] = useState(0)
  const [valueIndexOfSize, setValueIndexOfSize] = useState()
  const [sliderData, setSliderData] = useState(
    [
      //     "https://img.freepik.com/premium-photo/plain-white-t-shirt-mockup-photo_398492-234.jpg",
      //     "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yOV9waG90b19vZl9hX3doaXRlX3Qtc2hpcnRfb25fYV9taW5pbWFsX2JhY2tncl9lNzEyYTMzOC0wZmU5LTRjMTYtOWFkMC0wMDAyMDEyZWRlNDlfMS5qcGc.jpg",
      //     "https://img.freepik.com/premium-photo/white-cotton-t-shirt-mockup-tshirt-mockup_677428-1081.jpg",
      //     "https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2hpdGUlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      //     "https://img.freepik.com/premium-photo/fashion-dress-mockup-white-tshirt-blank_856660-6512.jpg",
      //     "https://img.freepik.com/premium-photo/blank-white-tshirts-mockup-hanging-white-wall-front-view-template-custom-design-generative-ai_117038-6478.jpg"
    ]
  )
  useEffect(() => {
    getData()
  }, [])


  const onShare = () => {

    // Share.open(options)
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         err && console.log(err);
    //     });
  }



  const AddTocart = async () => {
    setIsLoading(true)
    const formData = new FormData()

    formData.append("store_id", lang?.data)
    formData.append("sku", ProductSKU)
    formData.append("qty", qnt)
    formData.append("token", userData?.token)
    formData.append("product_type", (avalabeSize || avalabeColor) ? "configurable" : "simple")
    formData.append("color", color ? color : "")
    formData.append("size", size ? size : "")
    formData.append("custom_option", "")

    const response = await AddToCartAPI(formData)
    try {
      if (response?.data?.status == NUMBER.num1) {
        const count = productCountToCart + 1
        dispatch(addProduct(count)),
          SHOWTOTS(response?.data?.message)
        setShowAnimation(false)
        setIsLoading(false)
        addTocartAnimation()
      } else {
        SHOWTOTS(response?.data?.message)
        setIsLoading(false)
      }
    } catch (error) {
      console.log("ADD TO CARD BITTON API RESPONSE ERROR :::::::::::::::::::::::: ", error)
      setIsLoading(false)
    }
  }
  const addTocartAnimation = () => {
    setTimeout(() => {
      setShowAnimation(false)
    }, 4000);
  }


  const Str = lang?.data == NUMBER.num1 ?
    {
      color: "Color : ",
      Size: "Size :",
      ProductCode: "Product Code : ",
      MensPajamaSetShortTs: "Mens Pajama Set Short T-Shirt...",
      QNT: "Qty :",
      Addtocard: "Add to card",
      Reviews: "Reviews :"

    } :
    {
      color: "لون :",
      Size: " مقاس :",
      ProductCode: "رمز المنتج :13884",
      MensPajamaSetShortTs: "طقم بيجامة رجالي تي شيرت قصير...",
      QNT: "الكمية: ",
      Addtocard: "اضف الى البطاقة",
      Reviews: "التعليقات :"
    }


  const getData = async () => {
    setIsLoading(true)
    const data =
      `
       query
       {
                  products(filter: { sku: { eq: "${ProductSKU}" } }) {
                    items {
                      id
                      sku
                      name
                      stock_status
                      description {
                        html
                      }
                      short_description {
                        html
                      }
                      special_price
                      price_tiers {
                        quantity
                        discount {
                          percent_off
                          amount_off
                        }
                        final_price {
                          value
                          currency
                        }
                      }
                      price_range {
                        minimum_price {
                          regular_price {
                            value
                            currency
                          }
                        }
                      }
                      image {
                        url
                        label
                        position
                        disabled
                      }
                      media_gallery_entries {
                        file
                      }
                      only_x_left_in_stock
                      ... on ConfigurableProduct {
                        configurable_options {
                          id
                          attribute_code
                          label
                          values {
                            value_index
                            label
                            swatch_data {
                              __typename
                              value
                            }
                          }
                        }
                        variants {
                          product {
                            sku
                            media_gallery_entries {
                                file
                            }
                          }
                          attributes {
                            code
                            value_index
                            label
                          }
                        }
                      }
                      related_products {
                        id
                        name
                        sku
                        image {
                            url
                            label
                            position
                            disabled
                        }
                        price_range {
                            minimum_price {
                            regular_price {
                                value
                                currency
                            }
                            }
                        }
                      }
                    }
                  }
                }
                `
    try {
      const response = await ProductDetalsBySKU(data, lang?.data)
      // console.log("response :::::: ", response?.data?.data?.products?.items[0]?.configurable_options[0])
      if (response?.status == '200') {
        setDetails(response?.data?.data?.products?.items[0])
        const temp = [];
        response?.data?.data?.products?.items[0]?.media_gallery_entries?.map((items) => {
          const uri = BASE_URL + "/pub/media/catalog/product/" + items?.file
          temp.push(uri)
        })
        setSliderData(temp)
        setDefultColor(response?.data?.data?.products?.items[0]?.configurable_options[0])
        setDefultSize(response?.data?.data?.products?.items[0]?.configurable_options[1])
        setIsLoading(false)
      } else {
        console.log("INNER DETAILS PRODUCT ERROR :::::::::::::: ", response)
        setIsLoading(false)
      }
    } catch (error) {
      console.log("EROOR OF GET PRODUCT DETAILS :::::::::::::: ", error)
      setIsLoading(false)

    }
  }

  const colorOnPress = (id) => {
    setShowColor(true)
    setSizeShow(false)
    setColor(id)
    const temp = []
    const temp2 = []
    const temp3 = []
    details?.variants?.map((items) => {
      if (items?.attributes[0]?.value_index == id) {
        items?.product?.media_gallery_entries.map((items) => {
          const uri = BASE_URL + "/pub/media/catalog/product/" + items?.file
          temp2.push(uri)
        })
        const Size = items?.attributes[1]?.label
        const valueIndexOfSize = items?.attributes[1]?.value_index
        temp.push(Size)
        temp3.push(valueIndexOfSize)
      }
    })
    setAvalableSize(temp)
    setSliderData(temp2)
    setValueIndexOfSize(temp3)
    avalabeColor?.includes(id) && setSizeIndex(), setSize("")
  }

  const sizeOnPress = (id) => {
    setShowColor(false)
    setSizeShow(true)
    setSize(id)
    const temp = []
    details?.variants?.map((items) => {
      if (items?.attributes[1]?.value_index == id) {
        const Size = items?.attributes[0]?.value_index
        temp.push(Size)
      }
    })
    setAvalableColor(temp)
    valueIndexOfSize?.includes(id) && setIndex()
  }

  return {
    lang,
    navigation,
    sliderData,
    color,
    Str,
    showModal,
    showAnimation,
    details,
    isLoading,
    sizeShow,
    setIndex,
    sindex,
    setLike,
    like,
    onShare,
    setShowModal,
    setSizeShow,
    AddTocart,
    setDetails,
    defaultColor,
    defaultSize,
    colorOnPress,
    avalabeSize,
    sizeOnPress,
    avalabeColor,
    shoeColor,
    setSizeIndex,
    sizeIndex,
    setQnts,
    qnt
  }
}

export default useProductDetails

