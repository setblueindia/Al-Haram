import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './otp.style';
import Onbordingheader from '../../components/OnbordingHeader';
import {OTPStr} from '../../constants/constants';
import OTP from '../../components/OPT/OPT';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Button';

const OtpScreen = (props) => {
  const lable = props.route.params.lable
  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <Onbordingheader />
      </View>

      <View style={styles.containerView}>
        <View style={styles.numberView}>
          <View style={styles.numberView}>
            <Text style={styles.numberText}>+9978855621</Text>
            <Text style={styles.verificationText}>
              {lable?.OPTVerification}
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.otpView}>
            <OTP />
          </View>
          <View style={styles.verificationView}>
            <Text style={styles.verificationText}>
              {lable?.Verificationhasbeensendto}
            </Text>
            <Text style={styles.verificationText}>+9978855621</Text>
          </View>

          <TouchableOpacity style={styles.resendView}>
            <Text style={styles.resendText}>{lable?.Resend}</Text>
          </TouchableOpacity>

          <View style={styles.buttonView}>
            <Button text={lable?.Submit}/>
          </View>

        </View>
      </View>
    </View>
  );
};

export default OtpScreen;
