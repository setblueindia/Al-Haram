import { StyleSheet } from "react-native";
import { COLOR } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },

    container: {
        padding:ResponsiveSize(20),
    },

    btnView:{
        width:"100%",
        height:ResponsiveSize(80),
        position:'absolute',
        bottom:ResponsiveSize(50),
        paddingHorizontal:ResponsiveSize(30),
        // flex:1
    },

    btn:{
        height:"100%",
        width:"100%",
        borderWidth:ResponsiveSize(1),
        borderColor:COLOR.primaray,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLOR.white
        // backgroundColor:'green'
    },

    btnText:{
        color:COLOR.black,
        fontSize:ResponsiveSize(25)
    }
})