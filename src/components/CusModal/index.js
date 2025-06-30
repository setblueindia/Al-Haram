import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from '../../constants/style'
import { logo } from '../../assets'
import { useSelector } from 'react-redux'
import { NUMBER } from '../../constants/constants'
import { FONTS } from '../../constants/fonts'

const CusModal = ({ text, setModalShow, examapleText, notification, GETNotificationAPI, setErrro, onPress }) => {
    const lang = useSelector(state => state?.lang?.data);
    return (
        <View style={styles.mainView}>
            <View style={styles.container}>

                {notification &&
                    <View style={styles.imgView}>
                        <Image style={styles.Image} source={logo} />

                    </View>}

                {!notification && <Text style={styles.oopsText}>{lang == NUMBER.num0 ? "عفوا" : "Oops!"}</Text>}
                <View style={styles.textView}>
                    <Text style={styles.errorText}>{text}</Text>
                    {examapleText && <Text style={styles.errorText}>{examapleText}</Text>}
                </View>

                <TouchableOpacity
                    onPress={() => {
                        setModalShow(false),
                            GETNotificationAPI && GETNotificationAPI(),
                            setErrro && setErrro("false")
                        onPress && onPress()
                    }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>{lang == NUMBER.num0 ? "موافق" : "OK"}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default CusModal

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#00000050",
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        padding: ResponsiveSize(20)
    },
    container: {
        width: "100%",
        backgroundColor: COLOR.white,
        borderRadius: ResponsiveSize(20),
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        alignItems: ALINE.center,
        padding: ResponsiveSize(20)
    },
    Image: {
        height: "100%",
        width: "100%",
        resizeMode: RESIZEMODE.contain,

    },
    imgView: {
        height: ResponsiveSize(80),
        width: "100%",
        padding: ResponsiveSize(10)
    },
    textView: {
        height: ResponsiveSize(130),
        width: "100%",
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
    },
    button: {
        height: ResponsiveSize(60),
        width: ResponsiveSize(150),
        backgroundColor: COLOR.primaray,
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        marginTop: ResponsiveSize(30),
        borderRadius: ResponsiveSize(100)

    },
    buttonText: {
        color: COLOR.white,
        fontSize: ResponsiveSize(25),
        fontWeight: FONTWEGHIT.font400,
        width: "100%",
        textAlign: ALINE.center
    },
    errorText: {
        color: COLOR.black,
        textAlign: ALINE.center,
        width: "100%",
        fontFmily: FONTS.Regular
    },
    oopsText: {
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font700,
        fontSize: ResponsiveSize(30)
    }


})