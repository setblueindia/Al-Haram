import { ActivityIndicator, FlatList, Modal, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './product.style'
import CommanHeader from '../../components/ComanHeader'
import useProductHook from './product.hook'
import Ionicons from "react-native-vector-icons/Ionicons";
import Filter from "react-native-vector-icons/AntDesign";
import { ResponsiveSize } from '../../utils/utils'
import { EXTRASTR, ICON, NAVIGATION, NUMBER } from '../../constants/constants'
import { ALINE, COLOR } from '../../constants/style'
import SortFilter from '../../components/SortFilter'
import SizeFilter from '../../components/SizeFilter'
import CusLoader from '../../components/CustomLoader'
import DataIsNotFound from '../../components/DataNotFound2'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import SAR from '../../components/SAR/Index'
import ProductImage from '../../components/ProductImage'


const Product = (props) => {
    const { data,
        navigation,
        lang,
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
        totalpage,
        currePage,
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

                    <CommanHeader
                        lang={lang}
                        navigation={navigation}
                    />

                    <View style={styles.ListVivew}>

                        {/* Filtter View */}
                        <View style={styles.filterView}>
                            <View style={styles.filterContainer}>

                                <View style={[
                                    styles.firstView,
                                    lang == NUMBER.num0 && {
                                        flexDirection: ALINE.rowreverse
                                    }]}>

                                    <TouchableOpacity
                                        onPress={() => { setSortFilter(true) }}
                                        style={styles.comonView}
                                    >

                                        <Ionicons
                                            name={ICON.filtercircle}
                                            size={ResponsiveSize(30)}
                                            style={styles.filterIcon}
                                        />
                                        <View style={styles.deviderInner} />

                                        <Text
                                            style={styles.filterText}>
                                            {lable?.Sort}
                                        </Text>
                                    </TouchableOpacity>

                                    <View style={styles.deviderFilter} />
                                    <View style={styles.bar} />

                                    <View style={styles.deviderFilter} />

                                    <TouchableOpacity
                                        style={styles.comonView}
                                        onPress={() => { setSizeFilter(true) }}
                                    >
                                        <Filter
                                            name={ICON.filter}
                                            size={ResponsiveSize(30)}
                                            style={styles.filterIcon} />

                                        <View style={styles.deviderInner} />
                                        <Text
                                            style={styles.filterText}>
                                            {lable?.Filter}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                        <View style={styles.ProductListView}>

                            {data?.length > 0 ?
                                <FlatList
                                    ref={flatListRef}
                                    data={data}
                                    showsVerticalScrollIndicator={false}
                                    onEndReached={() => { totalpage > currePage && setProductData() }}
                                    numColumns={2}
                                    bounces={true}
                                    onScroll={handleScroll}
                                    ListFooterComponent={() => {
                                        return (
                                            <View style={styles.BottomLoader}>
                                                {
                                                    moreData &&
                                                    <ActivityIndicator
                                                        size={"small"}
                                                        color={COLOR.primaray}
                                                    />
                                                }
                                            </View>
                                        )
                                    }}
                                    renderItem={({ item, index }) => {
                                        const name = item?.name?.substring(0, 16)
                                        const tempURL = item?.small_image?.url
                                        const cleanedUrl = tempURL.replace(/\/cache\/[^\/]+\//, '/');

                                        return (
                                            <TouchableOpacity
                                                key={index}
                                                onPress={() => {
                                                    navigation.navigate(NAVIGATION.ProducDetails, { SKU: item?.sku })
                                                }}
                                                style={[
                                                    styles.conntainer,
                                                    data?.length == 1 && {
                                                        width: ResponsiveSize(300)
                                                    }]}>

                                                <View style={styles.imageView}>

                                                    <ProductImage
                                                        style={styles.image}
                                                        url={cleanedUrl}
                                                        onLoad={setImageLoader}
                                                    />

                                                    {(imageLoader && !item?.small_image?.url) &&
                                                        <View style={styles.ImageLoadder}>
                                                            <ActivityIndicator
                                                                size='small'
                                                                color={COLOR.primaray} />
                                                        </View>
                                                    }

                                                    {(item?.display_sale_label == 1 || item?.display_new_label == 1) &&
                                                        <View style={[styles.textImgView,
                                                        { position: 'absolute' },
                                                        item?.display_sale_label == 1 ? { right: ResponsiveSize(0) } : { left: ResponsiveSize(0) }]}>
                                                            <FastImage style={{ height: "100%", width: "100%" }}
                                                                source={lang == NUMBER.num1 ? {
                                                                    uri: item?.display_sale_label == 1 ?
                                                                        "https://alharamstores.com/media/magiccart/lookbook/s/p/special_offer_2.png" :
                                                                        "https://alharamstores.com/media/magiccart/lookbook/n/e/new_en_offer.png"
                                                                }
                                                                    :
                                                                    {
                                                                        uri: item?.display_sale_label == 1 ?
                                                                            "https://alharamstores.com/media/magiccart/lookbook/s/p/special_offer01.png" :
                                                                            "https://alharamstores.com/media/magiccart/lookbook/n/e/new_ar_offer.png"
                                                                    }
                                                                } />
                                                        </View>}

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

                                                        <Filter
                                                            name={item?.wishlist ? ICON.heart : ICON.hearto} s
                                                            size={ResponsiveSize(20)}
                                                            color={COLOR.primaray}
                                                        />
                                                    </TouchableOpacity>
                                                </View>


                                                <View style={styles.textView}>
                                                    <Text
                                                        numberOfLines={1}
                                                        style={[
                                                            styles.productName,
                                                            lang == NUMBER.num0 && {
                                                                textAlign: EXTRASTR.right
                                                            }]}>
                                                        {item.name}
                                                    </Text>
                                                    {/* ADD IMG */}
                                                    <SAR
                                                        price={item?.price?.regularPrice?.amount?.value}
                                                        normal={true}
                                                        textAlign={{ justifyContent: lang == NUMBER.num1 ? 'flex-start' : 'flex-end' }}
                                                    />



                                                </View>



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
                                lable={lable}
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
                    <View style={{
                        position: 'absolute',
                        height: "100%",
                        width: "100%"
                    }}>
                        <CusLoader />
                    </View>
                }

                {showScrollToTop && (
                    <TouchableOpacity style={styles.scrollToTopButton} onPress={scrollToTop}>
                        <Icon
                            name="totop"
                            size={ResponsiveSize(30)}
                            color={COLOR.white}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </>

    )
}

export default Product

