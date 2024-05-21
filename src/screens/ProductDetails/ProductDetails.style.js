import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from "../../constants/style";

export const styles = StyleSheet.create({
    silderBox: {
        height: ResponsiveSize(450),
        width: "100%",
        marginTop: ResponsiveSize(20),
        borderRadius: ResponsiveSize(20),
    },
    mainVIew: {
        flex: 1,
        height:"100%",
        width:"100%",
        backgroundColor: COLOR.white
    },
    productCodeView: {
        marginTop: ResponsiveSize(40),
        paddingHorizontal: ResponsiveSize(20)
    },
    codeText: {
        color: "#554D4D",
        fontSize: ResponsiveSize(20)
    },
    profuctName: {
        marginTop: ResponsiveSize(10),
        paddingHorizontal: ResponsiveSize(20)
    },
    profuctNameText: {
        // color:COLOR.black,
        color: "#202020",
        fontSize: ResponsiveSize(30)
    },
    devider: {
        height: ResponsiveSize(1),
        width: "100%",
        backgroundColor: COLOR.gray
    },
    deviderView: {
        padding: ResponsiveSize(20)
    },
    PriveView: {
        paddingHorizontal: ResponsiveSize(20),
        marginTop: ResponsiveSize(10),
    },
    PrizeText: {
        fontSize: ResponsiveSize(25),
        fontWeight: FONTWEGHIT.font700,
        color: COLOR.primaray
    },
    text: {
        color: "#505050"
    },
    colorView: {
        paddingHorizontal: ResponsiveSize(20),
        flexDirection: ALINE.row,
        alignItems: ALINE.center
    },
    colorConatiner: {
        height: ResponsiveSize(70),
        width: ResponsiveSize(70),
        marginLeft: ResponsiveSize(10),
        borderRadius: ResponsiveSize(20),
        backgroundColor: COLOR.white,

    },
    imgIcon: {
        height: "100%",
        width: "100%",
        resizeMode: RESIZEMODE.cover,
        borderRadius: ResponsiveSize(20)
    },
    sizeView: {
        paddingHorizontal: ResponsiveSize(20),
        marginTop: ResponsiveSize(20),
        flexDirection: ALINE.row,
        alignItems: ALINE.center
    },
    sizeContainer: {
        borderRadius: ResponsiveSize(100),
        borderWidth: ResponsiveSize(2),
        borderColor: COLOR.primaray,
        marginLeft: ResponsiveSize(20),
        height: ResponsiveSize(60),
        width: ResponsiveSize(60),
        alignItems: ALINE.center,
        justifyContent: ALINE.center,

    },
    sizeText: {
        color: COLOR.black
    },
    counteView: {
        flexDirection: ALINE.row,
        alignItems: ALINE.center,
        paddingHorizontal: ResponsiveSize(20),
    },
    counter: {
        marginLeft: ResponsiveSize(20),

    },
    btnConatainer: {
        width: "100%",
        flexDirection: ALINE.row,
        alignItems: ALINE.center,
        backgroundColor: "#F8F2F2",
        // marginTop:ResponsiveSize(20),
        alignItems:ALINE.center,
        justifyContent:ALINE.spaceBetween,
        paddingHorizontal:ResponsiveSize(20),
        height:ResponsiveSize(120),
        position:'absolute',
        bottom:ResponsiveSize(20),
      
        

    },
    likeBtn: {
        height: ResponsiveSize(90),
        width: "18%",
        backgroundColor: COLOR.white,
        elevation:10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: COLOR.black,
        borderRadius:ResponsiveSize(20),
        alignItems: ALINE.center,
        justifyContent: ALINE.center,

    },
    shareBtn: {
        height: ResponsiveSize(90),
        width: "18%",
        backgroundColor: COLOR.white,
        marginLeft:ResponsiveSize(10),
        elevation:10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: COLOR.black,
        borderRadius:ResponsiveSize(20),
        justifyContent:ALINE.center,
        alignItems:ALINE.center
    },
    AddToCartBtn: {
        width:"55%",
        height: ResponsiveSize(90),
        backgroundColor: COLOR.primaray,
        marginLeft:ResponsiveSize(10),
        elevation:10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: COLOR.black,
        borderRadius:ResponsiveSize(20),
        justifyContent:ALINE.center,
        alignItems:ALINE.center
    },
    AddTocardText:{
        color:COLOR.white,
        fontSize:ResponsiveSize(25)
    }
})