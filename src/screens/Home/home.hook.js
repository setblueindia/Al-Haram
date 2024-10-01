import { Platform, Linking } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ASYNCSTORAGE } from '../../constants/constants'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { AppUpadateAPI, ExpireToken, ProductlistCount, Storetoken, getCetergourisList, getProductDetails } from '../../api/axios.api'
import { addCetegoriesData } from '../../redux/Slices/CetegoriesList'
import { addHomeScreenData } from '../../redux/Slices/HomeScreenData'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { addProduct } from '../../redux/Slices/AddToCartSlice'
import DeviceInfo from 'react-native-device-info'


const useHomeHook = (props) => {
  const CetegoriesData = useSelector(state => state?.CetegoriesList?.data?.children)
  const userData = useSelector(state => state.userData.data)
  const loder = useSelector(state => state?.Categories?.loader)
  const [isLoadding, setIsLoadding] = useState(loder)
  const home = useSelector(state => state?.HomeScreen?.data)
  const lang = useSelector(state => state.lang)
  const navigation = useNavigation()
  const HomeScreeData = home?.product_slider
  const Sliderdata = home?.banner_slider
  const dispatch = useDispatch()
  const [refreshing, setRefreshing] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const scrollViewRef = useRef(null);
  const [bannerUrl, setBannerUrl] = useState()
  const [giftCart, setGiftCart] = useState()
  const [wpNumber, setWPNumber] = useState()

  const version = DeviceInfo.getVersion()
  // const version = "0.0.0"
  const [showPop, setShowPop] = useState(false)
  const [mes, setMes] = useState()

  const focus = useIsFocused()

  const UpdateVersion = async () => {
    const type = Platform.OS == "ios" ? "ios" : "android"
    const data = `
{
  deviceVersionCheck(device_version : "${version}" device_type : ${type}){
      status
      message
  }
}
`
    try {
      const result = await AppUpadateAPI(data, lang?.data)
      if (result?.data?.data?.deviceVersionCheck?.status) {
        // SHOWTOTS(result?.data?.data?.deviceVersionCheck?.message)
      } else {
        setShowPop(true)
        setMes(result?.data?.data?.deviceVersionCheck?.message)
        console.log("result?.data?.data?.deviceVersionCheck?.message ::::::: ", result?.data)
      }
    } catch (error) {
      console.log("UpdateVersion ERROR :::::: ", error)
    }
  }


  const openPlayStore = () => {
    const url = Platform.OS ==
      'ios' ? "https://apps.apple.com/in/app/alharamstores-%D8%A7%D9%84%D9%87%D8%B1%D9%85/id1562821620" :
      'https://play.google.com/store/apps/details?id=com.v2ideas.alharam';
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  useEffect(() => {
    focus && UpdateVersion()
  }, [focus])





  const CetegouriesList = async () => {
    // dispatch(updateLoader(true))
    setIsLoadding(true)
    const params = `
    {
      categoryList(filters: {ids: {in: ["2"]}}) {
        children_count
        children {
          id
          level
          name
          path
          url_path
          url_key
          image
          description
          mobile_thumbnail
          mobile_circle_thumbnail
          include_in_menu
          mobile_image
          display_mode
          children {
            id
            level
            name
            path
            url_path
            url_key
            image
            description
            mobile_thumbnail
            mobile_circle_thumbnail
            include_in_menu
            mobile_image
            children {
                id
                level
                name
                path
                url_path
                url_key
                image
                description
                mobile_thumbnail
                mobile_circle_thumbnail
                include_in_menu
                mobile_image
            }
          }
        }
      }
    }
    `
    try {
      const res = await getCetergourisList(params, lang?.data)
      if (res?.status == '200') {
        dispatch(addCetegoriesData(res?.data?.data?.categoryList[0]))
        setIsLoadding(false)
        // dispatch(updateLoader(false))
      }

    } catch (error) {
      console.log("CETEGORIERS LIST ERROR ::::::::::::::: ", error)
      setIsLoadding(false)
      // dispatch(updateLoader(false))

    }
  }

  const ProductDetails = async () => {
    // dispatch(updateLoader(true))
    setIsLoadding(true)
    const params = `
    {
      getHomePageData(store_id : ${lang?.data}){
          gdpr
          whatapps_chat
          store_id
          wallet_checkout_enable
          whatapps_chat
          category_list_page_size
          wallet_checkout_enable
          top_banner
          banner_slider{
              image
              category_id
          }
          product_slider{
              title
              key
              is_viewAll
              view_all_category_id
              banner_url
              items{
                  id
                  sku
                  name
                  price
                  special_price
                  image
                  special_offer
                  is_new_badge
              }
          }
      }
  }
    `
    try {
      const res = await getProductDetails(params, lang?.data)
      if (res?.status == '200') {
        setWPNumber(res?.data?.data?.getHomePageData?.whatapps_chat)
        setBannerUrl(res?.data?.data?.getHomePageData?.top_banner)
        setGiftCart(res?.data?.data?.getHomePageData?.gift_card)
        dispatch(addHomeScreenData(res?.data?.data?.getHomePageData))
        setIsLoadding(false)
      }

    } catch (error) {
      console.log("CETEGORIERS LIST ERROR ::::::::::::::: ", error)
      setIsLoadding(false)
      // dispatch(updateLoader(false))
    }
  }
  useEffect(() => {
    SaveToken()
  }, [])

  const SaveToken = async () => {
    const token = await AsyncStorage.getItem(ASYNCSTORAGE.FCMToken)
    if (userData?.id) {
      if (token) {
        const storyViewdata = `
        mutation{
          pushNotificationDeviceTokenSave(input:{
             device_id: "${token}"
             customer_id: ${userData?.id}
             email: "${userData?.email}"
             device_type: ${Platform.OS == "ios" ? "ios" : "android"}
         }){
             status
             message
         }
        }
            `
        try {
          const resp = userData && await Storetoken(storyViewdata, lang?.data)
        } catch (error) {
          console.log("SAVE TOKE ERROR :::::::::::::::: ", error)
        }
      }


    }

  }


  useEffect(() => {
    CetegouriesList()
    ProductDetails()
  }, [lang])


  const TokenExpired = async () => {
    if (userData) {
      const fromdata = new FormData()
      const result = await ExpireToken(fromdata, lang?.data)
    }
  }

  useEffect(() => {
    TokenExpired()
  }, [navigation])

  const onRefresh = () => {
    setRefreshing(true);
    CetegouriesList()
    ProductDetails()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const PoductCount = async () => {
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
        const result = await ProductlistCount(countData, lang?.data)
        const arrOFItems = result?.data?.data?.customerCart?.items
        const totalQuantity = arrOFItems?.length > 0 && arrOFItems?.reduce((sum, item) => sum + item.quantity, 0);
        totalQuantity > 0 ? dispatch(addProduct(totalQuantity)) : dispatch(addProduct(0))
      } else {
        dispatch(addProduct(0))
      }
    } catch (error) {
      console.log("GET PRODUCT LIST ERROR ::::::::::::: ", error)
      dispatch(addProduct(0))
    }
  }

  useEffect(() => {
    PoductCount()
  }, [])

  const openWhatsApp = () => {
    const phoneNumber = wpNumber;
    const url = "whatsapp://send?phone=" + phoneNumber + "&text=hi"
    Linking.openURL(url).catch((err) => openWhatsApp2());
  };

  const openWhatsApp2 = () => {
    // const phoneNumber = '8238155248'; 
    const phoneNumber = '966920033093';
    const url = "https://wa.me//966920033093";
    Linking.openURL(url).catch((err) => console.error("Couldn't open WhatsApp", err));
  };


  return {
    HomeScreeData,
    lang,
    Sliderdata,
    navigation,
    CetegoriesData,
    loder,
    isLoadding,
    CetegouriesList,
    ProductDetails,
    onRefresh,
    setRefreshing,
    refreshing,
    handleScroll,
    scrollViewRef,
    showScrollToTop,
    showPop,
    mes,
    bannerUrl,
    giftCart,
    setShowPop,
    scrollToTop,
    openPlayStore,
    openWhatsApp
  }
}

export default useHomeHook
