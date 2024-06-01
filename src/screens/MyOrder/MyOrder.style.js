import { StyleSheet } from 'react-native';
import { ResponsiveSize } from '../../utils/utils';
import { ALINE, COLOR } from '../../constants/style';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  containerView: {
    paddingHorizontal: ResponsiveSize(20),
    marginTop: ResponsiveSize(20),
    flex: 1,
    width: "100%",
    height: "100%"
  },
  listView: {
    backgroundColor: COLOR.white,
    alignSelf: ALINE.center,
    width: '100%',
    marginTop: ResponsiveSize(20),
    padding: ResponsiveSize(24),
    borderRadius: ResponsiveSize(14),
    flexDirection: ALINE.row,
    borderWidth: ResponsiveSize(1),
    borderColor: '#B8B2B2',
    elevation: ResponsiveSize(10),
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: COLOR.black,
    justifyContent: ALINE.spaceBetween

  },

  imgStyle: {
    width:"100%",
    height: "100%",
    alignSelf:ALINE.center,
    resizeMode:'contain'

  },
  imgView:{
    width: ResponsiveSize(60),
    height: ResponsiveSize(60),
    alignSelf:ALINE.center,
    alignItems:ALINE.center
  },
  prdView: {
    alignSelf: ALINE.center,
  },
  idColor: {
    color: COLOR.black,
  },
  prdText: {
    color: '#202020',
  },
  mnyView: {
    alignSelf: ALINE.center,
    alignItems: ALINE.center,
    padding: ResponsiveSize(5),
    borderRadius: ResponsiveSize(3),
  },
  btnView: {
    flexDirection: ALINE.row
  },

  compalatedView: {
    flexDirection: ALINE.row,
    alignItems:ALINE.center
  },
  dott: {
    height: ResponsiveSize(10),
    width: ResponsiveSize(10),
    borderRadius: ResponsiveSize(100),
    backgroundColor: "green",
  },
  compalatedText:{
    color:"green",
    marginLeft:ResponsiveSize(10)
  }
});
