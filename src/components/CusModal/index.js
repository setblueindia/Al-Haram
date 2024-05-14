import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import { logo } from '../../assests'

const CusModal = ({ text , setModalShow , examapleText }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.container}>
                
                {/* <View style={styles.imgView}>
                    <Image style={styles.Image} source={logo} />

                </View> */}

                <Text style={styles.oopsText}>Oops!</Text>
                <View style={styles.textView}>
                    <Text style={styles.errorText}>{text}</Text>
                 {examapleText &&  <Text style={styles.errorText}>{examapleText}</Text>}
                </View>

                <TouchableOpacity
                onPress={()=>{setModalShow(false)}}
                style={styles.button}>
                    <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default CusModal

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#00000050",
    
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        // height: ResponsiveSize(400),
        width: ResponsiveSize(500),
        backgroundColor: COLOR.white,
        // backgroundColor:COLOR.primaray,
        borderRadius: ResponsiveSize(20),
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        alignItems: 'center',
        padding: ResponsiveSize(20)
    },
    Image: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain',

    },
    imgView: {
        height: ResponsiveSize(150),
        width: "100%",
        // backgroundColor:COLOR.black,
        padding: ResponsiveSize(30)
    },
    textView: {
        height: ResponsiveSize(130),
        width: "100%",
        // backgroundColor: "#00000010",
        borderRadius: ResponsiveSize(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: ResponsiveSize(60),
        width: ResponsiveSize(150),
        backgroundColor: COLOR.primaray,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ResponsiveSize(30),
        borderRadius: ResponsiveSize(100)

    },
    buttonText: {
        color: COLOR.white,
        fontSize: ResponsiveSize(30),
        fontWeight: FONTWEGHIT.font400
    },
    errorText:{
        color:COLOR.black,
        fontSize:ResponsiveSize(25),
        textAlign:ALINE.center
    },
    oopsText:{
    color:COLOR.primaray,
    fontWeight:FONTWEGHIT.font700,
    fontSize:ResponsiveSize(30)
    }


})