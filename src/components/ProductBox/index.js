import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { WC1, WomenBanner } from '../../assests'
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from '../../constants/style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NUMBER } from '../../constants/constants'

const ProductBox = ({ lang , index , items}) => {
  const data = items?.innerData
  return (
    <View style={[styles.mainView, index % 2 !== 0 && { borderColor: COLOR.white, backgroundColor: COLOR.white }]}>
      <View style={styles.bannerView}>
        <Image style={styles.bannerImg} source={require("../../assests/images/Home/ProductBanneer1.png")} />
      </View>

      <View style={[styles.textView, lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
        <Text style={styles.categoriesName}>{items?.name}</Text>
        <TouchableOpacity>
          <Text style={styles.viewText}>{"View All"}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={true}
        style={[styles.subCategories,
        lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}
      >
        {
          data?.map((items, index) => {
            return (
              <>
                <TouchableOpacity key={index}>
                  <View style={styles.innerCategoriesView}>
                    <Image style={styles.storyView} source={items?.imge} />
                  </View>
                  <Text style={[styles.cetegoriesText, lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}>{"Winter"}</Text>
                  <Text style={[styles.priceText , lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}>{"SAR 84"}</Text>
                </TouchableOpacity>

                <View style={{ width: ResponsiveSize(30) }} />
              </>
            )
          })
        }
      </ScrollView>

    </View>
  )
}

export default ProductBox

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: ResponsiveSize(20),
    backgroundColor: "#FFF0DC",
    borderWidth: ResponsiveSize(1),
    borderColor: "#CEB282"

  },
  bannerView: {
    height: ResponsiveSize(250),
  },
  bannerImg: {
    height: "100%",
    width: "100%",
    resizeMode: RESIZEMODE.contain
  },
  textView: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
    paddingHorizontal: ResponsiveSize(10)
  },
  categoriesName: {
    color: COLOR.black,
    fontSize: ResponsiveSize(25),
    fontWeight: FONTWEGHIT.font600
  },
  viewText: {
    color: COLOR.primaray
  },
  subCategories: {
    flexDirection: 'row',
    marginTop: ResponsiveSize(30),
    paddingBottom: ResponsiveSize(30)
  },
  innerCategoriesView: {
    height: ResponsiveSize(250),
    width: ResponsiveSize(200),
    backgroundColor: COLOR.white,
    borderRadius: ResponsiveSize(20),
    borderWidth: ResponsiveSize(1),
    borderColor: "#00000040",
    padding: ResponsiveSize(20)
  },
  storyView: {
    borderRadius: ResponsiveSize(100),
    height: "100%",
    width: "100%",
  },
  cetegoriesText: {
    textAlign: "center",
    color: COLOR.black,
    marginTop: ResponsiveSize(20)
  },
  priceText: {
    fontWeight: FONTWEGHIT.font600,
    color: COLOR.primaray,
    textAlign: 'center'
  }
})