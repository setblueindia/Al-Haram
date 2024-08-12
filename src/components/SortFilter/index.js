import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { COLOR, FONTWEGHIT } from '../../constants/style'
import LinearGradient from 'react-native-linear-gradient'
import { NUMBER } from '../../constants/constants'

const SortFilter = ({ setSortFilter, lang, setSortBy, setActions , getData  }) => {

    const [productIndex, setProductIndex] = useState()

    const data = lang == NUMBER.num1 ? [

        { id: 0, name: "Relevance" },
        { id: 1, name: "New Arrivals" },
        { id: 2, name: "Price Low-High" },
        { id: 3, name: "Price High-Low" },
    ] :
        [
            { id: 0, name: "ملاءمة" },
            { id: 1, name: "الوافدون الجدد" },
            { id: 2, name: "السعر منخفض مرتفع" },
            { id: 3, name: "السعر مرتفع ومنخفض" },
        ]

    const filterOnPress = (index) => {

     

        if (index == 0) {
            console.log("index:::::::::::" , index)
            setSortBy("")
            setActions("DESC")
            // getFilterData()
            const fdata = {
                sortby : "",
                action : "DESC"
            }
            getData(fdata)
            setSortFilter(false)
            
        }
        if (index == 1) {
            console.log("index:::::::::::" , index)
            setSortBy("position")
            setActions("ASC")
            const fdata = {
                sortby : "position",
                action : "ASC"

            }
            getData(fdata)
            setSortFilter(false)

        }
        if (index == 2) {
            setSortBy("price")
            setActions("ASC")
            const fdata = {
                sortby : "price",
                action : "ASC"

            }
            getData(fdata)
            setSortFilter(false)

        }
        if (index == 3) {
            setSortBy("price")
            setActions("DESC")
            const fdata = {
                sortby : "price",
                action : "DESC"

            }
            getData(fdata)
            setSortFilter(false)

        }



    }
    return (
        <View style={styles.mainView}>
            <TouchableOpacity onPress={() => { setSortFilter(false) }} style={{ flex: 1, width: "100%" }}>

            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={[styles.title , lang == NUMBER.num0 &&  {textAlign:'right'}]}>{lang == NUMBER.num1 ? "Sort By" : "ترتيب حسب"}</Text>

                <View style={styles.boxView}>

                    <LinearGradient
                        style={styles.boxView}
                        colors={['#fff', '#FFE3E4']}
                        angle={160} >

                        {data.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setProductIndex(index), filterOnPress(index)
                                    }}
                                    style={[styles.containView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                    <View style={[styles.checkBoxCircal, { justifyContent: 'center', alignItems: 'center', padding: ResponsiveSize(5) }]}>
                                        <View style={[styles.checkBoxCircal2, index == productIndex && { backgroundColor: COLOR.primaray }]} />
                                    </View>

                                    <Text style={[styles.checkText, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) , textAlign:'right'}]}>{item?.name}</Text>
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
        backgroundColor: "#00000030",
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-end'
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
        fontSize: ResponsiveSize(30),
        padding: ResponsiveSize(30),
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600
    },
    boxView: {
        width: "100%",
        borderWidth: ResponsiveSize(0.5),
        borderColor: COLOR.gray,
    },
    containView: {
        height: ResponsiveSize(80),
        width: "100%",
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: ResponsiveSize(20)
    },
    checkBoxCircal: {
        height: ResponsiveSize(30),
        width: ResponsiveSize(30),
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
        fontSize: ResponsiveSize(30),
        marginLeft: ResponsiveSize(30),
        flex:1,
        color:COLOR.darkGray
    }

})