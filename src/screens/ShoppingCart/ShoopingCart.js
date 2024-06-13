import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import { ALINE, COLOR } from '../../constants/style'
import Icon from 'react-native-vector-icons/AntDesign';
import { ICON, NUMBER } from '../../constants/constants';
import { ResponsiveSize } from '../../utils/utils';
import Button from '../../components/Button';
import useShoppingcart from './ShoppingCart.hook';
import Cart from './Cart';
import { FlatList } from 'react-native-gesture-handler';
import Shooping from './Shooping';
import Payment from './Payment';
import CusLoader from '../../components/CustomLoader';


const ShoopingCart = () => {

    const { goBack, index, onPress, navigation, data, lang, shopinfCratData, isLoadding } = useShoppingcart()

    return (
        <View style={styles.mainView}>

            <CommanHeader name={shopinfCratData?.ShoppingCart} navigation={navigation} lang={lang} />
            <View style={styles.container}>
                <View style={[styles.stepView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                    <Icon name={ICON.checkcircle} size={ResponsiveSize(30)} color={COLOR.primaray} />
                    <Text style={[styles.text, { color: COLOR.primaray }]}>{shopinfCratData?.cart}</Text>
                    <View style={[styles.lineView, { backgroundColor: COLOR.primaray }]} />

                    <Icon name={ICON.checkcircle} size={ResponsiveSize(30)} color={(index == 1 || index == 2) ? COLOR.primaray : COLOR.gray} />
                    <Text style={[styles.text, (index == 1 || index == 2) && { color: COLOR.primaray }]}>{shopinfCratData?.Shipping}</Text>
                    {index == 0 && <Text>------</Text>}
                    {(index == 1 || index == 2) && <View style={[styles.lineView, { backgroundColor: COLOR.primaray }]} />}

                    <Icon name={ICON.checkcircle} size={ResponsiveSize(30)} color={index == 2 ? COLOR.primaray : COLOR.gray} />
                    <Text style={[styles.text, (index == 2) && { color: COLOR.primaray }]}>{shopinfCratData.Payment}</Text>
                    {(index == 0 || index == 1) && <Text>------</Text>}

                </View>


                {index == 0 && <View style={styles.cartView}>
                    <FlatList
                        // style={{ marginBottom: ResponsiveSize(410) }}
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index}>
                                    <Cart data={item} lang={lang} />
                                    <View style={{ height: ResponsiveSize(20) }} />
                                </View>
                            )
                        }}
                    />
                </View>}

                {
                    index == 1 &&
                    <View style={{ flex: 1 }}>
                        <Shooping data={shopinfCratData} lang={lang} />
                    </View>
                }

                {
                    index == 2 &&
                    <View style={{ flex: 1 }}>
                        <Payment data={shopinfCratData} lang={lang} />
                    </View>
                }


            </View>
            <View style={{ height: index == 0 ? ResponsiveSize(170) : ResponsiveSize(80) }}></View>

            <View style={[styles.btn, lang == NUMBER.num0 && { flexDirection: ALINE.row }]}>
                <View style={[styles.nextProcess, index == 0 && { width: "100%" }]}>
                    <Button
                        onPress={onPress}
                        text={shopinfCratData?.ProceedtoCheckout}
                        color="#009834"
                        ShoopingCart={true}
                    />
                </View>
                {(index == 1 || index == 2) &&
                    <TouchableOpacity onPress={() => { goBack() }} style={styles.goBackBtn}>
                        <Icon name={lang == NUMBER.num0 ? ICON.arrowright : ICON.arrowleft} size={ResponsiveSize(40)} color={COLOR} />
                    </TouchableOpacity>}
            </View>

            {isLoadding &&
                <View style={{ position: 'absolute' , width:"100%" , height:"100%" }}>
                    <CusLoader />
                </View>}

        </View>
    )
}

export default ShoopingCart

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    stepView: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        width: "100%",
        padding: ResponsiveSize(20),
        alignItems: ALINE.center,
        backgroundColor: COLOR.white,
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: COLOR.black,
        height: ResponsiveSize(70)

    },
    innreStepView: {
        flexDirection: ALINE.row,
        alignItems: ALINE.center,

    },
    text: {
        color: "#202020",
    },
    lineView: {
        height: ResponsiveSize(2),
        width: ResponsiveSize(50)
    },
    btn: {
        position: 'absolute',
        bottom: ResponsiveSize(30),
        width: "100%",
        paddingHorizontal: ResponsiveSize(20),
        flexDirection: ALINE.rowreverse,
        justifyContent: ALINE.spaceBetween,
        alignItems: ALINE.center
    },
    goBackBtn: {
        height: ResponsiveSize(80),
        width: ResponsiveSize(80),
        backgroundColor: COLOR.white,
        borderRadius: ResponsiveSize(10),
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: COLOR.black,
        borderWidth: ResponsiveSize(1),
        borderColor: "#00000060",
        alignItems: ALINE.center,
        justifyContent: ALINE.center
    },
    nextProcess: {
        width: ResponsiveSize(450)
    },
    cartView: {
        padding: ResponsiveSize(20)
    },
    container: {
        flex: 1
    }
})