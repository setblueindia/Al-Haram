import {StyleSheet} from 'react-native';
import {ALINE, COLOR} from '../../constants/style';
import {ResponsiveSize} from '../../utils/utils';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  headerView: {
    padding: ResponsiveSize(20),
  },
  containerView: {
    marginTop: ResponsiveSize(20),
},
numberView: {
    alignItems: ALINE.center,
    justifyContent: ALINE.center,
},
numberText: {
    color: COLOR.primaray,
    fontSize: ResponsiveSize(40),
    fontWeight: 'bold',
},
line: {
    marginTop: ResponsiveSize(20),
    height: ResponsiveSize(2),
    width: '100%',
    backgroundColor: COLOR.gray,
  },
  otpView:{
    marginTop: ResponsiveSize(50),
    width:"100%",
   
  },
  verificationText:{
    fontSize:ResponsiveSize(25)
},
verificationView:{
    marginTop: ResponsiveSize(50),
    justifyContent : ALINE.center,
    alignItems:ALINE.center
},
resendText:{
    color:COLOR.primaray,
    fontSize:ResponsiveSize(30)
},
resendView:{
    marginTop:ResponsiveSize(25)
},
buttonView:{
    marginTop:ResponsiveSize(25),
    padding:ResponsiveSize(20),
    width:'100%'
}
});
