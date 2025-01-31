import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import { ResponsiveSize } from '../../utils/utils'
import { Rating } from 'react-native-ratings';
import { useSelector } from 'react-redux';
import { NUMBER } from '../../constants/constants';
import Icon from 'react-native-vector-icons/Entypo';


const Reviewpoupp = ({ setShowPopp }) => {

    const [rating, setRating] = useState(0);
    const lang = useSelector(state => state.lang?.data)


    const handleRatingCompleted = (ratingValue) => {
        setRating(ratingValue);
    };
    return (
        <View style={styles.mainView}>
            <View style={styles.conatiner}>
                <Text style={[styles.headerText]}>{lang == NUMBER?.num0 ? "أنت تقوم بمراجعة:" : "You're reviewing:"}</Text>
                <View style={[styles.secondView, , lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                    <Text style={styles.ratereviewText}>{lang == NUMBER?.num0 ? "معدل ومراجعة" : "Rate & Review"}</Text>
                    <View style={styles.startView}>
                        <Rating
                            type='star'
                            ratingCount={5}
                            imageSize={ResponsiveSize(40)}
                            unSelectedColor={COLOR.primaray}
                            onFinishRating={handleRatingCompleted}

                        />
                    </View>
                </View>
                <View style={styles.thirdView}>
                    <TextInput
                        style={[styles.textView]}
                        textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
                        placeholder={lang == NUMBER.num0 ? 'اسمك المستعار' : 'Nickname'}
                        placeholderTextColor={"#00000090"}

                    />
                    <TextInput
                        style={[styles.textView, { marginTop: ResponsiveSize(20) }]}
                        textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
                        placeholder={lang == NUMBER.num0 ? 'ملخص' : 'Summary'}
                        placeholderTextColor={"#00000090"}

                    />

                    <TextInput
                        style={[styles.textView, { marginTop: ResponsiveSize(20), height: ResponsiveSize(200), textAlignVertical: 'top', padding: ResponsiveSize(20) }]}
                        textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
                        placeholder={lang == NUMBER.num0 ? "وصف" : 'Nickname'}
                        placeholderTextColor={"#00000090"}
                        multiline
                    />


                </View>

                <TouchableOpacity
                    onPress={() => { setShowPopp(false) }}
                    style={styles.btnView}>
                    <Text style={styles.btnText}>{lang == NUMBER.num1 ? "SUBMIT" : "يُقدِّم"}</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => { setShowPopp(false) }}
                    style={[styles.closeView, lang == NUMBER?.num0 && { left: ResponsiveSize(20) }]}>

                    <Icon name={"cross"} color={COLOR.white} size={ResponsiveSize(30)} />
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Reviewpoupp

const styles = StyleSheet.create({
    mainView: {
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: "#00000080",
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        paddingHorizontal: ResponsiveSize(20),

    },
    conatiner: {
        width: "100%",
        backgroundColor: COLOR.white,
        borderRadius: ResponsiveSize(20),
        alignItems: ALINE.center,
        padding: ResponsiveSize(25),
        borderWidth: ResponsiveSize(1),
        borderColor: "#cccccc50",

    },
    headerText: {
        color: COLOR.black,
        fontSize: ResponsiveSize(35)
    },
    secondView: {
        width: "100%",
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        marginTop: ResponsiveSize(25)
    },
    ratereviewText: {
        color: COLOR.darkGray
    },
    startView: {

    },
    textView: {
        height: ResponsiveSize(80),
        width: "100%",
        borderRadius: ResponsiveSize(20),
        backgroundColor: "#f7f2f2",
        borderWidth: ResponsiveSize(1),
        borderColor: "#cccccc50",
        paddingHorizontal: ResponsiveSize(20)
    },
    thirdView: {
        width: "100%",
        marginTop: ResponsiveSize(20)
    },
    btnView: {
        height: ResponsiveSize(80),
        backgroundColor: COLOR.primaray,
        width: "100%",
        borderRadius: ResponsiveSize(20),
        marginTop: ResponsiveSize(20),
        alignItems: ALINE.center,
        justifyContent: ALINE.center
    },
    btnText: {
        color: COLOR.white,
        fontSize: ResponsiveSize(22),
        fontWeight: FONTWEGHIT.font400
    }, closeView: {
        height: ResponsiveSize(40),
        width: ResponsiveSize(40),
        borderRadius: ResponsiveSize(100),
        backgroundColor: COLOR.primaray,
        position: 'absolute',
        top: ResponsiveSize(20),
        right: ResponsiveSize(20),
        alignItems: 'center',
        justifyContent: 'center'
    }
})