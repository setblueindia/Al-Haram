import { useEffect } from 'react'
import { getCetergourisList, getProductDetails } from '../../api/axios.api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { addLangCode } from '../../redux/Slices/LangSlices';
import { ASYNCSTORAGE, NAVIGATION } from '../../constants/constants';
import { addUserData } from '../../redux/Slices/UserData.slice';
import { useNavigation } from '@react-navigation/native';
import { addCetegoriesData } from '../../redux/Slices/CetegoriesList';
import { addHomeScreenData } from '../../redux/Slices/HomeScreenData';

const useSplshHook = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  useEffect(() => {
    setUserData()
    setTimeout(() => {
      navigation.replace(NAVIGATION.DrawerNavigation);
      // navigation.replace(NAVIGATION.Maintenance)
      setLang()
    }, 200);
  }, []);


  const setLang = async () => {
    try {
      const result = await AsyncStorage.getItem(ASYNCSTORAGE.Langues);
      !result && setLangues();
      if (result) {
        CetegouriesList(result)
        ProductDetails(result)
        dispatch(addLangCode(result));
      }
    } catch (error) { }
  };

  const setLangues = async () => {
    const langNum = '2';
    try {
      await AsyncStorage.setItem(ASYNCSTORAGE.Langues, langNum);
      CetegouriesList(langNum)
      ProductDetails(langNum)
      dispatch(addLangCode(langNum));
    } catch (error) { }
  };

  const setUserData = async () => {
    try {
      const rep = await AsyncStorage.getItem("UserData")
      const response = JSON.parse(rep)
      dispatch(addUserData(response))
    } catch (error) {
      console.log("SPLASH SCREEN SET USER ERROR ======> ", error)
    }
  }

  const CetegouriesList = async (lang) => {
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
      const res = await getCetergourisList(params, lang)
      if (res?.status == '200') {
        dispatch(addCetegoriesData(res?.data?.data?.categoryList[0]))
      }

    } catch (error) {
      console.log("CETEGORIERS LIST ERROR ::::::::::::::: ", error)
    }
  }

  const ProductDetails = async (lang) => {
    const params = `
    {
      getHomePageData(store_id : ${lang}){
          gdpr
          whatapps_chat
          store_id
          wallet_checkout_enable
          category_list_page_size
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
      const res = await getProductDetails(params, lang)
      if (res?.status == '200') {
        dispatch(addHomeScreenData(res?.data?.data?.getHomePageData))
      }
    } catch (error) {
      console.log("CETEGORIERS LIST ERROR ::::::::::::::: ", error)
    }
  }

  return {

  }
}

export default useSplshHook

