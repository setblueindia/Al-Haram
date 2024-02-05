import React from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import styles from './style';
import commonStyles from '../../theme/commonStyles';

const Notification = props => {
  const navigation = props.navigation;

  return (
    <SafeAreaView style={commonStyles.flex}>
      <View style={[commonStyles.containerPadding, styles.container]}>
        <Text style={styles.screenText}>notification</Text>
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={styles.aboutBtn}>
          <Text style={styles.aboutBtnText}>Back To Home</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Notification;