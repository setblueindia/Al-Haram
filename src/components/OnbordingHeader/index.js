import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './header.stye';
import Icon from 'react-native-vector-icons/AntDesign';
import {ResponsiveSize} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
import {logo} from '../../assests';
import {useSelector} from 'react-redux';
import {ICON, NUMBER} from '../../constants/constants';
import {ALINE} from '../../constants/style';
import StatusBarCus from '../CustomStatusBar';

const Onbordingheader = () => {
  const lang = useSelector(state => state.lang);

  const navigation = useNavigation();
  return (
    <>
    <StatusBarCus/>
      <View
        style={[
          styles.mainView,
          lang?.data == NUMBER.num0 && {flexDirection: ALINE.rowreverse},
        ]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            style={styles.icon}
            name={lang?.data == NUMBER.num0 ? ICON.arrowright : ICON.arrowleft}
            size={ResponsiveSize(50)}
          />
        </TouchableOpacity>

        <View>
          <Text></Text>
        </View>

        <View>
          <Text></Text>
        </View>
      </View>

      <View style={styles.ImageView}>
        <Image style={styles.logItems} source={logo} />
      </View>
    </>
  );
};

export default Onbordingheader;
