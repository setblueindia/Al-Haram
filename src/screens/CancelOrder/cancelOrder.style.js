import { StyleSheet } from "react-native";
import { ALINE, COLOR, FONTWEGHIT } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    containerView: {
        flex: 1,
        padding: ResponsiveSize(20)
    },
    firstView: {
        width: "100%",
        borderColor: COLOR.primaray,
        borderWidth: ResponsiveSize(1),
        borderRadius: ResponsiveSize(20),
        padding: ResponsiveSize(20)
    },
    headerText: {
        color: COLOR.primaray,
        textAlign: ALINE.center,
        fontWeight: FONTWEGHIT.font600,
    },
    desText: {
        color: "#00000090",
        textAlign: ALINE.center,
        fontSize: ResponsiveSize(20),
        marginTop: ResponsiveSize(10),
        lineHeight: ResponsiveSize(30)
    },
    barView: {
        width: "100%",
        height: ResponsiveSize(0.5),
        backgroundColor: "#00000070",
        marginTop: ResponsiveSize(20),
    },
    resoneText: {
        color: COLOR.black,
        fontWeight: FONTWEGHIT.font600,
        marginLeft: ResponsiveSize(20)
    },
    resonView: {
        marginTop: ResponsiveSize(20)
    },
    selectResoneBtn: {
        width: "100%",
        height: ResponsiveSize(80),
        backgroundColor: COLOR.white,
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: '#000',
        marginTop: ResponsiveSize(20),
        borderRadius: ResponsiveSize(20),
        padding: ResponsiveSize(10),
        alignItems: ALINE.center,
        justifyContent:ALINE.spaceBetween,
        flexDirection: ALINE.row
    },
    icon: {
        size: ResponsiveSize(40),
        color: "#00000070"
    },
    btnText: {
        color: "#00000070"
    },
    resoneBox: {
        width: "100%",
        alignSelf: ALINE.center,
        borderWidth: ResponsiveSize(1),
        borderColor: "#00000070",
        marginTop: ResponsiveSize(20),
        borderRadius: ResponsiveSize(20),
        backgroundColor: COLOR.white,
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: '#000',
    },
    innerBox: {
        height: ResponsiveSize(80),
        borderBottomWidth: ResponsiveSize(1),
        padding: ResponsiveSize(20),
        borderBottomColor: "#00000070",
        justifyContent: ALINE.center,
    },
    boxText: {
        color: "#00000090",
    },
    cheackBox: {
        marginTop: ResponsiveSize(20),
        flexDirection: ALINE.row,
        marginLeft: ResponsiveSize(20)
    },
    innerCheackBox: {
        flexDirection: ALINE.row,
        alignItems: ALINE.center,
        alignContent: ALINE.center
    },
    cheackBoxButton: {
        height: ResponsiveSize(30),
        width: ResponsiveSize(30),
        borderRadius: ResponsiveSize(100),
        borderColor: COLOR.primaray,
        borderWidth: ResponsiveSize(1),
        justifyContent: ALINE.center,
        alignItems: ALINE.center
    },
    cheackText: {
        marginLeft: ResponsiveSize(20)
    },
    dott: {
        height: ResponsiveSize(15),
        width: ResponsiveSize(15),
        backgroundColor: COLOR.primaray,
        borderRadius: ResponsiveSize(100),
    },
    secondView:{
    },
    image:{
        height:ResponsiveSize(60),
        width:ResponsiveSize(60)
    },
    orderView:{
        width:"100%",
        height:ResponsiveSize(100),
        flexDirection:ALINE.row,
        alignItems:ALINE.center,
        justifyContent:ALINE.spaceBetween,
        backgroundColor: "#00000010",
        padding:ResponsiveSize(20),
        borderRadius:ResponsiveSize(20),
        marginTop:ResponsiveSize(20)
    },
    orderCheack:{
        height:ResponsiveSize(30),
        width:ResponsiveSize(30),
        backgroundColor:COLOR.white,
        borderWidth:ResponsiveSize(1),
        borderColor:"#00000070",
        borderRadius:ResponsiveSize(5)
    },
    btnView:{
        padding:ResponsiveSize(20),
    },
    priceText:{
        color:COLOR.primaray,
        fontWeight:FONTWEGHIT.font600
    }
})