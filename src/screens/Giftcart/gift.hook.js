import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { ExpireToken, getGiftCartdInfo, giftAddToCart } from '../../api/axios.api'
import { imageURL } from '../../constants/axios.url'
import { SHOWTOTS } from '../../utils/utils'

const useGiftHook = () => {
  const navigation = useNavigation()
  const lang = useSelector(state => state?.lang?.data)
  const userData = useSelector(state => state?.userData?.data)
  const [recipient, setRecipient] = useState(1)


  const [name, setName] = useState()
  const [recipientName, setRecipientName] = useState()
  const [recipientEmail, setRecipientEmail] = useState()
  const [recipientNumber, setRecipientNumber] = useState()
  const [data, setData] = useState()
  const [slider, setSlider] = useState()
  const [message, setMessage] = useState()
  const [isLoadding, setIsLoadding] = useState(false)
  const [price, setPrice] = useState(10)
  const [selectIndex, setSelectIndex] = useState()
  const [inputPrice, setInputPrice] = useState()
  const [error, setError] = useState(false)

  const [recipientDetails, setRecipientDetails] = useState([])

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

  const onRecipientPress = () => {
    // setError(true)
    setRecipientDetails([recipiantObject, ...recipientDetails])
    setRecipient(recipient + 1)
  }

  const getData = async () => {
    setIsLoadding(true)
    const qurry =
      `
    query {
      getGiftCartProductByStore(sku: "giftcard-001") {
          id
          sku
          name
          price
          description
          type_id
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

  useEffect(() => {
    getData()
  }, [])

  const onAddTocart = async () => {
    const fromData = new FormData()
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
            am_giftcard_message: "${message}",
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
        console.log("Add to catd details ::::::: ", response?.data)

      } else {
        console.log("QUTE ID NOT FOUND")
      }

    } catch (error) {
      console.log("ADD TO CART ERROR :::::::", error)

    }
  }


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
    userData

  }
}

export default useGiftHook

