import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import { NUMBER, PROFILEStr } from '../../constants/constants'
import { styles } from './AddressBook.style'
import ICON from 'react-native-vector-icons/MaterialCommunityIcons';
import { ResponsiveSize } from '../../utils/utils'
import { COLOR } from '../../constants/style'
import useAddressBookHook from './AddressBook.hook'
import AddressBookComp from '../../components/AddressBookComp'
import CusLoader from '../../components/CustomLoader'



const AddressBook = ({ Shooping ,setAddressCode , setLoadding }) => {

    const { data, navigation, lang, addAddress, Str, isLoading , deleteAdress} = useAddressBookHook(setAddressCode , setLoadding)



    return (
        <View style={styles.mainView}>
            {!Shooping && <CommanHeader lang={lang} name={Str?.AddressBook} navigation={navigation} />}
            <ScrollView style={styles.container}>

                {
                    data.map((items, index) => {
                     
                        return (
                            <View key={index}>
                                <AddressBookComp setAddressCode={setAddressCode} deleteAdress={deleteAdress}data={items} lang={lang} />
                            </View>
                        )
                    })

                }
                <View style={{ height: ResponsiveSize(150) }}></View>
            </ScrollView>

            <View style={styles.btnView}>
                <TouchableOpacity
                    onPress={() => {
                        addAddress()
                    }}
                    style={styles.btn}>
                    <Text style={styles.btnText}>{lang == NUMBER.num0 ? "+ إضافة عنوان جديد" : "+Add new address"}</Text>
                </TouchableOpacity>
            </View>

            {
                isLoading &&
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

export default AddressBook
