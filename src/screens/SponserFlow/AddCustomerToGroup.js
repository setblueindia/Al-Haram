import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ICON, NUMBER } from '../../constants/constants'
import TextFildCus from '../../components/TextFildCus'
import Button from '../../components/Button'
import { COLOR } from '../../constants/style'
import { ResponsiveSize, SHOWTOTS, emaileRegxp } from '../../utils/utils'
import CusModal from '../../components/CusModal'
import { Ar, En } from '../../constants/localization'
import { useSelector } from 'react-redux'
import { AddCustomerToSponserToGroup } from '../../api/axios.api'

const AddCustomerToGroup = ({ Str, lang, setloader }) => {

    const useData = useSelector(state => state.userData?.data?.id)
    const [nicName, setNicName] = useState()
    const [email, setEmail] = useState()
    const [confromEmail, setConfromEmail] = useState()
    const [modalShow, setModalShow] = useState(false)
    const [exampal, setExample] = useState('')
    const [errorText, setErrorText] = useState('')

    const lable = lang == NUMBER.num1 ? En : Ar

    const onPress = () => {

        if (!nicName) {
            setErrorText(lable?.enterNickName)
            setModalShow(true)
        }
        else if (!email) {
            setErrorText(lable?.Enteremailaddress)
            setModalShow(true)
        }
        else if (!emaileRegxp.test(email)) {
            setModalShow(true)
            setErrorText(lable?.Invalidemailaddress)
        }
        else if (email !== confromEmail) {
            setModalShow(true)
            setErrorText(lable?.emailmismatch)
            setExample("")
        }
        else {
            sendData()
            setExample("")
        }

    };

    const sendData = async () => {
        const data =
            ` mutation{
            addCustomertoSponsorGroup(input:{
              customer_id: "${useData}"
              nickname: "${nicName}"
              customer_email:"${email}"
          }){
              status
              message
          }
      }`
        setloader(true)
        try {
            const rep = await AddCustomerToSponserToGroup(data, lang)
            if (rep) {
                setloader(false)
                SHOWTOTS(rep?.data?.data?.addCustomertoSponsorGroup?.message)
            } else {
                setloader(false)
                SHOWTOTS(rep?.data?.data?.addCustomertoSponsorGroup?.message)
            }
        } catch (error) {
            setloader(false)
            console.log("ADD TO CUSTOMER IN GROUP ::::::: ", error)
        }
    }

    return (
        <View style={styles.mainVie}>
            <TextFildCus onChange={setNicName} icon={ICON.usersecret} text={Str?.NickName} />
            <View style={styles.devider} />
            <TextFildCus onChange={setEmail} icon={ICON.emailIcon} text={Str?.Enteremailaddress} />
            <View style={styles.devider} />
            <TextFildCus onChange={setConfromEmail} icon={ICON.emailIcon} text={Str?.ConfirmEmailAddress} />
            <View style={styles.devider} />
            <View>
                <Button onPress={onPress} text={Str?.Submit} />
            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalShow}
            >
                <CusModal examapleText={exampal} setModalShow={setModalShow} text={errorText} />
            </Modal>
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