import React from 'react';
import { View, Pressable, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
<<<<<<< HEAD
const LanguageLeft = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.openDrawer();
    }
  };
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
=======

const LanguageLeft = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (navigation.canGoBack()) {
      // If there is a previous screen, navigate back
      navigation.goBack();
    } else {
      // If there is no previous screen, open the drawer
      navigation.openDrawer();
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
     
      {/* You can add additional styling or space between the icons if needed */}
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
      <Pressable onPress={() => navigation.openDrawer()}>
        <Ionicons
          name={Platform.OS === 'android' ? 'menu-outline' : 'ios-menu-outline'}
          size={30}
          color="black"
          style={styles.menu}
        />
      </Pressable>
<<<<<<< HEAD
=======


>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
      <Pressable onPress={handlePress}>
        <Ionicons
          name={
            Platform.OS === 'android'
              ? navigation.canGoBack()
                ? 'arrow-back-outline'
                : 'menu-outline'
              : navigation.canGoBack()
<<<<<<< HEAD
                ? 'ios-arrow-back-outline'
                : 'ios-menu-outline'
=======
              ? 'ios-arrow-back-outline'
              : 'ios-menu-outline'
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          }
          size={30}
          color="black"
          style={styles.menu}
        />
      </Pressable>
    </View>
  );
};
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
export default LanguageLeft;