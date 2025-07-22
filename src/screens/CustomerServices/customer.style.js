import { StyleSheet } from "react-native";
import { COLOR } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";
import { FONTS } from "../../constants/fonts";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    container: {
        padding: ResponsiveSize(20),
        width: "100%",
        backgroundColor: COLOR.white,
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: '#000',

    },
    nameText: {
        textAlign: 'justify',
        fontSize: ResponsiveSize(25),
        color: COLOR.black,
        fontFamily: FONTS.Regular
    },
    containerView: {
        padding: ResponsiveSize(25)
    },
    text: {
        color: COLOR.black,
        fontSize: ResponsiveSize(21),
        marginTop: ResponsiveSize(20),
        fontFamily: FONTS.Regular
    }
})