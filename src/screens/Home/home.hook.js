import { Platform } from 'react-native'
import  { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ASYNCSTORAGE } from '../../constants/constants'
import { useNavigation } from '@react-navigation/native'
import {  ExpireToken, ProductlistCount, Storetoken, getCetergourisList, getProductDetails } from '../../api/axios.api'
import { addCetegoriesData } from '../../redux/Slices/CetegoriesList'
import { addHomeScreenData } from '../../redux/Slices/HomeScreenData'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { addProduct } from '../../redux/Slices/AddToCartSlice'

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
          category_list_page_size
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
        dispatch(addHomeScreenData(res?.data?.data?.getHomePageData))
        setIsLoadding(false)
        // dispatch(updateLoader(false))
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
        const result = await ProductlistCount(countData , lang?.data)
        const arrOFItems = result?.data?.data?.customerCart?.items
        const totalQuantity = arrOFItems?.length > 0 && arrOFItems?.reduce((sum, item) => sum + item.quantity, 0);
        totalQuantity > 0 ?  dispatch(addProduct(totalQuantity))  : dispatch(addProduct(0)) 
      }else{
        dispatch(addProduct(0)) 
      }
    } catch (error) {
      console.log("GET PRODUCT LIST ERROR ::::::::::::: ", error)
      dispatch(addProduct(0)) 
    }
  }

  useEffect(()=>{
    PoductCount()
  }, [])



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
    scrollToTop
  }
}

export default useHomeHook
