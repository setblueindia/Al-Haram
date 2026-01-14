import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './singup.style';
import Onbordingheader from '../../components/OnbordingHeader';
import { ICON } from '../../constants/constants';
import TextFildCus from '../../components/TextFildCus';
import Button from '../../components/Button';
import useSingUpHook from './singhup.hook';
import { CheckLength, emaileRegxp, passwordRegxp, ResponsiveSize } from '../../utils/utils';
import CusLoader from '../../components/CustomLoader';
import CusModal from '../../components/CusModal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SingUp = props => {

  const lable = props.route.params.langues;
  const navigationType = props.route.params.naviGtaionType;
  const { onPress,
    setEmail,
    setPassword,
    setFirstName,
    setConPassword,
    setNumber,
    setLastName,
    setModalShow,
    loader,
    modalShow,
    errorText,
    exampal,
    number,
    email,
    password,
    firstName,
    lastName,
    conPassword,
    ErrorMwssage
  } = useSingUpHook({ lable, navigationType });

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={styles.mainView}>
      <View style={styles.headerView}>
        <Onbordingheader />
      </View>
      <View style={styles.container}>
        <Text style={styles.createYouraccont}>{lable?.CreateyourAccount}</Text>
        <View style={styles.line} />
        <View style={styles.containerView}>
          <TextFildCus
            onChange={setFirstName}
            icon={ICON.usersecret}
            text={lable?.Enterfirstname}
            modalShow={modalShow}
            errorText={
              !CheckLength(firstName) &&
              ErrorMwssage?.Enterfirstname
            }
          />
          <View style={styles.devider} />
          <TextFildCus
            onChange={setLastName}
            icon={ICON.usersecret}
            text={lable?.Enteryourlastname}
            errorText={
              !CheckLength(lastName) &&
              ErrorMwssage?.Enterlastname
            }
            modalShow={modalShow}
          />

          <View style={styles.devider} />

          <TextFildCus
            onChange={setEmail}
            icon={ICON.emailIcon}
            text={lable?.Enteryouremail}
            errorText={
              !CheckLength(email) ?
                ErrorMwssage?.Enteremailaddress :
                !emaileRegxp.test(email) &&
                ErrorMwssage?.Invalidemailaddress
            }
            modalShow={modalShow}


          />

          <View style={styles.devider} />
          <TextFildCus
            number={true}
            onChange={setNumber}
            countryText={"+966"}
            icon={ICON.phoneIcon}
            value={number}
            text={lable?.Entermobilenumber}
            errorText={
              number?.length !== 9 &&
              ErrorMwssage?.Numbercontainsmustbe9digits
            }
            modalShow={modalShow}
          />
          <View style={styles.devider} />
          <TextFildCus
            onChange={setPassword}
            password={true}
            icon={ICON.lockIcon}
            text={lable?.Enteryourpassword}
            errorText={
              !CheckLength(password) ?
                ErrorMwssage?.Enterpassword :
                !passwordRegxp.test(password) &&
                ErrorMwssage?.Invalidpassword
            }
            modalShow={modalShow}
          />

          <View style={styles.devider} />
          <TextFildCus
            onChange={setConPassword}
            password={true}
            icon={ICON.lockIcon}
            text={lable?.confirmpassword}
            errorText={
              password !== conPassword &&
              ErrorMwssage?.Passwordandconfirmpasswordmismatch
            }
            modalShow={modalShow}


          />
        </View>

        <View style={styles.devider} />
        <View style={styles.buttonView}>
          <Button onPress={onPress} text={lable?.Submit} />
        </View>
      </View>
      {loader &&
        <View style={styles.loadder}>
          <CusLoader />
        </View>}

      {/* <Modal
        animationType='slide'
        transparent={true}
        visible={modalShow}
      >
        <CusModal examapleText={exampal} setModalShow={setModalShow} text={errorText} />
      </Modal> */}
      <View style={{ height: ResponsiveSize(60) }} />
    </KeyboardAwareScrollView>
  );
};

export default SingUp;
