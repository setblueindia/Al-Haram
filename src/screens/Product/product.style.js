import { StyleSheet } from "react-native";
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: COLOR.white,
        justifyContent: ALINE.center,
        alignItems: ALINE.center
    },
    headerView: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    conntainer: {
        width: "50%",
    },
    imageView: {
        height: ResponsiveSize(350),
        width: "95%",
        padding: ResponsiveSize(20),
        backgroundColor: COLOR.white,
        borderColor: COLOR.gray,
        borderRadius: ResponsiveSize(10),
        borderWidth: ResponsiveSize(1),
        margin: ResponsiveSize(10),
        marginTop: ResponsiveSize(10),
    },
    ListVivew: {
        height: "100%",
        backgroundColor: "#CCCCCC10",
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        marginTop: ResponsiveSize(10),
        flex: 1,
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: RESIZEMODE.contain,
    },
    textView: {

        paddingHorizontal: ResponsiveSize(20),
        width: ResponsiveSize(300),
    },
    priceText: {
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600
    },
    productName: {
        fontSize: ResponsiveSize(22),
        color: COLOR.black

    },
    devider: {
        height: ResponsiveSize(20)
    },

    filterView: {
        width: "100%",
        height: ResponsiveSize(50),
        paddingHorizontal: ResponsiveSize(20),
        marginTop: ResponsiveSize(20),
    },
    filterContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#CCCCCC50",
        borderWidth: ResponsiveSize(1),
        borderRadius: ResponsiveSize(10),
        borderColor: "#00000050",
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
    },
    firstView: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
    },
    filterIcon: {
        color: COLOR.black,
        paddingHorizontal: ResponsiveSize(20)

    },
    filterText: {
        color: COLOR.black,
        width: "100%",
        textAlign: 'center',
        position: 'absolute'
    },
    bar: {
        width: ResponsiveSize(2),
        height: "100%",
        backgroundColor: "#00000050"
    },
    comonView: {
        flexDirection: 'row',
        alignItems: ALINE.center,
        width: "50%",
    },
    deviderInner: {
        width: ResponsiveSize(10),
    },
    deviderFilter: {

    },
    likeView: {
        height: ResponsiveSize(50),
        width: ResponsiveSize(50),
        borderRadius: ResponsiveSize(100),
        position: 'absolute',
        // top: ResponsiveSize(20),
        bottom: ResponsiveSize(75),
        right: ResponsiveSize(15),
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        backgroundColor: COLOR.white,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 0.5,
            width: 0.5
        },
        elevation: ResponsiveSize(10)

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
    textImgView: {
        height: ResponsiveSize(90),
        width: ResponsiveSize(90),
        position: 'absolute'
    },


})