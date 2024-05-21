import {StyleSheet} from 'react-native';
import {ResponsiveSize} from '../../utils/utils';
import {ALINE, COLOR, FONTWEGHIT} from '../../constants/style';

export const styles = StyleSheet.create({
  mainView: {flex: 1},

  profileView: {
    flexDirection: ALINE.row,
    // justifyContent:ALINE.center,
    alignItems: ALINE.center,
    padding: ResponsiveSize(20),
  },
  profileIcon: {
    height: ResponsiveSize(100),
    width: ResponsiveSize(100),
  },
  icon: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    tintColor: COLOR.primaray,
  },
  nameView: {
    marginLeft: ResponsiveSize(20),
  },
  userNameText: {
    color: COLOR.black,
    fontSize: ResponsiveSize(30),
  },
  editIcon: {
    position: 'absolute',
    right: ResponsiveSize(10),
    top: ResponsiveSize(15),
  },
  edit: {
    height: ResponsiveSize(40),
    width: ResponsiveSize(40),
  },
  line: {
    width: '100%',
    height: ResponsiveSize(2),
    backgroundColor: COLOR.black,
  },
  lineView: {
    marginTop: ResponsiveSize(20),
    paddingHorizontal: ResponsiveSize(20),
  },
  drawerList: {
    paddingHorizontal: ResponsiveSize(20),
  },
  LastView: {
    padding: ResponsiveSize(20),
  },
  ScrollView: {
    backgroundColor: COLOR.white,
    height: ResponsiveSize(700),
    // height: '60%',
    // elevation: 2,
    elevation: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: '#000',

    // marginTop:ResponsiveSize(10)
  },
  loginText: {
    fontSize: ResponsiveSize(30),
    color: COLOR.black,
    fontWeight: FONTWEGHIT.bold,
  },
  loginTextView: {
    paddingHorizontal: ResponsiveSize(20),
  },
  chnageLangBtnView: {
    width: ResponsiveSize(250),
    height: ResponsiveSize(80),
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.liteGreen,
    backgroundColor: COLOR.white,
    borderBottomWidth: ResponsiveSize(5),
    alignItems: ALINE.center,
    justifyContent: ALINE.center,
  },
  btnView: {
    alignItems: ALINE.center,
    justifyContent: ALINE.center,
    marginTop: ResponsiveSize(20),
  },
  btntext: {
    fontSize: ResponsiveSize(30),
    color: COLOR.black,
    fontWeight: FONTWEGHIT.font700,
  },
  socialView: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceevenly,
  },
  buildView: {
    justifyContent: ALINE.center,
    alignItems: ALINE.center,
    marginTop: ResponsiveSize(20),
  },
});
