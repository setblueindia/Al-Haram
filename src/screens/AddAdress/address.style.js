import { StyleSheet } from "react-native";
import { COLOR } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white,
        // padding:ResponsiveSize(20)
    },
    conatainer: {
        backgroundColor: COLOR.white,
        paddingHorizontal: ResponsiveSize(40),
        marginTop: ResponsiveSize(20)
    },
    devider: {
        marginTop: ResponsiveSize(5)
    },
    contiresText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(30),
        marginLeft: ResponsiveSize(20),
        marginTop: ResponsiveSize(20)
    },
    secondView: {
        marginTop: ResponsiveSize(20),
        backgroundColor: "#00000010"
    },
    CheackView: {
        flexDirection: 'row',
        padding: ResponsiveSize(20)
    },
    cheackText: {
        color: COLOR.primaray,
        fontSize: ResponsiveSize(23),
        marginLeft: ResponsiveSize(20)
    },
    btnView: {
        width: "100%",
        marginTop: ResponsiveSize(20)
    },
    stateTextView: {
        width: "100%",
        borderBottomWidth: ResponsiveSize(1),
        borderBottomColor: COLOR.gray,
        height: ResponsiveSize(80),
        padding: ResponsiveSize(10),
        // alignItems:'center'
        justifyContent: 'center'
    },
    stateTextStyle: {
        color: "#00000050"
    },

    listView: {
        height: ResponsiveSize(300),
        width: "100%",
        backgroundColor: COLOR.white,
        // marginTop: ResponsiveSize(20),
        borderRadius: ResponsiveSize(20),
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
        shadowColor: '#000',
        justifyContent: 'space-between',
        paddingHorizontal: ResponsiveSize(20),
        alignItems:'center'
    },
    popView: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        paddingHorizontal: ResponsiveSize(20),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#00000030"
    },

    ScrollView: {
        height: "100%",
        width: "100%"
    },

    itemsName: {
        height: ResponsiveSize(80),
        width: "100%",
        borderBottomWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        justifyContent: 'center'
        // alignItems:'center'
    },

    customerName: {
        fontSize: ResponsiveSize(25),
        color: "#00000060"
    },
})