import { useIsFocused, useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { ASYNCSTORAGE, NAVIGATION, NUMBER } from "../../constants/constants"
import { useEffect, useMemo, useRef, useState } from "react"
import { addProduct } from "../../redux/Slices/AddToCartSlice"
import {
  AddRemoveToWhishLisst,
  AddToCartAPI,
  ExpireToken,
  ProductDetalsBySKU,
  ProductlistCount,
  oldAddressDeleted
} from "../../api/axios.api"
import { BASE_URL, imageURL } from "../../constants/axios.url"
import { SHOWTOTS } from "../../utils/utils"
import { Ar, En } from "../../constants/localization"
import Share from 'react-native-share';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { addUserData } from "../../redux/Slices/UserData.slice"
import { addLangCode } from "../../redux/Slices/LangSlices"
import { addNotificationCount } from "../../redux/Slices/AddNotificationCount"


const useProductDetails = (props) => {
  const lang = useSelector(state => state.lang)
  const userData = useSelector(state => state?.userData?.data)
  const productCountToCart = useSelector(state => state?.AddToCart?.data)
  const ProductSKU = props?.props?.route?.params?.SKU
  const [sindex, setIndex] = useState()
  const navigation = useNavigation()
  const [like, setLike] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [details, setDetails] = useState()
  const [showAnimation, setShowAnimation] = useState(false)
  const [isLoading, setIsLoading] = useState()
  const [defaultColor, setDefultColor] = useState()
  const [defaultSize, setDefultSize] = useState()
  const [avalabeSize, setAvalableSize] = useState()
  const [avalabeColor, setAvalableColor] = useState()
  const [shoeColor, setShowColor] = useState(true)
  const [sizeShow, setSizeShow] = useState(true)
  const [sizeIndex, setSizeIndex] = useState()
  const [size, setSize] = useState()
  const [color, setColor] = useState()
  const [qnt, setQnts] = useState(1)
  const [valueIndexOfSize, setValueIndexOfSize] = useState()
  const [imageObject, setImageObject] = useState()
  const [imagesArry, setImageArry] = useState()
  const label = lang?.data == NUMBER.num0 ? Ar : En
  const focus = useIsFocused()
  const [sliderData, setSliderData] = useState([])
  const [colorTex, setColorTex] = useState()
  const [quteID, setQuteID] = useState(0)
  const [colorLable, setColorLable] = useState(null)
  const [sizeLable, setSizeLable] = useState(null)
  const [colorError, setColorError] = useState("")
  const [sizeError, setSizeError] = useState("")
  const [masurementError, setMasurementError] = useState()

  const selectionColor = colorTex ? colorTex : " "

  const dispatch = useDispatch()

  const scrollRef = useRef();
  const colorSectionRef = useRef();
  const sizeSectionRef = useRef();

  const scrollToColor = () => {
    setTimeout(() => {
      if (colorSectionRef.current && scrollRef.current) {
        colorSectionRef.current.measureLayout(
          scrollRef.current,
          (x, y) => {
            scrollRef.current.scrollTo({ y, animated: true });
          },
          (error) => {
            console.log('measureLayout error:', error);
          }
        );
      }
    }, 200);
  };


  const scrollToSize = () => {
    setTimeout(() => {
      if (sizeSectionRef.current && scrollRef.current) {
        sizeSectionRef.current.measureLayout(
          scrollRef.current,
          (x, y) => {
            scrollRef.current.scrollTo({ y, animated: true });
          },
          (error) => {
            console.log('measureLayout error:', error);
          }
        );
      }
    }, 200);
  };


  const Str = lang?.data == NUMBER.num1 ?
    {
      color: "Color : " + selectionColor,
      Size: "Size :",
      ProductCode: "Product Code : ",
      MensPajamaSetShortTs: "Mens Pajama Set Short T-Shirt...",
      QNT: "QTY :",
      Addtocard: "Add to cart",
      Reviews: "Reviews :"

    } :
    {
      color: "اللون :" + selectionColor,
      Size: "المقاس :",
      ProductCode: "رمز المنتج:",
      MensPajamaSetShortTs: "طقم بيجامة رجالي تي شيرت قصير...",
      QNT: "الكمية: ",
      Addtocard: "إضافة إلى عربة التسوق",
      Reviews: "التعليقات :"
    }



  useEffect(() => {
    if (focus) {
      getData()
      getProductCount()
      oldAddressDetele()
    }
  }, [focus, imagesArry])

  useEffect(() => {
    setQnts(1)
  }, [navigation])


  useEffect(() => {
    TokenExpire()
  }, [])





  const onShare = async () => {
    const shareOptions = {
      title: details?.name ? details?.name : 'AL-Haram Stores',
      message: details?.name ? details?.name : 'AL-Haram Stores',
      url: `${BASE_URL}/${details?.canonical_url}`,
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      // Alert.alert('Error', error.message);
    }
  }


  const addTocartAnimation = () => {
    setTimeout(() => {
      setShowAnimation(false)
    }, 4000);
  }


  {/* Add To card API*/ }
  const AddTocart = async () => {
    setIsLoading(true)
    const formData = new FormData()

    formData.append("store_id", lang?.data)
    formData.append("app_quote_id", quteID)
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
        SHOWTOTS(response?.data?.message)
        getProductCount()
        setShowAnimation(false)
        setIsLoading(false)
        addTocartAnimation()
      } else {
        if (defaultColor && defaultSize && !color && !size) {
          SHOWTOTS(lang?.data == NUMBER.num1 ? "Select color and size is a required field" : " هذا الحقل مطلوب.")
          setColorError(lang?.data == NUMBER.num1 ? "Select color is a required field" : " هذا الحقل مطلوب.")
          setSizeError(lang?.data == NUMBER.num1 ? "Select size is a required field" : " هذا الحقل مطلوب.")
          scrollToSize();
          setMasurementError(0)
          setIsLoading(false)
          return
        }
        if (defaultColor && !color) {
          SHOWTOTS(lang?.data == NUMBER.num1 ? "Select color is a required field" : " هذا الحقل مطلوب.")
          setSizeError("")
          setColorError(lang?.data == NUMBER.num1 ? "Select color is a required field" : " هذا الحقل مطلوب.")
          scrollToColor();
          setMasurementError(1)
          setIsLoading(false)
          return
        } else if (defaultSize && !size) {
          SHOWTOTS(lang?.data == NUMBER.num1 ? "Select size is a required field" : " هذا الحقل مطلوب.")
          setSizeError(lang?.data == NUMBER.num1 ? "Select size is a required field" : " هذا الحقل مطلوب.")
          setColorError("")
          scrollToSize();
          setMasurementError(2)
          setIsLoading(false)
          return
        } else {
          SHOWTOTS(response?.data?.message)
          setColorError("")
          setSizeError("")
          setIsLoading(false)
          if (response?.data?.data?.login_status == "0") {

            const langNum = '2'
            setTimeout(async () => {
              const tempTerms = "true"
              await AsyncStorage.setItem(ASYNCSTORAGE.Terms, tempTerms)
            }, 3000);
            try {
              await AsyncStorage.clear()
              dispatch(addUserData(undefined))
              dispatch(addLangCode(langNum))
              dispatch(addNotificationCount(0))
              dispatch(addProduct(0))
              navigation.navigate(NAVIGATION.Login, { type: true, shoeMes: response?.data?.message })
            } catch (error) {
              console.log("SINGOUTE ERROR ::::::", error)
            }

            console.log("ADD TO CARD BITTON API RESPONSE :::::::::::::::::::::::: ", response?.data?.data?.login_status)
          }

        }
        setIsLoading(false)
      }
    } catch (error) {
      console.log("ADD TO CARD BITTON API RESPONSE ERROR :::::::::::::::::::::::: ", error)
      setIsLoading(false)

    }

  }

  {/* Get Product Details API */ }
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
                      canonical_url
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
                      custom_attributes {
                        color_label
                        size_label
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
      if (response?.status == '200') {
        setDetails(response?.data?.data?.products?.items[0])
        setColorLable(response?.data?.data?.products?.items[0]?.custom_attributes?.color_label)
        setSizeLable(response?.data?.data?.products?.items[0]?.custom_attributes?.size_label)
        getImageStr(response)
        const temp = [];

        response?.data?.data?.products?.items[0]?.media_gallery_entries?.map((items) => {
          const uri = imageURL + "/pub/media/catalog/product/" + items?.file
          temp.push(uri)
        })
        setSliderData(temp)
        const tempVariant = response?.data?.data?.products?.items[0]?.variants

        if (response?.data?.data?.products?.items[0]?.configurable_options[0]?.attribute_code == "size") {
          setDefultSize(response?.data?.data?.products?.items[0]?.configurable_options[0])
        }
        if (response?.data?.data?.products?.items[0]?.configurable_options[1]?.attribute_code == "size") {
          setDefultSize(response?.data?.data?.products?.items[0]?.configurable_options[1])
        }

        if (response?.data?.data?.products?.items[0]?.configurable_options[0]?.attribute_code == "color") {
          setDefultColor(response?.data?.data?.products?.items[0]?.configurable_options[0])
        }
        if (response?.data?.data?.products?.items[0]?.configurable_options[1]?.attribute_code == "color") {
          setDefultColor(response?.data?.data?.products?.items[0]?.configurable_options[1])
        }

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

  const getImageStr = (response) => {
    const temp = []
    response?.data?.data?.products?.items[0]?.configurable_options?.map((colorItem) => {
      if (colorItem?.attribute_code == "color") {
        colorItem?.values?.map((colorItem2) => {
          response?.data?.data?.products?.items[0]?.variants?.map((item) => {
            item?.attributes?.map((items1) => {
              if (items1?.code == "color" && items1?.value_index == colorItem2?.value_index) {
                const imgURL = imageURL + "/pub/media/catalog/product/" + item?.product?.media_gallery_entries[0]?.file
                const temObject = {
                  colorIndex: colorItem2?.value_index,
                  imgURL: imageURL + "/pub/media/catalog/product/" + item?.product?.media_gallery_entries[0]?.file
                }
                temp.push(temObject)

              }
            })

          })

        })
      }
    })
    setImageObject(temp)
  }

  {/* Color Press Logic */ }
  const colorOnPress = (id) => {
    setColorError("")
    sizeError ? setMasurementError(2) : setMasurementError()
    setSizeError(lang?.data == NUMBER.num1 ? "Select size is a required field" : " هذا الحقل مطلوب.")
    let valueIndexOfSize2 = 0;
    setShowColor(true)
    setSizeShow(false)
    setColor(id)
    const temp = []
    const temp2 = []
    const temp3 = []
    details?.variants?.map((items, index) => {
      if (items?.attributes[0]?.value_index == id) {
        valueIndexOfSize2 = items?.product?.media_gallery_entries.length
        items?.product?.media_gallery_entries.map((items) => {
          const uri = imageURL + "/pub/media/catalog/product/" + items?.file
          temp2.push(uri)

        })
        const Size = items?.attributes[1]?.label
        const valueIndexOfSize = items?.attributes[1]?.value_index
        temp.push(Size)
        temp3.push(valueIndexOfSize)
      }
    })

    const temData = temp2?.slice(0, valueIndexOfSize2)

    setAvalableSize(temp)
    setSliderData(temData)
    setValueIndexOfSize(temp3)
    avalabeColor?.includes(id) && setSizeIndex(), setSize("")
  }


  {/* Size Press Logic */ }
  const sizeOnPress = (id) => {
    colorError ? setMasurementError(1) : setMasurementError()
    setSizeError("")
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
    valueIndexOfSize?.includes(id)

    // && setIndex()
  }


  {/* Like / Dislike API */ }
  const likeDislike = async (id) => {

    const formData = new FormData()
    formData.append("customer_id", userData?.id)
    formData.append("productId", id)
    formData.append("action", like ? false : "true")
    try {
      const response = id && await AddRemoveToWhishLisst(formData)
      if (response?.data?.status == NUMBER.num1) {
        SHOWTOTS(response?.data?.message)
      }
    } catch (error) {
      console.log("Like / Dislike ERROR ::::::::::::: ", error)
    }
  }


  {/* Token Expire API */ }
  const TokenExpire = async () => {
    const fromdata = new FormData()
    try {
      const result = await ExpireToken(fromdata)
      result?.data && setQuteID(result?.data)
    } catch (error) {
      console.log(" Token Error:::::::", error)
    }
  }


  {/* Get Product Count API */ }
  const getProductCount = async () => {
    const fromdata = new FormData()
    const resultt = await ExpireToken(fromdata, lang)
    if (resultt?.data) {
      const countData = `
      query {
        getQuoteItemCount(quote_id: ${resultt?.data})
      }
      `
      try {
        // if (userData?.token) {
        const result = await ProductlistCount(countData, lang?.data)
        dispatch(addProduct(result?.data?.data?.getQuoteItemCount))
        // const arrOFItems = result?.data?.data?.customerCart?.items
        // const totalQuantity = arrOFItems.reduce((sum, item) => sum + item.quantity, 0);
        // totalQuantity > 0 ? dispatch(addProduct(totalQuantity)) : dispatch(addProduct(0))
        // } else {
        //   dispatch(addProduct(0))
        // }
      } catch (error) {
        console.log("GET PRODUCT LIST ERROR ::::::::::::: ", error)
        dispatch(addProduct(0))
      }

    }

  }


  const htmlSource = useMemo(() => ({
    html: details?.short_description?.html || ""
  }), [details?.short_description?.html]);



  {/* Address Remove API */ }
  const oldAddressDetele = async () => {
    const tempAddress = await AsyncStorage.getItem(ASYNCSTORAGE.oldAddress)
    if (userData?.id && tempAddress !== "true") {
      const params = `
      {
        deleteOldAddress(customer_id : ${userData?.id}){
            status
            message        
        }
    }
      `
      try {
        const res = await oldAddressDeleted(params, lang?.data)
        const tempAddress = "true"
        await AsyncStorage.setItem(ASYNCSTORAGE.oldAddress, tempAddress)
      } catch (error) {
        console.log(":::::::::: ADDRESS DELETE EROOR ::::::::::::::", error)
      }
    }
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
    userData,
    colorTex, setColorTex,
    setIndex,
    sindex,
    label,
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
    likeDislike,
    sizeIndex,
    setQnts,
    qnt,
    imageObject,
    htmlSource,
    colorLable,
    sizeLable,
    getData,
    setImageArry,
    colorSectionRef,
    sizeSectionRef, scrollRef,
    colorError, sizeError,
    masurementError,
  }
}

export default useProductDetails

