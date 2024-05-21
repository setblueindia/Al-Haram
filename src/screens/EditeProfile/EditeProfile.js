import { Text, View } from 'react-native'
import React, { useState } from 'react'
import Onbordingheader from '../../components/OnbordingHeader'
import { styles } from './editeProfile.style'
import SwitchButton from '../../components/SwitchButton'
import useEditeHook from './editeProfile.hook'
import TextFildCus from '../../components/TextFildCus'
import Button from '../../components/Button'

const EditeProfile = () => {
    const { langues, editeProfile, setWithEmail } = useEditeHook()
    return (
        <View style={styles.mainView}>
            <Onbordingheader />
            <View style={styles.container}>
                <SwitchButton setWithEmail={setWithEmail} profile={true} langues={langues} />
                {
                    editeProfile && <View style={styles.editeProifileView}>
                        <View style={styles.devider} />
                        <TextFildCus text={langues?.Enterfirstname} />
                        <View style={styles.devider} />
                        <TextFildCus text={langues?.Enterlastname} />
                        <View style={styles.devider} />
                        <TextFildCus text={langues?.Enteremailaddress} />
                        <View style={styles.devider} />
                        <TextFildCus text={langues.Entermobilenumber} />
                        <View style={styles.button}>
                            <Button text={langues?.Update} />
                        </View>


                    </View>
                }
                {
                    !editeProfile &&
                    <View style={styles.chnagePasswordView}>

                        <View style={styles.devider} />
                        <TextFildCus text={langues?.EnterYourOldPassword} />
                        <View style={styles.devider} />
                        <TextFildCus text={langues?.Enteryourpassword} />
                        <View style={styles.devider} />
                        <TextFildCus text={langues?.confirmpassword} />
                        <View style={styles.button}>
                            <Button text={langues?.ChangePassword} />
                        </View>

                    </View>
                }

            </View>
        </View>
    )
}

export default EditeProfile

