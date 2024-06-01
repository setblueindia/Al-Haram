import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CommanHeader from '../../components/ComanHeader'
import useCancelOrderHook from './cancelOrder.hook'
import { styles } from './cancelOrder.style'
import Icon from 'react-native-vector-icons/AntDesign';
import { EXTRASTR, ICON, NUMBER } from '../../constants/constants'
import { ResponsiveSize } from '../../utils/utils'
import { TextInput } from 'react-native-gesture-handler'
import Button from '../../components/Button'
import { ALINE, COLOR } from '../../constants/style'


const CancelOrder = () => {
    const {
        navigation,
        showBox,
        data,
        yes,
        no,
        Product,
        sIndex,
        lang,
        lable,
        setNo,
        setYes,
        setSindex,
        setShowBox,
    } = useCancelOrderHook()
    return (
        <View style={styles.mainView}>
            <CommanHeader name={lable?.CancelOrder} navigation={navigation} lang={lang} />
            <ScrollView style={styles.containerView} >
                <View style={styles.firstView}>
                    <Text style={styles.headerText}>{lable?.CancelReturnsRequest}</Text>
                    <Text style={styles.desText}>{lable?.CancelOrderdes}</Text>
                    <View style={styles.barView} />

                    <View style={styles.resonView}>
                        <Text style={[styles.resoneText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(20) }]}>{lable?.ReasonForCancelReturn}</Text>
                        <TouchableOpacity
                            onPress={(() => { showBox ? setShowBox(false) : setShowBox(true) })}
                            style={[styles.selectResoneBtn, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                            <Text style={styles.btnText}>{lable?.Wrongsize}</Text>
                            <Icon style={styles.icon} size={ResponsiveSize(30)} name={showBox ? null : ICON.down} />
                        </TouchableOpacity>
                    </View>

                    {showBox &&
                        <View style={styles.resoneBox}>
                            <ScrollView>
                                {
                                    data?.map((items, index) => {
                                        return (
                                            <TouchableOpacity
                                                onPress={() => { setShowBox(false) }}
                                                key={index} style={styles.innerBox}>
                                                <Text style={[styles.boxText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{lable?.Wrongsize}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>}
                    <Text style={[styles.resoneText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(20) }, { marginTop: ResponsiveSize(20) }]}>{lable?.Productisopened}</Text>

                    <View style={[styles.cheackBox, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                        <TouchableOpacity
                            onPress={() => { setYes(true), setNo(false) }}
                            style={[styles.innerCheackBox, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>
                            <View style={styles.cheackBoxButton}>
                                {yes && <View style={styles.dott} />}
                            </View>
                            <Text style={styles.cheackText}>{lable?.Yes}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { setYes(false), setNo(true) }}
                            style={[styles.innerCheackBox, lang == NUMBER.num0 && { marginRight: ResponsiveSize(50) }, { marginLeft: ResponsiveSize(50) }]}>
                            <View style={styles.cheackBoxButton}>
                                {no && <View style={styles.dott} />}
                            </View>
                            <Text style={styles.cheackText}>{lable?.NO}</Text>
                        </TouchableOpacity>

                    </View>

                    <TextInput
                        textAlign={lang == NUMBER.num0 ? EXTRASTR.right : EXTRASTR.left}
                        placeholder=''
                        numberOfLines={10}
                        style={styles.selectResoneBtn}
                    />
                </View>

                <View style={styles.secondView}>
                    {
                        Product.map((items, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => { setSindex(index) }}
                                    key={index} style={[styles.orderView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                    <Image style={styles.image} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
                                    <Text>{"#000000680"}</Text>
                                    <Text>{"1"}</Text>
                                    <Text style={styles.priceText}>{"SAR 223"}</Text>
                                    <View style={[styles.orderCheack, sIndex == index && { backgroundColor: COLOR.primaray, borderColor: COLOR.primaray, }]} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
            <View style={styles.btnView}>
                <Button text={lable?.SendRequest} />
            </View>

        </View>
    )
}

export default CancelOrder
