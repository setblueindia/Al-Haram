import DeviceInfo from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';


export const ResponsiveSize = size => {
  return DeviceInfo.isTablet ? wp(0.17 * size) : wp(0.25 * size);
};


export const SHOWTOTS = (msg) => {
  Toast.show(msg, Toast.LONG);
}

export const emaileRegxp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordRegxp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
