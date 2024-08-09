import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './textfild.style';
import Icon from 'react-native-vector-icons/dist/Fontisto';
import Password from 'react-native-vector-icons/dist/Entypo';
import { ResponsiveSize } from '../../utils/utils';
import { useSelector } from 'react-redux';
import { NUMBER } from '../../constants/constants';
import { COLOR } from '../../constants/style';

const TextFildCus = ({ value, text, icon, onChange, number, add, password , countryText}) => {

  const lang = useSelector(state => state.lang);
  const [passwordProtect, setPasswordProtec] = useState(password)

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
      <View style={[{ flexDirection: 'row', alignItems: 'center' } , lang?.data == NUMBER.num0 && {flexDirection:'row-reverse'} ]}>
        <View style={[{ flexDirection: 'row', alignItems: 'center', flex: 1 } , lang?.data == NUMBER.num0 && {flexDirection:'row-reverse'} ]}>
          <Icon style={styles.icon} name={icon} size={ResponsiveSize(35)} />
          {countryText && <Text style={styles.countryCodeText}>{countryText}</Text>}
          <TextInput
         
            value={value && value}
            placeholderTextColor={COLOR.darkGray}
            keyboardType={number && 'number-pad'}
            textAlign={lang.data == NUMBER.num0 ? 'right' : 'left'}
            style={[styles.textInput, lang.data == NUMBER.num0 && { marginRight: ResponsiveSize(10) }]}
            placeholder={text}
            onChangeText={(text) => onChange && onChange(text)}
            secureTextEntry={ passwordProtect ? true : false }
          />
        </View>

        {password &&
          <TouchableOpacity
            style={{}}
            onPress={() => {
               passwordProtect ? setPasswordProtec(false) : setPasswordProtec(true) }}
          >
            <Password color={COLOR.primaray} size={ResponsiveSize(40)} name={!passwordProtect ? "eye" : "eye-with-line"} />
          </TouchableOpacity>}

      </View>

    </View>
  );
};

export default TextFildCus;
