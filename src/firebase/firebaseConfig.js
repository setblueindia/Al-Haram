import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Platform } from 'react-native';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
      webClientId:
      "755452500393-bmfnlsr7oj4u5l64hpg4gfoerv2tn0j7.apps.googleusercontent.com",
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
