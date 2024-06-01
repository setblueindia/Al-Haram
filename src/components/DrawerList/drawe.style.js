import {StyleSheet} from 'react-native';
import {ALINE, COLOR} from '../../constants/style';
import {ResponsiveSize} from '../../utils/utils';

export const styles = StyleSheet.create({
  mainView: {
    // alignItems: ALINE.center,
  },
  mainHeaderText: {
    color: COLOR.black,
    fontSize: ResponsiveSize(25),
    fontWeight: '600',
    
  },
  mainListView: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
    alignItems: ALINE.center,
    width: '100%',
    height:ResponsiveSize(60),
    marginTop:ResponsiveSize(10)

  },
  innerTextView:{
    // marginTop:ResponsiveSize(10)
  }

});
