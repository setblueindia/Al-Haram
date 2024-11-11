import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import CommanHeader from '../../components/ComanHeader'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'
import { ResponsiveSize, SHOWTOTS } from '../../utils/utils'
import { GiftCartICON } from '../../assests'
import { GIFATCARTSATUS } from '../../api/axios.api'
import CusLoader from '../../components/CustomLoader'

const Checkbalance = () => {
    const navigation = useNavigation()
    const lang = useSelector(state => state?.lang?.data)
    const [isLoadding, setLoadding] = useState(false)
    const labale = lang == NUMBER.num0 ? Ar : En
    const [data, setData] = useState([])
    const [giftCardNumber, setGiftCardNumber] = useState("")

    // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const getGiftCartdSatus = async () => {
        setLoadding(true)
        const qurry3 = `
        {
          getGiftcardDetailsByCode(
              giftcard_code: "${giftCardNumber}"
              store_id: 0
          ) {
              success
              message
              data{
                  id
                  code
                  status
                  balance
                  expiredDate
              }
          }
      }
        
        `

        try {
            const result = await GIFATCARTSATUS(qurry3, lang)
            if (result?.data?.data?.getGiftcardDetailsByCode?.success) {
                console.log("Gift catd satus :::::;", result?.data?.data?.getGiftcardDetailsByCode?.message)
                setData([result?.data?.data?.getGiftcardDetailsByCode?.data])
                setLoadding(false)

            } else {
                console.log("INNER SATUS ERROR :::", result?.data?.data)
                SHOWTOTS(result?.data?.data?.getGiftcardDetailsByCode?.message ? result?.data?.data?.getGiftcardDetailsByCode?.message : "")
                setLoadding(false)
            }

        } catch (error) {
            console.log("GIFCART SATUS ERROR :::::", error)
            setLoadding(false)
        }
    }

    useEffect(() => {
        // getGiftCartdSatus()
    }, [])

    return (
        <View style={styles.mainView}>
            <CommanHeader name={labale?.giftCardBalcnce} lang={lang} navigation={navigation} />
            <View style={styles.containerView}>
                <View style={styles.firstView}>
                    <View style={styles.imageView}>
                        <Image style={{ resizeMode: 'contain', height: "100%", width: "100%" }} source={GiftCartICON} />
                    </View>
                    <Text style={styles.titelText}>{"Apply Gift Card Code"}</Text>

                    <View style={[styles.boxView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter Your Code'
                            placeholderTextColor={COLOR.darkGray}
                            textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
                            onChangeText={(text) => { setGiftCardNumber(text) }}
                        />

                        <TouchableOpacity
                            onPress={() => { getGiftCartdSatus() }}
                            style={styles.addBtnView}>
                            <Text style={styles.addText}>{"ADD"}</Text>
                        </TouchableOpacity>

                    </View>

                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {data?.map((item, index) => {
                        return (
                            <View key={index} style={styles.satusView}>

                                <View style={[styles.textView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                    <View>
                                        <View style={[{ flexDirection: 'row', alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                            <Text style={styles.firstText}>{"Code : "}</Text>
                                            <Text style={styles.secondView}>{item?.code}</Text>

                                        </View>
                                        <View style={{ marginTop: ResponsiveSize(10) }} />
                                        <View style={[{ flexDirection: 'row', alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                            <Text style={styles.firstText}>{"Current Balance : "}</Text>
                                            <Text style={styles.secondView}>{item?.balance}</Text>
                                        </View>

                                    </View>

                                    <View style={{ justifyContent: 'flex-end' }}>
                                        <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                            <Text style={[styles.firstText]}>{"Status : "}</Text>
                                            <Text style={[styles.secondView, { color: "green", fontWeight: FONTWEGHIT.font600 }]}>{item?.status}</Text>

                                        </View>

                                        <View style={{ marginTop: ResponsiveSize(10) }} />

                                        <TouchableOpacity style={styles.removeBTN}>
                                            <Text style={[styles.firstText, { color: COLOR.white }]}>{"Remove"}</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>

                                <View style={styles.lineView} />

                                <View style={{ width: "100%", flexDirection: ALINE.row, justifyContent: ALINE.spaceBetween }}>
                                    <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                        <Text style={styles.firstText}>{"Usage : "}</Text>
                                        <Text style={styles.secondView}>{"Multiple"}</Text>

                                    </View>
                                    <View style={{ marginTop: ResponsiveSize(10) }} />
                                    <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                        <Text style={styles.firstText}>{"Valid Till : "}</Text>
                                        <Text style={styles.secondView}>{item?.expiredDate}</Text>
                                    </View>

                                </View>

                            </View>


                        )
                    })}
                </ScrollView>

            </View>
            {
                isLoadding &&
                <View style={{ position: 'absolute', height: "100%", width: "100%" }}>
                    <CusLoader />
                </View>

            }
        </View>
    )
}

export default Checkbalance

const styles = StyleSheet.create({

    lineView: {
        width: "100%",
        height: ResponsiveSize(1),
        backgroundColor: COLOR.darkGray,
        marginTop: ResponsiveSize(20),
        marginBottom: ResponsiveSize(20)
    },

    removeBTN: {
        height: ResponsiveSize(40),
        width: ResponsiveSize(140),
        backgroundColor: COLOR.primaray,
        borderRadius: ResponsiveSize(10),
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    containerView: {
        flex: 1,
        padding: ResponsiveSize(20)
    },
    firstView: {
        // height: ResponsiveSize(300),
        width: "100%",
        backgroundColor: "#cccccc20",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        paddingHorizontal: ResponsiveSize(20),
        paddingVertical: ResponsiveSize(40)
    },
    imageView: {
        height: ResponsiveSize(80),
        width: ResponsiveSize(80),
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor: COLOR.black
    },
    titelText: {
        color: COLOR.primaray,
        marginTop: ResponsiveSize(20),
        fontSize: ResponsiveSize(25),
        fontWeight: FONTWEGHIT.font400
    },
    boxView: {
        height: ResponsiveSize(70),
        width: "100%",
        borderWidth: ResponsiveSize(1),
        borderColor: "green",
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ResponsiveSize(20),
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: ResponsiveSize(5)

    },
    textInput: {
        width: ResponsiveSize(300),
        height: "100%",
        // backgroundColor: COLOR.black
        color: COLOR.black,
        paddingHorizontal: ResponsiveSize(10)
    },
    addBtnView: {
        height: "100%",
        width: ResponsiveSize(150),
        backgroundColor: "green",
        borderRadius: ResponsiveSize(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    addText: {
        color: COLOR.white
    },
    satusView: {
        // height: ResponsiveSize(200),
        width: "100%",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.primaray,
        marginTop: ResponsiveSize(25),
        backgroundColor: COLOR.white,
        paddingHorizontal: ResponsiveSize(20),
        paddingVertical: ResponsiveSize(30),
        borderRadius: ResponsiveSize(10)
    },
    textView: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between'
    },
    firstText: {
        color: COLOR.black,
        fontWeight: FONTWEGHIT.font600,
        fontSize: ResponsiveSize(22)
    },
    secondView: {
        color: COLOR.black,
        fontSize: ResponsiveSize(20)
    }
})