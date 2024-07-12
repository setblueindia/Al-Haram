import { Dimensions, Platform, StyleSheet } from "react-native";
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
       height:"100%",
        width: "100%",

    },
    siderView: {
        flex:1
    },
    storyView: {
        padding: ResponsiveSize(20)
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
        height: ResponsiveSize(60),
        paddingHorizontal: ResponsiveSize(10),
        borderRadius: ResponsiveSize(10),
        marginVertical: ResponsiveSize(20),
        backgroundColor: "#FFEBEB",
        padding: ResponsiveSize(10),
        alignSelf: ALINE.center

    },
    bannerImage :{
     height:"100%",
     width:"100%" ,
     borderWidth:ResponsiveSize(1),
     borderColor:"#00000050",
     padding:ResponsiveSize(5),
     borderRadius:ResponsiveSize(10)

    },
    bannerView3: {
        width: "100%",
        height: ResponsiveSize(200),
        paddingHorizontal: ResponsiveSize(10),
        marginVertical: ResponsiveSize(20),
    },

    bannerImg: {
        height: "100%",
        width: "100%",
        resizeMode: RESIZEMODE.contain,
        borderRadius: ResponsiveSize(10),
        elevation: 10,

    },
    cetegoriesBox: {
  
    },
    categories: {
        marginTop: ResponsiveSize(40),
    },
    productView: {
        flex: 1,
        height:"100%",
        width:"100%"
    }

})