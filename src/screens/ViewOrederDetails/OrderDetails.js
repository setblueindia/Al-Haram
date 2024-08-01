import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import { styles } from './orderDeatils.style'
import useOrderDetaisHook from './OrderDetails.hook'
import { ALINE, COLOR } from '../../constants/style'
import { ResponsiveSize, SHOWTOTS } from '../../utils/utils'
import { EXTRASTR, NAVIGATION, NUMBER } from '../../constants/constants'
import Button from '../../components/Button'
import CusLoader from '../../components/CustomLoader'

const OrderDetails = (props) => {
    const { navigation, lang, data, lable, isLoadding, orderDetailsList, ReOrder, OId } = useOrderDetaisHook(props)
    
    return (
        <View style={styles.mainView}>
            <CommanHeader name={lable?.ViewOrder} navigation={navigation} lang={lang} />
            <ScrollView style={styles.containView}>

                <View style={styles.firstView}>
                    <View style={[styles.OrderHeader, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                        <View>
                            <Text style={[styles.orderTexrt, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{"#" + orderDetailsList?.increment_id}</Text>
                            <View style={[styles.StatusView, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                                <View style={[styles.DottView,
                                { backgroundColor: orderDetailsList?.status_display == "pending" ? "#FFC000" : orderDetailsList?.status_display == "canceled" ? 'red' : orderDetailsList?.status_display == "closed" ? 'red' : orderDetailsList?.status_display == "canceled" ? 'red' : "green" }
                                ]}></View>
                                <Text style={[styles.statusText,
                                lang == NUMBER.num0 && { marginRight: ResponsiveSize(10) },
                                { color: orderDetailsList?.status_display == "pending" ? "#FFC000" : orderDetailsList?.status_display == "closed" ? 'red' : orderDetailsList?.status_display == "canceled" ? 'red' : "green" }
                                ]}>{orderDetailsList?.status_display}</Text>
                            </View>
                            <Text style={styles.dateTextOrder}>{orderDetailsList?.created_at}</Text>
                        </View>

                        <View>
                            <Text style={styles.printText}>{data?.PrintOrder}</Text>
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
                          orderDetailsList?.items.length > 0 &&
                            orderDetailsList?.items?.map((items, index) => {

                                return (
                                    <View key={index}>
                                        <View style={[styles.itemsList, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                            <View style={[styles.firstOne, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                                <View style={styles.imgeView}>
                                                    <Image style={styles.productImg} source={{ uri: items?.image }} />
                                                </View>

                                                <View style={styles.nameView}>
                                                    <Text style={styles.orderNameText} >{items?.name}</Text>

                                                 { items?.color &&
                                                   <View style={[{ flexDirection: 'row', marginTop: ResponsiveSize(5) }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                                        <Text style={styles.titleText}>{lable?.color + " "}</Text>
                                                        <Text style={styles.normalText}>{items?.color[0]?.label}</Text>
                                                    </View>}
                                               { items?.size &&
                                                  <View style={[{ flexDirection: 'row' } , lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                                        <Text style={styles.titleText} >{lable?.Qty}</Text>
                                                        <Text style={styles.normalText}>{items?.size[0]?.label}</Text>
                                                    </View>}
                                                    <View style={[{ flexDirection: 'row' } , lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                                        <Text style={styles.titleText} >{lable?.Qty + " "}</Text>
                                                        <Text style={styles.normalText}>{items?.qty_ordered}</Text>
                                                    </View>
                                                    
                                                </View>
                                            </View>

                                            <Text style={styles.fistPriceTex}>{lable?.SAR + " " + items?.row_total}</Text>
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
                        orderDetailsList?.total_segments?.map((items, index) => {
                            return (
                                <View key={index} style={[styles.secondComman, items?.code == "grand_total" && { borderBottomWidth: ResponsiveSize(0) }, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                                    <Text style={[styles.secondTitleText, items?.code == "grand_total" && { color: COLOR.black }]}>{items?.title} </Text>
                                    <Text style={styles.secondPriceText}>{lable?.SAR + " " + items?.value}</Text>
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
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{orderDetailsList?.shippingaddress?.street[0] + " " + orderDetailsList?.shippingaddress?.street[1] + " " + orderDetailsList?.shippingaddress?.street[2]}</Text>
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{orderDetailsList?.shippingaddress?.telephone}</Text>
                    </View>
                </View>

                }

                <View style={styles.secomdView}>
                    <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                        <Text style={styles.headerText}>{lable?.ShippingMethod} </Text>
                    </View>
                    <View style={styles.addressView}>
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{orderDetailsList?.shipping_description}</Text>
                        {/* <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.shipping2}</Text>
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.shippingDate}</Text> */}
                    </View>
                </View>

                {
                    orderDetailsList?.billingaddress &&
                    <View style={[styles.secomdView]}>
                        <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                            <Text style={[styles.headerText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{lable?.BillingAddress} </Text>
                        </View>
                        <View style={styles.addressView}>
                            <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{orderDetailsList?.billingaddress?.region}</Text>
                            <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{orderDetailsList?.billingaddress?.street[0] + " " + orderDetailsList?.billingaddress?.street[1] + " " + orderDetailsList?.billingaddress?.street[2]}</Text>
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

                <View style={{ height: ResponsiveSize(60) }} />

            </ScrollView>
            {
                orderDetailsList?.status == 'canceled' &&
                <View style={styles.btnView}>
                    <Button onPress={() => {
                        orderDetailsList?.refund_status == "cancel" ?
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

