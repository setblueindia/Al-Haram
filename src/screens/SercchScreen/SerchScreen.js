import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { styles } from './serch.style'
import CommanHeader from '../../components/ComanHeader'
import useSerchHook from './serch.hook'

const SerchScreen = () => {
  const { navigation } = useSerchHook()
  return (
    <View style={styles.mainView}>
      <CommanHeader navigation={navigation} />
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          placeholder='Search......'
        />
      </View>
      <View style={{}}>
{/* 
      <FlatList
                        data={data}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        bounces={true}
                        renderItem={() => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate(NAVIGATION.ProducDetails)
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
                    /> */}
      </View>


    </View>
  )
}

export default SerchScreen

