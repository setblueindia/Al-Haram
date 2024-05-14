import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import Icon from 'react-native-vector-icons/AntDesign';
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import { ICON, NAVIGATION, NUMBER } from '../../constants/constants';

const CategoriesList = ({ index, data, name, navigation , lang}) => {

    const [on, setOn] = useState(false)
    const [viewMore, setViewMore] = useState(false)
    const slicedArray = data.sub_category.slice(0, 6);
    const mainData = data?.sub_category
    const count = mainData.length - slicedArray.length


    return (
        <View>
            <TouchableOpacity
                onPress={() => { !on && data.title == name ? setOn(true) : setOn(false), setViewMore(false) }}
                style={[styles.mainView , lang == NUMBER.num0 && {flexDirection:ALINE.rowreverse}]} key={index}>
                <Text style={styles.title}>{data?.title}</Text>
                <Icon size={ResponsiveSize(25)} name={!on ? lang == NUMBER.num0 ? ICON.left : ICON.right : ICON.down} />
            </TouchableOpacity>

            {on &&
                <View style={styles.imageContainer} >
                    <FlatList
                        scrollEnabled={false}
                        style={{transform: [{ rotate: '0deg'}]}}
                        data={viewMore ? mainData : slicedArray}
                        numColumns={3}
                        keyExtractor={(item, index) => index * Math.random()}
                        renderItem={({ item, index }) => {

                            return (
                                <>
                                    <TouchableOpacity
                                        onPress={() => { navigation.navigate(NAVIGATION.ProductScreen) }}
                                        key={index * Math.random()} style={[styles.imageView ]}>
                                        <Image
                                            style={styles.image}
                                            source={{ uri: item?.image }} />
                                    </TouchableOpacity>

                                    {
                                        !viewMore && index == 5 &&
                                        <View style={styles.ViewMore}>
                                            <TouchableOpacity
                                                onPress={() => { setViewMore(true) }}
                                                style={styles.btnView}
                                                >
                                                <Text style={styles.viewText}>{ " + " + count}</Text>
                                            </TouchableOpacity>

                                        </View>
                                    }

                                    {/* {
                                        lang == NUMBER.num0  && 
                                    } */}
                                </>
                            )
                        }}

                    />
                </View>
            }

        </View>

    )
}

export default CategoriesList

const styles = StyleSheet.create({
    mainView: {
        height: ResponsiveSize(80),
        borderWidth: ResponsiveSize(1),
        borderColor: COLOR.gray,
        flexDirection: ALINE.row,
        padding: ResponsiveSize(20),
        width: "100%",
        alignItems: ALINE.center,
        justifyContent: ALINE.spaceBetween,
        backgroundColor: COLOR.white,

    },
    devider: {
        height: ResponsiveSize(20)
    },
    title: {
        color: COLOR.black,
        fontSize: ResponsiveSize(25)
    },
    imageView: {

        height: ResponsiveSize(300),
        width: "30%",
        margin: ResponsiveSize(10),
        borderRadius: ResponsiveSize(20),
        backgroundColor: COLOR.white,
        elevation: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        alignItems: ALINE.center,
        justifyContent: ALINE.center
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain',
        borderRadius: ResponsiveSize(20)
    },
    imageContainer: {
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        backgroundColor: "#FDEE0010",
        padding: ResponsiveSize(10)
    },
    ViewMore: {
        height: ResponsiveSize(300),
        width: "30%",
        backgroundColor: "#00000070",
        position: 'absolute',
        right: 0,
        alignSelf: ALINE.center,
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        marginRight: ResponsiveSize(7),
        borderRadius: ResponsiveSize(20)
    },
    btnView: {
        height: ResponsiveSize(300),
        width: "100%",
        alignItems: ALINE.center,
        justifyContent: ALINE.center
    },
    viewText: {
        color: COLOR.white,
        // fontWeight: FONTWEGHIT.font700,
        fontSize:ResponsiveSize(40),
        
    }
})