import AsyncStorage from "@react-native-async-storage/async-storage"
import { ASYNCSTORAGE } from "../constants/constants"

export const setUserData = async (data) => {
    await AsyncStorage.setItem(ASYNCSTORAGE?.Userdata, JSON.stringify(data))
}

export const EmailToLocalStorage = async (data) => {
    await AsyncStorage.setItem(ASYNCSTORAGE?.Email, data)
}
export const PasswordToLocalStorage = async (data) => {
    await AsyncStorage.setItem(ASYNCSTORAGE?.Password, data)
}

export const WallateAmount = async (data) => {
    await AsyncStorage.setItem(ASYNCSTORAGE?.walletAmount, data)
}

export const FCMTokenStor = async (data) => {
    await AsyncStorage.setItem(ASYNCSTORAGE?.FCMToken, data)
}