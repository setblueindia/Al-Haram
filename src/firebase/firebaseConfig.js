import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Platform } from 'react-native';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
      webClientId:
      "382026286760-gd40r8prv9gpfhk844hdj8ij7iobr27m.apps.googleusercontent.com",
      offlineAccess: true,
    });

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const userInfo = await GoogleSignin.signIn();
    console.log("User Information :::::::::::: " , userInfo )
    const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
