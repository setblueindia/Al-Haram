import { StyleSheet } from "react-native";
import { ResponsiveSize } from '../../utils/utils'
import Icon from 'react-native-vector-icons/AntDesign';
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'


export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: COLOR.white
    },
    opationView: {
        height: ResponsiveSize(80),
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        flexDirection: ALINE.row,
        padding: ResponsiveSize(20),
        width: "100%",
        alignItems: ALINE.center,
        justifyContent: ALINE.spaceBetween,
        backgroundColor: COLOR.white,

    },
    devider: {
        height: ResponsiveSize(20)
    },
    title: {
        color: COLOR.black,
        fontSize: ResponsiveSize(25)
    },
    imageView: {

        height: ResponsiveSize(300),
        width: "30%",
        margin: ResponsiveSize(10),
        borderRadius: ResponsiveSize(20),
        backgroundColor: COLOR.white,
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        alignItems: ALINE.center,
        justifyContent: ALINE.center
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain',
        borderRadius: ResponsiveSize(20)
    },
    imageContainer: {
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        backgroundColor: "#FDEE0010",
        padding: ResponsiveSize(10)
    },
    ViewMore: {
        height: ResponsiveSize(300),
        width: "30%",
        backgroundColor: "#00000070",
        position: 'absolute',
        right: 0,
        alignSelf: ALINE.center,
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        marginRight: ResponsiveSize(7),
        borderRadius: ResponsiveSize(20)
    },
    btnView: {
        height: ResponsiveSize(300),
        width: "100%",
        alignItems: ALINE.center,
        justifyContent: ALINE.center
    },
    viewText: {
        color: COLOR.white,
        // fontWeight: FONTWEGHIT.font700,
        fontSize: ResponsiveSize(40),

    },
    CustomeHeaderView: {
        width: "100%",
    }
})
