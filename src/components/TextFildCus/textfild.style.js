import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR } from "../../constants/style";

export const styles = StyleSheet.create({

    mainView:{
        flexDirection:ALINE.row,
        alignItems:ALINE.center,
        borderWidth:ResponsiveSize(1),
        borderColor:COLOR.gray , 
        paddingHorizontal:ResponsiveSize(10)

    },
    textInput:{
   
        width:"100%",
        height:ResponsiveSize(80),
        marginLeft:ResponsiveSize(10),
        color:COLOR.black
      
    },
    icon:{
        color:COLOR.primaray
    },
    countryCodeText:{
        color:COLOR.black,
        marginLeft:ResponsiveSize(20),
        width:ResponsiveSize(60)
        // flex:0.3

    }
})