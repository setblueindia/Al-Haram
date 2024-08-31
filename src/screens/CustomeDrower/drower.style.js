import { StyleSheet } from 'react-native';
import { ResponsiveSize } from '../../utils/utils';
import { ALINE, COLOR, RESIZEMODE } from '../../constants/style';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  containerView: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFE9E9",
    padding: ResponsiveSize(20),
  },
  row: {
    flexDirection: ALINE.row,
    flexWrap: 'wrap',
    justifyContent: ALINE.spaceBetween,
    marginBottom: ResponsiveSize(10),
  },
  firstCeteImageView: {
    height: ResponsiveSize(250),
    width: '33%',
    borderRadius: ResponsiveSize(20),
  },
  topImage: {
    height: "100%",
    width: "100%",
    resizeMode: RESIZEMODE.contain
  },
  fullWidthView: {
    width: '100%',
    backgroundColor: COLOR.white,
    borderRadius: ResponsiveSize(10),
    padding: ResponsiveSize(10),
    marginTop: ResponsiveSize(25),
  },
  subCategoryItem: {
    padding: ResponsiveSize(10),
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: ALINE.row,
    alignItems: ALINE.center
  },
  subImageView: {
    height: ResponsiveSize(60),
    width: ResponsiveSize(60),
    borderRadius: ResponsiveSize(100)
  },
  subImge: {
    height: "100%",
    width: "100%",
    resizeMode: RESIZEMODE.cover,
    borderRadius: ResponsiveSize(100)
  },
  text: {
    color: COLOR.black,
    paddingHorizontal: ResponsiveSize(20)
  },
  childView: {
    backgroundColor: "#FFF9DF",
    padding: ResponsiveSize(20)
  },
  chaildNameText: {
    color: COLOR.black
  },
  ceteGouriesText: {
    color:COLOR.black,
    position:'absolute',
    fontSize:ResponsiveSize(16),
    textAlign:ALINE.center,
    alignSelf:ALINE.center,
    color:COLOR.black,
    marginTop:ResponsiveSize(10),
    width:"80%",
    fontWeight:'500'
    
  }
});