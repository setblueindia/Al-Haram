import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './splash.style';
import {logo} from '../../assests';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {addLangCode} from '../../redux/Slices/LangSlices';
import {ASYNCSTORAGE} from '../../constants/constants';
import { addUserData } from '../../redux/Slices/UserData.slice';

const Splash = () => {
  const dispatch = useDispatch();

  const setLang = async () => {
    try {
      const result = await AsyncStorage.getItem(ASYNCSTORAGE.Langues);
      !result && setLangues();
      result && dispatch(addLangCode(result));
    } catch (error) {}
  };

  const setLangues = async () => {
    const langNum = '2';
    try {
      await AsyncStorage.setItem(ASYNCSTORAGE.Langues, langNum);
      dispatch(addLangCode(langNum));
    } catch (error) {}
  };


  const setUserData = async ()=> {
    try {
      const rep = await AsyncStorage.getItem("UserData")
      const  response = JSON.parse(rep)
      dispatch(addUserData(response))
    } catch (error) {
      console.log("SPLASH SCREEN SET USER ERROR ======> ",error)
    }
  } 

  useEffect(() => {
    setLang();
    setUserData();
  }, []);

  return (
    <View style={styles.mainView}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={logo} />
      </View>
    </View>
  );
};

export default Splash;
