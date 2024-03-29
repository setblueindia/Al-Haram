import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
const { width, height } = Dimensions.get('window');
const Addresslist = () => {
    const handlePress = () => {
        // Navigate to the AddressBook screen
        navigation.navigate('AddressBookScreen');
      };

    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>

            <View style={{ justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
                <View style={{ marginHorizontal: 10 }}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Ionicons name="arrow-back" size={28} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{}}>


                    <Text style={{ fontSize: 20, fontWeight: "600", color: "black" }}>Address Book</Text>

                </View>

                <View >
                    <Text style={{ color: "#fff" }}>fff</Text>
                </View>


            </View>


            <ScrollView>
                <View style={{ paddingHorizontal: 10, width: width * 90 / 100, backgroundColor: "#fff3f4", alignSelf: "center", height: height * 20 / 100, borderRadius: 10, borderColor: "#d99ea0", borderWidth: 1 }}>
                    <View style={{ padding: 10 }}>

                        <View style={{ justifyContent: "space-between", flexDirection: "row", }}>
                            <View style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#C8C8C8',
                                borderRadius: 5, width: width * 60 / 100,height:30
                            }}>

                                <Text style={{ color: "#990107", fontSize: 16 }}>John Deo</Text>
                            </View>
                            <View style={{ justifyContent: "space-between", flexDirection: "row" }}>

<View style={{}}>

    <Image source={require('../../assests/edit.png')} style={{ width: 20, height: 20 }} />
</View>
<View style={{ marginHorizontal: 10 }}>

    <Image source={require('../../assests/delter.png')} style={{ width: 12, height: 17 }} />
</View>

</View>
                        </View>
                        <View style={{ width: width * 60 / 100, marginVertical: 5 }}>
                            <Text style={{ color: "#8f898a", fontSize: 13 }}>Ring Rd,Maan Darwaja,Aanjada Nagar Athwa Gate,Surat,Gujarat,394210</Text>


                        </View>
                        <View style={{ width: width * 60 / 100 }}>
                            <Text>+97112034506</Text>


                        </View>

                    </View>

                </View>


                <View style={{ paddingHorizontal: 10, width: width * 90 / 100, backgroundColor: "#f7f7f7", alignSelf: "center", height: height * 20 / 100, borderRadius: 10, borderColor: "#F7F7F7", borderWidth: 1, marginVertical: 10 }}>
                    <View style={{ padding: 10 }}>

                        <View style={{ justifyContent: "space-between", flexDirection: "row", }}>
                        <View style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#C8C8C8',
                                borderRadius: 5, width: width * 60 / 100,height:30
                            }}>

                                <Text style={{ color: "#990107", fontSize: 16 }}>John Deo</Text>
                            </View>
                            <View style={{ justifyContent: "space-between", flexDirection: "row" }}>

                                <View style={{}}>

                                    <Image source={require('../../assests/edit.png')} style={{ width: 20, height: 20 }} />
                                </View>
                                <View style={{ marginHorizontal: 10 }}>

                                    <Image source={require('../../assests/delter.png')} style={{ width: 12, height: 17 }} />
                                </View>

                            </View>
                        </View>
                        <View style={{ width: width * 60 / 100 }}>
                            <Text>Ring Rd,Maan Darwaja,Aanjada Nagar Athwa Gate,Surat,Gujarat,394210</Text>


                        </View>
                        <View style={{ width: width * 60 / 100, marginVertical: 10 }}>
                            <Text>+97112034506</Text>


                        </View>

                    </View>

                </View>

                <View style={{ paddingHorizontal: 10, width: width * 90 / 100, backgroundColor: "#f7f7f7", alignSelf: "center", height: height * 20 / 100, borderRadius: 10, borderColor: "#F7F7F7", borderWidth: 1, marginVertical: 10 }}>
                    <View style={{ padding: 10 }}>

                        <View style={{ justifyContent: "space-between", flexDirection: "row", }}>
                        <View style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#C8C8C8',
                                borderRadius: 5, width: width * 60 / 100,height:30
                            }}>

                                <Text style={{ color: "#990107", fontSize: 16 }}>John Deo</Text>
                            </View>
                            <View style={{ justifyContent: "space-between", flexDirection: "row" }}>

                                <View style={{}}>

                                    <Image source={require('../../assests/edit.png')} style={{ width: 20, height: 20 }} />
                                </View>
                                <View style={{ marginHorizontal: 10 }}>

                                    <Image source={require('../../assests/delter.png')} style={{ width: 12, height: 17 }} />
                                </View>

                            </View>
                        </View>
                        <View style={{ width: width * 60 / 100 }}>
                            <Text>Ring Rd,Maan Darwaja,Aanjada Nagar Athwa Gate,Surat,Gujarat,394210</Text>


                        </View>
                        <View style={{ width: width * 60 / 100, marginVertical: 10 }}>
                            <Text>+97112034506</Text>


                        </View>

                    </View>

                </View>

           

            </ScrollView>
            <View style={{ width:width,}}>

            <TouchableOpacity
      style={[
        styles.button,
        Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow,
      ]}
      onPress={handlePress}   >
      <Text style={styles.buttonText}>+ Add new Address</Text>
    </TouchableOpacity>
            </View>
           
        </View>
    )
}

export default Addresslist
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: height,
        padding: 20,
    },
    firstNameContainer: {
        marginBottom: 20,
    },
    label: {
        color: 'white',
        fontSize: 16,
    },
    lastNameContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        borderRadius: 5,
    },
    lastNameInput: {
        fontSize: 16,
        padding: 10,
        color: 'white',
    },
    container: {
        backgroundColor: '#FFF',
        height: height,
        padding: 20,
    },
    inputContainer: {
        marginBottom: 10,
    },
    label: {
        color: 'black',
        fontSize: 20,
        marginBottom: 5,
    },
    inputWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        borderRadius: 5,
    },
    input: {
        fontSize: 16,
        padding: 10,
        color: 'white',
    },
    signInButton: {
        backgroundColor: '#9f0202',
        paddingVertical: 7,
        borderRadius: 3,
        alignItems: 'center',
        marginBottom: 20,
        width: '95%',
        marginHorizontal: 10,
        marginVertical: 20,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 7,
        borderRadius: 3,
        marginBottom: 20,
        width: '80%',
        marginHorizontal: 10,
        marginVertical: 20,
        alignSelf: 'center',
        borderColor: '#d99ea0',
        borderWidth: 1,
      },
      buttonText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
      },
      androidShadow: {
        elevation: 5, // Change this value as needed
      },
      iosShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
});