import {
    Image,
    Keyboard,
    Linking,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import React from 'react'
import { styles } from './giftcart.style'
import Slider from '../../components/Slider'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR } from '../../constants/style'
import TextFildCus from '../../components/TextFildCus'
import useGiftHook from './gift.hook'
import { EXTRASTR, NAVIGATION, NUMBER } from '../../constants/constants'
import CommanHeader from '../../components/ComanHeader'
import CusLoader from '../../components/CustomLoader'
import { Ar, En } from '../../constants/localization'
import Counter from '../../components/Counter'
import CheackButton from '../../components/CheackButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CrossICON from 'react-native-vector-icons/dist/Entypo';
import SAR from '../../components/SAR/Index'



const GiftCart = (props) => {

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
        setPrice,
        selectIndex,
        error
    } = useGiftHook(props)


    const lable = lang == NUMBER.num0 ? Ar : En


    const tempRecipient = recipientDetails.sort((a, b) => {
        const aIsEmpty = (
            a.am_giftcard_recipient_email === undefined &&
            a.am_giftcard_message === undefined &&
            a.am_giftcard_recipient_name === undefined &&
            a.am_giftcard_sender_name === undefined &&
            a.mobilenumber === undefined
        );

        const bIsEmpty = (
            b.am_giftcard_recipient_email === undefined &&
            b.am_giftcard_message === undefined &&
            b.am_giftcard_recipient_name === undefined &&
            b.am_giftcard_sender_name === undefined &&
            b.mobilenumber === undefined
        );

        if (aIsEmpty && !bIsEmpty) return 1;
        if (!aIsEmpty && bIsEmpty) return -1;

        return new Date(a.date) - new Date(b.date);
    });


    return (
        <View style={styles.mainView}>
            <CommanHeader
                navigation={navigation}
                lang={lang}
            />

            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="handled"
                style={styles.containerView}>
                <View
                    style={styles.sliderView}>
                    <Slider
                        data={slider}
                        height={ResponsiveSize(300)}
                        home={true}
                    />
                </View>
                <View style={[{ paddingHorizontal: ResponsiveSize(25) }]}>

                    <Text
                        style={[
                            styles.titelText,
                            lang == NUMBER.num0 && {
                                textAlign: EXTRASTR.right
                            }
                        ]}>
                        {data?.name.toUpperCase()}

                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            const reviewLink = "https://alharamstores.com/alharam-gift-cards.html#review-form"
                            Linking.openURL(reviewLink);
                        }}
                    >
                        <Text style={[
                            styles.desText,
                            lang == NUMBER.num0 && {
                                textAlign: EXTRASTR.right
                            }]}>{lang == NUMBER.num1 ?
                                "Be the first to review this product"
                                : "قيمة البطاقة بالريال السعودي"}
                        </Text>

                    </TouchableOpacity>

                    {(!price && !coustomAmount) && <View style={{ height: ResponsiveSize(40) }} />}

                    {(price || coustomAmount) &&
                        <View style={[{
                            flexDirection: ALINE.row,
                            alignItems: ALINE.center
                        }, { justifyContent: lang == NUMBER.num0 ? 'flex-end' : 'flex-start' }]}>
                            <Image
                                style={{
                                    height: ResponsiveSize(40),
                                    width: ResponsiveSize(40),
                                    resizeMode: 'contain',
                                    tintColor: COLOR.primaray
                                }}
                                source={require('../../assests/images/Common/SAR.png')}
                            />
                            <View style={{ width: ResponsiveSize(5) }} />
                            {price &&
                                <Text
                                    style={[
                                        styles.priceText1,
                                        lang == NUMBER.num0 && {
                                            textAlign: EXTRASTR.right
                                        }]}>
                                    {price}
                                </Text>
                            }
                            {coustomAmount
                                && <Text
                                    style={[
                                        styles.priceText1,
                                        lang == NUMBER.num0 && {
                                            textAlign: EXTRASTR.right
                                        }]
                                    }>
                                    {coustomAmount}
                                </Text>
                            }
                        </View>
                    }



                    <View
                        style={[
                            {
                                flexDirection: ALINE.row,
                                alignItems: ALINE.center
                            },
                            lang == NUMBER.num0 && {

                                flexDirection: ALINE.rowreverse

                            }
                        ]}>

                        <Text
                            style={{ color: COLOR.black }}>
                            {lang == NUMBER.num0 ? " :SKU" : "SKU: "}
                        </Text>

                        <Text
                            style={[
                                styles.desText,
                                lang == NUMBER.num0 && {
                                    textAlign: EXTRASTR.right
                                }
                            ]}>
                            {giftCardID}
                        </Text>
                    </View>


                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL(data?.term_and_condition?.link);
                        }}
                        style={[
                            styles.termsCoditionView,
                            lang == NUMBER.num0 && {

                                flexDirection: ALINE.rowreverse
                                ,
                                marginRight: ResponsiveSize(20)
                            }
                        ]}>
                        <Image
                            style={styles.startIcon}
                            source={{ uri: data?.term_and_condition?.icon }}
                        />
                        <Text
                            style={styles.termsconditionText}>
                            {data?.term_and_condition?.title}
                        </Text>

                    </TouchableOpacity>

                    {data?.note && <View style={styles.barView} />}
                    {data?.note &&
                        <Text style={[{
                            color: COLOR.primaray,
                            fontSize: ResponsiveSize(20),
                            paddingVertical: ResponsiveSize(10)
                        }, lang == NUMBER.num0 && {
                            textAlign: EXTRASTR.right
                        }]}>
                            {data?.note}
                        </Text>
                    }

                    <View style={styles.barView} />


                    <Text
                        style={[
                            styles.cartPriceText,
                            lang == NUMBER.num0 && {
                                textAlign: EXTRASTR.right
                            }]}>{
                            lang == NUMBER.num1 ? "Card Value in SAR" : "قيمة البطاقة بالريال السعودي"}
                    </Text>

                    <View
                        style={[
                            styles.priceContainer,
                            lang == NUMBER.num0 && {

                                flexDirection: ALINE.rowreverse

                            }
                        ]}>

                        {data?.am_giftcard_prices?.map((items, index) => {

                            return (
                                <View
                                    style={{ padding: ResponsiveSize(5) }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            pricvePress(index, items?.value)
                                        }}
                                        style={[
                                            styles.priceBox,
                                            selectIndex == index && {
                                                backgroundColor: COLOR.primaray
                                            }]}>
                                        <SAR
                                            normal={true}
                                            price={items?.value}
                                            tintColor={selectIndex == index ? COLOR.white : COLOR.black}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                        }

                    </View>

                    {data?.am_allow_open_amount == 1 &&
                        <Text
                            style={[
                                styles.otherAMT,
                                lang == NUMBER.num0 && {
                                    textAlign: EXTRASTR.right
                                }
                            ]}>
                            {lang == NUMBER.num1 ? "Other amount:" : "مبلغ آخر"}
                        </Text>
                    }

                    {data?.am_allow_open_amount == 1 &&
                        <View style={
                            [{
                                width: "100%",
                                flexDirection: ALINE.row,
                                justifyContent: 'space-between',
                                marginTop: ResponsiveSize(10)
                            },
                            lang == NUMBER.num0 && {
                                flexDirection: ALINE.rowreverse

                            }]}>

                            <TextInput
                                value={inputPrice}
                                onChangeText={(text) => { setInputPrice(text), setPrice() }}
                                placeholder=''
                                placeholderTextColor={COLOR.darkGray}
                                keyboardType='numeric'
                                style={[styles.textInputs, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}
                                returnKeyType='done'
                            />

                            <TouchableOpacity
                                onPress={() => { addWallte() }}
                                style={styles.textinputBTN}>
                                <Text
                                    style={styles.priceText}>
                                    {lang == NUMBER.num1 ? "ADD" : "أضف"}
                                </Text>
                            </TouchableOpacity>

                        </View>}
                    <View style={[{
                        marginTop: ResponsiveSize(20),
                        flexDirection: ALINE.row,
                        alignItems: ALINE.center
                    }, lang == NUMBER.num0 && {
                        flexDirection: ALINE.rowreverse
                    }]}>
                        <Text
                            style={[
                                {
                                    color: COLOR.darkGray,
                                    marginRight: ResponsiveSize(10)
                                },
                                lang == NUMBER.num0 && {
                                    marginLeft: ResponsiveSize(10)
                                }]}>
                            {lang == NUMBER.num1 ? "Qty : " : "الكمية : "}
                        </Text>

                        < Counter
                            qty={qty}
                            setQnt={setQty}
                        />
                    </View>


                    {/* {renderRicipint()} */}

                    {userData && <View style={styles.barView} />}


                    {userData &&
                        <View style={[{
                            flexDirection: ALINE.row,
                            width: "100%",
                            alignItems: ALINE.center,
                        }, lang == NUMBER.num0 && {

                            flexDirection: ALINE.rowreverse

                        }
                        ]}>
                            <CheackButton
                                preVriable={info}
                                onPress={setInfo}
                            />

                            <Text
                                style={[{
                                    marginLeft: ResponsiveSize(10),
                                    color: COLOR.black
                                }, { marginRight: ResponsiveSize(10) }]}
                            >{lang == NUMBER.num1 ? "Recipient my self" : "أنا المستلم"}
                            </Text>

                        </View>
                    }


                    {tempRecipient?.map((item, index) => {


                        return (
                            <View key={index}>
                                {index !== 0 &&
                                    <TouchableOpacity
                                        onPress={() => { removeData(item?.date) }}
                                        style={[{
                                            position: 'absolute',
                                            backgroundColor: COLOR.white,
                                            height: ResponsiveSize(40),
                                            width: ResponsiveSize(40),
                                            borderRadius: ResponsiveSize(100),
                                            top: ResponsiveSize(30),
                                            zIndex: 100
                                        }, lang == NUMBER.num1 && { right: ResponsiveSize(1) }]}>

                                        <CrossICON
                                            size={ResponsiveSize(40)}
                                            name="circle-with-cross"
                                            color={COLOR.black}
                                        />

                                    </TouchableOpacity>
                                }

                                <View style={styles.barView} />

                                <Text style={[
                                    styles.textInputTitel,
                                    lang == NUMBER.num0 && {
                                        textAlign: EXTRASTR.right
                                    }
                                ]}>
                                    {lang == NUMBER.num1 ? "Your Name" : "الاسم"}
                                </Text>

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
                                        lang == NUMBER.num0 && {
                                            textAlign: EXTRASTR.right
                                        }
                                        ]}>
                                        {lang == NUMBER.num1 ? "Enter Sender Name" : "أدخل اسم المرسل"}
                                    </Text>
                                }
                                <View style={styles.div2} />


                                <Text
                                    style={[
                                        styles.textInputTitel,
                                        lang == NUMBER.num0 && {
                                            textAlign: EXTRASTR.right
                                        }
                                    ]}>
                                    {lang == NUMBER.num1 ? "Recipient Name" : "اسم المستلم"}
                                </Text>

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
                                        lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>
                                        {lang == NUMBER.num1 ? "Enter Recipient Name" : "أدخل اسم المستلم"}
                                    </Text>}


                                <View style={styles.div2} />

                                <Text style={
                                    [styles.textInputTitel,
                                    lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}
                                >
                                    {lang == NUMBER.num1 ? "Recipient Email" : "البريد الإلكتروني للمستلم"}
                                </Text>

                                <View style={styles.div2} />

                                <TextFildCus
                                    disable={item?.am_giftcard_recipient_email ? true : false}
                                    value={item?.am_giftcard_recipient_email ? item?.am_giftcard_recipient_email : recipientEmail}
                                    onChange={setRecipientEmail}
                                    text={lang == NUMBER.num1 ? "Enter Recipient Email - optional" : "عنوان البريد الإلكتروني - اختياري"}
                                />

                                <View style={styles.div2} />

                                <Text
                                    style={[
                                        styles.textInputTitel,
                                        lang == NUMBER.num0 && {
                                            textAlign: EXTRASTR.right
                                        }
                                    ]}>
                                    {lang == NUMBER.num1 ? "Recipient Mobile Number" : "هاتف المستلم"}
                                </Text>

                                <View style={styles.div2} />

                                <TextFildCus
                                    disable={item?.mobilenumber ? true : false}
                                    number={true}
                                    value={item?.mobilenumber ? item?.mobilenumber : recipientNumber}
                                    onChange={setRecipientNumber}
                                    text={"05XXXXXXXX"}
                                />
                                {
                                    (!item?.mobilenumber && error && !recipientNumber) &&
                                    <Text
                                        style={[
                                            styles.eerroText,
                                            lang == NUMBER.num0 &&
                                            {
                                                textAlign: EXTRASTR.right
                                            }
                                        ]}>
                                        {lang == NUMBER.num1 ? "Enter Recipient Mobile Number" : "رقم جوال المستلم"}
                                    </Text>
                                }


                                <View style={styles.div2} />
                                <Text style={[
                                    styles.textInputTitel,
                                    lang == NUMBER.num0 && {
                                        textAlign: EXTRASTR.right
                                    }
                                ]}>
                                    {lang == NUMBER.num1 ? "Message" : "رسالة"}
                                </Text>

                                <View style={styles.div2} />

                                <TextInput
                                    value={item?.am_giftcard_message ? item?.am_giftcard_message : message}
                                    editable={item?.am_giftcard_message ? false : true}
                                    onChangeText={(text) => { setMessage(text) }}
                                    textAlign={lang == NUMBER.num0 ? EXTRASTR.right : 'left'}
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
                                <View style={styles.div2} />
                            </View>
                        )
                    })}


                    <TouchableOpacity
                        onPress={() => { onRecipientPress() }}
                        style={styles.addTonewRecipintView} >
                        <Text
                            style={styles.addnewRecipintText}>
                            {lang == NUMBER.num1 ? "+ Add New Recipient" : "إضافة مستلم جديد"}
                        </Text>

                    </TouchableOpacity>

                    <View style={styles.barView} />
                    <Text
                        style={[
                            styles.otherAMT,
                            lang == NUMBER.num0 && {
                                textAlign: EXTRASTR.right
                            }
                        ]}>
                        {lang == NUMBER.num1 ? "Schedule delivery" : "جدولة التسليم"}
                    </Text>

                    <View
                        style={[
                            {
                                // flexDirection: ALINE.row,
                                width: "100%",
                            },
                            lang == NUMBER.num0 && {
                                alignItems: 'flex-end'
                            }]}>

                        <TouchableOpacity
                            onPress={() => { setOnData(1) }}
                            style={[
                                styles.cheackboxView,
                                lang == NUMBER.num0 && {

                                    flexDirection: ALINE.rowreverse
                                    ,
                                }
                            ]}>

                            <View
                                style={[
                                    styles.roundView,
                                    ondata == 0 && {
                                        borderWidth: ResponsiveSize(1)
                                    },
                                ]} />
                            <Text
                                style={[
                                    styles.checktext,
                                    lang == NUMBER.num0 && {
                                        marginRight: ResponsiveSize(20)
                                    }]}>
                                {lang == NUMBER.num1 ? "Send now" : "أرسل الآن"}
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                userData ?
                                    onAddTocart() :
                                    navigation.navigate(NAVIGATION.Login, { type: true })
                            }}
                            style={styles.AddToCartBtn}>
                            <Text
                                style={styles.AddTocardText}>
                                {lang == NUMBER.num1 ? "Add to cart" : "إضافة إلى عربة التسوق"}
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View
                    style={{ height: ResponsiveSize(200) }}
                />

            </KeyboardAwareScrollView>


            {isLoadding &&
                <View style={{
                    height: "100%",
                    width: "100%",
                    position: 'absolute'
                }}>
                    <CusLoader />
                </View>
            }




        </View>
    )
}

export default GiftCart

