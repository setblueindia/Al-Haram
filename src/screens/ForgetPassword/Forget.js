import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onbordingheader from '../../components/OnbordingHeader'
import { styles } from './forget.style'
import TextFildCus from '../../components/TextFildCus'
import { En } from '../../constants/localization'
import { ICON } from '../../constants/constants'
import Button from '../../components/Button'
import useForgetPassword from './Forget.hook'
import CusLoader from '../../components/CustomLoader'
import CusModal from '../../components/CusModal'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Forget = () => {
    const { lang, lable, setEmail, isLoading, forgetPassword, showModal, setShowModal, msg , oppsHide} = useForgetPassword()
    return (
        <>
            <KeyboardAwareScrollView style={styles.mainView}>
                <Onbordingheader />
                <View style={styles.container}>
                    <Text style={styles.Textheader}>{lable?.ForgotPassword}</Text>
                    <Text style={styles.desText}>{lable?.forgetDes}</Text>
                    <View style={styles.lineView} />
                    <View style={styles.textInput}>
                        <TextFildCus onChange={setEmail} icon={ICON.emailIcon} text={lable?.Enteremailaddress} />
                    </View>
                    <View style={styles.btn}>
                        <Button onPress={forgetPassword} text={lable?.Send} />
                    </View>
                </View>

            </KeyboardAwareScrollView>

            <Modal
                animationType='slide'
                transparent={true}
                visible={showModal}

            >
                <CusModal setModalShow={setShowModal} text={msg}  notification={oppsHide}/>
            </Modal>
            {
                isLoading &&
                <View style={{
                    position: 'absolute',
                    height: "100%",
                    width: "100%"
                }}>
                    <CusLoader />
                </View>
            }

        </>

    )
}

export default Forget

