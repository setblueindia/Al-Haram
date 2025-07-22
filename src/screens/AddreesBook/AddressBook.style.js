import { StyleSheet } from "react-native";
import { ALINE, COLOR } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";
import { FONTS } from "../../constants/fonts";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    container: {
        padding: ResponsiveSize(20),
    },
    btnView: {
        width: "100%",
        height: ResponsiveSize(80),
        position: 'absolute',
        bottom: ResponsiveSize(50),
        paddingHorizontal: ResponsiveSize(30),
    },
    btn: {
        height: "100%",
        width: "100%",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.primaray,
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        backgroundColor: COLOR.white
    },
    btnText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(26),
        width: "100%",
        textAlign: ALINE.center,
        fontFamily: FONTS.Regular
    },
    addressView: {
        width: "100%",
        padding: ResponsiveSize(20),
        backgroundColor: "#CCCCCC20",
        borderWidth: ResponsiveSize(1),
        borderColor: "#00000070",
        borderRadius: ResponsiveSize(10)
    },
    firstView: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
    },
    nameView: {
        borderBottomWidth: ResponsiveSize(1),
        width: "70%",
        borderColor: "#00000050",
        flexDirection: ALINE.row
    },
    iconView: {
        flexDirection: ALINE.row,

    },
    firstNameText: {
        marginBottom: ResponsiveSize(10),
        color: COLOR.primaray,
        fontSize: ResponsiveSize(30),
        fontFamily: FONTS.Regular,
    },
    secondView: {
        marginTop: ResponsiveSize(20),
    },
    innerAddres: {
        lineHeight: ResponsiveSize(40),
        textAlign: 'justify',
        color: "#00000080",
        fontSize: ResponsiveSize(22),
        fontFamily: FONTS.Regular
    },
    thirdView: {
    },
    mobailText: {
        color: COLOR.black,
        fontFamily: FONTS.Regular,
        letterSpacing: ResponsiveSize(1)


    },
    thirdView: {
        marginTop: ResponsiveSize(20)
    }
})