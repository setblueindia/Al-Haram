
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from '../components/TAB/Icons';
import * as Animatable from 'react-native-animatable';
import { ALINE, COLOR } from '../constants/style';
import { NAVIGATION, NUMBER } from '../constants/constants';
import Categories from '../screens/Categories/Categories';
import Notification from '../screens/Notification/Notification';
import Profile from '../screens/Profile/Profile';
import { ResponsiveSize } from '../utils/utils';
import Home from '../screens/Home/Home';
import { useSelector } from 'react-redux';


const TabArr = [
  {
    route: NAVIGATION.HomeScreen,
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home',
    component: Home
  },
  {
    route: NAVIGATION.CategoriesScreen,
    label: 'Like',
    type: Icons.MaterialIcons,
    activeIcon: 'category',
    inActiveIcon: 'category',
    component: Categories
  },
  {
    route: NAVIGATION.NotificationScreen,
    label: 'Search',
    type: Icons.Ionicons,
    activeIcon: 'notifications-outline',
    inActiveIcon: 'notifications-outline',
    component: Notification
  },
  {
    route: NAVIGATION.ProfileScreen,
    label: 'Account',
    type: Icons.FontAwesome,
    activeIcon: 'user-circle',
    inActiveIcon: 'user-circle-o',
    component: Profile
  },
];


const TabArr2 = [
  {
    route: NAVIGATION.ProfileScreen,
    label: 'Account',
    type: Icons.FontAwesome,
    activeIcon: 'user-circle',
    inActiveIcon: 'user-circle-o',
    component: Profile
  },
  {
    route: NAVIGATION.NotificationScreen,
    label: 'Search',
    type: Icons.Ionicons,
    activeIcon: 'notifications-outline',
    inActiveIcon: 'notifications-outline',
    component: Notification
  },
  {
    route: NAVIGATION.CategoriesScreen,
    label: 'Like',
    type: Icons.MaterialIcons,
    activeIcon: 'category',
    inActiveIcon: 'category',
    component: Categories
  },
  {
    route: NAVIGATION.HomeScreen,
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home',
    component: Home
  },
];

const Tab = createBottomTabNavigator();
const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: .5, rotate: '0deg' }, 1: { scale: 1.2, rotate: '360deg' } });
    } else {
      viewRef.current.animate({ 0: { scale: 1.5, rotate: '360deg' }, 1: { scale: 1, rotate: '0deg' } });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { top: 0 }]}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
      >
        <Icon type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? COLOR.primaray : COLOR.black} />
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function AnimTab1() {
  const lang = useSelector(state => state.lang.data)
  const Data = lang == NUMBER.num1 ? TabArr : TabArr2

  // return (
  //   <View style={{ flex: 1 }}>
  //     <Tab.Navigator
  //       screenOptions={{
  //         headerShown: false,
  //         tabBarStyle: {
  //           height: ResponsiveSize(80),
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           elevation: 10,
  //         }
  //       }}
  //     >
  //       {
  //       Data.map((item, index) => {
  //         return (
  //           <Tab.Screen key={index} name={item.route} component={item.component}
  //             options={{
  //               tabBarShowLabel: false,
  //               tabBarButton: (props) => <TabButton {...props} item={item} />
  //             }}
  //           />
  //         )
  //       })}
  //     </Tab.Navigator>
  //   </View>
  // )

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName={NAVIGATION.HomeScreen}  // Set initial route to HomeScreen
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: ResponsiveSize(80),
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10,
          }
        }}
      >
        {
          Data.map((item, index) => {
            return (
              <Tab.Screen key={index} name={item.route} component={item.component}
                options={{
                  tabBarShowLabel: false,
                  tabBarButton: (props) => <TabButton {...props} item={item} />
                }}
              />
            )
          })}
      </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: ALINE.center,
    alignItems: ALINE.center,
    height: ResponsiveSize(60),
  }
})