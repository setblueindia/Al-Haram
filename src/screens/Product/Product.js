import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './product.style'
import CommanHeader from '../../components/ComanHeader'
import useProductHook from './product.hook'
import Ionicons from "react-native-vector-icons/Ionicons";
import Filter from "react-native-vector-icons/AntDesign";
import { ResponsiveSize } from '../../utils/utils'
import { ICON, NAVIGATION, NUMBER } from '../../constants/constants'
import { ALINE, COLOR } from '../../constants/style'
import SortFilter from '../../components/SortFilter'
import SizeFilter from '../../components/SizeFilter'


const Product = () => {
    const { data,
        navigation,
        setLike,
        like,
        lang,
        Str,
        sortFilter,
        setSortFilter,
        setSizeFilter,
        sizeFilter,
        pIndex,
        setIndex
    } = useProductHook()

    return (
        <View style={styles.mainView}>
            <View style={styles.headerView}>
                <CommanHeader lang={lang} navigation={navigation} />
                <View style={styles.ListVivew}>
                    <View style={styles.filterView}>
                        <View style={styles.filterContainer}>
                            <View style={[styles.firstView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                <TouchableOpacity
                                    onPress={() => { setSortFilter(true) }}
                                    style={styles.comonView}>
                                    <Ionicons name={"filter-circle"} size={ResponsiveSize(35)} style={styles.filterIcon} />
                                    <View style={styles.deviderInner} />
                                    <Text style={styles.filterText}>{Str?.Sort}</Text>
                                </TouchableOpacity>
                                <View style={styles.deviderFilter} />
                                <View style={styles.bar} />
                                <View style={styles.deviderFilter} />
                                <TouchableOpacity style={styles.comonView}
                                    onPress={() => { setSizeFilter(true) }}
                                >
                                    <Filter name={"filter"} size={ResponsiveSize(35)} style={styles.filterIcon} />
                                    <View style={styles.deviderInner} />
                                    <Text style={styles.filterText}>{Str?.Filter}</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>

                    <FlatList
                        data={data}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        bounces={true}
                        renderItem={({ items, index }) => {
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

                                        onPress={() => {
                                            setIndex(index),
                                           (like && index == pIndex) ? setLike(false) : setLike(true)
                                        }}
                                        style={styles.likeView}>
                                        <Filter name={(like && index == pIndex) ? ICON.heart : ICON.hearto} size={ResponsiveSize(25)} color={COLOR.primaray} />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            )
                        }}
                    />

                    <View style={styles.devider}></View>
                    <View style={{ flex: 1, height: "100%", width: "100%" }}>
                        <Modal animationType='slide' transparent={true} visible={sortFilter}>
                            <SortFilter setSortFilter={setSortFilter} lang={lang} />
                        </Modal>
                    </View>
                    <View style={{ flex: 1, height: "100%", width: "100%" }}>
                        <Modal animationType='slide' transparent={true} visible={sizeFilter}>
                            <SizeFilter setSizeFilter={setSizeFilter} lang={lang} />
                        </Modal>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Product

