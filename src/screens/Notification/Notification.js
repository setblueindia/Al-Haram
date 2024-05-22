import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './notification.style'
import CustomeHeader from '../../components/CustomeHeader'
import { COLOR } from '../../constants/style'
import { ResponsiveSize } from '../../utils/utils'

const Notification = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.CustomeHeaderView}>
        <CustomeHeader search={true} like={true} shoppingcart={true} />

        <View style={{ justifyContent: 'center', alignItems: 'center' , height:"80%" }}>
          <Text style={{color:COLOR.black , fontSize:ResponsiveSize(30), lineHeight:ResponsiveSize(100)}}>No notification yet</Text>
        </View>
      </View>
    </View>
  )
}

export default Notification
