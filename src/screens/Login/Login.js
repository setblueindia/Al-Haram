import { Image, Text, View, TouchableOpacity, ScrollView, Modal, SafeAreaView, Platform } from 'react-native';
import React, { useState } from 'react';
import { styles } from './login.style';
import Onbordingheader from '../../components/OnbordingHeader';
import SwitchButton from '../../components/SwitchButton';
import { Apple, google, logo } from '../../assests';
import TextFildCus from '../../components/TextFildCus';
import { ICON, LOGINStr, NUMBER } from '../../constants/constants';
import CheackButton from '../../components/CheackButton';
import Button from '../../components/Button';
import useLoginHook from './login.hook';
import SocialButton from '../../components/SocialButton';
import { ALINE, COLOR } from '../../constants/style';
import { ResponsiveSize } from '../../utils/utils';
import CusLoader from '../../components/CustomLoader';
import CusModal from '../../components/CusModal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  const {
    whiteEmail,
    errorText,
    showModal,
    checkBox,
    rememberMe,
    setRembemberMe,
    ForgetPassword,
    setShowModal,
    setEmail,
    setPassword,
    setWithEmail,
    onPress,
    SingUpScreen,
    setMobailNumber,
    setCheckBox,
    handleGoogleSignIn,
    onAppleButtonPress,
    loader,
    langues,
    lang
  } =
    useLoginHook();
  return (
    <View style={{flex:1, backgroundColor:COLOR.white}}>
      <KeyboardAwareScrollView style={[styles.mainView]}>
        <View style={styles.headerView}>
          <Onbordingheader />
        </View>
        <View style={styles.container}>
          <View style={styles.uthView}>
            <View>
              <SwitchButton setWithEmail={setWithEmail} langues={langues} />
            </View>

            <View style={styles.contentView}>
              {whiteEmail && (
                <>
                  <TextFildCus
                     password={false}
                    value={rememberMe?.EMAIL}
                    onChange={setEmail}
                    icon={ICON.emailIcon}
                    text={langues?.Enteryouremail}
                  />
                  <View style={styles.devider} />

                  <TextFildCus
                    password={true}
                    value={rememberMe?.PASSWORD}
                    onChange={setPassword}
                    icon={ICON.lockIcon}
                    text={langues?.Enteryourpassword}
                  
                  />
                </>
              )}

              {!whiteEmail && (
                <TextFildCus
                  icon={ICON.phoneIcon}
                  text={langues?.Entermobilenumber}
                  onChange={setMobailNumber}

                />
              )}

              <View style={styles.devider} />

              <View
                style={[
                  styles.cheackButtonView,
                  lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse },
                ]}>
                <View style={styles.rememerView}>
                  {whiteEmail && (
                    <View
                      style={[
                        styles.checkReam,
                        lang.data == NUMBER.num0 && {
                          flexDirection: ALINE.rowreverse,
                        },
                      ]}>
                      <CheackButton preVriable={checkBox} onPress={setCheckBox} />

                      <Text
                        style={[
                          styles.rememverText,
                          lang.data == NUMBER.num0 && {
                            marginRight: ResponsiveSize(10),
                          },
                        ]}>
                        {langues?.Rememberme}
                      </Text>
                    </View>
                  )}
                </View>
                <TouchableOpacity style={{ flex:1}} onPress={() => { ForgetPassword() }}>
                  <Text  style={[styles.forgetText , lang?.data == NUMBER.num0 && {textAlign:'left'}]}>{langues?.ForgotPassword}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.devider} />

              <View>
                <Button
                  onPress={onPress}
                  text={whiteEmail ? langues?.SignIn : langues?.SendOTP}
                />
              </View>
              <View style={styles.devider} />
              <View style={styles.socialButton}>
                <SocialButton onPress={()=>{handleGoogleSignIn()}} icon={google} text={LOGINStr.Google} />
             { Platform.OS == 'ios' && 
            <SocialButton   onPress={()=>{onAppleButtonPress()}} icon={Apple}  text={LOGINStr.Apple} />}
              </View>

              <View style={styles.devider} />

              <View style={styles.newCustomer}>
                 <View style={styles.row}></View>
                <Text style={styles.text}>{langues?.NewCustomer}</Text>
                <View style={styles.row}></View>
              </View>
              <View style={styles.devider} />
              <Button
                onPress={SingUpScreen}
                text={langues?.SignUp}
                color={COLOR.white}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>

      {loader &&
        <View style={styles.loadder}>
          <CusLoader />
        </View>}

      <Modal
        animationType='slide'
        transparent={true}
        visible={showModal}

      >
        <CusModal setModalShow={setShowModal} text={errorText} />
      </Modal>
    </View>
  );
};

export default Login;
