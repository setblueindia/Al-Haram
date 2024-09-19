import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import Icon from "react-native-vector-icons/Entypo";
import { NUMBER } from '../../constants/constants';
import CustomRangeSlider from '../RangSlider';

const SizeFilter = ({
    setSizeFilter,
    lang,
    filterData,
    setColor,
    setSize,
    setPrice,
    setProductData,
    price,
    size,
    color
}) => {
    const [index1, setIndex1] = useState()
    const [index2, setIndex2] = useState()
    const [slider, setSilder] = useState(false)
    const [optionData, setOpationData] = useState([])
    const [cetegories, setCetegouries] = useState('')
    const [sizeIndex, setSizeIndex] = useState()
    const [colorIndex, setColorIndex] = useState()
    const [displayIndex, setDisplayIndex] = useState()
    const [code, setCode] = useState()
    const [cetegoriesIndex, setCetegoriesIndex] = useState()
    const [priceIndex, setPriceIndex] = useState()
    const [unselect, SetUnselect] = useState(false)
    const [num1, setNum1] = useState(price?.data?.length > 0 ? price?.data[0] : 0)
    const [num2, setNum2] = useState(price?.data?.length > 0 ? price?.data[1] : 0)

    const [lowPrese , setLowPrice]  = useState(price?.data?.length > 0 ? price?.data[0] : 0)
    const [hightPrice , setHighPrice] = useState(price?.data?.length > 0 ? price?.data[1] : 0)
    const fdata = true
    useEffect(() => {
        filterData?.map((item) => {
            if (item?.attribute_code == "price") {
                const numbers = item?.options[0]?.value
                const numbers2 = item?.options[item?.options?.length - 1]?.value
                const result = numbers.split('_')[0];
                const result2 = numbers2.split('_')[1];
                let number1 = parseInt(result);
                let number2 = parseInt(result2);
                setLowPrice(number1)
                setHighPrice(number2)
                price?.data?.length <= 0 &&  setNum1(number1)
                price?.data?.length <= 0 &&  setNum2(number2)
                setOpationData(item?.options)
                setIndex2(0)
                setSilder(true)
            }
        })
    }, [])

    useEffect(() => {
        setPrice({ visibale: true, data: (lowPrese && hightPrice ) ? [num1, num2] : [] })
    }, [num1, num2])

    const onClear = () => {
        setSize({ visibale: false, data: {} })
        setPrice({ visibale: false, data: [] })
        setColor({ visibale: false, data: {} })
        filterData?.map((item) => {
            if (item?.attribute_code == "price") {
                setOpationData(item?.options)
                setIndex2(0)
                setSilder(true)
                SetUnselect(true)
            }
        })

    }

   const innderDataOnPress = (cIndex, items) => {
   const tempData = items.value
        if (cetegories == "size") {
            setSizeIndex(cIndex)
            setSize({ visibale: true, data: tempData })
            setCode('')
        }
        if (cetegories == "category_uid") {
            setCetegoriesIndex(cIndex)
            setCode('')
        }
        if (cetegories == "color") {
            setColorIndex(cIndex)
            setColor({ visibale: true, data: tempData })
            setCode('')
        }
        if (cetegories == "display_sale_label") {
            setDisplayIndex(cIndex)
            setCode('')
        }
        if (cetegories == "price") {
            setPriceIndex(cIndex)
            setPrice({ visibale: true, data: [num1, num2] })
            setCode('')
        }
    }

    const ctegouriesSelection = (index) => {

        if (cetegories == "size" && index == sizeIndex) {
            return true
        } else if (cetegories == "color" && index == colorIndex) {
            return true
        } else if (cetegories == "category_uid" && index == cetegoriesIndex) {
            return true
        } else if (cetegories == "display_sale_label" && index == displayIndex) {
            return true
        } else {
            return false
        }
    }

    const finalPress = (items) => {
        if (items == "size") {
            setSilder(false)
            setCode(size?.data)
        }
        if (items == "category_uid") {
            setSilder(false)
            setCode("")
        }
        if (items == "color") {
            setSilder(false)
            setCode(color?.data)
        }
        if (items == "display_sale_label") {
            setSilder(false)
            setCode("")
        }
        if (items == "price") {
            setSilder(true)
            setCode("")
        }
    }

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
                        <Text style={[styles.filterText, lang == NUMBER.num0 && { marginRight: ResponsiveSize(10) }]}>{lang == NUMBER.num1 ? "Filter By" : "تصنيف"}</Text>
                    </View>

                    <View style={[styles.btnView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                        <TouchableOpacity
                            onPress={() => { onClear() }}
                            style={styles.clearView}>
                            <Text style={styles.clearText}>{lang == NUMBER.num1 ? "Clear" : "حذف"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { setProductData(fdata), setSizeFilter(false) }}
                            style={[styles.ApplyView, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>
                            <Text style={styles.applyText}>{lang == NUMBER.num1 ? "Apply" : "تطبيق"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.containt, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                    <View style={styles.firstView}>
                        {
                            filterData?.map((items, index) => {

                                // console.log(items?.label)
                                return (
                                    <View key={index}>
                                      {  items?.label !== "Category" &&
                                        <TouchableOpacity
                                            onPress={() => {
                                                setOpationData(items?.options),
                                                    setIndex2(index),
                                                    setCetegouries(items?.attribute_code)
                                                finalPress(items?.attribute_code)
                                            }}
                                            key={index} style={[styles.innerFirstView, index == index2 && { backgroundColor: "#F8F2F2" }]}>
                                            <Text style={styles.firstViewText}>{items?.label}</Text>
                                        </TouchableOpacity>}
                                    </View>
                                    )
                            })}
                    </View>
                    <ScrollView style={styles.secondView}>
                        {!slider
                            && optionData.length > 0 && optionData?.map((items, index) => {
                                let result = ctegouriesSelection(index)

                                const label = items?.label?.length > 10 ? items?.label?.substring(0,10) :items?.label

                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            innderDataOnPress(index, items)
                                            setIndex1(index)
                                            SetUnselect(false)
                                            result = ctegouriesSelection(index)
                                        }}
                                        key={index}
                                        style={[styles.secondInnerView,
                                        (result && !unselect || code == items?.value ) && { backgroundColor: COLOR.white },
                                        lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                        <Text style={styles.innerText}>{items?.label?.length > 10   ? label + "..." :label}</Text>
                                        <Text style={styles.innerText}>{items?.count}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        {
                            slider &&

                            <View style={{ width: "100%", height: ResponsiveSize(200), justifyContent: 'center', alignItems: 'center', width: "100%" }}>
                                <View style={styles.rangeTex}>
                                    <Text style={[styles.valueText, { textAlign: 'left' }]}>{price?.data?.length > 0 ? price?.data[0] : lowPrese}</Text>
                                    <Text style={[styles.valueText, { textAlign: 'right' }]}>{price?.data?.length > 0 ? price?.data[1] : hightPrice}</Text>
                                </View>
                                <CustomRangeSlider price={price} setMinPrice={setLowPrice} setMaxPrice={setHighPrice} setMinValue={setNum1} setMaxValue={setNum2} lowPrese={lowPrese} hightPrice={hightPrice} />
                            </View>
                        }

                    <View style={{height:ResponsiveSize(100)}}/>
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
        flexDirection: ALINE.row,
        alignItems: ALINE.center,
        justifyContent: ALINE.spaceBetween,
        paddingHorizontal: ResponsiveSize(30)
    },
    headerTextView: {
        flexDirection: ALINE.row,
        alignItems: ALINE.center,

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
        justifyContent: ALINE.center,
        alignItems: ALINE.center
    },
    btnView: {
        flexDirection: ALINE.row
    },
    ApplyView: {
        height: ResponsiveSize(40),
        width: ResponsiveSize(100),
        backgroundColor: COLOR?.primaray,
        justifyContent: ALINE.center,
        alignItems: ALINE.center
    },
    applyText: {
        color: COLOR.white,
        fontWeight: FONTWEGHIT.font600,
        textAlign:ALINE.center,
        width:"100%"
    },
    clearText: {
        color: COLOR.black,
        width:"100%",
        textAlign:ALINE.center
    },
    firstView: {
        width: ResponsiveSize(250),
    },
    secondView: {
        width: ResponsiveSize(340),
        // borderWidth: ResponsiveSize(1),
        // borderRightWidth:ResponsiveSize(1),
        // borderLeftWidth:ResponsiveSize(1),
        borderBottomWidth:ResponsiveSize(0),
        borderColor: "#D5C1C1",
    },
    containt: {
        width: "100%",
        flexDirection: ALINE.row
    },
    innerFirstView: {
        height: ResponsiveSize(70),
        borderWidth: ResponsiveSize(1.5),
        borderColor: "#D5C1C1",
        alignItems: ALINE.center,
        justifyContent: ALINE.center
    },
    secondInnerView: {
        height: ResponsiveSize(70),
        backgroundColor: "#F8F2F2",
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        alignItems: ALINE.center,
        paddingHorizontal: ResponsiveSize(20)
    },
    innerText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(26)
    },
    firstViewText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(25),
        width:"100%",
        textAlign:ALINE.center
    },
    valueText: {
        fontSize: ResponsiveSize(25),
        marginBottom: ResponsiveSize(10),
        color: COLOR.black,
        flex: 1
    },
    rangeTex: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        width: "100%",
        paddingHorizontal: ResponsiveSize(20),
    }
})