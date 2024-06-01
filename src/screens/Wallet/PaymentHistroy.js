import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import CommanHeader from '../../components/ComanHeader'
import { useNavigation } from '@react-navigation/native'
import { ResponsiveSize } from '../../utils/utils'
import { useSelector } from 'react-redux'
import { EXTRASTR, NAVIGATION, NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'

const PaymentHistroy = (props) => {
    const lang = useSelector(state => state?.lang?.data)
    const lable = lang == NUMBER.num0 ? Ar : En
    const navigation = useNavigation()
    const data = [1, 2, 3, 4, 5, 6]




    return (
        <View style={styles.mainView}>
            <CommanHeader name={lable?.WalletHistory} navigation={navigation} lang />
            <ScrollView style={styles.containerView}>
                {data?.map(() => {
                    return (
                        <View>
                            <TouchableOpacity
                            
                            onPress={()=>{navigation.navigate(NAVIGATION.paymentDetails)}}
                            style={styles.container} >
                                <View style={[styles.innerView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse  }]}>
                                    <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right ,  marginRight: ResponsiveSize(40)   }]}>{lable?.Reference + " :"}</Text>
                                    <Text style={[styles.rightScreen, lang == NUMBER.num0 && { marginRight: ResponsiveSize(0) }]}>Use Wallet #136</Text>
                                </View>

                                <View style={[styles.innerView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                    <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right , marginRight: ResponsiveSize(40) }]}>{ lable.Amount + ":"}</Text>
                                    <Text style={[styles.rightScreen, lang == NUMBER.num0 && { marginRight: ResponsiveSize(0) }]}>{"Use Wallet (Debit)"}</Text>
                                </View>

                                <View style={[styles.innerView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                    <Text style={[styles.leftText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right , marginRight: ResponsiveSize(40)  }]}>{lable?.Status+" :"}</Text>
                                    <Text style={[styles.rightScreen, , lang == NUMBER.num0 && { marginRight: ResponsiveSize(0) }, { color: COLOR.liteGreen, fontWeight: FONTWEGHIT.font600 }]}>Approved</Text>
                                </View>

                            </TouchableOpacity>
                            <View style={{ height: ResponsiveSize(20) }} />
                        </View>
                    )
                })}


            </ScrollView>
        </View>
    )
}

export default PaymentHistroy

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    containerView: {
        flex: 1,
        padding: ResponsiveSize(20)
    },
    container: {
        width: "100%",
        backgroundColor: COLOR.white,
        borderRadius: ResponsiveSize(20),
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        shadowColor: '#000',
        borderWidth: ResponsiveSize(0.5),
        borderColor: COLOR.gray,
        padding: ResponsiveSize(20)

    },
    innerView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: ResponsiveSize(30),
        padding: ResponsiveSize(10)

    },
    leftText: {
        fontSize: ResponsiveSize(23),
        fontWeight: FONTWEGHIT.font600,
        color: COLOR.primaray,
        width: ResponsiveSize(150)
    },
    rightScreen: {
        marginLeft: ResponsiveSize(20),
        color: COLOR.black
    }
})