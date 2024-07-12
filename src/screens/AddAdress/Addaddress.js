import { Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import useAddressBookHook from '../AddreesBook/AddressBook.hook'
import TextFildCus from '../../components/TextFildCus'
import { styles } from './address.style'
import { NUMBER } from '../../constants/constants'
import { ResponsiveSize } from '../../utils/utils'
import CheackButton from '../../components/CheackButton'
import Button from '../../components/Button'
import { ALINE, COLOR } from '../../constants/style'
import useAddressHook from './address.hook'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CusLoader from '../../components/CustomLoader'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Addaddress = (props) => {

  const {
    navigation,
    lang,
    data,
    on,
    citydata,
    city,
    billing,
    shopping,
    popTex,
    firstName,
    lastName,
    mNumaber,
    address1,
    address2,
    address3,
    pinCode,
    setShopping,
    setCity,
    setFirstName,
    setOn,
    getCityData,
    setStae,
    setStaeCode,
    gwtStateData,
    setlastname,
    setMNumber,
    serAddress1,
    setAddress2,
    setAddress3,
    setPinCode,
    setBilling,
    addAddress,
    state,
    isLoading
  } = useAddressHook(props)
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.mainView}>
      <CommanHeader navigation={navigation} name={data.AddAddress} />
      <ScrollView style={styles.conatainer}>
        <TextFildCus onChange={setFirstName} value={firstName} text={data?.FirstName} add={true} />
        <View style={styles.devider} />
        <TextFildCus onChange={setlastname} value={lastName} text={data?.LastName} add={true} />
        <View style={styles.devider} />
        <TextFildCus onChange={setMNumber} value={mNumaber} number={true} text={data?.PhoneNumber} add={true} />
        <View style={styles.devider} />
        <TextFildCus onChange={serAddress1} value={address1} text={data?.Streetaddress} add={true} />
        <View style={styles.devider} />
        <TextFildCus onChange={setAddress2} value={address2} text={data?.Addressline1} add={true} />
        <View style={styles.devider} />
        <TextFildCus onChange={setAddress3} value={address3} text={data?.Addressline2} add={true} />
        <View style={styles.devider} />
        <TextFildCus onChange={setPinCode} value={pinCode} number={true} text={data?.Pincode} add={true} />
        <View style={styles.devider} />
        <View style={styles.secondView}>
          <Text style={[styles.contiresText, lang == NUMBER.num0 && { textAlign: 'right', marginRight: ResponsiveSize(20) }]}>{data?.SaudiArabia}</Text>
          <TouchableOpacity
            style={styles.stateTextView}
            onPress={() => { gwtStateData() }}
          >
            <Text style={styles.stateTextStyle}>{state ? state : data?.StateProvince}</Text>
          </TouchableOpacity>
          <View style={styles.devider} />
          <TouchableOpacity
            onPress={() => {
              getCityData()
            }}
            style={styles.stateTextView}
          >
            <Text style={styles.stateTextStyle}>{city ? city : data?.City}</Text>
          </TouchableOpacity>
          <View style={[styles.CheackView, lang == NUMBER.num0 && { flexDirection: ALINE.row }]}>
            <CheackButton preVriable={shopping} onPress={setShopping} />
            <Text style={[styles.cheackText, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>{data?.Useasmydefaultbillingaddress}</Text>
          </View>
          <View style={[styles.CheackView, lang == NUMBER.num0 && { flexDirection: ALINE.row }]}>
            <CheackButton preVriable={billing} onPress={setBilling} />
            <Text style={[styles.cheackText, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>{data?.UseasmydefaultShippingaddress}</Text>
          </View>
        </View>

        <View style={styles.btnView}>
          <Button onPress={addAddress} text={lang == NUMBER.num0 ? "اضف عنوان" : "Add address"} />
        </View>
        <View style={{ height: ResponsiveSize(40) }}>

        </View>
      </ScrollView>


      {on &&
        <View style={[styles.popView]}>
          <View style={[styles.listView, Platform.OS == 'ios' && { marginTop: insets.top }]}>
            <Text style={styles.popTex}>{popTex}</Text>
            <TextInput
              style={styles.serchView}
              placeholder='Search'
              placeholderTextColor={COLOR.liteGray}

            />
            <ScrollView style={styles.ScrollView}>

              {
                citydata?.map((items, index) => {
                  return (
                    <TouchableOpacity onPress={() => { setOn(false), items?.default_name ? setStae(items?.default_name) : setCity(items?.city), setStaeCode(items?.region_id) }} key={index} style={styles.itemsName}>
                      <Text style={styles.customerName}>{ items?.default_name ? items?.default_name : items?.city}</Text>
                    </TouchableOpacity>
                  )
                })
              }

            </ScrollView>

          </View>
          <View style={styles.PopBtnView}>
            <TouchableOpacity
              onPress={() => { setOn(false) }}
              style={styles.poppBtn}>
              <Text style={styles.cancalText}>{"Cancel"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.poppBtn, { backgroundColor: COLOR.white, borderWidth: ResponsiveSize(1), borderColor: COLOR.darkGray }]}>
              <Text style={[styles.cancalText, { color: COLOR.black }]}>{"clear"}</Text>
            </TouchableOpacity>

          </View>
        </View>

      }

      {isLoading &&

        <View style={{
          height: "100%",
          width: "100%",
          position: 'absolute'
        }}>
          <CusLoader />

        </View>
      }
    </View>
  )
}

export default Addaddress

