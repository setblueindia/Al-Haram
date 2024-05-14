import { StyleSheet } from "react-native";
import { COLOR } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:COLOR.white,
        // padding:ResponsiveSize(20)
    },
    conatainer:{
        backgroundColor:COLOR.white,
        paddingHorizontal:ResponsiveSize(40),
        marginTop:ResponsiveSize(20)
    },
    devider:{
        marginTop:ResponsiveSize(5)
    },
    contiresText:{
        color:COLOR.black,
        fontSize:ResponsiveSize(30),
        marginLeft:ResponsiveSize(20),
        marginTop:ResponsiveSize(20)
    },
    secondView:{
        marginTop:ResponsiveSize(20),
        backgroundColor:"#00000010"
    },
    CheackView:{
        flexDirection:'row',
        padding:ResponsiveSize(20)
    },
    cheackText:{
        color:COLOR.primaray,
        fontSize:ResponsiveSize(23),
        marginLeft:ResponsiveSize(20)
    },
    btnView:{
        width:"100%",
        marginTop:ResponsiveSize(20)
    }
})