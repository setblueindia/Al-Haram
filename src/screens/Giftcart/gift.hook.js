
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import {
  ExpireToken,
  ProductlistCount,
  getGiftCartdInfo,
  giftAddToCart
} from '../../api/axios.api'
import { imageURL } from '../../constants/axios.url'
import { SHOWTOTS, emaileRegxp } from '../../utils/utils'
import { addProduct } from '../../redux/Slices/AddToCartSlice'
import { Ar, En } from '../../constants/localization'
import { NAVIGATION, NUMBER } from '../../constants/constants'


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
  const [price, setPrice] = useState()
  const [selectIndex, setSelectIndex] = useState()
  const [inputPrice, setInputPrice] = useState()
  const [error, setError] = useState(false)
  const [ondata, setOnData] = useState(1)
  const [recipientDetails, setRecipientDetails] = useState([])
  const [qty, setQty] = useState(1)
  const [info, setInfo] = useState(false)
  const [coustomAmount, setCoutomerAmount] = useState()
  const [date, setDate] = useState(new Date())




  const dispatch = useDispatch()


  const langues = lang == NUMBER?.num0 ? Ar : En


  const recipiantObject = {
    date: date,
    am_giftcard_sender_name: name?.replace(/[\n\r\t]/g, ''),
    am_giftcard_recipient_name: recipientName?.replace(/[\n\r\t]/g, ''),
    am_giftcard_recipient_email: recipientEmail?.replace(/[\n\r\t]/g, ''),
    mobilenumber: recipientNumber?.replace(/[\n\r\t]/g, ''),
    am_giftcard_message: message?.replace(/[\n\r\t]/g, '')
  }


  const tempName = userData?.firstname + " " + userData?.lastname
  let phoneNumber = userData?.mobile;
  let updatedNumber = phoneNumber?.replace("+966", "");

  useEffect(() => {

    if (info) {
      setRecipientEmail(userData?.email)
      setName(tempName)
      setRecipientName(tempName)
      setRecipientNumber(updatedNumber == "0" ? "" : updatedNumber)
    } else {
      setRecipientEmail()
      setName()
      setRecipientName()
      setRecipientNumber()
    }


  }, [info == true, info == false])

  useEffect(() => {
    setRecipientDetails([recipiantObject, ...recipientDetails])
  }, [])

  useEffect(() => {
    getData()
  }, [])



  const onRecipientPress = () => {
    const {
      am_giftcard_sender_name,
      am_giftcard_recipient_name,
      am_giftcard_recipient_email,
      mobilenumber,
    } = recipiantObject || {};

    const allFieldsEmpty =
      !am_giftcard_sender_name &&
      !am_giftcard_recipient_name &&
      !am_giftcard_recipient_email &&
      !mobilenumber;

    if (allFieldsEmpty) {
      const thentemprecipiantObject = {
        date: new Date(),
        am_giftcard_sender_name: name?.replace(/[\n\r\t]/g, ''),
        am_giftcard_recipient_name: recipientName?.replace(/[\n\r\t]/g, ''),
        am_giftcard_recipient_email: recipientEmail?.replace(/[\n\r\t]/g, ''),
        mobilenumber: recipientNumber?.replace(/[\n\r\t]/g, ''),
        am_giftcard_message: message?.replace(/[\n\r\t]/g, '')
      }

      setIsLoadding(true);
      setError(false);
      setDate(new Date());

      setTimeout(() => {
        setRecipientDetails([thentemprecipiantObject, ...recipientDetails]);
        setRecipient(recipient + 1);
        setMessage();
        setRecipientName();
        setRecipientEmail();
        setName();
        setRecipientNumber();
        setIsLoadding(false);
      }, 1000);
    } else {

      if (!am_giftcard_sender_name) {
        setError(true);
      } else if (!am_giftcard_recipient_name) {
        setError(true);
      } else if (am_giftcard_recipient_email && !emaileRegxp.test(recipientEmail)) {
        SHOWTOTS(langues?.Invalidemailaddress);
      } else if (!mobilenumber) {
        setError(true);
      } else if (!recipientNumber || recipientNumber.length < 9 || recipientNumber.length > 10) {
        SHOWTOTS(langues?.Numbercontainsmustbe9digits);
      } else {

        const temprecipiantObject = {
          date: new Date(),
          am_giftcard_sender_name: name?.replace(/[\n\r\t]/g, ''),
          am_giftcard_recipient_name: recipientName?.replace(/[\n\r\t]/g, ''),
          am_giftcard_recipient_email: recipientEmail?.replace(/[\n\r\t]/g, ''),
          mobilenumber: recipientNumber?.replace(/[\n\r\t]/g, ''),
          am_giftcard_message: message?.replace(/[\n\r\t]/g, '')
        }


        setIsLoadding(true);
        setError(false);
        setDate(new Date());
        setTimeout(() => {
          setRecipientDetails([temprecipiantObject, ...recipientDetails]);
          setRecipient(recipient + 1);
          setMessage();
          setRecipientName();
          setRecipientEmail();
          setName();
          setRecipientNumber();
          setIsLoadding(false);
        }, 1000);
      }
    }

  }

  const removeData = (id) => {

    const temData = recipientDetails.filter((item) => item.date !== id);
    setRecipient(recipient - 1)
    setRecipientDetails(temData)

  }

  const getData = async () => {
    setIsLoadding(true)
    const qurry =
      `
    query {
      getGiftCartProductByStore(sku: "${giftCardID}" ) {
          id
          sku
          name
          price
          description
          type_id
          note
          media_gallery_entries
          {
              file
          }
          term_and_condition{
            title
            link
            icon
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
      // setPrice(giftCartInfo?.data?.data?.getGiftCartProductByStore?.am_giftcard_prices[0]?.value)
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
    setCoutomerAmount()
    setInputPrice()

  }

  const addWallte = async () => {
    if (inputPrice) {
      setSelectIndex()
      setCoutomerAmount(inputPrice)
      // setPrice(inputPrice)
    } else {
      SHOWTOTS(lang == NUMBER.num1 ? "Enter amount" : "أدخل المبلغ")
    }

  }

  const onAddTocart = async () => {

    let hasUndefinedValue = true;

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
          am_giftcard_recipient_email: "${recipient.am_giftcard_recipient_email ? recipient.am_giftcard_recipient_email : ""}",
          mobilenumber: "${recipient.mobilenumber}",
          am_giftcard_message: "${recipient.am_giftcard_message ? recipient.am_giftcard_message : ""}"
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
              am_giftcard_amount: ${price ? price : 0},
              am_giftcard_amount_custom: ${coustomAmount ? coustomAmount : 0},
              am_giftcard_image: ${data?.am_giftcard_code_image},      
              addon_recipients: [${addonRecipientsString}],
              is_date_delivery: 0,
              qty: ${qty}
          }) {
              success
              is_login
              message
          }
      }
        `

          const response = await giftAddToCart(Qurry2, lang)
          if (response?.data?.data?.addGiftCartToShoppingCart?.success) {
            SHOWTOTS(response?.data?.data?.addGiftCartToShoppingCart?.message)
            setQty(1)
            getProductCount()
            setMessage()
            setRecipientName()
            setRecipientEmail()
            setName()
            setRecipientNumber()
            setPrice()
            setCoutomerAmount()
            setSelectIndex()
            setRecipientDetails([recipiantObject2])
            setError(false)
            setInfo(false)
            setIsLoadding(false)

          } else {

            SHOWTOTS(response?.data?.data?.addGiftCartToShoppingCart?.message)
            if (!response?.data?.data?.addGiftCartToShoppingCart?.is_login) {
              navigation.navigate(NAVIGATION.Login, { type: true, shoeMes: response?.data?.data?.addGiftCartToShoppingCart?.message })
            }
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

    if (!price && !coustomAmount) {
      SHOWTOTS(lang == NUMBER.num1 ? "Enter amount" : "أدخل المبلغ")
      hasUndefinedValue = true
      return
    } else {
      recipientDetails1.forEach(item => {

        Object.values(item).forEach(value => {

          // if (!price && !coustomAmount) {
          //   SHOWTOTS(lang == NUMBER.num1 ? "Enter amount" : "أدخل المبلغ")
          //   hasUndefinedValue = true
          // }
          if (!item?.am_giftcard_recipient_name) {
            setError(true)
            hasUndefinedValue = true
          }
          else if (!item?.am_giftcard_sender_name) {
            setError(true)
            hasUndefinedValue = true
          }
          else if (item?.am_giftcard_recipient_email && !emaileRegxp.test(item?.am_giftcard_recipient_email)) {
            SHOWTOTS(langues?.Invalidemailaddress)
            hasUndefinedValue = true;
            setError(true)
          }
          else if (!item?.mobilenumber) {
            setError(true)
            hasUndefinedValue = true
          }
          else if (item?.mobilenumber?.length < 9 || item?.mobilenumber?.length > 10) {
            SHOWTOTS(langues?.Numbercontainsmustbe9digits)
            hasUndefinedValue = true;
          }
          else {
            hasUndefinedValue = false
          }
        });
      });
    }



    if (!hasUndefinedValue) {
      tempInner()
    }

  }

  useEffect(() => {
    getProductCount()
  }, [])

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
        const result = await ProductlistCount(countData, lang)
        dispatch(addProduct(result?.data?.data?.getQuoteItemCount))
        // const arrOFItems = result?.data?.data?.customerCart?.items
        // const totalQuantity = arrOFItems?.reduce((sum, item) => sum + item?.quantity, 0);
        // console.log("totalQuantity :::::", result?.data?.data)
        // totalQuantity > 0 ? dispatch(addProduct(totalQuantity)) : dispatch(addProduct(0))
        // } else {
        //   dispatch(addProduct(0))
        // }
      } catch (error) {
        console.log("GET PRODUCT LIST ERROR ::::::::::::: ", error)
        dispatch(addProduct(0))
      }
    } else {
      console.log("::::::: QUOTE ID NOT FOUND :::::::")
    }
  }




  return {
    navigation,
    lang,
    recipientDetails,
    slider,
    data,
    isLoadding,
    price,
    inputPrice,
    userData,
    name,
    recipientName,
    recipientNumber,
    message,
    recipientEmail,
    ondata,
    giftCardID,
    qty,
    coustomAmount,
    info, setInfo,
    setName,
    setRecipientName,
    setRecipientEmail,
    setMessage,
    setRecipientNumber,
    onRecipientPress,
    onAddTocart,
    pricvePress,
    setInputPrice,
    addWallte,
    setOnData,
    setQty,
    removeData,
    setPrice,
    selectIndex,
    error
  }
}

export default useGiftHook

