import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './sitch.stye';
import {LOGINStr, NUMBER} from '../../constants/constants';
import {ResponsiveSize} from '../../utils/utils';
import {ALINE, COLOR} from '../../constants/style';
import {useSelector} from 'react-redux';

const SwitchButton = ({setWithEmail, langues}) => {
  const [selected, setSelected] = useState(true);
  const lang = useSelector(state => state.lang);

  return (
    <View
      style={[
        styles.mainView,
        lang.data == NUMBER.num0 && {flexDirection: ALINE.rowreverse},
      ]}>
      <TouchableOpacity
        onPress={() => {
          setSelected(true), setWithEmail(true);
        }}
        style={[
          styles.emailView,
          selected && {
            borderBottomWidth: ResponsiveSize(1),
            borderColor: COLOR.primaray,
          },
        ]}>
        <Text style={[styles.text, selected ? {color: COLOR.primaray} : {color:"#00000080"}]}>
          {langues?.SignInWithEmail}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelected(false), setWithEmail(false);
        }}
        style={[
          styles.emailView,
          !selected && {
            borderBottomWidth: ResponsiveSize(1),
            borderColor: COLOR.primaray,
          },
        ]}>
        <Text style={[styles.text, !selected ? {color: COLOR.primaray} : {color:"#00000080"}]}>
          {langues?.UseMobileNo}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SwitchButton;
