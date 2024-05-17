import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './serch.style'
import CommanHeader from '../../components/ComanHeader'
import useSerchHook from './serch.hook'
import Filter from "react-native-vector-icons/AntDesign";
import { ICON, NUMBER } from '../../constants/constants'
import { ResponsiveSize } from '../../utils/utils'
import { COLOR } from '../../constants/style'

const SerchScreen = () => {
  const { navigation, lang, setLike, like } = useSerchHook()
  const data = [1, 2, 3, 4, 5]
  return (
    <View style={styles.mainView}>
      <CommanHeader navigation={navigation} lang={lang} />
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          placeholder='Search......'
        />
      </View>
      <View style={{ marginTop: ResponsiveSize(10) }}>

        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          bounces={true}
          renderItem={() => {
            return (
              <TouchableOpacity
                onPress={() => {
                  // navigation.navigate(NAVIGATION.ProducDetails)
                }}
                style={styles.conntainer}>
                <View style={styles.imageView}>
                  <Image style={styles.image} source={{ uri: "https://beta.alharamstores.com/media/women-E-02.jpg" }} />
                </View>
                <View style={styles.textView}>
                  <Text style={[styles.productName, lang == NUMBER.num0 && { textAlign: 'right' }]}>Top</Text>
                  <Text style={[styles.priceText, lang == NUMBER.num0 && { textAlign: 'right' }]}>SAR : {"250"}</Text>
                </View>

                <TouchableOpacity
                  onPress={() => { like ? setLike(false) : setLike(true) }}
                  style={styles.likeView}>
                  <Filter name={like ? ICON.heart : ICON.hearto} size={ResponsiveSize(25)} color={COLOR.primaray} />
                </TouchableOpacity>
              </TouchableOpacity>
            )
          }}
        />
      </View>


    </View>
  )
}

export default SerchScreen

