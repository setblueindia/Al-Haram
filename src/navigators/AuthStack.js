import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../components/Login/Login';
import Home from '../components/Home/Home';
// import About from '../components/About/About';


import {appStackScreenOptions} from '../config/navigationConfig';
import Registor from '../../src/components/Registor/Registor';

const AuthFlow = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <AuthFlow.Navigator
      initialRouteName={'Login'}
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
    </AuthFlow.Navigator>
  );
}
