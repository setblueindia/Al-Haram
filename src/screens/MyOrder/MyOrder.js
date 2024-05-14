import { StyleSheet, Text, View, TextInput, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import { styles } from './MyOrder.style.js';
import CommanHeader from '../../components/ComanHeader/index.js';
import UseMyOrderHook from './MyOrder.hook.js';
import { NUMBER } from '../../constants/constants.js';
import { ALINE } from '../../constants/style.js';
const MyOrder = () => {
  const { lang, navigation, data , Str } = UseMyOrderHook()
  return (
    <View style={styles.mainView}>
      <CommanHeader lang={lang} navigation={navigation} name={Str.MyOrder}/>


      <View style={styles.containerView}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return (
              <View style={[styles.listView ,lang == NUMBER.num0 && {flexDirection:ALINE.rowreverse}]}>
                <View style={styles.imgView}>
                  <Image
                    source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                    style={styles.imgStyle}
                  />
                </View>
                <View style={styles.prdView}>
                  <View>
                    <Text style={styles.idColor}>{item?.ProID}</Text>
                  </View>
                  <View>
                    <Text style={styles.prdText}>{item?.ProductName}</Text>
                  </View>
                </View>
                <View style={styles.mnyView}>
                  <Text>SAR 29</Text>
                </View>

              </View>
            )
          }}
        />

      </View>
    </View>
  );
};
export default MyOrder;
