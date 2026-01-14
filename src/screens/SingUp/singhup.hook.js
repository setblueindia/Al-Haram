import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION, NUMBER } from '../../constants/constants';
import { emaileRegxp, passwordRegxp } from '../../utils/utils';
import { useSingUp } from '../../api/axios.api';
import { useSelector } from 'react-redux';
import { types } from '@babel/core';

const useSingUpHook = ({ lable, navigationType }) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [conPassword, setConPassword] = useState()
  const [number, setNumber] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [modalShow, setModalShow] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [exampal, setExample] = useState('')
  const [loader, setLoader] = useState(false)
  const navigation = useNavigation();
  const langNumber = useSelector(stast => stast.lang)


  const ErrorMwssage = {
    Enterfirstname: lable?.Enterfirstname,
    Enterlastname: lable?.Enterlastname,
    Enteremailaddress: lable?.Enteremailaddress,
    Invalidemailaddress: lable?.Invalidemailaddress,
    Numbercontainsmustbe9digits: lable?.Numbercontainsmustbe9digits,
    Enterpassword: lable?.Enterpassword,
    Invalidpassword: lable?.Invalidpassword + " " + lable?.EXPassword,
    Passwordandconfirmpasswordmismatch: lable?.Passwordandconfirmpasswordmismatch
  }



  const SINUP = async () => {
    setLoader(true)

    const userEmail = email.toLowerCase()
    const formData = new FormData();
    formData.append('mobile', '+966' + number);
    formData.append('firstname', firstName);
    formData.append('lastname', lastName);
    formData.append('email', userEmail);
    formData.append('password', password);
    formData.append('otptype', 'register');
    formData.append('store_id', langNumber?.data);




    const response = await useSingUp(formData)
    if (response?.data?.status == NUMBER.num1) {
      // navigation.navigate(NAVIGATION.Login, { lable: lable });
      navigation.replace(NAVIGATION.OTPScreen, { lable: lable, mobileNo: number, otpr: response?.data?.otp, types: "register", navigationType: navigationType })
      setLoader(false)
    } else {
      console.log("Singup Respones error ==========> ", response?.data)
      setModalShow(true)
      setErrorText(response?.data?.message)
      setLoader(false)

    }
  }

  // const onPress = () => {
  //   setModalShow(true)
  //   if (!firstName) {
  //     setErrorText(ErrorMwssage?.Enterfirstname)
  //   }
  //   if (!lastName) {
  //     setErrorText(ErrorMwssage?.Enterlastname)
  //   }
  //   if (!email) {
  //     setErrorText(ErrorMwssage?.Enteremailaddress)
  //   }
  //   if (!emaileRegxp.test(email)) {
  //     setErrorText(ErrorMwssage?.Invalidemailaddress)
  //   }
  //   if (!number || number?.length < 9 || number?.length > 9) {
  //     setErrorText(ErrorMwssage?.Numbercontainsmustbe9digits)
  //   }
  //   if (!password) {
  //     setErrorText(ErrorMwssage?.Enterpassword)
  //   }
  //   if (!passwordRegxp.test(password)) {
  //     setErrorText(ErrorMwssage?.Invalidpassword)
  //     setExample(lable?.EXPassword)

  //   }
  //   if (password !== conPassword) {
  //     setErrorText(lable?.Passwordandconfirmpasswordmismatch)
  //     setExample("")
  //   }
  //   else {
  //     SINUP()
  //     setExample("")
  //   }

  // };


  const onPress = () => {
    setModalShow(true);

    const isValid =
      firstName &&
      lastName &&
      email &&
      emaileRegxp.test(email) &&
      number &&
      number.length === 9 &&
      password &&
      passwordRegxp.test(password) &&
      password === conPassword;

    if (isValid) {
      SINUP();
      setExample("");
    }
  };


  return {
    onPress,
    setEmail,
    setPassword,
    setNumber,
    setFirstName,
    setLastName,
    setConPassword,
    setModalShow,
    errorText,
    loader,
    modalShow,
    exampal,
    ErrorMwssage,
    email,
    password,
    firstName,
    lastName,
    conPassword,
    number,
  };
};

export default useSingUpHook;



