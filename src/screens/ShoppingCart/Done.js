import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { ResponsiveSize } from '../../utils/utils';
import { ALINE, COLOR } from '../../constants/style';
import { doneIcon } from '../../assests';
import Button from '../../components/Button';
import { NAVIGATION, NUMBER } from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';


const Done = (props) => {
    const navigation = useNavigation()
    const lang = props?.route?.params?.lang
    const result = props?.route?.params?.response
    // console.log("DONE RESPONSE ::::::::", result)

    return (

        <View style={styles.mainView}>
            <View style={styles.lottiView}>
                <LottieView
                    //   ref={animationRef}
                    source={require('../../assests/Lottianimation/Done.json')}
                    autoPlay loop
                    resizeMode='cover'
                    style={{ height: "100%", width: "100%" }}
                />
                <View style={styles.thumIcon}>
                    <Image style={styles.icon} source={doneIcon} />
                </View>
            </View>

            <View style={styles.textView}>
                <Text style={styles.congrationText}>{lang == NUMBER.num0 ? "تهنئة" : "Congratulation"}</Text>
                <Text style={styles.SecondView}>{lang == NUMBER.num0 ? "رقم طلبك : 000078338" : "Your Order Number : 000078338"}</Text>
                <Text style={styles.lastText}>{lang == NUMBER.num0 ? "سوف نرسل لك تأكيد الطلب مع التفاصيل ومعلومات التتبع" : "We will send you order confirmation with details and tracking information"}</Text>
            </View>


            <View style={styles.btnView}>
                <Button text={lang == NUMBER.num0 ? "مشاهدة الطلب" : "View Order"} />
                <TouchableOpacity
                    onPress={() => { navigation.navigate(NAVIGATION.HomeScreen) }}
                    style={styles.btnContinues}>
                    <Text style={styles.continuesShoppingsText}>{lang == NUMBER.num0 ? "مشاهدة الطلب" : "Continue Shopping"}</Text>
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
        // backgroundColor:"#000000"
    },
    mainView: {
        // justifyContent: 'center',
        alignItems: ALINE.center,
        flex: 1,
    },
    textView: {
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        paddingHorizontal: ResponsiveSize(20)
    },
    SecondView: {
        textAlign: ALINE.center,
        color: COLOR.black
    },
    congrationText: {
        fontSize: ResponsiveSize(60),
        color: COLOR.black
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
        resizeMode:'contain',
        height: "100%",
        width: "100%",
        resizeMode: ALINE.center
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
        fontSize: ResponsiveSize(25)
    }
})