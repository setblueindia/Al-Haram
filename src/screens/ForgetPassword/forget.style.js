import { StyleSheet } from "react-native";
import { COLOR, FONTWEGHIT } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white,
        padding: ResponsiveSize(20)
    },
    container: {
        alignItems: 'center',
        // padding:ResponsiveSize(20)
    },
    Textheader: {
        fontSize: ResponsiveSize(35),
        color: COLOR.black,
        fontWeight: FONTWEGHIT.font600,
        marginTop: ResponsiveSize(30),
    },
    desText: {
        textAlign: 'center',
        marginTop: ResponsiveSize(20),
        color: "#00000070",
        lineHeight: ResponsiveSize(30)
    },
    lineView: {
        width: "90%",
        height: ResponsiveSize(1),
        marginTop: ResponsiveSize(40),
        marginBottom: ResponsiveSize(30),
        backgroundColor: COLOR.gray
    },
    textInput: {
        padding: ResponsiveSize(30)
    },
    btn:{
        padding: ResponsiveSize(5),
        width:"100%",
        marginTop:ResponsiveSize(10)
    }
})