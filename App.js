import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'

const App = () => {
  return (
    <>
    <StatusBar backgroundColor="#000000"/>
  <AppNavigation />
    </>
  )
}

export default App