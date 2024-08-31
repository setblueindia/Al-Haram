import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './MyOrder.style.js';
import CommanHeader from '../../components/ComanHeader/index.js';
import UseMyOrderHook from './MyOrder.hook.js';
import { EXTRASTR, NAVIGATION, NUMBER } from '../../constants/constants.js';
import { ALINE, COLOR, RESIZEMODE } from '../../constants/style.js';
import { ResponsiveSize, SHOWTOTS } from '../../utils/utils.js';
import CusLoader from '../../components/CustomLoader/index.js';
import { ShopBug } from '../../assests/index.js';
import DataIsNotFound from '../../components/DataNotFound2/index.js';
import FastImage from 'react-native-fast-image';
const MyOrder = () => {
  const { lang, navigation, data, Str, isLoadding } = UseMyOrderHook()
  return (
    <View style={styles.mainView}>
      <CommanHeader lang={lang} navigation={navigation} name={Str.MyOrder} />
      <View style={{ flex: 1, height: "100%", width: "100%" }}>
        {data?.length > 0 ?
          < View style={styles.containerView}>
            <FlatList
              data={data}
              style={{flex:1 , marginBottom:ResponsiveSize(20)}}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        item?.name == "Wallet Amount" ?  SHOWTOTS("Wallet Order status is in " + item?.status_display)  : navigation.navigate(NAVIGATION?.OrderDeatsiScreen, { orderID: item?.id }) }}
                      style={[styles.listView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                      <View style={styles.imgView}>
                        <FastImage
                        resizeMode={RESIZEMODE.contain}
                          source={ShopBug}
                          style={styles.imgStyle}
                        />
                      </View>

                      <View style={styles.prdView}>
                        <View>
                          <Text style={[styles.idColor, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{item?.order_id}</Text>
                        </View>
                        <View>
                          <Text style={[styles.prdText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{item?.name}</Text>
                        </View>

                        <View style={[styles.compalatedView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                          <View style={[styles.dott, { backgroundColor: item?.status_display == "pending" ? "#FFC000" : item?.status_display == "canceled" ? 'red' : item?.status_display == "closed" ? 'red' : item?.status_display == "canceled" ? 'red' : "green" }]}></View>
                          <Text style={[styles.compalatedText, lang == NUMBER.num0 && { marginRight: ResponsiveSize(10) , textAlign:'right'}, { color: item?.status_display == "pending" ? "#FFC000" : item?.status_display == "closed" ? 'red' : item?.status_display == "canceled" ? 'red' : "green" }]}>{item?.status_display}</Text>
                        </View>

                      </View>
                      <View style={styles.mnyView}>
                        <Text style={{ color: COLOR.primaray, fontWeight: "600" , width:ResponsiveSize(100)}}>{Str.SAR + " " + item?.order_total}</Text>
                      </View>
                    </TouchableOpacity>


                  </TouchableOpacity>
                )
              }}
            />


          </View>
          : !isLoadding ?
            <DataIsNotFound navigation={navigation}/> : null
        }

      </View>


      {
        isLoadding &&
        <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
          <CusLoader />
        </View>
      }

    </View >
  );
};
export default MyOrder;
