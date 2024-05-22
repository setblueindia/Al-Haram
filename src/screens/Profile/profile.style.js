import {StyleSheet} from 'react-native';
import {ResponsiveSize} from '../../utils/utils';
import { ALINE, COLOR } from '../../constants/style';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  profileView: {
    borderWidth: ResponsiveSize(1),
    // height: ResponsiveSize(250),
    borderColor: '#DCDCDC',
  },
  linearView: {
    // width: '100%',
    // height: '100%',
    borderBottomWidth: 0.5,
  },
  profileMain: {
    marginTop:ResponsiveSize(20),
    padding:ResponsiveSize(10)
    // marginRight:ResponsiveSize(20)
  },
  profileText: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
    paddingHorizontal: ResponsiveSize(10),
    
  },

  userText: {
    // marginTop:ResponsiveSize(10),
    width: '90%',
    alignSelf: ALINE.center,
  },
  userNameStyle: {
    color: COLOR.primaray,
    fontSize:ResponsiveSize(30)
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
    // paddingHorizontal: ResponsiveSize(10),
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
    marginHorizontal:ResponsiveSize(40)
    // flex: 0.7,
    // padding: 5,
  },
  textEmail: {
    color: COLOR.black,
  },
  selected: {
    backgroundColor: '#E0E0E0', 
  },
});
