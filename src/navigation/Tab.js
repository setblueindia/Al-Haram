import { StyleSheet, View } from 'react-native';
import React from 'react';
import Home from '../screens/Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NAVIGATION } from '../constants/constants';
import Categories from '../screens/Categories/Categories';
import Notification from '../screens/Notification/Notification';
import Profile from '../screens/Profile/Profile';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import ProfileIcon from 'react-native-vector-icons/dist/FontAwesome';
import HomeIcon from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { COLOR } from '../constants/style';
import { ResponsiveSize } from '../utils/utils';



const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        
        tabBarStyle: {
          // height: ResponsiveSize(80),
          // backgroundColor: COLOR.white
        },


        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name == NAVIGATION.HomeScreen) {

            icon = "home"
            return (
              // <View onPress={() => { console.log("Home") }} style={styles.iconView}>
              //   <View style={styles.lineView}></View>
              <HomeIcon name={icon} color={COLOR.primaray} size={ResponsiveSize(40)} />
              // </View>
            )
          }
          if (route.name == NAVIGATION.CategoriesScreen) {
            icon = "category"
            return <Icon name={icon} color={COLOR.primaray} size={ResponsiveSize(40)} />;
          }
          if (route.name == NAVIGATION.NotificationScreen) {
            icon = "notifications-outline"
            return <Ionicons name={icon} color={COLOR.primaray} size={ResponsiveSize(40)} />;

          }
          if (route.name == NAVIGATION.ProfileScreen) {
            icon = "user"
            return <ProfileIcon name={icon} color={COLOR.primaray} size={ResponsiveSize(40)} />
          }
        }

      })}
    >

      <Tab.Screen
        name={NAVIGATION.HomeScreen}
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={NAVIGATION.CategoriesScreen}
        component={Categories}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={NAVIGATION.NotificationScreen}
        component={Notification}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={NAVIGATION.ProfileScreen}
        component={Profile}
        options={{ headerShown: false }}
      />

    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({

  iconView: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  lineView: {
    width: "40%",
    height: ResponsiveSize(3),
    backgroundColor: COLOR.primaray,
    marginBottom: ResponsiveSize(8)
  }

});
