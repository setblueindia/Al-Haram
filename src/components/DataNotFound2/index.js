import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ResponsiveSize} from '../../utils/utils';
import {ALINE, COLOR, RESIZEMODE} from '../../constants/style';
import LottieView from 'lottie-react-native';
import CustomeHeader from '../CustomeHeader';
import CommanHeader from '../ComanHeader';

const DataIsNotFound = ({userData, text, navigation, header , color}) => {
  return (
    <View style={styles.lottiMainView}>
   { color &&  <View>
      {header ? (
        <CommanHeader navigation={navigation} />
      ) : (
        <CustomeHeader
          search={true}
          like={true}
          shoppingcart={true}
          userData={userData}
        />
      )}
      </View>}
      <View style={styles.lottiView}>
        <Image
          source={require('../../assests/images/Home/datanot.png')}
          style={styles.image}
          resizeMode={RESIZEMODE.contain}
        />
        <View>
          <Text style={styles.dataError}>Data not Found</Text>
        </View>
        <View style={styles.lottiTextView}>
          <Text style={styles.errorText}>
            Something went wrong.
            {'\n'}
            <Text style={styles.centeredText}>Please try again</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DataIsNotFound;

const styles = StyleSheet.create({
  lottiMainView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor:COLOR.white
  },
  lottiView: {
    flex: 1,
    justifyContent: ALINE.center,
    alignItems: ALINE.center,
    height: '100%',
    width: '100%',
    // backgroundColor: '#00000010',
  },
  lottiTextView: {
    height: ResponsiveSize(60),
    width: ResponsiveSize(300),
    borderRadius: ResponsiveSize(100),
    justifyContent: ALINE.center,
    alignItems: ALINE.center,
    marginTop: ResponsiveSize(6),
  },
  errorText: {
    color: '#6E6969',
    fontWeight: 'regular',
    textAlign: 'center',
  },
  dataError: {
    color: '#990107',
    fontSize: ResponsiveSize(40),
    fontWeight: 'bold',
  },
  centeredText: {
    textAlign: 'center',
  },
  image: {
    height: ResponsiveSize(420),
    width: ResponsiveSize(420),
    resizeMode:'contain'
  },
});