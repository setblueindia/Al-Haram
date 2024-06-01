import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../constants/style'
import CommanHeader from '../../components/ComanHeader'

const PaymentDetails = () => {
  return (
    <View style={styles.mainView}>
      <CommanHeader name={"Wallet History Detail"}/>
      <View style={styles.container}>

      </View>
    </View>
  )
}

export default PaymentDetails

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        color:COLOR.white
    },
    container:{
        
    }
})