import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { COLOR } from "../../constants/style";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor:COLOR.white
    },
    textInput:{
       height:ResponsiveSize(80),
       width:"100%",
       backgroundColor:COLOR.white,
       borderRadius:ResponsiveSize(100),
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 1 },
       shadowOpacity: 0.5,
       shadowRadius: 2,
       elevation: 10,
       paddingHorizontal:ResponsiveSize(20),
       color:COLOR.black
    },
    textInputView:{
        paddingHorizontal:ResponsiveSize(20),
        marginTop:ResponsiveSize(20)
    }
})