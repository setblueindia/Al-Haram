import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../../constants/style'
import { ResponsiveSize } from '../../utils/utils'
import Icon from 'react-native-vector-icons/AntDesign';
import { ICON, NUMBER } from '../../constants/constants';
import Button from '../../components/Button';
import TextFildCus from '../../components/TextFildCus';

const TranferAmount = ({ Str, lang }) => {
    const [on, setOn] = useState()
    const [text, setText] = useState(Str?.Selectcustomer)
    const data = [
        {
            name: "John Deo"
        },
        {
            name: "John Deo"
        },
        {
            name: "John Deo"
        },
        {
            name: "John Deo"
        },
        {
            name: "John Deo"
        },
        {
            name: "John Deo"
        },
        {
            name: "John Deo"
        },
    ]

    return (
        <View style={styles.mainView}>
            <Text style={[styles.firstLine , lang == NUMBER.num0 && {textAlign:'right'}]}>{Str?.SelectCustomertoaddwalletbalance}
            </Text>
            <View style={styles.devider} />
            <TouchableOpacity
                onPress={() => { on ? setOn(false) : setOn(true) }}
                style={[styles.customerSelectionView , lang == NUMBER.num0 && {flexDirection:'row-reverse'} ]}>
                <Text style={styles.selectCustomer}>{text}</Text>
                <Icon name={ICON.down} size={ResponsiveSize(30)} />
            </TouchableOpacity>

            {on &&
                <View style={styles.listView}>
                    <ScrollView style={styles.ScrollView}>

                        {
                            data.map((items, index) => {
                                return (
                                    <TouchableOpacity onPress={() => { setText(items.name), setOn(false) }} key={index} style={styles.itemsName}>
                                        <Text style={styles.customerName}>{items?.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }



                    </ScrollView>

                </View>
            }
            <View style={styles.devider} />
            <View style={styles.devider} />
            <TextFildCus text={Str?.AmountSAR} />
            <View style={styles.devider} />
            <TextFildCus text={Str?.addyourremark} />
            <View style={styles.devider} />
            <View style={styles.devider} />
            <Button text={Str?.Addmoneytocustomerswallet} />
        </View>
    )
}

export default TranferAmount

const styles = StyleSheet.create({
    firstLine: {
        color: "#00000070",
        fontSize: ResponsiveSize(25),
        lineHeight: ResponsiveSize(40)
    },
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white,
        padding: ResponsiveSize(20)

    },
    customerSelectionView: {
        height: ResponsiveSize(80),
        width: "100%",
        backgroundColor: COLOR.white,
        elevation: 10,
        borderRadius: ResponsiveSize(100),
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        //  elevation: 2,
        shadowColor: '#000',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: ResponsiveSize(20),
        flexDirection: 'row'
    },
    devider: {
        marginTop: ResponsiveSize(20)
    },
    selectCustomer: {
        color: COLOR.black,
        // marginLeft:ResponsiveSize(30),
        fontSize: ResponsiveSize(25)
    },
    listView: {
        height: ResponsiveSize(500),
        width: "100%",
        backgroundColor: COLOR.white,
        marginTop: ResponsiveSize(20),
        borderRadius: ResponsiveSize(20),
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
        shadowColor: '#000',
        justifyContent: 'space-between',
        paddingHorizontal: ResponsiveSize(20),

    },
    ScrollView: {
        height: "100%",
        width: "100%"
    },
    itemsName: {
        height: ResponsiveSize(80),
        width: "100%",
        borderBottomWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        justifyContent: 'center'
        // alignItems:'center'
    },
    customerName: {
        fontSize: ResponsiveSize(25),
        color: "#00000060"
    },
    devider: {
        marginTop: ResponsiveSize(20)
    }

})