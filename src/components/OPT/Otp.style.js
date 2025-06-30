import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR } from "../../constants/style";

export const styles = StyleSheet.create({

    otpView:{
        height:ResponsiveSize(80),
        width:ResponsiveSize(80),
        backgroundColor:COLOR.white,
        borderColor:COLOR.gray,
        borderRadius:ResponsiveSize(10),
        borderWidth:ResponsiveSize(2),
        textAlign:'center',
        marginLeft:ResponsiveSize(30),
        fontSize:ResponsiveSize(30),
        elevation:ResponsiveSize(10),
        
      
        
    },
    mainView:{
        flexDirection:ALINE.row,
        justifyContent :  'center'
    },
   
 

})