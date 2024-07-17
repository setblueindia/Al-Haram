import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ALINE, COLOR } from '../../constants/style'
import { ResponsiveSize, SHOWTOTS } from '../../utils/utils'
import Icon from 'react-native-vector-icons/AntDesign';
import { ICON, NUMBER } from '../../constants/constants';
import Button from '../../components/Button';
import TextFildCus from '../../components/TextFildCus';
import { GetCustomerListToTranfer, getTranferAmount, getTranferAmountList } from '../../api/axios.api';
import { useSelector } from 'react-redux';
import CusLoader from '../../components/CustomLoader';

const TranferAmount = ({ Str, lang, setIsLodding }) => {
    const userID = useSelector(state => state?.userData?.data?.id)
    const [on, setOn] = useState()
    const [text, setText] = useState(Str?.Selectcustomer)
    const [reciverID, setReciverID] = useState()
    const [remark, setRemark] = useState()
    const [amount, setAmount] = useState()
    const [transactionList, setTransactionList] = useState()
    const [data, setData] = useState([
        {
            name: "John Deo"
        },
        {
            name: "John Deo"
        },
        {
            name: "John Deo"
        },
        {
            name: "John Deo"
        },
        {
            name: "John Deo"
        },
        {
            name: "John Deo"
        },
        {
            name: "John Deo"
        },
    ])

    useEffect(() => {
        GetCustomerList()
        TranfetList()
    }, [])


    const GetCustomerList = async () => {
        setIsLodding(true)
        const data = `
        {
            getCustomerSponsorGroupListById(id : ${userID}, pageSize : ${100}, curPage : ${1}){
                entity_id
                reciever_id
                website_id
                email
                nick_name
                status
                total
            }
        }
        `
        try {
            const response = await GetCustomerListToTranfer(data, lang)
            setData(response?.data?.data?.getCustomerSponsorGroupListById)
            setIsLodding(false)


        } catch (error) {
            console.log("GET CUSTOMER LIST ERROR ::::::::::::::: ", error)
            setIsLodding(false)

        }

    }

    const onPress = () => {
        TranferAmount('')
        setRemark('')
        setReciverID('')
    }

    const TranferAmount = async () => {
        setIsLodding(true)
        const data = `
        mutation{
            tranferAmountToCustomerWallet(input:{
               sender_id: ${userID}
               sponsor_group: 1
               reciever_id: ${reciverID}
               amount: ${amount}
               walletnote: ${remark}
           }){
               status
               message
           }
       }
        `
        try {

            const resp = await getTranferAmount(data)
            // console.log("Response =====> ", resp?.data?.data?.tranferAmountToCustomerWallet)
            SHOWTOTS(resp?.data?.data?.tranferAmountToCustomerWallet?.message)
            setIsLodding(false)


        } catch (error) {
            setIsLodding(false)

        }
    }

    const TranfetList = async () => {
        const data = `
        {
            getTransactionListBySenderId(sender_id : ${userID}, pageSize:${10}, curPage:${1}){
                payee_id
                nick_name
                email
                note
                amount
                total
            }
        }
        `
        try {
            const res = await getTranferAmountList(data, lang)
            // console.log("Response ======> ", res?.data?.data?.getTransactionListBySenderId)
            setTransactionList(res?.data?.data?.getTransactionListBySenderId)
        } catch (error) {
            console.log("GET TRANFER LIST ERROR :::::::::::: ", error)
        }
    }

    return (
        <>
            <View style={styles.mainView}>
                <Text style={[styles.firstLine, lang == NUMBER.num0 && { textAlign: 'right' }]}>{Str?.SelectCustomertoaddwalletbalance}
                </Text>
                <View style={styles.devider} />
                <TouchableOpacity
                    onPress={() => { on ? setOn(false) : setOn(true) }}
                    style={[styles.customerSelectionView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                    <Text style={styles.selectCustomer}>{text}</Text>
                    <Icon name={ICON.down} size={ResponsiveSize(30)} />
                </TouchableOpacity>

                {on &&
                    <View style={styles.listView}>
                        <ScrollView style={styles.ScrollView}>

                            {
                                data.map((items, index) => {
                     
                                    return (
                                        <TouchableOpacity onPress={() => {
                                            setReciverID(items?.reciever_id)
                                            setText(items?.nick_name), setOn(false)
                                        }} key={index} style={styles.itemsName}>
                                            <Text style={styles.customerName}>{items?.nick_name}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                }
                <View style={styles.devider} />
                <View style={styles.devider} />
                <TextFildCus onChange={setAmount} number={true} text={Str?.AmountSAR} />
                <View style={styles.devider} />
                <TextFildCus onChange={setRemark} text={Str?.addyourremark} />
                <View style={styles.devider} />
                <View style={styles.devider} />
                <Button onPress={() => { onPress() }} text={Str?.Addmoneytocustomerswallet} />

                <ScrollView style={styles.tranferAmountListView} >
                    {transactionList?.map((items, index) => {
                        console.log("Items : ", items)
                        return (
                            <View key={index} style={styles.innerContainer}>
                                <View style={styles.conatainVIew}>
                                    <Text style={styles.titleText}>{"Name :"}</Text>
                                    <Text style={styles.valueText}>{items?.nick_name}</Text>
                                </View>
                                <View style={styles.conatainVIew}>
                                    <Text style={styles.titleText}>{"Email :"}</Text>
                                    <Text style={styles.valueText}>{items?.email}</Text>
                                </View>
                                <View style={styles.conatainVIew}>
                                    <Text style={styles.titleText}>{"Amount: :"}</Text>
                                    <Text style={styles.valueText}>{items?.amount}</Text>
                                </View>
                                <View style={styles.conatainVIew}>
                                    <Text style={styles.titleText}>{"Note: "}</Text>
                                    <Text style={styles.valueText}>{items?.note}</Text>
                                </View>
                            </View>
                        )
                    })}

                    <View style={{ height: ResponsiveSize(50) }} />
                </ScrollView>

            </View>



        </>

    )
}

export default TranferAmount

const styles = StyleSheet.create({
    firstLine: {
        color: "#00000070",
        fontSize: ResponsiveSize(25),
        lineHeight: ResponsiveSize(40)
    },
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white,
        padding: ResponsiveSize(20)

    },
    customerSelectionView: {
        height: ResponsiveSize(80),
        width: "100%",
        backgroundColor: COLOR.white,
        elevation: 10,
        borderRadius: ResponsiveSize(100),
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: '#000',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: ResponsiveSize(20),
        flexDirection: ALINE.row
    },
    devider: {
        marginTop: ResponsiveSize(20)
    },
    selectCustomer: {
        color: COLOR.black,
        fontSize: ResponsiveSize(25)
    },
    listView: {
        width: "100%",
        backgroundColor: COLOR.white,
        marginTop: ResponsiveSize(20),
        borderRadius: ResponsiveSize(20),
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
        shadowColor: '#000',
        justifyContent: 'space-between',
        paddingHorizontal: ResponsiveSize(20),

    },
    ScrollView: {
        marginBottom: ResponsiveSize(10),
        width: "100%"
    },
    itemsName: {
        height: ResponsiveSize(80),
        width: "100%",
        borderBottomWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        justifyContent: 'center'
    },
    customerName: {
        fontSize: ResponsiveSize(25),
        color: "#00000060"
    },
    devider: {
        marginTop: ResponsiveSize(20)
    },
    tranferAmountListView: {
        // padding: ResponsiveSize(20)

    },
    innerContainer: {
        // height: ResponsiveSize(180),
        width: "100%",
        borderColor: COLOR.primaray,
        borderWidth: ResponsiveSize(1),
        borderRadius: ResponsiveSize(20),
        marginTop: ResponsiveSize(20),
        padding: ResponsiveSize(20)
        // flexDirection:'row',
        // justifyContent:''
    },
    conatainVIew: {
        flexDirection: 'row',
        paddingVertical: ResponsiveSize(5)
    },
    titleText: {
        color: COLOR.black,
        fontFamily: ResponsiveSize(25),
        fontWeight: '600'
    },
    valueText: {
        color: COLOR.darkGray,
        marginLeft: ResponsiveSize(20)
    }

})