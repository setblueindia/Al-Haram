import { View} from 'react-native';
import React from 'react';
import {styles} from './splash.style';
import {logo} from '../../assests';
import useSplshHook from './splash.hook';
import FastImage from 'react-native-fast-image';
import { RESIZEMODE } from '../../constants/style';

const Splash = () => {
const {} = useSplshHook()
  return (
    <View style={styles.mainView}>
      <View style={styles.imageView}>
        <FastImage resizeMode={RESIZEMODE.contain} style={styles.image} source={logo} />
      </View>
    </View>
  );
};

export default Splash;
