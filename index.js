/**
 * @format
 */
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const AppRoot = () => {
    return (
        <Provider  store={store}>
            <App />
        </Provider>

    )

}

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(AppRoot));
