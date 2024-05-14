import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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

const ProductDetails = () => {
    const { lang, navigation, sliderData, color, Str } = useProductDetails()
    return (
        <View style={styles.mainVIew}>
            <CommanHeader navigation={navigation} lang={lang?.data} />

            <ScrollView style={{}}>
                <View style={styles.silderBox}>
                    <Slider data={sliderData} height={ResponsiveSize(450)} lang={lang} />
                </View>

                <View style={styles.productCodeView}>
                    <Text style={[styles.codeText , lang?.data == lang.data == NUMBER.num0 && {textAlign:'right'}]}>{Str.ProductCode}</Text>
                </View>

                <View style={styles.profuctName}>
                    <Text style={[styles.profuctNameText , lang?.data == lang.data == NUMBER.num0 && {textAlign:'right'}]}>{Str?.MensPajamaSetShortTs}</Text>
                </View>

                <View style={styles.PriveView}>
                    <Text style={[styles.PrizeText , lang?.data == lang.data == NUMBER.num0 && {textAlign:'right'}]}>SAR 44</Text>
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
                    <Text style={[styles.text,  lang?.data == NUMBER.num0 && { marginLeft: ResponsiveSize(10) }]}>{Str?.Size}</Text>
                    {color.map((items, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.sizeContainer]}>
                                <Text style={styles.sizeText} >Xl</Text>
                            </TouchableOpacity>
                        )
                    })

                    }
                </View>
                <View style={styles.deviderView}>
                    <View style={styles.devider} />
                </View>

                <View style={[styles.counteView , lang?.data == NUMBER.num0 && {flexDirection:ALINE.rowreverse}]}>
                    <Text style={styles.text}>{Str.QNT}</Text>
                    <View style={[styles.counter , lang?.data == NUMBER.num0 && {marginRight:ResponsiveSize(20)}]}>
                        <Counter />
                    </View>
                </View>


                <View style={[styles.btnConatainer , lang.data == NUMBER.num0 && {flexDirection:ALINE.rowreverse}]}>

                    <TouchableOpacity style={styles.likeBtn}>
                        <Icon name={ICON.hearto} size={ResponsiveSize(40)} color={COLOR.primaray} />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.shareBtn}>
                        <Icon name={"sharealt"} size={ResponsiveSize(40)} color={COLOR.primaray} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.AddToCartBtn}>
                        <Text style={styles.AddTocardText}>{Str?.Addtocard}</Text>
                    </TouchableOpacity>

                </View>

                {/* <View style={{ height: ResponsiveSize(300) }}>

                </View> */}


            </ScrollView>
        </View>
    )
}

export default ProductDetails
