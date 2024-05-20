import { Platform, StyleSheet } from "react-native";
import { ALINE, COLOR, FONTWEGHIT } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        height:"100%",
        backgroundColor:COLOR.white
    },
    headerView: {
        // marginTop:ResponsiveSize(30)
    },
    conntainer: {
        // justifyContent:'center',
        // alignSelf:'center'
    },
    imageView: {
        height: ResponsiveSize(350),
        width: ResponsiveSize(270),
        padding: ResponsiveSize(20),
        backgroundColor: COLOR.white,
        borderColor: COLOR.gray,
        borderRadius: ResponsiveSize(10),
        borderWidth: ResponsiveSize(1),
        margin: ResponsiveSize(10),
        marginTop: ResponsiveSize(10),

    },
    ListVivew: {
        height:"100%",
        backgroundColor: "#CCCCCC10",
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        marginTop: ResponsiveSize(10)
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain',
    },
    textView: {
        margin: ResponsiveSize(10),
        paddingHorizontal: ResponsiveSize(20),
        width: ResponsiveSize(270),
    },
    priceText: {
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600
    },
    productName: {
        fontSize: ResponsiveSize(25),
        fontWeight: FONTWEGHIT.font600,

    },
    devider: {
        height: Platform.OS == "ios" ? ResponsiveSize(450) : ResponsiveSize(300)
    },
  
    filterView:{
      width:"100%",
      height:ResponsiveSize(50),
      paddingHorizontal:ResponsiveSize(20),
      marginTop:ResponsiveSize(20),
      marginBottom:ResponsiveSize(20),

  
     
    },
    filterContainer:{
        width:"100%",
        height:"100%",
        backgroundColor:"#CCCCCC50",
        borderWidth:ResponsiveSize(1),
        borderRadius:ResponsiveSize(10),
        borderColor:"#00000050",
        justifyContent:ALINE.center,
        alignItems:ALINE.center
    },
    firstView:{
        flexDirection:'row',
        justifyContent:ALINE.center,
        alignItems:ALINE.center
    },
    filterIcon:{
        color:COLOR.black,
      
    },
    filterText:{
        color:COLOR.black
    },
    bar:{
        width:ResponsiveSize(2),
        height:"100%",
        backgroundColor:"#00000050"
    },
    comonView:{
        flexDirection:'row',
        alignItems:ALINE.center,
        justifyContent:ALINE.center,
        width:"50%",

        
    },
    deviderInner:{
        width:ResponsiveSize(10),
        
    },
    deviderFilter:{
        // width:ResponsiveSize(30)
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
    }


})