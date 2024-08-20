import { Dimensions, StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, RESIZEMODE } from "../../constants/style";

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    mainView: {
        height: ResponsiveSize(450),
        width: windowWidth,
        alignItems:ALINE.center,
    },
    image: {
        height: "100%",
        width:"100%",
        resizeMode:RESIZEMODE.cover,
        borderRadius:ResponsiveSize(20)
    },
    listView: {
        height: "100%",
        width: windowWidth ,
        alignItems:ALINE.center,
        justifyContent:ALINE.center,
        paddingHorizontal:ResponsiveSize(20),
        borderRadius:ResponsiveSize(20)
    },
    abc :{ 

    }
})
