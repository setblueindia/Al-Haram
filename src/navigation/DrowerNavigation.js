import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NAVIGATION, NUMBER } from '../constants/constants';
import TabNavigation from './Tab';
import Drower from '../screens/CustomeDrower/Drower';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

const DrawerNavigationHandler = () => {
    const lang = useSelector(state => state.lang);

    return (
        <>
            {lang.data == NUMBER.num0 &&
                <Drawer.Navigator
                    screenOptions={{
                        ...styles.DrawerContainer,
                        drawerPosition: 'right',
                    }}
                    drawerContent={props => <Drower {...props} />}
                >
                    <Drawer.Screen
                        name={NAVIGATION.TabScreen}
                        component={TabNavigation}
                        options={{ headerShown: false }}
                    />
                </Drawer.Navigator >}

            {lang.data == NUMBER.num1 && <Drawer.Navigator
                screenOptions={{
                    ...styles.DrawerContainer,
                    drawerPosition: 'left',
                }}
                drawerContent={props => <Drower {...props} />}
            >
                <Drawer.Screen
                    name={NAVIGATION.TabScreen}
                    component={TabNavigation}
                    options={{ headerShown: false }}
                />
            </Drawer.Navigator >}
        </>

    )
}

export default DrawerNavigationHandler

const styles = StyleSheet.create({
    DrawerContainer: {
        drawerStyle: {
            width: '100%',
        },
    },
})