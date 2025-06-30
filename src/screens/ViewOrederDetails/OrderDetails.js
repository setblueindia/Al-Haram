import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import { styles } from './orderDeatils.style'
import useOrderDetaisHook from './OrderDetails.hook'
import { ALINE, COLOR, RESIZEMODE } from '../../constants/style'
import { ResponsiveSize, SHOWTOTS, StatusColor } from '../../utils/utils'
import { EXTRASTR, NAVIGATION, NUMBER } from '../../constants/constants'
import Button from '../../components/Button'
import CusLoader from '../../components/CustomLoader'
import FastImage from 'react-native-fast-image'
import Review from '../Review/Review'
import Reviewpoupp from '../../components/Reviewpoupp'
import SAR from '../../components/SAR/Index'
import { Image } from 'react-native-animatable'

const OrderDetails = (props) => {
    const {
        navigation,
        lang,
        trackingNumber,
        data,
        lable,
        isLoadding,
        orderDetailsList,
        ReOrder,
        OId,
        review,
        setReview
    } = useOrderDetaisHook(props)

    const address1 = orderDetailsList?.shippingaddress?.street[0] ? orderDetailsList?.shippingaddress?.street[0] + " " : ""
    const address2 = orderDetailsList?.shippingaddress?.street[1] ? orderDetailsList?.shippingaddress?.street[1] + " " : ""
    const address3 = orderDetailsList?.shippingaddress?.street[2] ? orderDetailsList?.shippingaddress?.street[2] + " " : ""

    const shippongAddress = address1 + address2 + address3

    const baddress1 = orderDetailsList?.billingaddress?.street[0] ? orderDetailsList?.billingaddress?.street[0] + " " : " "
    const baddress2 = orderDetailsList?.billingaddress?.street[1] ? orderDetailsList?.billingaddress?.street[1] + " " : " "
    const baddress3 = orderDetailsList?.billingaddress?.street[2] ? orderDetailsList?.billingaddress?.street[2] + " " : " "

    const billingAddress = baddress1 + baddress2 + baddress3

    const invocieNumber = orderDetailsList?.invoice_no


    return (
        <View style={styles.mainView}>

            <CommanHeader
                name={lable?.ViewOrder}
                navigation={navigation}
                lang={lang}
            />

            {(data && !isLoadding) &&

                <ScrollView style={styles.containView}>

                    <View style={styles.firstView}>
                        <View style={
                            [styles.OrderHeader,
                            lang == NUMBER.num0 && {
                                flexDirection: ALINE?.rowreverse
                            }
                            ]}
                        >
                            <View style={{ flex: 1 }}>

                                <View
                                    style={
                                        [styles.headerTopView,
                                        lang == NUMBER.num0 && {
                                            flexDirection: ALINE?.rowreverse
                                        }]}
                                >
                                    <View>
                                        <Text
                                            style={[
                                                styles.orderTexrt,
                                                lang == NUMBER.num0 && {
                                                    textAlign: EXTRASTR.right
                                                }]}>
                                            {orderDetailsList?.increment_id ? "#" + orderDetailsList?.increment_id : " "}
                                        </Text>

                                        <View style={[styles.StatusView, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                                            <View style={[
                                                styles.DottView,
                                                { backgroundColor: StatusColor(orderDetailsList?.status) }
                                            ]}>

                                            </View>
                                            <Text style={[
                                                styles.statusText,
                                                lang == NUMBER.num0 && {
                                                    marginRight: ResponsiveSize(10),
                                                    textAlign: EXTRASTR.right
                                                },
                                                { color: StatusColor(orderDetailsList?.status) }
                                            ]}>
                                                {orderDetailsList?.status_display}
                                            </Text>

                                        </View>
                                    </View>


                                    {invocieNumber?.length > 0 &&
                                        <View style={{
                                            width: ResponsiveSize(250),
                                        }}>
                                            <Text style={
                                                [styles.invocieText,
                                                lang == NUMBER.num0 && {
                                                    textAlign: EXTRASTR.left
                                                }]}>
                                                {lable?.InvoiceNo}
                                            </Text>

                                            <View
                                                style={[
                                                    styles.invocieNumberView,
                                                    lang == NUMBER.num0 && {
                                                        flexDirection: ALINE?.rowreverse
                                                    }]}>

                                                {invocieNumber?.length > 0 &&
                                                    invocieNumber?.map((item, index) => {
                                                        return (
                                                            <View
                                                                key={index}
                                                                style={{
                                                                    flexDirection: ALINE.row
                                                                }}>
                                                                <Text
                                                                    style={styles.invocieNumber}>
                                                                    {item}
                                                                </Text>

                                                                {invocieNumber?.length > index + 1 &&
                                                                    <Text
                                                                        style={styles.invocieNumber}>
                                                                        {", "}
                                                                    </Text>}
                                                            </View>
                                                        )
                                                    })}
                                            </View>
                                        </View>
                                    }

                                </View>



                                <View style={[
                                    styles.headerlastView,
                                    lang == NUMBER.num0 && {
                                        flexDirection: ALINE?.rowreverse
                                    }]}>

                                    <Text
                                        style={[styles.dateTextOrder,
                                        lang == NUMBER.num0 && {
                                            textAlign: EXTRASTR.right
                                        }]}>
                                        {orderDetailsList?.created_at}
                                    </Text>

                                    <View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                ReOrder()
                                            }}
                                        >
                                            <Text style={[
                                                styles.reOrderText,
                                                lang == NUMBER.num0 && {
                                                    textAlign: EXTRASTR?.left
                                                }]}>
                                                {data?.Reorder}
                                            </Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                        </View>




                        <View
                            style={[
                                styles.itemsDetaisCommon,
                                lang == NUMBER.num0 && {
                                    justifyContent: ALINE.flexend
                                }]}>
                            <Text
                                style={styles.headerText}>
                                {data?.ItemsOrdered}
                            </Text>
                        </View>
                        <View style={styles.orderDetails}>
                            {
                                orderDetailsList?.items?.length > 0 &&
                                orderDetailsList?.items?.map((items, index) => {

                                    return (
                                        <View key={index}>

                                            <View style={styles.topListView} >

                                                <View
                                                    style={[
                                                        styles.itemsList,
                                                        lang == NUMBER.num0 && {
                                                            flexDirection: ALINE?.rowreverse
                                                        }]}>
                                                    <View
                                                        style={[
                                                            styles.firstOne,
                                                            lang == NUMBER.num0 && {
                                                                flexDirection: ALINE.rowreverse
                                                            }]}>

                                                        <View style={styles.imgeView}>
                                                            <FastImage
                                                                resizeMode={RESIZEMODE.contain}
                                                                style={styles.productImg}
                                                                source={{ uri: items?.image }}
                                                            />
                                                        </View>

                                                        <View style={styles.nameView}>
                                                            <Text
                                                                numberOfLines={2}
                                                                style={[styles.orderNameText,
                                                                lang == NUMBER.num0 && {
                                                                    textAlign: EXTRASTR.right
                                                                }]} >
                                                                {items?.name}
                                                            </Text>

                                                            {items?.color &&
                                                                <View style={[
                                                                    {
                                                                        flexDirection: ALINE.row,
                                                                        marginTop: ResponsiveSize(5)
                                                                    },
                                                                    lang == NUMBER.num0 && {
                                                                        flexDirection: ALINE.rowreverse
                                                                    }]}>

                                                                    <Text style={styles.titleText}>{lable?.color + " "}</Text>
                                                                    <Text style={styles.normalText}>{items?.color[0]?.label}</Text>
                                                                </View>}
                                                            {items?.size &&
                                                                <View style={[
                                                                    {
                                                                        flexDirection: ALINE.row
                                                                    },
                                                                    lang == NUMBER.num0 && {
                                                                        flexDirection: ALINE.rowreverse
                                                                    }]}>
                                                                    <Text style={styles.titleText} >{lable?.Size}</Text>
                                                                    <Text style={styles.normalText}>{items?.size[0]?.label}</Text>
                                                                </View>}
                                                            <View style={[
                                                                {
                                                                    flexDirection: ALINE.row
                                                                }, lang == NUMBER.num0 && {
                                                                    flexDirection: ALINE.rowreverse
                                                                }]}>
                                                                <Text
                                                                    style={styles.titleText} >
                                                                    {lable?.Qty + " "}
                                                                </Text>
                                                                <Text
                                                                    style={styles.normalText}>
                                                                    {items?.qty_ordered}
                                                                </Text>
                                                            </View>
                                                        </View>


                                                    </View>
                                                    <SAR
                                                        price={items?.row_total} normal={true}
                                                        textAlign={{
                                                            width: ResponsiveSize(100),
                                                            alignItems: ALINE.center,
                                                            justifyContent: ALINE.center
                                                        }} />



                                                </View>


                                                {/* <TouchableOpacity
                                                    onPress={() => {
                                                        //  setReview(true) 
                                                        navigation.navigate(NAVIGATION.WriteReview)
                                                    }}
                                                    style={{
                                                        backgroundColor: COLOR.primaray,
                                                        borderRadius: ResponsiveSize(12),
                                                        alignItems: ALINE.center,
                                                        justifyContent: ALINE.center,
                                                        padding: ResponsiveSize(10)
                                                    }}>
                                                    <Text style={{
                                                        color: COLOR.white,
                                                        fontSize: ResponsiveSize(20)
                                                    }}>{"Write Review"}</Text>
                                                </TouchableOpacity> */}



                                            </View>

                                            <View style={{ height: ResponsiveSize(20) }} />
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>



                    <View style={styles.secomdView}>
                        {
                            orderDetailsList?.total_segments?.length > 0 &&
                            orderDetailsList?.total_segments?.map((items, index) => {
                                return (
                                    <View
                                        key={index}
                                        style={[
                                            styles.secondComman,
                                            items?.code == "grand_total" && {
                                                borderBottomWidth: ResponsiveSize(0)
                                            }]}
                                    >
                                        <View style={[
                                            {
                                                flexDirection: ALINE.row,
                                                justifyContent: ALINE.spaceBetween
                                            },
                                            lang == NUMBER.num0 && {
                                                flexDirection: ALINE?.rowreverse
                                            }]}>
                                            <Text
                                                style={[styles.secondTitleText,
                                                items?.code == "grand_total" && {
                                                    color: COLOR.black
                                                },
                                                lang == NUMBER.num0 && {
                                                    textAlign: EXTRASTR.right
                                                }]}>
                                                {items?.title}
                                            </Text>

                                            <View style={{
                                                width: ResponsiveSize(100),
                                                alignItems: ALINE.center,
                                                justifyContent: ALINE.center,
                                                flexDirection: ALINE.row,
                                                justifyContent: lang == NUMBER.num0 ? 'flex-start' : ALINE.flexend
                                            }}>
                                                <Image
                                                    style={{
                                                        height: ResponsiveSize(20),
                                                        width: ResponsiveSize(20),
                                                        tintColor: COLOR.black
                                                    }}
                                                    source={require('../../assets/images/Common/SAR.png')}
                                                />
                                                <View style={{ width: ResponsiveSize(5) }} />
                                                <Text style={[styles.secondPriceText, lang == NUMBER.num0 && {
                                                    textAlign: ALINE.left
                                                }]}>
                                                    {" " + items?.value}
                                                </Text>

                                            </View>

                                        </View>


                                        {
                                            (orderDetailsList?.apply_giftcard && items?.code == "amgiftcard") &&
                                            orderDetailsList?.apply_giftcard?.length > 0 &&
                                            orderDetailsList?.apply_giftcard?.map((giftItems, giftIndex) => {
                                                return (
                                                    <View
                                                        key={giftIndex}
                                                        style={[[
                                                            styles.GiftCardCodeView,
                                                            lang == NUMBER.num0 && {
                                                                flexDirection: ALINE?.rowreverse
                                                            }]]}>

                                                        <Text
                                                            style={[
                                                                styles.secondTitleText,
                                                                lang == NUMBER.num0 && {
                                                                    textAlign: EXTRASTR.right
                                                                }]}>
                                                            {giftItems?.code}
                                                        </Text>

                                                        <View style={[styles.GiftCardPriceView, {
                                                            justifyContent: lang == NUMBER.num0 ? 'flex-start' : ALINE.flexend
                                                        }]}>
                                                            <Image
                                                                style={styles.CurrencyView}
                                                                source={require('../../assets/images/Common/SAR.png')}
                                                            />
                                                            <View style={{ width: ResponsiveSize(5) }} />

                                                            <Text style={[
                                                                styles.secondPriceText,
                                                                lang == NUMBER.num0 && {
                                                                    textAlign: EXTRASTR.left
                                                                },
                                                                {
                                                                    color: COLOR.darkGray,
                                                                    fontSize: ResponsiveSize(17)
                                                                }]}>
                                                                {" " + giftItems?.amount}
                                                            </Text>

                                                        </View>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                )
                            })
                        }
                    </View>

                    {orderDetailsList?.shippingaddress &&
                        <View style={[styles.secomdView]}>
                            <View style={[
                                styles.secondComman,
                                lang == NUMBER.num0 && {
                                    flexDirection: ALINE.rowreverse
                                }]}>
                                <Text style={[styles.headerText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{lable?.ShippingAddress} </Text>
                            </View>

                            <View style={styles.addressView}>
                                <Text
                                    style={[styles.addressText,
                                    lang == NUMBER.num0 && {
                                        textAlign: EXTRASTR.right
                                    }]}>
                                    {orderDetailsList?.shippingaddress?.region}
                                </Text>
                                <Text
                                    style={[
                                        styles.addressText,
                                        lang == NUMBER.num0 && {
                                            textAlign: EXTRASTR.right
                                        }]}>
                                    {shippongAddress}
                                </Text>
                                <Text style={[
                                    styles.addressText,
                                    lang == NUMBER.num0 && {
                                        textAlign: EXTRASTR.right
                                    }]
                                }>{orderDetailsList?.shippingaddress?.telephone}
                                </Text>
                            </View>
                        </View>
                    }
                    <View style={styles.secomdView}>
                        <View style={[
                            styles.secondComman,
                            lang == NUMBER.num0 && {
                                flexDirection: ALINE.rowreverse
                            }]}>
                            <Text
                                style={styles.headerText}>
                                {lable?.ShippingMethod ? lable?.ShippingMethod : " "}
                            </Text>
                        </View>

                        <View style={styles.addressView}>
                            <Text style={[
                                styles.addressText,
                                lang == NUMBER.num0 && {
                                    textAlign: EXTRASTR.right
                                }]}>
                                {orderDetailsList?.shipping_description ? orderDetailsList?.shipping_description : " "}
                            </Text>
                        </View>
                    </View>

                    {
                        orderDetailsList?.billingaddress &&
                        <View style={[styles.secomdView]}>
                            <View style={[
                                styles.secondComman,
                                lang == NUMBER.num0 && {
                                    flexDirection: ALINE.rowreverse
                                }
                            ]}>
                                <Text
                                    style={[
                                        styles.headerText,
                                        lang == NUMBER.num0 && {
                                            textAlign: EXTRASTR.right
                                        }]}>
                                    {lable?.BillingAddress ? lable?.BillingAddress : " "}
                                </Text>
                            </View>

                            <View style={styles.addressView}>
                                <Text style={[
                                    styles.addressText,
                                    lang == NUMBER.num0 && {
                                        textAlign: EXTRASTR.right
                                    }]}>
                                    {orderDetailsList?.billingaddress?.region}
                                </Text>

                                <Text
                                    style={[
                                        styles.addressText,
                                        lang == NUMBER.num0 && {
                                            textAlign: EXTRASTR.right
                                        }]}>
                                    {billingAddress}
                                </Text>

                                <Text style={[
                                    styles.addressText,
                                    lang == NUMBER.num0 && {
                                        textAlign: EXTRASTR.right
                                    }]}>
                                    {orderDetailsList?.billingaddress?.telephone}
                                </Text>
                            </View>

                        </View>
                    }

                    {
                        orderDetailsList?.payment_method &&
                        <View style={styles.secomdView}>
                            <View style={[
                                styles.secondComman,
                                lang == NUMBER.num0 && {
                                    flexDirection: ALINE.rowreverse
                                }]}>
                                <Text
                                    style={styles.headerText}>
                                    {lable?.PaymentMethod}
                                </Text>
                            </View>

                            <View style={[styles.addressView]}>
                                <Text
                                    style={[
                                        styles.addressText,
                                        lang == NUMBER.num0 && {
                                            textAlign: EXTRASTR.right
                                        }]}>
                                    {orderDetailsList?.payment_method}
                                </Text>
                            </View>
                        </View>
                    }

                    {trackingNumber?.data?.length > 0 &&
                        <View style={styles.secomdView}>
                            <View
                                style={[
                                    styles.secondComman,
                                    lang == NUMBER.num0 && {
                                        flexDirection: ALINE.rowreverse
                                    }]}>
                                <Text
                                    style={styles.headerText}>
                                    {trackingNumber?.title}
                                </Text>
                            </View>

                            {trackingNumber?.data?.map((item, index) => {
                                return (
                                    <View
                                        key={index}
                                        style={[
                                            styles.addressView,
                                            index == trackingNumber?.data?.length - 1 && {
                                                borderBottomWidth: 0
                                            },
                                            {
                                                flexDirection: ALINE.row,
                                                justifyContent: ALINE.spaceBetween
                                            },
                                            lang == NUMBER.num0 && {
                                                flexDirection: ALINE.rowreverse
                                            }]}>

                                        <Text
                                            style={styles.addressText}>
                                            {item?.title}
                                        </Text>

                                        <TouchableOpacity
                                            onPress={() => {
                                                Linking.openURL(item?.track_url)
                                            }}
                                        >
                                            <Text
                                                style={[
                                                    styles.addressText,
                                                    {
                                                        color: COLOR.primaray,
                                                        textDecorationLine: "underline"
                                                    }]}>
                                                {item?.track_number}
                                            </Text>

                                        </TouchableOpacity>

                                    </View>
                                )
                            })}

                        </View>}

                    <View style={{ height: ResponsiveSize(200) }} />
                </ScrollView>
            }

            {
                (orderDetailsList?.status !== 'canceled' && orderDetailsList?.status !== "closed" && orderDetailsList?.status !== "complete") &&

                <View style={styles.btnView}>
                    <Button
                        onPress={() => {
                            orderDetailsList?.refund_status == "Cancel" ?
                                navigation.navigate(NAVIGATION.CancelOrder, { orderID: OId })
                                :
                                SHOWTOTS("Refund status is" + orderDetailsList?.refund_status)
                        }}
                        text={"Return Order"}
                    />
                </View>
            }

            {
                isLoadding &&
                <View style={styles.Loadder}>
                    <CusLoader />
                </View>
            }


        </View>
    )
}

export default OrderDetails

