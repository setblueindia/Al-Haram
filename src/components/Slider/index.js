import { View, Image, FlatList, Dimensions, Animated, TouchableOpacity, Modal, } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from './silder.style';
import { NUMBER } from '../../constants/constants';
import { COLOR, RESIZEMODE } from '../../constants/style';
import FastImage from 'react-native-fast-image';
import { A } from '../../assests';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import InnerZoom from './innerZoom';


const Slider = ({ lang, height, data, home }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef();
    const windowWidth = Dimensions.get('window').width;
    const [sheoZoomImg, setShowZoomImg] = useState(false)
    const [zoomImage, setZoomImage] = useState()

    useEffect(() => {
        if (data?.length === 0) return;

        const interval = setInterval(() => {
            if (flatListRef.current) {
                let nextIndex = (activeIndex + 1) % data.length;

                if (nextIndex === 0) {
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

    const scale = React.useRef(new Animated.Value(1)).current

    const onPinchEvent = Animated.event(
        [{ nativeEvent: { scale: scale } }],
        { useNativeDriver: true }
    );



    const renderItem = ({ item }) => {
        const imgURL = item?.image ? item?.image : item;
        return (
            <TouchableOpacity
                disabled={home ? true : false}
                onPress={() => {
                    setZoomImage(imgURL)
                    !home && setShowZoomImg(true)
                }}
                style={styles.listView}>
                <Image
                    resizeMode={home ? RESIZEMODE.stretch : RESIZEMODE.contain}
                    style={[styles.image, home ? { resizeMode: RESIZEMODE.stretch } : home ? { resizeMode: RESIZEMODE.stretch } : { resizeMode: RESIZEMODE.contain },
                    ]}
                    source={imgURL ? { uri: imgURL } : A}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={[styles.mainView, height && { height: height }]}>
            {data?.length > 0 ? (
                <FlatList
                    inverted={lang?.data === NUMBER?.num0}
                    horizontal={true}
                    ref={flatListRef}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    getItemLayout={getItemLayout}
                    pagingEnabled={true}
                    onScroll={handleScroll}
                    renderItem={renderItem}
                />
            ) : home ? (
                <View style={[styles.mainView, { height: height ? height : "100%", backgroundColor: COLOR.gray }]} />
            ) : (
                <View style={[styles.mainView]}>
                    <Image style={{ height: '100%', width: '100%', resizeMode: 'cover' }} source={A} />
                </View>
            )}

            <Modal visible={sheoZoomImg} transparent>
                <InnerZoom zoomImage={zoomImage} setShowZoomImg={setShowZoomImg} />
            </Modal>
        </View>


    );
};

export default Slider;



