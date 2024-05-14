import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR } from '../../constants/style'

const windowWidth = Dimensions.get('window').height;

const CusLoader = () => {
    return (
        <View style={styles.mainView}>
            <ActivityIndicator style={styles.indicator} size='large' color={COLOR.primaray} />
        </View>
    )
}

export default CusLoader

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        height: windowWidth,
        width: "100%",
        backgroundColor: "#00000030",
        alignContent: 'center',
        justifyContent: 'center'
    },
    indicator: {
        backgroundColor: COLOR.white,
        height: ResponsiveSize(130),
        width: ResponsiveSize(130),
        borderRadius: ResponsiveSize(20),
        alignSelf: ALINE.center,
        elevation: ResponsiveSize(30),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    }
})