import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Dimensions, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addLangCode, updateLangCode } from '../../redux/Slices/LangSlices';
import { Ar, En } from '../../constants/localization';
import { NUMBER } from '../../constants/constants';
import { DrowerApi } from '../../api/axios.api';
import { addDraweData, updateLoader } from '../../redux/Slices/DrawerSlice';

const useDrowerHook = () => {
  const lang = useSelector(state => state.lang);
  const userData = useSelector(state => state?.userData)
  const loder = useSelector(state => state?.Categories?.loader)
  const cetegouriesData = useSelector(state => state?.CetegoriesList?.data)
  const [langues, setLangues] = useState();
  const navigation = useNavigation();
  const [data, setData] = useState([])
  const dispatch = useDispatch();
  const height = Dimensions.get("window").height
  const firstName = userData?.data?.firstname
  const lastName = userData?.data?.lastname
  const userName = firstName && lastName ? firstName + "  " + lastName : "User"

  useEffect(() => {
    changeLable(); 
  }, [lang]);

  const changeLable = () => {
    const lable = lang.data === NUMBER.num0 ? Ar : En;
    setLangues(lable);
  }


  const handleInstagramPress = () => {
    const instagramURL = 'https://www.instagram.com/alharamksa/';
    Linking.openURL(instagramURL);
  };
  const handleFacebookPress = () => {
    const facebookURL = 'https://www.facebook.com/alharamksa/';
    Linking.openURL(facebookURL);
  };
  const handlechatPress = () => {
    const businessesURL = 'https://maroof.sa/businesses/';
    Linking.openURL(businessesURL);
  };

  const changeLungues = async () => {
    const num = lang.data == NUMBER.num0 ? NUMBER.num1 : lang.data == NUMBER.num1 ? NUMBER.num0 : NUMBER.num0;
    try {
      await AsyncStorage.setItem('Lang', num);
      dispatch(updateLangCode(num));
    } catch (error) {
      console.log('UPDATE LANGUES ERROR :: ', error);
    }
  };

  

  return {
    lang,
    data,
    navigation,
    langues,
    userName,
    height,
    loder,
    changeLungues,
    handleInstagramPress,
    handleFacebookPress,
    handlechatPress,
    cetegouriesData
  };
};

export default useDrowerHook;
