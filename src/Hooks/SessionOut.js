import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNCSTORAGE, NAVIGATION} from '../constants/constants';
import {addUserData} from '../redux/Slices/UserData.slice';
import {addLangCode} from '../redux/Slices/LangSlices';
import {addNotificationCount} from '../redux/Slices/AddNotificationCount';
import {addProduct} from '../redux/Slices/AddToCartSlice';

export const SessionOut = async (navigation, message, dispatch) => {
  const langNum = '2';
  setTimeout(async () => {
    const tempTerms = 'true';
    await AsyncStorage.setItem(ASYNCSTORAGE.Terms, tempTerms);
  }, 3000);
  try {
    await AsyncStorage.clear();
    dispatch(addUserData(undefined));
    dispatch(addLangCode(langNum));
    dispatch(addNotificationCount(0));
    dispatch(addProduct(0));
    navigation.navigate(NAVIGATION.Login, {
      type: true,
      shoeMes: message,
    });
  } catch (error) {
    console.log('ERROR IN SESSION OUT :: ', error);
  }
};
