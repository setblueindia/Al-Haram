import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native';
import { ResponsiveSize } from '../../utils/utils';
import { ALINE, COLOR } from '../../constants/style';
import { ErrorIcon, ErrorImg, doneIcon } from '../../assests';
import Button from '../../components/Button';
import { ASYNCSTORAGE, NAVIGATION, NUMBER } from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ExpireToken, SendNotifiction, StatusUpadate } from '../../api/axios.api';
import { addProduct } from '../../redux/Slices/AddToCartSlice';


const Done = (props) => {
    const navigation = useNavigation()
    const userData = useSelector(state => state.userData.data)
    const lang = useSelector(state => state.lang.data)
    const result = props?.route?.params?.response
    const OrderID = props?.route?.params?.orderId
    const responseID = props?.route?.params?.responseID
    const disPatch = useDispatch()



    console.log("Response ID ::::::: ", responseID)

    const Order_Success = lang == NUMBER.num1 ? `Your order number: ${OrderID} \n Thank you for shopping at Al Haram Online Store.` : `رقم طلبك: ${OrderID}. \n شكراً لتسوقكم من متجر الهرم الإلكتروني.`
    const SOMETHING_WRONG = lang == NUMBER.num1 ? "Something Went wrong, Please try again" : "يوجد خطأ ما، الرجاء المحاولة مرة أخرى"
    const oppss = lang == NUMBER.num1 ? "OOOOps..." : "خطأ ....."
    const Congratulation = lang == NUMBER.num1 ? "The order has been successfully processed." : "تمت عملية الطلب بنجاح"

    const senNotiFication = async () => {
        const FCMToken = await AsyncStorage.getItem(ASYNCSTORAGE.FCMToken)
        const data =
            `mutation{
            orderPushNotificationSentToCustomer(input:{
            customer_id: ${userData?.id}
            notification_type: "order"
            order_id: "${OrderID}"
            store:${lang}
            device_id: "${FCMToken}"
        }){
            status
            message
        }
     }
  `
        try {
            const rep = await SendNotifiction(data, lang)
            // updateOrderStatus()
        } catch (error) {
            console.log("SEND NOTIFICATION ERROR :::::::::::: ", error)
        }
    }

    const updateOrderStatus = async () => {
        const fromdata = new FormData
        const sfromdata = new FormData
        fromdata.append("order_id", responseID)
        fromdata.append("status", result?.data?.status == "Successful" ? "success" : "fail")
        fromdata.append("message", " ")
        fromdata.append("urway_trans_id", result?.data?.tranid)
        try {
            const response = await StatusUpadate(fromdata)
            const result = await ExpireToken(sfromdata)
        } catch (error) {
            console.log("UPDATE STATUS ERROR :::::::::::::", error)
        }
    }

    const tokenExpire = async () => {
        const fromdata = new FormData()
        try {
            const result = await ExpireToken(fromdata)
            console.log("Token ::::::: ", result?.data)

        } catch (error) {
            console.log("Token Error :::::::::: ", error)
        }
    }

    useEffect(() => {
        tokenExpire()
        senNotiFication()
        disPatch(addProduct(0))
        result?.data?.tranid && updateOrderStatus()
    }, [result?.data?.tranid])


    return (
        <View style={styles.mainView}>


            {
                result?.data &&
                <View style={styles.lottiView}>
                    {result?.data?.status == "Successful" &&
                        <LottieView
                            source={require('../../assests/Lottianimation/Done.json')}
                            autoPlay loop
                            resizeMode='cover'
                            style={{ height: "100%", width: "100%" }}
                        />}
                    <View style={styles.thumIcon}>
                        <Image style={styles.icon} source={result?.data?.status == "Successful" ? doneIcon : ErrorIcon} />
                    </View>
                </View>
            }

            {!result?.data && <View style={styles.lottiView}>
                <LottieView
                    source={require('../../assests/Lottianimation/Done.json')}
                    autoPlay loop
                    resizeMode='cover'
                    style={{ height: "100%", width: "100%" }}
                />
                <View style={styles.thumIcon}>
                    <Image style={styles.icon} source={doneIcon} />
                </View>
            </View>}

            <View style={styles.textView}>

                {result?.data && <Text style={styles.congrationText}>{result?.data?.status == "Successful" ? Congratulation : oppss}</Text>}
                {!result?.data && <Text style={styles.congrationText}>{Congratulation}</Text>}

                {result?.data && <Text style={styles.lastText}>{result?.data?.status == "Successful" ? Order_Success : SOMETHING_WRONG}</Text>}
                {!result?.data && <Text style={styles.lastText}>{Order_Success}</Text>}

            </View>
            <View style={styles.btnView}>
                <Button onPress={() => { navigation.replace(NAVIGATION.MyOrderSscreen) }} text={lang == NUMBER.num0 ? "عرض الطلب" : "View Order"} />
                <TouchableOpacity
                    onPress={() => { navigation.replace(NAVIGATION.DrawerNavigation) }}
                    style={styles.btnContinues}>
                    <Text style={styles.continuesShoppingsText}>{lang == NUMBER.num0 ? "متابعة التسوق" : "Continue Shopping"}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Done

const styles = StyleSheet.create({
    lottiView: {
        height: ResponsiveSize(600),
        width: "100%",
        justifyContent: ALINE.center,
        alignItems: ALINE.center
    },
    mainView: {
        alignItems: ALINE.center,
        flex: 1,
    },
    textView: {
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        paddingHorizontal: ResponsiveSize(20),
    },
    SecondView: {
        textAlign: ALINE.center,
        color: COLOR.black,
    },
    congrationText: {
        fontSize: ResponsiveSize(40),
        color: COLOR.black,
        width: ResponsiveSize(600),
        textAlign: ALINE.center,
        paddingVertical: ResponsiveSize(15),
    },
    lastText: {
        color: "#00000080",
        textAlign: ALINE.center,
    },
    thumIcon: {
        height: ResponsiveSize(200),
        width: ResponsiveSize(200),
        position: 'absolute',
        bottom: ResponsiveSize(0),
    },
    icon: {
        resizeMode: 'contain',
        height: "100%",
        width: "100%",
    },
    btnView: {
        width: "100%",
        paddingHorizontal: ResponsiveSize(20),
        marginTop: ResponsiveSize(20)
    },
    btnContinues: {
        width: "100%",
        height: ResponsiveSize(80),
        borderWidth: ResponsiveSize(1.5),
        borderColor: COLOR.liteGreen,
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        marginTop: ResponsiveSize(20)
    },
    continuesShoppingsText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(25),
        width: "100%",
        textAlign: 'center'
        // flex:1
    }
})