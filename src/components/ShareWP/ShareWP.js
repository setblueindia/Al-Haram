import { StyleSheet, Text, View, Image, TextComponent, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { COLOR, FONTWEGHIT } from '../../constants/style'
import { whatsapp } from '../../assets'
import TextFildCus from '../TextFildCus'
import Icon from 'react-native-vector-icons/dist/Entypo';


const ShareWP = ({ sewhatsappNumbert, whatsappNumber, share2, setShareOn }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.containerView}>
                <Image source={whatsapp} style={{ height: ResponsiveSize(80), width: ResponsiveSize(80) }} />
                <Text style={styles.text}>{"Enter whatsapp number"}</Text>
                {/* <TextInput style={styles.textInput} /> */}
                <View style={styles.textInput}>
                    <TextFildCus
                        text={"Enter whatsapp number"}
                        number={true}
                        countryText={"+966"}
                        onChange={sewhatsappNumbert}
                        value={whatsappNumber}

                    />
                </View>

                <View style={styles.btnView}>
                    <TouchableOpacity
                        onPress={() => {
                            share2()
                        }}
                        style={styles.shareBTN}>
                        <Text style={styles.btnText}>{"Send Giftcard"}</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={[styles.shareBTN, { backgroundColor: COLOR.primaray }]}>
                        <Text style={styles.btnText}>{"More share"}</Text>
                    </TouchableOpacity> */}
                </View>

                {/* <View style={styles.noteView}>
                    <Text style={styles.note}>{"Note: If you select 'More Share,' we will not be notified about the shared customer."}</Text>
                </View> */}



                <TouchableOpacity
                    onPress={() => { setShareOn(false) }}
                    style={styles.closeView}>
                    <Icon name="cross" size={ResponsiveSize(30)} color="#FF000095" />
                </TouchableOpacity>



            </View>
        </View>
    )
}

export default ShareWP

const styles = StyleSheet.create({
    mainView: {
        height: "100%",
        width: "100%",
        backgroundColor: "#00000050",
        position: 'absolute',
        paddingHorizontal: ResponsiveSize(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerView: {
        // height: ResponsiveSize(300),
        width: "100%",
        backgroundColor: COLOR.white,
        borderRadius: ResponsiveSize(20),
        alignItems: 'center',
        justifyContent: 'center',
        padding: ResponsiveSize(20)
    },
    text: {
        color: COLOR.black,
        fontSize: ResponsiveSize(20),
        marginTop: ResponsiveSize(20)

    },
    textInput: {

        marginTop: ResponsiveSize(20),

    },
    btnView: {
        marginTop: ResponsiveSize(20),
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    shareBTN: {
        // height: ResponsiveSize(70), 
        // width: ResponsiveSize(180),
        // width: "50%",
        backgroundColor: COLOR.liteGreen,
        borderRadius: ResponsiveSize(20),
        alignItems: 'center',
        justifyContent: 'center',
        padding: ResponsiveSize(20)
    },
    btnText: {
        color: COLOR.white,
        fontWeight: FONTWEGHIT.font600,
        fontSize: ResponsiveSize(22)
    },
    note: {
        color: "#990107",
        // color: COLOR.primaray,

        textAlign: 'center',
        fontSize: ResponsiveSize(18)
    },
    noteView: {
        padding: ResponsiveSize(10),
        borderWidth: ResponsiveSize(1),
        marginTop: ResponsiveSize(30),
        width: "100%",
        borderRadius: ResponsiveSize(10),
        borderColor: COLOR.primaray

    },
    closeView: {
        height: ResponsiveSize(40),
        width: ResponsiveSize(40),
        borderRadius: ResponsiveSize(100),
        borderColor: "#129A3C90",
        borderWidth: ResponsiveSize(1),
        position: 'absolute',
        top: ResponsiveSize(10),
        right: ResponsiveSize(10),
        alignItems: 'center',
        justifyContent: 'center'
    }
})