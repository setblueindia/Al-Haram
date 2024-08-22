import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ALINE, COLOR } from '../../constants/style'
import CustomeHeader from '../../components/CustomeHeader'
import { useNavigation } from '@react-navigation/native'
import CommanHeader from '../../components/ComanHeader'
import { ResponsiveSize } from '../../utils/utils'
import { bannecrSC } from '../../assests'
import { getBanner } from '../../api/axios.api'
import { useSelector } from 'react-redux'
import { NAVIGATION } from '../../constants/constants'
import CusLoader from '../../components/CustomLoader'
import FastImage from 'react-native-fast-image'
import DataIsNotFound from '../../components/DataNotFound2'

const Banner = (props) => {
    const navigation = useNavigation()
    const lang = useSelector(state => state?.lang?.data)
    const [data, setData] = useState([])
    const [dataLength, setDataLength] = useState()
    const [isloadding, setIsLoadding] = useState(false)
    const [imageLoader, setImageLoader] = useState(false)


    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setIsLoadding(true)
        const formData = new FormData()
        formData.append("store_id", lang)
        formData.append("category_id", props?.route?.params?.cetegouriesId)
        try {
            const response = await getBanner(formData)

            if (response?.data?.status == 1) {
                setData(response?.data?.data)

                const lengthOfData = response?.data?.data?.length
                setDataLength(lengthOfData)
                setIsLoadding(false)
            } else {
                setIsLoadding(false)
                console.log("Banner Data ERROR:::::::: ", response?.data)
            }

        } catch (error) {
            console.log("BANNER ERROR :::::::: ", error)
            setIsLoadding(false)
        }
    }

    return (
        <View style={styles.mainView}>
            <CommanHeader navigation={navigation} lang={lang}/>
            <ScrollView>

                <View style={styles.containerView}>

                    {data?.map((items, index) => {
                        const temp = dataLength % 3 == 0 ? true : false
                        const result = dataLength - 1
                        return (
                            <TouchableOpacity
                                onPress={() => { navigation.navigate(NAVIGATION.ProductScreen, { cetegoriesId: items?.category_id }) }}
                                key={index} style={[styles.imageView,

                                (!temp && result == index) &&
                                {
                                    width: "100%", height: ResponsiveSize(400),
                                    borderWidth: ResponsiveSize(0),
                                    justifyContent: ALINE.center,
                                    alignItems: ALINE.center,
                                    alignSelf: ALINE.center,
                                    marginLeft: ResponsiveSize(0),
                                    marginRight: ResponsiveSize(0)
                                }
                                ]}>
                                <FastImage
                                    resizeMode='contain'
                                    style={[styles.img]} source={{ uri: items?.image }}
                                    onLoadStart={() => { setImageLoader(true) }}
                                    onLoadEnd={() => { setImageLoader(false) }}
                                />

                                {imageLoader &&
                                    <View style={{
                                        height: "100%",
                                        width: "100%",
                                        position: 'absolute',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        alignSelf: 'center'
                                    }}>
                                        <ActivityIndicator size='small' color={COLOR.primaray} />
                                    </View>}
                            </TouchableOpacity>

                        )
                    })}

                </View>
            </ScrollView>
            {isloadding &&
                <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
                    <CusLoader />
                </View>}

            {
                (!isloadding && data.length == 0) &&
                <View style={{ height: "100%", width: "100%" , position:'absolute', alignSelf:'center' , backgroundColor:"#000"}}>
                    <DataIsNotFound header={true} color={true} navigation={navigation} />
                </View>

            }

        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    containerView: {
        height: "100%",
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imageView: {
        height: ResponsiveSize(300),
        width: ResponsiveSize(170),
        marginLeft: ResponsiveSize(20),
        marginTop: ResponsiveSize(20),
        borderWidth: ResponsiveSize(1),
        borderRadius: ResponsiveSize(20),
        borderColor: "#FFEEEE"
    },
    img: {
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
        borderRadius: ResponsiveSize(20)
    }
})