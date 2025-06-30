import { Image, Modal, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './writereview.style'
import CommanHeader from '../../components/ComanHeader'
import useWriteHook from './writereview.hook'
import StartICON from 'react-native-vector-icons/AntDesign';
import { ResponsiveSize } from '../../utils/utils'
import { COLOR } from '../../constants/style'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { NUMBER } from '../../constants/constants'
import Icon from 'react-native-vector-icons/dist/EvilIcons';
import CloseIcon from 'react-native-vector-icons/dist/AntDesign';
import { CameraIcon, GalleryIcon } from '../../assets'

const WriteReview = () => {
    const {
        navigation,
        lang,
        showPhotoOpations, setShowPhotoOpations } = useWriteHook()
    const testimonials = Array.from({ length: 5 });
    return (
        <View style={styles.mainView}>
            <CommanHeader navigation={navigation} name={"Order Review"} />
            <View style={styles.PDView}>
                <View style={styles.imageView}>
                    <Image style={styles.img} source={{ uri: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4bsUI2A55pqcNaSJopb4Qe4_NvOUkERYw1T19N8frAt3mKfjhq89DxVdzR8_w6OGkv4HbJC5XMuui5CAOJu_IGTO9Nc9jg78wnuMl0ubkz2hZnmwwE-AZbIAB" }} />
                </View>

                <View style={styles.PDNameView}>
                    <Text>{"BABY CASUAL SHOES"}</Text>

                    <View style={[styles.startView,
                        //  lang?.data == NUMBER?.num0 && { flexDirection: 'row-reverse' }
                    ]}>
                        {testimonials?.map((item, index) => {
                            return (
                                <StartICON name={"star"} size={ResponsiveSize(20)} color={COLOR.primaray} />
                            )
                        })}
                        <Text style={styles.reviewText}>{"55 Views"}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.rattingView}>
                <Text style={styles.rateText}>{"Rate & Review"}</Text>

                <View style={styles.startView2}>
                    <AirbnbRating
                        type='star'
                        showRating={false}
                        ratingCount={5}
                        imageSize={ResponsiveSize(40)}
                        selectedColor={COLOR.primaray}
                        size={ResponsiveSize(30)}
                        defaultRating={3}
                    // unSelectedColor={COLOR.primaray}
                    // onFinishRating={handleRatingCompleted}

                    />
                </View>

            </View>

            <View style={styles.fromView}>

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
                    placeholder={lang == NUMBER.num0 ? "وصف" : 'Review'}
                    placeholderTextColor={"#00000090"}
                    multiline
                />

            </View>

            <View style={styles.poductImageView}>
                <Text style={styles.PIText}>{"Upload Product Image"}</Text>
                <TouchableOpacity
                    onPress={() => { setShowPhotoOpations(true) }}
                    style={styles.cemeraView}>
                    <Icon name="camera" size={ResponsiveSize(50)} color={COLOR.primaray} />
                    <Text style={styles.cemeraText}>{"Choose Photo"}</Text>

                </TouchableOpacity>
            </View>



            <Modal
                transparent={true}
                visible={showPhotoOpations}
                animationType='slide'
            >
                <View onPress={() => { setShowPhotoOpations(false) }} style={styles.modalView}>
                    <View style={styles.silderView}>
                        <Text style={styles.modalText}>{"Choose an action"}</Text>

                        <View style={styles.opationsView}>
                            <TouchableOpacity style={styles.commanView}>
                                <View style={styles.cameraView}>
                                    <Image source={GalleryIcon} style={styles.IMGIcon} />
                                </View>
                                <Text style={styles.cameraText}>{"Gallery"}</Text>
                            </TouchableOpacity>

                            <View style={styles.barView} />

                            <TouchableOpacity style={styles.commanView}>
                                <View style={[styles.cameraView, { padding: ResponsiveSize(3) }]}>
                                    <Image source={CameraIcon} style={styles.IMGIcon} />
                                </View>
                                <Text style={styles.cameraText}>{"Camera"}</Text>
                            </TouchableOpacity>


                        </View>

                        <TouchableOpacity
                            onPress={() => { setShowPhotoOpations(false) }}
                            style={styles.closeICON}>
                            <CloseIcon name={"closecircleo"} size={ResponsiveSize(40)} color={COLOR.white} />
                        </TouchableOpacity>

                    </View>


                </View>

            </Modal>



        </View >
    )
}

export default WriteReview

