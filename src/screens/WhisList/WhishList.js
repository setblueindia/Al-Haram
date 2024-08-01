import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './whishList.style'
import CommanHeader from '../../components/ComanHeader'
import useWhishListHook from './whishList.hook'
import Filter from "react-native-vector-icons/AntDesign";
import { ICON, NAVIGATION, NUMBER } from '../../constants/constants'
import { ResponsiveSize } from '../../utils/utils'
import { COLOR } from '../../constants/style'
import CusLoader from '../../components/CustomLoader'
import FastImage from 'react-native-fast-image'
import DataNotFound from '../../components/DataNotFound'
import DataIsNotFound from '../../components/DataNotFound2'

const WhishList = () => {
  const { navigation, data, lang, likePress, isLoading, dislikePress, lotti, userData } = useWhishListHook()

  return (
    <View style={styles.mainView}>
      <CommanHeader navigation={navigation} lang={lang} />
      {data.length > 0 ? <FlatList
        data={data}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item, index }) => {
          const Name = item?.name.substr(0, 15)
          return (
            <View style={{}} key={index}>
              <TouchableOpacity
                onPress={()=>{navigation.navigate(NAVIGATION.ProducDetails , { SKU: item?.sku })}}
                style={styles.imageView}>
                {item?.image ? <FastImage style={styles.image} source={{ uri: item?.image }} /> : <View style={[styles.imageView, { backgroundColor: COLOR.black }]} />}
              </TouchableOpacity>

              <View style={styles.textView}>
                <Text style={[styles.productName, lang == NUMBER.num0 && { textAlign: 'right' }]}>{Name}</Text>
                <Text style={[styles.priceText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{"SAR : " + item?.price}</Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  likePress(item?.id)
                  dislikePress(item?.id)
                }}
                style={styles.likeView}>
                <Filter name={item?.like ? ICON.heart : ICON.hearto} size={ResponsiveSize(25)} color={COLOR.primaray} />
              </TouchableOpacity>
            </View>
          )
        }}
      /> : !isLoading ?
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <DataIsNotFound />
        </View>

        : null}

      {isLoading
        &&
        <View style={{ position: 'absolute', height: "100%", width: "100%" }}>
          <CusLoader />
        </View>
      }
    </View>
  )
}

export default WhishList

