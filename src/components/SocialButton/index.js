import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './social.style';

const SocialButton = ({icon , text}) => {
  return (
    <TouchableOpacity style={styles.mainView}>
      <Image style={styles.socialIcon} source={icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;
