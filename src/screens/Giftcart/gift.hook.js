import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const useGiftHook = () => {
const navigation = useNavigation()
const lang = useSelector(state => state?.lang?.data )
// console.log(lang)
  return {
    navigation,
    lang
  }
}

export default useGiftHook

