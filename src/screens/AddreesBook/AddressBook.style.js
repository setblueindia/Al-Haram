import { StyleSheet } from "react-native";
import { ALINE, COLOR } from "../../constants/style";
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
    },
    btn:{
        height:"100%",
        width:"100%",
        borderWidth:ResponsiveSize(1),
        borderColor:COLOR.primaray,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLOR.white
    },
    btnText:{
        color:COLOR.black,
        fontSize:ResponsiveSize(25),
        width:"100%",
        textAlign:'center'
    },
    addressView: {
        width: "100%",
        padding: ResponsiveSize(20),
        backgroundColor: "#CCCCCC20",
        borderWidth: ResponsiveSize(1),
        borderColor: "#00000070",
        borderRadius: ResponsiveSize(10)
    },
    firstView: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
    },
    nameView: {
        borderBottomWidth: ResponsiveSize(1),
        width: "80%",
        borderColor: "#00000050"
    },
    iconView: {
        flexDirection: ALINE.row
    },
    firstNameText: {
        marginBottom: ResponsiveSize(10),
        color: COLOR.primaray,
        fontSize: ResponsiveSize(30)
    },
    secondView: {
        marginTop: ResponsiveSize(20),
    },
    innerAddres: {
        lineHeight: ResponsiveSize(40),
        textAlign: 'justify',
        color: "#00000080",
        fontSize: ResponsiveSize(22)
    },
    thirdView: {
    },
    mobailText: {
        color: COLOR.black
    },
    thirdView: {
        marginTop: ResponsiveSize(20)
    }
})