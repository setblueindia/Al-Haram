import { StyleSheet } from "react-native";
import { ALINE, COLOR, FONTWEGHIT } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    PDView: {
        width: "100%",
        height: ResponsiveSize(250),
        backgroundColor: "#F7F2F2",
        flexDirection: 'row',
        alignItems: 'center',
        padding: ResponsiveSize(20)
    },
    imageView: {
        height: ResponsiveSize(200),
        width: ResponsiveSize(200),
        backgroundColor: COLOR.white,
        borderRadius: ResponsiveSize(20),
        alignItems: 'center',
        justifyContent: 'center',
        padding: ResponsiveSize(20)
        // alignSelf:''
    },
    img: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain'
    },
    PDNameView: {
        marginLeft: ResponsiveSize(20)
    },
    startView: {
        flexDirection: ALINE.row,
        alignItems: 'center',
        marginTop: ResponsiveSize(10)
    },
    reviewText: {
        fontSize: ResponsiveSize(15),
        marginLeft: ResponsiveSize(10),
        marginTop: ResponsiveSize(5)
    },
    rattingView: {
        height: ResponsiveSize(80),
        width: "100%",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.primaray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: ResponsiveSize(5),
        paddingHorizontal: ResponsiveSize(40),
        alignItems: 'center'
        // backgroundColor: "#F7F2F2"
        // backgroundColor: "#F7F2F2",
    },
    rateText: {
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600,
        fontSize: ResponsiveSize(22)
    },
    startView2: {
        alignItems: 'center'
    },
    fromView: {
        padding: ResponsiveSize(20)
    },
    textView: {
        height: ResponsiveSize(80),
        width: "100%",
        borderRadius: ResponsiveSize(20),
        backgroundColor: "#f7f2f2",
        borderWidth: ResponsiveSize(1),
        borderColor: "#cccccc50",
        paddingHorizontal: ResponsiveSize(20)
    },
    poductImageView: {
        width: "100%",
        paddingHorizontal: ResponsiveSize(20)
    },
    PIText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(22),
        paddingHorizontal: ResponsiveSize(20),
        marginTop: ResponsiveSize(5),
        fontWeight: FONTWEGHIT.font600

    },
    cemeraView: {
        width: "100%",
        // height: ResponsiveSize(80),
        backgroundColor: "#FFF3F4",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.primaray,
        borderRadius: ResponsiveSize(10),
        marginTop: ResponsiveSize(15),
        alignItems: 'center',
        justifyContent: 'center',
        padding: ResponsiveSize(10)
    },
    cemeraText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(20)
    },
    modalView: {
        height: "100%",
        width: "100%",
        backgroundColor: "#00000050",
        justifyContent: 'flex-end'
    },
    silderView: {
        // height: ResponsiveSize(300),
        width: "100%",
        borderTopLeftRadius: ResponsiveSize(30),
        borderTopRightRadius: ResponsiveSize(30),
        backgroundColor: COLOR.white,
        padding: ResponsiveSize(20),

    },
    modalText: {
        fontSize: ResponsiveSize(24),
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600,
        // textAlign: 'center'
    },
    opationsView: {
        // flexDirection: 'row',
        // alignItems: 'center',
        width: "100%",
        // justifyContent: 'space-around',
        marginTop: ResponsiveSize(30),
        paddingBottom: ResponsiveSize(20)
    },
    cameraView: {
        height: ResponsiveSize(50),
        width: ResponsiveSize(50),
        borderRadius: ResponsiveSize(20),
        backgroundColor: COLOR.white,
        // gap: ResponsiveSize(10),
        // borderWidth: ResponsiveSize(1),
        // borderColor: COLOR.black
    },
    commanView: {
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',

    },
    IMGIcon: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain'
    },
    barView: {
        width: "98%",
        height: ResponsiveSize(1),
        backgroundColor: COLOR.darkGray,
        marginVertical: ResponsiveSize(15),
        alignSelf: 'center'
    },
    cameraText: {
        marginHorizontal: ResponsiveSize(20),
        fontSize: ResponsiveSize(24)
    },
    closeICON: {
        height: ResponsiveSize(40),
        width: ResponsiveSize(40),
        backgroundColor: COLOR.primaray,
        borderRadius: ResponsiveSize(100),
        position: 'absolute',
        top: ResponsiveSize(20),
        right: ResponsiveSize(20)
    }

})