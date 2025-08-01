import { getAppleAuthToken, updateEmailId } from "../api/axios.api"


export const UpdateEmailID = async (email, data) => {

    const AuthToke = data?.token

    const params = {
        "customer": {
            "email": email,
            "firstname": data?.firstname,
            "lastname": data?.lastname,
            "website_id": 1,
            "id": data?.id
        }
    }

    try {
        const response = await updateEmailId(params, AuthToke)
        return response
    } catch (error) {
        console.log("UPDATE EMAIL ID EROOR:::::", error)
    }
}


export const GetAppleAuthToken = async (id) => {

    const qurry =
        ` {
    customerAuthTokenById(customer_id : ${id}){
        success
        auth_token
        message
    }
} `

    try {
        const response = await getAppleAuthToken(qurry, 1)
        return response
    } catch (error) {
        console.log("APPLE AUTH TOKEN ERROR ::::::: ", error)
        return error
    }

}

