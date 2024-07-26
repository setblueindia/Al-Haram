import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import { EXTRASTR, ICON, NUMBER } from '../../constants/constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import CheackButton from '../../components/CheackButton'
import MinusIcon from 'react-native-vector-icons/AntDesign';
import { Ar, En } from '../../constants/localization'
import { setPaymentMethod } from '../../api/axios.api'

const Payment = ({
  data,
  lang,
  showWallet,
  setShowWallet,
  paymentScreenData,
  wallateAmount,
  selectPayment,
  selectPaymentMethod,
  coupanListData,
  setCoupanCode,
  setActionCode,
  applyCoupan,
  validation,
  validationn,
  PlaceHolder,
  remove,
  setSelectPayment,
  coupanCode
}) => {
  const [COD, setCOD] = useState(false)
  const [credit, setCredit] = useState(false)
  const [totalAmount, setTotalAmount] = useState([])
  let txtData = selectPayment?.total_segments ? selectPayment?.total_segments : paymentScreenData?.total_segments
  const dueAmount = totalAmount?.length > 0 && wallateAmount > totalAmount[0] ? 0 : totalAmount[0] - wallateAmount
  const RemingAmount = wallateAmount > totalAmount[0] ? wallateAmount - totalAmount[0] : totalAmount
  const WAmount = wallateAmount > totalAmount[0] ? wallateAmount - RemingAmount : wallateAmount
  const lable = lang == NUMBER.num0 ? Ar : En

  const finalAmount = () => {
    const temp = []
    txtData?.map((items) => {
      if (items?.code == "grand_total") {
        const aa = parseInt(items?.value)
        temp.push(aa)
      }
    })
    setTotalAmount(temp)
  }

  useEffect(() => {
    finalAmount()
  }, [txtData])


  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.mainView}>
        <View style={styles.delevryView}>
          <Text numberOfLines={2} style={[styles.delevrydateText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{paymentScreenData?.dispatch_note?.label}</Text>
          <Text numberOfLines={2} style={[styles.delevrydateText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{paymentScreenData?.dispatch_note?.date}</Text>
        </View>

        <View style={styles.paymentView}>
          <Text style={[styles.palymentopationText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.PaymentOptions}</Text>

          {wallateAmount > 0 && <TouchableOpacity onPress={() => {
            showWallet ? setShowWallet(false) : setShowWallet(true),
              setCOD(false),
              setCredit(false),
              validation(showWallet),
              selectPaymentMethod()
            showWallet ? validation(false) : validation(true)
          }}
            style={[styles.walletView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>

            <CheackButton preVriable={showWallet} onPress={setShowWallet} onPress2={selectPaymentMethod} setCOD={setCOD} setCredit={setCredit} />
            <Text style={[styles.walletText, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>{lable?.PaymentByYourWallet}</Text>
          </TouchableOpacity>}
          {
            showWallet &&
            <View style={styles.wallateDeatails}>
              <View style={[styles.containerView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>

                <View style={styles.container}>
                  <Text style={styles.containerText}>{lable?.PaymentToBeMade}</Text>
                  <View style={styles.priceView}>
                    <Text style={styles.priceText}>{lable.SAR + " " + totalAmount}</Text>
                  </View>
                </View>
                <View style={styles.barView}>
                  <View style={styles.walletLineView}>
                    <View style={styles.roundView}>
                      <MinusIcon name={ICON.minus} size={ResponsiveSize(20)} color={COLOR.black} />
                    </View>
                  </View>
                </View>

                <View style={styles.container}>
                  <Text style={styles.containerText}>{lable?.AmountinYourWallet}</Text>
                  <View style={styles.priceView}>
                    <Text style={styles.priceText}>{lable.SAR + " " + wallateAmount}</Text>
                  </View>
                </View>
                <View style={styles.barView}>
                  <View style={styles.walletLineView}>
                    <View style={styles.roundView}>
                      <MinusIcon name={ICON.plus} size={ResponsiveSize(20)} color={COLOR.black} />
                    </View>
                  </View>
                </View>

                <View style={styles.container}>
                  <Text style={styles.containerText}>{lable?.Leftamounttobepaid}</Text>
                  <View style={styles.priceView}>
                    <Text style={styles.priceText}>{lable.SAR + " " + dueAmount && dueAmount}</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.lastTexrt}>{lable.RemainingWalletAmount + " :" + lable?.SAR + " " + RemingAmount}</Text>

            </View>
          }

          {
            (showWallet && wallateAmount < totalAmount) || (!showWallet) &&
            <View>
              <TouchableOpacity
                onPress={() => {
                  setCOD(true),
                    setCredit(false),
                    validation(true)
                  selectPaymentMethod(paymentScreenData?.payment_methods[0]?.code)
                }}
                style={[styles.CODView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <View style={[styles.fillView, COD &&
                {
                  backgroundColor: COLOR.primaray,
                  borderColor: COLOR.primaray,
                }]}>

                </View>
                <Text style={[styles.text, COD && { color: COLOR.primaray }, lang == NUMBER.num0 && { marginRight: ResponsiveSize(10) }]}>{paymentScreenData?.payment_methods[0]?.title}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setCOD(false),
                    setCredit(true),
                    validation(true)
                  selectPaymentMethod(paymentScreenData?.payment_methods[1]?.code)
                }}
                style={[styles.CODView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <View style={[styles.fillView, credit &&
                {
                  backgroundColor: COLOR.primaray,
                  borderColor: COLOR.primaray,
                }]}></View>
                <Text style={[styles.text, credit && { color: COLOR.primaray }, lang == NUMBER.num0 && { marginRight: ResponsiveSize(10) }]}>{paymentScreenData?.payment_methods[1]?.title}</Text>
              </TouchableOpacity>
            </View>}

          <View style={styles.lineView} />
          {txtData?.map((items, index) => {
            return (
              <View key={index} style={[styles.textView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <Text style={[styles.leftText, , lang == NUMBER.num0 && { textAlign: 'right' }, items?.code == "grand_total" && { fontWeight: '600', color: COLOR?.primaray }]}>{items?.title}</Text>
                <Text style={[styles.price, items?.code == "grand_total" && { fontWeight: '600', color: COLOR?.primaray }]}>{lable?.SAR + " " + items?.value}</Text>
              </View>
            )
          })}

          {showWallet &&
            <View style={styles.FinaltextView}>
              <View style={[styles.commonView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }, { color: COLOR.primaray, fontWeight: FONTWEGHIT.font600, fontSize: ResponsiveSize(25) }]}>{lable?.WalletAmount}</Text>
                <Text style={[styles.price, { color: COLOR.primaray, fontWeight: FONTWEGHIT.font600, fontSize: ResponsiveSize(25) }]}>{lable?.SAR + " " + WAmount && WAmount}</Text>
              </View>

              <View style={[styles.commonView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }, { marginTop: ResponsiveSize(10) }]}>
                <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }, { color: COLOR.black, fontSize: ResponsiveSize(25), fontWeight: '600' }]}>{lable?.TotaldueAmount}</Text>
                <Text style={[styles.price, { color: COLOR.black, fontSize: ResponsiveSize(25), fontWeight: '600' }]}>{lable?.SAR + " " + dueAmount && dueAmount}</Text>
              </View>


            </View>}
        </View>

        <View style={[styles.manulCoupanView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>

          {!remove && <TextInput
            style={styles.coupnTextInput}
            placeholder={lable?.EnterCoupanCode}
            textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
            onChangeText={text => setCoupanCode(text)}
            value={coupanCode}
          />}

          {remove && <View style={[styles.coupnTextInput, { justifyContent: 'center' }]}>
            <Text>{coupanCode}</Text>
          </View>}


          {!remove &&
            <TouchableOpacity
              onPress={() => {
                setActionCode(1)
                applyCoupan(coupanCode, 1)
              }}
              style={styles.applyView}>
              <Text style={styles.btnText}>{lang == NUMBER.num0 ? "يتقدم" : "APPLY"}</Text>
            </TouchableOpacity>}

          {remove && <TouchableOpacity
            onPress={() => {
              setActionCode(0)
              applyCoupan(coupanCode, 0)

            }}
            style={styles.applyView}>
            <Text style={[styles.btnText, { fontSize: ResponsiveSize(21) }]}>{lang == NUMBER.num0 ? "يزيل" : "Remove"}</Text>
          </TouchableOpacity>}

        </View>
        {!remove &&
          <View>

            <Text style={[styles.coupansText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{lang == NUMBER.num0 ? "جميع الكوبونات" : "All coupons"}</Text>
            {coupanListData?.map((item, index) => {

              return (
                <View
                  key={index}
                  style={[styles.coupanView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                  <View>
                    <Text style={[styles.coupanName, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{item?.coupon}</Text>
                    <Text style={[styles.coupndes, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{item?.name}</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => { setCoupanCode(item?.coupon), setActionCode(1), applyCoupan(item?.coupon, 1) }}
                    style={styles.btnView}>
                    <Text style={styles.btnText}>{lang == NUMBER.num0 ? "يتقدم" : "APPLY"}</Text>
                  </TouchableOpacity>
                </View>
              )
            })}
          </View>}
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
    width: ResponsiveSize(300)
  },
  price: {
    color: COLOR.black,

  },
  FinaltextView: {
    backgroundColor: COLOR.white,
    marginTop: ResponsiveSize(20),
    width: "100%",
    height: ResponsiveSize(120),
    alignItems: ALINE.center,
    // flexDirection: ALINE.row,
    padding: ResponsiveSize(20),
    // justifyContent: ALINE.spaceBetween,
    // paddingHorizontal: ResponsiveSize(20),
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
    shadowColor: COLOR.black,
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  walletView: {
    width: "100%",
    height: ResponsiveSize(60),
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.primaray,
    marginTop: ResponsiveSize(20),
    backgroundColor: "#FFEEEE",
    flexDirection: 'row',
    alignItems: 'center',
    padding: ResponsiveSize(10),
    borderTopLeftRadius: ResponsiveSize(10),
    borderTopRightRadius: ResponsiveSize(10)
  },
  walletText: {
    marginLeft: ResponsiveSize(20)
  },
  wallateDeatails: {
    width: "100%",
    backgroundColor: COLOR.white,
    borderBottomWidth: ResponsiveSize(1),
    borderLeftWidth: ResponsiveSize(1),
    borderRightWidth: ResponsiveSize(1),
    borderColor: COLOR.primaray,
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    padding: ResponsiveSize(20)
    // backgroundColor:"#000"
  },
  container: {
    width: ResponsiveSize(120),
    // height: "100%",
    alignItems: 'center'
    // backgroundColor:"#000"
  },
  containerText: {
    color: "#202020",
    lineHeight: ResponsiveSize(30),
    textAlign: 'center',
    height: ResponsiveSize(70)
  },
  priceView: {
    height: ResponsiveSize(40),
    width: ResponsiveSize(100),
    backgroundColor: COLOR.primaray,
    borderRadius: ResponsiveSize(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: ResponsiveSize(10)
  },
  priceText: {
    color: COLOR.white
  },
  walletLineView: {
    height: ResponsiveSize(110),
    width: ResponsiveSize(1),
    backgroundColor: COLOR.primaray
  },
  barView: {
    height: "80%",
  },
  roundView: {
    height: ResponsiveSize(35),
    width: ResponsiveSize(35),
    borderRadius: ResponsiveSize(100),
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.primaray,
    backgroundColor: "#FFEEEE",
    position: 'absolute',
    alignSelf: 'center',
    top: ResponsiveSize(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainusText: {
    fontSize: ResponsiveSize(30),
    textAlign: 'center',

  },
  lastTexrt: {
    textAlign: 'center',
    color: COLOR.primaray,
    marginBottom: ResponsiveSize(20)
  },
  commonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%"
  },
  manulCoupanView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: ResponsiveSize(20),
  },
  coupnTextInput: {
    height: ResponsiveSize(80),
    width: ResponsiveSize(400),
    borderRadius: ResponsiveSize(100),
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.darkGray,
    // marginTop: ResponsiveSize(20),
    paddingHorizontal: ResponsiveSize(20)
  },
  applyView: {
    height: ResponsiveSize(50),
    width: ResponsiveSize(120),
    borderRadius: ResponsiveSize(100),
    backgroundColor: COLOR.primaray,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }


})