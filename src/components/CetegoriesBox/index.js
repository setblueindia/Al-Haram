import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WC1, WomenBanner } from '../../assests'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from '../../constants/style'
import { NUMBER } from '../../constants/constants'

const CetegoriesBox = ({ items, index, lang }) => {
    const data = items?.data
    return (
        <View style={[styles.mainView, index % 2 !== 0 && { borderColor: COLOR.white, backgroundColor: COLOR.white }]}>
            <View style={styles.bannerView}>
                <Image style={styles.bannerImg} source={items.banner} />
            </View>
            <View style={[styles.textView, lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <Text style={styles.categoriesName}>{items?.name}</Text>
                <TouchableOpacity>
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
                    data?.map((items, index) => {
                        return (
                            <>
                                <TouchableOpacity key={index}>
                                    <View key={index} style={styles.innerCategoriesView}>
                                        <Image style={styles.storyView} source={items?.img} />
                                    </View>
                                    <Text style={[styles.cetegoriesText, lang?.data == NUMBER.num0 && { transform: [{ rotateY: '180deg' }] }]}>{"Winter"}</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        flexDirection: 'row',
        marginTop: ResponsiveSize(30),
        paddingBottom: ResponsiveSize(30)
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
        textAlign: "center",
        color: COLOR.black,
        marginTop: ResponsiveSize(20)
    }

})