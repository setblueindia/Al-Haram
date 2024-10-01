import { Modal, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import { styles } from './ProductDetails.style'
import Slider from '../../components/Slider'
import useProductDetails from './ProductDetails.hook'
import { ResponsiveSize } from '../../utils/utils'
import Counter from '../../components/Counter'
import Icon from 'react-native-vector-icons/AntDesign';
import Block from 'react-native-vector-icons/FontAwesome6';
import { EXTRASTR, ICON, NAVIGATION, NUMBER } from '../../constants/constants'
import { ALINE, COLOR } from '../../constants/style'
import LottieView from 'lottie-react-native'
import ReviewSlider from '../../components/ReviewSlider'
import CusLoader from '../../components/CustomLoader'
import FastImage from 'react-native-fast-image'
import RenderHTML from 'react-native-render-html';
import ProductBox from '../../components/ProductBox'

const ProductDetails = (props) => {
    const {
        lang,
        navigation,
        sliderData,
        showAnimation,
        Str,
        details,
        defaultColor,
        defaultSize,
        avalabeSize,
        avalabeColor,
        shoeColor,
        imageObject,
        setIndex,
        sindex,
        like,
        setLike,
        onShare,
        AddTocart,
        showModal,
        isLoading,
        sizeShow,
        setShowModal,
        setSizeShow,
        colorOnPress,
        sizeOnPress,
        setImageArry,
        setSizeIndex,
        likeDislike,
        getData,
        sizeIndex,
        qnt,
        label,
        userData,
        setQnts
    } = useProductDetails({ props })

    const { width } = useWindowDimensions();

    return (
        <View style={styles.mainVIew}>
            <CommanHeader navigation={navigation} lang={lang?.data} />
            <ScrollView style={{ flex: 1 }} >
                <View style={styles.silderBox}>
                    <Slider data={sliderData} height={ResponsiveSize(450)} lang={lang} />
                </View>

                <View style={[styles.productCodeView]}>
                    <Text style={[styles.codeText, lang.data == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>
                        {details?.sku ? Str.ProductCode + details?.sku : " "}
                    </Text>
                </View>

                <View style={styles.profuctName}>
                    <Text style={[styles.profuctNameText, lang.data == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{details?.name ? details?.name : '   '}</Text>
                </View>

                <View style={styles.PriveView}>
                    <Text style={[styles.PrizeText, lang.data == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(10) }]}>{details?.price_range?.minimum_price?.regular_price?.value ? label?.SAR + " " + details?.price_range?.minimum_price?.regular_price?.value : " "}</Text>
                </View>

                <View style={styles.deviderView}>
                    <View style={styles.devider} />
                </View>


                {details?.short_description?.html && <Text
                    style={[{
                        color: COLOR.black,
                        marginLeft: ResponsiveSize(30),
                        fontWeight: '600',
                        marginTop: ResponsiveSize(20)
                    },
                    lang.data == NUMBER.num0 && {
                        textAlign: 'right',
                        marginRight: ResponsiveSize(30)
                    }
                    ]}

                >{lang.data == NUMBER.num1 ? "Description" : "الوصف"}</Text>}


                {details?.short_description?.html &&
                    <RenderHTML
                        contentWidth={"100%"}
                        source={{ html: details?.short_description?.html }}
                        // source={htmlSource}
                        tagsStyles={{
                            p: { color: COLOR.black, fontSize: ResponsiveSize(18), fontWeight: '400', width: "90%", alignSelf: 'center' },

                        }}
                    />
                }

                {details?.short_description?.html && <View style={styles.deviderView}>
                    <View style={styles.devider} />
                </View>}

                {defaultColor &&
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[{ height: ResponsiveSize(100), }, lang?.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>

                        <View style={[styles.colorView, lang?.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                            <Text style={[styles.text, lang?.data == NUMBER.num0 && { marginLeft: ResponsiveSize(30) }]}>{Str.color}</Text>
                            {defaultColor?.values?.map((items, index) => {
                                const block = avalabeColor ? avalabeColor?.includes(items?.value_index) : true
                                var fileImage = ''
                                return (
                                    <View style={{ justifyContent: ALINE.center }}>
                                        <TouchableOpacity
                                            onPress={(() => { setIndex(index), colorOnPress(items?.value_index) })}
                                            key={index}
                                            style={[styles.colorConatiner,
                                            index == sindex && { borderColor: COLOR.primaray, borderWidth: ResponsiveSize(2) }]}>

                                            {imageObject?.map((item) => {
                                                if (item?.colorIndex == items?.value_index) {
                                                    fileImage = item?.imgURL
                                                }
                                            })}

                                            {fileImage ?
                                                <FastImage source={{ uri: fileImage }} style={{ height: "100%", width: "100%", resizeMode: 'contain', borderRadius: ResponsiveSize(10) }} /> :
                                                <View style={[styles.innerColorView, { backgroundColor: items?.swatch_data?.value }]} />}


                                            {(!block && !shoeColor) &&
                                                <View style={{
                                                    alignSelf: ALINE.center,
                                                    position: 'absolute',
                                                    height: ResponsiveSize(70),
                                                    width: ResponsiveSize(70),
                                                    backgroundColor: "#00000050",
                                                    borderRadius: ResponsiveSize(20)
                                                }}>
                                                    <Block style={{ alignSelf: 'center', top: ResponsiveSize(5) }} color={COLOR.primaray} name={"slash"} size={ResponsiveSize(70)} />
                                                </View>
                                            }
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                }

                {defaultSize &&
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={lang?.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }}>
                        <View style={[styles.sizeView, lang?.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                            <Text style={[styles.text, lang?.data == NUMBER.num0 && { marginLeft: ResponsiveSize(10) }]}>{Str?.Size}</Text>
                            {defaultSize?.values?.map((items, index) => {
                                var blcok = avalabeSize ? avalabeSize?.includes(items?.swatch_data?.value) : true
                                return (
                                    <View>
                                        <TouchableOpacity
                                            onPress={() => { sizeOnPress(items?.value_index), setSizeIndex(index) }}
                                            key={index}
                                            style={[styles.sizeContainer,
                                            index == sizeIndex && sizeShow && { backgroundColor: COLOR.primaray },
                                            !blcok || !sizeShow && { backgroundColor: COLOR.white }
                                            ]}
                                        >
                                            <Text style={[styles.sizeText, (index == sizeIndex && sizeShow) && { color: COLOR.white }]} >{items?.swatch_data?.value}</Text>
                                        </TouchableOpacity>

                                        {(!blcok && !sizeShow) &&
                                            <TouchableOpacity
                                                onPress={() => { sizeOnPress(items?.value_index), setSizeIndex(index), setSizeShow(true), blcok = true }}
                                                style={{
                                                    position: 'absolute',
                                                    flex: 1,
                                                    height: "100%",
                                                    width: "100%",
                                                    left: ResponsiveSize(10)
                                                }}>

                                                <Block style={{ alignSelf: 'center' }} color={COLOR.primaray} name={"slash"} size={ResponsiveSize(70)} />
                                            </TouchableOpacity>
                                        }
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                }
                {(defaultColor || defaultSize) &&
                    <View style={styles.deviderView}>
                        <View style={styles.devider} />
                    </View>
                }
                <View style={[styles.counteView, lang?.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                    <Text style={styles.text}>{Str.QNT}</Text>
                    <View style={[styles.counter, lang?.data == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>
                        <Counter qty={qnt} setQnt={setQnts} />
                    </View>
                </View>

                {details?.description?.html && <View style={styles.deviderView}>
                    <View style={styles.devider} />
                </View>}

                {details?.description?.html && <Text
                    style={[{
                        color: COLOR.black,
                        marginLeft: ResponsiveSize(30),
                        fontWeight: '600',
                        marginTop: ResponsiveSize(20)
                    },
                    lang.data == NUMBER.num0 && {
                        textAlign: 'right',
                        marginRight: ResponsiveSize(30)
                    }
                    ]}

                >
                    {lang.data == NUMBER.num1 ? "Description" : "الوصف"}</Text>}

                {details?.description?.html && <RenderHTML
                    contentWidth={width}
                    tagsStyles={{
                        p: {
                            color: 'black',  // Applying black color to paragraph text
                        },
                    }}
                    source={{ html: details?.description?.html }}
                />}




                {details?.related_products.length > 0 &&
                    <Text style={[{
                        padding: ResponsiveSize(20),
                        fontSize: ResponsiveSize(25),
                        color: COLOR.primaray,
                        fontWeight: "500"
                    }, lang?.data == NUMBER.num0 && { textAlign: 'right' }]}>{lang?.data == NUMBER.num0 ? "منتجات ذات صله" : "Related Product"}</Text>}

                {details?.related_products.length > 0 && <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                    style={[styles.subCategories,
                    lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}
                >
                    {

                        details?.related_products?.map((items, index) => {
                            const name = items?.name
                            const finalName = name.substring(0, 15);
                            const productImage = items?.image?.url

                            // console.log(items?.sku)


                            return (
                                <View key={index} style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => { setImageArry(true), navigation.navigate(NAVIGATION.ProducDetails, { SKU: items?.sku }) }}>
                                        <View style={styles.innerCategoriesView}>
                                            <FastImage style={styles.storyView} source={{ uri: productImage }} />
                                        </View>
                                        {(items?.special_offer || items?.is_new_badge) && <View style={[styles.textImgView, items?.special_offer ? { right: ResponsiveSize(0) } : { left: ResponsiveSize(0) }]}>
                                            <FastImage style={{ height: "100%", width: "100%" }} source={{ uri: items?.special_offer ? items?.special_offer : items?.is_new_badge }} />
                                        </View>}
                                        <Text style={[styles.cetegoriesText, lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}>{items?.name?.length > 10 ? finalName + "..." : items?.name}</Text>
                                        <Text style={[styles.priceText, lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}>{label.SAR + " " + items?.price_range?.minimum_price?.regular_price?.value}</Text>
                                    </TouchableOpacity>
                                    <View style={{ width: ResponsiveSize(30) }} />
                                </View>
                            )
                        })
                    }
                </ScrollView>
                }




                <View style={{ height: ResponsiveSize(200) }} />


            </ScrollView>

            {showAnimation &&
                <View style={{ height: ResponsiveSize(40), width: ResponsiveSize(40), position: 'absolute', bottom: ResponsiveSize(150), right: ResponsiveSize(20) }}>
                    <LottieView
                        source={require('../../assests/Lottianimation/AddToCart.json')}
                        autoPlay loop
                        resizeMode='cover'
                        style={{ height: "100%", width: "100%" }}
                    />
                </View>}
            <View style={[styles.btnConatainer, lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <TouchableOpacity
                    onPress={() => {
                        if (userData) {
                            like ? setLike(false) : setLike(true)
                            likeDislike(details?.id)
                        } else {
                            navigation.navigate(NAVIGATION.Login)
                        }
                    }}
                    style={styles.likeBtn}>
                    <Icon name={like ? ICON.heart : ICON.hearto} size={ResponsiveSize(40)} color={COLOR.primaray} />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { onShare() }}
                    style={styles.shareBtn}>
                    <Icon name={"sharealt"} size={ResponsiveSize(40)} color={COLOR.primaray} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { userData ? AddTocart() : navigation.navigate(NAVIGATION.Login) }}
                    style={styles.AddToCartBtn}>
                    <Text style={styles.AddTocardText}>{Str?.Addtocard}</Text>
                </TouchableOpacity>


                <Modal
                    transparent={true}
                    visible={showModal}
                    animationType='slide'
                >
                    <ReviewSlider lang={lang} setShowModal={setShowModal} />
                </Modal>

            </View>

            {
                isLoading &&
                <View style={{ position: 'absolute', height: "100%", width: "100%" }}>
                    <CusLoader />
                </View>
            }
        </View>
    )
}

export default ProductDetails
