import { StyleSheet } from "react-native";
import { ALINE, COLOR, FONTWEGHIT } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    sliderView: {
        height: ResponsiveSize(450),
        width: "100%",
        marginTop: ResponsiveSize(20),
        borderRadius: ResponsiveSize(20),
    },
    containerView: {
        flex: 1,

    },
    titelText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(35),
        fontWeight: FONTWEGHIT.font400,
        marginTop: ResponsiveSize(20)

    },
    desText:{
        color:COLOR.darkGray,
        // marginTop: ResponsiveSize(10)

    },
    priceText1:{
        color:COLOR.primaray,
        fontSize:ResponsiveSize(40),
        fontWeight:FONTWEGHIT.font400,
        marginTop: ResponsiveSize(20)

    },
    cartPriceText:{
        color:COLOR.black,
        fontWeight:FONTWEGHIT.font400,
        marginTop: ResponsiveSize(20)
    },
    priceContainer:{
        flexDirection:'row',
        width:"100%",
        justifyContent:'space-between',
        marginTop: ResponsiveSize(20)
    },
    priceBox:{
        height:ResponsiveSize(70),
        width:ResponsiveSize(160),
        borderWidth:ResponsiveSize(1),
        justifyContent:'center',
        alignItems:'center',
        // borderColor:COLOR.darkGray,
        backgroundColor:"#cccccc20",
        borderColor:COLOR.liteGray
    },
    priceText:{
        color:COLOR.black
    },
    otherAMT:{
        color:COLOR.black,
        marginTop: ResponsiveSize(20),
        fontWeight:FONTWEGHIT.font600

    },
    textInputs:{
        width:"70%",
        height:ResponsiveSize(60),
        borderWidth:ResponsiveSize(1),
        borderColor:COLOR.liteGray,
        paddingHorizontal:ResponsiveSize(20),
        fontSize:ResponsiveSize(20)
        
        // textAlign:'center'
    },
    textinputBTN:{
        width:"30%",
        height:ResponsiveSize(60),
        backgroundColor:"#cccccc20",
        borderWidth:ResponsiveSize(1),
        borderColor:COLOR.liteGray,
        justifyContent:'center',
        alignItems:'center'
    },
    rowPicView:{
        flexDirection:'row',
        marginTop:ResponsiveSize(20)
    },
    degineCartView:{
       height :ResponsiveSize(180),
       width:ResponsiveSize(200),
    //    backgroundColor:COLOR.black,
       marginHorizontal:ResponsiveSize(10)
    },
    browsePic:{
        height:ResponsiveSize(70),
        width:ResponsiveSize(150),
        backgroundColor:COLOR.primaray,
        marginTop:ResponsiveSize(20),
        borderRadius:ResponsiveSize(10),
        flexDirection:'row',
        justifyContent:'space-between',
        padding:ResponsiveSize(15),
        alignItems:'center'

    },
    browserText:{
        color:COLOR.white,
        textAlign:'center'
    },
    barView:{
        width:"100%",
        height:ResponsiveSize(1),
        backgroundColor:COLOR.darkGray,
        marginVertical:ResponsiveSize(20),
        // alignSelf:'center'
    },
    textInputTitel:{
        color:COLOR.black
    },
    div2:{
        marginTop:ResponsiveSize(10)
    },
    messTextInput:{
        height:ResponsiveSize(180) ,
        width:"100%",
        borderWidth:ResponsiveSize(1),
        borderColor:COLOR.liteGray,
        borderRadius:ResponsiveSize(10),
        padding:ResponsiveSize(20),
        textAlignVertical: 'top'
        // textAlign:'top'
        // justifyContent:'flex-start'
    },
    addTonewRecipintView:{
        height:ResponsiveSize(70) ,
        width:"100%",
        backgroundColor:COLOR.primaray,
        borderRadius:ResponsiveSize(10),
        justifyContent:'center',
        alignItems:'center'
    },
    addnewRecipintText:{
        color:COLOR.white
    },
    btnConatainer: {
        width: "100%",
        flexDirection: ALINE.row,
        alignItems: ALINE.center,
        alignItems: ALINE.center,
        justifyContent: ALINE.spaceBetween,
        height: ResponsiveSize(120),
   
    },
    likeBtn: {
        height: ResponsiveSize(70),
        width: "18%",
        backgroundColor: COLOR.white,
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: COLOR.black,
        borderRadius: ResponsiveSize(20),
        alignItems: ALINE.center,
        justifyContent: ALINE.center,

    },
    shareBtn: {
        height: ResponsiveSize(70),
        width: "18%",
        backgroundColor: COLOR.white,
        marginLeft: ResponsiveSize(10),
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: COLOR.black,
        borderRadius: ResponsiveSize(20),
        justifyContent: ALINE.center,
        alignItems: ALINE.center
    },
    AddToCartBtn: {
        width: "55%",
        height: ResponsiveSize(70),
        backgroundColor: COLOR.primaray,
        marginLeft: ResponsiveSize(10),
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: COLOR.black,
        borderRadius: ResponsiveSize(20),
        justifyContent: ALINE.center,
        alignItems: ALINE.center
    },
    AddTocardText: {
        color: COLOR.white,
        fontSize: ResponsiveSize(25),
       width:"100%",
       textAlign:'center'
    },
    cheackboxView:{
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center',
        marginTop:ResponsiveSize(20),
        marginBottom:ResponsiveSize(20)
    },
    roundView:{
        height:ResponsiveSize(30),
        width:ResponsiveSize(30),
        borderRadius:ResponsiveSize(100),
        borderWidth:ResponsiveSize(10),
        borderColor:COLOR.primaray
    },
    checktext:{
        color:COLOR.black,
        marginLeft:ResponsiveSize(10)
    }
})