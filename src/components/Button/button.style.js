import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR } from "../../constants/style";
import { FONTS } from "../../constants/fonts";

export const styles = StyleSheet.create({
    mainView: {
        width: "100%",
        height: ResponsiveSize(80),
        backgroundColor: COLOR.primaray,
        alignItems: ALINE.center,
        justifyContent: ALINE.center,

    },
    text: {
        color: COLOR.white,
        fontSize: ResponsiveSize(25),
        // fontWeight: 'bold',
        width: ResponsiveSize(300),
        textAlign: 'center',
        fontFamily: FONTS.SemiBold,
        letterSpacing: 1
    }
})