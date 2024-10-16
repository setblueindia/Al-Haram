import { View, Text, Modal } from 'react-native';
import React from 'react';
import { styles } from './otp.style';
import Onbordingheader from '../../components/OnbordingHeader';
import { OTPStr } from '../../constants/constants';
import OTP from '../../components/OPT/OPT';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import useOPTHook from './otp.hook';
import CusLoader from '../../components/CustomLoader';
import CusModal from '../../components/CusModal';

const OtpScreen = (props) => {
  const Mo = props?.route?.params?.mobileNo
  const otpr = props?.route?.params?.otpr
  const { setMainOTP, onPress, loading, showModal, errorText, setShowModal , language } = useOPTHook( { number: Mo , otpr : otpr })
  const lable = props?.route?.params?.lable

  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <Onbordingheader />
      </View>

      <View style={styles.containerView}>
        <View style={styles.numberView}>
          <View style={styles.numberView}>
          <Text style={styles.verificationText}>
              {language?.OPTVerification}
            </Text>
            <Text style={styles.numberText}>{Mo}</Text>
           
          </View>
          <View style={styles.line} />
          <View style={styles.otpView}>
            <OTP setMainOTP={setMainOTP} otpr={otpr}/>
          </View>
          {/* <View style={styles.verificationView}>
            <Text style={styles.verificationText}>
              {lable?.Verificationhasbeensendto}
            </Text>
            <Text style={styles.verificationText}>+9978855621</Text>
          </View> */}

          <TouchableOpacity style={styles.resendView}>
            <Text style={styles.resendText}>{lable?.Resend}</Text>
          </TouchableOpacity>

          <View style={styles.buttonView}>
            <Button onPress={() => { onPress() }} text={lable?.Submit} />
          </View>

        </View>
      </View>


      {loading &&
        <View style={{ position: 'absolute', height: "100%", width: "100%" }}>
          <CusLoader />
        </View>

      }

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

export default OtpScreen;
