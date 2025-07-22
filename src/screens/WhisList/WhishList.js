import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './whishList.style'
import CommanHeader from '../../components/ComanHeader'
import useWhishListHook from './whishList.hook'
import Filter from "react-native-vector-icons/AntDesign";
import { EXTRASTR, ICON, NAVIGATION, NUMBER } from '../../constants/constants'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR } from '../../constants/style'
import CusLoader from '../../components/CustomLoader'
import FastImage from 'react-native-fast-image'
import DataIsNotFound from '../../components/DataNotFound2'
import SAR from '../../components/SAR/Index'

const WhishList = () => {
  const {
    navigation,
    data,
    lang,
    likePress,
    isLoading,
    dislikePress,
  } = useWhishListHook()

  return (
    <View style={styles.mainView}>

      <CommanHeader
        navigation={navigation}
        lang={lang}
      />

      {data.length > 0 ?
        <FlatList
          data={data}
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(NAVIGATION.ProducDetails, { SKU: item?.sku })
                  }}
                  style={styles.imageView}>
                  {item?.image ?
                    <FastImage
                      style={styles.image}
                      source={{ uri: item?.image }}
                    /> :
                    <View
                      style={[styles.imageView,
                      { backgroundColor: COLOR.black }]}
                    />
                  }
                </TouchableOpacity>

                <View style={styles.textView}>
                  <Text
                    numberOfLines={1}
                    style={
                      [styles.productName,
                      lang == NUMBER.num0 && {
                        textAlign: EXTRASTR.right
                      }]}>
                    {item?.name}

                  </Text>
                  <SAR
                    price={item?.price}
                    normal={true}
                    textAlign={{
                      justifyContent: lang == NUMBER.num0 ? ALINE.flexend : 'flex-start'
                    }} />


                </View>

                <TouchableOpacity
                  onPress={() => {
                    likePress(item?.id)
                    dislikePress(item?.id)
                  }}
                  style={styles.likeView}>
                  <Filter
                    name={item?.like ? ICON.heart : ICON.hearto} size={ResponsiveSize(25)}
                    color={COLOR.primaray}
                  />
                </TouchableOpacity>
              </View>
            )
          }}
        /> : !isLoading ?
          <View style={{
            flex: 1, alignItems: ALINE.center,
            justifyContent: ALINE.center
          }}>
            <DataIsNotFound />
          </View>

          : null}

      {isLoading
        &&
        <View style={{
          position: 'absolute',
          height: "100%",
          width: "100%"
        }}>
          <CusLoader />
        </View>
      }
    </View>
  )
}

export default WhishList

