import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import CommanHeader from '../../components/ComanHeader'
import { ResponsiveSize } from '../../utils/utils'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Ar, En } from '../../constants/localization'
import { EXTRASTR, NUMBER } from '../../constants/constants'
import { WalletHistoryAPI } from '../../api/axios.api'
import CusLoader from '../../components/CustomLoader'

const PaymentDetails = (props) => {
  const lang = useSelector(state => state?.lang?.data)
  const lable = lang == NUMBER.num0 ? Ar : En
  const navigation = useNavigation()
  const [loadding, setLoadding] = useState(false)
  const [ststus, setStatus] = useState()
  const [data, setData] = useState()

  // console.log("=======> ", props.route.params.lable)


  const getData = async () => {

    setLoadding(true)

    const data =
      ` 
         {
    getCustomerWalletOrderViewById(id : ${props?.route?.params?.lable}){
        entity_id
        customer_id
        amount
        status
        action
        order_id
        transaction_at
        currency_code
        curr_amount
        transaction_note
        sender_id
        sender_type
        bank_details
        reference
        type_data
        payment_method
    }
}
`

    try {
      const res = await WalletHistoryAPI(data, lang)
      // console.log("Response ====> ", res?.data?.data?.getCustomerWalletOrderViewById)
      setData(res?.data?.data?.getCustomerWalletOrderViewById)
      const items = res?.data?.data?.getCustomerWalletOrderViewById
      const temp = items?.status == "0" ? lable?.PENDING : items?.status == "1" ? lable?.APPROVED : lable.CANCELLED
      const str = items?.transaction_note
      // const parts = str.slice(" ")
      console.log("str ==> ", str)
      setStatus(temp)
      setLoadding(false)

    } catch (error) {
      console.log("Error ======= > ", error)
      setLoadding(false)
    }

  }

  useEffect(() => {
    getData()
  }, [])





  return (
    
    <View style={styles.mainView}>
      <CommanHeader name={lable?.WalletHistoryDetail} navigation={navigation} lang={lang} />
      <View style={styles.container}>
        <View style={styles.containerView}>
          <View style={styles.headerView}>

            <View style={[styles.innerView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
              <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(40) }]}>{lable?.Reference + " :"}</Text>
              <Text style={[styles.rightScreen, lang == NUMBER.num0 && { marginRight: ResponsiveSize(0) }]}>{props?.route?.params?.refID}</Text>
            </View>

            <View style={[styles.innerView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
              <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(40) }]}>{lable.Amount + " :"}</Text>
              <Text style={[styles.rightScreen, lang == NUMBER.num0 && { marginRight: ResponsiveSize(0) }]}>{props?.route?.params?.amount}</Text>
            </View>

            <View style={[styles.innerView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
              <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(40) }]}>{lable?.Status + " :"}</Text>
              <Text style={[styles.rightScreen, , lang == NUMBER.num0 && { marginRight: ResponsiveSize(0) }, { color: COLOR.liteGreen, fontWeight: FONTWEGHIT.font600 }]}>{props?.route?.params?.status}</Text>
            </View>

          </View>

          <View style={styles.orderDetails}>
            <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { justifyContent: 'flex-end' }]}>
              <Text style={styles.headerText}>{lable?.WalletDetail}</Text>
            </View>
            <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
              <Text style={[styles.leftTex, lang == NUMBER.num0 && { textAlign: EXTRASTR?.right, width: ResponsiveSize(200) }]}>{lable?.Amount}</Text>
              <Text style={styles.rightText}>{data?.curr_amount}</Text>
            </View>
            <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
              <Text style={[styles.leftTex, lang == NUMBER.num0 && { textAlign: EXTRASTR?.right, width: ResponsiveSize(200) }]}>{lable?.Action}</Text>
              <Text style={styles.rightText}>{data?.action}</Text>
            </View>
            <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
              <Text style={[styles.leftTex, lang == NUMBER.num0 && { textAlign: EXTRASTR?.right, width: ResponsiveSize(200) }]}>{lable?.Type}</Text>
              <Text style={styles.rightText}>{data?.type_data}</Text>
            </View>
            <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
              <Text style={[styles.leftTex, lang == NUMBER.num0 && { textAlign: EXTRASTR?.right, width: ResponsiveSize(200) }]}>{lable?.Reference}</Text>
              <Text style={styles.rightText}>{data?.reference}</Text>
            </View>
            <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
              <Text style={[styles.leftTex, lang == NUMBER.num0 && { textAlign: EXTRASTR?.right, width: ResponsiveSize(200) }]}>{lable?.TransactionAt}</Text>
              <Text style={styles.rightText}>{data?.transaction_at}</Text>
            </View>
            <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
              <Text style={[styles.leftTex, lang == NUMBER.num0 && { textAlign: EXTRASTR?.right, width: ResponsiveSize(200) }]}>{lable?.TransactionNote}</Text>
              <Text numberOfLines={2} style={[styles.rightText , {width:ResponsiveSize(300)} ,lang == NUMBER.num0 && {textAlign:'right'} ]}>{data?.transaction_note}</Text>
            </View>
            <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
              <Text style={[styles.leftTex, lang == NUMBER.num0 && { textAlign: EXTRASTR?.right, width: ResponsiveSize(200) }]}>{lable?.Status}</Text>
              <Text style={styles.rightText}>{ststus}</Text>
            </View>
            <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
              <Text style={[styles.leftTex, lang == NUMBER.num0 && { textAlign: EXTRASTR?.right, width: ResponsiveSize(200) }]}>{lable?.PaymentMethod}</Text>
              <Text style={styles.rightText}>{data?.payment_method}</Text>
            </View>
          </View>

        </View>


      </View>

     

      {loadding &&
        <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
          <CusLoader />
        </View>
      }
    </View>
  )
}

export default PaymentDetails

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.white
  },
  container: {
    padding: ResponsiveSize(20),
    flex: 1,
  },
  containerView: {
    // height: ResponsiveSize(500),
    width: "100%",
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.primaray,
    borderRadius: ResponsiveSize(20)
  },
  headerView: {
    // height: ResponsiveSize(200),
    padding: ResponsiveSize(20),
    backgroundColor: "#FFF3F4",
    borderRadius: ResponsiveSize(20),
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.primaray,
  },
  innerView: {
    flexDirection: ALINE.row,
    alignItems: ALINE.center,
    marginLeft: ResponsiveSize(30),
    padding: ResponsiveSize(10)
  },
  leftText: {
    fontSize: ResponsiveSize(23),
    fontWeight: FONTWEGHIT.font600,
    color: COLOR.primaray,
    width: ResponsiveSize(150)
  },
  rightScreen: {
    marginLeft: ResponsiveSize(20),
    color: COLOR.black
  },
  itemsDetaisCommon: {
    // height: ResponsiveSize(80),
    borderBottomWidth: ResponsiveSize(1),
    width: "100%",
    borderColor: COLOR.gray,
    alignItems: ALINE.center,
    padding: ResponsiveSize(20),
    flexDirection: ALINE.row
  },
  headerText: {
    color: COLOR.primaray,
    fontSize: ResponsiveSize(23),
    fontWeight: FONTWEGHIT.font600,
  },
  leftTex: {
    color: "#00000070",
    width: ResponsiveSize(200)
  },
  rightText: {
    color: COLOR.black,
    fontWeight: FONTWEGHIT.font600
  },

})