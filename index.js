/**
 * @format
 */
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { AppRegistry, I18nManager, Text, TextInput } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import RNRestart from 'react-native-restart';

const AppRoot = () => {

    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;

    useEffect(() => {
        if (I18nManager.isRTL) {
            I18nManager.allowRTL(false);
            I18nManager.forceRTL(false);
            RNRestart.Restart();
        }
    }, []);


    return (

        <Provider store={store}>
            <App />
        </Provider>

    )

}

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(AppRoot));
