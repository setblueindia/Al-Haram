import React from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import styles from './style';

const Notification = props => {
  const navigation = props.navigation;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <Text style={styles.screenText}>notification</Text> */}
        <Pressable
          // onPress={() => navigation.navigate('Home')}
          style={styles.aboutBtn}>
          <Text style={styles.aboutBtnText}>Coming soon...</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Notification;