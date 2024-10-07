
import { useEffect, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { CartList, ExpireToken, ProductlistCount, getGiftCartdInfo, giftAddToCart } from '../../api/axios.api'
import { imageURL } from '../../constants/axios.url'
import { SHOWTOTS, emaileRegxp } from '../../utils/utils'
import { addProduct } from '../../redux/Slices/AddToCartSlice'
import { Ar, En } from '../../constants/localization'
import { NUMBER } from '../../constants/constants'

const useGiftHook = (props) => {


  const giftCardID = props?.route?.params?.giftCartID
  const navigation = useNavigation()

  const lang = useSelector(state => state?.lang?.data)
  const userData = useSelector(state => state?.userData?.data)
  const [recipient, setRecipient] = useState(1)


  const [name, setName] = useState()
  const [recipientName, setRecipientName] = useState()
  const [recipientEmail, setRecipientEmail] = useState()
  const [recipientNumber, setRecipientNumber] = useState()
  const [message, setMessage] = useState()


  const [data, setData] = useState()
  const [slider, setSlider] = useState()
  const [isLoadding, setIsLoadding] = useState(false)
  const [price, setPrice] = useState(10)
  const [selectIndex, setSelectIndex] = useState()
  const [inputPrice, setInputPrice] = useState()
  const [error, setError] = useState(false)

  const [ondata, setOnData] = useState(1)
  const [recipientDetails, setRecipientDetails] = useState([])


  const dispatch = useDispatch()
  const focus = useIsFocused()

  const langues = lang == NUMBER?.num0 ? Ar : En


  const recipiantObject = {
    am_giftcard_sender_name: name,
    am_giftcard_recipient_name: recipientName,
    am_giftcard_recipient_email: recipientEmail,
    mobilenumber: recipientNumber,
    am_giftcard_message: message
  }

  useEffect(() => {
    setRecipientDetails([recipiantObject, ...recipientDetails])
  }, [])

  useEffect(() => {
    if (focus) {
      getProductCount()
    }
    getData()
  }, [])

  const onRecipientPress = () => {


    if (!recipiantObject?.am_giftcard_sender_name) {
      setError(true)
    } else if (!recipiantObject?.am_giftcard_recipient_name) {
      setError(true)
    } else if (!recipiantObject?.am_giftcard_recipient_email) {
      setError(true)
    } else if (!emaileRegxp.test(recipientEmail)) {
      SHOWTOTS(langues?.Invalidemailaddress)
    } else if (!recipiantObject?.mobilenumber) {
      setError(true)
    } else if (!recipientNumber || recipientNumber?.length < 9 || recipientNumber?.length > 9) {
      SHOWTOTS(langues?.Numbercontainsmustbe9digits)
    }
    else if (!recipiantObject?.am_giftcard_message) {
      setError(true)
    } else {

      setError(false)
      setRecipientDetails([recipiantObject, ...recipientDetails])
      setRecipient(recipient + 1)

      setMessage()
      setRecipientName()
      setRecipientEmail()
      setName()
      setRecipientNumber()
    }




  }

  const getData = async () => {
    setIsLoadding(true)
    const qurry =
      `
    query {
      getGiftCartProductByStore(sku: "${giftCardID}" , store_id: ${lang}) {
          id
          sku
          name
          price
          description
          type_id
          term_and_condition{
            title
            link
            icon
        }
          media_gallery_entries
          {
              file
          }
          am_giftcard_prices{
              price_id
              product_id
              website_id
              attribute_id
              value
          }
          am_allow_open_amount
          am_giftcard_type
          am_giftcard_code_set
          am_giftcard_code_image
      }
  }
    `
    try {
      const giftCartInfo = await getGiftCartdInfo(qurry, lang)
      setData(giftCartInfo?.data?.data?.getGiftCartProductByStore)
      const temp = []
      giftCartInfo?.data?.data?.getGiftCartProductByStore?.media_gallery_entries?.map((items) => {
        const url = imageURL + "/pub/media/catalog/product/" + items?.file
        temp.push(url)
      })
      setPrice(giftCartInfo?.data?.data?.getGiftCartProductByStore?.am_giftcard_prices[0]?.value)
      setSlider(temp)
      setIsLoadding(false)
    } catch (error) {
      console.log("Gift Cart Error :::::::", error)
      setIsLoadding(false)
    }
  }

  const pricvePress = async (index, item) => {
    setSelectIndex(index)
    setPrice(item)
    setInputPrice()
  }

  const addWallte = async () => {
    if (inputPrice) {
      setSelectIndex()
      setPrice(inputPrice)
    } else {
      SHOWTOTS("Enter amount")
    }

  }

  const checkValidation = async () => {

    if (!emaileRegxp.test(recipientEmail)) {
      SHOWTOTS(langues?.Invalidemailaddress)
    }
    else if (!recipientNumber || recipientNumber?.length < 9 || recipientNumber?.length > 9) {
      SHOWTOTS(langues?.Numbercontainsmustbe9digits)

    } else {


    }

  }


  const onAddTocart = async () => {

    let hasUndefinedValue = false;

    const recipientDetails1 = recipientDetails.map(card => {
      if (card.am_giftcard_message === undefined &&
        card.am_giftcard_recipient_email === undefined &&
        card.am_giftcard_recipient_name === undefined &&
        card.am_giftcard_sender_name === undefined &&
        card.mobilenumber === undefined) {
        return recipiantObject;
      }
      return card;
    });

    const createAddonRecipientsString = (recipients) => {
      return recipients.map(recipient => {
        return `{ 
          am_giftcard_sender_name: "${recipient.am_giftcard_sender_name}",
          am_giftcard_recipient_name: "${recipient.am_giftcard_recipient_name}",
          am_giftcard_recipient_email: "${recipient.am_giftcard_recipient_email}",
          mobilenumber: "${recipient.mobilenumber}",
          am_giftcard_message: "${recipient.am_giftcard_message}"
    }`;
      }).join(",");
    };

    const addonRecipientsString = createAddonRecipientsString(recipientDetails1);

    const tempInner = async () => {
      const recipiantObject2 = {
        am_giftcard_sender_name: undefined,
        am_giftcard_recipient_name: undefined,
        am_giftcard_recipient_email: undefined,
        mobilenumber: undefined,
        am_giftcard_message: undefined
      }

      setIsLoadding(true)
      const fromData = new FormData()

      try {
        const result = await ExpireToken(fromData)
        if (result?.data) {
          const Qurry2 = `
        mutation {
          addGiftCartToShoppingCart(input: {
              product: ${data?.id},
              item: ${data?.id},
              quote_id: ${result?.data},
              am_giftcard_amount: ${price},
              am_giftcard_amount_custom: null,
              am_giftcard_image: ${data?.am_giftcard_code_image},      
              addon_recipients: [${addonRecipientsString}],
              is_date_delivery: 0,
              qty: 1
          }) {
              success
              message
          }
      }
        `
          const response = await giftAddToCart(Qurry2)
          if (response?.data?.data?.addGiftCartToShoppingCart?.success) {
            SHOWTOTS(response?.data?.data?.addGiftCartToShoppingCart?.message)
            getProductCount()
            setIsLoadding(false)
            setMessage()
            setRecipientName()
            setRecipientEmail()
            setName()
            setRecipientNumber()
            setRecipientDetails([recipiantObject2])
          } else {
            // console.log("INNER ERROR :::::::: ", response?.data?.data?.addGiftCartToShoppingCart?.message)
            SHOWTOTS(response?.data?.data?.addGiftCartToShoppingCart?.message)
            setIsLoadding(false)
          }

        } else {
          console.log("QUTE ID NOT FOUND")
          setIsLoadding(false)

        }

      } catch (error) {
        console.log("ADD TO CART ERROR :::::::", error)
        setIsLoadding(false)
      }

    }

    recipientDetails1.forEach(item => {
      Object.values(item).forEach(value => {
        if (value === undefined) {
          // SHOWTOTS("ADD RCIPINT DATA")
          setError(true)
          hasUndefinedValue = true;
        } else {
          console.log(":::::::::::")
        }
      });
    });

    if (!hasUndefinedValue) {
      tempInner()
    }

  }



  const getProductCount = async () => {
    const countData = `
    query {
      customerCart {
        items {
          quantity
        }
      }
    }
    `
    try {
      if (userData?.token) {
        const result = await ProductlistCount(countData, lang)

        const arrOFItems = result?.data?.data?.customerCart?.items
        const totalQuantity = arrOFItems?.reduce((sum, item) => sum + item?.quantity, 0);
        totalQuantity > 0 ? dispatch(addProduct(totalQuantity)) : dispatch(addProduct(0))
      } else {
        dispatch(addProduct(0))
      }
    } catch (error) {
      console.log("GET PRODUCT LIST ERROR ::::::::::::: ", error)
      dispatch(addProduct(0))
    }
  }

  // const getCartItems = async () => {

  //   const formData = new FormData
  //   formData.append("store_id", lang)
  //   formData.append("token", userData?.token)
  //   try {
  //     const response = await CartList(formData)
  //     if (response?.data?.status) {
  //       response?.data?.data?.items.forEach(item => {
  //         if (item.isInStock) {
  //           console.log("item :::::::::", item?.type)
  //         } else {

  //         }
  //       });

  //     } else {
  //       console.log("INNER ERROR ::::::: ", response?.data)
  //     }
  //   } catch (error) {

  //     console.log("CART LIST ERROR ::::::::::::::::::::::: ", error)
  //   }
  // }

  // useEffect(() => { getCartItems() }, [])


  return {
    navigation,
    lang,
    setName,
    setRecipientName,
    setRecipientEmail,
    setMessage,
    setRecipientNumber,
    onRecipientPress,
    setRecipient,
    onAddTocart,
    setInputPrice,
    addWallte,
    setOnData,
    checkValidation,
    ondata,
    recipient,
    recipientDetails,
    data,
    slider,
    isLoadding,
    setPrice,
    pricvePress,
    selectIndex,
    price,
    inputPrice,
    userData,
    error,

    name,
    recipientName,
    recipientNumber,
    message,
    recipientEmail,
    giftCardID


  }
}

export default useGiftHook

