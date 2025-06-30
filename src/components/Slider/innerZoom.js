import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ResponsiveSize } from '../../utils/utils';
import { PinchGestureHandler, PanGestureHandler } from 'react-native-gesture-handler';
import { COLOR } from '../../constants/style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CusLoader from '../CustomLoader';

const InnerZoom = ({ zoomImage, setShowZoomImg }) => {
    const [loadder, setLoadder] = React.useState(false)

    const scale = React.useRef(new Animated.Value(1)).current;
    const translationX = React.useRef(new Animated.Value(0)).current;
    const translationY = React.useRef(new Animated.Value(0)).current;

    const onPinchEvent = Animated.event(
        [{ nativeEvent: { scale: scale } }],
        { useNativeDriver: true }
    );

    const onPanEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationX: translationX,
                    translationY: translationY,
                },
            },
        ],
        { useNativeDriver: true }
    );

    return (
        <View style={styles.mainView}>
            <View style={styles.containerView}>
                {zoomImage &&
                    (
                        <>
                            <PanGestureHandler onGestureEvent={onPanEvent}>
                                <Animated.View
                                    style={[
                                        styles.imageConatiner,
                                        {
                                            transform: [
                                                { translateX: translationX },
                                                { translateY: translationY },
                                            ],
                                        },
                                    ]}
                                >
                                    <PinchGestureHandler onGestureEvent={onPinchEvent}>
                                        <Animated.Image
                                            onLoadStart={() => { setLoadder(true) }}
                                            onLoadEnd={() => { setLoadder(false) }}
                                            style={[
                                                styles.image,
                                                { transform: [{ scale }] },
                                            ]}
                                            source={{ uri: zoomImage }}
                                        />
                                    </PinchGestureHandler>


                                </Animated.View>

                            </PanGestureHandler>
                            <TouchableOpacity
                                onPress={() => { setShowZoomImg(false) }}
                                style={styles.closeView}>
                                <Icon name="close" size={ResponsiveSize(30)} color={COLOR.white} />
                            </TouchableOpacity>
                        </>
                    )
                }

                {loadder &&
                    <View style={styles.CusLoader}>
                        <CusLoader />
                    </View>

                }
            </View>
        </View>
    );
};

export default InnerZoom;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#00000030',
        padding: ResponsiveSize(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerView: {
        height: ResponsiveSize(600),
        width: '100%',
        borderRadius: ResponsiveSize(20),
        overflow: 'hidden', // Restricts content to container bounds
        backgroundColor: 'white',
    },
    imageConatiner: {
        height: ResponsiveSize(600), // Same as the container height
        width: '100%',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    closeView: {
        height: ResponsiveSize(50),
        width: ResponsiveSize(50),
        borderRadius: ResponsiveSize(100),
        backgroundColor: COLOR.primaray,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 10,
        top: 10
    },
    CusLoader: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
        width: "100%",
        position: 'absolute'
    }
});
