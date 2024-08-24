import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR } from '../../constants/style'
import Icon from 'react-native-vector-icons/AntDesign';
import { ICON } from '../../constants/constants';

const Counter = ({ qty, setQnt , id , updateQnty}) => {

    const QTY = parseInt(qty)
    const countProcess = async (type) => {
        if (type) {
            if(updateQnty) {
                const res = await updateQnty(id , QTY + 1 , n = true)
                res && setQnt(QTY + 1)
            }else{
                setQnt(QTY + 1)
            }
        } else {
            QTY > 1 && setQnt(QTY - 1)
            if(updateQnty && QTY > 1){
                updateQnty(id , QTY - 1 , n = false)
            }
            // updateQnty &&   updateQnty(id , QTY - 1 , n = false)
        }
    }

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => { countProcess(false) }}
                    style={styles.innerView}>
                    <Icon name={ICON.minus} size={ResponsiveSize(30)} color={COLOR.black} />
                </TouchableOpacity>

                <Text style={styles.text}>{QTY}</Text>

                <TouchableOpacity
                    onPress={() => { countProcess(true) }}
                    style={styles.innerView}>
                    <Icon name={ICON.plus} size={ResponsiveSize(30)} color={COLOR.black} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        width: ResponsiveSize(140),
        height: ResponsiveSize(50),
        borderRadius: ResponsiveSize(100),
        backgroundColor: "#00000010",
        justifyContent: ALINE.center,
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        alignItems: ALINE.center,
        borderColor: "#00000030",
        borderWidth: ResponsiveSize(1),
        paddingHorizontal: ResponsiveSize(5)
    },
    innerView: {
        height: ResponsiveSize(40),
        width: ResponsiveSize(40),
        borderRadius: ResponsiveSize(100),
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        backgroundColor: COLOR.white
    },
    text: {
        color: COLOR.black,
        fontSize: ResponsiveSize(25)
    }
})