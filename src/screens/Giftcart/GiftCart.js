import { ScrollView, StyleSheet, Text, TextComponent, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './giftcart.style'
import CustomeHeader from '../../components/CustomeHeader'
import Slider from '../../components/Slider'
import { ResponsiveSize } from '../../utils/utils'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { ALINE, COLOR } from '../../constants/style'
import TextFildCus from '../../components/TextFildCus'
import useGiftHook from './gift.hook'
import { ICON, NAVIGATION, NUMBER } from '../../constants/constants'
import CommanHeader from '../../components/ComanHeader'

const GiftCart = () => {
    const data = [
        "https://images.unsplash.com/photo-1637070155805-e6fbee6ec2cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmdCUyMGNhcmR8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1669740575755-4434d69ae654?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpZnQlMjBjYXJkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1637070155805-e6fbee6ec2cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmdCUyMGNhcmR8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1669740575755-4434d69ae654?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpZnQlMjBjYXJkfGVufDB8fDB8fHww"
    ]
    const { navigation, lang } = useGiftHook()

    return (
        <View style={styles.mainView}>
            {/* <CustomeHeader shoppingcart={true} like={true} search={true} /> */}
            <CommanHeader navigation={navigation} />

            <ScrollView style={styles.containerView}>
                <View style={styles.sliderView}>
                    <Slider data={data} height={ResponsiveSize(450)} home={true} />
                </View>
                <View style={{ paddingHorizontal: ResponsiveSize(25) }}>
                    <Text style={[styles.titelText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "EASTER GIFT CARDS" : "بطاقات الهدايا"} </Text>
                    <Text style={[styles.desText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Be the first to review this product" : "كن أول من يراجع هذا المنتج"}</Text>

                    <Text style={[styles.priceText1, lang == NUMBER.num0 && { textAlign: 'right' }]}>{"SAR 50"}</Text>
                    <Text style={[styles.desText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{"SKU #easter-gift-cards"}</Text>

                    <Text style={[styles.cartPriceText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Card Value in USD" : "قيمة البطاقة باللاير السعودي"}</Text>
                    <View style={[styles.priceContainer, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                        <View style={styles.priceBox}>
                            <Text style={styles.priceText}>{"SAR 25"}</Text>
                        </View>
                        <View style={styles.priceBox}>
                            <Text style={styles.priceText}>{"SAR 25"}</Text>
                        </View>
                        <View style={styles.priceBox}>
                            <Text style={styles.priceText}>{"SAR 85"}</Text>
                        </View>
                    </View>

                    <Text style={[styles.otherAMT, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Other amount:" : "مبلغ آخر"}</Text>
                    <View style={[{ width: "100%", flexDirection: 'row', justifyContent: 'space-between', marginTop: ResponsiveSize(10) }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                        <TextInput
                            placeholder='SAR10 to SAR50'
                            placeholderTextColor={"#cccccc"}
                            style={[styles.textInputs, lang == NUMBER.num0 && { textAlign: 'right' }]}

                        />
                        <TouchableOpacity style={styles.textinputBTN}>
                            <Text style={styles.priceText}>{ lang == NUMBER.num1 ? "ADD" : "أضف"}</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.otherAMT, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Choose card design" : "اختر تصميم البطاقة"}</Text>
                    <ScrollView style={[styles.scroll, lang == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]} showsHorizontalScrollIndicator={false} horizontal>
                        <View style={styles.rowPicView}>
                            {data?.map((items, index) => {
                                return (
                                    <View key={index}>
                                        <TouchableOpacity style={styles.degineCartView}>
                                            <FastImage
                                                resizeMode='cover'
                                                style={{ height: "100%", width: "100%", borderRadius: ResponsiveSize(10) }}
                                                source={{ uri: items }}
                                            />
                                        </TouchableOpacity>
                                        <View style={{ width: ResponsiveSize(20) }} />
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>

                    <Text style={[styles.otherAMT, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Upload your own design" : "قم بتحميل التصميم الخاص بك"}</Text>
                    <TouchableOpacity style={[styles.browsePic, lang == NUMBER.num0 && { alignSelf: 'flex-end', flexDirection: 'row-reverse' }]}>
                        <Icon name="add-a-photo" size={ResponsiveSize(30)} color={COLOR.white} />
                        <Text style={styles.browserText}>{lang == NUMBER.num1 ? "Browser" : "تصفح"}</Text>
                    </TouchableOpacity>

                    <View style={styles.barView} />

                    <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Your Name" : "االسم"}</Text>
                    <View style={styles.div2} />
                    <TextFildCus text={lang == NUMBER.num1 ? "Enter Sender Name" : "أدخل اسم المرسل"} />
                    <View style={styles.div2} />
                    <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ?"Recipient Name" : "اسم المستلم"}</Text>
                    <View style={styles.div2} />
                    <TextFildCus text={lang == NUMBER.num1 ? "Enter Recipient Name" : "أدخل اسم المستلم"} />
                    <View style={styles.div2} />
                    <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ?"Recipient Email" : "البريد اإللكتروني للمستلم"}</Text>
                    <View style={styles.div2} />
                    <TextFildCus text={lang == NUMBER.num1 ? "Enter Recipient Email" : "أدخل البريد اإللكتروني للمستلم"} />
                    <View style={styles.div2} />
                    <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ?"Recipient Phone" : "هاتف المستلم"}</Text>
                    <View style={styles.div2} />
                    <TextFildCus text={lang == NUMBER.num1 ? "Recipient Mobile Number" : "رقم جوال المستلم"} />
                    <View style={styles.div2} />
                    <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ?"Message" : "رسالة"}</Text>
                    <View style={styles.div2} />
                    <TextInput
                        textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
                        multiline={true}
                        placeholder={lang == NUMBER.num1 ?'Enter your message' : "أدخل رسالتك"}
                        style={styles.messTextInput}
                    />
                    <View style={styles.div2} />

                    <View style={styles.addTonewRecipintView} >
                        <Text style={styles.addnewRecipintText}>{lang == NUMBER.num1 ?"+ Add New Recipient" : "إضافة مستلم جديد"}</Text>

                    </View>

                    <View style={styles.barView} />
                    <Text style={[styles.otherAMT, lang == NUMBER.num0 && { textAlign: 'right' }]}>{"Schedule delivery"}</Text>
                    <View style={[{ flexDirection: 'row', width: "60%", justifyContent: 'space-between' }, lang == NUMBER.num0 && { alignSelf: 'flex-end' }]}>
                        <TouchableOpacity style={[styles.cheackboxView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                            <View style={styles.roundView} />
                            <Text style={[styles.checktext, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>{lang == NUMBER.num1 ?"Send now" : "أرسل اآلن"}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cheackboxView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                            <View style={styles.roundView} />
                            <Text style={[styles.checktext, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>{lang == NUMBER.num1 ?"Send later2" : "الحقا إرسال"}</Text>
                        </TouchableOpacity>

                    </View>


  
                    <View style={styles.barView} />


                    <View style={[styles.btnConatainer, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                        <TouchableOpacity
                            onPress={() => { }}
                            style={styles.likeBtn}>
                            <Icon2 name={ICON.hearto} size={ResponsiveSize(30)} color={COLOR.primaray} />

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { }}
                            style={styles.shareBtn}>
                            <Icon2 name={"sharealt"} size={ResponsiveSize(30)} color={COLOR.primaray} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { userData ? " " : navigation.navigate(NAVIGATION.Login) }}
                            style={styles.AddToCartBtn}>
                            <Text style={styles.AddTocardText}>{"Add to card"}</Text>
                        </TouchableOpacity>



                    </View>





                </View>




                <View style={{ height: ResponsiveSize(200) }} />

            </ScrollView>




        </View>
    )
}

export default GiftCart

