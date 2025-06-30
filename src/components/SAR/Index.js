import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR } from '../../constants/style'
import { NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'
import { FONTS } from '../../constants/fonts'

const SAR = ({ price, normal, textAlign, tintColor, texSize, imgSize }) => {

    const lang = useSelector(state => state.lang)
    const labale = lang?.data == NUMBER.num0 ? Ar : En
    return (
        <View style={[[styles.mainView, textAlign]]}>

            {lang?.data == NUMBER.num0 &&
                <Image
                    style={[
                        styles.img,
                        tintColor && { tintColor: tintColor },
                        imgSize && { height: imgSize, width: imgSize },
                        !normal && { transform: [{ scaleX: -1 }] }
                    ]}
                    source={
                        require('../../assets/images/Common/SAR.png')} />
            }


            {lang?.data == NUMBER.num0 &&
                <View style={{
                    width: ResponsiveSize(5)
                }} />}



            {(lang?.data == NUMBER.num0 && price) &&
                <Text style={[
                    styles.ARP,
                    (lang?.data == NUMBER.num0 && !normal) && { transform: [{ rotateY: '180deg' }] },
                    texSize && { fontSize: texSize }, tintColor && { color: tintColor }]}>
                    {" " + price}</Text>}


            {(lang?.data == NUMBER.num1 && price) &&
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={[styles.img, tintColor && { tintColor: tintColor }, imgSize && { height: imgSize, width: imgSize }]}
                        source={require('../../assets/images/Common/SAR.png')} />
                    <Text style={[
                        styles.ENP,
                        (lang?.data == NUMBER.num0 && !normal) && { transform: [{ rotateY: '180deg' }] },
                        tintColor && { color: tintColor },
                        texSize && { fontSize: texSize }]}>
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
        flexDirection: ALINE.row,
        width: "100%",
        alignSelf: ALINE.center,
        alignItems: ALINE.center,
        justifyContent: ALINE.center,

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
        fontFamily: FONTS.SemiBold

    },
    ENP: {
        color: COLOR.primaray,
        fontSize: ResponsiveSize(22),
        fontFamily: FONTS.SemiBold
    }


})