import { GRAFORL, HOMEURL, LOGINURL, OTPVerification, SINUPURL, UpdateProfileURL } from "../constants/axios.url"
import { POSTFORM, POSTFORMGRAPH } from "./axios.function"

export const useSingUp = async (params) => {
    const res = await POSTFORM(SINUPURL, params)
    return res
}

export const userLogIn = async (params) => {
    const res = await POSTFORM(LOGINURL, params)
    return res
}

export const userLogInWithNumber = async (params) => {
    const res = await POSTFORM(SINUPURL, params)
    return res
}

export const CheckOTP = async (params) => {
    const res = await POSTFORM(OTPVerification, params)
    return res
}

export const HomeApi = async (params) => {
    const res = await POSTFORM(HOMEURL, params)
    return res
}

export const DrowerApi = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}


export const UpdateProfile = async (params) => {
    const res = await POSTFORM(UpdateProfileURL, params)
    return res
}

export const NotificationAIP = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const ReadNotification = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const WalletHistoryAPI = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const SerchAPI = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}