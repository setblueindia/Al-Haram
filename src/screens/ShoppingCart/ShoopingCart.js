import {
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import Icon from 'react-native-vector-icons/AntDesign';
import {
    EXTRASTR,
    ICON,
    NAVIGATION,
    NUMBER
} from '../../constants/constants';
import { ResponsiveSize } from '../../utils/utils';
import Button from '../../components/Button';
import useShoppingcart from './ShoppingCart.hook';
import Cart from './Cart';
import { FlatList } from 'react-native-gesture-handler';
import Shooping from './Shooping';
import Payment from './Payment';
import CusLoader from '../../components/CustomLoader';
import ShipingMethod from './ShipingMethod';
import CusModal from '../../components/CusModal';
import DataIsNotFound from '../../components/DataNotFound2';
import { FONTS } from '../../constants/fonts';
import { Ar, En } from '../../constants/localization';


const ShoopingCart = (props) => {

    const {
        goBack,
        index,
        onPress,
        navigation,
        data,
        lang,
        shopinfCratData,
        ShhippingData,
        isLoadding,
        Token,
        addressCod,
        selectAddressList,
        showModal,
        messages,
        paymentScreenData,
        wallateAmount,
        coupanListData,
        coupanCode,
        remove,
        validationn,
        noties,
        giftCardList,
        type,
        cartTotal,
        setGiftSatus, giftSatus,
        setGiftCardCode, giftCardCode,
        updateQnty,
        setActionCode,
        setCoupanCode,
        getGiftCartdSatus,
        selectShipping,
        deleteProduct,
        setAddressCode,
        setLoadding,
        setGiftCardList,
        setShowModal,
        setShippingdata,
        setBillingAddress,
        setSelectPayment,
        setWalletAmount,
        RemoveCart,
        PlaceHolder,
        applyCoupan,
        validation,
        setEtrx,
        setSelectPayemrntMethod,
        setTempWalletcheck,
        applyGiftCart,
        setGiftCartDis,
        selectPayment,
        selectPaymentMethod,
        setStorePickUpData,
        outOfStock
    } = useShoppingcart()


    const handleScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y;
    };
    const lable = lang == NUMBER.num1 ? En : Ar



    return (
        <View style={styles.mainView}>
            <CommanHeader
                name={
                    index == 3
                        ? lable.PaymentProcess
                        : shopinfCratData?.ShoppingCart
                }
                navigation={navigation}
                lang={lang}
            />
            <View style={styles.container}>
                <View style={[
                    styles.stepView,
                    lang == NUMBER.num0 && {
                        flexDirection: ALINE.rowreverse
                    }
                ]}>
                    <View style={[
                        {
                            flexDirection: ALINE.row,
                            alignItems: ALINE.center,
                            flex: 0.8,
                            paddingHorizontal: ResponsiveSize(5)
                        }, lang == NUMBER.num0 && {
                            flexDirection: ALINE.rowreverse
                        }]}>
                        <Icon
                            name={ICON.checkcircle}
                            size={ResponsiveSize(30)}
                            color={COLOR.primaray} />
                        <Text
                            style={[
                                styles.text,
                                { color: COLOR.primaray },
                                lang == NUMBER.num1 && { width: ResponsiveSize(80) },
                                lang == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(5) }
                            ]}>
                            {shopinfCratData?.cart}
                        </Text>
                        <View style={[styles.lineView, { backgroundColor: COLOR.primaray }]} />
                    </View>


                    <View style={[
                        {
                            flexDirection: ALINE.row,
                            justifyContent: ALINE.spaceBetween,
                            alignItems: ALINE.center,
                            flex: 1,
                            paddingHorizontal: ResponsiveSize(10)
                        },
                        lang == NUMBER.num0 && {
                            flexDirection: ALINE.rowreverse
                        }]}>
                        <Icon
                            name={ICON.checkcircle}
                            size={ResponsiveSize(30)}
                            color={(index == 1 || index == 2 || index == 3) ? COLOR.primaray : COLOR.gray} />
                        <Text
                            style={[
                                styles.text,
                                (index == 1 || index == 2 || index == 3) && { color: COLOR.primaray },
                                lang == NUMBER.num0 && {
                                    textAlign: EXTRASTR.right, marginRight: ResponsiveSize(5)
                                }
                            ]}>
                            {shopinfCratData?.Shipping}
                        </Text>

                        {index == 0 &&
                            <Text
                                style={{ color: COLOR.darkGray }}>
                                ------
                            </Text>
                        }
                        {(index == 1 || index == 2 || index == 3) &&
                            <View
                                style={[
                                    styles.lineView,
                                    { backgroundColor: COLOR.primaray, width: ResponsiveSize(40) }]}
                            />}
                    </View>


                    <View style={[
                        {
                            flexDirection: ALINE.row,
                            justifyContent: ALINE.spaceBetween,
                            alignItems: ALINE.center,
                            flex: 1,
                            paddingHorizontal: ResponsiveSize(10)
                        },
                        lang == NUMBER.num0 && {
                            flexDirection: ALINE.rowreverse
                        }
                    ]}>
                        <Icon
                            name={ICON.checkcircle}
                            size={ResponsiveSize(30)}
                            color={index == 3 ? COLOR.primaray : COLOR.gray}
                        />

                        <Text
                            style={[
                                styles.text,
                                (index == 3) && { color: COLOR.primaray },
                                lang == NUMBER.num0 && {
                                    textAlign: EXTRASTR.right,
                                    marginRight: ResponsiveSize(5)
                                }
                            ]}>
                            {shopinfCratData.Payment}
                        </Text>

                        {
                            (index == 0 || index == 1 || index == 2) &&
                            <Text
                                style={{ color: COLOR.darkGray }}>
                                ------
                            </Text>
                        }

                        {(index == 3) &&
                            <View
                                style={[
                                    styles.lineView,
                                    {
                                        backgroundColor: COLOR.primaray,
                                        width: ResponsiveSize(40)
                                    }]}
                            />}
                    </View>


                </View>

                {index == 0 &&
                    <View style={{ flex: 1 }}>
                        {data.length > 0 ?
                            <ScrollView
                                style={{ flex: 1 }}
                                onScroll={handleScroll}

                            >
                                <View style={styles.cartView}>
                                    {noties &&
                                        <View
                                            style={{
                                                padding: ResponsiveSize(10),
                                                borderRadius: ResponsiveSize(20),
                                                backgroundColor: COLOR.primaray,
                                                marginBottom: ResponsiveSize(20)
                                            }}>
                                            <Text
                                                style={
                                                    {
                                                        textAlign: ALINE.center,
                                                        color: COLOR.white
                                                    }}>
                                                {noties}
                                            </Text>
                                        </View>
                                    }
                                    <View style={{
                                    }} >
                                        <FlatList
                                            showsVerticalScrollIndicator={false}
                                            data={data}
                                            renderItem={({ item, index }) => {
                                                return (
                                                    <View
                                                        key={index}>
                                                        <Cart
                                                            updateQnty={updateQnty}
                                                            outOfStock={false}
                                                            data={item} lang={lang}
                                                            deleteProduct={deleteProduct}
                                                            onPress={() => {
                                                                navigation.navigate(NAVIGATION.ProducDetails, { SKU: item?.sku, addToCatdOn: true })
                                                            }}
                                                            disabled={item?.type == "amgiftcard" ? true : false}
                                                        />
                                                        <View style={{ height: ResponsiveSize(20) }} />
                                                    </View>
                                                )
                                            }}
                                        />
                                    </View>
                                    {
                                        outOfStock?.length > 0 &&
                                        <View style={{
                                            height: "40%",
                                            backgroundColor: "#FFE9E9",
                                            padding: ResponsiveSize(20),
                                        }}>
                                            <View style={[
                                                styles.textView,
                                                lang == NUMBER.num0 && {
                                                    flexDirection: ALINE.rowreverse
                                                }
                                            ]}>
                                                <Text
                                                    style={styles.outOfStockText}>
                                                    {"Out of stock"}
                                                </Text>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        RemoveCart()
                                                    }}>
                                                    <Text
                                                        style={styles.removeAllText}>
                                                        {"Remove all"}
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                            <FlatList
                                                showsVerticalScrollIndicator={false}
                                                data={outOfStock}
                                                renderItem={({ item, index }) => {
                                                    return (
                                                        <View key={index}>
                                                            <Cart
                                                                outOfStock={true}
                                                                data={item}
                                                                lang={lang}
                                                                deleteProduct={deleteProduct}
                                                            />
                                                            <View style={{ height: ResponsiveSize(20) }} />
                                                        </View>
                                                    )
                                                }}
                                            />
                                        </View>}

                                </View>
                            </ScrollView>
                            : (!isLoadding && index == 0) ?
                                <View style={{ height: "100%", width: "100%", alignSelf: ALINE.center }}>
                                    <DataIsNotFound
                                        color={false} />
                                </View>

                                : null}

                        {(data?.length > 0) &&
                            <View>
                                <View
                                    style={[
                                        styles.subTotalView,
                                        lang == NUMBER.num0 && {
                                            flexDirection: ALINE.rowreverse
                                        }
                                    ]}>
                                    <Text
                                        style={{
                                            color: COLOR.white,
                                            fontSize: ResponsiveSize(22),
                                            fontFamily: FONTS.Bold
                                        }}>
                                        {lable?.SubTotal}
                                    </Text>



                                    <View style={{
                                        flexDirection: ALINE.row,
                                        alignItems: ALINE.center
                                    }}>
                                        <Image
                                            style={{
                                                height: ResponsiveSize(20),
                                                width: ResponsiveSize(20),
                                                tintColor: COLOR.white
                                            }}
                                            source={require('../../assets/images/Common/SAR.png')}
                                        />

                                        <View style={{ width: ResponsiveSize(5) }} />

                                        <Text
                                            style={{
                                                color: COLOR.white,
                                                fontSize: ResponsiveSize(22),
                                                fontFamily: FONTS.SemiBold
                                            }}>
                                            {cartTotal}
                                        </Text>

                                    </View>

                                </View>
                            </View>
                        }
                    </View>

                }

                {
                    index == 1 &&
                    <View style={{ flex: 1 }}>
                        <Shooping
                            setLoadding={setLoadding}
                            setAddressCode={setAddressCode}
                            setBillingAddress={setBillingAddress}
                            data={shopinfCratData}
                            lang={lang}
                        />
                    </View>
                }
                {
                    index == 2 &&
                    <View>
                        <ShipingMethod
                            setShippingdata={setShippingdata}
                            selectAddressList={selectAddressList}
                            selectShipping={selectShipping}
                            Token={Token}
                            addressCod={addressCod}
                            setStorePickUpData={setStorePickUpData}
                            data={ShhippingData} lang={lang} />
                    </View>
                }
                {
                    index == 3 &&
                    <View style={{ flex: 1 }}>
                        <Payment
                            setTempWalletcheck={setTempWalletcheck}
                            coupanCode={coupanCode}
                            setCoupanCode={setCoupanCode}
                            coupanListData={coupanListData}
                            setSelectPayment={setSelectPayment}
                            selectPaymentMethod={selectPaymentMethod}
                            selectPayment={selectPayment}
                            wallateAmount={wallateAmount}
                            paymentScreenData={paymentScreenData}
                            setActionCode={setActionCode}
                            applyCoupan={applyCoupan}
                            data={shopinfCratData}
                            lang={lang}
                            remove={remove}
                            PlaceHolder={PlaceHolder}
                            validation={validation}
                            validationn={validationn}
                            setEtrx={setEtrx}
                            setSelectPayemrntMethod={setSelectPayemrntMethod}
                            setWalletAmount={setWalletAmount}
                            setGiftCardCode={setGiftCardCode}
                            applyGiftCart={applyGiftCart}
                            giftCardCode={giftCardCode}
                            giftCardList={giftCardList}
                            setGiftCardList={setGiftCardList}
                            setGiftCartDis={setGiftCartDis}
                            getGiftCartdSatus={getGiftCartdSatus}
                            setGiftSatus={setGiftSatus}
                            giftSatus={giftSatus}
                            type={type}
                        />
                    </View>
                }

            </View>
            <View style={{
                height: index == 0 ? ResponsiveSize(170) : ResponsiveSize(80)
            }}></View>

            <View style={[
                styles.btn,
                lang == NUMBER.num0 && {
                    flexDirection: ALINE.row
                }
            ]}>

                {(!isLoadding && data.length > 0) &&
                    <View style={[
                        styles.nextProcess,
                        index == 0 && {
                            width: "100%"
                        }]}>
                        <Button
                            onPress={onPress}
                            text={
                                index == 3
                                    ? lable?.ConfirmOrder
                                    : index == 2
                                        ? lable?.TrackOrder
                                        : index == 0
                                            ? lable?.Checkout
                                            : shopinfCratData?.ProceedtoCheckout
                            }
                            color="#009834"
                            ShoopingCart={true}
                        />
                    </View>
                }

                {(index == 1 || index == 2 || index == 3) &&
                    (!isLoadding && data.length > 0) &&
                    <TouchableOpacity
                        onPress={() => {
                            goBack()
                        }}
                        style={styles.goBackBtn}>
                        <Icon
                            name={lang == NUMBER.num0 ? ICON.arrowright : ICON.arrowleft}
                            size={ResponsiveSize(40)}
                            color={COLOR.black}
                        />
                    </TouchableOpacity>
                }
            </View>

            {isLoadding &&
                <View style={{
                    position: 'absolute',
                    width: "100%",
                    height: "100%"
                }}>
                    <CusLoader />
                </View>
            }

            <Modal
                animationType='slide'
                transparent={true}
                visible={showModal}
            >
                <CusModal
                    setModalShow={setShowModal}
                    text={messages}
                />
            </Modal>

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
        justifyContent: "space-around",
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
        marginLeft: ResponsiveSize(5),
        fontSize: ResponsiveSize(18),
        fontFamily: FONTS.Regular

    },
    lineView: {
        height: ResponsiveSize(2),
        width: ResponsiveSize(20)
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
        padding: ResponsiveSize(20),
        flex: 1,
        height: "100%",
    },
    container: {
        height: "77%",
        width: "100%"
    },
    outOfStockText: {
        color: COLOR.primaray,
        fontSize: ResponsiveSize(22),
        fontWeight: FONTWEGHIT.font600
    },
    removeAllText: {
        color: COLOR.darkGray
    },
    textView: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        height: ResponsiveSize(40),
        borderBottomWidth: ResponsiveSize(1),
        borderColor: COLOR.darkGray,
        marginBottom: ResponsiveSize(10)
    },
    subTotalView: {
        width: "93%",
        height: ResponsiveSize(60),
        alignItems: ALINE.center,
        justifyContent: ALINE.spaceBetween,
        flexDirection: ALINE.row,
        paddingHorizontal: ResponsiveSize(20),
        alignSelf: ALINE.center,
        backgroundColor: COLOR.primaray,
        borderWidth: ResponsiveSize(0.5),
        borderColor: "#00000050",
        borderRadius: ResponsiveSize(5),
        bottom: ResponsiveSize(5),
    }
})