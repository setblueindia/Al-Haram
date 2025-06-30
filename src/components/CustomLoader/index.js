import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR } from '../../constants/style'

const windowWidth = Dimensions.get('window').height;

const CusLoader = () => {
    return (
        <View style={styles.mainView}>
            <ActivityIndicator style={styles.indicator} size='small' color={COLOR.primaray} />
        </View>
    )
}

export default CusLoader

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        height: windowWidth,
        width: "100%",
        backgroundColor: COLOR.BLACK30,
        alignContent: ALINE.center,
        justifyContent: ALINE.center
    },
    indicator: {
        backgroundColor: COLOR.white,
        padding: ResponsiveSize(20),
        borderRadius: ResponsiveSize(10),
        alignSelf: ALINE.center,
        elevation: ResponsiveSize(30),
        shadowColor: COLOR.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    }
})