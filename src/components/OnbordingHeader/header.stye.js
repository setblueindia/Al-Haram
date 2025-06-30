import { StyleSheet } from "react-native";
import { ALINE, COLOR } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView : {
        flexDirection:ALINE.row,
        justifyContent:ALINE.spaceBetween,
    },
    icon:{
        color:COLOR.black
    },
    container:{

    },
    ImageView: {
        width: '100%',
        height: ResponsiveSize(200),
        padding: ResponsiveSize(30),
        marginTop:ResponsiveSize(40)

      },
      logItems: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
      },
   

})