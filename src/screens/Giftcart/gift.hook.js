import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const useGiftHook = () => {
  const navigation = useNavigation()
  const lang = useSelector(state => state?.lang?.data)
  const [recipient, setRecipient] = useState(1)


  const [name, setName] = useState()
  const [recipientName, setRecipientName] = useState()
  const [recipientEmail, setRecipientEmail] = useState()
  const [recipientNumber, setRecipientNumber] = useState()
  const [message, setMessage] = useState()

  const [recipientDetails, setRecipientDetails] = useState([])


  const recipiantObject = {
    id: recipient,
    name: name,
    recipientName: recipientName,
    recipientEmail: recipientEmail,
    recipientNumber: recipientNumber,
    message: recipientEmail
  }


  useEffect(() => {
    setRecipientDetails([recipiantObject , ...recipientDetails])
  }, [])


  const onRecipientPress = () => {
    setRecipientDetails([recipiantObject, ...recipientDetails])
    setRecipient(recipient + 1)  
  }

  const onAddTocart = () => {



  }

  // console.log(lang)
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
    recipient,
    recipientDetails
  }
}

export default useGiftHook

