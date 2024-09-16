import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CommanHeader from '../../components/ComanHeader'
import { EXTRASTR, NAVIGATION, NUMBER, PROFILEStr } from '../../constants/constants'
import { styles } from './AddressBook.style'
import ICON from 'react-native-vector-icons/MaterialCommunityIcons';
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR } from '../../constants/style'
import useAddressBookHook from './AddressBook.hook'
import AddressBookComp from '../../components/AddressBookComp'
import CusLoader from '../../components/CustomLoader'
import DeleteBox from '../../components/DeleteBox'
import Icon from 'react-native-vector-icons/dist/Entypo';

const AddressBook = ({
    Shooping,
    setAddressCode,
    setLoadding,
    setBillingAddress,
}) => {
    const { data,
        navigation,
        lang,
        addAddress,
        Str,
        isLoading,
        deletePopp,
        setDetetePopp,
        deleteAdress,
        getData,
        setdeteteId
    } = useAddressBookHook(setAddressCode, setLoadding, setBillingAddress)
    const [aindex, setIndex] = useState()

    return (
        <View style={styles.mainView}>
            {!Shooping && <CommanHeader lang={lang} name={Str?.AddressBook} navigation={navigation} />}
            <ScrollView style={styles.container}>
                {
                    data.map((items, index) => {
                        const name = items?.firstname + " " + items?.lastname
                        const address = items?.address1 + " " + items?.address2 + " " + items?.address3

                        console.log("items :::::::: " , items?.default_billing)
                        return (
                            <View key={index}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIndex(index)
                                        setAddressCode && setAddressCode(items)
                                    }}
                                    style={[styles.addressView, (aindex == index && setLoadding) && { backgroundColor: "#FFF3F4", borderColor: COLOR.primaray }]}>
                                    <View style={[styles.firstView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse}]}>

                                
                                        <View style={[styles.nameView , lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse } ]}>
                                        {  (items?.default_billing || items?.default_shipping   )  &&  <Icon name="location-pin" size={ResponsiveSize(40)} color={COLOR.primaray} style={{}}/>}
                                            <Text style={[styles.firstNameText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{name}</Text>
                                        </View>
                                        <View style={[styles.iconView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                                            {!setLoadding && <TouchableOpacity
                                                onPress={() => { navigation.navigate(NAVIGATION.addaddress, { editeData: items, getData: getData }) }}
                                            >
                                                <ICON name={"square-edit-outline"} size={ResponsiveSize(35)} color={COLOR.primaray} />
                                            </TouchableOpacity>}
                                            <View style={{ width: ResponsiveSize(15) }}></View>
                                            {!setLoadding && <TouchableOpacity onPress={(() => {
                                                // deleteAdress(items?.id),
                                                setdeteteId(items?.id)
                                                setDetetePopp(true)
                                            })}>
                                                <ICON name={"delete"} size={ResponsiveSize(35)} color={COLOR.primaray} />
                                            </TouchableOpacity>}
                                        </View>
                                    </View>

                                    <View style={[styles.secondView, lang == NUMBER.num0 ? { marginLeft: ResponsiveSize(80) } : { marginRight: ResponsiveSize(80) }]}>
                                        <Text
                                            style={[styles.innerAddres, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}
                                        >{address}</Text>
                                    </View>

                                    <View style={styles.thirdView}>
                                        <Text
                                            style={[styles.mobailText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}
                                        >{items?.telephone}</Text>
                                    </View>

                                </TouchableOpacity>
                                <View style={{ height: ResponsiveSize(20) }} />
                                {/* <AddressBookComp getData={getData} index = {index} navigation={navigation} setAddressCode={setAddressCode} deleteAdress={deleteAdress} data={items} lang={lang} /> */}
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

            {
                deletePopp &&
                <Modal
                    visible={deletePopp}
                    animationType='slide'
                    transparent
                >
                    <DeleteBox noPress={() => { setDetetePopp(false) }} yesPress={() => { setDetetePopp(false), deleteAdress() }} lang={lang} />
                </Modal>
            }
        </View>

    )
}

export default AddressBook
