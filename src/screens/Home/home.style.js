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
    },
    containerView: {
        height: "100%",
        width: "100%",

    },
    siderView: {
        flex: 1
    },
    storyView: {
        paddingHorizontal: ResponsiveSize(20),
        flex: 1,
        width: "100%",
        height: "100%",
        zIndex: 10,
        marginTop: ResponsiveSize(20)
    },
    listView: {

    },
    topCategories: {

    },
    topCategoriesText: {
        fontSize: ResponsiveSize(30),
        color: COLOR.black,
        fontWeight: FONTWEGHIT.font700,
        marginTop: ResponsiveSize(20),
        marginBottom: ResponsiveSize(20),
        marginLeft: ResponsiveSize(20)

    },
    bannerView: {
        width: "100%",
        height: ResponsiveSize(40),
        paddingHorizontal: ResponsiveSize(10),
        borderRadius: ResponsiveSize(10),
        marginVertical: ResponsiveSize(20),
    },
    bannerView2: {
        width: "92%",
        height: ResponsiveSize(70),
        paddingHorizontal: ResponsiveSize(10),
        borderRadius: ResponsiveSize(10),
        marginVertical: ResponsiveSize(20),
        padding: ResponsiveSize(10),
        alignSelf: ALINE.center,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bannerImage: {
        height: "100%",
        width: "100%",
        borderColor: "#00000050",
        padding: ResponsiveSize(5),
        borderRadius: ResponsiveSize(10),
        alignItems: 'center',
        justifyContent: 'center'

    },
    bannerView3: {
        width: "100%",
        height: "100%",
        paddingHorizontal: ResponsiveSize(10),
        marginVertical: ResponsiveSize(20),
        backgroundColor: COLOR.white
    },

    bannerImg: {
        height: "100%",
        width: "100%",
        // resizeMode: RESIZEMODE.contain,
        borderRadius: ResponsiveSize(10),
    },
    cetegoriesBox: {

    },
    categories: {
        marginTop: ResponsiveSize(40),
    },
    productView: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    scrollToTopButton: {
        position: 'absolute',
        bottom: ResponsiveSize(20),
        right: ResponsiveSize(20),
        backgroundColor: COLOR.primaray,
        padding: ResponsiveSize(10),
        borderRadius: ResponsiveSize(25),
        height: ResponsiveSize(50),
        width: ResponsiveSize(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollToTopButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    giftcart: {
        paddingHorizontal: ResponsiveSize(20),
        marginTop: ResponsiveSize(20)
        // borderRadius:ResponsiveSize(20)
    },
    giftcartView: {
        height: ResponsiveSize(400),
        width: "100%",
        borderRadius: ResponsiveSize(20)

    }

})