import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from '../../constants/style'
import { Ratting } from '../../assests'
import TextFildCus from '../TextFildCus'
import Button from '../Button'
import { EXTRASTR, NUMBER } from '../../constants/constants'

const ReviewSlider = ({ setShowModal, lang }) => {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity
                onPress={() => { setShowModal(false) }}
                style={styles.upperView}>
            </TouchableOpacity>
            <View style={styles.containerView}>
                <Text style={styles.headerText}>{lang?.data == NUMBER.num0 ? "التعليقات" : "Reviews"}</Text>
                <View style={styles.imageView} >
                    <Image source={Ratting} style={styles.img} />
                </View>
                <View style={styles.textInput}>
                    <TextFildCus text={lang?.data == NUMBER.num0 ? "أدخل اسمك المستعار" : "Enter your Nickname"} />
                    <View style={{ marginTop: ResponsiveSize(20) }} />
                    <TextFildCus text={lang?.data == NUMBER.num0 ? "ملخص" : "Summary"} />
                </View>
                <TextInput
                    textAlign={lang?.data == NUMBER.num0 ? EXTRASTR.right : EXTRASTR.left}
                    style={styles.input}
                    multiline={true}
                    underlineColorAndroid='transparent'
                    placeholder={lang?.data == NUMBER.num0 ? "التعليقات" : 'Review'}
                />
            </View>
            <View style={styles.btnView}>
                <Button text={lang?.data == NUMBER.num0 ? "إرسال المراجعة" : "SUBMIT REVIEW"} />
            </View>

        </View>
    )
}

export default ReviewSlider

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#00000040",
        justifyContent: 'flex-end'
    },
    containerView: {
        height: ResponsiveSize(800),
        width: "100%",
        borderTopLeftRadius: ResponsiveSize(20),
        borderTopRightRadius: ResponsiveSize(20),
        backgroundColor: COLOR.white,
        padding: ResponsiveSize(20),



    },
    headerText: {
        fontSize: ResponsiveSize(25),
        fontWeight: FONTWEGHIT.font600,
        color: COLOR.primaray,
        alignSelf: ALINE.center
    },
    imageView: {
        height: ResponsiveSize(40),
        width: "100%",
        alignSelf: ALINE.center,
        paddingHorizontal: ResponsiveSize(20),
        marginTop: ResponsiveSize(20)
    },
    img: {
        height: "100%",
        width: "100%",
        resizeMode: RESIZEMODE.contain
    },
    textInput: {
        marginTop: ResponsiveSize(50)
    },
    input: {
        width: "100%",
        borderBottomColor: COLOR.primaray,
        borderBottomWidth: 1,
        marginTop: ResponsiveSize(20),
        paddingHorizontal: ResponsiveSize(20)
    },
    btnView: {
        marginTop: ResponsiveSize(20),
        position: 'absolute',
        paddingHorizontal: ResponsiveSize(20),
        width: "100%",
        bottom: ResponsiveSize(20)

    },
    upperView: {

        flex: 1
    }
})