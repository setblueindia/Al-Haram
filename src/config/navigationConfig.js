import React from 'react';
import Header from '../components/HeaderRight/HeaderRight';
import LanguageLeft from '../components/LanguageLeft/LanguageLeft';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const drawerScreenOptions = {
  drawerStyle: {
    backgroundColor: 'transparent', 
  },
  overlayColor: 'transparent',
  drawerType: 'front',
  headerShown: false,
};
export const appStackHeaderOptions = props => ({
  headerLeft: hederProps => <Header {...props} {...hederProps} />,
  headerTitleAlign: 'center',
  animation: 'slide_from_right',
});
export const appStackLangHeaderOptions = props => ({
  headerLeft: hederProps => <LanguageLeft {...props} {...hederProps} />,
  headerTitleAlign: 'center',
  animation: 'slide_from_right',
});
export const appStackScreenOptions = {
  headerStyle: { backgroundColor: '#1A1924', borderBottomColor: 'white' },
  headerTitleStyle: { color: 'white' },
};
export const appStackLangOptions = {
  headerStyle: { backgroundColor: '#fff', borderBottomColor: 'white' },
  headerTitleStyle: { color: 'black' },
};