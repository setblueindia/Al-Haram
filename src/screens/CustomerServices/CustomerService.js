import { Text, View } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/ComanHeader'
import { EXTRASTR, NUMBER } from '../../constants/constants'
import { styles } from './customer.style'
import useCustomerServiceHook from './customer.hook'
import CusLoader from '../../components/CustomLoader'

const CustomerService = () => {
    const {
        navigation,
        lang,
        Str,
        data,
        isLoadding
    } = useCustomerServiceHook()
    return (
        <View style={styles.mainView}>

            <CommanHeader
                navigation={navigation}
                name={Str.CustomerService}
                lang={lang}
            />

            {data?.address &&
                <View style={styles.containerView}>
                    <View style={[styles.container]}>
                        <Text
                            style={[
                                styles.nameText,
                                lang == NUMBER.num0 && {
                                    textAlign: EXTRASTR.right
                                }
                            ]}>
                            {data?.address}
                        </Text>

                        <Text
                            style={[
                                styles.text,
                                lang == NUMBER.num0 && {
                                    textAlign: EXTRASTR.right
                                }
                            ]}>
                            {Str?.Tel + " : " + data?.tel}
                        </Text>

                        <Text
                            style={[
                                styles.text,
                                lang == NUMBER.num0 && {
                                    textAlign: EXTRASTR.right
                                }
                            ]}>
                            {Str?.Email + " : " + data?.email}
                        </Text>

                        <Text
                            style={[
                                styles.text,
                                lang == NUMBER.num0 && {
                                    textAlign: EXTRASTR.right
                                }
                            ]}>
                            {Str?.vat + " : " + data?.vat}
                        </Text>

                        <Text
                            style={[
                                styles.text,
                                lang == NUMBER.num0 && {
                                    textAlign: EXTRASTR.right
                                }
                            ]}>
                            {Str?.cr + " : " + data?.cr}
                        </Text>
                    </View>
                </View>
            }

            {
                isLoadding &&
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

export default CustomerService
