import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { NUMBER } from '../../constants/constants'
import { getOrderDetailsList } from '../../api/axios.api'


const useCategroiesHook = () => {
  // const data = useSelector(state => state?.Categories)
  const CategoriesData = useSelector(state => state?.CetegoriesList?.data?.children)
  const userData = useSelector(state => state?.userData)
  const navigation = useNavigation()
  const lang = useSelector(state => state.lang.data)

  // console.log("=============> ", CategoriesData)
  // const CategoriesData = [
  //   {
  //     title: lang == NUMBER.num1 ? "Women's Fashion" : "على الموضة للنساء",
  //     sub_category: [
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/women-E-01.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         "image": "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/women-E-01.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         image: "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       // {
  //       //   title: "Accessories",
  //       //   image: "https://beta.alharamstores.com/media/women-E-13.jpg",
  //       // }

  //     ]
  //   },
  //   {
  //     title: lang == NUMBER.num1 ? "Kids Fashion" : "أزياء الاطفال",
  //     sub_category: [
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/KIDS-E-02.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/KIDS-E-01.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         "image": "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/KIDS-E-06.jpg",
  //       },
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/KIDS-E-05.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/KIDS-E-04.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         "image": "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },

  //     ]
  //   },
  //   {
  //     title: lang == NUMBER.num1 ? "Men's Fashion" : "أزياء رجالية",
  //     sub_category: [
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/MEN-E-03.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/MEN-E-01.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         image: "https://beta.alharamstores.com/media/MEN-E-07.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/MEN-E-04.jpg",
  //       },
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/MEN-E-05.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/MEN-E-08.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         image: "https://beta.alharamstores.com/media/MEN-E-09.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/MEN-E-02.jpg",
  //       },

  //     ]
  //   },
  //   {
  //     title: lang == NUMBER.num1 ? "Baby Fashion & Supplies" : "أزياء ومستلزمات الأطفال",
  //     sub_category: [
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/women-E-01.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         "image": "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/women-E-04.jpg",
  //       },
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/women-E-01.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         "image": "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/women-E-04.jpg",
  //       },

  //     ]
  //   },
  //   {
  //     title: lang == NUMBER.num1 ? "Home Furnishing" : "تأثيث المنزل",
  //     sub_category: [
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/women-E-01.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         "image": "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/women-E-04.jpg",
  //       },
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/women-E-01.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         "image": "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/women-E-04.jpg",
  //       },

  //     ]
  //   },
  //   {
  //     title: lang == NUMBER.num1 ? "Medical Dress" : "اللباس الطبي",
  //     sub_category: [
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/women-E-01.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         "image": "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/women-E-04.jpg",
  //       },
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/women-E-01.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         "image": "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/women-E-04.jpg",
  //       },

  //     ]
  //   },
  //   {
  //     title: lang == NUMBER.num1 ? "School" : "مدرسة",
  //     sub_category: [
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/women-E-01.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         "image": "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/women-E-04.jpg",
  //       },
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/women-E-01.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         "image": "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/women-E-04.jpg",
  //       },

  //     ]
  //   },
  //   {
  //     title: lang == NUMBER.num1 ? "Baby Fashion & Supplies" : "أزياء ومستلزمات الأطفال",
  //     sub_category: [
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/women-E-01.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         "image": "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/women-E-04.jpg",
  //       },
  //       {
  //         name: "Trousers",
  //         image: "https://beta.alharamstores.com/media/women-E-01.jpg",
  //       },
  //       {
  //         title: "Top",
  //         image: "https://beta.alharamstores.com/media/women-E-02.jpg",
  //       },
  //       {
  //         title: "Clothing",
  //         "image": "https://beta.alharamstores.com/media/women-E-03.jpg",
  //       },
  //       {
  //         title: "Gown",
  //         image: "https://beta.alharamstores.com/media/women-E-04.jpg",
  //       },

  //     ]
  //   }
  // ]

  const getOrderDetails = async () => {
    try {
      const rep = await getOrderDetailsList()
    } catch (error) {
      console.log("ORDER DETAILS ERROR :::::::::::::::::: ", error)
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
  }
}

export default useCategroiesHook

const styles = StyleSheet.create({})