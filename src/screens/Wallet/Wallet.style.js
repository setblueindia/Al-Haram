import { StyleSheet } from 'react-native';
import { ResponsiveSize } from '../../utils/utils';
import { ALINE, COLOR } from '../../constants/style';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  mngView: {
    marginTop: ResponsiveSize(50),
    paddingHorizontal: ResponsiveSize(20),
  },
  mngText: {
    color: COLOR.primaray,
    fontSize: ResponsiveSize(25)
  },
  walletView: {
    backgroundColor: '#FFF3F4',
    width: '100%',
    height: ResponsiveSize(150),
    alignSelf: ALINE.center,
    flexDirection: ALINE.row,
    marginTop: ResponsiveSize(20),
    borderRadius: ResponsiveSize(10),
    padding: ResponsiveSize(10),
    borderWidth: ResponsiveSize(1),
    borderColor: '#990107',
    // justifyContent:'center',
    alignItems: ALINE.center,
    // elevation:10
  },
  walletImg: {
    // marginRight:ResponsiveSize(20),
    flex: 0.3,
    alignSelf: ALINE.center,
    alignItems: ALINE.center,
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceevenly,
  },
  lineView: {
    height: ResponsiveSize(60),
    width: ResponsiveSize(1),
    backgroundColor: '#968A8A',
    alignSelf: ALINE.center,
  },
  detailText: {
    color: COLOR.black,
  },
  mnyText: {
    color: COLOR.primaray,
  },
  balText: {
    color: COLOR.black,
  },
  amtView: {
    marginTop: ResponsiveSize(50),

  },
  txtView: {
    alignSelf: ALINE.center,
    flexDirection: ALINE.row,
    alignItems: ALINE.center,
  },
  inputView: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.center,
    alignItems: ALINE.center,
    backgroundColor: COLOR.white,
    borderWidth: 0.5,
    borderColor: COLOR.black,
    padding: ResponsiveSize(5),
    borderRadius: ResponsiveSize(5),
    margin: ResponsiveSize(10),
    width: '100%',
    height: ResponsiveSize(80)
  },
  addAmtView: {
    alignSelf: ALINE.center,
    width: '100%',
    backgroundColor: '#990107',
    marginTop: ResponsiveSize(20),
  },
  paymentHistroy:{
    alignSelf: ALINE.center,
    width: '100%',
    backgroundColor: COLOR.white,
    borderWidth:ResponsiveSize(1),
    borderColor:COLOR.liteGreen,
    marginTop: ResponsiveSize(20),
  },

  amtBtn: {
    padding: ResponsiveSize(14),
    borderRadius: ResponsiveSize(5),
    alignItems: ALINE.center,
  },
  amtText: {
    color: COLOR.white, 
    fontSize: ResponsiveSize(27),
    width:"100%",
    textAlign:'center'
    // flex:1
  },
  paymentText: {
    color: COLOR.black, 
    fontSize: ResponsiveSize(27),
    width:"100%",
    textAlign:'center'
  }
});
