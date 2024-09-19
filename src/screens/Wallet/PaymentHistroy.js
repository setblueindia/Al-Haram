import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import CommanHeader from '../../components/ComanHeader'
import { useNavigation } from '@react-navigation/native'
import { ResponsiveSize } from '../../utils/utils'
import { useSelector } from 'react-redux'
import { EXTRASTR, NAVIGATION, NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'
import { WalletHistoryAPI } from '../../api/axios.api'
import CusLoader from '../../components/CustomLoader'
import LottieView from 'lottie-react-native'
import DataIsNotFound from '../../components/DataNotFound2'

const PaymentHistroy = (props) => {
    const lang = useSelector(state => state?.lang?.data)
    const userData = useSelector(state => state?.userData?.data)
    const lable = lang == NUMBER.num0 ? Ar : En
    const navigation = useNavigation()
    const [data, setData] = useState([])
    const [loadding, setLoadding] = useState(false)
    const [moreData, setMoreData] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        currentPage < 1 && setLoadding(true)
        currentPage >= 1 && setMoreData(true)

        const nextpage = currentPage + 1
        const sData =
            `
        {
          getCustomerWalletHistoryById(id : ${userData?.id}, pageSize:${10}, curPage:${nextpage}) {
              entity_id
              amount
              status
              action
              order_id
              transaction_at
              currency_code
              curr_amount
              sender_type
              reference
              total
          }
      }
      `
        try {
            const res = await WalletHistoryAPI(sData, lang)
            setData([...data, ...res?.data?.data?.getCustomerWalletHistoryById])
            setCurrentPage(nextpage)
            setLoadding(false)
            setMoreData(false)
        } catch (error) {
            setLoadding(false)
            console.log("ERROR :::::::::::::: ", error)
        }
    }

    return (
        <View style={styles.mainView}>
            <CommanHeader name={lable?.WalletHistory} navigation={navigation} lang={lang} />
            <View
                style={styles.containerView}>
                {/* {data?.map((items, index) => {
                    const status = items?.status == "0" ? lable?.PENDING : items?.status == "1" ? lable?.APPROVED : lable.CANCELLED
                    return (
                        <View key={index}>
                            <TouchableOpacity

                                onPress={() => { navigation.navigate(NAVIGATION.paymentDetails, { lable: items?.entity_id, refID: items?.reference, amount: items?.curr_amount, status: status }) }}
                                style={styles.container} >
                                <View style={[styles.innerView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                    <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(40) }]}>{lable?.Reference + " :"}</Text>
                                    <Text style={[styles.rightScreen, lang == NUMBER.num0 && { marginRight: ResponsiveSize(0) }]}>{items?.reference}</Text>
                                </View>

                                <View style={[styles.innerView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                    <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(40) }]}>{lable.Amount + ":"}</Text>
                                    <Text style={[styles.rightScreen, lang == NUMBER.num0 && { marginRight: ResponsiveSize(0) }]}>{items?.curr_amount}</Text>
                                </View>

                                <View style={[styles.innerView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                    <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(40) }]}>{lable?.Status + " :"}</Text>
                                    <Text style={[styles.rightScreen, , lang == NUMBER.num0 && { marginRight: ResponsiveSize(0) }, { color: COLOR.liteGreen, fontWeight: FONTWEGHIT.font600 }]}>{status}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: ResponsiveSize(20) }} />
                        </View>
                    )
                })} */}

                {data?.length > 0 ?
                 <FlatList
                    data={data}
                    onEndReached={() => { getData(), console.log("Hello") }}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={() => {
                        return (
                            <View style={{
                                width: "100%",
                                height: ResponsiveSize(100),
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                {
                                    moreData &&
                                    <ActivityIndicator
                                        size={"large"}
                                        color={COLOR.primaray}
                                    />}
                            </View>
                        )
                    }}
                    renderItem={({ item, index }) => {
                        const status = item?.status == "0" ? lable?.PENDING : item?.status == "1" ? lable?.APPROVED : item?.status == "2" ? lable.CANCELLED : null
                        return (
                            <View key={index}>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate(NAVIGATION.paymentDetails, { lable: item?.entity_id, refID: item?.reference, amount: item?.curr_amount, status: status }) }}
                                    style={styles.container} >
                                    <View style={[styles.innerView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                        <Text style={[styles.leftText, lang == NUMBER.num0 && {
                                            textAlign: EXTRASTR.right,
                                            marginRight: ResponsiveSize(40)
                                        }]}>{lable?.Reference + " :"}</Text>
                                        <Text style={[styles.rightScreen, lang == NUMBER.num0 && { marginRight: ResponsiveSize(0) }]}>{item?.reference}</Text>
                                    </View>

                                    <View style={[styles.innerView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                        <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(40) }]}>{lable.Amount + ":"}</Text>
                                        <Text style={[styles.rightScreen, lang == NUMBER.num0 && { marginRight: ResponsiveSize(0) }]}>{item?.curr_amount}</Text>
                                    </View>

                                    <View style={[styles.innerView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                        <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(40) }]}>{lable?.Status + " :"}</Text>
                                        <Text style={[styles.rightScreen, , lang == NUMBER.num0 && { marginRight: ResponsiveSize(0) }, { color: COLOR.liteGreen, fontWeight: FONTWEGHIT.font600 }]}>{status}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height: ResponsiveSize(20) }} />
                            </View>
                        )
                    }}
                /> : !loadding ?
                    <View style={{ flex: 1 }}>
                        <DataIsNotFound />
                    </View>
                    : null}
               </View>

            {loadding &&
                <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
                    <CusLoader />
                </View>
            }

            {
                !data &&
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: "100%",
                    width: "100%",
                    position: 'absolute',
                    backgroundColor: "#00000040"

                }}>
                    <LottieView
                        source={require('../../assests/Lottianimation/Nonotofication2.json')}
                        autoPlay loop
                        resizeMode='cover'
                        style={{ height: ResponsiveSize(300), width: ResponsiveSize(300) }}
                    />
                    <View style={{
                        height: ResponsiveSize(60),
                        width: ResponsiveSize(300),
                        borderRadius: ResponsiveSize(100),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "#00000040"
                    }}>
                        <Text style={{ color: COLOR.white, fontSize: ResponsiveSize(25) }}>No Data Found</Text>
                    </View>


                </View>
            }
        </View>
    )
}

export default PaymentHistroy

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    containerView: {
        flex: 1,
        padding: ResponsiveSize(20),

    },
    container: {
        width: "100%",
        // width:ResponsiveSize(300),
        backgroundColor: COLOR.white,
        borderRadius: ResponsiveSize(20),
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        // elevation: 2,
        shadowColor: '#000',
        borderWidth: ResponsiveSize(2),
        borderColor: COLOR.gray,
        padding: ResponsiveSize(20),
        // justifyContent:'center',
        // alignItems:'center'

    },
    innerView: {
        flexDirection: 'row',
        alignItems: ALINE.center,
        marginLeft: ResponsiveSize(30),
        padding: ResponsiveSize(10),
        // justifyContent:'space-evenly',
        // width:"100%"

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
    }
})