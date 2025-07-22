import { StyleSheet } from "react-native";
import { ALINE, COLOR, FONTWEGHIT } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";
import { FONTS } from "../../constants/fonts";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    conatainer: {
        backgroundColor: COLOR.white,
        paddingHorizontal: ResponsiveSize(20),
        marginTop: ResponsiveSize(20)
    },
    devider: {
        marginTop: ResponsiveSize(5)
    },
    contiresText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(30),
        marginLeft: ResponsiveSize(20),
        marginTop: ResponsiveSize(20),
        fontFamily: FONTS.Regular
    },
    secondView: {
        marginTop: ResponsiveSize(20),
        backgroundColor: "#F7F7F7"
    },
    CheackView: {
        flexDirection: ALINE.row,
        padding: ResponsiveSize(20),
        alignItems: ALINE.center,
    },
    cheackText: {
        color: COLOR.primaray,
        fontSize: ResponsiveSize(24),
        marginLeft: ResponsiveSize(20),
        fontFamily: FONTS.Regular,
        textAlign: ALINE.center,
    },
    btnView: {
        width: "100%",
        marginTop: ResponsiveSize(20)
    },
    stateTextView: {
        width: "100%",
        borderBottomWidth: ResponsiveSize(1),
        borderBottomColor: COLOR.gray,
        height: ResponsiveSize(80),
        justifyContent: ALINE.center,
        paddingHorizontal: ResponsiveSize(20)
    },
    stateTextStyle: {
        color: "#00000050",
        fontFamily: FONTS.Regular
    },
    listView: {
        width: "100%",
        height: ResponsiveSize(500),
        backgroundColor: COLOR.white,
        justifyContent: ALINE.spaceBetween,
        padding: ResponsiveSize(20),
        alignItems: ALINE.center,
        borderTopLeftRadius: ResponsiveSize(30),
        borderTopRightRadius: ResponsiveSize(30)
    },
    popView: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        justifyContent: ALINE.flexend,
        alignItems: ALINE.center,
        backgroundColor: "#00000030",
    },

    ScrollView: {
        height: "100%",
        width: "100%",
        borderColor: COLOR.liteGray,
        borderWidth: ResponsiveSize(1)
    },

    itemsName: {
        height: ResponsiveSize(80),
        width: "100%",
        borderBottomWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        justifyContent: ALINE.center,
        paddingHorizontal: ResponsiveSize(20)
    },

    customerName: {
        fontSize: ResponsiveSize(25),
        color: COLOR.darkGray,
        fontFamily: FONTS.Regular
    },
    serchView: {
        height: ResponsiveSize(80),
        width: "100%",
        backgroundColor: "#FFE9E9",
        borderBottomWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        paddingHorizontal: ResponsiveSize(20),
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.liteGray,
        color: COLOR.black,
        fontFamily: FONTS.Regular,
        fontSize: ResponsiveSize(22)
    },
    PopBtnView: {
        flexDirection: ALINE.row,
        width: "100%",
        padding: ResponsiveSize(20),
        justifyContent: ALINE.spaceBetween,
        backgroundColor: "#FFE9E9",

    },
    poppBtn: {
        height: ResponsiveSize(80),
        width: ResponsiveSize(230),
        backgroundColor: COLOR.primaray,
        alignItems: ALINE.center,
        justifyContent: ALINE.center,

    },
    cancalText: {
        color: COLOR.white,
        fontSize: ResponsiveSize(26),
        fontWeight: FONTWEGHIT.font600,
        fontFamily: FONTS.SemiBold
    },
    popTex: {
        color: COLOR.primaray,
        fontSize: ResponsiveSize(30),
        padding: ResponsiveSize(20),
        width: "100%",
        textAlign: ALINE.center
    }
})