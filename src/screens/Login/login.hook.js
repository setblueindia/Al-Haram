import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { NAVIGATION, NUMBER } from '../../constants/constants';
import { Ar, En } from '../../constants/localization';
import { useDispatch, useSelector } from 'react-redux';
import { userLogIn } from '../../api/axios.api';
import { emaileRegxp, passwordRegxp } from '../../utils/utils';
import { addUserData } from '../../redux/Slices/UserData.slice';
import { setUserData } from '../../utils/asyncStorage';

const useLoginHook = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorText, setErrorText] = useState('')
  const [loader, setLoader] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [whiteEmail, setWithEmail] = useState(true);
  const [langues, setLangues] = useState();
  const navigation = useNavigation();
  const lang = useSelector(state => state?.lang);
  const dispatch = useDispatch()

  useEffect(() => {
    getLang();
  }, [lang]);

  const getLang = async () => {
    const lable = lang.data == '0' ? Ar : En
    setLangues(lable)
  };


  const emailLogin = async () => {
    setLoader(true)
    const userEmail = email.toLowerCase()

    const formData = new FormData();
  
    formData.append('username', userEmail);
    formData.append('password', password);
    formData.append('store_id', lang?.data)

    const response = await userLogIn(formData)

    if (response?.data?.status == NUMBER.num1) {
      setUserData(response?.data?.data)
      dispatch(addUserData(response?.data?.data))
      navigation.navigate(NAVIGATION.HomeScreen)
      setLoader(false)
    } else {
      setLoader(false)
      setShowModal(true)
      setErrorText(response?.data?.message)
      console.log("Response error =====> ", response?.data)
    }
  }

  const useLoginWithEmail = () => {

    if(!email) {
      setErrorText(langues?.Enteremailaddress)
      setShowModal(true)
    }
    else if (!emaileRegxp.test(email)) {
      setErrorText(langues?.Invalidemailaddress)
      setShowModal(true)
    }
   else if(!password) {
      setErrorText(langues?.Enterpassword)
      setShowModal(true)
    }
    else if (!passwordRegxp.test(password)) {
      setShowModal(true)
      setErrorText(langues?.Invalidpassword)
    }
    else {
      emailLogin()
    }
  }

  const onPress = async () => {
    whiteEmail ? useLoginWithEmail() : navigation.navigate(NAVIGATION.OTPScreen, { lable: langues });
  };

  const SingUpScreen = () => {
    navigation.navigate(NAVIGATION.SinupSceen, { langues: langues });
  };

  const ForgetPassword = () =>{
    navigation.navigate(NAVIGATION.ForgetPasswor, { langues: langues });
  }


  return {
    whiteEmail,
    langues,
    lang,
    loader,
    showModal,
    errorText,
    setEmail,
    setPassword,
    setWithEmail,
    onPress,
    SingUpScreen,
    setShowModal,
    ForgetPassword
  };
};

export default useLoginHook;
