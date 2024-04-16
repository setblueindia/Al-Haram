import React from 'react';
import { View, Pressable, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
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
      <Pressable onPress={() => navigation.openDrawer()}>
        <Ionicons
          name={Platform.OS === 'android' ? 'menu-outline' : 'ios-menu-outline'}
          size={30}
          color="black"
          style={styles.menu}
        />
      </Pressable>
      <Pressable onPress={handlePress}>
        <Ionicons
          name={
            Platform.OS === 'android'
              ? navigation.canGoBack()
                ? 'arrow-back-outline'
                : 'menu-outline'
              : navigation.canGoBack()
                ? 'ios-arrow-back-outline'
                : 'ios-menu-outline'
          }
          size={30}
          color="black"
          style={styles.menu}
        />
      </Pressable>
    </View>
  );
};
export default LanguageLeft;