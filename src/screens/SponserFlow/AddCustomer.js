import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../../constants/style'
import { TextInput } from 'react-native-gesture-handler'
import TextFildCus from '../../components/TextFildCus'
import { ICON, NUMBER } from '../../constants/constants'
import { ResponsiveSize, SHOWTOTS, emaileRegxp, passwordRegxp } from '../../utils/utils'
import Button from '../../components/Button'
import { AddCustomerToSponser } from '../../api/axios.api'
import { Ar, En } from '../../constants/localization'
import CusLoader from '../../components/CustomLoader'
import CusModal from '../../components/CusModal'

const AddCustomer = ({ lang, Str, setloader }) => {


  const [firstName, setFilstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [mobailNo, setMobailNo] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [modalShow, setModalShow] = useState(false)
  const [exampal, setExample] = useState('')
  const [errorText, setErrorText] = useState('')
  // const [loader, setLoader] = useState(false)


  const onPress = () => {
    const lable = lang == NUMBER.num1 ? En : Ar

    if (!firstName) {
      setModalShow(true)
      setErrorText(lable?.Enterfirstname)
    }
    else if (!lastName) {
      setModalShow(true)
      setErrorText(lable?.Enterlastname)
    }
    else if (!email) {
      setErrorText(lable?.Enteremailaddress)
      setModalShow(true)
    }
    else if (!emaileRegxp.test(email)) {
      setModalShow(true)
      setErrorText(lable?.Invalidemailaddress)
    }
    else if (!mobailNo || mobailNo?.length < 9 || mobailNo?.length > 9) {
      setModalShow(true)
      setErrorText(lable?.Invalidnumber)
      setExample(lable?.Numbercontainsmustbe9digits)
    }
    else if (!password) {
      setErrorText(lable?.Enterpassword)
      setExample("")
      setModalShow(true)
    }
    else if (!passwordRegxp.test(password)) {
      setModalShow(true)
      setErrorText(lable?.Invalidpassword)
      setExample(lable?.EXPassword)

    }
    else if (password !== confirmPassword) {
      setModalShow(true)
      setErrorText(lable?.Passwordandconfirmpasswordmismatch)
      setExample("")
    }
    else {
      sendData()
      setExample("")
    }

  };

  const sendData = async () => {
    setloader(true)
    const data =
      `mutation{
        createCustomerBySponsor(input: {
     firstname: "${firstName}"
     lastname: "${lastName}"
     email: "${email}"
     mobile: "+966${mobailNo}"
     password: "${password}"
     sponser_group: "1"
     }) {
      status
     message
    }
}
`
    try {
      const res = await AddCustomerToSponser(data, lang)
      if (res) {
        setloader(false)
        SHOWTOTS(res?.data?.data?.createCustomerBySponsor?.message)
      } else {
        setloader(false)
        SHOWTOTS(res?.data?.data?.createCustomerBySponsor?.message)
      }
    } catch (error) {
      console.log("ADD CUSTOMER TO SPONSER ::::::::::: ", error)
      setloader(false)
    }
  }

  return (
    <>
      <View style={styles.mainVie}>
        <TextFildCus icon={ICON.usersecret} onChange={setFilstName} text={Str?.EnteryourFirstname} />
        <View style={styles.devider} />
        <TextFildCus icon={ICON.usersecret} onChange={setLastName} text={Str?.Enteryourlastname} />
        <View style={styles.devider} />
        <TextFildCus icon={ICON.emailIcon} onChange={setEmail} text={Str?.Enteryouremail} />
        <View style={styles.devider} />
        <TextFildCus icon={ICON.phoneIcon} onChange={setMobailNo} number={true} text={Str?.Entermobilenumber} />
        <View style={styles.devider} />
        <TextFildCus icon={ICON.lockIcon} onChange={setPassword} text={Str?.Enteryourpassword} />
        <View style={styles.devider} />
        <TextFildCus icon={ICON.lockIcon} onChange={setConfirmPassword} text={Str?.confirmpassword} />
        <View style={styles.devider} />
        <View style={styles.devider} />
        <View>
          <Button onPress={onPress} text={Str?.CreateAccount} />
        </View>


        <Modal
          animationType='slide'
          transparent={true}
          visible={modalShow}
        >
          <CusModal examapleText={exampal} setModalShow={setModalShow} text={errorText} />
        </Modal>
      </View>

    </>
  )
}


export default AddCustomer

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