import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { ResponsiveSize } from '../../utils/utils'
import { COLOR } from '../../constants/style'
import { NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'

const SAR = ({ price, normal, textAlign, tintColor, texSize, imgSize }) => {

    const lang = useSelector(state => state.lang)
    const labale = lang?.data == NUMBER.num0 ? Ar : En
    return (
        <View style={[[styles.mainView, textAlign]]}>

            {lang?.data == NUMBER.num0 &&
                <Image
                    style={[styles.img, tintColor && { tintColor: tintColor }, imgSize && { height: imgSize, width: imgSize }, !normal && { transform: [{ scaleX: -1 }] }]}
                    source={
                        require('../../assests/images/Common/SAR.png')} />
            }


            {lang?.data == NUMBER.num0 && <View style={{ width: ResponsiveSize(5) }} />}



            {(lang?.data == NUMBER.num0 && price) &&
                <Text style={[
                    styles.ARP,
                    (lang?.data == NUMBER.num0 && !normal) && { transform: [{ rotateY: '180deg' }] }, texSize && { fontSize: texSize }, tintColor && { color: tintColor }]}>
                    {" " + price}</Text>}


            {(lang?.data == NUMBER.num1 && price) &&
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={[styles.img, tintColor && { tintColor: tintColor }, imgSize && { height: imgSize, width: imgSize }]}
                        source={require('../../assests/images/Common/SAR.png')} />
                    <Text style={[
                        styles.ENP,
                        (lang?.data == NUMBER.num0 && !normal) && { transform: [{ rotateY: '180deg' }] }, tintColor && { color: tintColor }, texSize && { fontSize: texSize }]}>
                        {/* {labale.SAR + " " + price} */}
                        {" " + price}
                    </Text>
                </View>

            }

        </View>


    )
}

export default SAR

const styles = StyleSheet.create({
    mainView: {

        flexDirection: 'row',
        width: "100%",
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    img: {
        height: ResponsiveSize(20),
        width: ResponsiveSize(20),
        tintColor: COLOR.primaray,
        resizeMode: 'contain'
    },
    ARP: {
        color: COLOR.primaray,
        fontSize: ResponsiveSize(22),
        fontWeight: '600',

    },
    ENP: {
        color: COLOR.primaray,
        fontSize: ResponsiveSize(22),
        fontWeight: '600',
    }


})