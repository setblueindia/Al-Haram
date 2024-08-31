import { View, Image, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './silder.style'
import { NUMBER } from '../../constants/constants'
import { COLOR, RESIZEMODE } from '../../constants/style'
import FastImage from 'react-native-fast-image'
import { A } from '../../assests'

const Slider = ({lang , height , data , home}) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const flatListRef = useRef()
    const windowWidth = Dimensions.get('window').width;
    const [loade , setLoade] = useState(false)


    const handaleScroll = (event) => {

        const scrollPosition = event?.nativeEvent?.contentOffset.x;
        const index = scrollPosition / windowWidth
        const  floatValue = Math?.ceil(index) 
        setActiveIndex(floatValue)

    }

    // useEffect(() => {
    //     let intervel = setInterval(() => {
    //         if (activeIndex === data?.length - 1) {
    //             flatListRef?.current?.scrollToIndex({
    //                 index: 0,
    //                 animation: true
    //             });
    //         } else {
    //             flatListRef?.current?.scrollToIndex({
    //                 index: activeIndex + 1,
    //                 animation: true
    //             });
    //         }
    //     }, 3000);

    //     return () => clearInterval(intervel)
    // });

    useEffect(() => {
        const interval = setInterval(() => {
            if (flatListRef.current) {
                let nextIndex = activeIndex + 1;

                // If reaching the end of the list, jump to the start
                if (nextIndex === data?.length) {
                    nextIndex = 0;
                    flatListRef.current.scrollToOffset({ offset: 0, animated: false });
                } else {
                    flatListRef.current.scrollToIndex({
                        index: nextIndex,
                        animated: true,
                    });
                }

                setActiveIndex(nextIndex);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex]);

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
                             <FastImage
                                // resizeMode='contain'
                                // onLoadStart={()=>{setLoade(true)}}
                                // onLoadEnd={()=>{setLoade(false)}}
                                style={[styles?.image , home && {resizeMode:RESIZEMODE.stretch}]}
                                source={(item?.image || item )? { uri: item?.image ? item?.image : item} : A}
                            />
                        </View> 
                    )
                }}
            /> :
            home ? <View style={[styles.mainView , {backgroundColor:COLOR.gray}]}/>  :
             <View style={[styles.mainView ]}>
                <Image style={{height:"100%" , width:"100%" , resizeMode:'cover'}} source={A}/>
            </View>
            }

        </View>

    )
}
export default Slider


