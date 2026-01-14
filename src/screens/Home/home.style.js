import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR, FONTWEGHIT, MEASUREMENT } from "../../constants/style";



export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    CustomeHeaderView: {
        width: MEASUREMENT.masure100,
    },
    containerView: {
        height: MEASUREMENT.masure100,
        width: MEASUREMENT.masure100,

    },
    siderView: {
        flex: 1
    },
    storyView: {
        paddingHorizontal: ResponsiveSize(20),
        flex: 1,
        width: MEASUREMENT.masure100,
        height: MEASUREMENT.masure100,
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
        width: MEASUREMENT.masure100,
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
        alignItems: ALINE.center,
        justifyContent: ALINE.center
    },
    bannerImage: {
        height: MEASUREMENT.masure100,
        width: MEASUREMENT.masure100,
        borderColor: "#00000050",
        padding: ResponsiveSize(5),
        borderRadius: ResponsiveSize(10),
        alignItems: ALINE.center,
        justifyContent: ALINE.center

    },
    bannerView3: {
        width: MEASUREMENT.masure100,
        height: MEASUREMENT.masure100,
        paddingHorizontal: ResponsiveSize(10),
        marginVertical: ResponsiveSize(20),
        backgroundColor: COLOR.white
    },

    bannerImg: {
        height: MEASUREMENT.masure100,
        width: MEASUREMENT.masure100,
        borderRadius: ResponsiveSize(10),
    },
    cetegoriesBox: {

    },
    categories: {
        marginTop: ResponsiveSize(40),
    },
    productView: {
        flex: 1,
        height: MEASUREMENT.masure100,
        width: MEASUREMENT.masure100
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
        alignItems: ALINE.center,
        justifyContent: ALINE.center
    },
    scrollToTopButtonText: {
        color: COLOR.white,
        fontWeight: 'bold',
    },
    giftcart: {
        paddingHorizontal: ResponsiveSize(20),
        marginTop: ResponsiveSize(20)
    },
    giftcartView: {
        height: ResponsiveSize(400),
        width: MEASUREMENT.masure100,
        borderRadius: ResponsiveSize(20)

    }

})