import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from '../../constants/style'
import CommanHeader from '../../components/ComanHeader'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { EXTRASTR, NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'
import { ResponsiveSize, SHOWTOTS } from '../../utils/utils'
import { GiftCartICON } from '../../assests'
import { GIFATCARTSATUS, giftCardHistory } from '../../api/axios.api'
import CusLoader from '../../components/CustomLoader'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Share from 'react-native-share';
import RNFS from 'react-native-fs';


const Checkbalance = () => {
    const navigation = useNavigation()
    const lang = useSelector(state => state?.lang?.data)
    const userData = useSelector(state => state?.userData?.data)
    const [isLoadding, setLoadding] = useState(false)
    const labale = lang == NUMBER.num0 ? Ar : En
    const [datas, setDatas] = useState()
    const [giftCardNumber, setGiftCardNumber] = useState("")
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [extra, setExtra] = useState(true)
    const [listTitel, setListTille] = useState()


    useEffect(() => {
        getGiftCardHistory()
    }, [])

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
                  usage
                  expiredDate
              }
          }
      }
        `

        try {
            const result = await GIFATCARTSATUS(qurry3, lang)
            if (result?.data?.data?.getGiftcardDetailsByCode?.success) {
                setDatas(result?.data?.data?.getGiftcardDetailsByCode?.data)
                setLoadding(false)
            } else {
                console.log("INNER SATUS ERROR :::", result?.data)
                SHOWTOTS(result?.data?.data?.getGiftcardDetailsByCode?.message ? result?.data?.data?.getGiftcardDetailsByCode?.message : "")
                setLoadding(false)
            }

        } catch (error) {
            console.log("GIFCART SATUS ERROR :::::", error)
            setLoadding(false)
        }
    }

    const getGiftCardHistory = async () => {
        extra && setLoadding(true)
        const qurry = `
        {
            getGiftcardBySenderEmail(
                email: "${userData?.email}", 
                pageSize:10,
                curPage:${page}
            ) {
                success        
                data{
                    account_id
                    code_id
                    giftcard_code
                    mobile_number
                    balance
                    status
                    status_label
                    usage
                    expired_date
                }
                title
                message
                total_count
            }
        }
        
        `
        try {
            if (userData?.email && extra) {
                const result = await giftCardHistory(qurry, lang)
                // console.log("GiftCard History :::::::: ", result?.data?.data?.getGiftcardBySenderEmail?.title)
                setListTille(result?.data?.data?.getGiftcardBySenderEmail?.title ? result?.data?.data?.getGiftcardBySenderEmail?.title : undefined)
                if (result?.data?.data?.getGiftcardBySenderEmail?.success) {
                    if (result?.data?.data?.getGiftcardBySenderEmail?.data?.length > 0) {
                        setData([...data, ...result?.data?.data?.getGiftcardBySenderEmail?.data])
                    } else {
                        setLoadding(false)
                        setExtra(false)
                    }
                    setLoadding(false)
                    setPage(page + 1)
                } else {
                    setLoadding(false)
                    // SHOWTOTS(result?.data?.message)
                    console.log("INNER ERROR :::::::", result?.data)
                }
            } else {
                setLoadding(false)
                console.log("Email id not found")
            }

        } catch (error) {
            console.log("GIFCART HISTORY ERROR :::::", error)
            setLoadding(false)
        }
    }


    // const onShare = async () => {
    //     const shareOptions = {
    //         title: 'Share via',
    //         message: 'AL-Haram Stores (Giftcard)',
    //         url: 'https://beta.alharamstores.com/pub/media/amasty/amgcard/image/generated_images_cache/4352343338944626.jpeg',
    //         type: 'image/jpeg',
    //     };

    //     try {
    //         await Share.open(shareOptions);
    //     } catch (error) {
    //         // Alert.alert('Error', error.message);
    //     }
    // }


    const onShare = async () => {
        const imageUrl = 'https://beta.alharamstores.com/pub/media/amasty/amgcard/image/generated_images_cache/4352343338944626.jpeg';
        const localFilePath = `${RNFS.DocumentDirectoryPath}/image.jpeg`;

        try {
            // Download the image
            const downloadResult = await RNFS.downloadFile({
                fromUrl: imageUrl,
                toFile: localFilePath,
            }).promise;

            if (downloadResult.statusCode === 200) {
                const shareOptions = {
                    title: 'Share via',
                    message: 'AL-Haram Stores (Giftcard)',
                    url: `file://${localFilePath}`, // Share the local file path
                    type: 'image/jpeg',
                };

                // Share the image
                await Share.open(shareOptions);
            } else {
                console.error('Failed to download image:', downloadResult);
            }
        } catch (error) {
            console.error('Error sharing:', error.message);
        }
    };

    return (
        <View style={styles.mainView}>
            <CommanHeader name={labale?.giftCardBalcnce} lang={lang} navigation={navigation} />
            <View style={styles.containerView}>
                {/* {!userData && */}
                <View style={styles.firstView}>
                    <View style={styles.imageView}>
                        <Image style={{ resizeMode: RESIZEMODE.contain, height: "100%", width: "100%" }} source={GiftCartICON} />
                    </View>
                    <Text style={styles.titelText}>{lang == NUMBER.num0 ? "التحقق من رصيد حساب بطاقة الهدايا" : "Gift Card Account Balance Check"}</Text>

                    <View style={[styles.boxView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={lang == NUMBER.num1 ? 'Enter Your Code' : "رمز البطاقة :"}
                            placeholderTextColor={COLOR.darkGray}
                            textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
                            onChangeText={(text) => { setGiftCardNumber(text) }}
                        />


                    </View>

                    <View style={[styles.btnView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                        <TouchableOpacity
                            onPress={() => { giftCardNumber?.length > 0 && getGiftCartdSatus() }}
                            style={styles.addBtnView}>
                            <Text style={styles.addText}>{lang == NUMBER.num0 ? "التحقق من الرصيد" : "Check Balance"}</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity
                            onPress={() => { navigation.navigate(NAVIGATION.giftcardHostory) }}
                            style={[styles.addBtnView, { backgroundColor: COLOR.primaray }]}>
                            <Text style={styles.addText}>{lang == NUMBER.num0 ? "التحقق من الرصيد" : "History"}</Text>
                        </TouchableOpacity> */}
                    </View>

                </View>
                {/* } */}

                {datas && <View>

                    <View style={styles.satusView}>

                        <View style={[styles.textView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                            <View>
                                <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                    <Text style={styles.firstText}>{lang == NUMBER.num1 ? "Code : " : "رمز البطاقة : "}</Text>
                                    <Text style={styles.secondView}>{datas?.code}</Text>
                                </View>

                                <View style={{ marginTop: ResponsiveSize(10) }} />

                                <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                    <Text style={styles.firstText}>{lang == NUMBER.num1 ? "Current Balance : " : "الرصيد الحالي : "}</Text>
                                    <Text style={styles.secondView}>{datas?.balance}</Text>
                                </View>
                                {/* <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center, marginTop: ResponsiveSize(5) }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                            <Text style={[styles.firstText]}>{"Status : "}</Text>
                                            <Text style={[styles.secondView, { color: "green", fontWeight: FONTWEGHIT.font600 }]}>{item?.status}</Text>

                                        </View> */}

                            </View>

                            <View style={{ justifyContent: 'flex-end' }}>
                                <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                    <Text style={[styles.firstText]}>{lang == NUMBER.num1 ? "Status : " : "الحالة : "}</Text>
                                    <Text style={[styles.secondView, { color: "green", fontWeight: FONTWEGHIT.font600 }]}>{datas?.status}</Text>

                                </View>

                                <View style={{ marginTop: ResponsiveSize(10) }} />

                                <TouchableOpacity
                                    style={styles.removeBTN}
                                >
                                </TouchableOpacity>

                            </View>

                        </View>

                        <View style={styles.lineView} />

                        <View style={{ width: "100%", flexDirection: ALINE.row, justifyContent: ALINE.spaceBetween }}>
                            <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                <Text style={styles.firstText}>{lang == NUMBER.num1 ? "Usage : " : "الاستخدام : "}</Text>
                                <Text style={styles.secondView}>{datas?.usage}</Text>

                            </View>
                            <View style={{ marginTop: ResponsiveSize(10) }} />
                            <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                <Text style={styles.firstText}>{lang == NUMBER.num1 ? "Valid Till : " : "صالحة حتى : "}</Text>
                                <Text style={styles.secondView}>{datas?.expiredDate}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                }



                {
                    data?.length > 0 && <Text style={{
                        color: COLOR.black,
                        fontSize: ResponsiveSize(20),
                        fontWeight: FONTWEGHIT.font600,
                        marginTop: ResponsiveSize(20),
                        textAlign: lang == NUMBER.num1 ? EXTRASTR.left : EXTRASTR.right
                    }}>{listTitel ? listTitel : "Gift Card List"}</Text>
                }

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    onScrollEndDrag={() => {
                        getGiftCardHistory()
                    }}
                >
                    {data?.length > 0 &&
                        data?.map((item, index) => {
                            return (
                                <View key={index} style={styles.satusView}>

                                    <View style={[styles.textView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                        <View>
                                            <View style={[{ flexDirection: 'row', alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                                <Text style={styles.firstText}>{lang == NUMBER.num1 ? "Code : " : "رمز البطاقة : "}</Text>
                                                <Text style={styles.secondView}>{item?.giftcard_code}</Text>

                                            </View>
                                            <View style={{ marginTop: ResponsiveSize(10) }} />
                                            <View style={[{ flexDirection: 'row', alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                                <Text style={styles.firstText}>{lang == NUMBER.num1 ? "Current Balance : " : "الرصيد الحالي : "}</Text>
                                                <Text style={styles.secondView}>{item?.balance}</Text>
                                            </View>
                                            {/* <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center, marginTop: ResponsiveSize(5) }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                            <Text style={[styles.firstText]}>{"Status : "}</Text>
                                            <Text style={[styles.secondView, { color: "green", fontWeight: FONTWEGHIT.font600 }]}>{item?.status}</Text>

                                        </View> */}

                                        </View>

                                        <View style={{ justifyContent: 'flex-end' }}>
                                            <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                                <Text style={[styles.firstText]}>{lang == NUMBER.num1 ? "Status : " : "الحالة : "}</Text>
                                                <Text style={[styles.secondView, { color: "green", fontWeight: FONTWEGHIT.font600 }]}>{item?.status_label}</Text>

                                            </View>

                                            <View style={{ marginTop: ResponsiveSize(10) }} />

                                            <TouchableOpacity
                                                style={styles.removeBTN}
                                            >
                                            </TouchableOpacity>

                                        </View>

                                    </View>

                                    <View style={styles.lineView} />

                                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}> */}
                                    <View style={{ width: "100%", justifyContent: ALINE.spaceBetween, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                            <Text style={styles.firstText}>{lang == NUMBER.num1 ? "Usage : " : "الاستخدام : "}</Text>
                                            <Text style={styles.secondView}>{item?.usage}</Text>

                                        </View>
                                        <View style={{ marginTop: ResponsiveSize(10) }} />
                                        <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                            <Text style={styles.firstText}>{lang == NUMBER.num1 ? "Valid Till : " : "صالحة حتى : "}</Text>
                                            <Text style={styles.secondView}>{item?.expired_date}</Text>
                                        </View>

                                    </View>

                                    {/* <TouchableOpacity
                                            onPress={() => { onShare() }}
                                            style={{
                                                marginTop: ResponsiveSize(20),
                                                backgroundColor: COLOR.primaray,
                                                padding: ResponsiveSize(10),
                                                width: ResponsiveSize(105),
                                                borderRadius: ResponsiveSize(20),
                                                alignSelf: 'flex-end',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                // justifyContent: 'center',
                                                alignItems: 'center',


                                            }}>
                                            <Text style={{
                                                color: COLOR.white,
                                                fontWeight: FONTWEGHIT.font600,
                                                fontSize: ResponsiveSize(18)
                                            }}>{"Share"}</Text>
                                            <Icon
                                                name={"share"} size={ResponsiveSize(30)} color={COLOR.white} />
                                        </TouchableOpacity> */}

                                    {/* </View> */}






                                </View>
                            )
                        })}
                </ScrollView>


            </View >
            {
                isLoadding &&
                <View style={{
                    position: 'absolute',
                    height: "100%",
                    width: "100%"
                }}>
                    <CusLoader />
                </View>

            }
        </View >
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
        borderRadius: ResponsiveSize(10),
        justifyContent: ALINE.center,
        alignItems: ALINE.center
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
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        marginTop: ResponsiveSize(20),
        justifyContent: ALINE.center,
        backgroundColor: COLOR.white,
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
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
        backgroundColor: "green",
        borderRadius: ResponsiveSize(10),
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        width: "100%"
    },
    addText: {
        color: COLOR.white,
        padding: ResponsiveSize(10)
    },
    satusView: {
        width: "100%",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.primaray,
        marginTop: ResponsiveSize(20),
        backgroundColor: COLOR.white,
        paddingHorizontal: ResponsiveSize(20),
        paddingVertical: ResponsiveSize(30),
        borderRadius: ResponsiveSize(10)
    },
    textView: {
        flexDirection: ALINE.row,
        width: "100%",
        justifyContent: ALINE.spaceBetween
    },
    firstText: {
        color: COLOR.black,
        fontWeight: FONTWEGHIT.font600,
        fontSize: ResponsiveSize(22)
    },
    secondView: {
        color: COLOR.black,
        fontSize: ResponsiveSize(20)
    },
    btnView: {
        width: "100%",
        height: ResponsiveSize(60),
        flexDirection: 'row',
        justifyContent: ALINE.spaceBetween,
        marginTop: ResponsiveSize(20)
    }
})