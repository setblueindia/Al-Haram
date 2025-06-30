import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR, RESIZEMODE } from "../../constants/style";
import { FONTS } from "../../constants/fonts";

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
        backgroundColor: COLOR.white,
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
        color: COLOR.primaray,
        resizeMode: RESIZEMODE.contain,
    },
    shippmentText: {
        fontSize: ResponsiveSize(30),
        color: COLOR.black,
        marginLeft: ResponsiveSize(10),
        width: ResponsiveSize(300),
        fontFamily: FONTS.Medium
    },
    textView: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        width: "100%",
    },
    desShippment: {
        color: "#7A7575",
        lineHeight: ResponsiveSize(30),
        fontSize: ResponsiveSize(18),
        flex: 1,
        fontFamily: FONTS.Regular,
        textAlign: 'justify'
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
        width: ResponsiveSize(200),
        fontFamily: FONTS.Regular
    },
    dataView: {
        alignSelf: ALINE.center
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 18,
    },
    scrollToTopButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: COLOR.primaray,
        padding: 10,
        borderRadius: 25,
    },
    scrollToTopButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    BottomScroll: {
        width: "100%",
        height: ResponsiveSize(100),
        justifyContent: ALINE.center,
        alignItems: ALINE.center
    }

})
