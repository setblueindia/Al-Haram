import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR } from "../../constants/style";

export const styles = StyleSheet.create({
    mainView: {
        height: ResponsiveSize(25),
        width: ResponsiveSize(25),
        borderWidth: ResponsiveSize(1),
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        backgroundColor: COLOR.white

    },

    icon: {
        color: COLOR.white,
    }

})