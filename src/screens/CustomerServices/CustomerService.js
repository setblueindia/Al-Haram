import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import CommanHeader from '../../components/ComanHeader'
import { NUMBER, PROFILEStr } from '../../constants/constants'
import { styles } from './customer.style'
import useCustomerServiceHook from './customer.hook'

const CustomerService = () => {
    const { TelNUmber, navigation, Emaile, VatNo, CRNumber, lang , name , Str } = useCustomerServiceHook()
    return (

        <View style={styles.mainView}>
            <CommanHeader navigation={navigation} name={Str.CustomerService} lang={lang}/>
            <View style={styles.containerView}>
                <View style={[styles.container ]}>
                    <Text style={[styles.nameText , lang == NUMBER.num0 && {textAlign:'right'}]}>{name}</Text>
                    <Text style={[styles.text , lang == NUMBER.num0 && {textAlign:'right'}]}> {TelNUmber}</Text>
                    <Text style={[styles.text , lang == NUMBER.num0 && {textAlign:'right'}]}>{Emaile}</Text>
                    <Text style={[styles.text , lang == NUMBER.num0 && {textAlign:'right'}]}>{VatNo}</Text>
                    <Text style={[styles.text , lang == NUMBER.num0 && {textAlign:'right'}]}>{CRNumber}</Text>
                </View>
            </View>
        </View>

    )
}

export default CustomerService
