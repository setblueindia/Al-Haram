import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ALINE, COLOR } from '../../constants/style'
import { ResponsiveSize } from '../../utils/utils'

const Reviewpoupp = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles.conatiner}>

            </View>

        </View>
    )
}

export default Reviewpoupp

const styles = StyleSheet.create({
    mainView: {
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: "#00000030",
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        paddingHorizontal: ResponsiveSize(20)
    },
    conatiner: {
        height: ResponsiveSize(300),
        width: "100%",
        backgroundColor: COLOR.white,
        borderRadius: ResponsiveSize(20)
    }
})