import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ASYNCSTORAGE, NUMBER } from "../constants/constants";


export const POSTFORM = async (url, params) => {

    console.log("==============================")
    console.log({
        URL: url,
        params: params ? params?._parts : ""
    })
    console.log("==============================")

    try {
        const userData = await AsyncStorage.getItem(ASYNCSTORAGE.Userdata)
        const token = JSON.parse(userData)
        authToken = token?.token

        const response = await axios({
            method: 'post',
            url: url,
            data: params,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response;
    } catch (error) {
        if (error.response) {
            console.log('Response Error:', error.response.data);
            return error
        } else if (error.request) {
            console.log('Request Error:', error.request);
            return error
        } else {
            console.log('Other Error:', error.message);
            return error
        }
        
    }

}

export const POSTFORM2 = async (url, params) => {

    console.log("==============================")
    console.log({
        URL: url,
        params: params ? params?._parts : ""
    })
    console.log("==============================")

    try {
        const userData = await AsyncStorage.getItem(ASYNCSTORAGE.Userdata)
        const token = JSON.parse(userData)
        authToken = token?.token

        const response = await axios({
            method: 'post',
            url: url,
            data: params,
            headers: {
                'Authorization': 'Bearer ' + authToken,
                'Content-Type': 'multipart/form-data'
            }
        });

        return response;
    } catch (error) {
        if (error.response) {
            console.log('Response Error:', error.response.data);
        } else if (error.request) {
            console.log('Request Error:', error.request);
        } else {
            console.log('Other Error:', error.message);
        }
        
    }

}

export const POSTJSON  = async (url , params) =>{ 

    console.log(" =======> ", {
        url : url,
        params : params
    })
    
    try {
        const response = await axios.post(url, params);
        return response
    } catch (error) { 
        console.log("MAIN ERROR IN JSON ::::::: " , error)
    }
}

export const POSTFORMGRAPH = async (url, params, lang) => {
    console.log("==============================")
    console.log({
        URL: url,
        params: params,
        lang: lang
    })
    console.log("==============================")
    try {
        const userData = await AsyncStorage.getItem(ASYNCSTORAGE.Userdata)
        const token = JSON.parse(userData)
        authToken = token?.token

        const response = await axios({
            method: 'post',
            url: url,
            data: { query: params, variables: null },
            headers: {
                'Authorization': 'Bearer' + authToken,
                'Content-Type': 'application/json',
                'Store': lang == NUMBER.num1 ? "default" : "arabic"

            }
        });

        return response;
    } catch (error) {
        console.log("ERROR ::::::: ", error)
    }

}



