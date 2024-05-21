import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import useSponserHook from './Sponser.hook'
import { COLOR } from '../../constants/style'
import { ResponsiveSize } from '../../utils/utils'
import Wallet from '../Wallet/Wallet'
import AddCustomer from './AddCustomer'
import AddCustomerToGroup from './AddCustomerToGroup'
import TranferAmount from './TranferAmount'
import { NUMBER } from '../../constants/constants'

const Sponser = () => {
    const { lang, navigation, data, name, Str, menuBarOnPress } = useSponserHook()
    return (
        <View style={styles.mainView} lang={lang}>
            <CommanHeader navigation={navigation} lang={lang} />

            <View style={styles.topMenuBar}>

                <FlatList
                    data={data}
                    inverted = {lang == NUMBER.num0 ? true : false}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => menuBarOnPress(item?.name)}
                                style={styles.herderTexrView}>
                                <Text style={[styles.topMenuText, item.name == name && { color: COLOR.primaray }]}>{item?.name}</Text>
                                {item.name == name && <View style={styles.lineView} />}
                            </TouchableOpacity>

                        )
                    }}
                />
            </View>
            {(!name || name == Str.manageWallate) &&
                <View style={{ flex: 1 }} >
                    <Wallet Sponser={true} />
                </View>
            }
            {name == Str.addCustomer &&
                <View style={{ flex: 1 }} >
                    <AddCustomer lang={lang} Str={Str} />
                </View>
            }
             {name == Str.addCustomerToGroup &&
                <View style={{ flex: 1 }} >
                    <AddCustomerToGroup lang={lang} Str={Str} />
                </View>
            }
             {name == Str.tranferAmount &&
                <View style={{ flex: 1 }} >
                    <TranferAmount lang={lang} Str={Str} />
                </View>
            }
        </View>
    )
}

export default Sponser

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR?.white
    },
    topMenuBar: {
        width: "100%",
        height: ResponsiveSize(80),
        backgroundColor: "#00000010",
        // elevation: 10,
        // paddingHorizontal: ResponsiveSize(20),
        // justifyContent: 'space-between',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // //  elevation: 2,
        // shadowColor: '#000',

    },
    herderTexrView: {
        justifyContent: 'center',
        alignItems: 'center',

        // width:ResponsiveSize(300)

    },
    topMenuText: {
        fontSize: ResponsiveSize(25),
        // marginLeft:ResponsiveSize(30),
        paddingHorizontal: ResponsiveSize(20),
        paddingVertical: ResponsiveSize(20),
        // color: COLOR.primaray,
        // borderBottomWidth:ResponsiveSize(2),
    },
    lineView: {
        // width:ResponsiveSize(200),
        width: "90%",
        borderWidth: ResponsiveSize(2),
        borderColor: COLOR.primaray
        // marginTop:ResponsiveSize(30)
        // justifyContent:'flex-end'
    }
})