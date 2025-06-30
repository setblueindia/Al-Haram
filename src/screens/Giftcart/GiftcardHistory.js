import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../constants/style'
import CommanHeader from '../../components/ComanHeader'
import { useSelector } from 'react-redux'
import { ResponsiveSize } from '../../utils/utils'
import { NUMBER } from '../../constants/constants'
import { useNavigation } from '@react-navigation/native'

const GiftcardHistory = () => {
    const lang = useSelector(state => state.lang?.data)
    const navigation = useNavigation()
    const data = [1, 2, 3, 4, 5]
    return (
        <View style={styles.mainView}>
            <CommanHeader name={"Gift Card History"} lang={lang} navigation={navigation} />
            <View style={styles.conatiner}>
                {data?.map((item, index) => {
                    return (
                        <View>


                            <View key={index} style={styles.conatinerVIew}>

                                <View style={[styles.lineView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                    <Text style={[styles.firstText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{"Order Number :"}</Text>
                                    <Text style={styles.secondText}>{"95985236582"}</Text>
                                </View>
                                <View style={[styles.lineView, { marginTop: ResponsiveSize(10) }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                    <Text style={[styles.firstText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{"Purchased on :"}</Text>
                                    <Text style={styles.secondText}>{"Nov 22, 2024 -7:11:34 am"}</Text>
                                </View>
                                <View style={[styles.lineView, { marginTop: ResponsiveSize(10) }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                    <Text style={[styles.firstText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{"Bill to Name :"}</Text>
                                    <Text style={styles.secondText}>{"Biiling Name"}</Text>
                                </View>
                                <View style={[styles.lineView, { marginTop: ResponsiveSize(10) }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                    <Text style={[styles.firstText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{"Shipped to Name : "}</Text>
                                    <Text style={styles.secondText}>{"shipped Name"}</Text>
                                </View>

                            </View>
                            <View style={{ marginTop: ResponsiveSize(20) }} />


                        </View>


                    )
                })

                }

            </View>
        </View>
    )
}

export default GiftcardHistory

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    conatiner: {
        flex: 1,
        padding: ResponsiveSize(20)
    },
    conatinerVIew: {
        width: "100%",
        // height: ResponsiveSize(250),
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.primaray,
        borderRadius: ResponsiveSize(10),
        padding: ResponsiveSize(20)
    },
    lineView: {
        flexDirection: 'row'
    },
    firstText: {
        color: COLOR.black,
        width: ResponsiveSize(200),
        fontSize: ResponsiveSize(20)
    },
    secondText: {
        color: "#00000090",
        fontSize: ResponsiveSize(20)
    }
})