import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, RESIZEMODE } from '../../constants/style'
import LottieView from 'lottie-react-native'
import CustomeHeader from '../CustomeHeader'
import CommanHeader from '../ComanHeader'

const DataNotFound = ({ userData, text, navigation, header }) => {
    return (
        <View style={styles.lottiMainView}>

            {header
                ? <CommanHeader navigation={navigation} /> : <CustomeHeader search={true} like={true} shoppingcart={true} userData={userData} />}
            <View style={styles.lottiView}>
                <LottieView
                    source={require('../../assests/Lottianimation/Nonotofication2.json')}
                    autoPlay loop
                    resizeMode={RESIZEMODE.cover}
                    style={{ height: ResponsiveSize(300), width: ResponsiveSize(300) }}
                />
                <View style={styles.lottiTextView}>
                    <Text style={{ color: COLOR.white, fontSize: ResponsiveSize(25) }}>{text}</Text>
                </View>
            </View>
        </View>
    )
}

export default DataNotFound

const styles = StyleSheet.create({
    lottiMainView: {
        position: 'absolute',
        height: "100%",
        width: "100%"
    },
    lottiView: {
        flex: 1,
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        height: "100%",
        width: "100%",
        backgroundColor: "#00000010",

    },
    lottiTextView: {
        height: ResponsiveSize(60),
        width: ResponsiveSize(300),
        borderRadius: ResponsiveSize(100),
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        backgroundColor: "#00000070"
    }
})