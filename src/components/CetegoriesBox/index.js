import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from '../../constants/style'
import { NAVIGATION, NUMBER } from '../../constants/constants'
import { BASE_URL } from '../../constants/axios.url'
import { Ar, En } from '../../constants/localization'
import FastImage from 'react-native-fast-image'

const CetegoriesBox = ({ items, index, lang, navigation }) => {

    const lable = lang?.data == NUMBER.num1 ? En : Ar
    const data = items?.children

    return (
        <View style={[styles.mainView, index % 2 !== 0 && { borderColor: COLOR.white, backgroundColor: COLOR.white }]}>
            <View style={styles.bannerView}>
                <FastImage resizeMode={RESIZEMODE.contain} style={styles.bannerImg} source={{ uri: BASE_URL + items?.mobile_image }} />
            </View>
            <View style={[styles.textView, lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <Text style={[styles.categoriesName, lang.data == NUMBER.num0 && { textAlign: 'right' }]}>{items?.name}</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(NAVIGATION.bannerScreen, { cetegouriesId: items?.id })
                    }}>
                    {items?.display_mode == "PAGE" && <Text style={[styles.viewText, lang.data == NUMBER.num0 && { textAlign: 'left' }]}>{lable.ViewAll}</Text>}
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                automaticallyAdjustContentInsets={true}
                style={[styles.subCategories,
                lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}
            >
                {
                    data?.map((sitems, index) => {
                        const name = sitems?.name
                        const finalName = name.substring(0, 10);
                        const RoundImage = BASE_URL + sitems?.mobile_circle_thumbnail

                        // console.log(":::::" , sitems?.include_in_menu)

                        return (
                            <>
                                {sitems?.include_in_menu == 1 && <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate(NAVIGATION.ProductScreen,
                                            { cetegoriesId: sitems?.id })
                                    }}
                                    style={{ justifyContent: 'center', alignItems: 'center' }} >
                                    {RoundImage && <View style={styles.innerCategoriesView}>
                                        <FastImage style={styles.storyView} source={{ uri: RoundImage }} />
                                    </View>}
                                    <Text style={[styles.cetegoriesText, lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}>{sitems?.name}</Text>
                                </TouchableOpacity>}

                                <View style={{ width: ResponsiveSize(30) }} />
                            </>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default CetegoriesBox

const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: ResponsiveSize(20),
        backgroundColor: "#FFFBEB",
        borderWidth: ResponsiveSize(1),
        borderColor: "#CEB282"
    },
    bannerView: {
        // height: ResponsiveSize(250),
        marginTop: ResponsiveSize(30),
        marginBottom: ResponsiveSize(20)
        // backgroundColor:'red'
    },
    bannerImg: {
        height: ResponsiveSize(195),
        width: "100%",
        resizeMode: RESIZEMODE.contain,
        borderRadius: ResponsiveSize(20),
        // backgroundColor:'red'

    },
    textView: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        paddingHorizontal: ResponsiveSize(10)

    },
    categoriesName: {
        color: COLOR.black,
        fontSize: ResponsiveSize(25),
        fontWeight: FONTWEGHIT.font600,
        width: ResponsiveSize(400)
    },
    viewText: {
        color: COLOR.primaray,
        width: ResponsiveSize(100),
        textAlign: 'right'
    },
    subCategories: {
        flexDirection: ALINE.row,
        marginTop: ResponsiveSize(30),
        paddingBottom: ResponsiveSize(10)
    },
    innerCategoriesView: {
        height: ResponsiveSize(130),
        width: ResponsiveSize(130),
        backgroundColor: COLOR.white,
        borderRadius: ResponsiveSize(100),
        borderWidth: ResponsiveSize(1),
        borderColor: "#00000040"
    },
    storyView: {
        borderRadius: ResponsiveSize(100),
        height: "100%",
        width: "100%",
    },
    cetegoriesText: {
        textAlign: ALINE.center,
        color: COLOR.black,
        marginTop: ResponsiveSize(20),
        width: ResponsiveSize(120),
        height: ResponsiveSize(80),
        textAlign: 'center',

    }

})