import { Dimensions, StyleSheet } from "react-native";
import { ResponsiveSize } from "../../utils/utils";
import { ALINE, COLOR, FONTWEGHIT } from "../../constants/style";
const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    mainView: {
//   backgroundColor:COLOR.gray

    },
   
    productView: {   
        margin: ResponsiveSize(10),
        borderRadius: ResponsiveSize(20),
        borderWidth: 1,
        borderColor: COLOR.gray,
        alignSelf: ALINE.center,
        height:ResponsiveSize(270),
        alignItems: ALINE.center,
        backgroundColor:COLOR.white

        
        // height:ResponsiveSize(300)
    },

    container: {
        width: width,
        // backgroundColor: COLOR.white,
        // borderWidth: 0.5,
        borderColor: COLOR.gray,
        padding: ResponsiveSize(10),


    },
    headerTextView: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        marginBottom:ResponsiveSize(10)
    
    },

    viewText: {
        fontSize: ResponsiveSize(25),
        color: COLOR.primaray,
        
    },

    headerText: {
        fontSize: ResponsiveSize(30),
        color: COLOR.black,
        fontWeight: FONTWEGHIT.font700,
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain',
        borderRadius: ResponsiveSize(30),
    },
    imgView: {
        // height: ResponsiveSize(200),
        width: ResponsiveSize(200),
        borderRadius: ResponsiveSize(30),

    },
    ProductName: {
        color: COLOR.black,
        fontSize: ResponsiveSize(25),
        fontWeight: '600',
        marginLeft: ResponsiveSize(15)
    },
    listView: {

    },
    Price: {
        marginLeft: ResponsiveSize(15),
        color: COLOR.black,
        marginTop: ResponsiveSize(10),
        fontSize: ResponsiveSize(25)
    },

    newInco:{
        resizeMode:'contain',
        height:"100%",
        width:"100%"
      
    },
    newIncoView:{
        left:0,
        top:0,
        position:'absolute',
        height:ResponsiveSize(60),
        width:ResponsiveSize(80),    
    },
    likeView:{
        position:'absolute',
        right:ResponsiveSize(8),
        top:ResponsiveSize(8),
        alignItems:"center",
        justifyContent:'center',
        borderRadius:ResponsiveSize(100),
        borderWidth:ResponsiveSize(1),
        borderColor:COLOR.gray,
        height:ResponsiveSize(40),
        width:ResponsiveSize(40)
    },
    like:{
        color:COLOR.primaray
    }


})