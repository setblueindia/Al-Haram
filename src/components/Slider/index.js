import { View, Image, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './silder.style'
import { NUMBER } from '../../constants/constants'
import { ResponsiveSize } from '../../utils/utils'
import FastImage from 'react-native-fast-image'
import { COLOR, RESIZEMODE } from '../../constants/style'

const Slider = ({lang , height , data , home}) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const flatListRef = useRef()
    const windowWidth = Dimensions.get('window').width;


    const handaleScroll = (event) => {

        const scrollPosition = event?.nativeEvent?.contentOffset.x;

        const index = scrollPosition / windowWidth
        const  floatValue = Math?.ceil(index) 
        setActiveIndex(floatValue)

    }

    useEffect(() => {
        let intervel = setInterval(() => {
            if (activeIndex === data?.length - 1) {
                flatListRef?.current?.scrollToIndex({
                    index: 0,
                    animation: true
                });
            } else {
                flatListRef?.current?.scrollToIndex({
                    index: activeIndex + 1,
                    animation: true
                });
            }
        }, 3000);

        return () => clearInterval(intervel)
    });

    const getIntemLayout = (data, index) => ({
        length: windowWidth,
        offset: windowWidth * index,
        index: index

    })

    return (
        <View style={[styles.mainView , height && {height:height}]}>
          { data?.length > 0 ?
           <FlatList
                inverted ={lang?.data == NUMBER?.num0 ? true : false}
                horizontal={true}
                ref={flatListRef}
                data={data}
                keyboardDismissMode={(data , index)=> Math.random() * index}
                showsHorizontalScrollIndicator={false}
                getItemLayout={getIntemLayout}
                pagingEnabled={true}
                onScroll={handaleScroll}
                renderItem={({ item , index}) => {

                    return (
                     <View key={index * 2} style={styles.listView}>
            
                             <Image
                            //  resizeMode='contain'
                                style={[styles?.image , home && {resizeMode:RESIZEMODE.cover}]}
                                source={{ uri: item?.image ? item?.image : item}}
                            />
                        </View> 
                    )
                }}
            /> :
             <View style={[styles.mainView , {backgroundColor:COLOR.gray}]}>

            </View>


            }

        </View>


    )
}
export default Slider



// import { Dimensions, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { ImageSlider } from "react-native-image-slider-banner";
// import { styles } from './silder.style'
// import { ResponsiveSize } from '../../utils/utils';

// const Slider = () => {

//     const windowWidth = Dimensions.get('window').width;

//     const images = [

//         { img: "https://img.freepik.com/free-photo/medium-shot-smiley-woman-indoors_23-2148875315.jpg" },
//         { img: "https://st2.depositphotos.com/1518767/6899/i/450/depositphotos_68995953-stock-photo-fashion-designer-using-digital-tablet.jpg" },
//         { img: "https://plus.unsplash.com/premium_photo-1661727339503-b15c728dff40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMGRlc2lnbmVyfGVufDB8fDB8fHww" },
//         { img: "https://plus.unsplash.com/premium_photo-1661741573027-7b95db386a03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb24lMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D" },
//         { img: "https://images.unsplash.com/photo-1626784579980-db39c1a13aa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb24lMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D" },
//         { img: "https://images.unsplash.com/photo-1573612664822-d7d347da7b80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb24lMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D" }
//     ]

//     return (
        
//         <View style={styles.mainView}>
//             <ImageSlider
//                 data={images}
//                 autoPlay={true}
//                 showIndicator={false}
//                 style={{ flexDirection: 'row-reverse' }}
                
//                 closeIconColor="#fff"
//                 caroselImageStyle={{
//                     resizeMode: 'cover',
//                     height: ResponsiveSize(280),
//                     backgroundColor: '#000000',
//                     borderRadius: ResponsiveSize(10),
//                     width: ResponsiveSize(530),
//                     marginLeft: ResponsiveSize(20),
//                     marginRight: ResponsiveSize(10),
//                     // flexDirection:'column-reverse'
                   
//                 }}
//                 previewImageContainerStyle={{
//                     width: ResponsiveSize(600),
//                     // backgroundColor:"#000000"
//                 }}
//             // preview={false}
//             // reverse = {true}
          
//             />
//         </View>

//     )
// }

// export default Slider



