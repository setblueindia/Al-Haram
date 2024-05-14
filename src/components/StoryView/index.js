import { FlatList, TouchableOpacity, View, Image, Text } from 'react-native'
import React from 'react'
import { styles } from './story.style'
import { NUMBER } from '../../constants/constants'
import { ALINE } from '../../constants/style'


const StoryView = ({ data , lang }) => {

    return (
        <View style={[styles.mainView , lang.data == NUMBER.num0 && {flexDirection:ALINE.rowreverse}]}>

            <FlatList
                data={data}
                inverted ={lang.data == NUMBER.num0 ?  true :false}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                styles={{}}
                keyboardDismissMode={(data , index)=> Math.random() * index}
                style={styles.FlatList}
                horizontal
                renderItem={({ item , index }) => {
                    return (
                        <View  key={Math.random() * index}  style={styles.listView}>
                            <TouchableOpacity style={styles.storyView}>
                                <Image style={styles.imge} source={item.img} />
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
