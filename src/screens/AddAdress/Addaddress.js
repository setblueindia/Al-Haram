import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import useAddressBookHook from '../AddreesBook/AddressBook.hook'
import TextFildCus from '../../components/TextFildCus'
import { styles } from './address.style'
import { NUMBER } from '../../constants/constants'
import { ResponsiveSize } from '../../utils/utils'
import CheackButton from '../../components/CheackButton'
import Button from '../../components/Button'
import { ALINE } from '../../constants/style'
import useAddressHook from './address.hook'

const Addaddress = () => {      

  const { navigation, lang , data } = useAddressHook()

  return (
    <View style={styles.mainView}>
      <CommanHeader navigation={navigation} name={data.AddAddress} />
      <ScrollView style={styles.conatainer}>
        <TextFildCus text={data?.FirstName} add={true} />
        <View style={styles.devider} />
        <TextFildCus text={data?.LastName} add={true} />
        <View style={styles.devider} />
        <TextFildCus text={data?.PhoneNumber} add={true} />
        <View style={styles.devider} />
        <TextFildCus text={data?.Streetaddress} add={true} />
        <View style={styles.devider} />
        <TextFildCus text={data?.Addressline1} add={true} />
        <View style={styles.devider} />
        <TextFildCus text={data?.Addressline2} add={true} />
        <View style={styles.devider} />
        <TextFildCus text={data?.Pincode} add={true} />
        <View style={styles.devider} />

        <View style={styles.secondView}>
          <Text style={[styles.contiresText, lang == NUMBER.num0 && { textAlign: 'right' , marginRight:ResponsiveSize(20)}]}>{data?.SaudiArabia}</Text>
          <TextFildCus text={data?.StateProvince} add={true} />
          <View style={styles.devider} />
          <TextFildCus text={data?.City} add={true} />

          <View style={[styles.CheackView , lang == NUMBER.num0 && {flexDirection:ALINE.row} ]}>
            <CheackButton/>
            <Text style={[styles.cheackText ,  lang == NUMBER.num0 && {marginRight:ResponsiveSize(20)} ]}>{data?.Useasmydefaultbillingaddress}</Text>
          </View>
        </View>

        <View style={styles.btnView}>
          <Button text={lang == NUMBER.num0 ?  "اضف عنوان" : "Add address"}/>
        </View>
        <View style={{height:ResponsiveSize(40)}}></View>
      </ScrollView>
    </View>
  )
}

export default Addaddress

