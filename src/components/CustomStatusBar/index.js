import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLOR } from '../../constants/style';

const StatusBarCus = ({backgroundColor}) => {
    const insets = useSafeAreaInsets();
    const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? insets.top : StatusBar.currentHeight;
  return (
    <View style={{height : STATUSBAR_HEIGHT , width:"100%"}}>
        <StatusBar  translucent backgroundColor={COLOR.white} barStyle = "dark-content"   />
    </View>
  )
}

export default StatusBarCus

