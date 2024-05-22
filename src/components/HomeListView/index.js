import { FlatList, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './homeList.style'
import { ICON, NAVIGATION, NUMBER } from '../../constants/constants'
import { ALINE, COLOR } from '../../constants/style'
import { ResponsiveSize } from '../../utils/utils'
import { NewIcon } from '../../assests'
import HertIcon from 'react-native-vector-icons/dist/AntDesign'


const HomeListView = ({ data, sindex, lang, navigation }) => {

    const [like, setLike] = useState(false)
    const [product, setProducdName] = useState()
    const [pindex, setIndex] = useState()
    const [sdata, setData] = useState()

    const color = sindex % 2 == 0 ? true : false

    const likePress = (id) => {
        setData((prevData) =>
            prevData?.map(
                (productDetails) => productDetails?.id == id ?
                    { ...productDetails, like: !productDetails?.like } :
                    productDetails
            )
        )
    }
    const updateData = (id) => {
        const temp = data?.innerData?.map(v => { return { ...v, like: false } })
        setData(temp)
    }
    useEffect(() => {
        updateData()
    }, [])




    return (
        <View style={styles.mainView} key={sindex}>

            <View style={[styles.container, color ? { backgroundColor: "#00000010" } : {}]}>
                <View style={[styles.headerTextView, lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                    <Text style={styles.headerText}>{data?.name}</Text>
                    <TouchableOpacity 
                    onPress={()=>{navigation.navigate(NAVIGATION.ProductScreen)}}
                       >
                        <Text style={styles.viewText}>{lang.data == NUMBER.num1 ? "View All" : "عرض الكل"}</Text>
                    </TouchableOpacity>


                </View>
                {
                    <FlatList
                        inverted={lang.data == NUMBER.num0 ? true : false}
                        showsHorizontalScrollIndicator={false}
                        data={sdata}
                        horizontal
                        renderItem={({ item, index }) => {

                            const name = item?.name
                            const final = name?.length > 10 ? name.substr(0, 10) : name
                            
                            console.log("Name ===> ", name)
                            // console.log("Items ==== > ", item)
                            return (
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate(NAVIGATION?.ProducDetails) }}
                                    activeOpacity={0.5}
                                    style={styles.listView}>
                                    <View style={styles.productView}>
                                        <View style={styles.imgView}>
                                            <Image style={styles.image} source={item.imge} />
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                likePress(item?.id)
                                            }}
                                            style={styles.likeView}>
                                            <HertIcon name={!item?.like ? ICON.hearto : ICON.heart} size={ResponsiveSize(20)} style={styles.like} />
                                        </TouchableOpacity>

                                        {/* <View style={styles.newIncoView}>
                                            <Image style={styles.newInco} source={NewIcon}/>
                                        </View> */}

                                    </View>

                                    <View style={[styles.textView]}>

                                        <Text style={[styles.ProductName, lang.data == NUMBER.num0 && { textAlign: 'right', marginRight: ResponsiveSize(15) }]}>
                                            { name.length > 10 ? final + "..."  : final}
                                        </Text>
                                        <Text style={[styles.Price, lang.data == NUMBER.num0 && { textAlign: 'right', marginRight: ResponsiveSize(15) }]}>
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
