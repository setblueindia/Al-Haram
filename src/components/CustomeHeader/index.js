import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/Entypo';
import HertIcon from 'react-native-vector-icons/dist/AntDesign'
import { ResponsiveSize } from '../../utils/utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { styles } from './header.style';

import { logo } from '../../assests';
import { ICON, NAVIGATION, NUMBER } from '../../constants/constants';
import StatusBarCus from '../CustomStatusBar';
import { useSelector } from 'react-redux';
import { ALINE } from '../../constants/style';
import LottieView from 'lottie-react-native';

const CustomeHeader = ({ search, like, shoppingcart }) => {
  const navigation = useNavigation();
  const lang = useSelector(state => state.lang)
  return (
    <View style={styles.mainView}>
      <StatusBarCus />

      <View style={[styles.container, lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
        <View style={styles.menuView}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Icon style={styles.menuIcon} name={ICON.menu} size={ResponsiveSize(50)} />
          </TouchableOpacity>
        </View>

        <View style={styles.logView}>
          <Image style={styles.log} source={logo} />
        </View>

        <View style={[styles.lastView, lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
          <TouchableOpacity onPress={() => { navigation.navigate(NAVIGATION.SerchScreen) }}>
            {search && <HertIcon name={ICON.search1} size={25} style={styles.menuIcon} />}
          </TouchableOpacity>

          <View>
            {like && <HertIcon name={ICON.hearto} size={25} style={styles.menuIcon} />}
          </View>

          <TouchableOpacity onPress={() => { navigation.navigate(NAVIGATION.Shoppingcart) }}>
            {shoppingcart &&
              // <LottieView
              //   //   ref={animationRef}
              //   source={require('../../assests/Lottianimation/AddToCart.json')}
              //   autoPlay loop
              //   resizeMode='cover'
              //   style={{ height: ResponsiveSize(40), width: ResponsiveSize(40) }}
              // />

              <HertIcon name={ICON.shoppingcart} size={25} style={styles.menuIcon} />


            }
          </TouchableOpacity>
        </View>


      </View>
    </View>
  );
};

export default CustomeHeader;
