import React from 'react';
import {Pressable, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const HeaderRight = props => {
  const navigation = props.navigation;
  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <Ionicons
        name={Platform.OS === 'android' ? 'menu-outline' : 'ios-menu-outline'}
        size={30}
        // color="green"
        
        style={styles.menu}
      />
    </Pressable>
  );
};
export default HeaderRight;
