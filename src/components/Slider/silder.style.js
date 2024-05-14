import { Dimensions, StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR, RESIZEMODE } from "../../constants/style";

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    mainView: {
        height: ResponsiveSize(400),
        width: windowWidth,
        alignItems:ALINE.center,
        // marginHorizontal:ResponsiveSize(20)
        // borderRadius:ResponsiveSize(100),
        // backgroundColor:"#000000",
        // padding:ResponsiveSize(20)
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
        paddingHorizontal:ResponsiveSize(20)
    },
    abc :{ 

    }
})
