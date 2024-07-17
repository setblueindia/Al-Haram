import { FlatList, TouchableOpacity, View, Image, Text } from 'react-native'
import React from 'react'
import { styles } from './story.style'
import { NAVIGATION, NUMBER } from '../../constants/constants'
import { ALINE } from '../../constants/style'
import { BASE_URL } from '../../constants/axios.url'


const StoryView = ({ data , lang , CetegoriesData , navigation }) => {


    return (
        <View style={[styles.mainView , lang.data == NUMBER.num0 && {flexDirection:ALINE.rowreverse}]}>

            <FlatList
                data={CetegoriesData}
                inverted ={lang.data == NUMBER.num0 ?  true :false}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                styles={{}}
                // keyboardDismissMode={(data , index)=> Math.random() * index}
                style={styles.FlatList}
                horizontal
                renderItem={({ item , index }) => {
                    return (
                        <View  key={index + 10}  style={styles.listView}>
                            <TouchableOpacity 
                            onPress={()=>{navigation.navigate(NAVIGATION.bannerScreen , {cetegouriesId : item?.id})}}
                            style={styles.storyView}>
                                <Image style={styles.imge} source={{uri : BASE_URL+ item?.mobile_thumbnail}} />
                            </TouchableOpacity>
                            <Text style={styles.text} numberOfLines={2}>{item.name}</Text>
                        </View>
                    )
                }}
            />

        </View>
    )
}

export default StoryView
