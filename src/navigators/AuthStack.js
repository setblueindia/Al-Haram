import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';

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
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </AuthFlow.Navigator>
  );
}
