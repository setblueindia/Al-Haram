import React from 'react';
import { View, Text } from 'react-native';

const NumberOfItems = ({ itemCount }) => {
  return (
    <View>
      <Text style={{ color: '#009834' ,padding:3}}>  {"("+itemCount + ")"}</Text>
    </View>
  );
};

export default NumberOfItems;