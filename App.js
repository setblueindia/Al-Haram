import { StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import NetworkConnection from './src/components/NetworkConnection';
import NetInfo from '@react-native-community/netinfo';
import messaging from '@react-native-firebase/messaging';
import { FCMTokenStor } from './src/utils/asyncStorage';

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const checkPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        const token = await messaging().getToken();
        FCMTokenStor(token)
      } else {
        // Alert.alert('Permission Denied', 'You need to grant notification permissions to receive notifications.');
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
    </>
  );
};

export default App;

