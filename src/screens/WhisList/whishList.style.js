import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from "../../constants/style";
import { FONTS } from "../../constants/fonts";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white,
        width: "100%"
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: RESIZEMODE.cover,
        borderRadius: ResponsiveSize(20)
    },
    imageView: {
        height: ResponsiveSize(350),
        flex: 1,
        // width: ResponsiveSize(275),
        justifyContent: 'space-between',
        padding: ResponsiveSize(20),
        backgroundColor: COLOR.white,
        borderColor: COLOR.gray,
        borderRadius: ResponsiveSize(10),
        borderWidth: ResponsiveSize(0.5),
        margin: ResponsiveSize(10),
    },
    flatList: {
        marginTop: ResponsiveSize(10),
        // alignSelf:'center's
    },
    textView: {
        margin: ResponsiveSize(10),
        paddingHorizontal: ResponsiveSize(20),
        width: ResponsiveSize(270),
    },

    priceText: {
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600
    },

    productName: {
        fontSize: ResponsiveSize(22),
        fontWeight: FONTWEGHIT.font600,
        color: COLOR.black,
        fontFamily: FONTS.Regular
    },
    likeView: {
        height: ResponsiveSize(60),
        width: ResponsiveSize(60),
        borderRadius: ResponsiveSize(100),
        position: 'absolute',
        top: ResponsiveSize(20),
        right: ResponsiveSize(30),
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        justifyContent: ALINE.center,
        alignItems: ALINE.center
    }
})