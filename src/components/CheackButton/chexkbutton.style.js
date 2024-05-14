import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR } from "../../constants/style";

export const styles = StyleSheet.create({
    mainView:{
        height:ResponsiveSize(30),
        width:ResponsiveSize(30),
       borderWidth:ResponsiveSize(1),
       alignItems:ALINE.center,
       justifyContent:ALINE.center
       
    },

    icon:{
        color:COLOR.white
    }
   
})