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
import CusLoader from '../../components/CustomLoader'

const Sponser = () => {
    const { lang, navigation, data, name, Str, setloader, loader, menuBarOnPress, isLoadding, setIsLodding } = useSponserHook()
    return (
        <View style={styles.mainView} lang={lang}>
            <CommanHeader navigation={navigation} lang={lang} />
              <View style={styles.topMenuBar}>
                <FlatList
                    data={data}
                    inverted={lang == NUMBER.num0 ? true : false}
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
                    <Wallet setloader={setloader}  Sponser={true} />
                </View>
            }
            {name == Str.addCustomer &&
                <View style={{ flex: 1 }} >
                    <AddCustomer setloader={setloader} lang={lang} Str={Str} />
                </View>
            }
            {name == Str.addCustomerToGroup &&
                <View style={{ flex: 1 }} >
                    <AddCustomerToGroup setloader={setloader} lang={lang} Str={Str} />
                </View>
            }
            {name == Str.tranferAmount &&
                <View style={{ flex: 1 }} >
                    <TranferAmount setIsLodding={setIsLodding} lang={lang} Str={Str} />
                </View>
            }
            {
                loader &&
                <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
                    <CusLoader />
                </View>
            }

            {isLoadding && <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
                <CusLoader />
            </View>}
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
        backgroundColor: "#00000010",
    },
    herderTexrView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    topMenuText: {
        fontSize: ResponsiveSize(20),
        paddingHorizontal: ResponsiveSize(20),
        paddingVertical: ResponsiveSize(20),
        width:ResponsiveSize(200),
        textAlign:'center',
        color:COLOR.black
    },
    lineView: {
        width: "90%",
        borderWidth: ResponsiveSize(2),
        borderColor: COLOR.primaray
    }
})