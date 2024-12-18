import { Linking, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { Image } from 'react-native-animatable'
import { MaintananceICON, logo } from '../../assests'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import StatusBarCus from '../../components/CustomStatusBar'
import LottieView from 'lottie-react-native'

const Maintenance = ({ maintenanceData }) => {
    // console.log("maintenanceData", maintenanceData?.visible_update_button)
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
                    <Text style={styles.titelText}>{maintenanceData?.title}</Text>
                    <Text style={styles.desText}>{maintenanceData?.message}</Text>
                </View>

                {maintenanceData?.visible_update_button && <View style={styles.binView}>
                    <TouchableOpacity
                        onPress={() => {
                            const url = Platform.OS == 'ios' ?
                                "https://apps.apple.com/in/app/alharamstores-%D8%A7%D9%84%D9%87%D8%B1%D9%85/id1562821620" :
                                'https://play.google.com/store/apps/details?id=com.v2ideas.alharam';
                            Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
                        }}
                        style={styles.btn}>
                        <Text style={styles.updateText}>{"Update"}</Text>

                    </TouchableOpacity>

                </View>}
            </View>
            {/* <View style={{ position: 'absolute', height: "100%", width: ResponsiveSize(10), left: 0, }}>
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
            </View> */}
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
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
    },
    imageView: {
        height: ResponsiveSize(80),
        width: "100%",
    },
    img: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain'
    },
    TextView: {
        marginTop: ResponsiveSize(30),
        justifyContent: ALINE.center,
        alignItems: ALINE.center

    },
    titelText: {
        fontSize: ResponsiveSize(50),
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600
    },
    desText: {
        textAlign: ALINE.center,
        color: COLOR.darkGray,
        lineHeight: ResponsiveSize(30),
        width: ResponsiveSize(400),
        fontSize: ResponsiveSize(22),
        marginTop: ResponsiveSize(20),

    },
    lottiView: {
        height: ResponsiveSize(400),
        width: "100%",
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        marginTop: ResponsiveSize(50),
        // marginRight: ResponsiveSize(80)
    },
    binView: {
        position: 'absolute',
        bottom: ResponsiveSize(40),
        width: "100%",
        alignItems: ALINE.center,
        justifyContent: ALINE.center

    },
    btn: {
        height: ResponsiveSize(80),
        width: ResponsiveSize(300),
        backgroundColor: COLOR.primaray,
        borderRadius: ResponsiveSize(10),
        alignItems: ALINE.center,
        justifyContent: ALINE.center
    },
    updateText: {
        color: COLOR.white,
        fontSize: ResponsiveSize(25),
        fontWeight: FONTWEGHIT.font600
    }
})

