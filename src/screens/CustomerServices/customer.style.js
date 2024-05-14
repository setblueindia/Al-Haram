import { StyleSheet } from "react-native";
import { COLOR } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView:{
        flex:1,
        // backgroundColor:COLOR.white,
        // padding:ResponsiveSize(20)
    },
    container:{
        // marginHorizontal:ResponsiveSize(20),
        padding:ResponsiveSize(20),
        // height:ResponsiveSize(350),
        width:"100%",
        backgroundColor:COLOR.white,
        // backgroundColor:"#00000020",
        elevation:10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        // elevation: 2,
        shadowColor: '#000',

    },
    nameText:{
        textAlign:'justify',
        fontSize:ResponsiveSize(30),
        // color:COLOR.black
        color:COLOR.black
    },
    containerView:{
        padding : ResponsiveSize(25)
    },
    text:{
        color:COLOR.black ,
        fontSize:ResponsiveSize(25),
        marginTop:ResponsiveSize(20),
        // flexDirection:'column-reverse',
        // textAlign:'right'
    }
})