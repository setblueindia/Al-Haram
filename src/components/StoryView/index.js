import { FlatList, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './story.style'
import { NAVIGATION, NUMBER } from '../../constants/constants'
import { ALINE, COLOR } from '../../constants/style'
import { BASE_URL } from '../../constants/axios.url'
import FastImage from 'react-native-fast-image'




const StoryView = ({ data, lang, CetegoriesData, navigation }) => {
    const [imageLoader, setImageLoader] = useState(false)
    return (

        <View style={[styles.mainView, lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>

            <FlatList
                data={CetegoriesData}
                inverted={lang.data == NUMBER.num0 ? true : false}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item, index }) => {
                    const temp = item?.children?.length <= 0 ? false : true

                    return (
                        <View style={{}}>

                            {item?.include_in_menu == 1 &&
                                <View key={index + 10} style={styles.listView}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (item?.display_mode == "PAGE") {
                                                temp && navigation.navigate(NAVIGATION.bannerScreen, { cetegouriesId: item?.id, titleName: item?.name })
                                            } else {
                                                navigation.navigate(NAVIGATION.ProductScreen, { cetegoriesId: item?.id })
                                            }
                                        }}
                                        style={styles.storyView}>
                                        <FastImage
                                            onLoadStart={() => { setImageLoader(true) }}
                                            onLoadEnd={() => { setImageLoader(false) }}
                                            style={styles.imge} source={{ uri: BASE_URL + item?.mobile_circle_thumbnail }} />
                                        {
                                            imageLoader &&
                                            <View style={styles.ImageLoadderView}>
                                                <ActivityIndicator size='small' color={COLOR.primaray} />
                                            </View>
                                        }
                                    </TouchableOpacity>

                                    <Text
                                        style={styles.text}
                                        numberOfLines={2}>
                                        {item.name}
                                    </Text>
                                </View>
                            }
                        </View>

                    )
                }}
            />

        </View>



    )
}

export default StoryView

















