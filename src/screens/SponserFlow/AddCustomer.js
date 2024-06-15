import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../constants/style'
import { TextInput } from 'react-native-gesture-handler'
import TextFildCus from '../../components/TextFildCus'
import { ICON } from '../../constants/constants'
import { ResponsiveSize } from '../../utils/utils'
import Button from '../../components/Button'

const AddCustomer = ({ lang, Str }) => {

  return (
    <View style={styles.mainVie}>
      <TextFildCus icon={ICON.usersecret} text={Str?.EnteryourFirstname} />
      <View style={styles.devider} />
      <TextFildCus icon={ICON.usersecret} text={Str?.Enteryourlastname} />
      <View style={styles.devider} />
      <TextFildCus icon={ICON.emailIcon} text={Str?.Enteryouremail} />
      <View style={styles.devider} />
      <TextFildCus icon={ICON.phoneIcon} number={true} text={Str?.Entermobilenumber} />
      <View style={styles.devider} />
      <TextFildCus icon={ICON.lockIcon} text={Str?.Enteryourpassword} />
      <View style={styles.devider} />
      <TextFildCus icon={ICON.lockIcon} text={Str?.confirmpassword} />
      <View style={styles.devider} />
      <View style={styles.devider} />
      <View>
        <Button text={Str?.CreateAccount}/>
      </View>
    </View>
  )
}

export default AddCustomer

const styles = StyleSheet.create({
  mainVie: {
    flex: 1,
    backgroundColor: COLOR.white,
    padding:ResponsiveSize(20)
  },
  devider:{
    marginTop:ResponsiveSize(20)
  }
})