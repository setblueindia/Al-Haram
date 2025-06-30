import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './button.style';
import {COLOR, FONTWEGHIT} from '../../constants/style';
import {ResponsiveSize} from '../../utils/utils';

const Button = ({text, color, onPress , ShoopingCart}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress &&  onPress();
      }}
      style={[
        styles.mainView,
        color && {
          backgroundColor: color,
          borderColor: COLOR.liteGreen,
          borderWidth: ResponsiveSize(1),
        },
      ]}>
      <Text style={[styles.text, color && {color: COLOR.black}, ShoopingCart && {color: COLOR.white , fontWeight:FONTWEGHIT.font400}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
