import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { ICON, NAVIGATION, NUMBER } from '../../constants/constants';
import { ResponsiveSize } from '../../utils/utils';
import StatusBarCus from '../CustomStatusBar';
import { logo } from '../../assests';
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';

const CommanHeader = ({ navigation, lang, name }) => {
    const productCount = useSelector(state => state?.AddToCart)
    return (
        <View style={styles.mainView}>
            <StatusBarCus />
            <View style={[styles.container, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                >
                    <Icon style={styles.icon}
                        name={lang == NUMBER.num0 ? ICON.arrowright : ICON.arrowleft}
                        size={ResponsiveSize(40)} coloe={COLOR.black} />
                </TouchableOpacity>

                <View style={[styles.logoImage, { justifyContent: 'center', alignItems: 'center', width: name ? ResponsiveSize(300) : ResponsiveSize(200) }]}>
                    {name && <Text style={styles.text}>{name}</Text>}
                    {!name && <Image style={styles.image} source={logo} />}
                </View>

                <TouchableOpacity
                    onPress={() => { navigation.navigate(NAVIGATION.Shoppingcart) }}
                    style={{ width: ResponsiveSize(40) }}>
                    {!name &&
                        <Icon style={styles.icon}
                            name={ICON.shoppingcart}
                            size={ResponsiveSize(40)}
                            coloe={COLOR.black} />}
                    {
                        (productCount?.data > 0 && !name) &&
                        <View style={styles.productCountView}>
                            <Text style={styles.productText}>{productCount?.data}</Text>
                        </View>
                    }
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default CommanHeader

const styles = StyleSheet.create({
    logoImage: {
        height: ResponsiveSize(100),
        // width: ResponsiveSize(200),

    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain'
    },
    mainView: {
        width: "100%",
        paddingHorizontal: ResponsiveSize(20),
        backgroundColor: COLOR.white,
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        shadowColor: '#000',
    },
    container: {
        alignItems: ALINE.center,
        justifyContent: ALINE.spaceBetween,
        flexDirection: ALINE.row,
    },
    icon: {
        color: COLOR.black,
        size: ResponsiveSize(35)
    },
    text: {
        color: COLOR.black,
        fontSize: ResponsiveSize(30),
        width:ResponsiveSize(300),
        textAlign:'center'
    },
    productCountView: {
        height: ResponsiveSize(30),
        width: ResponsiveSize(30),
        backgroundColor: COLOR.primaray,
        borderRadius: ResponsiveSize(100),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: ResponsiveSize(-10),
        right: ResponsiveSize(-10),


    },
    productText: {
        color: COLOR.white,
        fontSize: ResponsiveSize(20),
        fontWeight: FONTWEGHIT.font600
    }
})