import { Platform, StyleSheet } from "react-native";
import { ALINE, COLOR } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({

    mainView: {
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        flexDirection: ALINE.row,
        width: Platform.OS == 'android' ? "100%" : "48%",
        height: ResponsiveSize(80),
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        padding: ResponsiveSize(10),
    },
    socialIcon: {
        height: ResponsiveSize(45),
        width: ResponsiveSize(45),
        // alignSelf:'center',
    
    },
    text: {
        fontSize: ResponsiveSize(25),
        marginLeft: ResponsiveSize(10),
        flex:Platform.OS == 'android' && 0.2
        // textAlign:'justify'
        // width:ResponsiveSize(300),
        // flex:1,
        // textAlign:'center'
    },
})
