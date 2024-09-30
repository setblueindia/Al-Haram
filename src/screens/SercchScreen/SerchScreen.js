import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React from 'react'
import { styles } from './serch.style'
import CommanHeader from '../../components/ComanHeader'
import useSerchHook from './serch.hook'
import Filter from "react-native-vector-icons/AntDesign";
import { EXTRASTR, ICON, NAVIGATION, NUMBER } from '../../constants/constants'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR } from '../../constants/style'
import CusLoader from '../../components/CustomLoader'
import FastImage from 'react-native-fast-image'
import { BASE_URL, imageURL } from '../../constants/axios.url'
import DataIsNotFound from '../../components/DataNotFound2'

const SerchScreen = () => {
  const {
    navigation,
    lang,
    moreData,
    data,
    isLoadding,
    serchText,
    likeDislike,
    SerchPress,
    getData,
    setSerchTex,
    likePress,
  } = useSerchHook()

  return (
    <View style={styles.mainView}>
      <CommanHeader navigation={navigation} lang={lang} />
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLOR.darkGray}
          placeholder={lang == NUMBER.num1 ? 'Search......' : "بحث"}
          onChangeText={(text) => { SerchPress(text), setSerchTex(text) }}
        />
      </View>
      <View style={{ marginTop: ResponsiveSize(10), flex: 1 }}>

        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          bounces={true}
          style={{ marginBottom: ResponsiveSize(30) }}
          onEndReached={() => {
            data?.length > 0 && getData()
          }}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => {
            return (
              <View style={{
                width: "100%",
                height: ResponsiveSize(100),
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {
                  moreData &&
                  <ActivityIndicator
                    size={"large"}
                    color={COLOR.primaray}

                  />}

              </View>
            )
          }}
          renderItem={({ item, index }) => {

            const Name = item?.name.substr(0, 15)
            const price = item?.price?.regularPrice?.amount?.value
            const image = imageURL + "/pub/media/catalog/product/" + item?.media_gallery_entries[0]?.file
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(NAVIGATION.ProducDetails, { SKU: item?.sku })
                }}
                style={styles.conntainer}>
                <View style={styles.imageView}>
                  <FastImage style={styles.image} source={{ uri: image }} />
                </View>
                <View style={styles.textView}>
                  <Text style={[styles.productName, lang == NUMBER.num0 && { textAlign: 'right' }]}>{item?.name?.length > 10 ? Name + "..." : Name}</Text>

                  <View style={[styles.priveView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                    <Text style={[styles.priceText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right, }]}>{lang == NUMBER.num1 ? "SAR  " : "سار:"}</Text>
                    <Text style={[styles.priceText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(10) }]}>{price}</Text>
                  </View>

                </View>

                <TouchableOpacity
                  onPress={() => { likePress(item?.id), likeDislike(item?.id) }}
                  style={styles.likeView}>
                  <Filter name={item?.like ? ICON.heart : ICON.hearto} size={ResponsiveSize(25)} color={COLOR.primaray} />
                </TouchableOpacity>
              </TouchableOpacity>
            )
          }}
        />
      </View>

      {isLoadding &&
        <View style={{ position: 'absolute', height: "100%", width: "100%" }}>
          <CusLoader />
        </View>
      }


      {/* {
      (serchText?.length > 0 && data.length <= 0 && !isLoadding) &&
      <DataIsNotFound/>
      } */}


    </View>
  )
}

export default SerchScreen

