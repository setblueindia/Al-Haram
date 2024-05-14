import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './scoialDra.style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SocialButtonDra = ({image, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress()
      }}
      style={styles.scocialBtn}>
      <Image style={styles.imgeIcon} source={image} />
    </TouchableOpacity>
  );
};

export default SocialButtonDra;
