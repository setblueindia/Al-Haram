// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useRef, useState} from 'react';
// import {TextInput} from 'react-native-gesture-handler';
// import {styles} from './Otp.style';
// import { useSelector } from 'react-redux';
// import { NUMBER } from '../../constants/constants';
// import { ALINE } from '../../constants/style';

// const OTP = ({setMainOTP}) => {
// const lang = useSelector(state => state.lang)

// const [text1, setText1] = useState()
// const [text2, setText2] = useState()
// const [text3, setText3] = useState()
// const [text4, setText4] = useState()

//  const opt = text1 + text2 + text3 + text4 

//   const et1 = useRef();
//   const et2 = useRef();
//   const et3 = useRef();
//   const et4 = useRef();

//   useEffect(()=>{
//     setMainOTP(opt)
//   }, [opt])

//   return (
//     <View style={[styles.mainView , 
//     // lang.data == NUMBER.num0 &&{flexDirection:ALINE.rowreverse }
//     ]}>
//       <TextInput
//         ref={et1}
//         style={[styles.otpView, 
//           lang.data == NUMBER.num1 && {marginLeft: 0}
//         ]}
//         keyboardType="numeric"
//         maxLength={1}
//         textContentType='oneTimeCode'
//         onChangeText={text =>{
//             setText1(text)
//             if(text.length >= 1){
//                 et2.current.focus()
//             }
//         }}
//       />
//       <TextInput
//         ref={et2}
//         style={[styles.otpView  ]}
//         keyboardType="numeric"
//         maxLength={1} 
//         textContentType='oneTimeCode'
//         onChangeText={text =>{
//             setText2(text)
//             if(text.length >= 1){
//                 et3.current.focus()
//             }else{
//                 et1.current.focus()
//             }
//         }}
//       />
//       <TextInput
//         ref={et3}
//         style={[styles.otpView ]}
//         keyboardType="numeric"
//         maxLength={1}
//         textContentType='oneTimeCode'
//         onChangeText={text =>{
//             setText3(text)
//             if(text.length >= 1){
//                 et4.current.focus()
//             }else{
//                 et2.current.focus()
//             }
//         }}
//       />
//       <TextInput
//         ref={et4}
//         style={[styles.otpView ,
//             // lang.data == NUMBER.num0 &&{marginLeft:0}
//            ]}
//         keyboardType="numeric"
//         maxLength={1}
//         textContentType='oneTimeCode'
//         onChangeText={text =>{
//             setText4(text)
//             if(text.length < 1){
//                 et3.current.focus()
//             }

//         }}
//       />

//     </View>
//   );
// };

// export default OTP;



// import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
// import React, {useEffect, useState, useRef} from 'react';
// import { useSelector } from 'react-redux';
// import { NUMBER } from '../../constants/constants';
// import { ALINE } from '../../constants/style';

// const OTP = ({ setMainOTP }) => {
//   const lang = useSelector((state) => state.lang);

//   const [otp, setOtp] = useState('');
//   const [isOtpComplete, setIsOtpComplete] = useState(false);

//   const textInputRef = useRef(null);

//   useEffect(() => {
//     setMainOTP(otp);
//     if (otp.length === 4) {
//       setIsOtpComplete(true);
//     } else {
//       setIsOtpComplete(false);
//     }
//   }, [otp]);

//   const otpArray = otp.split('');

//   return (
//     <View
//       style={[
//         styles.mainView,
//         lang.data == NUMBER.num0 && {flexDirection: ALINE.rowreverse},
//       ]}
//     >
//       <View style={styles.otpContainer}>
//         {/* Hidden TextInput for OTP autofill */}
//         <TextInput
//           ref={textInputRef}
//           style={styles.hiddenTextInput}
//           keyboardType="numeric"
//           maxLength={4} // Set OTP length
//           textContentType="oneTimeCode" // Enable iOS autofill
//           value={otp}
//           onChangeText={(text) => setOtp(text)} // Update OTP state
//         />

//         {Array(4)
//           .fill('')
//           .map((_, index) => (
//             <TouchableOpacity key={index} onPress={() => textInputRef.current.focus()}>
//               <View style={styles.otpBox}>
//                 <Text style={styles.otpText}>{otpArray[index] || ''}</Text>
//               </View>
//             </TouchableOpacity>
//           ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainView: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 20,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//   },
//   otpBox: {
//     width: 50,
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//     borderRadius: 5,
//   },
//   otpText: {
//     fontSize: 24,
//     textAlign: 'center',
//   },
//   hiddenTextInput: {
//     position: 'absolute',
//     opacity: 0,
//     width: 1,
//     height: 1,
//   },
// });

// export default OTP;

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NUMBER } from '../../constants/constants';
import { ALINE, COLOR } from '../../constants/style';
import { ResponsiveSize } from '../../utils/utils';


const OTP = ({ setMainOTP, otpr }) => {

  const lang = useSelector((state) => state.lang);

  const [otp, setOtp] = useState('');
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null); // Track focused index
  const textInputRef = useRef(null);

  useEffect(() => {
    setMainOTP(otp);

    // Check if OTP is complete (4 digits)
    if (otp.length === 4) {
      setIsOtpComplete(true);
    } else {
      setIsOtpComplete(false);
    }
  }, [otp]);


  const otpArray = otp.split('');

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(null);
  };

  return (
    <View
      style={[
        styles.mainView,
        lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse },
      ]}
    >
      <View style={styles.otpContainer}>
        <TextInput
          ref={textInputRef}
          style={styles.hiddenTextInput}
          keyboardType="numeric"
          maxLength={4}
          textContentType="oneTimeCode"
          autoComplete="sms-otp"
          value={otp}
          onChangeText={(text) => setOtp(text)}
          onFocus={() => handleFocus(-1)}
          onBlur={handleBlur}
        />

        {Array(4)
          .fill('')
          .map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleFocus(index);
                textInputRef.current.focus();
              }}
              onBlur={handleBlur}
              style={[
                styles.otpBox,
                focusedIndex === index && styles.focusedOtpBox,
                otpArray[index] && styles.filledOtpBox
              ]}
            >
              <Text style={styles.otpText}>{otpArray[index] || ''}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.center,
    marginVertical: ResponsiveSize(20),
  },
  otpContainer: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
    width: '70%',
  },
  otpBox: {
    width: ResponsiveSize(70),
    height: ResponsiveSize(70),
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: ALINE.center,
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  otpText: {
    fontSize: ResponsiveSize(30),
    textAlign: 'center',
    color: COLOR.black
  },
  hiddenTextInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },
  focusedOtpBox: {
    borderColor: COLOR.liteGray, // Change to the color you want for focus
  },
  filledOtpBox: {
    borderColor: COLOR.primaray, // Change to the color you want for filled box
  },
});

export default OTP;


