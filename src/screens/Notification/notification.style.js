import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from "../../constants/style";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    CustomeHeaderView: {
        width: "100%",
        height: "100%"
    },
    container: {
        flex: 1,
        padding: ResponsiveSize(20),
        height: "100%",
        width: "100%"
    },
    notificationView: {
        width: "100%",
        height: ResponsiveSize(150),
        backgroundColor: "#FFF3F4",
        elevation: 10,
        shadowColor: COLOR.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        padding: ResponsiveSize(20),
        borderRadius: ResponsiveSize(20),
        borderWidth: ResponsiveSize(2),
        borderColor: COLOR.gray
    },
    imgView: {
        width: "100%",
        flexDirection: ALINE.row,
        alignItems: ALINE.center,
        justifyContent: ALINE.spaceBetween
    },
    img: {

        height: ResponsiveSize(60),
        width: ResponsiveSize(60),
        // color:COLOR.white,
        color: COLOR.primaray,
        resizeMode: RESIZEMODE.contain,
        // marginLeft : ResponsiveSize(20)
        // borderRadius:ResponsiveSize(100),

    },
    shippmentText: {
        fontSize: ResponsiveSize(30),
        fontWeight: FONTWEGHIT.font600,
        color: COLOR.black,
        // color:COLOR.white,
        marginLeft: ResponsiveSize(10)
    },
    textView: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        width: "100%",
    },
    desShippment: {
        color: "#7A7575",
        // color:COLOR.white,
        lineHeight: ResponsiveSize(30),
        fontSize: ResponsiveSize(18)
    },
    barView: {
        height: ResponsiveSize(40),
        width: ResponsiveSize(2),
        backgroundColor: "#00000020",
        marginRight: ResponsiveSize(10),
        marginLeft: ResponsiveSize(-10)
    },
    dateText: {
        fontSize: ResponsiveSize(18),
        color: "#7A7575",
    },
    dataView: {
        alignSelf: ALINE.center
    },
   

})
