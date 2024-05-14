import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { styles } from './textfild.style';
import Icon from 'react-native-vector-icons/dist/Fontisto';
import { ResponsiveSize } from '../../utils/utils';
import { useSelector } from 'react-redux';
import { NUMBER } from '../../constants/constants';

const TextFildCus = ({ text, icon, onChange, number, add }) => {

  const lang = useSelector(state => state.lang);

  return (
    <View
      style={[
        styles.mainView,
        lang.data == NUMBER.num0 && { flexDirection: 'row-reverse' },
        add && {
          borderBottomWidth: ResponsiveSize(2),
          borderTopWidth: ResponsiveSize(0),
          borderLeftWidth: ResponsiveSize(0),
          borderRightWidth: ResponsiveSize(0)
        }

      ]}>
      <Icon style={styles.icon} name={icon} size={ResponsiveSize(35)} />
      <TextInput
        keyboardType={number && 'number-pad'}
        textAlign={lang.data == NUMBER.num0 ? 'right' : 'left'}
        style={[styles.textInput, lang.data == NUMBER.num0 && { marginRight: ResponsiveSize(10) }]}
        placeholder={text}
        onChangeText={(text) => onChange && onChange(text)}
      />
    </View>
  );
};

export default TextFildCus;
