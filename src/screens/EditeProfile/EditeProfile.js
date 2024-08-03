import { Modal, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import Onbordingheader from '../../components/OnbordingHeader'
import { styles } from './editeProfile.style'
import SwitchButton from '../../components/SwitchButton'
import useEditeHook from './editeProfile.hook'
import TextFildCus from '../../components/TextFildCus'
import Button from '../../components/Button'
import CusModal from '../../components/CusModal'
import CusLoader from '../../components/CustomLoader'

const EditeProfile = () => {
    const { langues,
        editeProfile,
        exampal,
        modalShow,
        errorText,
        loadding,
        newPassword,
        oldPassword,
        confromPassword,
        setOldPassword,
        setNewPassword,
        setModalShow,
        updatePassword,
        Update,
        setErrorText,
        setFname,
        setLname,
        setemail,
        setNumber,
        setWithEmail,
        setConfromPassword
    } = useEditeHook()
    return (
        <>
            <View style={styles.mainView}>
                <Onbordingheader />
                <ScrollView style={styles.container}>
                    <SwitchButton setWithEmail={setWithEmail} profile={true} langues={langues} />

                    {
                        editeProfile && <View style={styles.editeProifileView}>
                            <View style={styles.devider} />
                            <TextFildCus text={langues?.Enterfirstname} onChange={setFname} />
                            <View style={styles.devider} />
                            <TextFildCus text={langues?.Enterlastname} onChange={setLname} />
                            {/* <View style={styles.devider} />
                        <TextFildCus text={langues?.Enteremailaddress} onChange={setemail} />
                        <View style={styles.devider} />
                        <TextFildCus text={langues.Entermobilenumber} onChange={setNumber} /> */}
                            <View style={styles.button}>
                                <Button onPress={Update} text={langues?.Update} />
                            </View>
                        </View>
                    }

                    {
                        !editeProfile &&
                        <View style={styles.chnagePasswordView}>

                            <View style={styles.devider} />
                            <TextFildCus
                                value={oldPassword}
                                text={langues?.EnterYourOldPassword}
                                onChange={setOldPassword} />
                            <View style={styles.devider} />
                            <TextFildCus
                                value={newPassword}
                                text={langues?.Enteryournewpassword}
                                password={true}
                                onChange={setNewPassword} />
                            <View style={styles.devider} />
                            <TextFildCus
                                value={confromPassword}
                                text={langues?.confirmpassword}
                                password={true}
                                onChange={setConfromPassword} />
                            <View style={styles.button}>
                                <Button onPress={updatePassword} text={langues?.ChangePassword} />
                            </View>

                        </View>
                    }

                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={modalShow}
                    >
                        <CusModal examapleText={exampal} setModalShow={setModalShow} text={errorText} notification={false} />
                    </Modal>


                </ScrollView>


            </View>
            {
                loadding &&
                <View style={{ flex: 1, position: 'absolute', height: '100%', width: "100%" }}>
                    <CusLoader />
                </View>}

        </>
    )
}

export default EditeProfile

