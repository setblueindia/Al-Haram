import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from "../../constants/style";

export const styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:COLOR.white
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: RESIZEMODE.cover,
        borderRadius: ResponsiveSize(20)
    },
    imageView: {
        height: ResponsiveSize(350),
        width: ResponsiveSize(260),
        padding: ResponsiveSize(20),
        backgroundColor: COLOR.white,
        borderColor: COLOR.gray,
        borderRadius: ResponsiveSize(10),
        borderWidth: ResponsiveSize(1),
        margin: ResponsiveSize(10),

        // marginTop: ResponsiveSize(10),
        // height: ResponsiveSize(300),
        // width: "30%",
        // margin: ResponsiveSize(10),
        // borderRadius: ResponsiveSize(20),
        // backgroundColor: COLOR.white,
        elevation: ResponsiveSize(5),
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // elevation: 2,
        // alignItems: ALINE.center,
        // justifyContent: ALINE.center
    },
    flatList:{
        marginTop:ResponsiveSize(10),
        alignSelf:'center'
    },
    textView: {
        margin: ResponsiveSize(10),
        paddingHorizontal: ResponsiveSize(20),
        width: ResponsiveSize(270),
        // borderBottomWidth:ResponsiveSize(1),
        // borderLeftWidth:ResponsiveSize(1),
        // borderColor:"#CCCCCC",
        // height:ResponsiveSize(200),
        // backgroundColor:"#FFFFFF",
        // elevation:10,
        // borderTopRightRadius:ResponsiveSize(100),
        // borderBottomRightRadius:ResponsiveSize(100),
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // elevation: 2,
        // shadowColor: '#000',
    },

    priceText: {
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600
    },

    productName: {
        fontSize: ResponsiveSize(22),
        fontWeight: FONTWEGHIT.font600,
        color:COLOR.black
    },
    likeView:{
        height:ResponsiveSize(60),
        width:ResponsiveSize(60),
        borderRadius:ResponsiveSize(100),
        position:'absolute',
        top:ResponsiveSize(20),
        right:ResponsiveSize(30),
        borderWidth:ResponsiveSize(1),
        borderColor:COLOR.gray,
        // backgroundColor:COLOR.black,
        justifyContent:'center',
        alignItems:'center'
    }
})