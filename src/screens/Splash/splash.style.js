import { StyleSheet } from "react-native";
import { ALINE, COLOR, RESIZEMODE } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:ALINE.center,
        alignItems:ALINE.center,
        padding : ResponsiveSize(20),
        backgroundColor: COLOR.white
    },
    imageView:{
        alignItems:ALINE.center,
        justifyContent:ALINE.center,
        width:"100%",
        height : ResponsiveSize(150)
    },
    image : {
        height:"100%",
        width:"100%",
        resizeMode:RESIZEMODE.contain
    }

})