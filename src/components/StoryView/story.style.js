import { StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR, RESIZEMODE } from "../../constants/style";
import { FONTS } from "../../constants/fonts";

export const styles = StyleSheet.create({
    storyView: {
        height: ResponsiveSize(100),
        width: ResponsiveSize(100),
        borderRadius: ResponsiveSize(100),
        backgroundColor: COLOR.white,
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.liteGray
    },
    imge: {
        height: "100%",
        width: "100%",
        resizeMode: RESIZEMODE.cover,
        borderRadius: ResponsiveSize(100),
    },
    mainView: {
        width: "100%",
        flex: 1
    },

    listView: {
        marginHorizontal: ResponsiveSize(15),
    },
    text: {
        marginTop: ResponsiveSize(5),
        width: ResponsiveSize(100),
        textAlign: ALINE.center,
        color: COLOR.darkGray,
        fontFamily: FONTS.Medium,
        fontSize: ResponsiveSize(23)
    },
    ImageLoadderView: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        alignSelf: ALINE.center
    }
})






