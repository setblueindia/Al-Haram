import { StyleSheet } from "react-native";
import { ALINE, COLOR, FONTWEGHIT } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";
import { EXTRASTR } from "../../constants/constants";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    containView: {
        padding: ResponsiveSize(20)
    },
    firstView: {
        // height: ResponsiveSize(500),
        width: "100%",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.primaray,
        borderRadius: ResponsiveSize(20)
    },
    OrderHeader: {
        width: "100%",
        // height:ResponsiveSize(100),
        borderBottomWidth: ResponsiveSize(1),
        borderBottomColor: COLOR.primaray,
        backgroundColor: "#FFF3F4",
        borderTopEndRadius: ResponsiveSize(20),
        borderTopLeftRadius: ResponsiveSize(20),
        padding: ResponsiveSize(20),
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween
        // borderRadius:ResponsiveSize(10)

    },
    orderTexrt: {
        fontSize: ResponsiveSize(25),
        color: COLOR.black,
        fontWeight: FONTWEGHIT.font600
    },
    DottView: {
        height: ResponsiveSize(10),
        width: ResponsiveSize(10),
        borderRadius: ResponsiveSize(100),
        backgroundColor: "green",


    },
    statusText: {
        color: "green",
        marginLeft: ResponsiveSize(10)
    },
    StatusView: {
        flexDirection: ALINE.row,
        alignItems: ALINE.center,
        marginTop: ResponsiveSize(5),

    },
    dateTextOrder: {
        marginTop: ResponsiveSize(5),
        color: "#00000070",

    },
    printText: {
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600,

    },
    reOrderText: {
        marginTop: ResponsiveSize(40),
        color: "#00000070",
        fontWeight: FONTWEGHIT.font600,
        textAlign: EXTRASTR.right

    },
    orderDetails: {

    },
    headerText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(23),
        fontWeight: FONTWEGHIT.font600,
    },
    itemsDetaisCommon: {
        // height: ResponsiveSize(80),
        borderBottomWidth: ResponsiveSize(2),
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: ResponsiveSize(20),

    },
    secondTitleText: {
        color: "#00000070"
    },
    secondPriceText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(20),
        fontWeight: FONTWEGHIT.font600
    },
    addresstext: {

    },
    thirdView: {

    },
    addressView: {
        padding: ResponsiveSize(20)
    },
    addressText: {
        lineHeight: ResponsiveSize(30),
        color: "#202020"
    },
    btnView:{
        width :"100%",
        position:'absolute',
  
        bottom:ResponsiveSize(20),
        paddingHorizontal:ResponsiveSize(20)
    }

})