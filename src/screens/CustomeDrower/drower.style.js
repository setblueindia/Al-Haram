import { StyleSheet } from 'react-native';
import { ResponsiveSize } from '../../utils/utils';
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from '../../constants/style';

// export const styles = StyleSheet.create({
//   // mainView: {
//   //   flex: 1,
//   //   height:"100%",
//   //   with:"100%"
//   // },
//   // profileView: {
//   //   flexDirection: ALINE.row,
//   //   alignItems: ALINE.center,
//   //   padding: ResponsiveSize(20),
//   // },
//   // profileIcon: {
//   //   height: ResponsiveSize(100),
//   //   width: ResponsiveSize(100),
//   // },
//   // icon: {
//   //   resizeMode: 'contain',
//   //   height: '100%',
//   //   width: '100%',
//   //   tintColor: COLOR.primaray,
//   // },
//   // nameView: {
//   //   marginLeft: ResponsiveSize(20),
//   // },
//   // userNameText: {
//   //   color: COLOR.black,
//   //   fontSize: ResponsiveSize(30),
//   // },
//   // editIcon: {
//   //   position: 'absolute',
//   //   right: ResponsiveSize(10),
//   //   top: ResponsiveSize(15),
//   // },
//   // edit: {
//   //   height: ResponsiveSize(40),
//   //   width: ResponsiveSize(40),
//   // },
//   // line: {
//   //   width: '100%',
//   //   height: ResponsiveSize(2),
//   //   backgroundColor: COLOR.black,
//   // },
//   // lineView: {
//   //   marginTop: ResponsiveSize(20),
//   //   paddingHorizontal: ResponsiveSize(20),
//   // },
//   // drawerList: {
//   //   paddingHorizontal: ResponsiveSize(20),
//   // },
//   // LastView: {
//   //   padding: ResponsiveSize(20),
//   // },
//   // ScrollView: {
//   //   backgroundColor: COLOR.white,
//   //   height: ResponsiveSize(700),
//   //   elevation: 2,
//   //   shadowOffset: { width: 0, height: 1 },
//   //   shadowOpacity: 0.5,
//   //   shadowRadius: 2,
//   //   shadowColor: COLOR.black,
//   // },
//   // loginText: {
//   //   fontSize: ResponsiveSize(30),
//   //   color: COLOR.black,
//   //   fontWeight: FONTWEGHIT.bold,
//   // },
//   // loginTextView: {
//   //   paddingHorizontal: ResponsiveSize(20),
//   // },
//   // chnageLangBtnView: {
//   //   width: ResponsiveSize(250),
//   //   height: ResponsiveSize(80),
//   //   borderWidth: ResponsiveSize(1),
//   //   borderColor: COLOR.liteGreen,
//   //   backgroundColor: COLOR.white,
//   //   borderBottomWidth: ResponsiveSize(5),
//   //   alignItems: ALINE.center,
//   //   justifyContent: ALINE.center,
//   // },
//   // btnView: {
//   //   alignItems: ALINE.center,
//   //   justifyContent: ALINE.center,
//   //   marginTop: ResponsiveSize(20),
//   // },
//   // btntext: {
//   //   fontSize: ResponsiveSize(30),
//   //   color: COLOR.black,
//   //   fontWeight: FONTWEGHIT.font700,
//   // },
//   // socialView: {
//   //   flexDirection: ALINE.row,
//   //   justifyContent: ALINE.spaceevenly,
//   // },
//   // buildView: {
//   //   justifyContent: ALINE.center,
//   //   alignItems: ALINE.center,
//   //   marginTop: ResponsiveSize(20),
//   // },
//   // loaddingView:{
//   //   flex:1,
//   //   position:'absolute',
//   //   height:"100%",
//   //   width:"100%"
//   // }
// });





export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  containerView: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFE9E9",
    padding: ResponsiveSize(20),
  },
  row: {
    flexDirection: ALINE.row,
    flexWrap: 'wrap',
    justifyContent: ALINE.spaceBetween,
    marginBottom: ResponsiveSize(10),
  },
  firstCeteImageView: {
    height: ResponsiveSize(250),
    width: '33%',
    borderRadius: ResponsiveSize(20),
  },
  topImage: {
    height: "100%",
    width: "100%",
    resizeMode: RESIZEMODE.contain
  },
  fullWidthView: {
    width: '100%',
    backgroundColor: "#FFF",
    borderRadius: ResponsiveSize(10),
    padding: ResponsiveSize(10),
    marginTop: ResponsiveSize(25),
  },
  subCategoryItem: {
    padding: ResponsiveSize(10),
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: ALINE.row,
    alignItems: ALINE.center
  },
  subImageView: {
    height: ResponsiveSize(60),
    width: ResponsiveSize(60),
    borderRadius: ResponsiveSize(100)
  },
  subImge: {
    height: "100%",
    width: "100%",
    resizeMode: RESIZEMODE.cover,
    borderRadius: ResponsiveSize(100)
  },
  text: {
    color: COLOR.black,
    paddingHorizontal: ResponsiveSize(20)
  },
  childView: {
    backgroundColor: "#FFF9DF",
    padding: ResponsiveSize(20)
  },
  chaildNameText: {
    color: COLOR.black
  },
  ceteGouriesText: {
    color:COLOR.black,
    position:'absolute',
    fontSize:ResponsiveSize(16),
    textAlign:ALINE.center,
    alignSelf:ALINE.center,
    color:COLOR.black,
    marginTop:ResponsiveSize(10),
    width:"80%",
    fontWeight:'500'
    
  }
});