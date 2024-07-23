import { View, Text, StatusBar, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import NetworkConnection from './src/components/NetworkConnection';
import NetInfo from '@react-native-community/netinfo';

// import CusLoader from './src/components/CustomLoader';
// import messaging from '@react-native-firebase/messaging';

const App = () => {
  const [isConnected, setIsConnected] = useState(true);
  // const loader = useSelector(state => state?.Categories?.loader);


  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // };

  // const getToken = async () => {
  //   const token = await messaging().getToken();
  //   console.log('Token = ', token);
  // };

  // useEffect(() => {
  //   const setupMessaging = async () => {
  //     await requestUserPermission();
  //     await getToken();

  //     const unsubscribe = messaging().onMessage(async remoteMessage => {
  //       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //     });

  //     return unsubscribe;
  //   };

  //   const messagingSetup = setupMessaging();

  //   return () => {
  //     messagingSetup.then(unsubscribe => {
  //       if (typeof unsubscribe === 'function') {
  //         unsubscribe();
  //       } else {
  //         console.log('Unsubscribe is not a function:', unsubscribe);
  //       }
  //     });
  //   };
  // }, []);

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
