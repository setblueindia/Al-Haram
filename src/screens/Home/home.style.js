import { Dimensions, StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { COLOR, FONTWEGHIT } from "../../constants/style";




export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: "100%",
        backgroundColor: COLOR.white,
    },
    CustomeHeaderView: {
        width: "100%",
    },
    containerView: {
        marginBottom: ResponsiveSize(150),
        width: "100%",
    },
    siderView:{
        // marginHorizontal:ResponsiveSize(20)
        // padding: ResponsiveSize(20)
    },
    storyView: {
        padding: ResponsiveSize(20)
    },
    listView: {

    },
    topCategories: {

    },
    topCategoriesText:{
        fontSize:ResponsiveSize(30),
        color:COLOR.black,
        fontWeight:FONTWEGHIT.font700,
        marginTop: ResponsiveSize(20),
        marginBottom:ResponsiveSize(20),
        marginLeft:ResponsiveSize(20)

    },
    bannerView:{
        width : "100%",
        height:ResponsiveSize(40),
        paddingHorizontal:ResponsiveSize(10),
        borderRadius:ResponsiveSize(10),
        marginVertical:ResponsiveSize(20),
    },
    bannerView2:{
        width : "100%",
        height:ResponsiveSize(30),
        paddingHorizontal:ResponsiveSize(10),
        borderRadius:ResponsiveSize(10),
        marginVertical:ResponsiveSize(20),
    },
    bannerView3:{
        width : "100%",
        height:ResponsiveSize(200),
        paddingHorizontal:ResponsiveSize(10),
        marginVertical:ResponsiveSize(20),
    },

    bannerImg:{
        height:"100%",
        width:"100%",
        resizeMode:'cover',
        borderRadius:ResponsiveSize(10),
        backgroundColor:COLOR.white,
        elevation:10
    }

})