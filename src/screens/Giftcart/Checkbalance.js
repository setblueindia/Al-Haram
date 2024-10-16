import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../constants/style'
import CommanHeader from '../../components/ComanHeader'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'

const Checkbalance = () => {
    const navigation = useNavigation()
    const lang = useSelector(state => state?.lang?.data)
    const labale = lang == NUMBER.num0 ? Ar : En
    return (
        <View style={styles.mainView}>
            <CommanHeader name={labale?.giftCardBalcnce} lang={lang} navigation={navigation} />
        </View>
    )
}

export default Checkbalance

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    }
})