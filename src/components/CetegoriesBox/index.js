import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WC1, WomenBanner } from '../../assests'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from '../../constants/style'
import { NAVIGATION, NUMBER } from '../../constants/constants'
import { BASE_URL } from '../../constants/axios.url'

const CetegoriesBox = ({ items, index, lang, navigation }) => {

    const data = items?.children

    return (
        <View style={[styles.mainView, index % 2 !== 0 && { borderColor: COLOR.white, backgroundColor: COLOR.white }]}>
            <View style={styles.bannerView}>
                <Image style={styles.bannerImg} source={{ uri: BASE_URL + items?.mobile_image }} />
            </View>

            <View style={[styles.textView, lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <Text style={styles.categoriesName}>{items?.name}</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(NAVIGATION.bannerScreen , {cetegouriesId : items?.id}) }}
                >
                    <Text style={styles.viewText}>{"View All"}</Text>
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
              
                        return (
                            <>
                                <TouchableOpacity
                                    onPress={() => { 
                                        navigation.navigate(NAVIGATION.ProductScreen, 
                                            { cetegoriesId: sitems?.id }) }}
                                    style={{ justifyContent: 'center', alignItems: 'center' }} >
                                    <View style={styles.innerCategoriesView}>
                                        <Image style={styles.storyView} source={{ uri: BASE_URL + sitems?.mobile_thumbnail }} />
                                    </View>
                                    <Text style={[styles.cetegoriesText, lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}>{sitems?.name}</Text>
                                </TouchableOpacity>

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
        height: ResponsiveSize(250),
    },
    bannerImg: {
        height: "100%",
        width: "100%",
        resizeMode: RESIZEMODE.contain
    },
    textView: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        paddingHorizontal: ResponsiveSize(10)

    },
    categoriesName: {
        color: COLOR.black,
        fontSize: ResponsiveSize(25),
        fontWeight: FONTWEGHIT.font600
    },
    viewText: {
        color: COLOR.primaray
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