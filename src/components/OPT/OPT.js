import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {styles} from './Otp.style';
import { useSelector } from 'react-redux';
import { NUMBER } from '../../constants/constants';
import { ALINE } from '../../constants/style';


const OTP = ({setMainOTP}) => {

const lang = useSelector(state => state.lang)



const [text1, setText1] = useState()
const [text2, setText2] = useState()
const [text3, setText3] = useState()
const [text4, setText4] = useState()

 const opt = text1 + text2 + text3 + text4 



  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();

  useEffect(()=>{
    setMainOTP(opt)
  }, [opt])


  return (
    <View style={[styles.mainView , lang.data == NUMBER.num0 &&{flexDirection:ALINE.rowreverse }]}>
      <TextInput
        ref={et1}
        style={[styles.otpView, lang.data == NUMBER.num1 && {marginLeft: 0}]}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={text =>{
            setText1(text)
            if(text.length >= 1){
                et2.current.focus()
            }
        }}
      />
      <TextInput
        ref={et2}
        style={[styles.otpView  ]}
        keyboardType="numeric"
        maxLength={1} 
        onChangeText={text =>{
            setText2(text)
            if(text.length >= 1){
                et3.current.focus()
            }else{
                et1.current.focus()
            }
        }}
      />
      <TextInput
        ref={et3}
        style={[styles.otpView ]}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={text =>{
            setText3(text)
            if(text.length >= 1){
                et4.current.focus()
            }else{
                et2.current.focus()
            }
        }}
      />
      <TextInput
        ref={et4}
        style={[styles.otpView ,  lang.data == NUMBER.num0 &&{marginLeft:0} ]}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={text =>{
            setText4(text)
            if(text.length < 1){
                et3.current.focus()
            }
            
        }}
      />
    
    </View>
  );
};

export default OTP;
