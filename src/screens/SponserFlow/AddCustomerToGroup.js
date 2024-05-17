import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ICON } from '../../constants/constants'
import TextFildCus from '../../components/TextFildCus'
import Button from '../../components/Button'
import { COLOR } from '../../constants/style'
import { ResponsiveSize } from '../../utils/utils'

const AddCustomerToGroup = ({ Str, lang }) => {
    return (
        <View style={styles.mainVie}>
            <TextFildCus icon={ICON.usersecret} text={Str?.NickName} />
            <View style={styles.devider} />
            <TextFildCus icon={ICON.emailIcon} text={Str?.Enteremailaddress} />
            <View style={styles.devider} />
            <TextFildCus icon={ICON.emailIcon} text={Str?.ConfirmEmailAddress} />
            <View style={styles.devider} />
            <View>
                <Button text={Str?.Submit} />
            </View>
        </View>
    )
}

export default AddCustomerToGroup

const styles = StyleSheet.create({
    mainVie: {
        flex: 1,
        backgroundColor: COLOR.white,
        padding: ResponsiveSize(20)
    },
    devider: {
        marginTop: ResponsiveSize(20)
    }
})