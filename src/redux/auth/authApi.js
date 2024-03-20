import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export const BASE_URL = 'https://alharamstores.com/rest/V1/api/';

export const loginAPI = async (email,password) => {
  console.log("email",email);
  try {
    const store_id =  await AsyncStorage.getItem('consoleValue');
    const formData=new FormData();
    formData.append("username", email);
    formData.append("password", password);
    formData.append("store_id", store_id);
    const response = await axios.post(`${BASE_URL}loginUser`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const responseData = response.data;
    console.log("response data", responseData);
if (responseData && responseData.data && responseData.data) {
    const {email,token, firstname,lastname,id,mobile}= responseData.data;
  console.log("token-----",token);
  console.log("email1-----",email);
  console.log("firstname1-----",firstname);
  console.log("lastname1-----",lastname);
  console.log("id1-----",id);
  console.log("mobile1-----",mobile);
  await AsyncStorage.setItem('token', token);
  await AsyncStorage.setItem('userData', JSON.stringify({email}));
  await AsyncStorage.setItem('userData', JSON.stringify({id}));
  await AsyncStorage.setItem('userData', JSON.stringify({ email, firstname,lastname,id,mobile})); 
  console.log("email-----",email);
  console.log("firstname-----",firstname);
  console.log("lastname-----",lastname);
  console.log("id-----",id);
  console.log("mobile-----",mobile);
return { 
  user:email,
   store_id:store_id,
  success:true }; 
} else {
  console.error("error -",responseData);
}

} catch (error) {
console.error("Login error", error);
throw error;
}
};
export const registerAPI = async (firstname,lastname,email,password,otptype,mobile) => {
  try {
    const store_id =  await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append('mobile',mobile);
    formData.append('firstname',firstname);
    formData.append('lastname', lastname);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('otptype', otptype);
    formData.append('store_id',store_id);
    console.log("form data:", formData);
    const response = await fetch(`${BASE_URL}mobileOtpRegistrationMethod`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }
    const responseData = await response.json();
    console.log("Registration Response:", responseData);
    console.log("full responce:", responseData.data); 
    return responseData;
  } catch (error) {
    throw error;
  }
};
export const MoblieLoginAPI = async (mobile) => {
  try {
    const store_id =  await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append('mobile',mobile);
    formData.append('otptype', 'login');
    formData.append('store_id',store_id);
    console.log("form data:", formData);
    const response = await fetch(`${BASE_URL}mobileOtpRegistrationMethod`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }
    const responseData = await response.json();
    console.log("MoblieLogin Response:", responseData);
    console.log("Moblie responce:", responseData.data); 
    return responseData;
  } catch (error) {
    console.log("MoblieLogin error:", error);
    throw error;
  }
};
export const Otpverify = async (mobile, otpcode, otptype) => {
  console.log("mobile::::::", mobile);
  try {
    const formData = new FormData();
    formData.append("mobilenumber", mobile);
    formData.append("otptype", otptype); 
    formData.append("otpcode", otpcode);
    console.log("form data:;;;", formData);
    const response = await axios.post(`${BASE_URL}mobileOtpVerifyCreateMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });
    console.log("Server Response:", response);
    const responseData = response.data || {}; 
    console.log("OTP DATA:", responseData);
    if (responseData && responseData.data && responseData.data) {
      const {email,token, firstname,lastname,id,mobile}= responseData.data;
    console.log("token-----",token);
    console.log("email1-----",email);
    console.log("firstname1-----",firstname);
    console.log("lastname1-----",lastname);
    console.log("id1-----",id);
    console.log("mobile1-----",mobile);
    await AsyncStorage.setItem('token', token);
  
    await AsyncStorage.setItem('userData', JSON.stringify({email}));
    await AsyncStorage.setItem('userData', JSON.stringify({ email, firstname,lastname,id,mobile})); 
    console.log("email-----",email);
    console.log("firstname-----",firstname);
    console.log("lastname-----",lastname);
    console.log("id-----",id);
    console.log("mobile-----",mobile);
  return { 
    user:email,
    success:true }; 
  } else {
    console.error("error -",responseData);
  }
    // if (responseData.status === 1) {
    //   const userData = responseData.data || {};

    //   // Store user data and token in AsyncStorage
    //   await AsyncStorage.setItem('email', userData.email);
    //   await AsyncStorage.setItem('firstname', userData.firstname);
    //   await AsyncStorage.setItem('lastname', userData.lastname);
    //   await AsyncStorage.setItem('id', userData.id);
    //   await AsyncStorage.setItem('mobile', mobile);

    //   // Log the stored user data
    //   console.log("Stored email:", userData.email);
    //   console.log("Stored First Name:", userData.firstname);
    //   console.log("Stored Last Name:", userData.lastname);
    //   console.log("Stored ID:", userData.id);
    //   console.log("Stored Mobile:", mobile);

    //   // Return the response for further processing if needed
    //   return responseData; 
    // } else {
    //   // Log or handle the error message if the status is not 1
    //   console.error("Error:", responseData.message);
    //   throw new Error(responseData.message || 'OTP verification failed');
    // }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const Resetpass = async (email) => {
  try {
    const store_id =  await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append("email", email);
    formData.append("store_id", store_id);

    const response = await axios.post(`${BASE_URL}resetpass`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });

    return response.data; // Return the response data Profile update

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const Profileupdate = async (firstname,lastname,customer_id) => {
  try {
    const store_id =  await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("customer_id", customer_id);
    formData.append("store_id", store_id);
    const response = await axios.post(`${BASE_URL}customerProfileUpdateMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const Changepassw = async (customer_id,new_password,password) => {
  try {
    const store_id =  await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append("firstname", customer_id);
    formData.append("lastname", password);
    formData.append("customer_id", new_password);
    formData.append("store_id", store_id);

    const response = await axios.post(`${BASE_URL}customerProfileUpdateMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });

    return response.data; // Return the response data Profile update

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};