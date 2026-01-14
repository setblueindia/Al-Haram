import { Modal, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import CommanHeader from '../../components/ComanHeader'
import { styles } from './ProductDetails.style'
import Slider from '../../components/Slider'
import useProductDetails from './ProductDetails.hook'
import { ResponsiveSize } from '../../utils/utils'
import Counter from '../../components/Counter'
import Icon from 'react-native-vector-icons/AntDesign';
import Block from 'react-native-vector-icons/FontAwesome6';
import BlockIcon from 'react-native-vector-icons/MaterialIcons';
import {
    EXTRASTR,
    ICON,
    NAVIGATION,
    NUMBER
} from '../../constants/constants'
import { ALINE, COLOR } from '../../constants/style'
import LottieView from 'lottie-react-native'
import ReviewSlider from '../../components/ReviewSlider'
import CusLoader from '../../components/CustomLoader'
import FastImage from 'react-native-fast-image'
import RenderHTML from 'react-native-render-html';
import WebView from 'react-native-webview'
import BIcon from 'react-native-vector-icons/AntDesign';
import SAR from '../../components/SAR/Index'


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
        colorTex, setColorTex,
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
        getData,
        sizeIndex,
        qnt,
        label,
        userData,
        colorSectionRef,
        sizeSectionRef, scrollRef,
        setQnts,
        colorError, sizeError,
        masurementError
    } = useProductDetails({ props })


    const [webViewHeight, setWebViewHeight] = useState(0);
    const [shoeBigSilder, setShowBingSider] = useState(false)

    const { width } = useWindowDimensions();

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

    const testimonials = Array.from({ length: 5 });


    return (
        <View style={styles.mainVIew}>
            <View style={{ zIndex: 100 }}>
                <CommanHeader navigation={navigation} lang={lang?.data} />
            </View>
            <ScrollView
                ref={scrollRef}
                style={{ flex: 1 }} >
                <View style={styles.silderBox}>
                    <Slider data={sliderData} height={ResponsiveSize(450)} lang={lang} setShowBingSider={setShowBingSider} />
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
                    {/* ADD IMG */}
                    <SAR
                        price={details?.price_range?.minimum_price?.regular_price?.value}
                        normal={true}
                        texSize={ResponsiveSize(30)}
                        imgSize={ResponsiveSize(25)}
                        textAlign={{ justifyContent: lang.data == NUMBER.num1 ? 'flex-start' : 'flex-end' }}
                    />

                    {/* <Text style={[styles.PrizeText, lang.data == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(10) }]}>{details?.price_range?.minimum_price?.regular_price?.value ? label?.SAR + " " + details?.price_range?.minimum_price?.regular_price?.value : " "}</Text> */}
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
                    <View style={[{ flexDirection: 'row', marginLeft: ResponsiveSize(30), marginBottom: ResponsiveSize(20) }, lang?.data == NUMBER.num0 && { flexDirection: 'row-reverse', marginRight: ResponsiveSize(30) }]}>
                        <Text style={{ color: COLOR.black, fontSize: ResponsiveSize(20) }}>{lang?.data == NUMBER.num1 ? "Color : " : "اللون : "}</Text>
                        <Text style={{ color: COLOR.black, fontSize: ResponsiveSize(20) }}>{" " + colorLable}</Text>
                    </View>
                }
                {sizeLable &&
                    <View style={[{ flexDirection: 'row', marginLeft: ResponsiveSize(30), marginBottom: ResponsiveSize(20) }, lang?.data == NUMBER.num0 && { flexDirection: 'row-reverse', marginRight: ResponsiveSize(30) }]}>
                        <Text style={{ color: COLOR.black, fontSize: ResponsiveSize(20) }}>{lang?.data == NUMBER.num1 ? "Size : " : "المقاس : "}</Text>
                        <Text style={{ color: COLOR.black, fontSize: ResponsiveSize(20) }}>{" " + sizeLable + " "}</Text>
                    </View>
                }

                {(sizeLable || colorLable) &&
                    <View style={{ paddingHorizontal: ResponsiveSize(20), marginBottom: ResponsiveSize(20) }}>
                        <View style={[styles.devider]} />
                    </View>
                }

                <View style={
                    masurementError == 0 && styles.greenLine}>

                    {defaultColor &&

                        <View
                            ref={colorSectionRef}
                            style={masurementError == 1 && styles.greenLine}
                        >
                            <View
                                // ref={colorSectionRef}
                                // onLayout={(event) => setColorLayoutY(event.nativeEvent.layout.y)}
                                style={[styles.colorView, lang?.data == NUMBER.num0 && {}]}>

                                <Text style={[
                                    styles.text,
                                    lang?.data == NUMBER.num0 && {
                                        marginLeft: ResponsiveSize(30),
                                        textAlign: EXTRASTR.right
                                    }]}>{Str.color}
                                </Text>

                                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[{ height: ResponsiveSize(130), paddingHorizontal: ResponsiveSize(5), marginTop: ResponsiveSize(15) }, lang?.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>

                                    {defaultColor?.values?.map((items, index) => {

                                        const block = avalabeColor ? avalabeColor?.includes(items?.value_index) : true
                                        var fileImage = ''
                                        return (
                                            <View style={{ justifyContent: ALINE.center }}>
                                                <TouchableOpacity
                                                    onPress={(() => { setIndex(index), colorOnPress(items?.value_index), setColorTex(items?.label) })}
                                                    key={index}
                                                    style={[styles.colorConatiner,
                                                    index == sindex && {
                                                        borderColor: COLOR.primaray,
                                                        borderWidth: ResponsiveSize(2),
                                                        transform: [{ scale: 1.15 }],
                                                    }]}>

                                                    {imageObject?.map((item) => {
                                                        if (item?.colorIndex == items?.value_index) {
                                                            fileImage = item?.imgURL
                                                        }
                                                    })}

                                                    {fileImage ?
                                                        <FastImage
                                                            source={{ uri: fileImage }}
                                                            style={{ height: "100%", width: "100%", resizeMode: 'contain', borderRadius: ResponsiveSize(10) }} />
                                                        :
                                                        <View style={[styles.innerColorView, { backgroundColor: items?.swatch_data?.value }]} />
                                                    }


                                                    {(!block && !shoeColor) &&
                                                        <View style={{
                                                            alignSelf: ALINE.center,
                                                            position: 'absolute',
                                                            height: ResponsiveSize(100),
                                                            width: ResponsiveSize(80),
                                                            backgroundColor: "#00000050",
                                                            borderRadius: ResponsiveSize(10),
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}>
                                                            {/* <View style={{
                                                        // position: 'absolute',
                                                        width: "140%",
                                                        // width: ResponsiveSize(70),
                                                        height: ResponsiveSize(5),
                                                        backgroundColor: COLOR.primaray,
                                                        transform: [{ rotate: "50deg" }]
                                                    }} /> */}

                                                            <BlockIcon name={"block"} size={ResponsiveSize(60)} color={"#FFFFFF90"} />
                                                            {/* <Block style={{ alignSelf: 'center', top: ResponsiveSize(5) }} color={COLOR.primaray} name={"slash"} size={ResponsiveSize(70)} /> */}
                                                        </View>
                                                    }
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })}

                                </ScrollView>


                                {
                                    colorError &&
                                    <Text style={[
                                        styles.text, { color: COLOR.primaray, fontSize: ResponsiveSize(20) },
                                        lang?.data == NUMBER.num0 && {
                                            marginLeft: ResponsiveSize(30),
                                            textAlign: EXTRASTR.right
                                        }]}>{colorError}
                                    </Text>
                                }



                            </View>
                        </View>

                    }

                    {
                        (defaultColor || defaultSize) &&
                        <View style={{ padding: ResponsiveSize(20) }}>
                            <View style={styles.devider} />
                        </View>
                    }

                    {defaultSize &&
                        <View

                            style={masurementError == 2 && styles.greenLine}
                            ref={sizeSectionRef}
                        >
                            <View
                                // ref={sizeSectionRef}
                                // onLayout={(event) => setSizeLayoutY(event.nativeEvent.layout.y)}
                                style={[styles.sizeView, lang?.data == NUMBER.num0 && {}]}>

                                <Text
                                    style={[
                                        styles.text,
                                        lang?.data == NUMBER.num0 && {
                                            marginLeft: ResponsiveSize(10),
                                            textAlign: ALINE.right,
                                            alignSelf: 'flex-end'
                                        }
                                    ]}>
                                    {Str?.Size}
                                </Text>

                                {/* {(!sizeError) ?
                            <Text
                                style={[
                                    styles.text,
                                    lang?.data == NUMBER.num0 && {
                                        marginLeft: ResponsiveSize(10),
                                        textAlign: ALINE.right,
                                        alignSelf: 'flex-end'
                                    }
                                ]}>
                                {Str?.Size}
                            </Text> :
                            <Text
                                style={[
                                    styles.text, { color: COLOR.primaray, fontSize: ResponsiveSize(20) },
                                    lang?.data == NUMBER.num0 && {
                                        marginLeft: ResponsiveSize(10),
                                        textAlign: ALINE.right,
                                        alignSelf: 'flex-end'
                                    }
                                ]}>
                                {sizeError}
                            </Text>

                        } */}

                                <ScrollView
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    style={[{
                                        marginTop: ResponsiveSize(20)
                                    }, lang?.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>

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
                                                <View style={{ width: ResponsiveSize(20) }} />
                                            </View>
                                        )
                                    })}
                                </ScrollView>

                                {sizeError &&
                                    <Text
                                        style={[
                                            styles.text, { color: COLOR.primaray, fontSize: ResponsiveSize(20), marginTop: ResponsiveSize(10) },
                                            lang?.data == NUMBER.num0 && {
                                                marginLeft: ResponsiveSize(10),
                                                textAlign: ALINE.right,
                                                alignSelf: 'flex-end'
                                            }
                                        ]}>
                                        {sizeError}
                                    </Text>
                                }



                            </View>
                        </View>
                    }

                </View>

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
                        marginTop: ResponsiveSize(20),
                        // fontSize: ResponsiveSize(20)
                    },
                    lang.data == NUMBER.num0 && {
                        textAlign: 'right',
                        marginRight: ResponsiveSize(30)
                    }
                    ]}

                >
                    {lang.data == NUMBER.num1 ? "Description" : "الوصف"}</Text>}



                <View style={{ width: "100%", paddingHorizontal: ResponsiveSize(20) }} >
                    <WebView
                        originWhitelist={['*']}
                        source={{ html: details?.description?.html }}
                        style={{ width: '100%', height: ResponsiveSize(webViewHeight), resizeMode: 'contain', alignSelf: 'center' }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        scalesPageToFit={true}
                        injectedJavaScript={injectedJavaScript} // Inject JavaScript to get height
                        onMessage={handleMessage} // Use handleMessage as a reference
                        nestedScrollEnabled={true}
                        useWebKit={true}
                        allowsInlineMediaPlayback={true}
                    />
                </View>


                {
                    details?.related_products.length > 0 &&
                    <Text style={[{
                        padding: ResponsiveSize(20),
                        fontSize: ResponsiveSize(25),
                        color: COLOR.primaray,
                        fontWeight: "500"
                    }, lang?.data == NUMBER.num0 && { textAlign: 'right' }]}>{lang?.data == NUMBER.num0 ? "منتجات ذات صله" : "Related Product"}</Text>
                }

                {
                    details?.related_products.length > 0 &&
                    <ScrollView
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


                                            {/* <Text style={[styles.priceText, lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}>{label.SAR + " " + items?.price_range?.minimum_price?.regular_price?.value}</Text> */}
                                            <SAR normal={false} price={items?.price_range?.minimum_price?.regular_price?.value} textAlign={{ width: ResponsiveSize(100) }} />
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
                    onPress={() => { userData ? AddTocart() : navigation.navigate(NAVIGATION.Login, { type: true }) }}
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

            <Modal
                visible={shoeBigSilder}
                transparent={true}
            >
                <View style={{ backgroundColor: COLOR.white, height: "100%", width: "100%", }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: ResponsiveSize(80),
                            left: ResponsiveSize(20),
                            height: ResponsiveSize(80),
                            width: ResponsiveSize(80),
                            borderRadius: ResponsiveSize(100),
                            backgroundColor: "#00000020",
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 100
                        }}
                        onPress={() => { setShowBingSider(false) }}>

                        <BIcon
                            name={lang == NUMBER.num0 ? ICON.arrowright : ICON.arrowleft}
                            size={ResponsiveSize(40)} coloe={COLOR.black} />

                    </TouchableOpacity>
                    {/* <View style={{ marginTop: ResponsiveSize(200) }} /> */}

                    <Slider data={sliderData} height={ResponsiveSize(1000)} lang={lang} lottie={true} />
                </View>
            </Modal>

            {
                isLoading &&
                <View style={{ position: 'absolute', height: "100%", width: "100%" }}>
                    <CusLoader />
                </View>
            }
        </View >
    )
}

export default ProductDetails
