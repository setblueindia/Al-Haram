import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import { styles } from './orderDeatils.style'
import useOrderDetaisHook from './OrderDetails.hook'
import { ALINE, COLOR, RESIZEMODE } from '../../constants/style'
import { ResponsiveSize, SHOWTOTS } from '../../utils/utils'
import { EXTRASTR, NAVIGATION, NUMBER } from '../../constants/constants'
import Button from '../../components/Button'
import CusLoader from '../../components/CustomLoader'
import FastImage from 'react-native-fast-image'
import Review from '../Review/Review'
import Reviewpoupp from '../../components/Reviewpoupp'
import SAR from '../../components/SAR/Index'
import { Image } from 'react-native-animatable'

const OrderDetails = (props) => {
    const { navigation, lang, data, lable, isLoadding, orderDetailsList, ReOrder, OId, review, setReview } = useOrderDetaisHook(props)

    const address1 = orderDetailsList?.shippingaddress?.street[0] ? orderDetailsList?.shippingaddress?.street[0] + " " : ""
    const address2 = orderDetailsList?.shippingaddress?.street[1] ? orderDetailsList?.shippingaddress?.street[1] + " " : ""
    const address3 = orderDetailsList?.shippingaddress?.street[2] ? orderDetailsList?.shippingaddress?.street[2] + " " : ""

    const shippongAddress = address1 + address2 + address3

    const baddress1 = orderDetailsList?.billingaddress?.street[0] ? orderDetailsList?.billingaddress?.street[0] + " " : " "
    const baddress2 = orderDetailsList?.billingaddress?.street[1] ? orderDetailsList?.billingaddress?.street[1] + " " : " "
    const baddress3 = orderDetailsList?.billingaddress?.street[2] ? orderDetailsList?.billingaddress?.street[2] + " " : " "

    const billingAddress = baddress1 + baddress2 + baddress3

    return (
        <View style={styles.mainView}>
            <CommanHeader name={lable?.ViewOrder} navigation={navigation} lang={lang} />
            {(data && !isLoadding) &&
                <ScrollView style={styles.containView}>

                    <View style={styles.firstView}>
                        <View style={[styles.OrderHeader, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.orderTexrt, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{orderDetailsList?.increment_id ? "#" + orderDetailsList?.increment_id : " "}</Text>
                                <View style={[styles.StatusView, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                                    <View style={[styles.DottView,
                                    { backgroundColor: orderDetailsList?.status_display == "pending" ? "#FFC000" : orderDetailsList?.status_display == "canceled" ? 'red' : orderDetailsList?.status_display == "closed" ? 'red' : orderDetailsList?.status_display == "canceled" ? 'red' : "green" }
                                    ]}></View>
                                    <Text style={[styles.statusText,
                                    lang == NUMBER.num0 && { marginRight: ResponsiveSize(10), textAlign: 'right' },
                                    { color: orderDetailsList?.status_display == "pending" ? "#FFC000" : orderDetailsList?.status_display == "closed" ? 'red' : orderDetailsList?.status_display == "canceled" ? 'red' : "green" }
                                    ]}>{orderDetailsList?.status_display}</Text>
                                </View>
                                <Text style={[styles.dateTextOrder, lang == NUMBER.num0 && { textAlign: 'right' }]}>{orderDetailsList?.created_at}</Text>
                            </View>

                            <View>
                                {/* <Text style={[styles.printText, lang == NUMBER.num0 && { textAlign: 'left' }]}>{data?.PrintOrder}</Text> */}
                                <TouchableOpacity
                                    onPress={() => { ReOrder() }}
                                >
                                    <Text style={[styles.reOrderText, lang == NUMBER.num0 && { textAlign: EXTRASTR?.left }]}>{data?.Reorder}</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { justifyContent: 'flex-end' }]}>
                            <Text style={styles.headerText}>{data?.ItemsOrdered}</Text>
                        </View>
                        <View style={styles.orderDetails}>
                            {
                                orderDetailsList?.items?.length > 0 &&
                                orderDetailsList?.items?.map((items, index) => {

                                    return (
                                        <View key={index}>

                                            <View style={styles.topListView} >


                                                <View style={[styles.itemsList, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                                    <View style={[styles.firstOne, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                                        <View style={styles.imgeView}>
                                                            <FastImage resizeMode={RESIZEMODE.contain} style={styles.productImg} source={{ uri: items?.image }} />
                                                        </View>

                                                        <View style={styles.nameView}>
                                                            <Text style={[styles.orderNameText, lang == NUMBER.num0 && { textAlign: 'right' }]} >{items?.name}</Text>

                                                            {items?.color &&
                                                                <View style={[{ flexDirection: 'row', marginTop: ResponsiveSize(5) }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                                                    <Text style={styles.titleText}>{lable?.color + " "}</Text>
                                                                    <Text style={styles.normalText}>{items?.color[0]?.label}</Text>
                                                                </View>}
                                                            {items?.size &&
                                                                <View style={[{ flexDirection: 'row' }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                                                    <Text style={styles.titleText} >{lable?.Size}</Text>
                                                                    <Text style={styles.normalText}>{items?.size[0]?.label}</Text>
                                                                </View>}
                                                            <View style={[{ flexDirection: 'row' }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                                                <Text style={styles.titleText} >{lable?.Qty + " "}</Text>
                                                                <Text style={styles.normalText}>{items?.qty_ordered}</Text>
                                                            </View>
                                                        </View>


                                                    </View>
                                                    {/* <Text style={[styles.fistPriceTex, lang == NUMBER.num0 && { textAlign: 'left' }]}>{lable?.SAR + " " + items?.row_total}</Text> */}

                                                    {/* ADD IMG */}
                                                    <SAR
                                                        price={items?.row_total} normal={true}
                                                        textAlign={{
                                                            width: ResponsiveSize(100),
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
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
                                { console.log("items?.value", items?.value) }
                                return (
                                    <View key={index} style={[styles.secondComman, items?.code == "grand_total" && { borderBottomWidth: ResponsiveSize(0) }, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                                        <Text style={[styles.secondTitleText, items?.code == "grand_total" && { color: COLOR.black }, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{items?.title} </Text>




                                        {/* <Text style={[styles.secondPriceText, lang == NUMBER.num0 && { textAlign: 'left' }]}>{lable?.SAR + " " + items?.value}</Text> */}


                                        {/* ADD IMG */}
                                        <View style={{
                                            width: ResponsiveSize(100),
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            justifyContent: lang == NUMBER.num0 ? 'flex-start' : 'flex-end'
                                        }}>
                                            <Image
                                                style={{ height: ResponsiveSize(20), width: ResponsiveSize(20), tintColor: COLOR.black }}
                                                source={require('../../assests/images/Common/SAR.png')} />
                                            <View style={{ width: ResponsiveSize(5) }} />
                                            <Text style={[styles.secondPriceText, lang == NUMBER.num0 && { textAlign: 'left' }]}>{" " + items?.value}</Text>
                                        </View>

                                    </View>
                                )
                            })
                        }
                    </View>

                    {orderDetailsList?.shippingaddress && <View style={[styles.secomdView]}>
                        <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                            <Text style={[styles.headerText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{lable?.ShippingAddress} </Text>
                        </View>

                        <View style={styles.addressView}>
                            <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{orderDetailsList?.shippingaddress?.region}</Text>
                            <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{shippongAddress}</Text>
                            <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{orderDetailsList?.shippingaddress?.telephone}</Text>
                        </View>
                    </View>
                    }
                    <View style={styles.secomdView}>
                        <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                            <Text style={styles.headerText}>{lable?.ShippingMethod ? lable?.ShippingMethod : " "} </Text>
                        </View>
                        <View style={styles.addressView}>
                            <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{orderDetailsList?.shipping_description ? orderDetailsList?.shipping_description : " "}</Text>
                            {/* <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.shipping2}</Text>
              <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.shippingDate}</Text> */}
                        </View>
                    </View>

                    {
                        orderDetailsList?.billingaddress &&
                        <View style={[styles.secomdView]}>
                            <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                <Text style={[styles.headerText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{lable?.BillingAddress ? lable?.BillingAddress : " "} </Text>
                            </View>
                            <View style={styles.addressView}>
                                <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{orderDetailsList?.billingaddress?.region}</Text>
                                <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{billingAddress}</Text>
                                <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{orderDetailsList?.billingaddress?.telephone}</Text>
                            </View>
                        </View>
                    }

                    {orderDetailsList?.payment_method &&
                        <View style={styles.secomdView}>
                            <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                <Text style={styles.headerText}>{lable?.PaymentMethod} </Text>
                            </View>
                            <View style={styles.addressView}>
                                <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{orderDetailsList?.payment_method}</Text>
                            </View>
                        </View>}
                    <View style={{ height: ResponsiveSize(200) }} />
                </ScrollView>
            }

            {console?.log("orderDetailsList?.refund_status", orderDetailsList?.status)}

            {
                (orderDetailsList?.status !== 'canceled' && orderDetailsList?.status !== "closed" && orderDetailsList?.status !== "complete") &&

                <View style={styles.btnView}>
                    <Button onPress={() => {
                        orderDetailsList?.refund_status == "Cancel" ?
                            navigation.navigate(NAVIGATION.CancelOrder, { orderID: OId })
                            :
                            SHOWTOTS("Refund status is" + orderDetailsList?.refund_status)
                    }} text={"Return Order"} />
                </View>
            }

            {
                isLoadding &&
                <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
                    <CusLoader />
                </View>
            }


        </View>
    )
}

export default OrderDetails

