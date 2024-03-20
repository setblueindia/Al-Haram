import React from 'react';
import Header from '../components/HeaderRight/HeaderRight';
import LanguageLeft from '../components/LanguageLeft/LanguageLeft';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const drawerScreenOptions = {
  drawerStyle: {
<<<<<<< HEAD
    backgroundColor: 'transparent', 
=======
    backgroundColor: 'transparent', // Correct the spelling mistake in 'transparent'
    // width: width,
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  },
  overlayColor: 'transparent',
  drawerType: 'front',
  headerShown: false,
};
<<<<<<< HEAD
export const appStackHeaderOptions = props => ({
=======

export const appStackHeaderOptions = props => ({
  // Change headerLeft to headerRight
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  headerLeft: hederProps => <Header {...props} {...hederProps} />,
  headerTitleAlign: 'center',
  animation: 'slide_from_right',
});
<<<<<<< HEAD
export const appStackLangHeaderOptions = props => ({
=======

export const appStackLangHeaderOptions = props => ({
  // Change headerLeft to headerRight
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  headerLeft: hederProps => <LanguageLeft {...props} {...hederProps} />,
  headerTitleAlign: 'center',
  animation: 'slide_from_right',
});
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
export const appStackScreenOptions = {
  headerStyle: { backgroundColor: '#1A1924', borderBottomColor: 'white' },
  headerTitleStyle: { color: 'white' },
};
<<<<<<< HEAD
export const appStackLangOptions = {
  headerStyle: { backgroundColor: '#fff', borderBottomColor: 'white' },
  headerTitleStyle: { color: 'black' },
};
=======

export const appStackLangOptions = {
  headerStyle: { backgroundColor: '#fff', borderBottomColor: 'white' },
  headerTitleStyle: { color: 'black' },
};
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
