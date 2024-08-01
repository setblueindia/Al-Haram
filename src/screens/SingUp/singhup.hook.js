import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION, NUMBER } from '../../constants/constants';
import { emaileRegxp, passwordRegxp } from '../../utils/utils';
import { useSingUp } from '../../api/axios.api';
import { useSelector } from 'react-redux';

const useSingUpHook = ({ lable }) => {

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
      console.log("Singup Respones ==========> ", response?.data)
      navigation.navigate(NAVIGATION.Login, { lable: lable });
      setLoader(false)
    } else {
      console.log("Singup Respones error ==========> ", response?.data)
      setModalShow(true)
      setErrorText(response?.data?.message)
      setLoader(false)

    }
  }

  const onPress = () => {

    if (!firstName) {
      setModalShow(true)
      setErrorText(lable?.Enterfirstname)
    }
    else if (!lastName) {
      setModalShow(true)
      setErrorText(lable?.Enterlastname)
    }
   else if(!email) {
      setErrorText(lable?.Enteremailaddress)
      setModalShow(true)
    }
    else if (!emaileRegxp.test(email)) {
      setModalShow(true)
      setErrorText(lable?.Invalidemailaddress)
    }
    else if (!number || number?.length < 9 || number?.length > 9) {
      setModalShow(true)
      setErrorText(lable?.Invalidnumber)
      setExample(lable?.Numbercontainsmustbe9digits)
    }
    else if(!password) {
      setErrorText(lable?.Enterpassword)
      setModalShow(true)
    }
    else if (!passwordRegxp.test(password)) {
      setModalShow(true)
      setErrorText(lable?.Invalidpassword)
      setExample(lable?.EXPassword)

    }
    else if (password !== conPassword) {
      setModalShow(true)
      setErrorText(lable?.Passwordandconfirmpasswordmismatch)
      setExample("")
    }
    else {
      SINUP()
      setExample("")
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
    exampal
  };
};

export default useSingUpHook;


// const slider = [
//   slider_loop = {

//     title_en: "Latest Products",
//     title_ar: "أحدث المنتجات",
//     key: "latest_products",
//     is_viewAll: 0,
//     view_all_category_id: "",

//     data: [
//       {
//         "id": "75941",
//         "sku": "K05",
//         "name": "Enamel Coated Kettle",
//         "price": 39,
//         "special_price": 0,
//         "image": "https://beta.alharamstores.com/media/catalog/product",
//         "special_offer": "",
//         "is_new_badge": "https://beta.alharamstores.com/media/magiccart/lookbook/n/e/new_en_offer.png"
//       },
//       {
//         "id": "75941",
//         "sku": "K05",
//         "name": "Enamel Coated Kettle",
//         "price": 39,
//         "special_price": 0,
//         "image": "https://beta.alharamstores.com/media/catalog/product",
//         "special_offer": "",
//         "is_new_badge": "https://beta.alharamstores.com/media/magiccart/lookbook/n/e/new_en_offer.png"
//       },

//     ]
//   }

// ]
