import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './singup.style';
import Onbordingheader from '../../components/OnbordingHeader';
import { ICON } from '../../constants/constants';
import TextFildCus from '../../components/TextFildCus';
import Button from '../../components/Button';
import useSingUpHook from './singhup.hook';
import { ResponsiveSize } from '../../utils/utils';
import CusLoader from '../../components/CustomLoader';
import CusModal from '../../components/CusModal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SingUp = props => {

  const lable = props.route.params.langues;
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
    exampal
  } = useSingUpHook({ lable });

  return (
    <KeyboardAwareScrollView style={styles.mainView}>
      <View style={styles.headerView}>
        <Onbordingheader />
      </View>
      <View style={styles.container}>
        <Text style={styles.createYouraccont}>{lable?.CreateyourAccount}</Text>
        <View style={styles.line} />

        <View style={styles.containerView}>
          <TextFildCus onChange={setFirstName} icon={ICON.usersecret} text={lable?.Enterfirstname} />
          <View style={styles.devider} />
          <TextFildCus onChange={setLastName} icon={ICON.usersecret} text={lable?.Enteryourlastname} />
          <View style={styles.devider} />
          <TextFildCus onChange={setEmail} icon={ICON.emailIcon} text={lable?.Enteryouremail} />
          <View style={styles.devider} />
          <TextFildCus number={true} onChange={setNumber}   countryText={"+966"} icon={ICON.phoneIcon} text={lable?.Entermobilenumber} />
          <View style={styles.devider} />
          <TextFildCus onChange={setPassword} password={true} icon={ICON.lockIcon} text={lable?.Enteryourpassword} />
          <View style={styles.devider} />
          <TextFildCus onChange={setConPassword} password={true}  icon={ICON.lockIcon} text={lable?.confirmpassword} />
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

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalShow}
      >
        <CusModal examapleText={exampal} setModalShow={setModalShow} text={errorText} />
      </Modal>
      <View style={{ height: ResponsiveSize(60) }} />
    </KeyboardAwareScrollView>
  );
};

export default SingUp;
