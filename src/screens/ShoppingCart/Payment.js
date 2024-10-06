import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import { EXTRASTR, ICON, NUMBER } from '../../constants/constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import CheackButton from '../../components/CheackButton'
import MinusIcon from 'react-native-vector-icons/AntDesign';
import { Ar, En } from '../../constants/localization'
import { setPaymentMethod } from '../../api/axios.api'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Payment = ({
  data,
  lang,
  // showWallet,
  // setShowWallet,
  type,
  applyGiftCart,
  giftCardList,
  setGiftCardCode,
  giftCardCode,
  paymentScreenData,
  wallateAmount,
  selectPayment,
  selectPaymentMethod,
  coupanListData,
  setCoupanCode,
  setActionCode,
  applyCoupan,
  validation,
  setEtrx,
  remove,
  setSelectPayemrntMethod,
  coupanCode,
  setWalletAmount,
  setGiftCardList,
  setGiftCartDis,
  getGiftCartdSatus,
  setGiftSatus,
  giftSatus
}) => {
  const [showWallet, setShowWallet] = useState(false)
  const [COD, setCOD] = useState(false)
  const [credit, setCredit] = useState(false)
  const [totalAmount, setTotalAmount] = useState([])
  let txtData = selectPayment?.total_segments ? selectPayment?.total_segments : paymentScreenData?.total_segments
  const dueAmount = totalAmount?.length > 0 && wallateAmount > totalAmount[0] ? 0 : totalAmount[0] - wallateAmount
  const RemingAmount = wallateAmount > totalAmount[0] ? wallateAmount - totalAmount[0] : 0
  const WAmount = wallateAmount > totalAmount[0] ? wallateAmount - RemingAmount : wallateAmount
  const lable = lang == NUMBER.num0 ? Ar : En

  const finalAmount = () => {
    const temp = []
    txtData?.map((items) => {
      if (items?.code == "grand_total") {
        const aa = parseInt(items?.value)
        temp.push(aa)
      }

      if (items?.code == "amgiftcard") {
        const aa = items?.title?.split(",").map(item => item.trim());
        const tempVAL = items?.value
        const val = parseInt(tempVAL)
        setGiftCartDis(val ? val : 0)
        setGiftCardList(aa)
      } else {
        setGiftCardList([])
        setGiftCartDis(0)
      }
    })
    setTotalAmount(temp)
    setEtrx(temp)
  }

  const walletPress = async () => {
    setGiftSatus()
    selectPaymentMethod("walletsystem")
    setSelectPayemrntMethod("walletsystem")
    setCOD(false)
    setCredit(false)
  }
  useEffect(() => {
    finalAmount()
  }, [txtData])



  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <View style={styles.mainView}>
        {paymentScreenData?.dispatch_note && <View style={styles.delevryView}>
          <Text numberOfLines={2} style={[styles.delevrydateText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{paymentScreenData?.dispatch_note?.label}</Text>
          <Text numberOfLines={2} style={[styles.delevrydateText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{paymentScreenData?.dispatch_note?.date}</Text>
        </View>
        }
        <View style={styles.paymentView}>
          <Text style={[styles.palymentopationText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.PaymentOptions}</Text>

          {(wallateAmount > 0 && type !== "amgiftcard") &&
            <TouchableOpacity
              onPress={() => {
                showWallet ? setShowWallet(false) : setShowWallet(true)
                showWallet ? validation(false, "walletsystem", WAmount) : validation(true, "walletsystem", WAmount)
                walletPress()
              }}
              style={[styles.walletView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
              <CheackButton
                WAmount={WAmount}
                setWalletAmount={setWalletAmount}
                validation={validation}
                preVriable={showWallet}
                onPress={setShowWallet}
                onPress2={selectPaymentMethod}
                onPress3={setSelectPayemrntMethod}
                setCOD={setCOD}
                setCredit={setCredit} />
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
            ((showWallet && wallateAmount < totalAmount[0]) || (!showWallet) && type !== "amgiftcard") &&
            <View>
              <TouchableOpacity
                onPress={() => {
                  setCOD(true)
                  setCredit(false)
                  validation(true, "COD", WAmount)
                  setSelectPayemrntMethod("COD")
                  selectPaymentMethod(paymentScreenData?.payment_methods[0]?.code)
                  setGiftSatus()

                }}
                style={[styles.CODView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <View style={[styles.fillView, COD &&
                {
                  backgroundColor: COLOR.primaray,
                  borderColor: COLOR.primaray,
                }]}>

                </View>
                {paymentScreenData?.payment_methods && <Text style={[styles.text, COD && { color: COLOR.primaray }, lang == NUMBER.num0 && { marginRight: ResponsiveSize(10), textAlign: 'right' }]}>{paymentScreenData?.payment_methods[0]?.title}</Text>}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setCOD(false)
                  setCredit(true)
                  validation(true, "Cradite", WAmount)
                  selectPaymentMethod(paymentScreenData?.payment_methods[1]?.code)
                  setSelectPayemrntMethod("Cradite")
                  setGiftSatus()

                }}
                style={[styles.CODView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <View style={[styles.fillView, credit &&
                {
                  backgroundColor: COLOR.primaray,
                  borderColor: COLOR.primaray,
                }]}></View>
                {paymentScreenData?.payment_methods && <Text style={[styles.text, credit && { color: COLOR.primaray }, lang == NUMBER.num0 && { marginRight: ResponsiveSize(10), textAlign: 'right' }]}>{paymentScreenData?.payment_methods[1]?.title}</Text>}
              </TouchableOpacity>
            </View>
          }

          {type == "amgiftcard" &&
            <TouchableOpacity
              onPress={() => {
                validation(true, "Cradite", WAmount)
                setCredit(true)
                selectPaymentMethod("magveg")
                setSelectPayemrntMethod("Cradite")

              }}
              style={[styles.CODView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
              <View style={[styles.fillView, credit &&
              {
                backgroundColor: COLOR.primaray,
                borderColor: COLOR.primaray,
              }]}>

              </View>
              <Text style={[styles.text, COD && { color: COLOR.primaray }, lang == NUMBER.num0 && { marginRight: ResponsiveSize(10), textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Online payment" : "الدفع عبر الإنترنت"}</Text>
            </TouchableOpacity>}



          <View style={styles.lineView} />
          {txtData?.map((items, index) => {
            return (
              <View key={index} >
                {items?.code == "amgiftcard" && <Text style={[{
                  marginBottom: ResponsiveSize(-10),
                  marginTop: ResponsiveSize(10),
                  color: COLOR.black, fontWeight:
                    FONTWEGHIT.font400
                }, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Giftcard" : "بطاقات الهدايا"}</Text>}
                <View style={[styles.textView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>

                  <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: 'right' }, items?.code == "grand_total" && { fontWeight: '600', color: COLOR?.primaray }]}>{items?.title}</Text>
                  <Text style={[styles.price, items?.code == "grand_total" && { fontWeight: '600', color: COLOR?.primaray }, lang == NUMBER.num0 && { textAlign: 'left' }]}>{lable?.SAR + " " + items?.value}</Text>
                </View>
              </View>
            )
          })}

          {showWallet &&
            <View style={styles.FinaltextView}>
              <View style={[styles.commonView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }, { color: COLOR.primaray, fontWeight: FONTWEGHIT.font600, fontSize: ResponsiveSize(25) }]}>{lable?.WalletAmount}</Text>
                <Text style={[styles.price, { color: COLOR.primaray, fontWeight: FONTWEGHIT.font600, fontSize: ResponsiveSize(25) }, lang == NUMBER.num0 && { textAlign: 'left' }]}>{lable?.SAR + " " + WAmount && WAmount}</Text>
              </View>

              <View style={[styles.commonView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }, { marginTop: ResponsiveSize(10) }]}>
                <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }, { color: COLOR.black, fontSize: ResponsiveSize(25), fontWeight: '600' }]}>{lable?.TotaldueAmount}</Text>
                <Text style={[styles.price, { color: COLOR.black, fontSize: ResponsiveSize(25), fontWeight: '600' }, lang == NUMBER.num0 && { textAlign: 'left' }]}>{lable?.SAR + " " + dueAmount && dueAmount}</Text>
              </View>


            </View>}
        </View>


        {/* ::::::::::::::::::::::::::::: ADD GITCAT GEGIEN ::::::::::::::::::::::::::::: */}

        {type !== "amgiftcard" &&
          <View style={styles?.giftCartdMainView}>
            <View style={{
              width: "100%",
            }}>

              {giftCardList.length > 0
                && giftCardList?.map((item, index) => {
                  return (
                    <View key={index}
                      style={[styles.coupnView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>

                      {lang == NUMBER.num0 ?
                        <Text>{item + " (بطاقات الهدايا)"}</Text> :
                        <Text style={{ color: COLOR.black, fontSize: ResponsiveSize(18) }}>{item + " (Gift Card)"}</Text>}

                      <TouchableOpacity
                        onPress={() => {
                          applyGiftCart(0, item)
                          setCOD(false),
                            setCredit(false),
                            setShowWallet(false),
                            setSelectPayemrntMethod()
                          setGiftSatus()

                        }}

                        style={styles.CLRemoveBTN}>
                        <Text
                          style={{
                            fontSize: ResponsiveSize(20),
                            color: COLOR.primaray
                          }}
                        >{lang == NUMBER.num0 ? "إزالة" : "Remove"}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                })}
            </View>




            <View style={[{}, lang == NUMBER.num0 && {}]}>

              <TextInput
                style={[styles.coupnTextInput, { marginTop: ResponsiveSize(20), width: "100%" }]}
                placeholder={lang == NUMBER.num1 ? "Enter gifcard code" : "ادخل رمز البطاقة"}
                placeholderTextColor={COLOR.darkGray}
                textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
                onChangeText={text => { setGiftCardCode(text) }}
                value={giftCardCode ? giftCardCode : ""}

              />

              <View style={styles.GIFTBtn}>
                <TouchableOpacity
                  onPress={() => {
                    getGiftCartdSatus()
                  }}
                  style={styles.ChwckStausBTN}>
                  <Text style={styles.btnText}>{lang == NUMBER.num0 ? "تحقق" : "Check Status"}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    applyGiftCart(1),
                      setCOD(false)
                    setCredit(false),
                      setShowWallet(false),
                      setSelectPayemrntMethod(),
                      setGiftSatus()
                  }}
                  style={styles.GIFTApplyBTN}>
                  <Text style={styles.btnText}>{lang == NUMBER.num0 ? "تطبيق" : "APPLY"}</Text>
                </TouchableOpacity>

              </View>



            </View>

            {giftSatus?.data &&
              <View style={{ height: "100%", marginBottom: ResponsiveSize(10) }}>
                {giftSatus?.data?.balance &&
                  <View style={[styles.giftCardSatusView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                    <Text style={{ color: COLOR.black, fontSize: ResponsiveSize(18) }}>{"Balance "}</Text>
                    <Text style={styles.giftSatusANS}>{giftSatus?.data?.balance}</Text>
                  </View>}

                {giftSatus?.data?.code &&
                  <View style={[styles.giftCardSatusView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                    <Text style={{ color: COLOR.black, fontSize: ResponsiveSize(18) }}>{"Code "}</Text>
                    <Text style={styles.giftSatusANS}>{giftSatus?.data?.code}</Text>
                  </View>}

                {giftSatus?.data?.expiredDate &&
                  <View style={[styles.giftCardSatusView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                    <Text style={{ color: COLOR.black, fontSize: ResponsiveSize(18) }}>{"expiredDate "}</Text>
                    <Text style={styles.giftSatusANS}>{giftSatus?.data?.expiredDate}</Text>
                  </View>}

                {giftSatus?.data?.status &&
                  <View style={[styles.giftCardSatusView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                    <Text style={{ color: COLOR.black, fontSize: ResponsiveSize(18) }}>{"status "}</Text>
                    <Text style={styles.giftSatusANS}>{giftSatus?.data?.status}</Text>
                  </View>}

              </View>}

          </View>}
        {/* ::::::::::::::::::::::::::::: ADD GITCAT GEGIEN ::::::::::::::::::::::::::::: */}

        {type !== "amgiftcard" && <View style={[styles.manulCoupanView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>

          {!remove &&
            <TextInput
              style={styles.coupnTextInput}
              placeholder={lable?.EnterCoupanCode}
              placeholderTextColor={COLOR.darkGray}
              textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
              onChangeText={text => setCoupanCode(text)}
              value={coupanCode ? coupanCode : ""}

            />}

          {remove && <View style={[styles.coupnTextInput, { justifyContent: 'center' }]}>
            <Text>{coupanCode ? coupanCode : ""}</Text>
          </View>
          }
          {!remove &&
            <TouchableOpacity
              onPress={() => {
                setActionCode(1)
                coupanCode && applyCoupan(coupanCode, 1)
              }}
              style={styles.applyView}>
              <Text style={styles.btnText}>{lang == NUMBER.num0 ? "تطبيق" : "APPLY"}</Text>
            </TouchableOpacity>
          }

          {remove && <TouchableOpacity
            onPress={() => {
              setActionCode(0)
              applyCoupan(coupanCode, 0)

            }}
            style={styles.applyView}>
            <Text style={[styles.btnText, { fontSize: ResponsiveSize(21) }]}>{lang == NUMBER.num0 ? "إزالة" : "Remove"}</Text>
          </TouchableOpacity>}

        </View>}





        {!remove &&
          <View>

            {coupanListData?.length > 0 &&
              <Text style={[styles.coupansText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{lang == NUMBER.num0 ? "القسائم" : "All coupons"}</Text>}
            {
              coupanListData?.length > 0 &&
              coupanListData?.map((item, index) => {

                return (
                  <View
                    key={index}
                    style={[styles.coupanView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                    <View>
                      <Text style={[styles.coupanName, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{item?.coupon}</Text>
                      <Text style={[styles.coupndes, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{item?.name}</Text>
                    </View>

                    <TouchableOpacity
                      onPress={() => {
                        setCoupanCode(item?.coupon)
                        setActionCode(1)
                        applyCoupan(item?.coupon, 1)
                      }}
                      style={styles.btnView}>
                      <Text style={styles.btnText}>{lang == NUMBER.num0 ? "تطبيق" : "APPLY"}</Text>
                    </TouchableOpacity>
                  </View>
                )
              })}
          </View>}


      </View><View style={{ height: ResponsiveSize(200) }} />

    </KeyboardAwareScrollView>
  )
}

export default Payment

const styles = StyleSheet.create({

  GIFTBtn: {
    width: "100%",
    justifyContent: ALINE.spaceBetween,
    flexDirection: ALINE.row,
    marginBottom: ResponsiveSize(20),
    paddingHorizontal: ResponsiveSize(5)
  },

  GIFTApplyBTN: {
    marginTop: ResponsiveSize(20),
    backgroundColor: COLOR.primaray,
    alignItems: ALINE.center,
    justifyContent: ALINE.center,
    padding: ResponsiveSize(10),
    width: ResponsiveSize(230),
    height: ResponsiveSize(60),
    borderRadius: ResponsiveSize(10)
  },
  ChwckStausBTN: {
    marginTop: ResponsiveSize(20),
    backgroundColor: "green",
    alignItems: ALINE.center,
    justifyContent: ALINE.center,
    padding: ResponsiveSize(10),
    width: ResponsiveSize(230),
    height: ResponsiveSize(60),
    borderRadius: ResponsiveSize(10)
  },
  CLRemoveBTN: {
    height: ResponsiveSize(50),
    width: ResponsiveSize(100),
    backgroundColor: COLOR.white,
    alignItems: ALINE.center,
    justifyContent: ALINE.center,
    elevation: ResponsiveSize(5),
    borderRadius: ResponsiveSize(10),
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.primaray,

  },
  giftCartdMainView: {
    width: "100%",
    flex: 1,
    backgroundColor: "#00000009",
    paddingHorizontal: ResponsiveSize(20),
    marginTop: ResponsiveSize(10),
    borderRadius: ResponsiveSize(20),
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.darkGray,

  },

  giftSatusANS: {
    color: "green",
    fontWeight: FONTWEGHIT.font600,
    fontSize: ResponsiveSize(18)
  },

  giftCardSatusView: {

    width: "100%",
    height: ResponsiveSize(45),
    borderBottomWidth: ResponsiveSize(1),
    marginBottom: ResponsiveSize(10),
    alignItems: ALINE.center,
    justifyContent: ALINE.spaceBetween,
    flexDirection: ALINE.row,
    paddingHorizontal: ResponsiveSize(5),
    borderColor: COLOR.darkGray

  },

  coupnView: {
    width: "100%",
    height: ResponsiveSize(80),
    marginTop: ResponsiveSize(20),
    borderRadius: ResponsiveSize(10),
    justifyContent: ALINE.spaceBetween,
    alignItems: ALINE.center,
    paddingHorizontal: ResponsiveSize(10),
    flexDirection: ALINE.row,
    elevation: ResponsiveSize(5),
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.darkGray,
    backgroundColor: COLOR.white,
    shadowColor: COLOR.darkGray,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }

  },

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
    padding: ResponsiveSize(20),
    borderRadius: ResponsiveSize(20)
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
    color: COLOR.black,
    width: "100%"
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
    width: ResponsiveSize(300),
    flex: 1,
    textAlign: 'left'
  },
  price: {
    color: COLOR.black,
    flex: 1,
    textAlign: 'right'
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
    alignItems: ALINE.center,
    justifyContent: ALINE.center
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
    fontSize: ResponsiveSize(20),
    fontWeight: FONTWEGHIT.font600,
    width: "100%",
    textAlign: ALINE.center
  },
  walletView: {
    width: "100%",
    height: ResponsiveSize(60),
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.primaray,
    marginTop: ResponsiveSize(20),
    backgroundColor: "#FFEEEE",
    flexDirection: ALINE.row,
    alignItems: ALINE.center,
    padding: ResponsiveSize(10),
    borderTopLeftRadius: ResponsiveSize(10),
    borderTopRightRadius: ResponsiveSize(10)
  },
  walletText: {
    marginLeft: ResponsiveSize(20),
    color: COLOR.black
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
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
    width: "100%",
    padding: ResponsiveSize(20)
  },
  container: {
    width: ResponsiveSize(120),
    alignItems: ALINE.center,
    justifyContent: ALINE.center
  },
  containerText: {
    color: "#202020",
    lineHeight: ResponsiveSize(30),
    textAlign: ALINE.center,
    height: ResponsiveSize(100)
  },
  priceView: {
    padding: ResponsiveSize(5),
    width: ResponsiveSize(120),
    backgroundColor: COLOR.primaray,
    borderRadius: ResponsiveSize(5),
    alignItems: ALINE.center,
    justifyContent: ALINE.center,
    marginTop: ResponsiveSize(10)
  },
  priceText: {
    color: COLOR.white,
    width: "100%",
    textAlign: ALINE.center
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
    alignSelf: ALINE.center,
    top: ResponsiveSize(10),
    alignItems: ALINE.center,
    justifyContent: ALINE.center
  },
  mainusText: {
    fontSize: ResponsiveSize(30),
    textAlign: ALINE.center,

  },
  lastTexrt: {
    textAlign: ALINE.center,
    color: COLOR.primaray,
    marginBottom: ResponsiveSize(20)
  },
  commonView: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
    width: "100%"
  },
  manulCoupanView: {
    flexDirection: ALINE.row,
    alignItems: ALINE.center,
    justifyContent: ALINE.spaceBetween,
    marginTop: ResponsiveSize(20),
  },
  coupnTextInput: {
    height: ResponsiveSize(70),
    width: ResponsiveSize(400),
    borderRadius: ResponsiveSize(20),
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.darkGray,
    paddingHorizontal: ResponsiveSize(20),
    color: COLOR.black
  },
  applyView: {
    height: ResponsiveSize(60),
    width: ResponsiveSize(120),
    borderRadius: ResponsiveSize(20),
    backgroundColor: COLOR.primaray,
    alignItems: ALINE.center,
    justifyContent: ALINE.center,
    alignSelf: ALINE.center
  }


})