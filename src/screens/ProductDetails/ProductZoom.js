import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import Slider from '../../components/Slider'
import { useNavigation } from '@react-navigation/native'
import { COLOR } from '../../constants/style'
import { ResponsiveSize } from '../../utils/utils'
import { useSelector } from 'react-redux'


const ProductZoom = (props) => {
    const silderData = props?.route?.params?.data
    const navigation = useNavigation();
    const lang = useSelector(state => state.lang);
    return (
        <View style={{ flex: 1 }}>
            <CommanHeader lang={lang?.data} navigation={navigation} name={" "} />
            <View style={styles.mainView}>
                <View style={styles.silderView}>
                    <Slider data={silderData} height={ResponsiveSize(1000)} lottie={true} lang={lang} />
                </View>
            </View>
        </View>
    )
}

export default ProductZoom

const styles = StyleSheet.create({
    mainView: {
        height: "100%",
        width: "100%",
        backgroundColor: COLOR.white,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    silderView: {
        width: "100%",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    }
})