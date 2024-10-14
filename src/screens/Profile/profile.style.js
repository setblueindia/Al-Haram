import { Platform, StyleSheet } from 'react-native';
import { ResponsiveSize } from '../../utils/utils';
import { ALINE, COLOR } from '../../constants/style';


export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: COLOR.white,
    height: "100%",
    width: "100%",
    flex: 1
  },
  profileView: {
    borderWidth: ResponsiveSize(1),
    borderColor: '#DCDCDC',
  },
  linearView: {
    borderBottomWidth: 0.5,
  },
  profileMain: {
    marginTop: ResponsiveSize(20),
    padding: ResponsiveSize(10)
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
    fontSize: ResponsiveSize(30),
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
    padding: ResponsiveSize(15),
    borderBottomWidth: 0.5,
    justifyContent: ALINE.spaceBetween,
    paddingHorizontal: ResponsiveSize(20),
    backgroundColor: COLOR.white
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
    marginHorizontal: ResponsiveSize(40),
    flex: Platform.OS == 'android' && 1,
  },
  textEmail: {
    color: COLOR.black,
  },
  selected: {
    backgroundColor: '#E0E0E0',
  },
  lanView: {
    flexDirection: ALINE.row,
    padding: ResponsiveSize(10),
    borderBottomWidth: 0.5,
    justifyContent: ALINE.spaceBetween,
    paddingHorizontal: ResponsiveSize(20),
    flexDirection: ALINE.row,
  },
  lngBtn: {
    height: ResponsiveSize(70),
    width: ResponsiveSize(200),
    backgroundColor: COLOR.primaray,
    borderRadius: ResponsiveSize(20),
    alignItems: ALINE.center,
    justifyContent: ALINE.center
  },
  btnText: {
    color: COLOR.white,
    fontSize: ResponsiveSize(25),
  },
  btnView: {
    width: "100%",
    justifyContent: ALINE.center,
    alignItems: ALINE.center,
    marginTop: ResponsiveSize(30),
    backgroundColor: "#FFF3F4",
    padding: ResponsiveSize(30)
  },
  chnageLangBtnView: {
    height: ResponsiveSize(80),
    width: ResponsiveSize(250),
    justifyContent: ALINE.center,
    alignItems: ALINE.center,
    borderColor: 'green',
    borderWidth: ResponsiveSize(2),
    backgroundColor: COLOR.white,
    marginBottom: ResponsiveSize(30),
    marginTop: ResponsiveSize(10)
  },
  btntext: {
    color: COLOR.black,
    fontSize: ResponsiveSize(30),
    fontWeight: '600'
  },
  socialView: {
    // height: ResponsiveSize(200),
    width: "100%",
    backgroundColor: COLOR.white,
    alignItems: 'center',
    padding: ResponsiveSize(10)
  },
  scoialLinkTex: {
    color: COLOR.black,
    fontSize: ResponsiveSize(25),
    width: "100%",
    textAlign: 'left',
    marginLeft: ResponsiveSize(60)
  },
  scoialIconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: "50%",
    marginTop: ResponsiveSize(20)
  },
  roundIcon: {
    height: ResponsiveSize(60),
    width: ResponsiveSize(60),
    borderRadius: ResponsiveSize(100),
    backgroundColor: COLOR.white,
    shadowColor: COLOR.black,
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.liteGray
  },
  cocialIcon: {
    height: "100%",
    width: "100%",
    resizeMode: 'cover',
    borderRadius: ResponsiveSize(100)
  }
});
