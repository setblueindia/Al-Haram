import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR, FONTWEGHIT } from "../../constants/style";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor:COLOR.white
    },
    textInput:{
       height:ResponsiveSize(80),
       width:"100%",
       backgroundColor:COLOR.white,
       borderRadius:ResponsiveSize(100),
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 1 },
       shadowOpacity: 0.5,
       shadowRadius: 2,
       elevation: 10,
       paddingHorizontal:ResponsiveSize(20),
       color:COLOR.black
    },
    textInputView:{
        paddingHorizontal:ResponsiveSize(20),
        marginTop:ResponsiveSize(20)
    },
    imageView: {
        height: ResponsiveSize(350),
        width: ResponsiveSize(270),
        // padding: ResponsiveSize(20),
        // backgroundColor: COLOR.white,
        borderColor: COLOR.gray,
        borderRadius: ResponsiveSize(10),
        borderWidth: ResponsiveSize(1),
        margin: ResponsiveSize(10),
        marginTop: ResponsiveSize(10),

    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
    },
    textView: {
        margin: ResponsiveSize(10),
        paddingHorizontal: ResponsiveSize(20),
        width: ResponsiveSize(270),
    },
    productName: {
        fontSize: ResponsiveSize(23),
        fontWeight: FONTWEGHIT.font400,

    },
    priceText: {
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600
    },
    likeView:{
        height:ResponsiveSize(60),
        width:ResponsiveSize(60),
        borderRadius:ResponsiveSize(100),
        position:'absolute',
        top:ResponsiveSize(20),
        right:ResponsiveSize(20),
        borderWidth:ResponsiveSize(1),
        borderColor:COLOR.gray,
        // backgroundColor:COLOR.black,
        justifyContent:ALINE.center,
        alignItems:ALINE.center
    },
    priveView:{
        flexDirection:'row'
    }
})