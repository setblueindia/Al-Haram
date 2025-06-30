import { StyleSheet } from "react-native";
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";
import { FONTS } from "../../constants/fonts";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    sliderView: {
        height: ResponsiveSize(300),
        width: "100%",
        marginTop: ResponsiveSize(20),
        borderRadius: ResponsiveSize(20),
    },
    containerView: {
        flex: 1,
    },
    titelText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(35),
        fontWeight: FONTWEGHIT.font400,
        marginTop: ResponsiveSize(20),
        fontFamily: FONTS.Regular
    },
    desText: {
        color: COLOR.darkGray,
        fontFamily: FONTS.Regular
    },
    priceText1: {
        color: COLOR.primaray,
        fontSize: ResponsiveSize(40),
        fontWeight: FONTWEGHIT.font400,
        marginTop: ResponsiveSize(10),
        marginBottom: ResponsiveSize(10),
        fontFamily: FONTS.Medium

    },
    cartPriceText: {
        color: COLOR.black,
        fontWeight: FONTWEGHIT.font400,
        fontFamily: FONTS.Regular
    },
    priceContainer: {
        flexDirection: ALINE.row,
        width: "100%",
        marginTop: ResponsiveSize(20),
        flexWrap: 'wrap'
    },
    priceBox: {
        height: ResponsiveSize(70),
        width: ResponsiveSize(160),
        borderWidth: ResponsiveSize(1),
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        backgroundColor: "#cccccc20",
        borderColor: COLOR.liteGray,
        borderRadius: ResponsiveSize(5)
    },
    priceText: {
        color: COLOR.black,
        fontFamily: FONTS.Regular
    },
    otherAMT: {
        color: COLOR.black,
        marginTop: ResponsiveSize(20),
        fontFamily: FONTS.Medium,

    },
    textInputs: {
        width: "70%",
        height: ResponsiveSize(60),
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.liteGray,
        paddingHorizontal: ResponsiveSize(20),
        fontSize: ResponsiveSize(20),
        color: COLOR.black,
        fontFamily: FONTS.Regular
    },
    textinputBTN: {
        width: "30%",
        height: ResponsiveSize(60),
        backgroundColor: "#cccccc20",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.liteGray,
        justifyContent: ALINE.center,
        alignItems: ALINE.center
    },
    rowPicView: {
        flexDirection: ALINE.row,
        marginTop: ResponsiveSize(20)
    },
    degineCartView: {
        height: ResponsiveSize(180),
        width: ResponsiveSize(200),
        marginHorizontal: ResponsiveSize(10)
    },
    browsePic: {
        height: ResponsiveSize(70),
        width: ResponsiveSize(150),
        backgroundColor: COLOR.primaray,
        marginTop: ResponsiveSize(20),
        borderRadius: ResponsiveSize(10),
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        padding: ResponsiveSize(15),
        alignItems: ALINE.center

    },
    browserText: {
        color: COLOR.white,
        textAlign: ALINE.center
    },
    barView: {
        width: "100%",
        height: ResponsiveSize(3),
        backgroundColor: COLOR.primaray,
        marginVertical: ResponsiveSize(20),
    },
    textInputTitel: {
        color: COLOR.black,
        width: "100%",
        fontFamily: FONTS.Regular
    },
    div2: {
        marginTop: ResponsiveSize(10)
    },
    messTextInput: {
        height: ResponsiveSize(180),
        width: "100%",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.liteGray,
        borderRadius: ResponsiveSize(10),
        padding: ResponsiveSize(20),
        textAlignVertical: 'top',
        color: COLOR.black,
        fontFamily: FONTS.Regular
    },
    addTonewRecipintView: {
        height: ResponsiveSize(70),
        width: "100%",
        backgroundColor: COLOR.primaray,
        borderRadius: ResponsiveSize(10),
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
    },
    addnewRecipintText: {
        color: COLOR.white,
        fontFamily: FONTS.Regular
    },
    btnConatainer: {
        width: "100%",
        flexDirection: ALINE.row,
        alignItems: ALINE.center,
        alignItems: ALINE.center,
        height: ResponsiveSize(120),

    },
    likeBtn: {
        height: ResponsiveSize(70),
        width: "18%",
        backgroundColor: COLOR.white,
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: COLOR.black,
        borderRadius: ResponsiveSize(20),
        alignItems: ALINE.center,
        justifyContent: ALINE.center,

    },
    shareBtn: {
        height: ResponsiveSize(70),
        width: "18%",
        backgroundColor: COLOR.white,
        marginLeft: ResponsiveSize(10),
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: COLOR.black,
        borderRadius: ResponsiveSize(20),
        justifyContent: ALINE.center,
        alignItems: ALINE.center
    },
    AddToCartBtn: {
        width: "100%",
        height: ResponsiveSize(70),
        backgroundColor: COLOR.primaray,
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: COLOR.black,
        borderRadius: ResponsiveSize(10),
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        alignSelf: ALINE.center
    },
    AddTocardText: {
        color: COLOR.white,
        fontSize: ResponsiveSize(25),
        width: "100%",
        textAlign: ALINE.center,
        fontFamily: FONTS.Regular

    },
    cheackboxView: {
        flexDirection: ALINE.row,
        alignItems: ALINE.center,
        marginTop: ResponsiveSize(20),
        marginBottom: ResponsiveSize(20),
        width: "100%"
    },
    roundView: {
        height: ResponsiveSize(30),
        width: ResponsiveSize(30),
        borderRadius: ResponsiveSize(100),
        borderWidth: ResponsiveSize(10),
        borderColor: COLOR.primaray
    },
    checktext: {
        color: COLOR.black,
        marginLeft: ResponsiveSize(10),
        fontFamily: FONTS.Regular
    },
    eerroText: {
        color: COLOR.primaray,
        marginLeft: ResponsiveSize(5),
        marginTop: ResponsiveSize(5),
        fontFamily: FONTS.Regular
    },
    termsCoditionView: {
        flexDirection: ALINE.row,
        width: "100%",
        marginTop: ResponsiveSize(10)

    },
    startIcon: {
        height: ResponsiveSize(30),
        width: ResponsiveSize(30),
        resizeMode: RESIZEMODE.contain
    },
    termsconditionText: {
        color: COLOR.black,
        marginLeft: ResponsiveSize(10),
        textAlign: ALINE.center,
        marginTop: ResponsiveSize(2),
        fontFamily: FONTS.Regular
    },
    CurrancyImg: {
        height: ResponsiveSize(40),
        width: ResponsiveSize(40),
        resizeMode: 'contain',
        tintColor: COLOR.primaray
    },
    SKUText: {
        color: COLOR.black,
        fontFamily: FONTS.Regular
    },
    NoteText: {
        color: COLOR.primaray,
        fontSize: ResponsiveSize(20),
        paddingVertical: ResponsiveSize(10),
        fontFamily: FONTS.Regular
    },
    OtherAmountTextInput: {
        width: "100%",
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        marginTop: ResponsiveSize(10)
    },
    CounterView: {
        marginTop: ResponsiveSize(20),
        flexDirection: ALINE.row,
        alignItems: ALINE.center
    },
    CounterText: {
        color: COLOR.darkGray,
        marginRight: ResponsiveSize(10),
        fontFamily: FONTS.Regular
    },
    RecipientView: {
        flexDirection: ALINE.row,
        width: "100%",
        alignItems: ALINE.center,
    },
    RecipientText: {
        marginLeft: ResponsiveSize(10),
        color: COLOR.black,
        fontFamily: FONTS.Regular
    }


})