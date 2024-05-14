import {  Text, View } from 'react-native'
import React from 'react'
import { styles } from './notification.style'
import CustomeHeader from '../../components/CustomeHeader'

const Notification = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.CustomeHeaderView}>
      <CustomeHeader search={true} like={true} shoppingcart={true} />
      </View>
    </View>
  )
}

export default Notification
