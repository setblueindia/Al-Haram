import React from 'react';
import {EXTRASTR, NAVIGATION, NUMBER} from '../constants/constants';
import TabNavigation from './Tab';
import Drower from '../screens/CustomeDrower/Drower';
import {useSelector} from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrowerNavigation = () => {
  const lang = useSelector(state => state.lang);

  const Drawer = createDrawerNavigator();

  return (
    <>
      {lang.data == NUMBER.num0 && (
        <Drawer.Navigator
          screenOptions={{
            drawerPosition: 'right',
          }}
          initialRouteName={NAVIGATION.TabScreen}
          drawerContent={props => <Drower {...props} />}>
          <Drawer.Screen
            name={NAVIGATION.TabScreen}
            component={TabNavigation}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      )}

      {lang.data == NUMBER.num1 && (
        <Drawer.Navigator
          screenOptions={{
            drawerPosition: 'left',
          }}
          initialRouteName={NAVIGATION.TabScreen}
          drawerContent={props => <Drower {...props} />}>
          <Drawer.Screen
            name={NAVIGATION.TabScreen}
            component={TabNavigation}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      )}
    </>
  );
};

export default DrowerNavigation;
