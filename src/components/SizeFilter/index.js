import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { COLOR, FONTWEGHIT } from '../../constants/style'
import Icon from "react-native-vector-icons/Entypo";
import { NUMBER } from '../../constants/constants';

const SizeFilter = ({ setSizeFilter, lang }) => {

    const [index1, setIndex1] = useState()
    const [index2, setIndex2] = useState()
    const data = lang == NUMBER.num1 ? [
        {
            name: "Size"
        },
        {
            name: "Color"
        },
        {
            name: "Category"
        },
        {
            name: "Price"
        },
    ] : [

        {
            name: "مقاس"
        },
        {
            name: "لون"
        },
        {
            name: "فئة"
        },
        {
            name: "سعر"
        },

    ]

    const secondData = [
        {
            val1: "S",
            val2: "30"
        },
        {
            val1: "M",
            val2: "32"
        },
        {
            val1: "xl",
            val2: "42"
        },
        {
            val1: "xxl",
            val2: "52"
        },
        {
            val1: "exxl",
            val2: "82"
        },
        {
            val1: "S",
            val2: "30"
        },
        {
            val1: "M",
            val2: "32"
        },
        {
            val1: "xl",
            val2: "42"
        },
        {
            val1: "xxl",
            val2: "52"
        },
        {
            val1: "exxl",
            val2: "82"
        },
        {
            val1: "xl",
            val2: "42"
        },
        {
            val1: "xxl",
            val2: "52"
        },
        {
            val1: "exxl",
            val2: "82"
        },
        {
            val1: "exxl",
            val2: "82"
        },
        {
            val1: "xl",
            val2: "42"
        },
        {
            val1: "xxl",
            val2: "52"
        },
        {
            val1: "exxl",
            val2: "82"
        }
    ]

    return (
        <View style={styles.mainView}>
            <TouchableOpacity
                style={{ flex: 1, width: "100%" }}
                onPress={() => { setSizeFilter(false) }}
            />
            <View style={styles.filterMainView}>
                <View style={[styles.headerView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>

                    <View style={[styles.headerTextView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                        <TouchableOpacity onPress={() => { setSizeFilter(false) }}>
                            <Icon style={styles.crossIcon} name={"circle-with-cross"} size={ResponsiveSize(35)} />
                        </TouchableOpacity>
                        <Text style={[styles.filterText, lang == NUMBER.num0 && { marginRight: ResponsiveSize(10) }]}>{lang == NUMBER.num1 ? "Filter By" : "مصنف بواسطة"}</Text>
                    </View>

                    <View style={[styles.btnView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                        <TouchableOpacity style={styles.clearView}>
                            <Text style={styles.clearText}>{lang == NUMBER.num1 ? "Clear" : "واضح"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.ApplyView, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>
                            <Text style={styles.applyText}>{lang == NUMBER.num1 ? "Apply" : "يتقدم"}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={[styles.containt, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                    <View style={styles.firstView}>
                        {
                            data.map((items, index) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => { setIndex2(index) }}
                                        key={index} style={[styles.innerFirstView, index == index2 && { backgroundColor: "#F8F2F2" }]}>
                                        <Text style={styles.firstViewText}>{items?.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <ScrollView style={styles.secondView}>
                        {secondData?.map((items, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setIndex1(index)
                                    }}
                                    key={index}
                                    style={[styles.secondInnerView, index == index1 && { backgroundColor: "#FFFFFF" }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                    <Text style={styles.innerText}>{items.val1}</Text>
                                    <Text style={styles.innerText}>{items.val2}</Text>
                                </TouchableOpacity>
                            )
                        })}

                        <View style={{ height: ResponsiveSize(80) }} />
                    </ScrollView>
                </View>

            </View>
        </View>
    )
}

export default SizeFilter

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#00000040",
        justifyContent: 'flex-end'
    },
    filterMainView: {
        height: ResponsiveSize(1000),
        width: "100%",
        backgroundColor: COLOR.white,
        borderTopRightRadius: ResponsiveSize(30),
        borderTopLeftRadius: ResponsiveSize(30)
    },
    headerView: {
        height: ResponsiveSize(80),
        width: "100%",
        borderBottomWidth: ResponsiveSize(1),
        borderColor: "#D5C1C1",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: ResponsiveSize(30)
    },
    headerTextView: {
        flexDirection: 'row',
        // marginLeft:ResponsiveSize(20),
        // justifyContent:'center',
        alignItems: 'center',

    },
    filterText: {
        color: COLOR.primaray,
        marginLeft: ResponsiveSize(10)
    },
    crossIcon: {
        color: COLOR.primaray
    },
    clearView: {
        height: ResponsiveSize(40),
        width: ResponsiveSize(100),
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.liteGreen,
        marginRight: ResponsiveSize(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnView: {
        flexDirection: 'row'
    },
    ApplyView: {
        height: ResponsiveSize(40),
        width: ResponsiveSize(100),
        backgroundColor: COLOR?.primaray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    applyText: {
        color: COLOR.white,
        fontWeight: FONTWEGHIT.font600
    },
    clearText: {
        color: COLOR.black
    },
    firstView: {
        width: ResponsiveSize(250),
    },
    secondView: {
        // height: ResponsiveSize(750),
        width: ResponsiveSize(340),
        // backgroundColor:"#00000040",
        // justifyContent: 'flex-end',
        borderWidth: ResponsiveSize(1),
        borderColor: "#D5C1C1",

    },
    containt: {
        width: "100%",
        flexDirection: "row"
    },
    innerFirstView: {
        height: ResponsiveSize(70),
        borderWidth: ResponsiveSize(1.5),
        borderColor: "#D5C1C1",
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondInnerView: {
        height: ResponsiveSize(70),
        backgroundColor: "#F8F2F2",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: ResponsiveSize(50)
        // alignItems: 'center',
    },
    innerText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(30)
    },
    firstViewText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(25)
    }
})