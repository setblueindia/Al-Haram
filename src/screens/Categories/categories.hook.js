import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { NUMBER } from '../../constants/constants'
import { getMobaileCetegouries, getOrderDetailsList } from '../../api/axios.api'


const useCategroiesHook = () => {
  const [CategoriesData, setCategoriesData] = useState()
  const userData = useSelector(state => state?.userData)
  const [isLoadding, setIsLoadding] = useState(false)
  const navigation = useNavigation()
  const lang = useSelector(state => state.lang.data)

  const getOrderDetails = async () => {
    const formData = new FormData()
    formData.append("store_id", lang)
    setIsLoadding(true)
    try {
      const rep = await getMobaileCetegouries(formData)
      if (rep?.data?.status == 1) {
        setCategoriesData(rep?.data?.data)
        setIsLoadding(false)
      } else {
        setIsLoadding(false)
      }
    } catch (error) {
      setIsLoadding(false)
      console.log('API Error:', error);
        if (error.response) {
            console.log('Response Error:', error.response.data);
        } else if (error.request) {
            console.log('Request Error:', error.request);
        } else {
            console.log('Other Error:', error.message);
        }
    }
  }


  useEffect(() => {
    getOrderDetails()
  }, [])


  return {
    CategoriesData,
    navigation,
    lang,
    userData,
    isLoadding
  }
}

export default useCategroiesHook

const styles = StyleSheet.create({})