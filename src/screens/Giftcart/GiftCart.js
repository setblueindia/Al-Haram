import { Image, Keyboard, Linking, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './giftcart.style'
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
import RenderHTML from 'react-native-render-html'
import Counter from '../../components/Counter'
import CheackButton from '../../components/CheackButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CrossICON from 'react-native-vector-icons/dist/Entypo';



const GiftCart = (props) => {

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
        name,
        recipientName,
        recipientNumber,
        message,
        recipientEmail,
        ondata,
        giftCardID,
        qty,
        coustomAmount,
        info, setInfo,
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
        setOnData,
        setQty,
        removeData,
        setRecipientDetails,
        setCoutomerAmount,
        checkValidation,
        handleUpdate,
        setPrice,
        selectIndex,
        error
    } = useGiftHook(props)


    const lable = lang == NUMBER.num0 ? Ar : En

    return (
        <View style={styles.mainView}>
            <CommanHeader navigation={navigation} lang={lang} />

            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={styles.containerView}>
                <View style={styles.sliderView}>
                    <Slider data={slider} height={ResponsiveSize(300)} home={true} />
                </View>
                <View style={[{ paddingHorizontal: ResponsiveSize(25) }]}>
                    <Text style={[styles.titelText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{data?.name.toUpperCase()} </Text>
                    <TouchableOpacity
                        onPress={() => {
                            const reviewLink = "https://alharamstores.com/alharam-gift-cards.html#review-form"
                            Linking.openURL(reviewLink);
                        }}
                    >
                        <Text style={[styles.desText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ?
                            "Be the first to review this product"
                            : "قيمة البطاقة بالريال السعودي"}
                        </Text>

                    </TouchableOpacity>

                    {(!price && !coustomAmount) && <View style={{ height: ResponsiveSize(40) }} />}
                    {(price || coustomAmount) && <Text style={[styles.priceText1, lang == NUMBER.num0 && { textAlign: 'right' }]}>{price ? lable?.SAR + " " + price : lable?.SAR + " " + coustomAmount}</Text>}

                    <View style={[{ flexDirection: 'row', alignItems: 'center' }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                        <Text style={{ color: COLOR.black }}>{lang == NUMBER.num0 ? " :SKU" : "SKU: "}</Text>
                        <Text style={[styles.desText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{giftCardID}</Text>
                    </View>


                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL(data?.term_and_condition?.link);
                        }}
                        style={[styles.termsCoditionView, lang == NUMBER.num0 && { flexDirection: 'row-reverse', marginRight: ResponsiveSize(20) }]}>
                        <Image style={styles.startIcon} source={{ uri: data?.term_and_condition?.icon }} />
                        <Text style={styles.termsconditionText}>{data?.term_and_condition?.title}</Text>

                    </TouchableOpacity>

                    <View style={styles.barView} />

                    <Text style={[styles.cartPriceText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{
                        lang == NUMBER.num1 ? "Card Value in SAR" : "قيمة البطاقة بالريال السعودي"}</Text>
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
                        {
                            /* <View style={styles.priceBox}>
                                <Text style={styles.priceText}>{"SAR 25"}</Text>
                            </View>
                            <View style={styles.priceBox}>
                                <Text style={styles.priceText}>{"SAR 85"}</Text>
                            </View> */
                        }
                    </View>

                    {data?.am_allow_open_amount == 1 && <Text
                        style={[
                            styles.otherAMT, lang == NUMBER.num0 &&
                            { textAlign: 'right' }]}>
                        {lang == NUMBER.num1 ? "Other amount:" : "مبلغ آخر"}</Text>}

                    {data?.am_allow_open_amount == 1 &&
                        <View style={
                            [{
                                width: "100%",
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: ResponsiveSize(10)
                            },
                            lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>

                            <TextInput
                                value={inputPrice}
                                onChangeText={(text) => { setInputPrice(text), setPrice() }}
                                placeholder=''
                                placeholderTextColor={COLOR.darkGray}
                                keyboardType='numeric'
                                style={[styles.textInputs, lang == NUMBER.num0 && { textAlign: 'right' }]}
                                returnKeyType='done'
                            />

                            <TouchableOpacity
                                onPress={() => { addWallte() }}
                                style={styles.textinputBTN}>
                                <Text style={styles.priceText}>{lang == NUMBER.num1 ? "ADD" : "أضف"}</Text>
                            </TouchableOpacity>

                        </View>}
                    <View style={[{
                        marginTop: ResponsiveSize(20),
                        flexDirection: 'row',
                        alignItems: 'center'
                    }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                        <Text style={[{ color: COLOR.darkGray, marginRight: ResponsiveSize(10) }, lang == NUMBER.num0 && { marginLeft: ResponsiveSize(10) }]}>{lang == NUMBER.num1 ? "Qty : " : "الكمية : "}</Text>
                        < Counter qty={qty} setQnt={setQty} />
                    </View>


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

                    {/* <Text style={[styles.otherAMT, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Upload your own design" : "قم بتحميل التصميم الخاص بك"}</Text>
                    <TouchableOpacity style={[styles.browsePic, lang == NUMBER.num0 && { alignSelf: 'flex-end', flexDirection: 'row-reverse' }]}>
                        <Icon name="add-a-photo" size={ResponsiveSize(30)} color={COLOR.white} />
                        <Text style={styles.browserText}>{lang == NUMBER.num1 ? "Browser" : "تصفح"}</Text>
                    </TouchableOpacity> */}
                    {/* {renderRicipint()} */}

                    {userData && <View style={styles.barView} />}


                    {userData && <View style={[{
                        flexDirection: 'row',
                        width: "100%",
                        alignItems: 'center',
                        // marginTop: ResponsiveSize(20)
                    }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                        <CheackButton preVriable={info} onPress={setInfo} />
                        <Text
                            style={[{
                                marginLeft: ResponsiveSize(10),
                                color: COLOR.black
                            }, { marginRight: ResponsiveSize(10) }]}
                        >{lang == NUMBER.num1 ? "Recipient my self" : "أنا المستلم"}</Text>

                    </View>
                    }


                    {recipientDetails?.map((item, index) => {

                        const handleUpdate = (value, fild) => {
                            const updatedDetails = recipientDetails?.map((i, detail, fild) =>
                                i === index ? { ...detail, [fild]: name } : detail
                            );
                            // setRecipientDetails(updatedDetails); // assuming setRecipientDetails is the state setter for recipientDetails
                        };

                        return (
                            <View key={index}>
                                {/* {index !== 0 &&
                                    <TouchableOpacity
                                        onPress={() => { removeData() }}
                                        style={{
                                            position: 'absolute',
                                            backgroundColor: COLOR.white,
                                            height: ResponsiveSize(40),
                                            width: ResponsiveSize(40),
                                            borderRadius: ResponsiveSize(100),
                                            top: ResponsiveSize(30),
                                            right: ResponsiveSize(5),
                                            zIndex: 100
                                        }}>
                                        <CrossICON size={ResponsiveSize(40)} name="circle-with-cross" />
                                    </TouchableOpacity>} */}
                                <View style={styles.barView} />
                                <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Your Name" : "الاسم"}</Text>
                                <View style={styles.div2} />

                                <TextFildCus
                                    disable={item?.am_giftcard_sender_name ? true : false}
                                    value={item?.am_giftcard_sender_name ? item?.am_giftcard_sender_name : name}
                                    onChange={setName}
                                    text={lang == NUMBER.num1 ? "Enter Sender Name" : "أدخل اسم المرسل"}

                                />

                                {(!item?.am_giftcard_sender_name && error && !name) &&
                                    <Text style={
                                        [styles.eerroText,
                                        lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Enter Sender Name" : "أدخل اسم المرسل"}</Text>}
                                <View style={styles.div2} />


                                <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Recipient Name" : "اسم المستلم"}</Text>
                                <View style={styles.div2} />
                                <TextFildCus
                                    disable={item?.am_giftcard_recipient_name ? true : false}

                                    value={item?.am_giftcard_recipient_name ? item?.am_giftcard_recipient_name : recipientName}
                                    onChange={setRecipientName}
                                    text={lang == NUMBER.num1 ? "Enter Recipient Name" : "أدخل اسم المستلم"}
                                />

                                {(!item?.am_giftcard_recipient_name && error && !recipientName) &&
                                    <Text style={
                                        [styles.eerroText,
                                        lang == NUMBER.num0 && { textAlign: 'right' }]}>
                                        {lang == NUMBER.num1 ? "Enter Recipient Name" : "أدخل اسم المستلم"}
                                    </Text>}


                                <View style={styles.div2} />
                                <Text style={
                                    [styles.textInputTitel,
                                    lang == NUMBER.num0 && { textAlign: 'right' }]}
                                >{lang == NUMBER.num1 ? "Recipient Email" : "البريد الإلكتروني للمستلم"}</Text>
                                <View style={styles.div2} />


                                <TextFildCus
                                    disable={item?.am_giftcard_recipient_email ? true : false}
                                    value={item?.am_giftcard_recipient_email ? item?.am_giftcard_recipient_email : recipientEmail}
                                    onChange={setRecipientEmail}
                                    text={lang == NUMBER.num1 ? "Enter Recipient Email - optional" : "عنوان البريد الإلكتروني - اختياري"}
                                />
                                {/* {(!item?.am_giftcard_recipient_email && error && !recipientEmail) && <Text style={[styles.eerroText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Enter Recipient Email" : "عنوان البريد الإلكتروني"}</Text>} */}



                                <View style={styles.div2} />
                                <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Recipient Mobile Number" : "هاتف المستلم"}</Text>
                                <View style={styles.div2} />
                                <TextFildCus
                                    disable={item?.mobilenumber ? true : false}
                                    number={true}
                                    value={item?.mobilenumber ? item?.mobilenumber : recipientNumber}
                                    onChange={setRecipientNumber}
                                    // text={lang == NUMBER.num1 ? "Enter Recipient Mobile Number" : "رقم جوال المستلم"} 
                                    text={"05XXXXXXXX"}
                                />
                                {(!item?.mobilenumber && error && !recipientNumber) &&
                                    <Text style={[styles.eerroText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Enter Recipient Mobile Number" : "رقم جوال المستلم"}</Text>}


                                <View style={styles.div2} />
                                <Text style={[styles.textInputTitel, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Message" : "رسالة"}</Text>
                                <View style={styles.div2} />

                                <TextInput
                                    value={item?.am_giftcard_message ? item?.am_giftcard_message : message}
                                    editable={item?.am_giftcard_message ? false : true}
                                    onChangeText={(text) => { setMessage(text) }}
                                    textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
                                    multiline={true}
                                    blurOnSubmit={true}
                                    placeholder={lang == NUMBER.num1 ? 'Enter message - optional' : " أدخل رسالتك - اختياري"}
                                    placeholderTextColor={COLOR.darkGray}
                                    style={styles.messTextInput}

                                    returnKeyType='done'
                                    onSubmitEditing={() => {
                                        Keyboard.dismiss();
                                        console.log('Done button pressed');
                                    }}

                                />
                                {/* {(!item?.am_giftcard_message && error && !message) && <Text style={[styles.eerroText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? 'Enter your message' : "أدخل رسالتك"}</Text>} */}

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
                    <Text style={[styles.otherAMT, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lang == NUMBER.num1 ? "Schedule delivery" : "جدولة التسليم"}</Text>

                    <View style={[{ flexDirection: 'row', width: "100%", }, lang == NUMBER.num0 && { alignItems: 'flex-end' }]}>

                        <TouchableOpacity
                            onPress={() => { setOnData(1) }}
                            style={[styles.cheackboxView, lang == NUMBER.num0 && { flexDirection: 'row-reverse', }]}>
                            <View style={[styles.roundView, ondata == 0 && { borderWidth: ResponsiveSize(1) },]} />
                            <Text style={[styles.checktext, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>{lang == NUMBER.num1 ? "Send now" : "أرسل الآن"}</Text>
                        </TouchableOpacity>
                        {/* 

                        <TouchableOpacity
                            onPress={() => { setOnData(0) }}
                            style={[styles.cheackboxView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                            <View style={[styles.roundView, ondata == 1 && { borderWidth: ResponsiveSize(1) },]} />
                            <Text style={[styles.checktext, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>{lang == NUMBER.num1 ? "Send later" : "إرسال لاحقاً"}</Text>
                        </TouchableOpacity> */}

                    </View>

                    <View style={styles.barView} />

                    <View style={[styles.btnConatainer, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>

                        {/* <TouchableOpacity
                            onPress={() => { }}
                            style={styles.likeBtn}>
                            <Icon2 name={ICON.hearto} size={ResponsiveSize(30)} color={COLOR.primaray} />

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { }}
                            style={styles.shareBtn}>
                            <Icon2 name={"sharealt"} size={ResponsiveSize(30)} color={COLOR.primaray} />
                        </TouchableOpacity> */}

                        <TouchableOpacity
                            onPress={() => { userData ? onAddTocart() : navigation.navigate(NAVIGATION.Login, { type: true }) }}
                            style={styles.AddToCartBtn}>
                            <Text style={styles.AddTocardText}>{lang == NUMBER.num1 ? "Add to cart" : "إضافة إلى عربة التسوق"}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ height: ResponsiveSize(200) }} />

            </KeyboardAwareScrollView>


            {isLoadding &&
                <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
                    <CusLoader />
                </View>
            }




        </View>
    )
}

export default GiftCart

