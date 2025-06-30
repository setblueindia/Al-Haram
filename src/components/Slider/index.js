import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    FlatList,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';
import { ImageZoom } from '@likashefqet/react-native-image-zoom';
import { styles } from './silder.style';
import { COLOR, RESIZEMODE } from '../../constants/style';
import { A } from '../../assets';
import { NAVIGATION, NUMBER } from '../../constants/constants';
import LottieView from 'lottie-react-native';
import { ResponsiveSize } from '../../utils/utils';
import ZOOMICON from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const Slider = ({ height, data, home, lang, lottie }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isZooming, setIsZooming] = useState(false);
    const flatListRef = useRef();
    const [lottiOn, setLottiOn] = useState(true)
    const windowWidth = Dimensions.get('window').width;
    const flatListRef2 = useRef();
    const [targetIndex, setTargetIndex] = useState(0)
    const navigation = useNavigation()
    const isManualScroll = useRef(false)



    useEffect(() => {
        if (flatListRef2.current && data.length > targetIndex) {
            flatListRef2.current.scrollToIndex({ index: targetIndex, animated: true });
        }
    }, [targetIndex]);

    const handleScroll = (event) => {
        if (isManualScroll.current) return;

        const scrollPosition = event?.nativeEvent?.contentOffset.x || 0;
        const index = Math.round(scrollPosition / windowWidth);
        setActiveIndex(index);

    };

    const getItemLayout = (data, index) => ({
        length: windowWidth,
        offset: windowWidth * index,
        index,
    });


    useEffect(() => {
        if (data?.length === 0) return;
        if (!isZooming) {
            !isZooming && setActiveIndex(activeIndex)
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
        }
    }, [activeIndex, data, isZooming]);


    useEffect(() => {
        setTimeout(() => {
            setLottiOn(false)
        }, 6000);
    }, [])


    const renderItem = ({ item, index }) => {
        const imgURL = item?.image ? item?.image : item;

        return (
            <View style={styles.listView}>
                <ImageZoom
                    resizeMode={home ? RESIZEMODE.stretch : RESIZEMODE.contain}
                    style={[
                        styles.image,
                        home
                            ? { resizeMode: RESIZEMODE.stretch }
                            : { resizeMode: RESIZEMODE.contain },
                    ]}
                    source={imgURL ? { uri: imgURL } : A}
                    enableResetZoom={false}
                    minScale={1}
                    maxScale={4}
                    panEnabled={isZooming}
                    onInteractionStart={() => setIsZooming(true)}
                    onInteractionEnd={() => setIsZooming(false)}
                    onResetAnimationEnd={() => setIsZooming(false)}
                    onDoubleTap={() => setIsZooming(true)}
                    isDoubleTapEnabled
                />

                {
                    (!home && lottiOn && lottie) &&
                    <LottieView
                        source={require('../../assets/Lottianimation/doubaletap.json')}
                        autoPlay loop
                        resizeMode={RESIZEMODE.contain}
                        style={{ height: ResponsiveSize(400), width: ResponsiveSize(300), left: ResponsiveSize(-90), position: 'absolute' }}
                    />

                }

            </View>
        );
    };

    return (
        <>
            <View style={[styles.mainView, height && { height }]}>
                {data?.length > 0 ? (
                    <FlatList
                        inverted={lang?.data === NUMBER?.num0}
                        horizontal={true}
                        ref={home ? flatListRef : flatListRef2}
                        // ref={flatListRef}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        getItemLayout={getItemLayout}
                        pagingEnabled={true}
                        onScroll={handleScroll}
                        renderItem={renderItem}
                    />
                ) : home ? (
                    <View
                        style={[
                            styles.mainView,
                            { height: height || '100%', backgroundColor: COLOR.gray },
                        ]}
                    />
                ) : (
                    <View style={[styles.mainView]}>
                        <Image
                            style={{
                                height: '100%',
                                width: '100%',
                                resizeMode: RESIZEMODE.cover,
                            }}
                            source={A}
                        />
                    </View>
                )}
                <View>
                    {!home &&
                        <View style={{
                            height: ResponsiveSize(80),
                            bottom: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: lang?.data == NUMBER.num0 ? 'row-reverse' : 'row',
                        }}>

                            {(data?.length > 0 && !home) && data?.map((items, dindex) => {
                                return (
                                    <View style={{
                                        height: ResponsiveSize(10),
                                        width: ResponsiveSize(10),
                                        backgroundColor: dindex == activeIndex ? COLOR.primaray : COLOR.darkGray,
                                        borderRadius: ResponsiveSize(100),
                                        marginHorizontal: ResponsiveSize(5)
                                    }} />
                                )
                            })}

                        </View>}
                </View>

                {(!home && lottie) &&
                    <View style={{ flexDirection: lang?.data == NUMBER.num0 ? 'row-reverse' : 'row' }}>
                        {data?.length > 0 &&

                            data?.map((items, pindex) => {
                                return (
                                    <TouchableOpacity style={{
                                        height: ResponsiveSize(70),
                                        width: ResponsiveSize(70),
                                        borderRadius: ResponsiveSize(20),
                                        borderWidth: 1,
                                        borderColor: pindex == activeIndex ? COLOR.primaray : COLOR.darkGray,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginHorizontal: ResponsiveSize(5)
                                    }}
                                        onPress={() => {
                                            setActiveIndex(pindex)
                                            setTargetIndex(pindex)

                                            isManualScroll.current = true
                                            setTimeout(() => {
                                                isManualScroll.current = false
                                            }, 600);
                                        }}
                                    >
                                        <Image style={{ height: "100%", width: "100%", resizeMode: 'cover', borderRadius: ResponsiveSize(20) }} source={{ uri: items }} />

                                    </TouchableOpacity>
                                )
                            })
                        }

                    </View>
                }


                {(!home && !lottie) &&
                    <TouchableOpacity style={[{
                        padding: ResponsiveSize(5),
                        backgroundColor: COLOR.primaray,
                        borderRadius: ResponsiveSize(20),
                        position: 'absolute', bottom: ResponsiveSize(15), right: ResponsiveSize(15),

                    }, lang?.data == NUMBER.num0 && {
                        left: ResponsiveSize(15),
                        height: ResponsiveSize(50),
                        width: ResponsiveSize(50),
                        alignItems: 'center',
                        justifyContent: "center"
                    }]}

                        onPress={() => { navigation?.navigate(NAVIGATION.ProductZoom, { data: data }) }}
                    >
                        <ZOOMICON style={{}} name="zoom-out-map" size={ResponsiveSize(40)} color={COLOR.white} />
                    </TouchableOpacity>}
            </View>


        </>
    );
};

export default Slider;
