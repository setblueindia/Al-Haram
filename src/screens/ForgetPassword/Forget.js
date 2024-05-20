import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onbordingheader from '../../components/OnbordingHeader'
import { styles } from './forget.style'
import TextFildCus from '../../components/TextFildCus'
import { En } from '../../constants/localization'
import { ICON } from '../../constants/constants'
import Button from '../../components/Button'
import useForgetPassword from './Forget.hook'


const Forget = () => {
    const {lang , lable} = useForgetPassword()
    return (
        <View style={styles.mainView}>
            <Onbordingheader />
            <View style={styles.container}>
                <Text style={styles.Textheader}>{lable?.ForgotPassword}</Text>
                <Text style={styles.desText}>{lable?.forgetDes}</Text>
                <View style={styles.lineView} />
                <View style={styles.textInput}>
                    <TextFildCus icon={ICON.emailIcon} text={lable?.Enteremailaddress} />
                </View>
                <View style={styles.btn}>
                    <Button text={lable?.Send} />
                </View>
            </View>
        </View>
    )
}

export default Forget

