import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { Image } from 'react-native-animatable'
import { MaintananceICON, logo } from '../../assests'
import { COLOR, FONTWEGHIT } from '../../constants/style'
import StatusBarCus from '../../components/CustomStatusBar'
import LottieView from 'lottie-react-native'

const Maintenance = () => {
    return (
        <View style={styles.mainView}>
            <StatusBarCus />
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image style={{ height: "100%", width: "100%", resizeMode: 'contain' }} source={logo} />
                </View>
                <View style={styles.lottiView} >
                    <LottieView
                        source={require('../../assests/Lottianimation/MaintanancesLottie2.json')}
                        autoPlay loop
                        resizeMode='cover'
                        style={{ height: "100%", width: "100%" }}
                    />
                </View>
                <View style={styles.TextView}>
                    <Text style={styles.titelText}>{"Under Maintenance"}</Text>
                    <Text style={styles.desText}>{"Sorry for the inconvenience, but perfoming some maintenance at the moment. if you need to reach us, you can always contact us on "}</Text>
                </View>

                <View style={styles.binView}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.updateText}>{"Update"}</Text>

                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ position: 'absolute', height: "100%", width: ResponsiveSize(10), left: 0, }}>
                <Image style={{
                    height: "100%",
                    width: "100%",
                    resizeMode: 'cover'
                }} source={require("../../assests/images/Common/border.gif")} />
            </View>

            <View style={{ position: 'absolute', height: "100%", width: ResponsiveSize(10), right: 0 }}>
                <Image style={{
                    height: "100%",
                    width: "100%",
                    resizeMode: 'cover'
                }} source={require("../../assests/images/Common/border.gif")} />
            </View>
        </View>
    )
}

export default Maintenance

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: COLOR.white
    },
    container: {
        flex: 1,
        padding: ResponsiveSize(20),
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',


    },
    imageView: {
        height: ResponsiveSize(80),
        width: "100%",
        // position: 'absolute',
        // top: 0
        // backgroundColor: COLOR.black

    },
    img: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain'
    },
    TextView: {
        marginTop: ResponsiveSize(30),
        justifyContent: 'center',
        alignItems: 'center'

    },
    titelText: {
        fontSize: ResponsiveSize(50),
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600
    },
    desText: {
        textAlign: 'center',
        color: COLOR.darkGray,
        lineHeight: ResponsiveSize(30),
        width: ResponsiveSize(400),
        fontSize: ResponsiveSize(22),
        marginTop: ResponsiveSize(20),

    },
    lottiView: {
        height: ResponsiveSize(400),
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ResponsiveSize(50),
        // marginRight: ResponsiveSize(80)
    },
    binView: {
        position: 'absolute',
        bottom: ResponsiveSize(40),
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'

    },
    btn: {
        height: ResponsiveSize(80),
        width: ResponsiveSize(300),
        backgroundColor: COLOR.primaray,
        borderRadius: ResponsiveSize(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    updateText: {
        color: COLOR.white,
        fontSize: ResponsiveSize(25),
        fontWeight: FONTWEGHIT.font600
    }
})