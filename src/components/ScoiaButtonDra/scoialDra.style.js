import { StyleSheet } from "react-native"
import { ResponsiveSize } from "../../utils/utils"
import { ALINE, COLOR } from "../../constants/style"

export const styles = StyleSheet.create({
    scocialBtn: {
        height: ResponsiveSize(70),
        width: ResponsiveSize(70),
        borderRadius: ResponsiveSize(100),
        justifyContent:ALINE.center,
        alignItems:ALINE.center,
        backgroundColor:COLOR.white,
        elevation:5
        
      },
      imgeIcon:{
        height:"100%",
        width:"100%",
        borderRadius:ResponsiveSize(100),
      },
    
})

