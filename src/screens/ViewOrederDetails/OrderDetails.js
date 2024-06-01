import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import { styles } from './orderDeatils.style'
import useOrderDetaisHook from './OrderDetails.hook'
import { ALINE, COLOR } from '../../constants/style'
import { ResponsiveSize } from '../../utils/utils'
import { EXTRASTR, NAVIGATION, NUMBER } from '../../constants/constants'
import Button from '../../components/Button'

const OrderDetails = () => {
    const { navigation, lang, data, lable } = useOrderDetaisHook()
    return (
        <View style={styles.mainView}>
            <CommanHeader name={lable?.ViewOrder} navigation={navigation} lang={lang} />
            <ScrollView style={styles.containView}>

                <View style={styles.firstView}>
                    <View style={[styles.OrderHeader, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                        <View>
                            <Text style={[styles.orderTexrt, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.oderId}</Text>
                            <View style={[styles.StatusView, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                                <View style={styles.DottView}></View>
                                <Text style={[styles.statusText, lang == NUMBER.num0 && { marginRight: ResponsiveSize(10) }]}>{data?.Compalated}</Text>
                            </View>
                            <Text style={styles.dateTextOrder}>{data?.date}</Text>
                        </View>

                        <View>
                            <Text style={styles.printText}>{data?.PrintOrder}</Text>
                            <Text style={[styles.reOrderText, lang == NUMBER.num0 && { textAlign: EXTRASTR.left }]}>{data?.Reorder}</Text>
                        </View>
                    </View>
                    <View style={styles.orderDetails}>
                        <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { justifyContent: 'flex-end' }]}>
                            <Text style={styles.headerText}>{data?.ItemsOrdered}</Text>
                        </View>
                        <View style={[styles.itemsDetaisCommon, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
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
                        </View>
                    </View>
                </View>

                <View style={styles.secomdView}>
                    <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                        <Text style={styles.secondTitleText}>{lable?.Subtotal} </Text>
                        <Text style={styles.secondPriceText}>SAR 192</Text>
                    </View>
                    <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                        <Text style={styles.secondTitleText}>{lable?.ShippingHandling}</Text>
                        <Text style={styles.secondPriceText}>SAR 192</Text>
                    </View>
                    <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                        <Text style={styles.secondTitleText}>{lable?.SVAT}</Text>
                        <Text style={styles.secondPriceText}>SAR 192</Text>
                    </View>
                    <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }]}>
                        <Text style={styles.secondTitleText}>{lable?.Tax}</Text>
                        <Text style={styles.secondPriceText}>SAR 192</Text>
                    </View>
                    <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE?.rowreverse }, { borderBottomWidth: 0 }]}>
                        <Text style={[styles.secondTitleText, { color: COLOR?.black }]}>{lable?.GrandTotal}</Text>
                        <Text style={styles.secondPriceText}>{"SAR 223"}</Text>
                    </View>
                </View>

                <View style={[styles.secomdView]}>
                    <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                        <Text style={[styles.headerText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{lable?.ShippingAddress} </Text>
                    </View>
                    <View style={styles.addressView}>
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.Riyadhbuilding}</Text>
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.address2}</Text>
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.TNo}</Text>
                    </View>
                </View>

                <View style={styles.secomdView}>
                    <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                        <Text style={styles.headerText}>{lable?.ShippingMethod} </Text>
                    </View>
                    <View style={styles.addressView}>
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.shipping1}</Text>
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.shipping2}</Text>
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.shippingDate}</Text>
                    </View>
                </View>

                <View style={[styles.secomdView]}>
                    <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                        <Text style={[styles.headerText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{lable?.ShippingAddress} </Text>
                    </View>
                    <View style={styles.addressView}>
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.Riyadhbuilding}</Text>
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.address2}</Text>
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.TNo}</Text>
                    </View>
                </View>

                <View style={styles.secomdView}>
                    <View style={[styles.secondComman, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                        <Text style={styles.headerText}>{lable?.PaymentMethod} </Text>
                    </View>
                    <View style={styles.addressView}>
                        <Text style={[styles.addressText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{data?.AramexCOD}</Text>
                    </View>
                </View>

                <View style={{ height: ResponsiveSize(60) }} />
            </ScrollView>
            <View style={styles.btnView}>
                <Button onPress={()=>{navigation.navigate(NAVIGATION.CancelOrder)}} text={"Cancel Order"} />
            </View>
        </View>
    )
}

export default OrderDetails

