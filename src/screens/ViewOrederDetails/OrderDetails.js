import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import { styles } from './orderDeatils.style'
import useOrderDetaisHook from './OrderDetails.hook'
import { ALINE, COLOR } from '../../constants/style'
import { ResponsiveSize } from '../../utils/utils'
import { EXTRASTR, NAVIGATION, NUMBER } from '../../constants/constants'
import Button from '../../components/Button'
import CusLoader from '../../components/CustomLoader'

const OrderDetails = (props) => {
    const { navigation, lang, data, lable, isLoadding, orderDetailsList } = useOrderDetaisHook(props)


    return (
        <View style={styles.mainView}>
            <CommanHeader name={lable?.ViewOrder} navigation={navigation} lang={lang} />
            <ScrollView style={styles.containView}>

                <View style={styles.firstView}>
                    <View style={[styles.OrderHeader, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                        <View>
                            <Text style={[styles.orderTexrt, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{"#" + orderDetailsList?.increment_id}</Text>
                            <View style={[styles.StatusView, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                                <View style={styles.DottView}></View>
                                <Text style={[styles.statusText, lang == NUMBER.num0 && { marginRight: ResponsiveSize(10) }]}>{data?.Compalated}</Text>
                            </View>
                            <Text style={styles.dateTextOrder}>{orderDetailsList?.created_at}</Text>
                        </View>

                        <View>
                            <Text style={styles.printText}>{data?.PrintOrder}</Text>
                            <Text style={[styles.reOrderText, lang == NUMBER.num0 && { textAlign: EXTRASTR.left }]}>{data?.Reorder}</Text>
                        </View>
                    </View>
                    <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { justifyContent: 'flex-end' }]}>
                            <Text style={styles.headerText}>{data?.ItemsOrdered}</Text>
                        </View>
                    <View style={styles.orderDetails}>
                     
                        {
                            orderDetailsList?.items?.map((items, index) => {

                                return (
                                    <View key={index}>
                                        <View style={styles.itemsList}>
                                            <View style={styles.firstOne}>
                                                <View style={styles.imgeView}>
                                                    <Image style={styles.productImg} source={{ uri: items?.image }} />
                                                </View>
                                                <View style={styles.nameView}>
                                                    <Text style={styles.orderNameText} >{items?.name}</Text>
                                                    <View style={{ flexDirection: 'row', marginTop: ResponsiveSize(5) }}>
                                                        <Text style={styles.titleText}>{"Color : "}</Text>
                                                        <Text style={styles.normalText}>{items?.color[0]?.label}</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={styles.titleText} >{"Size : "}</Text>
                                                        <Text style={styles.normalText}>{items?.size[0]?.label}</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={styles.titleText} >{"Qnt : "}</Text>
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

                        {/* <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                            <Text style={[styles.leftTex, lang == NUMBER.num0 && { textAlign: EXTRASTR?.right, width: ResponsiveSize(250) }]}>{lable?.ProductName}</Text>
                            <Text style={styles.rightText}>{data?.TESTNavyBlue}</Text>
                        </View>

                        <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                            <Text style={[styles.leftTex, lang == NUMBER.num0 && { textAlign: EXTRASTR?.right, width: ResponsiveSize(250) }]}>{lable?.SKU}</Text>
                            <Text style={styles.rightText}>{data?.TESTNBlue}</Text>
                        </View>

                        <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                            <Text style={[styles.leftTex, lang == NUMBER.num0 && { textAlign: EXTRASTR?.right, width: ResponsiveSize(250) }]}>{lable?.Price}</Text>
                            <Text style={styles.rightText}>SAR 192</Text>
                        </View>

                        <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                            <Text style={[styles.leftTex, lang == NUMBER.num0 && { textAlign: EXTRASTR?.right, width: ResponsiveSize(250) }]}>{lable?.Qty}</Text>
                            <Text style={styles.rightText}>{data?.Product}</Text>
                        </View>

                        <View style={[styles.itemsDetaisCommon, { borderBottomWidth: 0 }, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                            <Text style={[styles.subTotalText, lang == NUMBER.num0 && { textAlign: EXTRASTR?.right, width: ResponsiveSize(250) }]}>{lable?.Subtotal}</Text>
                            <Text style={[styles.rightText, { color: COLOR.primaray, fontSize: ResponsiveSize(25) }]}>{"SAR 192"}</Text>
                        </View> */}
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

             { orderDetailsList?.payment_method &&
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
            <View style={styles.btnView}>
                <Button onPress={() => { navigation.navigate(NAVIGATION.CancelOrder) }} text={"Cancel Order"} />
            </View>


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

