import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
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
import ReviewSlider from '../../components/ReviewSlider'
import CusLoader from '../../components/CustomLoader'
import FastImage from 'react-native-fast-image'
import RenderHTML from 'react-native-render-html';
import WebView from 'react-native-webview'
import SAR from '../../components/SAR/Index'
import { FONTS } from '../../constants/fonts'
import ProductImage from '../../components/ProductImage'


const ProductDetails = (props) => {
    const {
        lang,
        navigation,
        sliderData,
        Str,
        details,
        defaultColor,
        defaultSize,
        avalabeSize,
        avalabeColor,
        shoeColor,
        imageObject,
        setColorTex,
        setIndex,
        sindex,
        like,
        setLike,
        onShare,
        AddTocart,
        showModal,
        isLoading,
        sizeShow,
        colorLable,
        sizeLable,
        setShowModal,
        setSizeShow,
        colorOnPress,
        sizeOnPress,
        setImageArry,
        setSizeIndex,
        likeDislike,
        sizeIndex,
        qnt,
        label,
        userData,
        setQnts
    } = useProductDetails({ props })

    const [webViewHeight, setWebViewHeight] = useState(0);
    const injectedJavaScript = `
        (function() {
          setTimeout(function() {
            const contentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            window.ReactNativeWebView.postMessage(contentHeight);
          }, 500);  // Wait for the content to load completely
        })();
      `;

    const handleMessage = (event) => {
        const height = Number(event.nativeEvent.data, 10);
        setWebViewHeight(height);
    };



    return (
        <View style={styles.mainVIew}>
            <View style={{ zIndex: 100 }}>

                <CommanHeader
                    navigation={navigation}
                    lang={lang?.data}
                />
            </View>

            <ScrollView style={{ flex: 1 }} >
                <View style={styles.silderBox}>
                    <Slider
                        data={sliderData}
                        height={ResponsiveSize(450)}
                        lang={lang}
                    />
                </View>

                <View style={[styles.productCodeView]}>
                    <Text
                        style={[
                            styles.codeText,
                            lang.data == NUMBER.num0 && {
                                textAlign: EXTRASTR.right
                            }]}>
                        {details?.sku ? Str.ProductCode + details?.sku : " "}
                    </Text>
                </View>

                <View style={styles.profuctName}>
                    <Text
                        style={[
                            styles.profuctNameText,
                            lang.data == NUMBER.num0 && {
                                textAlign: EXTRASTR.right
                            }]}>{details?.name ? details?.name : '   '}</Text>
                </View>

                <View style={styles.PriveView}>
                    {/* ADD IMG */}
                    <SAR
                        price={details?.price_range?.minimum_price?.regular_price?.value}
                        normal={true}
                        texSize={ResponsiveSize(30)}
                        imgSize={ResponsiveSize(25)}
                        textAlign={{ justifyContent: lang.data == NUMBER.num1 ? ALINE.flexstart : ALINE.flexend }}
                    />
                </View>

                <View style={styles.deviderView}>
                    <View style={styles.devider} />
                </View>


                {details?.short_description?.html &&
                    <Text
                        style={[{
                            color: COLOR.black,
                            marginLeft: ResponsiveSize(30),
                            marginTop: ResponsiveSize(20),
                            fontFamily: FONTS.SemiBold
                        },
                        lang.data == NUMBER.num0 && {
                            textAlign: EXTRASTR.right,
                            marginRight: ResponsiveSize(30)
                        }
                        ]}
                    >
                        {label?.Description}
                    </Text>
                }


                {details?.short_description?.html &&
                    <RenderHTML
                        contentWidth={"100%"}
                        source={{ html: details?.short_description?.html }}
                        tagsStyles={{
                            p: {
                                color: COLOR.black,
                                fontSize: ResponsiveSize(18),
                                fontWeight: '400',
                                width: "90%",
                                alignSelf: ALINE.center
                            },
                        }}
                    />
                }
                {details?.short_description?.html && <View style={styles.deviderView}>
                    <View style={styles.devider} />
                </View>}


                {/* ===============  Revieew Section =============== */}
                {/* 

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(NAVIGATION.reviewScrenn)
                    }}
                    style={[styles.reviewView]}>
                    <Text style={[styles.reviewText, lang?.data == NUMBER?.num0 && { textAlign: 'right' }]}>{lang?.data == NUMBER?.num0 ? "شهادة العملاء" : "Customer Testimonial"}</Text>
                    <Text style={[styles.reviewTextdes, lang?.data == NUMBER?.num0 && { textAlign: 'right' }]}>{lang?.data == NUMBER?.num0 ? "ممتاز" : "Excellent"}</Text>

                    <View style={[styles.startView, lang?.data == NUMBER?.num0 && { flexDirection: 'row-reverse' }]}>
                        {testimonials?.map((item, index) => {
                            return (
                                <StartICON name={"star"} size={ResponsiveSize(30)} color={"#FAB834"} />
                            )
                        })}
                    </View>

                    <TouchableOpacity style={[styles.totalReview, lang?.data == NUMBER?.num0 && { left: ResponsiveSize(20) }]}>
                        <Text style={styles.totalReviewText}>{lang?.data == NUMBER?.num0 ? "7,262 تعليقًا" : "7,262 reviews"}</Text>
                    </TouchableOpacity>

                </TouchableOpacity> */}


                {/* ===============  Revieew Section =============== */}

                {colorLable &&
                    <View
                        style={[
                            {
                                flexDirection: ALINE.row,
                                marginLeft: ResponsiveSize(30),
                                marginBottom: ResponsiveSize(20)
                            },
                            lang?.data == NUMBER.num0 && {
                                flexDirection: ALINE.rowreverse,
                                marginRight: ResponsiveSize(30)
                            }]}>
                        <Text
                            style={styles.colorText}>
                            {label?.Color + " : "}
                        </Text>
                        <Text
                            style={styles.colorText}>
                            {" " + colorLable}
                        </Text>
                    </View>
                }
                {sizeLable &&
                    <View style={[{
                        flexDirection: ALINE.row,
                        marginLeft: ResponsiveSize(30),
                        marginBottom: ResponsiveSize(20)
                    },
                    lang?.data == NUMBER.num0 && {
                        flexDirection: ALINE.rowreverse,
                        marginRight: ResponsiveSize(30)
                    }]}>
                        <Text
                            style={styles.colorText}>
                            {label?.Size + " : "}
                        </Text>
                        <Text
                            style={styles.colorText}>
                            {" " + sizeLable + " "}
                        </Text>
                    </View>
                }

                {(sizeLable || colorLable) &&
                    <View style={{
                        paddingHorizontal: ResponsiveSize(20),
                        marginBottom: ResponsiveSize(20)
                    }}>
                        <View style={[styles.devider]} />
                    </View>
                }


                {defaultColor &&
                    <View style={[
                        styles.colorView,
                        lang?.data == NUMBER.num0 && {}
                    ]}>

                        <Text style={[
                            styles.text,
                            lang?.data == NUMBER.num0 && {
                                marginLeft: ResponsiveSize(30),
                                textAlign: EXTRASTR.right
                            }]}>
                            {Str.color}
                        </Text>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={[{ height: ResponsiveSize(100), paddingHorizontal: ResponsiveSize(5) },
                            lang?.data == NUMBER.num0 && {
                                flexDirection: ALINE.rowreverse
                            }]}>

                            {defaultColor?.values?.map((items, index) => {
                                const block = avalabeColor ? avalabeColor?.includes(items?.value_index) : true
                                var fileImage = ''
                                return (
                                    <View style={{ justifyContent: ALINE.center }}>
                                        <TouchableOpacity
                                            onPress={(() => {
                                                setIndex(index)
                                                colorOnPress(items?.value_index)
                                                setColorTex(items?.label)
                                            })}
                                            key={index}
                                            style={[styles.colorConatiner,
                                            index == sindex && {
                                                borderColor: COLOR.primaray,
                                                borderWidth: ResponsiveSize(2)
                                            }]}>

                                            {imageObject?.map((item) => {
                                                if (item?.colorIndex == items?.value_index) {
                                                    fileImage = item?.imgURL
                                                }
                                            })}

                                            {fileImage ?
                                                <FastImage
                                                    source={{ uri: fileImage }}
                                                    style={styles.ColorImage}
                                                /> :
                                                <View style={[styles.innerColorView, { backgroundColor: items?.swatch_data?.value }]} />
                                            }


                                            {(!block && !shoeColor) &&
                                                <View style={styles.ColorBlock}>
                                                    <Block
                                                        style={{
                                                            alignSelf: ALINE.center, top: ResponsiveSize(5)
                                                        }}
                                                        color={COLOR.primaray}
                                                        name={"slash"}
                                                        size={ResponsiveSize(70)}
                                                    />
                                                </View>
                                            }
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}

                        </ScrollView>
                    </View>

                }

                {
                    (defaultColor || defaultSize) &&
                    <View style={{ padding: ResponsiveSize(20) }}>
                        <View style={styles.devider} />
                    </View>
                }

                {defaultSize &&
                    <View style={[styles.sizeView, lang?.data == NUMBER.num0 && {}]}>
                        <Text style={[
                            styles.text,
                            lang?.data == NUMBER.num0 && {
                                marginLeft: ResponsiveSize(10),
                                textAlign: ALINE.right,
                                alignSelf: ALINE.flexend
                            }]}>{Str?.Size}</Text>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={[{ marginTop: ResponsiveSize(20) },
                            lang?.data == NUMBER.num0 && {
                                flexDirection: ALINE.rowreverse
                            }]}>

                            {defaultSize?.values?.map((items, index) => {
                                var blcok = avalabeSize ? avalabeSize?.includes(items?.swatch_data?.value) : true
                                return (
                                    <View>

                                        <TouchableOpacity
                                            onPress={() => {
                                                sizeOnPress(items?.value_index)
                                                setSizeIndex(index)
                                            }}
                                            key={index}
                                            style={[styles.sizeContainer,
                                            index == sizeIndex && sizeShow && { backgroundColor: COLOR.primaray },
                                            !blcok || !sizeShow && { backgroundColor: COLOR.white }
                                            ]}
                                        >
                                            <Text style={[
                                                styles.sizeText,
                                                (index == sizeIndex && sizeShow) && { color: COLOR.white }]} >
                                                {items?.swatch_data?.value}
                                            </Text>

                                        </TouchableOpacity>


                                        {
                                            (!blcok && !sizeShow) &&
                                            <TouchableOpacity
                                                onPress={() => { sizeOnPress(items?.value_index), setSizeIndex(index), setSizeShow(true), blcok = true }}
                                                style={styles.SizeBlock}>
                                                <Block
                                                    style={{ alignSelf: ALINE.center }}
                                                    color={COLOR.primaray} name={"slash"}
                                                    size={ResponsiveSize(70)}
                                                />
                                            </TouchableOpacity>
                                        }
                                        <View style={{ width: ResponsiveSize(20) }} />
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                }

                {(defaultColor || defaultSize) &&
                    <View style={styles.deviderView}>
                        <View style={styles.devider} />
                    </View>
                }

                <View style={[
                    styles.counteView,
                    lang?.data == NUMBER.num0 && {
                        flexDirection: ALINE.rowreverse
                    }]}>

                    <Text
                        style={styles.text}>
                        {Str.QNT}
                    </Text>

                    <View
                        style={[
                            styles.counter,
                            lang?.data == NUMBER.num0 && {
                                marginRight: ResponsiveSize(20)
                            }]}>

                        <Counter
                            qty={qnt}
                            setQnt={setQnts}
                        />

                    </View>
                </View>

                {
                    details?.description?.html &&
                    <View style={styles.deviderView}>
                        <View style={styles.devider} />
                    </View>
                }

                {details?.description?.html && <Text
                    style={[
                        styles.DesText,
                        lang.data == NUMBER.num0 && {
                            textAlign: EXTRASTR.right,
                            marginRight: ResponsiveSize(30)
                        }
                    ]}

                >
                    {label?.Description}
                </Text>
                }


                <View style={{ width: "100%", paddingHorizontal: ResponsiveSize(20) }} >
                    <WebView
                        originWhitelist={['*']}
                        source={{ html: details?.description?.html }}
                        style={[styles.WebView, { height: webViewHeight }]}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        scalesPageToFit={true}
                        injectedJavaScript={injectedJavaScript}
                        onMessage={handleMessage}
                        nestedScrollEnabled={true}
                        useWebKit={true}
                        allowsInlineMediaPlayback={true}
                    />
                </View>


                {
                    details?.related_products.length > 0 &&
                    <Text style={[
                        styles.ReletedText,
                        lang?.data == NUMBER.num0 && {
                            textAlign: EXTRASTR.right
                        }]}>
                        {label?.RelatedProduct}
                    </Text>
                }

                {
                    details?.related_products.length > 0 &&
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        automaticallyAdjustContentInsets={true}
                        style={[styles.subCategories,
                        lang?.data == NUMBER.num0 && {
                            transform: [{ rotateY: '180deg' }]
                        }]}
                    >
                        {

                            details?.related_products?.map((items, index) => {
                                const name = items?.name
                                const finalName = name.substring(0, 15);
                                const productImage = items?.image?.url

                                return (
                                    <View key={index} style={{ flexDirection: ALINE.row }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setImageArry(true),
                                                    navigation.navigate(NAVIGATION.ProducDetails, { SKU: items?.sku })
                                            }}>

                                            <View style={styles.innerCategoriesView}>
                                                <ProductImage
                                                    style={styles.storyView}
                                                    url={productImage}
                                                />
                                            </View>

                                            {(items?.special_offer || items?.is_new_badge) &&
                                                <View
                                                    style={[
                                                        styles.textImgView,
                                                        items?.special_offer ? { right: ResponsiveSize(0) } : { left: ResponsiveSize(0) }]}>

                                                    <FastImage
                                                        style={{ height: "100%", width: "100%" }}
                                                        source={{ uri: items?.special_offer ? items?.special_offer : items?.is_new_badge }}
                                                    />
                                                </View>
                                            }

                                            <Text
                                                style={[styles.cetegoriesText,
                                                lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}>
                                                {items?.name?.length > 10 ? finalName + "..." : items?.name}
                                            </Text>

                                            <SAR
                                                normal={false}
                                                price={items?.price_range?.minimum_price?.regular_price?.value}
                                                textAlign={{ width: ResponsiveSize(100) }}
                                            />
                                        </TouchableOpacity>
                                        <View style={{ width: ResponsiveSize(30) }} />
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                }

                <View style={{ height: ResponsiveSize(200) }} />


            </ScrollView >


            <View style={[
                styles.btnConatainer,
                lang.data == NUMBER.num0 && {
                    flexDirection: ALINE.rowreverse
                }]}>

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

                    <Icon
                        name={like ? ICON.heart : ICON.hearto}
                        size={ResponsiveSize(40)}
                        color={COLOR.primaray}
                    />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { onShare() }}
                    style={styles.shareBtn}>

                    <Icon
                        name={ICON.sharealt}
                        size={ResponsiveSize(40)}
                        color={COLOR.primaray}
                    />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { userData ? AddTocart() : navigation.navigate(NAVIGATION.Login, { type: true }) }}
                    style={styles.AddToCartBtn}>

                    <Text
                        style={styles.AddTocardText}>
                        {Str?.Addtocard}
                    </Text>
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
                <View style={styles.Lodder}>
                    <CusLoader />
                </View>
            }
        </View >
    )
}

export default ProductDetails
