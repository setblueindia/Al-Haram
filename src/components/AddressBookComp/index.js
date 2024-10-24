import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR } from '../../constants/style'
import ICON from 'react-native-vector-icons/MaterialCommunityIcons';
import { NAVIGATION, NUMBER } from '../../constants/constants';


const AddressBookComp = ({ data, lang, deleteAdress, setAddressCode, navigation, getData , index}) => {
    const [on, setOn] = useState(false)
    const [ aindex , setIndex] = useState()

    const name = data?.firstname + " " + data?.lastname
    const address = data?.address1 + " " + data?.address2 + " " + data?.address3
    return (
        <View>
            <TouchableOpacity
                onPress={() => { 
                    on ? setOn(false) : setOn(true) , setIndex(index)
                    setAddressCode && setAddressCode(data) }}

                style={[styles.addressView ,( on && aindex == index) && { backgroundColor: "#FFF3F4", borderColor: COLOR.primaray }]}>
                <View style={[styles.firstView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                    <View style={styles.nameView}>
                        <Text style={[styles.firstNameText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{name}</Text>
                    </View>
                    <View style={[styles.iconView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(NAVIGATION.addaddress, { editeData: data, getData: getData }) }}
                        >
                            <ICON name={"square-edit-outline"} size={ResponsiveSize(35)} color={COLOR.primaray} />
                        </TouchableOpacity>
                        <View style={{ width: ResponsiveSize(15) }}></View>
                        <TouchableOpacity onPress={(() => {
                            deleteAdress(data?.id)
                        })}>
                            <ICON name={"delete"} size={ResponsiveSize(35)} color={COLOR.primaray} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.secondView, lang == NUMBER.num0 ? { marginLeft: ResponsiveSize(80) } : { marginRight: ResponsiveSize(80) }]}>
                    <Text
                        style={[styles.innerAddres, lang == NUMBER.num0 && { textAlign: 'right' }]}
                    >{address}</Text>
                </View>

                <View style={styles.thirdView}>
                    <Text
                        style={[styles.mobailText, lang == NUMBER.num0 && { textAlign: 'right' }]}
                    >{data?.telephone}</Text>
                </View>

            </TouchableOpacity>
            <View style={{ height: ResponsiveSize(20) }} />
        </View>
    )
}

export default AddressBookComp

const styles = StyleSheet.create({
    addressView: {
        width: "100%",
        padding: ResponsiveSize(20),
        backgroundColor: "#CCCCCC20",
        borderWidth: ResponsiveSize(1),
        borderColor: "#00000070",
        borderRadius: ResponsiveSize(10)
    },
    firstView: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
    },
    nameView: {
        borderBottomWidth: ResponsiveSize(1),
        width: "80%",
        borderColor: "#00000050"

    },
    iconView: {
        flexDirection: ALINE.row
    },
    firstNameText: {
        marginBottom: ResponsiveSize(10),
        color: COLOR.primaray,
        fontSize: ResponsiveSize(30)
    },
    secondView: {
        marginTop: ResponsiveSize(20),
    },
    innerAddres: {
        lineHeight: ResponsiveSize(40),
        textAlign: 'justify',
        color: "#00000080",
        fontSize: ResponsiveSize(22)
    },
    thirdView: {

    },
    mobailText: {
        color: COLOR.black
    },
    thirdView: {
        marginTop: ResponsiveSize(20)
    }
})