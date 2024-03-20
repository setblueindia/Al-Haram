import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  lodercontainer: {
    backgroundColor: "#fff",
    height: height,
    alignItems: "center", paddingVertical: 300
  },
  container: {
    backgroundColor: "#fff"
  },
  categories: {
    padding: 10
  },
  screenText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  aboutBtn: {
    backgroundColor: '#1A1924',
    height: height * 0.08,
    width: width * 0.4,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  aboutBtnText: {
    color: 'white',
    fontSize: 18,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  animatedimage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  image: {
    width: width * 0.2,
    height: height * 0.1,
    margin: 5,
    borderRadius: 100 / 3,
  },
  categoryName: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  topBannerImage: {
    width: '100%',
    height: 20,
  },
  sliderImage: {
    width: width,
    height: height * 0.4,
    margin: 5,
  },
  TopCategoriesText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#980404",
    padding: 10
  },
  Topbanner: {
    padding: 10,
  },
  Topbannertext: {
    fontSize: 15,
    fontWeight: "500",
    color: "#4a484a"
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  gridImage: {
    width: '48%',
    height: 150,
    marginBottom: 10,
  },
  featuredProducts: {
    padding: 10,
  },
  featuredProductsText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#980404",
    padding: 5
  },
  featuredproductsview: {
    width: width * 35 / 100,
    margin: 5,
    alignItems: "center",
  },
  featuredProductImage: {
    width: width * 35 / 100,
    height: height * 25 / 100,
  },
  featuredname: {
    width: width * 35 / 100,
    textAlign: 'center',
    color: "#4a484a",
    padding: 5,
  },
  featuredprize: {
    textAlign: 'center',
    color: "#980404",
    fontSize: 12
  },
  specialOffers: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  specialOffersText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#980404",
    padding: 5
  },
  specialOfferView: {
    width: width * 35 / 100,
    margin: 5,
    position: 'relative',
    alignItems: "center",
  },
  specialOfferImage: {
    width: width * 35 / 100,
    height: height * 25 / 100,
  },
  specialOfferName: {
    textAlign: 'center',
    color: "#4a484a",
    padding: 5
  },
  specialOfferPrice: {
    textAlign: 'center',
    color: "#980404",
    fontSize: 12
  },
  specialOffershow: {
    textAlign: 'center',
    color: "#980404",
    fontSize: 16
  },
  specialOfferOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width * 0.4,
    height: height * 0.5,
  },
  latestproduct: {
    paddingHorizontal: 5,
  },
  latestproductText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#980404",
    padding: 5
  },
  latestproductView: {
    width: width * 35 / 100,
    margin: 5,
    position: 'relative',
    height: height * 35 / 100,
    alignItems: "center",
  },
  latestproductImage: {
    width: width * 35 / 100,
    height: height * 25 / 100,
  },
  latestproductName: {
    textAlign: 'center',
    color: "#4a484a",
    padding: 5
  },
  latestproductPrice: {
    textAlign: 'center',
    color: "#980404",
    fontSize: 12
  },
  gamecategory: {
    paddingHorizontal: 10,
  },
  gamecategoryText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#980404",
    padding: 5
  },
  gamecategoryTextView: {
    width: width * 35 / 100,
    margin: 5,
    position: 'relative',
    alignItems: "center",
  },
  gamecategoryTextViewImage: {
    width: width * 35 / 100,
    height: height * 25 / 100,
  },
  gamecategoryName: {
    textAlign: 'center',
    color: "#4a484a",
    padding: 5
  },
  gamecategoryPrice: {
    textAlign: 'center',
    color: "#980404",
    fontSize: 12
  },
  gamecategoryshow: {
    textAlign: 'center',
    color: "#980404",
    fontSize: 16
  },
  specialOfferOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width * 0.4,
    height: height * 0.5,
  },
  schoolcategory: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  schoolcategoryText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#980404",
    padding: 5
  },
  schoolcategoryView: {
    width: width * 35 / 100,
    margin: 5,
    position: 'relative',
    alignItems: "center",
  },
  schoolcategoryImage: {
    width: width * 35 / 100,
    height: height * 25 / 100,
  },
  schoolcategoryName: {
    textAlign: 'center',
    color: "#4a484a",
    padding: 5
  },
  schoolcategoryPrice: {
    textAlign: 'center',
    color: "#980404",
    fontSize: 12
  },
  schoolcategoryshow: {
    textAlign: 'center',
    color: "#980404",
    fontSize: 16
  },
  specialOfferOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width * 0.4,
    height: height * 0.5,
  },
  gridBannerGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginHorizontal: 10,
  },
  gridBannerImage: {
    width: width * 40 / 100,
    height: height * 20 / 100,
    borderRadius: 8,
  },
});
export default styles;