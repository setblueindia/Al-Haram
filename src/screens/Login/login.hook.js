import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ASYNCSTORAGE, NAVIGATION, NUMBER } from '../../constants/constants';
import { Ar, En } from '../../constants/localization';
import { useDispatch, useSelector } from 'react-redux';
import { ExpireToken, useSingUp, userLogIn, userLogInWithNumber } from '../../api/axios.api';
import { SHOWTOTS, emaileRegxp, passwordRegxp } from '../../utils/utils';
import { addUserData } from '../../redux/Slices/UserData.slice';
import { EmailToLocalStorage, PasswordToLocalStorage, setUserData } from '../../utils/asyncStorage';
import { signInWithGoogle } from '../../firebase/firebaseConfig';
import { Alert } from 'react-native';
import { appleAuth } from '@invertase/react-native-apple-authentication';


const useLoginHook = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorText, setErrorText] = useState('')
  const [loader, setLoader] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [whiteEmail, setWithEmail] = useState(true);
  const [langues, setLangues] = useState();
  const [checkBox, setCheckBox] = useState(false)
  const [moNumber, setMobailNumber] = useState();
  const [rememberMe, setRembemberMe] = useState();


  const navigation = useNavigation();
  const lang = useSelector(state => state?.lang);
  const dispatch = useDispatch()

  useEffect(() => {
    getLang();
  }, [lang]);

  useEffect(() => {
    Rembemberme()
  }, [])

  const getLang = async () => {
    const lable = lang.data == NUMBER?.num0 ? Ar : En
    setLangues(lable)
  };

  const emailLogin = async () => {
    setLoader(true)
    const userEmail = email.toLowerCase()
    const formData = new FormData();
    formData.append('username', userEmail);
    formData.append('password', password);
    formData.append('store_id', lang?.data);
    const response = await userLogIn(formData)

    if (response?.data?.status == NUMBER?.num1) {
      const loginStatus = response?.data?.data?.quote_id?.data?.login_status
      if (loginStatus == "0") {
        const fromdata = new FormData
        try {
          const result = await ExpireToken(fromdata)
          console.log("EXPIRE TOKEN ::::::::::::::: " , result)
          setLoader(false)
        } catch (error) {
          setLoader(false)
          console.log("Errorrr=====> ", error)
        }
      }
        setUserData(response?.data?.data)
        dispatch(addUserData(response?.data?.data))
        navigation.navigate(NAVIGATION.DrawerNavigation)
        RemoveRembember()
        setLoader(false)
    } else {
      setLoader(false)
      setShowModal(true)
      setErrorText(response?.data?.message)
      console.log("Response error =====> ", response?.data)
    }
  }
  const useLoginWithEmail = () => {
    if (!email) {
      setErrorText(langues?.Enteremailaddress)
      setShowModal(true)
    }
    else if (!emaileRegxp.test(email)) {
      setErrorText(langues?.Invalidemailaddress)
      setShowModal(true)
    }
    else if (!password) {
      setErrorText(langues?.Enterpassword)
      setShowModal(true)
    }
    // else if (!passwordRegxp.test(password)) {
    //   setShowModal(true)
    //   setErrorText(langues?.Invalidpassword)
    // }
    else {
      emailLogin()
    }
  }
  const mobailLogin = async () => {
    setLoader(true)

    const formData = new FormData();

    formData.append('mobile', '+966' + moNumber);
    formData.append('otptype', "login");
    formData.append('store_id', lang?.data);

    const response = await userLogInWithNumber(formData)
    if (response?.data?.status == NUMBER.num1) {
      setLoader(false)
      console.log("OTP ====> ", response?.data?.otp)
      navigation.navigate(NAVIGATION.OTPScreen, { lable: langues, mobileNo: moNumber })
    } else {
      setLoader(false)
      setShowModal(true)
      setErrorText(response?.data?.message)
      console.log("Response error =====> ", response?.data)
    }
  }

  const useLoginWithNumber = () => {
    if (moNumber.length != 9) {
      setShowModal(true)
      setErrorText(langues?.Invalidnumber)
    } else {
      mobailLogin()
    }

  }

  const onPress = async () => {
    whiteEmail ? useLoginWithEmail() : useLoginWithNumber();
  };

  const SingUpScreen = () => {
    navigation.navigate(NAVIGATION.SinupSceen, { langues: langues });
  };

  const ForgetPassword = () => {
    navigation.navigate(NAVIGATION.ForgetPasswor, { langues: langues });
  }

  const Rembemberme = async () => {
    const getEmail = await AsyncStorage.getItem(ASYNCSTORAGE.Email)
    const getPassword = await AsyncStorage.getItem(ASYNCSTORAGE.Password)
    getEmail && setEmail(getEmail)
    getPassword && setPassword(getPassword)
    setRembemberMe({ EMAIL: getEmail, PASSWORD: getPassword })
  }

  const RemoveRembember = () => {
    if (checkBox) {
      EmailToLocalStorage(email)
      PasswordToLocalStorage(password)
    } else {
      EmailToLocalStorage("")
      PasswordToLocalStorage("")
    }

  }

  const handleGoogleSignIn = async () => {

    try {

      const userCredential = await signInWithGoogle();

      // console.log("userCredential ::::::: " , userCredential)
      
      const regex = /^[A-Za-z0-9 ]*$/
      const fullName = userCredential?.user?.displayName
      const mail = userCredential?.user?.email
      const uid = userCredential?.user?.uid
      const nameParts = fullName?.split(' ');
      const firstName = nameParts[0];
      const lastnameText = nameParts?.slice(1)?.join(' '); 
      const testLastName = regex.test(lastnameText);
      const lastName = testLastName ? lastName : " "

       SINUP(mail , firstName , lastName , uid , type = "google")


    } catch (error) {
      console.error('Error signing in with Google:', error.code, error.message, error);
      Alert.alert('Error', `Error Code: ${error.code}\nMessage: ${error.message}`);
    }
  }


  const SINUP = async (mail , firstName , lastName , uid , type) => {
    const fromdata = new FormData()
    setLoader(true)

    // const userEmail = email.toLowerCase()
    const formData = new FormData();
    formData.append('firstname', firstName ? firstName : " ") ;
    formData.append('lastname', lastName ? lastName : "");
    formData.append('email', mail ?  mail : mail);
    formData.append('otptype', type);
    formData.append('store_id', lang?.data);
    formData.append('auth', uid ? uid : " ");

    const response = await useSingUp(formData)
    console.log("::::::::::::" , response?.data)
    if (response?.data?.status == NUMBER.num1) {
      const result = await ExpireToken(fromdata)
      console.log("TOKEN EXPRIE API RES ::::::: " , result)
      navigation.navigate(NAVIGATION.DrawerNavigation)
      dispatch(addUserData(response?.data?.data))
      setUserData(response?.data?.data)
      setLoader(false)
    } else {
      console.log("Singup Respones error ::::::; ==========> ", response)
      setShowModal(true)
      setErrorText(response?.data?.message)
      setLoader(false)
    }
  }
  async function onAppleButtonPress() {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      // Note: it appears putting FULL_NAME first is important, see issue #293
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });
 
    console.log("All Data :::::::: " , appleAuthRequestResponse)
  const mail = appleAuthRequestResponse?.email
  const uid = appleAuthRequestResponse?.authorizationCode
  const firstName = appleAuthRequestResponse?.fullName?.givenName
  const lastName = appleAuthRequestResponse?.fullName?.familyName

  console.log("APPLE DATA email  ::::::::" , {
    mail : mail,
    uid : uid ,
    firstName : firstName,
    lastName : lastName
  }) 
  SINUP(mail , firstName , lastName , uid , type = "apple")
  }

  

  return {
    whiteEmail,
    langues,
    lang,
    loader,
    showModal,
    errorText,
    checkBox,
    rememberMe,
    setRembemberMe,
    setEmail,
    setPassword,
    setWithEmail,
    onPress,
    SingUpScreen,
    setShowModal,
    ForgetPassword,
    setMobailNumber,
    setCheckBox,
    handleGoogleSignIn,
    onAppleButtonPress


  };
};

export default useLoginHook;
