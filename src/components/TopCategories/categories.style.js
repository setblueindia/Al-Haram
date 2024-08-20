import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { COLOR, FONTWEGHIT, RESIZEMODE } from "../../constants/style";

export const styles = StyleSheet.create({
    listView: {
        height: ResponsiveSize(100),
        width: ResponsiveSize(100),
        borderRadius: ResponsiveSize(100)
    },
    Image: {
        height: "100%",
        width: "100%",
        resizeMode: RESIZEMODE.cover,
        borderRadius: ResponsiveSize(100)
    },
    mainView: {
        height:ResponsiveSize(350),
        width: "100%",
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor:"#EFE4B040"


    },
    devider: {
      width:ResponsiveSize(100),
      height:ResponsiveSize(20)
    },
  
    mapView:{
        justifyContent:'center',
        alignItems:'center',
        padding:ResponsiveSize(20)
    },
    text:{
        color:COLOR.black
    }
})