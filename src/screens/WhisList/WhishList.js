import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './whishList.style'
import CommanHeader from '../../components/ComanHeader'
import useWhishListHook from './whishList.hook'
import Filter from "react-native-vector-icons/AntDesign";
import { ICON, NAVIGATION, NUMBER } from '../../constants/constants'
import { ResponsiveSize } from '../../utils/utils'
import { COLOR } from '../../constants/style'

const WhishList = () => {
  const { navigation, data, like, lang, setLike ,likePress } = useWhishListHook()
  return (
    <View style={styles.mainView}>
      <CommanHeader navigation={navigation} lang={lang} />
      <FlatList
        data={data}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <TouchableOpacity
                style={styles.imageView}>
                <Image style={styles.image} source={{ uri: "https://beta.alharamstores.com/media/women-E-02.jpg" }} />
              </TouchableOpacity>

              <View style={styles.textView}>
                <Text style={[styles.productName, lang == NUMBER.num0 && { textAlign: 'right' }]}>Top</Text>
                <Text style={[styles.priceText, lang == NUMBER.num0 && { textAlign: 'right' }]}>RS : {"250"}</Text>
              </View>

              <TouchableOpacity
                onPress={() => { 
                  likePress(index)
               }}
                style={styles.likeView}>
                <Filter name={item?.like ? ICON.heart : ICON.hearto} size={ResponsiveSize(25)} color={COLOR.primaray} />
              </TouchableOpacity>

            </View>

          )
        }}
      />
    </View>
  )
}

export default WhishList

