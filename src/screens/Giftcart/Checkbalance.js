import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import CommanHeader from '../../components/ComanHeader'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'
import { ResponsiveSize } from '../../utils/utils'
import { GiftCartICON } from '../../assests'

const Checkbalance = () => {
    const navigation = useNavigation()
    const lang = useSelector(state => state?.lang?.data)
    const labale = lang == NUMBER.num0 ? Ar : En

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <View style={styles.mainView}>
            <CommanHeader name={labale?.giftCardBalcnce} lang={lang} navigation={navigation} />
            <View style={styles.containerView}>
                <View style={styles.firstView}>
                    <View style={styles.imageView}>
                        <Image style={{ resizeMode: 'contain', height: "100%", width: "100%" }} source={GiftCartICON} />
                    </View>
                    <Text style={styles.titelText}>{"Apply Gift Card Code"}</Text>

                    <View style={[styles.boxView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter Your Code'
                            placeholderTextColor={COLOR.darkGray}
                            textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
                        />

                        <TouchableOpacity style={styles.addBtnView}>
                            <Text style={styles.addText}>{"ADD"}</Text>
                        </TouchableOpacity>

                    </View>

                </View>
                <ScrollView>
                    {data?.map((item, index) => {
                        return (

                            <View key={index} style={styles.satusView}>

                                <View style={[styles.textView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                    <View>
                                        <View style={[{ flexDirection: 'row', alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                            <Text style={styles.firstText}>{"Code : "}</Text>
                                            <Text style={styles.secondView}>{"22334412345565"}</Text>

                                        </View>
                                        <View style={{ marginTop: ResponsiveSize(10) }} />
                                        <View style={[{ flexDirection: 'row', alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                            <Text style={styles.firstText}>{"Current Balance : "}</Text>
                                            <Text style={styles.secondView}>{"$ 516"}</Text>
                                        </View>

                                    </View>

                                    <View style={{ justifyContent: 'flex-end' }}>
                                        <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                            <Text style={[styles.firstText]}>{"Status : "}</Text>
                                            <Text style={[styles.secondView, { color: "green", fontWeight: FONTWEGHIT.font600 }]}>{"Active"}</Text>

                                        </View>

                                        <View style={{ marginTop: ResponsiveSize(10) }} />

                                        <TouchableOpacity style={styles.removeBTN}>
                                            <Text style={[styles.firstText, { color: COLOR.white }]}>{"Remove"}</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>

                                <View style={styles.lineView} />

                                <View style={{ width: "100%", flexDirection: ALINE.row, justifyContent: ALINE.spaceBetween }}>
                                    <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                        <Text style={styles.firstText}>{"Usage : "}</Text>
                                        <Text style={styles.secondView}>{"Multiple"}</Text>

                                    </View>
                                    <View style={{ marginTop: ResponsiveSize(10) }} />
                                    <View style={[{ flexDirection: ALINE.row, alignItems: ALINE.center }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                        <Text style={styles.firstText}>{"Valid Till : "}</Text>
                                        <Text style={styles.secondView}>{"Unlimited"}</Text>
                                    </View>

                                </View>

                            </View>


                        )
                    })}
                </ScrollView>

            </View>
        </View>
    )
}

export default Checkbalance

const styles = StyleSheet.create({

    lineView: {
        width: "100%",
        height: ResponsiveSize(1),
        backgroundColor: COLOR.darkGray,
        marginTop: ResponsiveSize(20),
        marginBottom: ResponsiveSize(20)
    },

    removeBTN: {
        height: ResponsiveSize(40),
        width: ResponsiveSize(140),
        backgroundColor: COLOR.primaray,
        borderRadius: ResponsiveSize(10),
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    containerView: {
        flex: 1,
        padding: ResponsiveSize(20)
    },
    firstView: {
        // height: ResponsiveSize(300),
        width: "100%",
        backgroundColor: "#cccccc20",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        paddingHorizontal: ResponsiveSize(20),
        paddingVertical: ResponsiveSize(40)
    },
    imageView: {
        height: ResponsiveSize(80),
        width: ResponsiveSize(80),
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor: COLOR.black
    },
    titelText: {
        color: COLOR.primaray,
        marginTop: ResponsiveSize(20),
        fontSize: ResponsiveSize(25),
        fontWeight: FONTWEGHIT.font400
    },
    boxView: {
        height: ResponsiveSize(70),
        width: "100%",
        borderWidth: ResponsiveSize(1),
        borderColor: "green",
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ResponsiveSize(20),
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: ResponsiveSize(5)

    },
    textInput: {
        width: ResponsiveSize(300),
        height: "100%",
        // backgroundColor: COLOR.black
        color: COLOR.black,
        paddingHorizontal: ResponsiveSize(10)
    },
    addBtnView: {
        height: "100%",
        width: ResponsiveSize(150),
        backgroundColor: "green",
        borderRadius: ResponsiveSize(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    addText: {
        color: COLOR.white
    },
    satusView: {
        // height: ResponsiveSize(200),
        width: "100%",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.primaray,
        marginTop: ResponsiveSize(25),
        backgroundColor: COLOR.white,
        paddingHorizontal: ResponsiveSize(20),
        paddingVertical: ResponsiveSize(30),
        borderRadius: ResponsiveSize(10)
    },
    textView: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between'
    },
    firstText: {
        color: COLOR.black,
        fontWeight: FONTWEGHIT.font600,
        fontSize: ResponsiveSize(22)
    },
    secondView: {
        color: COLOR.black,
        fontSize: ResponsiveSize(20)
    }
})