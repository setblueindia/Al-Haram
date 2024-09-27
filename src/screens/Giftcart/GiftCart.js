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
import CusLoader from '../../components/CustomLoader'
import { Ar, En } from '../../constants/localization'

const GiftCart = () => {


    // const sdata = [
    //     "https://images.unsplash.com/photo-1637070155805-e6fbee6ec2cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmdCUyMGNhcmR8ZW58MHx8MHx8fDA%3D",
    //     "https://plus.unsplash.com/premium_photo-1669740575755-4434d69ae654?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpZnQlMjBjYXJkfGVufDB8fDB8fHww",
    //     "https://images.unsplash.com/photo-1637070155805-e6fbee6ec2cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmdCUyMGNhcmR8ZW58MHx8MHx8fDA%3D",
    //     "https://plus.unsplash.com/premium_photo-1669740575755-4434d69ae654?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpZnQlMjBjYXJkfGVufDB8fDB8fHww"
    // ]


    const {
        navigation,
        lang,
        recipientDetails,
        slider,
        data,
        isLoadding,
        price,
        inputPrice,
        userData,
        setName,
        setRecipientName,
        setRecipientEmail,
        setMessage,
        setRecipientNumber,
        onRecipientPress,
        onAddTocart,
        pricvePress,
        setInputPrice,
        addWallte,
        setPrice,
        selectIndex
    } = useGiftHook()



    const lable = lang == NUMBER.num0 ? Ar : En

    // console.log(recipientDetails)

    const renderRicipint = () => {
        const imageComponents = [];
        for (let i = 0; i < recipientDetails.length; i++) {
            imageComponents.push(
                <View>
                    <View style={styles.barView} />
                    <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Your Name" : "الاسم"}</Text>
                    <View style={styles.div2} />
                    <TextFildCus onChange={setName} text={lang == NUMBER.num1 ? "Enter Sender Name" : "أدخل اسم المرسل"} />

                    <View style={styles.div2} />
                    <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Recipient Name" : "اسم المستلم"}</Text>
                    <View style={styles.div2} />
                    <TextFildCus onChange={setRecipientName} text={lang == NUMBER.num1 ? "Enter Recipient Name" : "أدخل اسم المستلم"} />
                    <View style={styles.div2} />
                    <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Recipient Email" : "البريد الإلكتروني للمستلم"}</Text>
                    <View style={styles.div2} />
                    <TextFildCus onChange={setRecipientEmail} text={lang == NUMBER.num1 ? "Enter Recipient Email" : "عنوان البريد الإلكتروني"} />
                    <View style={styles.div2} />
                    <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Recipient Mobile Number" : "هاتف المستلم"}</Text>
                    <View style={styles.div2} />
                    <TextFildCus onChange={setRecipientNumber} text={lang == NUMBER.num1 ? "Enter Recipient Mobile Number" : "رقم جوال المستلم"} />
                    <View style={styles.div2} />
                    <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Message" : "رسالة"}</Text>
                    <View style={styles.div2} />
                    <TextInput
                        // onChange={setMessage}
                        onChangeText={(text) => { setMessage(text) }}
                        textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
                        multiline={true}
                        placeholder={lang == NUMBER.num1 ? 'Enter your message' : "أدخل رسالتك"}
                        style={styles.messTextInput}
                    />
                    <View style={styles.div2} />
                </View>
            )
        }
        return imageComponents;
    }

    return (
        <View style={styles.mainView}>
            <CommanHeader navigation={navigation} />

            <ScrollView style={styles.containerView}>
                <View style={styles.sliderView}>
                    <Slider data={slider} height={ResponsiveSize(300)} home={true} />
                </View>
                <View style={{ paddingHorizontal: ResponsiveSize(25) }}>
                    <Text style={[styles.titelText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{data?.name} </Text>
                    <Text style={[styles.desText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Be the first to review this product" : "قيمة البطاقة بالريال السعودي"}</Text>

                    <Text style={[styles.priceText1, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lable?.SAR + " " + price}</Text>
                    <Text style={[styles.desText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{"SKU #easter-gift-cards"}</Text>

                    <Text style={[styles.cartPriceText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Card Value in USD" : "قيمة البطاقة باللاير السعودي"}</Text>
                    <View style={[styles.priceContainer, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>

                        {data?.am_giftcard_prices?.map((items, index) => {
        
                            return (
                                <View style={{ padding: ResponsiveSize(5) }}>
                                    <TouchableOpacity onPress={() => { pricvePress(index, items?.value) }} style={[styles.priceBox, selectIndex == index && { backgroundColor: COLOR.primaray }]}>
                                        <Text style={[styles.priceText, selectIndex == index && { color: COLOR.white }]}>{lable?.SAR + " " + items?.value}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                        }
                        {/* <View style={styles.priceBox}>
                            <Text style={styles.priceText}>{"SAR 25"}</Text>
                        </View>
                        <View style={styles.priceBox}>
                            <Text style={styles.priceText}>{"SAR 85"}</Text>
                        </View> */}
                    </View>

                    {data?.am_allow_open_amount == 1 && <Text style={[styles.otherAMT, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Other amount:" : "مبلغ آخر"}</Text>}
                    {data?.am_allow_open_amount == 1 && <View style={[{ width: "100%", flexDirection: 'row', justifyContent: 'space-between', marginTop: ResponsiveSize(10) }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                        <TextInput
                            value={inputPrice}
                            onChangeText={(text) => { setInputPrice(text) }}
                            placeholder='SAR10 to SAR50'
                            placeholderTextColor={"#cccccc"}
                            keyboardType='numeric'
                            style={[styles.textInputs, lang == NUMBER.num0 && { textAlign: 'right' }]}
                        />
                        <TouchableOpacity
                            onPress={() => { addWallte() }}
                            style={styles.textinputBTN}>
                            <Text style={styles.priceText}>{lang == NUMBER.num1 ? "ADD" : "أضف"}</Text>
                        </TouchableOpacity>
                    </View>}

                    {/* <Text style={[styles.otherAMT, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Choose card design" : "اختر تصميم البطاقة"}</Text> */}


                    {/* <ScrollView style={[styles.scroll, lang == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]} showsHorizontalScrollIndicator={false} horizontal>
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
                    </ScrollView> */}

                    <Text style={[styles.otherAMT, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Upload your own design" : "قم بتحميل التصميم الخاص بك"}</Text>
                    <TouchableOpacity style={[styles.browsePic, lang == NUMBER.num0 && { alignSelf: 'flex-end', flexDirection: 'row-reverse' }]}>
                        <Icon name="add-a-photo" size={ResponsiveSize(30)} color={COLOR.white} />
                        <Text style={styles.browserText}>{lang == NUMBER.num1 ? "Browser" : "تصفح"}</Text>
                    </TouchableOpacity>
                    {/* {renderRicipint()} */}



                    {recipientDetails?.map((item , index) => {

                        // console.log("item ::::::::::::: " , item?.am_giftcard_recipient_email)
                        return (
                            <View>
                                <View style={styles.barView} />
                                <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Your Name" : "الاسم"}</Text>
                                <View style={styles.div2} />
                                <TextFildCus onChange={setName} text={lang == NUMBER.num1 ? "Enter Sender Name" : "أدخل اسم المرسل"} />

                                <View style={styles.div2} />
                                <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Recipient Name" : "اسم المستلم"}</Text>
                                <View style={styles.div2} />
                                <TextFildCus onChange={setRecipientName} text={lang == NUMBER.num1 ? "Enter Recipient Name" : "أدخل اسم المستلم"} />
                                <View style={styles.div2} />
                                <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Recipient Email" : "البريد الإلكتروني للمستلم"}</Text>
                                <View style={styles.div2} />

                                <TextFildCus onChange={setRecipientEmail} text={lang == NUMBER.num1 ? "Enter Recipient Email" : "عنوان البريد الإلكتروني"} />
                                {/* {!item?.am_giftcard_recipient_email && <Text style={styles.eerroText}>{"Enter Recipient Email"}</Text>} */}
                
                                <View style={styles.div2} />
                                <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Recipient Mobile Number" : "هاتف المستلم"}</Text>
                                <View style={styles.div2} />
                                <TextFildCus onChange={setRecipientNumber} text={lang == NUMBER.num1 ? "Enter Recipient Mobile Number" : "رقم جوال المستلم"} />
                                <View style={styles.div2} />
                                <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Message" : "رسالة"}</Text>
                                <View style={styles.div2} />
                                <TextInput
                                    // onChange={setMessage}
                                    onChangeText={(text) => { setMessage(text) }}
                                    textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
                                    multiline={true}
                                    placeholder={lang == NUMBER.num1 ? 'Enter your message' : "أدخل رسالتك"}
                                    style={styles.messTextInput}
                                />
                                <View style={styles.div2} />
                            </View>
                        )
                    })}







                    <TouchableOpacity
                        onPress={() => { onRecipientPress() }}
                        style={styles.addTonewRecipintView} >
                        <Text style={styles.addnewRecipintText}>{lang == NUMBER.num1 ? "+ Add New Recipient" : "إضافة مستلم جديد"}</Text>

                    </TouchableOpacity>

                    <View style={styles.barView} />
                    <Text style={[styles.otherAMT, lang == NUMBER.num0 && { textAlign: 'right' }]}>{"Schedule delivery"}</Text>
                    <View style={[{ flexDirection: 'row', width: "60%", justifyContent: 'space-between' }, lang == NUMBER.num0 && { alignSelf: 'flex-end' }]}>
                        <TouchableOpacity style={[styles.cheackboxView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                            <View style={styles.roundView} />
                            <Text style={[styles.checktext, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>{lang == NUMBER.num1 ? "Send now" : "أرسل الآن"}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cheackboxView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                            <View style={styles.roundView} />
                            <Text style={[styles.checktext, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>{lang == NUMBER.num1 ? "Send later" : "إرسال لاحقاً"}</Text>
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
                            onPress={() => { userData ? onAddTocart() : navigation.navigate(NAVIGATION.Login) }}
                            style={styles.AddToCartBtn}>
                            <Text style={styles.AddTocardText}>{"Add to card"}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ height: ResponsiveSize(200) }} />

            </ScrollView>


            {isLoadding &&
                <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
                    <CusLoader />
                </View>
            }




        </View>
    )
}

export default GiftCart

