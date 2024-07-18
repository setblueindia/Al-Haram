import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { WC1, WomenBanner } from '../../assests'
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from '../../constants/style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NAVIGATION, NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'
import { NavigationRouteContext } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

const ProductBox = ({ navigation, lang, sindex, items }) => {


  const data = items?.items
  const labale = lang == NUMBER.num0 ? Ar : En
  return (
    <View style={[styles.mainView, sindex % 2 !== 0 && { borderColor: COLOR.white, backgroundColor: COLOR.white }]}>
      <View style={styles.bannerView}>
        <FastImage resizeMode='contain' style={styles.bannerImg} source={{ uri: items?.banner_url }} />
      </View>

      <View style={[styles.textView, lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
        <Text style={styles.categoriesName}>{items?.title}</Text>
        {items?.is_viewAll == 1 &&
          <TouchableOpacity
            onPress={() => { navigation.navigate(NAVIGATION.ProductScreen, { cetegoriesId: items?.view_all_category_id }) }}
          >
            <Text style={styles.viewText}>{"View All"}</Text>
          </TouchableOpacity>}
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
            const name = items?.name
            const finalName = name.substring(0, 15);
            return (
              <View key={index} style={{flexDirection:'row'}}>
                <TouchableOpacity
                  onPress={() => { navigation.navigate(NAVIGATION.ProducDetails, { SKU: items?.sku }) }}
                >
                  <View style={styles.innerCategoriesView}>
                    <Image style={styles.storyView} source={{ uri: items?.image }} />
                  </View>
                  <Text style={[styles.cetegoriesText, lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}>{items?.name?.length > 10 ? finalName + "..." : items?.name}</Text>
                  <Text style={[styles.priceText, lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}>{labale.SAR + " " + items?.price}</Text>
                </TouchableOpacity>
                <View style={{ width: ResponsiveSize(30) }} />
              </View>
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
    textAlign: 'center',
    width: "100%",
    alignSelf: 'center'
  }
})