import { Text, View, TextInput, } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Wallet.style.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ResponsiveSize } from '../../utils/utils.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UseWalletHook from './Wallet.hook.js';
import CommanHeader from '../../components/ComanHeader/index.js';
import { ICON, NAVIGATION, NUMBER, PROFILEStr } from '../../constants/constants.js';
import { ALINE, COLOR } from '../../constants/style.js';
import CusLoader from '../../components/CustomLoader/index.js';

const Wallet = ({ Sponser , setloader ,  route }) => {
  const { navigation, lang, data, Str, amount, isLoadding , getAdreesList , setAddAmount} = UseWalletHook(setloader ,route )

  return (
    <View style={styles.mainView}>
      {!Sponser &&
       <CommanHeader name={Str?.MyWallet} lang={lang} navigation={navigation} />}
      <View style={{ paddingHorizontal: ResponsiveSize(20) }}>
        {!Sponser && <View style={styles.mngView}>
          <Text style={[styles.mngText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{data?.ManageWallet ? data?.ManageWallet :"0"}</Text>
        </View>}
        <View style={[styles.walletView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
          <View style={[styles.walletImg, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
            <AntDesign name={ICON.wallet} color="#202020" size={ResponsiveSize(40)} />
            <View style={styles.lineView}></View>
          </View>
          <View>
            <Text style={[styles.detailText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{data?.WalletDetails}</Text>
            <View>
              <Text style={[styles.mnyText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{Str?.SAR + " " + amount}</Text>
            </View>
            <View>
              <Text style={[styles.balText, , lang == NUMBER.num0 && { textAlign: 'right' }]}>{data?.YourWalletBalance}</Text>
            </View>
          </View>
        </View>
        <View style={styles.amtView}>
          <Text style={[styles.balText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{data?.AddAmount}</Text>
        </View>

        <View style={styles.txtView}>
          <View style={[styles.inputView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
            <AntDesign
              name="wallet"
              color={COLOR.black}
              size={ResponsiveSize(25)}
              style={{ paddingHorizontal: ResponsiveSize(10) }}
            />
            <TextInput
              style={{ flex: 1 , color:COLOR.black }}
              placeholderTextColor={COLOR.darkGray}
              textAlign={lang == NUMBER.num0 ? 'right' : 'left'}
              placeholder={data?.EnterAmount}
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              onChangeText={(tex)=>{setAddAmount(tex)}}
            />
          </View>
        </View>
        <View style={styles.addAmtView}>
          <TouchableOpacity
             onPress={()=>{getAdreesList()}}
             style={styles.amtBtn}>
            <Text style={styles.amtText}>{data?.AddAmounttoWallet}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paymentHistroy}>
          <TouchableOpacity
            onPress={() => { navigation.navigate(NAVIGATION.PaymentHistroy) }}
            style={styles.amtBtn}>
            <Text style={styles.paymentText}>{Str?.WalletHistory}</Text>
          </TouchableOpacity>
        </View>

      </View>
      {isLoadding &&
        <View style={{ height: "100%", width: "100%" , position:'absolute' }}>
          <CusLoader />
        </View>
      }
    </View>
  );
};
export default Wallet;
