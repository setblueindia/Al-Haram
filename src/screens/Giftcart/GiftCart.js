import { Image, Keyboard, Linking, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
        setPrice,
        selectIndex,
        error
    } = useGiftHook(props)


    const lable = lang == NUMBER.num0 ? Ar : En



    return (
        <View style={styles.mainView}>

            <CommanHeader
                navigation={navigation}
                lang={lang}
            />

            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="handled"
                style={styles.containerView}
            >
                <View style={styles.sliderView}>
                    <Slider
                        data={slider}
                        height={ResponsiveSize(300)}
                        home={true}
                    />
                </View>

                <View style={[{ paddingHorizontal: ResponsiveSize(25) }]}>
                    <Text
                        style={
                            [styles.titelText,
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
                        <Text
                            style={[styles.desText,
                            lang == NUMBER.num0 && {
                                textAlign: EXTRASTR.right
                            }]}
                        >
                            {lable?.Bethefirsttoreviewthisproduct}
                        </Text>

                    </TouchableOpacity>

                    {(!price && !coustomAmount) &&
                        <View
                            style={{ height: ResponsiveSize(40) }}
                        />
                    }

                    {/* ADD IMG */}
                    {(price || coustomAmount) &&
                        <View style={[
                            {
                                flexDirection: ALINE.row,
                                alignItems: ALINE.center
                            },
                            { justifyContent: lang == NUMBER.num0 ? ALINE.flexend : ALINE.flexstart }]}>
                            <Image
                                style={styles.CurrancyImg}
                                source={require('../../assets/images/Common/SAR.png')}
                            />
                            <View style={{ width: ResponsiveSize(5) }} />
                            {price &&
                                <Text style={[
                                    styles.priceText1,
                                    lang == NUMBER.num0 && {
                                        textAlign: EXTRASTR.right
                                    }
                                ]}>
                                    {price}
                                </Text>
                            }
                            {coustomAmount &&
                                <Text style={[
                                    styles.priceText1,
                                    lang == NUMBER.num0 && {
                                        textAlign: EXTRASTR.right
                                    }
                                ]}>
                                    {coustomAmount}
                                </Text>
                            }
                        </View>
                    }



                    <View style={[
                        {
                            flexDirection: ALINE.row,
                            alignItems: ALINE.center
                        },
                        lang == NUMBER.num0 && {
                            flexDirection: ALINE.rowreverse
                        }
                    ]}>
                        <Text
                            style={styles.SKUText}>
                            {lang == NUMBER.num0 ? " : SKU" : "SKU : "}
                        </Text>
                        <Text
                            style={[
                                styles.desText,
                                lang == NUMBER.num0 && {
                                    textAlign: EXTRASTR.right
                                }]}>
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
                                flexDirection: ALINE.rowreverse,
                                marginRight: ResponsiveSize(20)
                            }]}>
                        <Image
                            style={styles.startIcon}
                            source={{ uri: data?.term_and_condition?.icon }}
                        />
                        <Text
                            style={styles.termsconditionText}>
                            {` ${data?.term_and_condition?.title} `}
                        </Text>

                    </TouchableOpacity>

                    {data?.note && <View style={styles.barView} />}

                    {data?.note &&
                        <Text style={[
                            styles.NoteText,
                            lang == NUMBER.num0 && {
                                textAlign: EXTRASTR.right
                            }]}>
                            {data?.note}
                        </Text>}

                    <View style={styles.barView} />


                    <Text style={[
                        styles.cartPriceText,
                        lang == NUMBER.num0 && {
                            textAlign: EXTRASTR.right
                        }]}>
                        {lable?.CardValueinSAR}
                    </Text>

                    <View style={[
                        styles.priceContainer,
                        lang == NUMBER.num0 && {
                            flexDirection: ALINE.rowreverse
                        }]}>

                        {data?.am_giftcard_prices?.map((items, index) => {

                            return (
                                <View style={{ padding: ResponsiveSize(5) }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            pricvePress(index, items?.value)
                                        }}
                                        style={[
                                            styles.priceBox,
                                            selectIndex == index && {
                                                backgroundColor: COLOR.primaray
                                            }
                                        ]}>
                                        <SAR
                                            normal={true}
                                            price={items?.value}
                                            tintColor={selectIndex == index ? COLOR.white : COLOR.black} />
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                        }
                    </View>

                    {
                        data?.am_allow_open_amount == 1 &&
                        <Text
                            style={[
                                styles.otherAMT, lang == NUMBER.num0 &&
                                { textAlign: EXTRASTR.right }
                            ]}>
                            {lable?.Otheramount}
                        </Text>
                    }

                    {
                        data?.am_allow_open_amount == 1 &&
                        <View style={
                            [styles.OtherAmountTextInput,
                            lang == NUMBER.num0 && {
                                flexDirection: ALINE.rowreverse
                            }]}
                        >

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
                                <Text style={styles.priceText}>{lang == NUMBER.num1 ? "ADD" : "أضف"}</Text>
                            </TouchableOpacity>

                        </View>
                    }

                    <View style={[
                        styles.CounterView,
                        lang == NUMBER.num0 && {
                            flexDirection: ALINE.rowreverse
                        }
                    ]}>
                        <Text style={[
                            styles.CounterText,
                            lang == NUMBER.num0 && {
                                marginLeft: ResponsiveSize(10)
                            }]}>
                            {lable?.Qty}
                        </Text>
                        < Counter
                            qty={qty}
                            setQnt={setQty}
                        />
                    </View>

                    {userData && <View style={styles.barView} />}

                    {userData &&
                        <View
                            style={[
                                styles.RecipientView,
                                lang == NUMBER.num0 && {
                                    flexDirection: ALINE.rowreverse
                                }
                            ]}>

                            <CheackButton
                                preVriable={info}
                                onPress={setInfo}
                            />

                            <Text
                                style={[
                                    styles.RecipientText,
                                    lang == NUMBER.num0 && {
                                        marginRight: ResponsiveSize(10)
                                    }]}
                            >{lable?.Recipientmyself}</Text>

                        </View>
                    }


                    {
                        recipientDetails?.map((item, index) => {
                            return (
                                <View key={index}>
                                    <View style={styles.barView} />

                                    <Text
                                        style={[
                                            styles.textInputTitel,
                                            lang == NUMBER.num0 && {
                                                textAlign: EXTRASTR.right
                                            }]}>
                                        {lable?.YourName}
                                    </Text>

                                    <View style={styles.div2} />

                                    <TextFildCus
                                        disable={item?.am_giftcard_sender_name ? true : false}
                                        value={item?.am_giftcard_sender_name ? item?.am_giftcard_sender_name : name}
                                        onChange={setName}
                                        text={lable?.EnterSenderName}
                                    />

                                    {
                                        (!item?.am_giftcard_sender_name && error && !name) &&
                                        <Text style={
                                            [styles.eerroText,
                                            lang == NUMBER.num0 && {
                                                textAlign: EXTRASTR.right
                                            }]}>
                                            {lable?.EnterSenderName}
                                        </Text>
                                    }

                                    <View style={styles.div2} />


                                    <Text
                                        style={[
                                            styles.textInputTitel,
                                            lang == NUMBER.num0 && {
                                                textAlign: EXTRASTR.right
                                            }
                                        ]}>{lable?.RecipientName}
                                    </Text>

                                    <View style={styles.div2} />

                                    <TextFildCus
                                        disable={item?.am_giftcard_recipient_name ? true : false}
                                        value={item?.am_giftcard_recipient_name ? item?.am_giftcard_recipient_name : recipientName}
                                        onChange={setRecipientName}
                                        text={lable?.EnterRecipientName}
                                    />

                                    {
                                        (!item?.am_giftcard_recipient_name && error && !recipientName) &&
                                        <Text style={
                                            [styles.eerroText,
                                            lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>
                                            {lable?.EnterRecipientName}
                                        </Text>
                                    }

                                    <View style={styles.div2} />

                                    <Text style={
                                        [styles.textInputTitel,
                                        lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}
                                    >{lable?.RecipientEmail}
                                    </Text>

                                    <View style={styles.div2} />

                                    <TextFildCus
                                        disable={item?.am_giftcard_recipient_email ? true : false}
                                        value={item?.am_giftcard_recipient_email ? item?.am_giftcard_recipient_email : recipientEmail}
                                        onChange={setRecipientEmail}
                                        text={lable?.EnterRecipientEmailoptional}
                                    />


                                    <View style={styles.div2} />


                                    <Text style={[
                                        styles.textInputTitel,
                                        lang == NUMBER.num0 && {
                                            textAlign: EXTRASTR.right
                                        }]}>
                                        {lable?.RecipientMobileNumber}
                                    </Text>

                                    <View style={styles.div2} />

                                    <TextFildCus
                                        disable={item?.mobilenumber ? true : false}
                                        number={true}
                                        value={item?.mobilenumber ? item?.mobilenumber : recipientNumber}
                                        onChange={setRecipientNumber}
                                        text={"05XXXXXXXX"}
                                    />
                                    {(!item?.mobilenumber && error && !recipientNumber) &&
                                        <Text
                                            style={[
                                                styles.eerroText,
                                                lang == NUMBER.num0 && {
                                                    textAlign: EXTRASTR.right
                                                }
                                            ]}>
                                            {lable?.EnterRecipientMobileNumber}
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
                                        {lable?.Message}
                                    </Text>

                                    <View style={styles.div2} />

                                    <TextInput
                                        value={item?.am_giftcard_message ? item?.am_giftcard_message : message}
                                        editable={item?.am_giftcard_message ? false : true}
                                        onChangeText={(text) => { setMessage(text) }}
                                        textAlign={lang == NUMBER.num0 ? EXTRASTR.right : EXTRASTR.left}
                                        multiline={true}
                                        blurOnSubmit={true}
                                        placeholder={lable?.Entermessageoptional}
                                        placeholderTextColor={COLOR.darkGray}
                                        style={styles.messTextInput}
                                        returnKeyType='done'
                                        onSubmitEditing={() => {
                                            Keyboard.dismiss();
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
                            {lable?.AddNewRecipient}
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.barView} />

                    <Text style={[
                        styles.otherAMT,
                        lang == NUMBER.num0 && {
                            textAlign: EXTRASTR.right
                        }]}>
                        {lable?.Scheduledelivery}
                    </Text>

                    <View style={[
                        {
                            flexDirection: ALINE.row,
                            width: "100%",
                        }, lang == NUMBER.num0 && {
                            alignItems: ALINE.flexend
                        }]}>

                        <TouchableOpacity
                            onPress={() => { setOnData(1) }}
                            style={[styles.cheackboxView,
                            lang == NUMBER.num0 && {
                                flexDirection: ALINE.rowreverse,
                            }]}>
                            <View style={[
                                styles.roundView,
                                ondata == 0 && {
                                    borderWidth: ResponsiveSize(1)
                                }]} />
                            <Text style={[
                                styles.checktext,
                                lang == NUMBER.num0 && {
                                    marginRight: ResponsiveSize(20)
                                }]}>{lable?.Sendnow}
                            </Text>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.barView} />

                    <View style={[
                        styles.btnConatainer,
                        lang == NUMBER.num0 && {
                            flexDirection: ALINE.rowreverse
                        }
                    ]}>

                        <TouchableOpacity
                            onPress={() => {
                                userData ? onAddTocart() : navigation.navigate(NAVIGATION.Login, { type: true })
                            }}
                            style={styles.AddToCartBtn}>
                            <Text
                                style={styles.AddTocardText}>
                                {lable?.Addtocart}
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{ height: ResponsiveSize(200) }} />

            </KeyboardAwareScrollView >


            {isLoadding &&
                <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
                    <CusLoader />
                </View>
            }




        </View >
    )
}

export default GiftCart

