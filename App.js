import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import { useSelector } from 'react-redux'
import CusLoader from './src/components/CustomLoader'

const App = () => {
  const loder = useSelector(state => state?.Categories?.loader)
  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <AppNavigation />

      {/* {loder &&
        <View style={{ flex: 1, position: 'absolute', height: "100%", width: "100%" }}>
          <CusLoader />
        </View>} */}
    </>
  )
}

export default App