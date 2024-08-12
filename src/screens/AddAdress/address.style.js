import { StyleSheet } from "react-native";
import { ALINE, COLOR, FONTWEGHIT } from "../../constants/style";
import { ResponsiveSize } from "../../utils/utils";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    conatainer: {
        backgroundColor: COLOR.white,
        paddingHorizontal: ResponsiveSize(20),
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
        backgroundColor: "#F7F7F7"
    },
    CheackView: {
        flexDirection: ALINE.row,
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
        justifyContent: ALINE.center,
        paddingHorizontal:ResponsiveSize(20)
    },
    stateTextStyle: {
        color: "#00000050"
    },
    listView: {
        width: "100%",
        height:ResponsiveSize(500),
        backgroundColor: COLOR.white,
        justifyContent: ALINE.spaceBetween,
        padding: ResponsiveSize(20),
        alignItems:ALINE.center,
        borderTopLeftRadius:ResponsiveSize(30),
        borderTopRightRadius:ResponsiveSize(30)
    },
    popView: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: ALINE.center,
        backgroundColor:"#00000030",
    },

    ScrollView: {
        height: "100%",
        width: "100%",
        borderColor:COLOR.liteGray,
        borderWidth:ResponsiveSize(1)
    },

    itemsName: {
        height: ResponsiveSize(80),
        width: "100%",
        borderBottomWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        justifyContent: 'center',
        paddingHorizontal:ResponsiveSize(20)
    },

    customerName: {
        fontSize: ResponsiveSize(25),
        color: COLOR.darkGray
    },
    serchView:{
        height:ResponsiveSize(80),
        width:"100%",
        backgroundColor:"#FFE9E9",
        borderBottomWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        paddingHorizontal:ResponsiveSize(20),
        borderWidth:ResponsiveSize(1),
        borderColor:COLOR.liteGray
    },
    PopBtnView:{
        flexDirection:'row',
        width:"100%",
        padding:ResponsiveSize(20),
        justifyContent:'space-between',
        backgroundColor:"#FFE9E9",

    },
    poppBtn:{
        height:ResponsiveSize(80),
        width:ResponsiveSize(230),
        backgroundColor:COLOR.primaray,
        alignItems:'center',
        justifyContent:'center',
   
    },
    cancalText:{
        color:COLOR.white,
        fontSize:ResponsiveSize(25),
        fontWeight:FONTWEGHIT.font600
    },
    popTex:{
        color:COLOR.primaray,
        fontSize:ResponsiveSize(30),
        padding:ResponsiveSize(20),
        width:"100%",
        textAlign:'center'
    }
})