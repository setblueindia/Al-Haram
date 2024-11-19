// import { View, Image, FlatList, Dimensions, Animated } from 'react-native';
// import React, { useEffect, useRef, useState } from 'react';
// import { styles } from './silder.style';
// import { NUMBER } from '../../constants/constants';
// import { COLOR, RESIZEMODE } from '../../constants/style';
// import FastImage from 'react-native-fast-image';
// import { A } from '../../assests';
// import { PinchGestureHandler } from 'react-native-gesture-handler';
// // import ZoomableView from 'react-native-zoomable-view';

// const Slider = ({ lang, height, data, home }) => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const flatListRef = useRef();
//     const windowWidth = Dimensions.get('window').width;

//     useEffect(() => {
//         if (data?.length === 0) return; // No data to scroll through

//         const interval = setInterval(() => {
//             if (flatListRef.current) {
//                 let nextIndex = (activeIndex + 1) % data.length; // Wrap around to first item

//                 if (nextIndex === 0) {
//                     // Scroll to the first item without animation
//                     flatListRef.current.scrollToOffset({ offset: 0, animated: false });
//                 } else {
//                     flatListRef.current.scrollToIndex({
//                         index: nextIndex,
//                         animated: true,
//                     });
//                 }

//                 setActiveIndex(nextIndex);
//             }
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [activeIndex, data]);

//     const handleScroll = (event) => {
//         const scrollPosition = event?.nativeEvent?.contentOffset.x || 0;
//         const index = Math.floor(scrollPosition / windowWidth);
//         setActiveIndex(index);
//     };

//     const getItemLayout = (data, index) => ({
//         length: windowWidth,
//         offset: windowWidth * index,
//         index,
//     });

//     const scale = React.useRef(new Animated.Value(1)).current

//     const onPinchEvent = Animated.event(
//         [{ nativeEvent: { scale: scale } }],
//         { useNativeDriver: true } // Add this second argument
//     );



//     const renderItem = ({ item }) => {
//         const imgURL = item?.image ? item?.image : item;
//         return (
//             <View style={styles.listView}>
//                 <PinchGestureHandler onGestureEvent={onPinchEvent}>
//                     <Animated.Image
//                         resizeMode={home ? RESIZEMODE.stretch : RESIZEMODE.contain}
//                         style={[styles.image, home ? { resizeMode: RESIZEMODE.stretch } : home ? { resizeMode: RESIZEMODE.stretch } : { resizeMode: RESIZEMODE.contain }, { transform: [{ scale }] }]}
//                         source={imgURL ? { uri: imgURL } : A}
//                     />
//                 </PinchGestureHandler>

//             </View>
//         );
//     };

//     return (
//         <View style={[styles.mainView, height && { height: height }]}>
//             {data?.length > 0 ? (
//                 <FlatList
//                     inverted={lang?.data === NUMBER?.num0}
//                     horizontal={true}
//                     ref={flatListRef}
//                     data={data}
//                     keyExtractor={(item, index) => index.toString()}
//                     showsHorizontalScrollIndicator={false}
//                     getItemLayout={getItemLayout}
//                     pagingEnabled={true}
//                     onScroll={handleScroll}
//                     renderItem={renderItem}
//                 />
//             ) : home ? (
//                 <View style={[styles.mainView, { height: height ? height : "100%", backgroundColor: COLOR.gray }]} />
//             ) : (
//                 <View style={[styles.mainView]}>
//                     <Image style={{ height: '100%', width: '100%', resizeMode: 'cover' }} source={A} />
//                 </View>
//             )}
//         </View>
//     );
// };

// export default Slider;

// import { View, Image, FlatList, Dimensions, Animated } from 'react-native';
// import React, { useEffect, useRef, useState } from 'react';
// import { styles } from './silder.style';
// import { NUMBER } from '../../constants/constants';
// import { COLOR, RESIZEMODE } from '../../constants/style';
// import { A } from '../../assests';
// import { PinchGestureHandler, State } from 'react-native-gesture-handler';

// const Slider = ({ lang, height, data, home }) => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const flatListRef = useRef();
//     const windowWidth = Dimensions.get('window').width;
//     const scale = useRef(new Animated.Value(1)).current;
//     const lastScale = useRef(1); // To store the last scale value
//     const [isZooming, setIsZooming] = useState(false);

//     // Auto-Slide Logic
//     useEffect(() => {
//         if (data?.length === 0 || isZooming) return;

//         const interval = setInterval(() => {
//             if (flatListRef.current) {
//                 let nextIndex = (activeIndex + 1) % data.length;
//                 if (nextIndex === 0) {
//                     flatListRef.current.scrollToOffset({ offset: 0, animated: false });
//                 } else {
//                     flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
//                 }
//                 setActiveIndex(nextIndex);
//             }
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [activeIndex, data, isZooming]);

//     const handleScroll = (event) => {
//         const scrollPosition = event?.nativeEvent?.contentOffset.x || 0;
//         const index = Math.floor(scrollPosition / windowWidth);
//         setActiveIndex(index);
//     };

//     const getItemLayout = (data, index) => ({
//         length: windowWidth,
//         offset: windowWidth * index,
//         index,
//     });

//     // Pinch Gesture Logic
//     const onPinchEvent = Animated.event(
//         [{ nativeEvent: { scale: scale } }],
//         { useNativeDriver: true }
//     );

//     const onPinchStateChange = (event) => {
//         if (event.nativeEvent.state === State.BEGAN) {
//             setIsZooming(true);
//         } else if (event.nativeEvent.state === State.END || event.nativeEvent.state === State.CANCELLED) {
//             setIsZooming(false);

//             // Update the last scale value
//             lastScale.current *= event.nativeEvent.scale;
//             lastScale.current = Math.max(1, Math.min(lastScale.current, 3)); // Limit zoom level

//             // Smooth transition to the new scale
//             Animated.spring(scale, {
//                 toValue: lastScale.current,
//                 useNativeDriver: true,
//             }).start();
//         }
//     };

//     const renderItem = ({ item }) => {
//         const imgURL = item?.image ? item?.image : item;
//         return (
//             <View style={styles.listView}>
//                 <PinchGestureHandler
//                     onGestureEvent={onPinchEvent}
//                     onHandlerStateChange={onPinchStateChange}
//                 >
//                     <Animated.Image
//                         resizeMode={home ? RESIZEMODE.stretch : RESIZEMODE.contain}
//                         style={[styles.image, { transform: [{ scale }] }]}
//                         source={imgURL ? { uri: imgURL } : A}
//                     />
//                 </PinchGestureHandler>
//             </View>
//         );
//     };

//     return (
//         <View style={[styles.mainView, height && { height: height }]}>
//             {data?.length > 0 ? (
//                 <FlatList
//                     inverted={lang?.data === NUMBER?.num0}
//                     horizontal
//                     ref={flatListRef}
//                     data={data}
//                     keyExtractor={(item, index) => index.toString()}
//                     showsHorizontalScrollIndicator={false}
//                     getItemLayout={getItemLayout}
//                     pagingEnabled
//                     onScroll={handleScroll}
//                     renderItem={renderItem}
//                     scrollEnabled={!isZooming} // Disable scrolling when zooming
//                 />
//             ) : home ? (
//                 <View style={[styles.mainView, { height: height || '100%', backgroundColor: COLOR.gray }]} />
//             ) : (
//                 <View style={styles.mainView}>
//                     <Image
//                         style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
//                         source={A}
//                     />
//                 </View>
//             )}
//         </View>
//     );
// };

// export default Slider;




import { View, Image, FlatList, Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from './silder.style';
import { NUMBER } from '../../constants/constants';
import { COLOR, RESIZEMODE } from '../../constants/style';
import { A } from '../../assests';
import ZoomableView from '@likashefqet/react-native-image-zoom';

const Slider = ({ lang, height, data, home }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef();
    const windowWidth = Dimensions.get('window').width;

    // Auto-Slide Logic
    useEffect(() => {
        if (data?.length === 0) return;

        const interval = setInterval(() => {
            if (flatListRef.current) {
                let nextIndex = (activeIndex + 1) % data.length;
                if (nextIndex === 0) {
                    flatListRef.current.scrollToOffset({ offset: 0, animated: false });
                } else {
                    flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
                }
                setActiveIndex(nextIndex);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex, data]);

    const handleScroll = (event) => {
        const scrollPosition = event?.nativeEvent?.contentOffset.x || 0;
        const index = Math.floor(scrollPosition / windowWidth);
        setActiveIndex(index);
    };

    const getItemLayout = (data, index) => ({
        length: windowWidth,
        offset: windowWidth * index,
        index,
    });

    const renderItem = ({ item }) => {
        const imgURL = item?.image ? item?.image : item;

        return (
            <View style={styles.listView}>
                <ZoomableView
                    maxZoom={3}
                    minZoom={1}
                    zoomStep={0.5}
                    bindToBorders={true}
                    style={{ flex: 1 }}
                >
                    <Image
                        resizeMode={home ? RESIZEMODE.stretch : RESIZEMODE.contain}
                        style={[styles.image, { width: windowWidth, height: '100%' }]}
                        source={imgURL ? { uri: imgURL } : A}
                    />
                </ZoomableView>
            </View>
        );
    };

    return (
        <View style={[styles.mainView, height && { height: height }]}>
            {data?.length > 0 ? (
                <FlatList
                    inverted={lang?.data === NUMBER?.num0}
                    horizontal
                    ref={flatListRef}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    getItemLayout={getItemLayout}
                    pagingEnabled
                    onScroll={handleScroll}
                    renderItem={renderItem}
                />
            ) : home ? (
                <View style={[styles.mainView, { height: height || '100%', backgroundColor: COLOR.gray }]} />
            ) : (
                <View style={styles.mainView}>
                    <Image
                        style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
                        source={A}
                    />
                </View>
            )}
        </View>
    );
};

export default Slider;
