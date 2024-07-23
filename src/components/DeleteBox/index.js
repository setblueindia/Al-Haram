import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { COLOR } from '../../constants/style'
import { NUMBER } from '../../constants/constants'
import { Ar, En } from '../../constants/localization'

const DeleteBox = ({lang , noPress , yesPress}) => {
    const lable = lang == NUMBER.num0 ? Ar : En
    return (
        <View style={styles.mainView}>
            <View style={styles.containerView}>
                <Text style={styles.text}>{lable?.AreYousureyouwantdelete}</Text>
                <View style={[styles.btnContainer ,  lang == NUMBER.num0 &&  {flexDirection:'row-reverse'}]}>
                    <TouchableOpacity
                    onPress={noPress}
                    style={styles.btnView}>
                        <Text style={styles.btnText}>{lable?.NO}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={yesPress}
                    style={styles.btnView}>
                        <Text style={styles.btnText}>{lable?.Yes}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DeleteBox

const styles = StyleSheet.create({
    mainView: {
        height: "100%",
        width: "100%",
        backgroundColor: "#00000050",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: ResponsiveSize(20)
    },
    containerView: {
        width: "100%",
        borderRadius: ResponsiveSize(20),
        backgroundColor: COLOR.white,
        padding: ResponsiveSize(20)
    },
    text: {
        textAlign: 'center',
        fontSize:ResponsiveSize(22)
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: ResponsiveSize(40),
        paddingHorizontal: ResponsiveSize(20)
    },
    btnView: {
        height: ResponsiveSize(70),
        width: ResponsiveSize(200),
        borderRadius: ResponsiveSize(20),
        backgroundColor: COLOR.primaray,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText:{
        color:COLOR.white
    }
})