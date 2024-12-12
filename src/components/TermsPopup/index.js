import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR, FONTWEGHIT } from '../../constants/style'
import { ResponsiveSize } from '../../utils/utils'
import CheackButton from '../CheackButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ASYNCSTORAGE } from '../../constants/constants'

const TermsPopup = ({ termsData, onPress }) => {

    const storeData = async () => {
        const tempTerms = "true"
        await AsyncStorage.setItem(ASYNCSTORAGE.Terms, tempTerms)
    }


    return (
        <View style={styles.mainView}>
            <View style={styles.container}>
                <Text style={styles.headerText}>{termsData?.title_text ? termsData?.title_text : ""}</Text>

                <Text style={styles.desText}>{termsData?.popup_message ? termsData?.popup_message : ""}</Text>

                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL(termsData?.redirect_url)
                        onPress(false)
                        storeData()
                    }}
                    style={styles.btnView}>
                    <Text style={styles.btnTxt}>{termsData?.button_text ? termsData?.button_text : ""}</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default TermsPopup

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#00000050",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: ResponsiveSize(20)
    },
    container: {
        // height: ResponsiveSize(400),
        width: "100%",
        backgroundColor: COLOR.white,
        borderRadius: ResponsiveSize(20),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: ResponsiveSize(20)
    },
    headerText: {
        fontSize: ResponsiveSize(25),
        color: COLOR.primaray,
        fontWeight: FONTWEGHIT.font600
    },
    desText: {
        textAlign: 'center',
        marginTop: ResponsiveSize(10),
        lineHeight: ResponsiveSize(30),
        fontSize: ResponsiveSize(20),
        color: COLOR.black
    },
    btnView: {
        height: ResponsiveSize(60),
        width: ResponsiveSize(130),
        borderRadius: ResponsiveSize(20),
        backgroundColor: "green",
        marginTop: ResponsiveSize(20),
        alignItems: 'center',
        justifyContent: 'center',
        // padding: ResponsiveSize(10),
        // paddingHorizontal: ResponsiveSize(20)
    },
    btnTxt: {
        color: COLOR.white,
        fontSize: ResponsiveSize(22),
        fontWeight: FONTWEGHIT.font600

    },
    checkBoxView: {
        flexDirection: 'row',
        marginTop: ResponsiveSize(20),
        // position: 'absolute',
        width: "100%",
        // marginTop: ResponsiveSize(200)
    },
    agreeText: {
        fontSize: ResponsiveSize(20),
        marginLeft: ResponsiveSize(10),
        color: COLOR.primaray,

    }
})