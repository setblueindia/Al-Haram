import { StyleSheet } from "react-native";
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";
import { EXTRASTR } from "../../constants/constants";
import { FONTS } from "../../constants/fonts";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white,
        height: "100%",
        width: "100%"
    },
    containView: {
        padding: ResponsiveSize(20),
        flex: 1,
        height: "100%",
        width: "100%",
    },
    firstView: {
        width: "100%",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.primaray,
        borderRadius: ResponsiveSize(20)
    },
    OrderHeader: {
        width: "100%",
        borderBottomWidth: ResponsiveSize(1),
        borderBottomColor: COLOR.primaray,
        backgroundColor: "#FFF3F4",
        borderTopEndRadius: ResponsiveSize(20),
        borderTopLeftRadius: ResponsiveSize(20),
        padding: ResponsiveSize(20),
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween
    },

    orderTexrt: {
        fontSize: ResponsiveSize(25),
        color: COLOR.black,
        fontFamily: FONTS.SemiBold
    },
    DottView: {
        height: ResponsiveSize(10),
        width: ResponsiveSize(10),
        borderRadius: ResponsiveSize(100),
        backgroundColor: "green",
    },
    statusText: {
        color: "green",
        marginLeft: ResponsiveSize(10),
        flex: 1,
        textAlign: EXTRASTR.left,
        fontFamily: FONTS.Regular
    },
    StatusView: {
        flexDirection: ALINE.row,
        alignItems: ALINE.center,
        marginTop: ResponsiveSize(5),

    },
    dateTextOrder: {
        color: "#00000070",
        fontFamily: FONTS.Regular

    },
    printText: {
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600,
        width: ResponsiveSize(150),
        textAlign: EXTRASTR.right

    },
    reOrderText: {
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600,
        textAlign: EXTRASTR.right,
        fontFamily: FONTS.Medium
    },
    orderDetails: {
        paddingHorizontal: ResponsiveSize(20)
    },
    headerText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(23),
        fontFamily: FONTS.SemiBold
    },
    itemsDetaisCommon: {
        width: "100%",
        borderColor: COLOR.gray,
        alignItems: ALINE.center,
        padding: ResponsiveSize(20),
        flexDirection: ALINE.row
    },
    leftTex: {
        color: "#00000070",
        width: ResponsiveSize(200)
    },
    rightText: {
        color: COLOR.black,
        fontWeight: FONTWEGHIT.font600
    },
    subTotalText: {
        color: COLOR?.primaray,
        width: ResponsiveSize(200),
        fontSize: ResponsiveSize(25),
        fontWeight: FONTWEGHIT.font600

    },
    secomdView: {
        width: "100%",
        backgroundColor: "#00000005",
        marginTop: ResponsiveSize(30),
        borderRadius: ResponsiveSize(20),
        borderWidth: ResponsiveSize(1),
        borderColor: "#00000070",
    },
    secondComman: {
        borderBottomWidth: ResponsiveSize(1),
        borderBlockColor: "#00000080",
        padding: ResponsiveSize(20),
        fontFamily: FONTS.Regular

    },
    secondTitleText: {
        color: "#00000070",
        width: ResponsiveSize(350),
        fontFamily: FONTS.Medium
    },
    secondPriceText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(20),
        textAlign: EXTRASTR.right,
        fontFamily: FONTS.Medium
    },
    addresstext: {

    },
    addressView: {
        padding: ResponsiveSize(20),
        borderColor: "#00000050"
    },
    addressText: {
        lineHeight: ResponsiveSize(30),
        color: "#202020",
        fontFamily: FONTS.Regular


    },
    btnView: {
        width: "100%",
        position: 'absolute',
        bottom: ResponsiveSize(20),
        paddingHorizontal: ResponsiveSize(20)
    },
    itemsList: {
        width: "100%",
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        alignItems: ALINE.center


    },

    topListView: {
        width: "100%",
        borderRadius: ResponsiveSize(20),
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.primaray,
        padding: ResponsiveSize(10),
    },
    imgeView: {
        height: ResponsiveSize(120),
        width: ResponsiveSize(100),
        borderRadius: ResponsiveSize(10),
    },
    productImg: {
        height: "100%",
        width: "100%",
        resizeMode: RESIZEMODE.cover
    },
    firstOne: {
        flexDirection: ALINE.row
    },
    nameView: {
        padding: ResponsiveSize(5),
        paddingHorizontal: ResponsiveSize(10),
    },
    normalText: {
        color: COLOR.black,
        fontFamily: FONTS.Regular
    },
    fistPriceTex: {
        textAlign: ALINE.center,
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600,
        marginRight: ResponsiveSize(20),
        flex: 1,
        textAlign: EXTRASTR.right
    },
    orderNameText: {
        width: ResponsiveSize(250),
        fontSize: ResponsiveSize(20),
        color: COLOR.black,
        fontFamily: FONTS.Medium
    },

    titleText: {
        color: COLOR.darkGray,
        fontFamily: FONTS.Medium
    },
    invocieText: {
        color: COLOR.primaray,
        textAlign: EXTRASTR.right,
        fontFamily: FONTS.Medium

    },
    invocieNumber: {
        color: COLOR.black,
        fontWeight: "300",
        textAlign: EXTRASTR.right,
        fontSize: ResponsiveSize(18),
        fontFamily: FONTS.Regular
    },
    headerTopView: {
        marginBottom: ResponsiveSize(20),
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween
    },
    invocieNumberView: {
        flexDirection: ALINE.row,
        width: ResponsiveSize(250),
        justifyContent: ALINE.flexend,
        flexWrap: 'wrap'
    },
    headerlastView: {
        flexDirection: ALINE.row,
        alignItems: ALINE.center,
        justifyContent: ALINE.spaceBetween
    },
    GiftCardCodeView: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        marginTop: ResponsiveSize("20")
    },
    GiftCardPriceView: {
        width: ResponsiveSize(100),
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        flexDirection: ALINE.row,

    },
    CurrencyView: {
        height: ResponsiveSize(18),
        width: ResponsiveSize(18),
        tintColor: COLOR.darkGray
    },
    Loadder: {
        height: "100%",
        width: "100%",
        position: 'absolute'
    }


})