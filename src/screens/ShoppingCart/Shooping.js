import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddressBook from '../AddreesBook/AddressBook'
import { ResponsiveSize } from '../../utils/utils'
import { EXTRASTR, NUMBER } from '../../constants/constants'
import { COLOR } from '../../constants/style'
import { FONTS } from '../../constants/fonts'

const Shooping = (
  {
    data,
    lang,
    setAddressCode,
    setLoadding,
    setBillingAddress
  }
) => {

  return (
    <View style={styles.mainView}>
      <Text style={[
        styles.text,
        lang == NUMBER.num0 && {
          textAlign: EXTRASTR.right,
          marginRight: ResponsiveSize(20)
        }
      ]}>
        {data?.YourAddreses}
      </Text>
      <AddressBook
        setBillingAddress={setBillingAddress}
        setLoadding={setLoadding}
        setAddressCode={setAddressCode}
        Shooping={true} />
    </View>
  )
}

export default Shooping

const styles = StyleSheet.create({
  text: {
    fontSize: ResponsiveSize(28),
    marginBottom: ResponsiveSize(0),
    marginTop: ResponsiveSize(20),
    marginLeft: ResponsiveSize(20),
    color: COLOR.darkGray,
    fontFamily: FONTS.Regular
  },
  mainView: {
    flex: 1,
  }
})