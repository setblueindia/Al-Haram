import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { ResponsiveSize } from '../../utils/utils';
import { ALINE, COLOR } from '../../constants/style';

const CustomRangeSlider = ({setMinValue , setMaxValue , lowPrese , hightPrice , price , setMinPrice , setMaxPrice}) => {
const [values, setValues] = useState([price?.data?.length > 0 ? price?.data[0] : lowPrese , price?.data?.length > 0 ? price?.data[1] : hightPrice]);

  const onValuesChange = (values) => {
    setMinValue(values[0])
    setMaxValue(values[1])
    setMinPrice(values[0])
    setMaxPrice(values[1])
    setValues(values);
  };

  return (
    <View style={styles.container}>
      <MultiSlider
        values={values}
        sliderLength={ResponsiveSize(270)}
        onValuesChange={onValuesChange}
        min={lowPrese}
        max={hightPrice}
        step={1}
        allowOverlap={false}
        snapped
        selectedStyle={styles.selectedTrack}
        unselectedStyle={styles.unselectedTrack}
        markerStyle={styles.marker}
        pressedMarkerStyle={styles.pressedMarker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: ALINE.center,
    alignItems: ALINE.center,
    width:ResponsiveSize(200),
  },
  selectedTrack: {
    backgroundColor: COLOR.darkGray, 
  },
  unselectedTrack: {
    backgroundColor: COLOR.primaray, 
  },
  marker: {
    backgroundColor: COLOR.liteGray, 
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  pressedMarker: {
    backgroundColor: COLOR.primaray,
    height: 25,
    width: 25,
    borderRadius: 12.5,
  },
});

export default CustomRangeSlider;
