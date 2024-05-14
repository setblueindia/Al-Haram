
import React from 'react'
import StackNavigation from './StackNavigation';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}

export default AppNavigation

