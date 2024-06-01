import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import { styles } from './ProductDetails.style'
import Slider from '../../components/Slider'
import useProductDetails from './ProductDetails.hook'
import { ResponsiveSize } from '../../utils/utils'
import Counter from '../../components/Counter'
import Icon from 'react-native-vector-icons/AntDesign';
import { ICON, NUMBER } from '../../constants/constants'
import { ALINE, COLOR } from '../../constants/style'
import LottieView from 'lottie-react-native'
import { Ratting } from '../../assests'
import ReviewSlider from '../../components/ReviewSlider'

const ProductDetails = () => {
    const { lang, navigation, sliderData, color, Str, setIndex, sindex, like, setLike, onShare, AddTocart, showModal, setShowModal } = useProductDetails()
    return (
        <View style={styles.mainVIew}>
            <CommanHeader navigation={navigation} lang={lang?.data} />

            <ScrollView style={{ flex: 1 }} >
                <View style={styles.silderBox}>
                    <Slider data={sliderData} height={ResponsiveSize(450)} lang={lang} />
                </View>

                <View style={styles.productCodeView}>
                    <Text style={[styles.codeText, lang?.data == lang.data == NUMBER.num0 && { textAlign: 'right' }]}>{Str.ProductCode}</Text>
                </View>

                <View style={styles.profuctName}>
                    <Text style={[styles.profuctNameText, lang?.data == lang.data == NUMBER.num0 && { textAlign: 'right' }]}>{Str?.MensPajamaSetShortTs}</Text>
                </View>

                <View style={styles.PriveView}>
                    <Text style={[styles.PrizeText, lang?.data == lang.data == NUMBER.num0 && { textAlign: 'right' }]}>SAR 44</Text>
                </View>
                <View style={styles.deviderView}>
                    <View style={styles.devider} />
                </View>

                <View style={[styles.colorView, lang?.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                    <Text style={[styles.text, lang?.data == NUMBER.num0 && { marginLeft: ResponsiveSize(30) }]}>{Str.color}</Text>
                    {color.map((items, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.colorConatiner]}>
                                <Image style={styles.imgIcon} source={{ uri: "https://img.freepik.com/premium-photo/blank-white-tshirts-mockup-hanging-white-wall-front-view-template-custom-design-generative-ai_117038-6478.jpg" }} />
                            </TouchableOpacity>
                        )
                    })

                    }
                </View>


                <View style={[styles.sizeView, lang?.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                    <Text style={[styles.text, lang?.data == NUMBER.num0 && { marginLeft: ResponsiveSize(10) }]}>{Str?.Size}</Text>
                    {color.map((items, index) => {

                        return (
                            <TouchableOpacity
                                onPress={() => { setIndex(index) }}
                                key={index} style={[styles.sizeContainer, index == sindex && { backgroundColor: COLOR.primaray }]}>
                                <Text style={[styles.sizeText, index == sindex && { color: COLOR.white }]} >Xl</Text>
                            </TouchableOpacity>
                        )
                    }) }
                </View>
                <View style={styles.deviderView}>
                    <View style={styles.devider} />
                </View>

                <View style={[styles.counteView, lang?.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                    <Text style={styles.text}>{Str.QNT}</Text>
                    <View style={[styles.counter, lang?.data == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>
                        <Counter />
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => { setShowModal(true) }}
                    style={[styles.reviewView, lang?.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                    <Text>{Str?.Reviews}</Text>
                    <View style={[styles.ratingIconView, lang?.data == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>
                        <Image style={styles.ratingStart} source={Ratting} />
                    </View>

                </TouchableOpacity>

                <View style={{ height: ResponsiveSize(200) }} />



            </ScrollView>
            {/* <View style={{ height: ResponsiveSize(40), width: ResponsiveSize(40), position: 'absolute', bottom: ResponsiveSize(150) , right:ResponsiveSize(20) }}>
                <LottieView
                    //   ref={animationRef}
                    source={require('../../assests/Lottianimation/AddToCart.json')}
                    autoPlay loop
                    resizeMode='cover'
                    style={{ height: "100%", width: "100%" }}
                />
            </View> */}


            <View style={[styles.btnConatainer, lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>


                <TouchableOpacity
                    onPress={() => {
                        like ? setLike(false) : setLike(true)
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
                    onPress={() => { AddTocart() }}
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

        </View>
    )
}

export default ProductDetails
