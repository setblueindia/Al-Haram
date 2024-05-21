import { StyleSheet } from "react-native";
import { ALINE, COLOR } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView:{
        flexDirection:ALINE.row
    },
    emailView:{
        width:"50%",
        height:ResponsiveSize(80),
        borderBottomColor:COLOR.gray,
        borderBottomWidth:ResponsiveSize(1),
        justifyContent:ALINE.center,
        alignItems:ALINE.center
        
    },
    mobaileView:{
        width:"50%",
        height:ResponsiveSize(80),
        borderBottomColor:COLOR.black,
        borderBottomWidth:ResponsiveSize(1),
    },
    text:{
        fontSize:ResponsiveSize(25),
        fontWeight:'bold'
    }
})