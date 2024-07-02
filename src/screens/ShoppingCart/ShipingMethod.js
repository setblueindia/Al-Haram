import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import { EXTRASTR, NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'
import { ShippingList } from '../../constants/axios.url'
import { getStorePickupMethod } from '../../api/axios.api'


const ShipingMethod = ({ lang, data, Token, addressCod, selectShipping , selectAddressList  }) => {
    const [selected, setSelected] = useState()
    const [on , setOn ] = useState()
    const labale = lang == NUMBER.num0 ? Ar : En


    const params = {
        "addressInformation": {
            "shipping_address": {
                "id": 597,
                "customer_id": 970,
                "region": {
                    "region_code": "JED",
                    "region": "Western and Southern Regions",
                    "region_id": 703
                },
                "region_id": 703,
                "country_id": "SA",
                "street": [
                    "near al-haram store"
                ],
                "region_code": "JED",
                "telephone": "823815546",
                "postcode": "20001",
                "city": "Jeddah",
                "firstname": "ashok",
                "lastname": "devloper",
                "default_shipping": true,
                "default_billing": true,
                "region_name": "Western and Southern Regions",
                "country_name": "Saudi Arabia",
                "address1": "near al-haram store",
                "address2": "",
                "address3": "",
                "city_display": "Jeddah"
            },
            "billing_address": {
                "id": addressCod?.id,
                "customer_id": addressCod?.customer_id,
                "region": addressCod?.region,
                "region_id": addressCod?.region_id,
                "country_id": addressCod?.country_id,
                "street": addressCod?.street,
                "region_code": addressCod?.region_code,
                "telephone": addressCod?.telephone,
                "postcode": addressCod?.postcode,
                "city": addressCod?.city,
                "firstname": addressCod?.firstname,
                "lastname": addressCod?.lastname,
                "default_shipping": addressCod?.default_shipping,
                "default_billing": addressCod?.default_billing,
                "region_name": addressCod?.region_names,
                "country_name": addressCod?.country_name,
                "address1": addressCod?.address1,
                "address2": addressCod?.address2,
                "address3": addressCod?.address3,
                "city_display": addressCod?.city_display
            },
            "shipping_carrier_code": "webkularamex",
            "shipping_method_code": "ONP"
        }, "custom": {
            "token": Token,
            "store_id": lang
        }
    }
    return (
        <ScrollView style={{ height: "100%", width: "100%" }}>
            <Text style={styles.headerText}>{labale?.ShippingMethods}</Text>
            <View style={styles.mainView}>
                {
                    data?.map((item, index) => {
                        return (
                            <View>
                                <TouchableOpacity
                                    onPress={() => { setSelected(index), setOn(item?.carrier_code) , item?.carrier_code == "fmestorepickup" && selectShipping() }}
                                    key={index} style={[styles.litsView, selected == index && { backgroundColor: "#FFEEEE" }]} >
                                    <View style={[styles.firstView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                        <View>
                                            <View style={styles.circalView} >
                                                <View s style={selected == index ? styles.fillCircalView : null} />
                                            </View>
                                        </View>
                                        <View style={styles.textView}>
                                            <View style={[styles.hederTextView, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>
                                                <Text style={[styles.txet, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{item?.carrier_title}</Text>
                                            </View>
                                            <Text style={[styles.desText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>
                                                {item?.method_title}
                                            </Text>
                                            <Text style={[styles.price, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{labale.SAR + " " + item?.amount}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height: ResponsiveSize(20) }} />

                            </View>

                        )
                    })
                }
            </View>

          {(selectAddressList?.length > 0  && on == "fmestorepickup" ) &&
           selectAddressList?.map((items , index)=>{
            return(
                <View key={index} style={styles.selectAddressView}>
                <Text style={styles.headerText}>{"Store Pickup"}</Text>
                <View style={styles.containBox}>
                    <View style={[styles.firstView , lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                        <View>
                            <View style={styles.circalView} >
                                <View style={styles.fillCircalView} />
                            </View>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.hederTextView}>
                                <Text style={[styles.txet, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{items?.store_description}</Text>
                            </View>
                            <Text style={[styles.desText, {width:"90%"}, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>
                                {items?.address}
                            </Text>
                            {/* <Text style={[styles.price, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{labale.SAR + " 18" }</Text> */}
                        </View>
                    </View>

                </View>

            </View>
            )
          })
          
         
            }

            <View style={{ height: ResponsiveSize(40) }} />

        </ScrollView>
    )
}

export default ShipingMethod

const styles = StyleSheet.create({
    mainView: {
        // height: "100%",
        width: "100%",
        padding: ResponsiveSize(20)
    },
    headerText: {
        fontSize: ResponsiveSize(25),
        color: COLOR.black,
        fontWeight: FONTWEGHIT.font600,
        margin: ResponsiveSize(20)
    },
    litsView: {
        width: "100%",
        backgroundColor: "#F7F7F7",
        borderRadius: ResponsiveSize(10),
        padding: ResponsiveSize(20)
    },
    firstView: {
        flexDirection: ALINE.row,

    },
    circalView: {
        height: ResponsiveSize(30),
        width: ResponsiveSize(30),
        borderRadius: ResponsiveSize(100),
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.primaray,
        padding: ResponsiveSize(4)
    },
    txet: {
        color: COLOR.primaray,
        fontSize: ResponsiveSize(25),
    },
    textView: {
        marginLeft: ResponsiveSize(20),
    },
    desText: {
        color: COLOR.darkGray,
        lineHeight: ResponsiveSize(40),
        marginTop: ResponsiveSize(10)
    },
    price: {
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600,
        fontSize: ResponsiveSize(22)
    },
    hederTextView: {
        height: ResponsiveSize(40),
        borderBottomWidth: ResponsiveSize(1),
        borderColor: COLOR.darkGray,
    },
    fillCircalView: {
        height: "100%",
        width: "100%",
        backgroundColor: COLOR.primaray,
        borderRadius: ResponsiveSize(100)
    },
    selectAddressView: {
        backgroundColor: "#FFEEEE",
        // height: ResponsiveSize(200),
        width: "100%",
        padding: ResponsiveSize(20)
    },
    containBox: {
        height: ResponsiveSize(150),
        width: "100%",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.darkGray,
        backgroundColor: COLOR.white,
        padding:ResponsiveSize(20),
        borderRadius:ResponsiveSize(10)
    }
})