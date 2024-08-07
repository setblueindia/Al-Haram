import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR } from "../../constants/style";

export const styles = StyleSheet.create({
    
    mainView:{
        flex:1,
        backgroundColor:COLOR.white,
    },
    headerView:{
        padding:ResponsiveSize(20),
    },
    container:{
    //    marginTop:ResponsiveSize(20),
       padding:ResponsiveSize(20),
        alignItems:ALINE.center
    },
    createYouraccont:{
        fontSize:ResponsiveSize(35),
        color:COLOR.black,
        fontWeight:'bold',
        flex:1,
        width:ResponsiveSize(400),
        // backgroundColor:"#000",
        textAlign:'center'
    },
    line:{
       marginTop:ResponsiveSize(20),
       width:"100%",
       height:ResponsiveSize(2),
       backgroundColor:COLOR.white,
       elevation:3
    },
    containerView:{
        // padding:ResponsiveSize(20),
        marginTop:ResponsiveSize(20),
    },
    devider :{
        marginTop:ResponsiveSize(20)
    },
    buttonView:{
        width:"100%"
    },
    loadder:{
        position:'absolute',
        height:"100%",
        width:"100%"
    }



})
