import { View, Text, StatusBar, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import NetworkConnection from './src/components/NetworkConnection';
import NetInfo from '@react-native-community/netinfo';
import messaging from '@react-native-firebase/messaging';


const App = () => {
  const [isConnected, setIsConnected] = useState(true);
  
  useEffect(() => {
    const checkPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        const token = await messaging().getToken();
        console.log('FCM Token:', token);
      } else {
        Alert.alert('Permission Denied', 'You need to grant notification permissions to receive notifications.');
      }
    };
    checkPermission();
  }, []);




  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#000000" />
      {isConnected ? <AppNavigation /> : <NetworkConnection />}
      {/* {loader && 
      (
        <View style={{ flex: 1, position: 'absolute', height: "100%", width: "100%" }}>
          <CusLoader />
        </View>
      )} */}
    </>
  );
};

export default App;
