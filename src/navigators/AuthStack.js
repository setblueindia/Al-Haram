import React from 'react';
<<<<<<< HEAD
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
=======
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../components/Login/Login';
import Home from '../components/Home/Home';
// import About from '../components/About/About';


import {appStackScreenOptions} from '../config/navigationConfig';
import Registor from '../../src/components/Registor/Registor';
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c

const AuthFlow = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <AuthFlow.Navigator
      initialRouteName={'Login'}
<<<<<<< HEAD
    >
      <AuthFlow.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthFlow.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
=======
      >
      <AuthFlow.Screen
    name="Login"
    component={Login}
    options={{ headerShown: false }}
  />
  <AuthFlow.Screen 
   name="Registor"
   component={Registor}
   options={{ headerShown: false }}
  />
  {/* <AuthFlow.Screen name="Home" component={Home} /> */}
      {/* <AuthFlow.Screen name="Home" component={Home} />
      <AuthFlow.Screen name="About" component={About} /> */}
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    </AuthFlow.Navigator>
  );
}
