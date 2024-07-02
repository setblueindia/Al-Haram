import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddressBook from '../AddreesBook/AddressBook'
import { ResponsiveSize } from '../../utils/utils'
import AddressBookComp from '../../components/AddressBookComp'
import { NUMBER } from '../../constants/constants'

const Shooping = ({data , lang , setAddressCode , setLoadding}) => {
  return (
    <View style={styles.mainView}>
      <Text style={[styles.text , lang == NUMBER.num0 && {textAlign:'right' , marginRight:ResponsiveSize(20)}]}>{data?.YourAddreses}</Text>
      <AddressBook setLoadding={setLoadding} setAddressCode={setAddressCode} Shooping={true} />
    </View>
  )
}

export default Shooping

const styles = StyleSheet.create({
  text: {
    fontSize: ResponsiveSize(30),
    marginBottom: ResponsiveSize(10),
    marginTop: ResponsiveSize(20),
    marginLeft: ResponsiveSize(20)
  },
  mainView: {
    flex: 1,
    // padding:ResponsiveSize(20)
    // padding:ResponsiveSize(10)
  }
})