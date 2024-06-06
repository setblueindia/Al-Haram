import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './serch.style'
import CommanHeader from '../../components/ComanHeader'
import useSerchHook from './serch.hook'
import Filter from "react-native-vector-icons/AntDesign";
import { ICON, NUMBER } from '../../constants/constants'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR } from '../../constants/style'
import CusLoader from '../../components/CustomLoader'

const SerchScreen = () => {
  const {
    navigation,
    lang,
    moreData,
    setLike,
    like,
    data,
    isLoadding,
    likePress,
    SerchPress,
    getData,
    setSerchTex
  } = useSerchHook()

  return (
    <View style={styles.mainView}>
      <CommanHeader navigation={navigation} lang={lang} />
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          placeholder='Search......'
          onChangeText={(text)=>{SerchPress(text) , setSerchTex(text)}}
        />
      </View>
      <View style={{ marginTop: ResponsiveSize(10), flex: 1 }}>

        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          bounces={true}
          style={{ marginBottom: ResponsiveSize(30) }}
          onEndReached={()=>{
            data?.length > 0 ? getData() : console.log("Finish.....")
          }}
          onEndReachedThreshold={0.1}
          // keyExtractor={(index) => { Math.random() * index }}
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
            // console.log("items ==> ", item?.thumbnail?.url)
            const Name = item?.name.substr(0, 15)
            const price = item?.price?.regularPrice?.amount?.value
            const image = item?.thumbnail?.url
            return (
              <TouchableOpacity
                onPress={() => {
                  // navigation.navigate(NAVIGATION.ProducDetails)
                }}
                style={styles.conntainer}>
                <View style={styles.imageView}>
                  <Image style={styles.image} source={{ uri: image }} />
                </View>
                <View style={styles.textView}>
                  <Text style={[styles.productName, lang == NUMBER.num0 && { textAlign: 'right' }]}>{item?.name?.length > 10 ? Name + "..." : Name}</Text>

                  <View style={[styles.priveView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                    <Text style={[styles.priceText, lang == NUMBER.num0 && { textAlign: 'right', }]}>{lang == NUMBER.num1 ? "SAR :" : "سار:"}</Text>
                    <Text style={[styles.priceText, lang == NUMBER.num0 && { textAlign: 'right', marginRight: ResponsiveSize(10) }]}>{price}</Text>
                  </View>

                </View>

                <TouchableOpacity
                  onPress={() => { likePress(index) }}
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


    </View>
  )
}

export default SerchScreen

