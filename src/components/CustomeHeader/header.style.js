import { Platform, StyleSheet } from "react-native";
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({

    mainView:

        Platform.OS == 'ios' ? {
            width: "100%",
            backgroundColor: COLOR.white,
            elevation: ResponsiveSize(10),
            paddingHorizontal: ResponsiveSize(20),
            shadowColor: COLOR.white,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
            alignItems:ALINE.center
        } :

            {
                width: "100%",
                backgroundColor: COLOR.white,
                elevation: ResponsiveSize(10),
                paddingHorizontal: ResponsiveSize(20),
                shadowColor: COLOR.black,
                alignItems:ALINE.center

            },



    menuIcon: {
        color: COLOR.black
    },
    log: {
        width: "100%"
    },
    log: {
        height: "100%",
        width: "100%",
        resizeMode: RESIZEMODE.contain
    },
    logView: {
        width: "33%",
        height: ResponsiveSize(100),
        
    },
    container: {
        flexDirection: ALINE.row,
        width: '100%',
        height: ResponsiveSize(120),
        alignItems: ALINE.center,
        justifyContent:ALINE.spaceBetween,
        
    },
    
    lastView: {
        flexDirection: ALINE.row,
        width: "33%",
        justifyContent: ALINE.spaceBetween,

    },
    productCountView: {
        height: ResponsiveSize(30),
        width: ResponsiveSize(30),
        backgroundColor: COLOR.primaray,
        borderRadius: ResponsiveSize(100),
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        position: 'absolute',
        bottom: ResponsiveSize(-10),
        right: ResponsiveSize(-10),
    },
    productText: {
        color: COLOR.white,
        fontSize: ResponsiveSize(20),
        fontWeight: FONTWEGHIT.font600,
        width:"100%",
        textAlign:'center'
    }
    


})
