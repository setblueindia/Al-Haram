import { FlatList, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './homeList.style'
import { ICON, NUMBER } from '../../constants/constants'
import { ALINE, COLOR } from '../../constants/style'
import { ResponsiveSize } from '../../utils/utils'
import { NewIcon } from '../../assests'
import HertIcon from 'react-native-vector-icons/dist/AntDesign'


const HomeListView = ({ data, sindex, lang }) => {

    const [like, setLike] = useState(false)
    const [product, setProducdName] = useState(false)
    const [pindex, setIndex] = useState()

    const color = sindex % 2 == 0 ? true : false

    onPresLike = (index) => {
        console.log(index)

        console.log("Second ==> ", pindex)
        setIndex(index),
            (like && index == pindex) ? setLike(false) : setLike(true)
    }


    return (
        <View style={styles.mainView} key={sindex}>

            <View style={[styles.container, color ? { backgroundColor: "#00000010" } : {}]}>
                <View style={[styles.headerTextView, lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                    <Text style={styles.headerText}>{data?.name}</Text>
                    <Text style={styles.viewText}>{lang.data == NUMBER.num1 ? "View All" : "عرض الكل"}</Text>

                </View>
                {
                    <FlatList
                        inverted={lang.data == NUMBER.num0 ? true : false}
                        showsHorizontalScrollIndicator={false}
                        data={data?.innerData}
                        horizontal
                        renderItem={({ item, index }) => {
                            // console.log("Items ==== > " , item)
                            return (
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={styles.listView}>
                                    <View style={styles.productView}>
                                        <View style={styles.imgView}>
                                            <Image style={styles.image} source={item.imge} />
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                onPresLike(index)
                                            }}
                                            style={styles.likeView}>
                                            <HertIcon name={(like && index == pindex) ? ICON.hearto : ICON.heart} size={ResponsiveSize(20)} style={styles.like} />
                                        </TouchableOpacity>

                                        {/* <View style={styles.newIncoView}>
                                            <Image style={styles.newInco} source={NewIcon}/>
                                        </View> */}

                                    </View>

                                    <View style={[styles.textView]}>
                                        <Text style={[styles.ProductName, lang.data == NUMBER.num0 && { textAlign: 'right', marginRight: ResponsiveSize(15) }]}>
                                            {item?.name}
                                        </Text>
                                        <Text style={[styles.Price, , lang.data == NUMBER.num0 && { textAlign: 'right', marginRight: ResponsiveSize(15) }]}>
                                            {item?.price}
                                        </Text>
                                    </View>

                                </TouchableOpacity>
                            )
                        }}
                    />
                }
            </View>
            <View style={{ height: 20 }} />
        </View>
    )
}

export default HomeListView
