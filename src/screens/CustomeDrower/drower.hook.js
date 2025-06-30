import { useNavigation } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import { useSelector } from 'react-redux';


const useDrowerHook = () => {
  const cetegouriesData = useSelector(state => state?.CetegoriesList?.data)
  const navigation = useNavigation();
  const version = DeviceInfo.getVersion()

  return {
    navigation,
    cetegouriesData,
    version
  };
};

export default useDrowerHook;
