import { Text, View, TextInput, Image, } from 'react-native';
import React from 'react';
import { styles } from './Wallet.style.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ResponsiveSize } from '../../utils/utils.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UseWalletHook from './Wallet.hook.js';
import CommanHeader from '../../components/ComanHeader/index.js';
import { EXTRASTR, ICON, NAVIGATION, NUMBER, PROFILEStr } from '../../constants/constants.js';
import { ALINE, COLOR } from '../../constants/style.js';
import CusLoader from '../../components/CustomLoader/index.js';
import SAR from '../../components/SAR/Index.js';
import { FONTS } from '../../constants/fonts.js';

const Wallet = ({ Sponser, setloader, route }) => {
  const {
    navigation,
    lang,
    data,
    Str,
    amount,
    isLoadding,
    getAdreesList,
    setAddAmount
  } = UseWalletHook(setloader, route)

  return (
    <View style={styles.mainView}>
      {!Sponser &&
        <CommanHeader
          name={Str?.MyWallet}
          lang={lang}
          navigation={navigation}
        />
      }

      <View
        style={{
          paddingHorizontal: ResponsiveSize(20)
        }}>

        {!Sponser && <View style={styles.mngView}>
          <Text
            style={[
              styles.mngText,
              lang == NUMBER.num0 && {
                textAlign: EXTRASTR.right
              }]}>
            {data?.ManageWallet ? data?.ManageWallet : "0"}
          </Text>
        </View>
        }

        <View
          style={[
            styles.walletView,
            lang == NUMBER.num0 && {
              flexDirection: ALINE.rowreverse
            }]}>

          <View
            style={[
              styles.walletImg,
              lang == NUMBER.num0 && {
                flexDirection: ALINE.rowreverse
              }]}
          >
            <AntDesign
              name={ICON.wallet}
              color="#202020"
              size={ResponsiveSize(40)}
            />
            <View style={styles.lineView}></View>
          </View>
          <View>
            <Text
              style={[
                styles.detailText,
                lang == NUMBER.num0 && {
                  textAlign: EXTRASTR.right
                }]}>
              {data?.WalletDetails}
            </Text>

            {/* ADD IMG */}
            <View style={{
              flexDirection: lang == NUMBER.num1 ? ALINE.row : ALINE.rowreverse,
              alignItems: ALINE.center
            }}>
              <Image
                style={{
                  height: ResponsiveSize(20),
                  width: ResponsiveSize(20),
                  resizeMode: 'contain',
                  tintColor: COLOR.primaray,
                  marginRight: ResponsiveSize(5)
                }}
                source={
                  require('../../assets/images/Common/SAR.png')}
              />
              <Text style={[
                styles.mnyText,
                lang == NUMBER.num0 && {
                  textAlign: EXTRASTR.right,
                  marginRight: ResponsiveSize(5)
                }]}>
                {amount}
              </Text>
            </View>


            <View>
              <Text
                style={[styles.balText,
                lang == NUMBER.num0 && {
                  textAlign: EXTRASTR.right
                }]}>
                {data?.YourWalletBalance}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.amtView}>
          <Text style={[
            styles.balText,
            lang == NUMBER.num0 && {
              textAlign: EXTRASTR.right
            }]}>{data?.AddAmount}
          </Text>
        </View>

        <View style={styles.txtView}>
          <View style={[
            styles.inputView,
            lang == NUMBER.num0 && {
              flexDirection: ALINE.rowreverse
            }]}>
            <AntDesign
              name={ICON.wallet}
              color={COLOR.black}
              size={ResponsiveSize(25)}
              style={{ paddingHorizontal: ResponsiveSize(10) }}
            />
            <TextInput
              style={{ flex: 1, color: COLOR.black, fontFamily: FONTS.Regular }}
              placeholderTextColor={COLOR.darkGray}
              textAlign={lang == NUMBER.num0 ? EXTRASTR.right : EXTRASTR.left}
              placeholder={data?.EnterAmount}
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              onChangeText={(tex) => { setAddAmount(tex) }}
            />
          </View>
        </View>

        <View style={styles.addAmtView}>
          <TouchableOpacity
            onPress={() => {
              getAdreesList()
            }}
            style={styles.amtBtn}>
            <Text
              style={styles.amtText}>
              {data?.AddAmounttoWallet}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paymentHistroy}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(NAVIGATION.PaymentHistroy)
            }}
            style={styles.amtBtn}>
            <Text
              style={styles.paymentText}>
              {Str?.WalletHistory}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
      {isLoadding &&
        <View style={{
          height: "100%",
          width: "100%",
          position: 'absolute'
        }}>
          <CusLoader />
        </View>
      }
    </View>
  );
};
export default Wallet;
