import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { WC1, WomenBanner } from '../../assests'
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from '../../constants/style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NAVIGATION, NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'
import { NavigationRouteContext } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import { BASE_URL } from '../../constants/axios.url'

const ProductBox = ({ navigation, lang, sindex, items }) => {


  const data = items?.items
  const labale = lang?.data == NUMBER.num0 ? Ar : En
  const [imageLoader, setImageLoader] = useState(false)

  return (
    <View style={[
      styles.mainView,
      sindex % 2 !== 0 && { borderColor: COLOR.white, backgroundColor: COLOR.white }
    ]}>
      <View style={styles.bannerView}>
        <FastImage
          resizeMode='contain'
          style={styles.bannerImg}
          onLoadStart={() => { setImageLoader(true) }}
          onLoadEnd={() => { setImageLoader(false) }}
          source={{ uri: items?.banner_url && items?.banner_url }} />

        {imageLoader &&
          <View style={{
            height: "100%",
            width: "100%",
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
          }}>
            <ActivityIndicator size='small' color={COLOR.primaray} />
          </View>}
      </View>

      <View style={[styles.textView, lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
        <Text style={[styles.categoriesName, lang.data == NUMBER.num0 && { textAlign: 'right' }]}>{items?.title}</Text>
        {items?.is_viewAll == 1 &&
          <TouchableOpacity
            onPress={() => { navigation.navigate(NAVIGATION.ProductScreen, { cetegoriesId: items?.view_all_category_id }) }}
          >
            <Text style={[styles.viewText, lang.data == NUMBER.num0 && { textAlign: 'left' }]}>{labale.ViewAll}</Text>
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
           const productImage = items?.image 
            return (
              <View key={index} style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { navigation.navigate(NAVIGATION.ProducDetails, { SKU: items?.sku }) }}>
                  <View style={styles.innerCategoriesView}>
                    <FastImage style={styles.storyView} source={{ uri: productImage }} />
                  </View>
            {   (items?.special_offer || items?.is_new_badge)  &&  <View style={[styles.textImgView , items?.special_offer ? {right:ResponsiveSize(0)} :  {left:ResponsiveSize(0)}  ]}>
                    <FastImage style={{height:"100%" , width:"100%"}} source={{ uri: items?.special_offer ? items?.special_offer :  items?.is_new_badge }} />
                  </View>}
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
  textImgView: {
    height: ResponsiveSize(90),
    width: ResponsiveSize(90),
    // backgroundColor: COLOR.black,
    position: 'absolute'
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
    fontWeight: FONTWEGHIT.font600,
    width: ResponsiveSize(400)
  },
  viewText: {
    color: COLOR.primaray,
    width: ResponsiveSize(100),
    textAlign: 'right'
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