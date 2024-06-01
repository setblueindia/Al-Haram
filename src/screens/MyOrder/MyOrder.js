import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './MyOrder.style.js';
import CommanHeader from '../../components/ComanHeader/index.js';
import UseMyOrderHook from './MyOrder.hook.js';
import { EXTRASTR, NAVIGATION, NUMBER } from '../../constants/constants.js';
import { ALINE, COLOR } from '../../constants/style.js';
import { ResponsiveSize } from '../../utils/utils.js';
const MyOrder = () => {
  const { lang, navigation, data, Str } = UseMyOrderHook()
  return (
    <View style={styles.mainView}>
      <CommanHeader lang={lang} navigation={navigation} name={Str.MyOrder} />
      <View style={styles.containerView}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <TouchableOpacity
                  onPress={() => { navigation.navigate(NAVIGATION?.OrderDeatsiScreen) }}
                  style={[styles.listView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>

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
                      <Text style={[styles.idColor, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{item?.ProID}</Text>
                    </View>
                    <View>
                      <Text style={styles.prdText}>{item?.ProductName}</Text>
                    </View>

                    <View style={[styles.compalatedView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                      <View style={styles.dott}></View>
                      <Text style={[styles.compalatedText, lang == NUMBER.num0 && { marginRight: ResponsiveSize(10) }]}>{item?.Compalated}</Text>
                    </View>

                  </View>
                  <View style={styles.mnyView}>
                    <Text style={{ color: COLOR.primaray, fontWeight: "600" }}>SAR 29</Text>
                  </View>
                </TouchableOpacity>


              </TouchableOpacity>
            )
          }}
        />

      </View>
    </View>
  );
};
export default MyOrder;
