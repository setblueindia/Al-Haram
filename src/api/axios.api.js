import { LOGINURL, SINUPURL } from "../constants/axios.url"
import { POSTFORM } from "./axios.function"

export const useSingUp = async (params)  =>{
    const res = await POSTFORM(SINUPURL , params)
    return res
}

export const userLogIn = async (params)  =>{
    const res = await POSTFORM(LOGINURL , params)
    return res
}