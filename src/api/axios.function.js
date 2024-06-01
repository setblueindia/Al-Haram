import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ASYNCSTORAGE, NUMBER } from "../constants/constants";


export const POSTFORM = async (url, params) => {

    console.log("==============================")
    console.log({
        URL: url,
        params: params?._parts
    })
    console.log("==============================")

    try {
        const userData = await AsyncStorage.getItem(ASYNCSTORAGE.Userdata)
        const token = JSON.parse(userData)
        authToken = token?.token

        // console.log("TOKON =====> ", authToken)

        const response = await axios({
            method: 'post',
            url: url,
            data: params,
            headers: {
                'Authorization': 'Bearer' + authToken,
                // 'Content-Type': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        });

        return response;
    } catch (error) {
        console.log("ERROR ::::::: ", error)
    }

}


export const POSTFORMGRAPH = async (url, params , lang ) => {


    console.log("==============================")
    console.log({
        URL: url,
        params: params
    })
    console.log("==============================")

    try {
        const userData = await AsyncStorage.getItem(ASYNCSTORAGE.Userdata)
        const token = JSON.parse(userData)
        authToken = token?.token

        const response = await axios({
            method: 'post',
            url: url,
            data:{ query: params  , variables:null},
            headers: {
                'Authorization': 'Bearer' + authToken,
                'Content-Type': 'application/json',
                'Store' : lang == NUMBER.num1 ? "default" : "arabic"

            }
        });

        return response;
    } catch (error) {
        console.log("ERROR ::::::: ", error)
    }

}

