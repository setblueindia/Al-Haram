import { StyleSheet } from "react-native";
import { ALINE, COLOR, FONTWEGHIT } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    container: {
        flex: 1,
        paddingHorizontal: ResponsiveSize(20)
    },
    reviewView: {
        // height: ResponsiveSize(300),
        width: "100%",
        backgroundColor: "#eef7ee",
        marginTop: ResponsiveSize(20),
        borderRadius: ResponsiveSize(20),
        padding: ResponsiveSize(20),
    },
    fitsView: {
        flexDirection: ALINE.row,
        width: "100%",

    },
    imageView: {
        height: ResponsiveSize(80),
        width: ResponsiveSize(80),
        borderRadius: ResponsiveSize(100),
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        alignItems: ALINE.center,
        justifyContent: ALINE.center
    },
    firstLetter: {
        color: COLOR.black,
        fontSize: ResponsiveSize(40),
        fontWeight: FONTWEGHIT.font600,
        color: COLOR.primaray
    },
    nameText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(20),
        textAlign: ALINE.center,
        marginLeft: ResponsiveSize(10)
    },
    nameView: {
        marginTop: ResponsiveSize(10),
        marginLeft: ResponsiveSize(10)
    },
    hoursText: {
        fontSize: ResponsiveSize(15),
        color: COLOR.darkGray,
        marginLeft: ResponsiveSize(10),
        marginVertical: ResponsiveSize(5)
    },
    startView: {
        flexDirection: ALINE.row,
        marginLeft: ResponsiveSize(10),
    },
    desText: {
        color: "#00000095",
        fontSize: ResponsiveSize(18),
        textAlign: 'justify',
        marginTop: ResponsiveSize(10),
        lineHeight: ResponsiveSize(35)


    },
    btnView: {
        height: ResponsiveSize(120),
        width: "100%",
        backgroundColor: COLOR.white,
        position: 'absolute',
        alignSelf: 'center',
        bottom: ResponsiveSize(0),
        padding: ResponsiveSize(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        height: "100%",
        width: "100%",
        borderRadius: ResponsiveSize(20),
        backgroundColor: COLOR.primaray,
        justifyContent: 'center',
        alignItems: 'center'

    },
    btnText: {
        color: COLOR.white,
        fontWeight: FONTWEGHIT.font600,
        color: COLOR.white,
        fontSize: ResponsiveSize(25)
    }
})