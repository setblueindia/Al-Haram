import {Platform, StyleSheet} from 'react-native';
import {ResponsiveSize} from '../../utils/utils';
import { ALINE, COLOR } from '../../constants/style';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  profileView: {
    borderWidth: ResponsiveSize(1),
    borderColor: '#DCDCDC',
  },
  linearView: {
    borderBottomWidth: 0.5,
  },
  profileMain: {
    marginTop:ResponsiveSize(20),
    padding:ResponsiveSize(10)
  },
  profileText: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
    paddingHorizontal: ResponsiveSize(10),
    
  },
  userText: {
    width: '90%',
    alignSelf: ALINE.center,
  },
  userNameStyle: {
    color: COLOR.primaray,
    fontSize:ResponsiveSize(30),
    // flex:1
  },
  emailText: {
    width: '90%',
    alignSelf: ALINE.center,
  },
  CustomeHeaderView: {
    width: '100%',
    padding: ResponsiveSize(20),
  },
  menuView: {
    flexDirection: ALINE.row,
    padding: ResponsiveSize(20),
    borderBottomWidth: 0.5,
    justifyContent:ALINE.spaceBetween,
    paddingHorizontal:ResponsiveSize(20)
  },

  innerText: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: ALINE.center,
  },
  menuText: {
    fontSize: ResponsiveSize(25),
    color: COLOR.black,
    
  },
  textMenu: {
    marginHorizontal:ResponsiveSize(40),
    flex: Platform.OS == 'android' && 1,

  },
  textEmail: {
    color: COLOR.black,
  },
  selected: {
    backgroundColor: '#E0E0E0', 
  },
  lanView:{
    flexDirection: ALINE.row,
    padding: ResponsiveSize(10),
    borderBottomWidth: 0.5,
    justifyContent:ALINE.spaceBetween,
    paddingHorizontal:ResponsiveSize(20),
    flexDirection:ALINE.row,
  },
  lngBtn : {
     height:ResponsiveSize(70),
     width:ResponsiveSize(200),
     backgroundColor:COLOR.primaray,
     borderRadius:ResponsiveSize(20),
     alignItems:ALINE.center,
     justifyContent:ALINE.center
  },
  btnText:{
    color:COLOR.white,
    fontSize:ResponsiveSize(25)
  },
  btnView:{
    width:"100%",
    justifyContent:ALINE.center,
    alignItems:ALINE.center,
    marginTop:ResponsiveSize(100)
  },
  chnageLangBtnView:{
    height:ResponsiveSize(80),
    width:ResponsiveSize(200),
    justifyContent:ALINE.center,
    alignItems:ALINE.center,
    borderRadius:ResponsiveSize(10),
    borderColor:'green',
    borderWidth:ResponsiveSize(2),

  },
  btntext:{
    color:COLOR.black,
    fontSize:ResponsiveSize(30),
    fontWeight:'600'
  }
});
