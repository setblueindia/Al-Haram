// /**
//  * @format
//  */
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import defaultStore from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import './src/i18n/i18n.config'
const {store, persistor} = defaultStore();
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
const AppRoot = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
<<<<<<< HEAD
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(AppRoot));
=======

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(AppRoot));

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
