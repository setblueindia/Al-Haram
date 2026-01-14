import { Modal, ScrollView, Text, TextComponent, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './review.style'
import CommanHeader from '../../components/ComanHeader'
import ReviewHook from './review.hook'
import StartICON from 'react-native-vector-icons/AntDesign';
import { ResponsiveSize } from '../../utils/utils'
import Reviewpoupp from '../../components/Reviewpoupp'
import { useSelector } from 'react-redux'
import { NUMBER } from '../../constants/constants'


const Review = () => {
    const lang = useSelector(state => state.lang)
    const {
        navigation,
        showPopp, setShowPopp
    } = ReviewHook()

    const data = [
        {
            name: "John Xender",
            email: "ashok@gmail.com",
            des: lang.data == NUMBER.num0 ? "لقد كانت لي تجربة جيدة معهم. جودة الملابس ممتازة، ولون الفستان لا يبهت، وحجم الملابس مناسب أيضًا." : "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
        {
            name: "John Xender",
            email: "ashok@gmail.com",
            des: lang.data == NUMBER.num0 ? "لقد كانت لي تجربة جيدة معهم. جودة الملابس ممتازة، ولون الفستان لا يبهت، وحجم الملابس مناسب أيضًا. تجربة جيدة معهم. جودة الملابس ممتازة، ولون الفستان لا يبهت، وحجم الملابس مناسب أيضًا" : "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right. good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right"
        },
        {
            name: "John Xender",
            email: "ashok@gmail.com",
            des: lang.data == NUMBER.num0 ? "لقد كانت لي تجربة جيدة معهم. جودة الملابس ممتازة، ولون الفستان لا يبهت، وحجم الملابس مناسب أيضًا." : "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
        {
            name: "John Xender",
            email: "ashok@gmail.com",
            des: lang.data == NUMBER.num0 ? "لقد كانت لي تجربة جيدة معهم. جودة الملابس ممتازة، ولون الفستان لا يبهت، وحجم الملابس مناسب أيضًا." : "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
        {
            name: "John Xender",
            email: "ashok@gmail.com",
            des: lang.data == NUMBER.num0 ? "لقد كانت لي تجربة جيدة معهم. جودة الملابس ممتازة، ولون الفستان لا يبهت، وحجم الملابس مناسب أيضًا." : "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
        {
            name: "John Xender",
            email: "ashok@gmail.com",
            des: lang.data == NUMBER.num0 ? "لقد كانت لي تجربة جيدة معهم. جودة الملابس ممتازة، ولون الفستان لا يبهت، وحجم الملابس مناسب أيضًا." : "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
        {
            name: "John Xender",
            email: "ashok@gmail.com",
            des: lang.data == NUMBER.num0 ? "لقد كانت لي تجربة جيدة معهم. جودة الملابس ممتازة، ولون الفستان لا يبهت، وحجم الملابس مناسب أيضًا." : "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
        {
            name: "John Xender",
            email: "ashok@gmail.com",
            des: lang.data == NUMBER.num0 ? "لقد كانت لي تجربة جيدة معهم. جودة الملابس ممتازة، ولون الفستان لا يبهت، وحجم الملابس مناسب أيضًا." : "I had a good experience with them. The quality of the clothes are excellent, the colour of the dress doesn't fade, and the size of the clothes are also right."
        },
    ]

    const testimonials = Array.from({ length: 5 });

    return (
        <View style={styles.mainView}>
            <CommanHeader lang={lang?.data} navigation={navigation} name={lang.data == NUMBER.num0 ? "شهادة العملاء" : "Customer Testimonial"} />
            <ScrollView style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                {
                    data?.map((items, index) => {
                        const firstLetter = items?.name.charAt(0).toUpperCase()
                        const color = index % 2 === 0 ? "#eef7ee" : "#f7f2f2"
                        return (
                            <View style={[styles.reviewView, { backgroundColor: color }]}>
                                <View style={[styles.fitsView, lang.data == NUMBER.num0 && { flexDirection: "row-reverse" }]}>
                                    <View style={styles.imageView}>
                                        <Text style={styles.firstLetter}>{firstLetter}</Text>
                                    </View>
                                    <View style={[styles.nameView, lang.data == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>
                                        <Text style={[styles.nameText, lang.data == NUMBER.num0 && { textAlign: 'right' }]}>{items?.name + ", UAE"}</Text>
                                        <Text style={[styles.hoursText, lang.data == NUMBER.num0 && { textAlign: 'right' }]}>{lang.data == NUMBER.num1 ? "11 hours ago" : "منذ 11 ساعة"}</Text>

                                        <View style={[styles.startView, lang.data == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
                                            {testimonials?.map((item, index) => {
                                                return (
                                                    <StartICON name={"star"} size={ResponsiveSize(15)} color={"#FAB834"} />
                                                )
                                            })}
                                        </View>
                                    </View>
                                </View>
                                <Text style={[styles.desText, lang.data == NUMBER.num0 && { textAlign: 'right' }]}>{items?.des}</Text>
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
                    <Text style={styles.btnText}>{lang.data == NUMBER.num1 ? "Write a Review" : "اكتب مراجعة"}</Text>
                </TouchableOpacity>

            </View>

            <Modal
                visible={showPopp}
                transparent={true}
                animationType='slide'

            >
                <Reviewpoupp setShowPopp={setShowPopp} />
            </Modal>

        </View>
    )
}

export default Review

