import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR } from '../../constants/style'
import LinearGradient from 'react-native-linear-gradient'
import { EXTRASTR, NUMBER } from '../../constants/constants'
import { FONTS } from '../../constants/fonts'

const SortFilter = ({
    setSortFilter,
    lang,
    setSortBy,
    setActions,
    setProductData,
    sortBy,
    lable
}) => {

    const [productIndex, setProductIndex] = useState()

    const data = lang == NUMBER.num1 ? [

        { id: 0, name: "Relevance" },
        { id: 1, name: "Price Low-High" },
        { id: 2, name: "Price High-Low" },
    ] :
        [
            { id: 0, name: "الأحدث" },
            { id: 1, name: "السعر-من الأقل إلى الأعلى" },
            { id: 2, name: "السعر-من الأعلى إلى الأقل" },
        ]

    const filterOnPress = (index) => {



        if (index == 0) {
            setSortBy(0)
            setActions("relevance")
            const fdata = {
                data: "relevance"
            }
            setProductData(fdata)
            setSortFilter(false)

        }
        if (index == 1) {
            setSortBy(1)
            setActions("ASC")
            const fdata = {
                data: "ASC"
            }
            setProductData(fdata)
            setSortFilter(false)

        }
        if (index == 2) {
            setSortBy(2)
            setActions("DESC")
            const fdata = {
                data: "DESC"
            }
            setProductData(fdata)
            setSortFilter(false)
        }

    }
    return (
        <View style={styles.mainView}>
            <TouchableOpacity
                style={{ flex: 1, width: "100%" }}
                onPress={() => {
                    setSortFilter(false)
                }}>
            </TouchableOpacity>

            <View style={styles.container}>

                <Text style={[
                    styles.title,
                    lang == NUMBER.num0 && {
                        textAlign: EXTRASTR.right
                    }]}>
                    {lable?.SortBy}
                </Text>

                <View style={styles.boxView}>
                    <LinearGradient
                        style={styles.boxView}
                        colors={['#fff', '#FFE3E4']}
                        angle={160} >

                        {data.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setProductIndex(index)
                                        filterOnPress(index)
                                    }}
                                    style={[
                                        styles.containView,
                                        lang == NUMBER.num0 && {
                                            flexDirection: ALINE.rowreverse
                                        }]}>
                                    <View style={[
                                        styles.checkBoxCircal,
                                        {
                                            justifyContent: ALINE.center,
                                            alignItems: ALINE.center,
                                            padding: ResponsiveSize(5)
                                        }]}>
                                        <View
                                            style={[
                                                styles.checkBoxCircal2,
                                                (index == productIndex || index == sortBy) && { backgroundColor: COLOR.primaray }]} />
                                    </View>

                                    <Text
                                        style={[
                                            styles.checkText,
                                            lang == NUMBER.num0 && {
                                                marginRight: ResponsiveSize(20), textAlign: EXTRASTR.right
                                            }]}>{item?.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                        }
                    </LinearGradient>



                </View>

            </View>
        </View>
    )
}

export default SortFilter

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        backgroundColor: COLOR.BLACK30,
        height: "100%",
        width: "100%",
        alignItems: ALINE.center,
        justifyContent: ALINE.flexend
    },
    container: {
        width: "100%",
        backgroundColor: COLOR.white,
        borderTopRightRadius: ResponsiveSize(30),
        borderTopLeftRadius: ResponsiveSize(30),
        paddingHorizontal: ResponsiveSize(30),
        paddingBottom: ResponsiveSize(30)
    },
    title: {
        fontSize: ResponsiveSize(25),
        paddingVertical: ResponsiveSize(20),
        color: COLOR.primaray,
        fontFamily: FONTS.SemiBold
    },
    boxView: {
        width: "100%",
    },
    containView: {
        height: ResponsiveSize(60),
        width: "100%",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        flexDirection: ALINE.row,
        alignItems: ALINE.center,
        paddingHorizontal: ResponsiveSize(20)
    },
    checkBoxCircal: {
        height: ResponsiveSize(25),
        width: ResponsiveSize(25),
        borderRadius: ResponsiveSize(100),
        borderColor: COLOR.primaray,
        borderWidth: ResponsiveSize(2),
    },
    checkBoxCircal2: {
        height: "100%",
        width: "100%",
        borderRadius: ResponsiveSize(100)
    },
    checkText: {
        fontSize: ResponsiveSize(22),
        marginLeft: ResponsiveSize(20),
        flex: 1,
        color: COLOR.darkGray,
        fontFamily: FONTS.Regular
    }

})