import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { styles } from './categories.style'
import { NUMBER } from '../../constants/constants'


const TopCategories = ({ lang }) => {
    const categoris = [
        {
            name: lang?.data == NUMBER.num1 ? "Football" : "كرة القدم",
            img: require('../../assests/images/Home/img1.png')
        },
        {
            name: lang?.data == NUMBER.num1 ? "Football" : "كرة القدم",
            img: require('../../assests/images/Home/img2.png')
        },
        {
        
            name: lang?.data == NUMBER.num1 ? "Football" : "كرة القدم",
            img: require('../../assests/images/Home/img3.png')
        },
        {
        
            name: lang?.data == NUMBER.num1 ? "Football" : "كرة القدم",
            img: require('../../assests/images/Home/img4.png')
        },
        {
          
            name: lang?.data == NUMBER.num1 ? "Football" : "كرة القدم",
            img: require('../../assests/images/Home/img1.png')
        },
        {
          
            name: lang?.data == NUMBER.num1 ? "Football" : "كرة القدم",
            img: require('../../assests/images/Home/img2.png')
        },
        {
          
            name: lang?.data == NUMBER.num1 ? "Football" : "كرة القدم",
            img: require('../../assests/images/Home/img3.png')
        },
        {
           
            name: lang?.data == NUMBER.num1 ? "Football" : "كرة القدم",
            img: require('../../assests/images/Home/img4.png')
        },
        {
          
            name: lang?.data == NUMBER.num1 ? "Football" : "كرة القدم",
            img: require('../../assests/images/Home/img1.png')
        },
        {
           
            name: lang?.data == NUMBER.num1 ? "Football" : "كرة القدم",
            img: require('../../assests/images/Home/img2.png')
        },
        {

            name: lang?.data == NUMBER.num1 ? "Football" : "كرة القدم",
            img: require('../../assests/images/Home/img3.png')
        },
        {
       
            name: lang?.data == NUMBER.num1 ? "Football" : "كرة القدم",
            img: require('../../assests/images/Home/img4.png')
        },

    ]

    return (
        
        <ScrollView
            horizontal={true}
        >

            <View style={styles.mainView}>


                {
                    categoris.map((data, index) => {
                        return (
                            <View style={styles.mapView}>

                                    <View style={styles.listView} key={Math.random() * index}>
                                        <Image style={styles.Image} source={data.img} />

                                    </View>
                                    <View>
                                        <Text style={styles.text}>{data?.name}</Text>
                                    </View>
                              

                            </View>
                        )
                    })
                }

            </View>
        </ScrollView>
    )
}

export default TopCategories

