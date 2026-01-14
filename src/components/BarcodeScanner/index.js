import
React, {
    useState,
    useEffect
}
    from 'react';
import {
    View,
    Text,
    StyleSheet,
    PermissionsAndroid,
    Platform,
    TouchableOpacity,
    Linking
} from 'react-native';
import {
    Camera,
    CameraType
} from 'react-native-camera-kit';
import {
    request,
    PERMISSIONS,
    RESULTS
}
    from 'react-native-permissions';
import { ResponsiveSize } from '../../utils/utils';
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { Ar, En } from '../../constants/localization';
import { NUMBER } from '../../constants/constants';


const BarcodeScanner = ({
    setOpenScanner,
    setGiftCardCode,
}) => {

    const lang = useSelector(state => state.lang.data)
    const [hasPermission, setHasPermission] = useState(false);
    const [flash, setFlash] = useState("off");
    const [cameraType, setCameraType] = useState(CameraType?.Back);
    const label = lang == NUMBER.num1 ? En : Ar


    const string = Platform.OS === 'android' ?
        label?.AndroidAccessStep :
        label?.IosStep

    useEffect(() => {
        const requestCameraPermission = async () => {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: label?.CameraPermission,
                        message: label?.Thisappneedsaccesstoyourcameratoscanbarcodes,
                        buttonPositive: label?.OK,
                    }
                );
                if (granted == PermissionsAndroid?.RESULTS?.GRANTED) {
                    setHasPermission("granted");
                } else {
                    setHasPermission("denied");
                }
            } else {
                const status = await request(PERMISSIONS.IOS.CAMERA);
                if (status === RESULTS.GRANTED) {
                    setHasPermission("granted");
                } else {
                    setHasPermission("denied");
                }
            }
        };
        requestCameraPermission();
    }, []);

    const onBarcodeScan = (event) => {
        setGiftCardCode(event?.nativeEvent?.codeStringValue)
        setOpenScanner(false)
    };

    if (hasPermission === "denied") {
        return (
            <View style={styles.centered}>
                <View style={styles.permissionPopup}>

                    {/* Header */}
                    <View style={styles.popupHeader}>
                        <Text
                            style={styles.headerText}
                        >
                            {label?.CameraPermission}
                        </Text>
                    </View>

                    {/* Body Message */}
                    <View style={styles.popupBody}>
                        <Text style={styles.bodyText}>
                            {label?.CameraaccessisrequiredtoscanbarcodesPleaseenableitfromsettings}
                        </Text>

                        <Text
                            style={styles.instructionsTitle}>
                            {label?.Howtoenablecameraaccess}
                        </Text>

                        <Text
                            style={styles.instructionStep}>
                            {string}
                        </Text>


                        <TouchableOpacity
                            style={styles.settingsButton}
                            onPress={() =>
                                Linking?.openSettings()
                            }>
                            <Text
                                style={styles.settingsButtonText}
                            >
                                {lang == NUMBER.num1 ? "Open Settings" : "فتح الإعدادات"}
                            </Text>
                        </TouchableOpacity>

                    </View>


                    <TouchableOpacity
                        style={[
                            styles.CloseBtn,
                            lang == NUMBER.num1 ?
                                { right: ResponsiveSize(10) }
                                :
                                { left: ResponsiveSize(10) }
                        ]}
                        onPress={() =>
                            setOpenScanner(false)
                        }>
                        <CloseIcon
                            name={"closecircle"}
                            size={ResponsiveSize(40)}
                            color={COLOR.primaray}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        );
    }

    return (
        <>
            {hasPermission == "granted" &&
                <View style={[
                    { flex: 1 },
                    Platform.OS == 'ios' && {
                        backgroundColor: COLOR.black
                    }]}>

                    <Camera
                        style={{
                            flex: 1,
                            height: "100%",
                            width: "100%"
                        }}
                        scanBarcode={true}
                        onReadCode={(event) => { onBarcodeScan(event) }}
                        hideControls={false}
                        showFrame={true}
                        laserColor={'green'}
                        frameColor={'white'}
                        torchMode={flash}
                        flashMode='on'
                        scanThrottleDelay={1000}
                        cameraType={cameraType}
                        resetFocusWhenMotionDetected={true}
                        focusMode='on'

                    />

                    <View style={[
                        styles.topBar,
                        Platform.OS == 'ios' && {
                            marginTop: ResponsiveSize(20)
                        }
                    ]}>
                        <TouchableOpacity
                            onPress={() =>
                                flash == "on" ? setFlash("off") : setFlash("on")}
                            style={styles.torchView}
                        >
                            <Icon
                                name={flash == "on" ? "flash-off" : "flash-on"}
                                size={ResponsiveSize(35)}
                                color={COLOR.white}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>
                                setCameraType(cameraType == CameraType.Back ? CameraType.Front : CameraType.Back)}
                            style={[
                                styles.torchView,
                                {
                                    marginLeft: ResponsiveSize(20)
                                }
                            ]}>
                            <Icon
                                name={"cameraswitch"}
                                size={ResponsiveSize(35)}
                                color={COLOR.white}
                            />
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={() => setOpenScanner(false)}
                            style={[
                                styles.torchView,
                                {
                                    position: 'absolute',
                                    right: ResponsiveSize(20),
                                    top: ResponsiveSize(20)
                                }
                            ]}>
                            <Icon
                                name={"close"}
                                size={ResponsiveSize(35)}
                                color={COLOR.white}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            }

        </>

    )
}

export default BarcodeScanner

const styles = StyleSheet.create({
    torchView: {
        height: ResponsiveSize(60),
        width: ResponsiveSize(60),
        borderRadius: ResponsiveSize(20),
        alignItems: ALINE.center,
        justifyContent: ALINE.center
    },
    topBar: {
        position: 'absolute',
        width: "100%",
        padding: ResponsiveSize(20),
        flexDirection: ALINE.row,
        backgroundColor: COLOR.black
    },
    centered: {
        flex: 1,
        justifyContent: ALINE.center,
        alignItems: ALINE.center,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: ResponsiveSize(20),
    },
    permissionPopup: {
        width: '100%',
        backgroundColor: COLOR.white,
        borderRadius: ResponsiveSize(20),
        paddingHorizontal: ResponsiveSize(20),
        paddingVertical: ResponsiveSize(30),
        alignItems: ALINE.center,
        justifyContent: ALINE.center
    },
    popupHeader: {
        flexDirection: ALINE.row,
        justifyContent: ALINE.spaceBetween,
        alignItems: ALINE.center,
        marginBottom: ResponsiveSize(10),
    },

    headerText: {
        fontSize: ResponsiveSize(24),
        fontWeight: 'bold',
        color: '#333',
    },
    closeText: {
        fontSize: ResponsiveSize(18),
        color: COLOR.white,
    },
    popupBody: {
        marginTop: ResponsiveSize(10),
    },
    bodyText: {
        fontSize: ResponsiveSize(18),
        color: '#555',
        marginBottom: ResponsiveSize(10),
        textAlign: ALINE.center,
    },
    instructionsTitle: {
        fontWeight: 'bold',
        marginVertical: ResponsiveSize(10),
        color: '#222',
        textAlign: ALINE.center,
        fontSize: ResponsiveSize(20),

    },
    instructionStep: {
        fontSize: ResponsiveSize(18),
        color: '#666',
        marginBottom: 5,
        textAlign: ALINE.center,
    },
    settingsButton: {
        marginTop: ResponsiveSize(15),
        backgroundColor: COLOR.primaray,
        borderRadius: ResponsiveSize(10),
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
        height: ResponsiveSize(60)
    },
    settingsButtonText: {
        color: COLOR.white,
        fontSize: ResponsiveSize(22),
        fontWeight: FONTWEGHIT.font600,
    },
    CloseBtn: {
        height: ResponsiveSize(50),
        width: ResponsiveSize(50),
        borderRadius: ResponsiveSize(20),
        position: 'absolute',
        top: ResponsiveSize(10),
        alignItems: ALINE.center,
        justifyContent: ALINE.center,
    }
});