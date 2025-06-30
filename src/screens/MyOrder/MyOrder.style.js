import { StyleSheet } from 'react-native';
import { ResponsiveSize } from '../../utils/utils';
import { ALINE, COLOR } from '../../constants/style';
import { FONTS } from '../../constants/fonts';
import { EXTRASTR } from '../../constants/constants';

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
    height: "100%",
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
    shadowColor: COLOR.black,
    justifyContent: ALINE.spaceBetween

  },

  imgStyle: {
    width: "100%",
    height: "100%",
    alignSelf: ALINE.center,
    resizeMode: 'cover'

  },
  imgView: {
    width: ResponsiveSize(60),
    height: ResponsiveSize(60),
    alignSelf: ALINE.center,
    alignItems: ALINE.center
  },
  prdView: {
    alignSelf: ALINE.center,
  },
  idColor: {
    color: COLOR.black,
    fontFamily: FONTS.Regular
  },
  prdText: {
    color: '#202020',
    width: ResponsiveSize(300),
    fontSize: ResponsiveSize(18),
    fontFamily: FONTS.Regular
  },
  mnyView: {
    alignSelf: ALINE.center,
    alignItems: ALINE.center,
    padding: ResponsiveSize(5),
    borderRadius: ResponsiveSize(3),
    width: ResponsiveSize(100),
  },
  btnView: {
    flexDirection: ALINE.row
  },

  compalatedView: {
    flexDirection: ALINE.row,
    alignItems: ALINE.center,
    justifyContent: ALINE.center
  },
  dott: {
    height: ResponsiveSize(10),
    width: ResponsiveSize(10),
    borderRadius: ResponsiveSize(100),
    backgroundColor: "green",
    marginTop: ResponsiveSize(5)
  },
  compalatedText: {
    color: "green",
    marginLeft: ResponsiveSize(10),
    flex: 1,
    textAlign: EXTRASTR.left,
    fontSize: ResponsiveSize(18),
    fontFamily: FONTS.Regular

  }
});
