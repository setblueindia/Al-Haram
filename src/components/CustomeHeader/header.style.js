import { Platform, StyleSheet } from "react-native";
import { ALINE, COLOR } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({

    mainView:

        Platform.OS == 'ios' ? {
            width: "100%",
            backgroundColor: COLOR.white,
            elevation: ResponsiveSize(10),
            paddingHorizontal: ResponsiveSize(20),
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
            // backgroundColor:"red",
            alignItems:'center'
            // alignSelf: 'stretch'
        } :

            {
                width: "100%",
                backgroundColor: COLOR.white,
                elevation: ResponsiveSize(10),
                paddingHorizontal: ResponsiveSize(20),
                shadowColor: '#000',
                alignItems:'center'

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
        resizeMode: "contain"
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
        justifyContent:'space-between',
        // backgroundColor:"green",
        // alignSelf:'center'
        // alignItems:'center'
        
    },
    
    lastView: {
        flexDirection: ALINE.row,
        width: "33%",
        justifyContent: ALINE.spaceBetween,

    },
    


})
