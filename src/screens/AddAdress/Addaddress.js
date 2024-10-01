import { Platform, ScrollView, Text, TextInput, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import TextFildCus from '../../components/TextFildCus'
import { styles } from './address.style'
import { EXTRASTR, NUMBER } from '../../constants/constants'
import { ResponsiveSize } from '../../utils/utils'
import CheackButton from '../../components/CheackButton'
import Button from '../../components/Button'
import { ALINE, COLOR } from '../../constants/style'
import useAddressHook from './address.hook'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CusLoader from '../../components/CustomLoader'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
    serchText,
    esiteData,
    temp,
    cities,
    sates,
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
    setSerchText,
    setMixCity,
    state,
    isLoading
  } = useAddressHook(props)
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.mainView}>
      <CommanHeader navigation={navigation} lang={lang} name={esiteData ? data?.EditAddress : data.AddAddress} />
      <KeyboardAwareScrollView style={styles.conatainer}>
        <TextFildCus onChange={setFirstName} value={firstName} text={data?.FirstName} add={true} />
        <View style={styles.devider} />
        <TextFildCus onChange={setlastname} value={lastName} text={data?.LastName} add={true} />
        <View style={styles.devider} />
        <TextFildCus onChange={setMNumber} countryText={"+966"} value={mNumaber} number={true} text={data?.PhoneNumber} add={true} />
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
          <Text style={[styles.contiresText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right, marginRight: ResponsiveSize(20) }]}>{data?.SaudiArabia}</Text>
          <TouchableOpacity
            style={styles.stateTextView}
            onPress={() => {
              const button = true
              gwtStateData(button)
              setMixCity(true)
              setCity("")
            }}
          >
            <Text style={[styles.stateTextStyle, lang == NUMBER.num0 && { textAlign: 'right' }]}>{state ? state : data?.StateProvince}</Text>
          </TouchableOpacity>
          <View style={styles.devider} />
          <TouchableOpacity
            onPress={() => {
              getCityData()
              setMixCity(false)
            }}
            style={styles.stateTextView}
          >
            <Text style={[styles.stateTextStyle, lang == NUMBER.num0 && { textAlign: 'right' }]}>{city ? city : data?.City}</Text>
          </TouchableOpacity>
          <View style={[styles.CheackView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
            <CheackButton preVriable={shopping} onPress={setShopping} />
            <Text style={[styles.cheackText, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>{data?.Useasmydefaultbillingaddress}</Text>
          </View>
          <View style={[styles.CheackView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
            <CheackButton preVriable={billing} onPress={setBilling} />
            <Text style={[styles.cheackText, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>{data?.UseasmydefaultShippingaddress}</Text>
          </View>
        </View>
        <View style={styles.btnView}>
          <Button onPress={addAddress} text={esiteData ? data?.EditAddress : lang == NUMBER.num0 ? "اضف عنوان" : "Add address"} />
        </View>
        <View style={{ height: ResponsiveSize(40) }}>
        </View>
      </KeyboardAwareScrollView>

      {on &&
        <View style={[styles.popView]}>
          <View style={[styles.listView, Platform.OS == 'ios' && { marginTop: insets.top }]}>
            <Text style={styles.popTex}>{popTex}</Text>
            <TextInput
              style={styles.serchView}
              placeholder={lang == NUMBER.num1 ? 'Search......' : "بحث"}
              textAlign={lang == NUMBER.num0 ? "right" : 'left'}
              value={serchText}
              placeholderTextColor={COLOR.liteGray}
              onChangeText={(text) => { setSerchText(text) }}
            />
            <ScrollView style={styles.ScrollView}>

              {
                citydata?.map((items, index) => {
                  return (
                    <TouchableOpacity onPress={() => {
                      setSerchText("")
                      setOn(false),
                        items?.default_name ? setStae(items?.default_name) :
                          setCity(items?.value),
                        // setCity(items?.city),
                        setStaeCode(items?.region_id)
                      items?.default_name && getCityData(items?.region_id)
                    }}
                      key={index} style={styles.itemsName}>
                      <Text style={[styles.customerName, lang == NUMBER.num0 && { textAlign: 'right' }]}>{items?.default_name ? items?.default_name : items?.city}</Text>
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
              <Text style={styles.cancalText}>{lang == NUMBER.num1 ? "Cancel" : "الغاء"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { setSerchText("") }}
              style={[styles.poppBtn, { backgroundColor: COLOR.white, borderWidth: ResponsiveSize(1), borderColor: COLOR.darkGray }]}>
              <Text style={[styles.cancalText, { color: COLOR.black }]}>{lang == NUMBER.num1 ? "clear" : "حذف"}</Text>
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

