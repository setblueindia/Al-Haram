import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './splash.style';
import {logo} from '../../assests';
import useSplshHook from './splash.hook';


const Splash = () => {

  const {
    
  } = useSplshHook()
  return (
    <View style={styles.mainView}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={logo} />
      </View>
    </View>
  );
};

export default Splash;
