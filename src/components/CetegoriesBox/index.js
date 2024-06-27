import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WomenBanner } from '../../assests'
import { ResponsiveSize } from '../../utils/utils'
import { RESIZEMODE } from '../../constants/style'

const CetegoriesBox = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles.bannerView}>
                <Image style={styles.bannerImg} source={WomenBanner} />
            </View>
            <View style={styles.textView}>
                <Text>{"Women's Fashion"}</Text>
            </View>
        </View>
    )
}

export default CetegoriesBox

const styles = StyleSheet.create({
    mainView: {

    },
    bannerView: {
        height: ResponsiveSize(250),
        width: "100%",
        paddingHorizontal:ResponsiveSize(20),
        // backgroundColor:"#000"
    },
    bannerImg:{
        height:"100%",
        width:"100%",
        resizeMode:RESIZEMODE.contain
    },
    textView:{

    }
})