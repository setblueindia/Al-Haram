import { ActivityIndicator, FlatList, Modal, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
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
import CusLoader from '../../components/CustomLoader'
import DataIsNotFound from '../../components/DataNotFound2'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/dist/AntDesign';


const Product = (props) => {
    const { data,
        navigation,
        lang,
        Str,
        sortFilter,
        setSortFilter,
        setSizeFilter,
        setActions,
        setSortBy,
        sizeFilter,
        isLoadding,
        sortBy,
        lable,
        filterData,
        userData,
        price,
        size,
        showScrollToTop,
        flatListRef,
        color,
        likeDislike,
        likePress,
        setColor,
        setPrice,
        setSize,
        setProductData,
        handleScroll,
        scrollToTop,
        moreData

    } = useProductHook(props)
    const [imageLoader, setImageLoader] = useState(false)
    return (
        <>
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

                                    <TouchableOpacity
                                        style={styles.comonView}
                                        onPress={() => { setSizeFilter(true) }}
                                    >
                                        <Filter name={"filter"} size={ResponsiveSize(35)} style={styles.filterIcon} />
                                        <View style={styles.deviderInner} />
                                        <Text style={styles.filterText}>{Str?.Filter}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, height: "100%", width: "100%" }}>
                            {data?.length > 0 ?
                                <FlatList
                                    ref={flatListRef}
                                    data={data}
                                    showsVerticalScrollIndicator={false}
                                    onEndReached={() => { data?.length > 0 && setProductData() }}
                                    numColumns={2}
                                    bounces={true}
                                    onScroll={handleScroll}
                                    // scrollEventThrottle={16}
                                    ListFooterComponent={() => {
                                        return (
                                            <View style={{
                                                width: "100%",
                                                height: ResponsiveSize(100),
                                                justifyContent: ALINE.center,
                                                alignItems: ALINE.center
                                            }}>
                                                {
                                                    moreData &&
                                                    <ActivityIndicator
                                                        size={"large"}
                                                        color={COLOR.primaray}
                                                    />
                                                }
                                            </View>
                                        )
                                    }}
                                    renderItem={({ item, index }) => {
                                        const name = item?.name?.substring(0, 16)
                                        return (
                                            <TouchableOpacity
                                                onPress={() => {
                                                    navigation.navigate(NAVIGATION.ProducDetails, { SKU: item?.sku })
                                                }}
                                                style={[styles.conntainer, data?.length == 1 && { width: ResponsiveSize(300) }]}>
                                                <View style={styles.imageView}>
                                                    <FastImage
                                                        style={styles.image}
                                                        source={{ uri: item?.small_image?.url }}
                                                        onLoadStart={() => { setImageLoader(true) }}
                                                        onLoadEnd={() => { setImageLoader(false) }}
                                                    />
                                                    {(imageLoader && !item?.small_image?.url) &&
                                                        <View style={{
                                                            height: "100%",
                                                            width: "100%",
                                                            position: 'absolute',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            alignSelf: 'center'
                                                        }}>
                                                            <ActivityIndicator size='small' color={COLOR.primaray} />
                                                        </View>}
                                                </View>

                                                <View style={styles.textView}>
                                                    <Text style={[styles.productName, lang == NUMBER.num0 && { textAlign: 'right' }]}>{item?.name?.length > 16 ? name + "..." : item.name}</Text>
                                                    <Text style={[styles.priceText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lable?.SAR + " " + item?.price?.regularPrice?.amount?.value}</Text>
                                                </View>

                                                <TouchableOpacity
                                                    onPress={() => {
                                                        if (userData) {
                                                            likePress(item?.id)
                                                            likeDislike(item?.id, item?.wishlist)
                                                        } else {
                                                            navigation.navigate(NAVIGATION.Login)
                                                        }
                                                    }}
                                                    style={styles.likeView}>
                                                    <Filter name={item?.wishlist ? ICON.heart : ICON.hearto} size={ResponsiveSize(25)} color={COLOR.primaray} />
                                                </TouchableOpacity>
                                            </TouchableOpacity>
                                        )
                                    }}
                                />

                                : !isLoadding ? <DataIsNotFound navigation={navigation} /> : null}

                        </View>

                        <View style={styles.devider}></View>
                        <Modal animationType='slide' transparent={true} visible={sortFilter}>
                            <SortFilter
                                setActions={setActions}
                                setSortBy={setSortBy}
                                setSortFilter={setSortFilter}
                                lang={lang}
                                setProductData={setProductData}
                                sortBy={sortBy}
                            />
                        </Modal>
                        <Modal animationType='slide' transparent={true} visible={sizeFilter}>
                            <SizeFilter
                                filterData={filterData}
                                setSizeFilter={setSizeFilter}
                                lang={lang}
                                setColor={setColor}
                                setSize={setSize}
                                setPrice={setPrice}
                                setProductData={setProductData}
                                price={price}
                                size={size}
                                color={color}
                            />
                        </Modal>
                    </View>


                </View>

                {isLoadding &&
                    <View style={{ position: 'absolute', height: "100%", width: "100%" }}>
                        <CusLoader />
                    </View>
                }

                {showScrollToTop && (
                    <TouchableOpacity style={styles.scrollToTopButton} onPress={scrollToTop}>
                        {/* <Text style={styles.scrollToTopButtonText}>Go to Top</Text> */}
                        <Icon name="totop" size={ResponsiveSize(30)} color={COLOR.white} />
                    </TouchableOpacity>
                )}
            </View>
        </>

    )
}

export default Product

