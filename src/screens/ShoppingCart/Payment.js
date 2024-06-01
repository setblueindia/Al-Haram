import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import { EXTRASTR, NUMBER } from '../../constants/constants'

const Payment = ({ data, lang }) => {

  const [COD, setCOD] = useState(false)
  const [credit, setCredit] = useState(false)


  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.mainView}>
        <View style={styles.delevryView}>
          <Text numberOfLines={2} style={styles.delevrydateText}>Estimated Shipment Delivery Date : </Text>
          <Text numberOfLines={2} style={styles.delevrydateText}>17 jan - 24 jan</Text>
        </View>

        <View style={styles.paymentView}>
          <Text style={[styles.palymentopationText, lang == NUMBER.num0 && { textAlign: "right" }]}>{data?.PaymentOptions}</Text>

          <TouchableOpacity
            onPress={() => { setCOD(true), setCredit(false) }}
            style={[styles.CODView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
            <View style={[styles.fillView, COD &&
            {
              backgroundColor: COLOR.primaray,
              borderColor: COLOR.primaray,
            }]}></View>
            <Text style={[styles.text, COD && { color: COLOR.primaray }, lang == NUMBER.num0 && { marginRight: ResponsiveSize(10) }]}>{data?.COD}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { setCOD(false), setCredit(true) }}
            style={[styles.CODView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
            <View style={[styles.fillView, credit &&
            {
              backgroundColor: COLOR.primaray,
              borderColor: COLOR.primaray,
            }]}></View>
            <Text style={[styles.text, credit && { color: COLOR.primaray }, lang == NUMBER.num0 && { marginRight: ResponsiveSize(10) }]}>{data?.credite}</Text>
          </TouchableOpacity>

          <View style={styles.lineView} />

          <View style={[styles.textView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
            <Text style={styles.leftText}>{data?.Subtotal}</Text>
            <Text style={styles.price}>SAR 131</Text>
          </View>
          <View style={[styles.textView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
            <Text style={styles.leftText}>{data?.ShippingHandling}</Text>
            <Text style={styles.price}>SAR 29</Text>
          </View>
          <View style={[styles.textView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
            <Text style={styles.leftText}>{data?.Tax}</Text>
            <Text style={styles.price}>SAR 21</Text>
          </View>
        </View>
        <View style={[styles.FinaltextView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
          <Text style={[styles.leftText, { color: COLOR.primaray, fontWeight: FONTWEGHIT.font600, fontSize: ResponsiveSize(25) }]}>{data?.OrderTotal}</Text>
          <Text style={[styles.price, { color: COLOR.primaray, fontWeight: FONTWEGHIT.font600, fontSize: ResponsiveSize(25) }]}>SAR 160</Text>
        </View>

        <Text style={[styles.coupansText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{lang == NUMBER.num0 ? "جميع الكوبونات" : "All coupons"}</Text>
        <View style={[styles.coupanView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
          <View>
            <Text style={[styles.coupanName, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{"SPECIAL15"}</Text>
            <Text style={[styles.coupndes, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{lang == NUMBER.num0 ? " احصل على خصم 15% على جميع طلبات الدفع المسبق" : "Get 15% off on all prepaid orders"}</Text>
          </View>

          <TouchableOpacity style={styles.btnView}>
            <Text style={styles.btnText}>{lang == NUMBER.num0 ? "يتقدم" : "APPLY"}</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}

export default Payment

const styles = StyleSheet.create({
  delevryView: {
    height: ResponsiveSize(100),
    width: "100%",
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.primaray,
    borderRadius: ResponsiveSize(20),
    justifyContent: ALINE.center,
    paddingHorizontal: ResponsiveSize(30)
  },
  mainView: {
    padding: ResponsiveSize(20)
  },
  delevrydateText: {
    fontSize: ResponsiveSize(23),
    textAlign: 'justify',
    lineHeight: ResponsiveSize(30),
    color: COLOR.primaray

  },
  paymentView: {
    width: "100%",
    borderWidth: ResponsiveSize(1),
    borderColor: "#00000080",
    marginTop: ResponsiveSize(20),
    backgroundColor: "#00000009",
    padding: ResponsiveSize(20)
  },
  palymentopationText: {
    color: COLOR.black,
    fontSize: ResponsiveSize(25),

  },
  CODView: {
    flexDirection: ALINE.row,
    alignItems: ALINE.center,
    marginTop: ResponsiveSize(20),
    marginLeft: ResponsiveSize(10)
  },
  fillView: {
    height: ResponsiveSize(30),
    width: ResponsiveSize(30),
    borderRadius: ResponsiveSize(100),
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.black,
    marginRight: ResponsiveSize(10),
  },
  text: {
    fontSize: ResponsiveSize(23),
    color: COLOR.black
  },
  lineView: {
    width: "100%",
    height: ResponsiveSize(1),
    backgroundColor: "#00000080",
    alignSelf: ALINE.center,
    marginTop: ResponsiveSize(30),

  },
  textView: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
    marginTop: ResponsiveSize(20),
    width: "100%"
  },
  leftText: {
    color: "#00000080",
  },
  price: {
    color: COLOR.black,

  },
  FinaltextView: {
    backgroundColor: COLOR.white,
    marginTop: ResponsiveSize(20),
    width: "100%",
    height: ResponsiveSize(80),
    alignItems: ALINE.center,
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
    paddingHorizontal: ResponsiveSize(20),
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
    shadowColor: COLOR.black,
  },
  coupanView: {
    width: "100%",
    // height: ResponsiveSize(100),
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.primaray,
    borderStyle: 'dashed',
    marginTop: ResponsiveSize(10),
    padding: ResponsiveSize(20),
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
    alignItems: ALINE.center
  },
  coupansText: {
    color: COLOR.primaray,
    fontSize: ResponsiveSize(25),
    fontWeight: FONTWEGHIT.font600,
    marginTop: ResponsiveSize(20),
    marginLeft: ResponsiveSize(20)
  },
  coupanName: {
    color: COLOR.primaray,
    fontSize: ResponsiveSize(23),
    fontWeight: FONTWEGHIT.font600,

  },
  coupndes: {
    color: COLOR.black,
    width: ResponsiveSize(350)
  },
  btnView: {
    height: ResponsiveSize(60),
    width: ResponsiveSize(120),
    justifyContent: ALINE.center,
    alignItems: ALINE.center,
    borderRadius: ResponsiveSize(10),
    backgroundColor: COLOR.primaray
  },
  btnText: {
    color: COLOR.white,
    fontSize: ResponsiveSize(25),
    fontWeight: FONTWEGHIT.font600
  }


})