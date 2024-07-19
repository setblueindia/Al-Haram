import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { CartListCount, getCetergourisList, getProductDetails } from '../../api/axios.api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addLangCode } from '../../redux/Slices/LangSlices';
import { ASYNCSTORAGE, NAVIGATION } from '../../constants/constants';
import { addUserData } from '../../redux/Slices/UserData.slice';
import { AddToCart } from '../../constants/axios.url';
import { addProduct } from '../../redux/Slices/AddToCartSlice';
import { useNavigation } from '@react-navigation/native';
import { addCetegoriesData } from '../../redux/Slices/CetegoriesList';
import { addHomeScreenData } from '../../redux/Slices/HomeScreenData';

const useSplshHook = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(NAVIGATION.DrawerNavigation );
    }, 3000);
  }, []);

  useEffect(() => {
    setLang()
    setUserData()
  }, []);

  const setLang = async () => {
    try {
      const result = await AsyncStorage.getItem(ASYNCSTORAGE.Langues);
      !result && setLangues();
      if(result){
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
      getData(response?.token)
    } catch (error) {
      console.log("SPLASH SCREEN SET USER ERROR ======> ", error)
    }
  }


  const getData = async (token) => {
    const result = await AsyncStorage.getItem(ASYNCSTORAGE.Langues);
    const fromData = new FormData()
    fromData.append("token", token)
    fromData.append("store_id", result)
    try {
      const response = await CartListCount(fromData)
      if (response?.status == "200") {
        const count = parseInt(response?.data?.data?.items_qty)
        count ? dispatch(addProduct(count)) : dispatch(addProduct(0))
      } else {
        console.log("else respomnse :::::::::::::", response)
        dispatch(addProduct(0))
      }

    } catch (error) {
      dispatch(addProduct(0))
    }
  }

  const CetegouriesList = async (lang) =>{
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
      const res = await getCetergourisList(params , lang)
      if(res?.status == '200' ) {
        dispatch(addCetegoriesData(res?.data?.data?.categoryList[0]))
      }
  
    } catch (error) {
      console.log("CETEGORIERS LIST ERROR ::::::::::::::: " , error)
    } 
  }

  const ProductDetails = async (lang) =>{
    const params = `
    {
      getHomePageData(store_id : 1){
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
      const res = await getProductDetails(params , lang)
      if(res?.status == '200' ) {
        dispatch(addHomeScreenData(res?.data?.data?.getHomePageData))
      }
  
    } catch (error) {
      console.log("CETEGORIERS LIST ERROR ::::::::::::::: " , error)
    } 
  }

  
  return {

  }
}

export default useSplshHook

const styles = StyleSheet.create({})