import {Dimensions, StyleSheet} from 'react-native';
import {ALINE, COLOR} from '../../constants/style';
import {ResponsiveSize} from '../../utils/utils';

const windowWidth = Dimensions.get('window').height;
 
export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  headerView: {
    width: '100%',
    padding: ResponsiveSize(20),
  },
  ImageView: {
    width: '100%',
    height: ResponsiveSize(200),
    padding: ResponsiveSize(30),
  },
  logItems: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  container: {
    justifyContent: ALINE.center,
  },
  uthView: {
    // backgroundColor: COLOR.white,
  },
  contentView: {
    padding: ResponsiveSize(20),
    // marginTop:ResponsiveSize(20)
  },
  devider: {
    marginTop: ResponsiveSize(25),
  },
  cheackButtonView: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
    // backgroundColor:"#000"

  },
  rememerView: {
    flexDirection: ALINE.row,
    alignItems: ALINE.center,
  },
  rememverText: {
    marginLeft: ResponsiveSize(20),
  },
  forgetText: {
    color: COLOR.primaray,
    fontSize: ResponsiveSize(25),
    fontWeight: 'bold',
    textAlign:'right'
    
  },
  socialButton: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
  },
  newCustomer: {
    flexDirection: ALINE.row,
    alignItems: ALINE.center,
    justifyContent: ALINE.spaceBetween,
  },
  row: {
    width: '30%',
    height: ResponsiveSize(1),
    backgroundColor: COLOR.gray,
  },
  text: {
    fontSize: ResponsiveSize(25),
    flex:1,
    textAlign:'center'
  },
  checkReam:{
    flexDirection:ALINE.row
  },
  loadder:{
    height: windowWidth,
    width : "100%",
    flex:1,
    position:'absolute'
  }
});
