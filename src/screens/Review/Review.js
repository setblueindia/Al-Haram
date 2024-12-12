import { ScrollView, Text, TextComponent, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './review.style'
import CommanHeader from '../../components/ComanHeader'
import ReviewHook from './review.hook'
import StartICON from 'react-native-vector-icons/AntDesign';
import { ResponsiveSize } from '../../utils/utils'


const Review = () => {
    const {
        navigation,
        showPopp, setShowPopp
    } = ReviewHook()
    const data = [
        {
            name: "Ashok Zinzala",
            email: "ashok@gmail.com",
            des: "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
        {
            name: "Ashok Zinzala",
            email: "ashok@gmail.com",
            des: "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right. good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right"
        },
        {
            name: "Ashok Zinzala",
            email: "ashok@gmail.com",
            des: "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
        {
            name: "Ashok Zinzala",
            email: "ashok@gmail.com",
            des: "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
        {
            name: "Ashok Zinzala",
            email: "ashok@gmail.com",
            des: "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
        {
            name: "Ashok Zinzala",
            email: "ashok@gmail.com",
            des: "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
        {
            name: "Ashok Zinzala",
            email: "ashok@gmail.com",
            des: "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
        {
            name: "Ashok Zinzala",
            email: "ashok@gmail.com",
            des: "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
    ]

    const testimonials = Array.from({ length: 5 });

    return (
        <View style={styles.mainView}>
            <CommanHeader navigation={navigation} name={"Customer Testimonial"} />
            <ScrollView style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                {
                    data?.map((items, index) => {
                        const firstLetter = items?.name.charAt(0).toUpperCase()
                        const color = index % 2 === 0 ? "#eef7ee" : "#f7f2f2"
                        return (
                            <View style={[styles.reviewView, { backgroundColor: color }]}>
                                <View style={styles.fitsView}>
                                    <View style={styles.imageView}>
                                        <Text style={styles.firstLetter}>{firstLetter}</Text>
                                    </View>
                                    <View style={styles.nameView}>
                                        <Text style={styles.nameText}>{items?.name + ", UAE"}</Text>
                                        <Text style={styles.hoursText}>{"11 hours ago"}</Text>

                                        <View style={styles.startView}>
                                            {testimonials?.map((item, index) => {
                                                return (
                                                    <StartICON name={"star"} size={ResponsiveSize(15)} color={"#FAB834"} />
                                                )
                                            })}
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.desText}>{items?.des}</Text>
                            </View>
                        )
                    })


                }
                <View style={{ height: ResponsiveSize(500) }} />
            </ScrollView>

            <View style={styles.btnView}>
                <TouchableOpacity
                    onPress={() => { setShowPopp(true) }}
                    style={styles.btn}>
                    <Text style={styles.btnText}>{"Write a Review"}</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Review

