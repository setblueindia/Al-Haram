import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR } from '../../constants/style'
import Icon from 'react-native-vector-icons/AntDesign';
import { ICON } from '../../constants/constants';

const Counter = () => {

    const [count, setCount] = useState(0)

    const countProcess = (type) => {
        if (type) {
            setCount(count + 1)
        } else {
            count > 0 && setCount(count - 1)
        }
    }
    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => { countProcess(true) }}
                    style={styles.innerView}>
                    <Icon name={ICON.plus} size={ResponsiveSize(30)} color={COLOR.black} />
                </TouchableOpacity>

                <Text style={styles.text}>{count}</Text>

                <TouchableOpacity
                    onPress={() => { countProcess(false) }}
                    style={styles.innerView}>
                    <Icon name={ICON.minus} size={ResponsiveSize(30)} color={COLOR.black} />
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