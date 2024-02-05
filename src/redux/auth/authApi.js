import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const BASE_URL = 'https://alharamstores.com/rest/V1/api/';

export const loginAPI = async (email, password, store_id) => {
  console.log('User:', email);
  console.log('Password:', password);
  console.log('Store_id:', store_id);

  try {
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);
    formData.append('store_id', store_id);
    console.log('Form Data:', formData); // Log the form data

    const response = await axios.post(`${BASE_URL}loginUser`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = response.data;
    console.log('API Response:', data);

    if (data && data.data && data.data) {
      const {email, token} = data.data;
      console.log('Token:', token);

      // Store the token in AsyncStorage
      await AsyncStorage.setItem('userToken', token);
      console.log('Token stored in AsyncStorage:', token);

      // Rest of the user data can be stored if needed
      await AsyncStorage.setItem('userData', JSON.stringify({email, store_id}));

      return {
        user: email,
        store_id: store_id,
        success: true,
      };
    } else {
      console.error('Invalid response structure:--------------', data);
      throw new Error('Invalid response structure=========');
    }
  } catch (error) {
    console.error('Login failed====:', error.message);
    throw new Error('Login failed');
  }
};

export const registerAPI = async userData => {
  try {
    const formData = new FormData();
    formData.append('mobile', userData.mobile);
    formData.append('firstname', userData.firstname);
    formData.append('lastname', userData.lastname);
    formData.append('email', userData.email);
    formData.append('password', userData.password);
    formData.append('otptype', userData.otptype);
    formData.append('store_id', userData.store_id);
    formData.append('auth', userData.auth);
    formData.append('resend', userData.resend);
    console.log('form data:', formData);
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
    return responseData;
  } catch (error) {
    throw error;
  }
};
export const ListDrawerApi = async (store_id) => {
  try {
    const formData = new FormData();
    formData.append("store_id", store_id);

    const response = await axios.post(`${BASE_URL}getCategories`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log("Categories list :", response);  // Log the entire response

    const responseData = response.data;
    console.log("Categories data list:",responseData.data);
    return responseData;
  } catch (error) {
    console.error("Categories error", error);
    throw error;
  }
};


export const Otpverify = async (mobile, otpcode, otptype) => {
  console.log("mobile::::::", mobile);
  try {
    const formData = new FormData();
    formData.append("mobilenumber", mobile);
    formData.append("otptype", otptype || 'login'); // Use 'login' if otptype is not provided
    formData.append("otpcode", otpcode);
    formData.append("oldmobile", "");

    console.log("form data:;;;", formData);

    const response = await axios.post(`${BASE_URL}mobileOtpVerifyCreateMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });

    console.log("Server Response:", response);

    const responseData = response.data || {}; // Ensure responseData is an object

    console.log("OTP DATA:", responseData);

    // Check if status is 1 (success)
    if (responseData.status === 1) {
      const userData = responseData.data || {};

      console.log("Email:", userData.email);
      console.log("First Name:", userData.firstname);
      console.log("Last Name:", userData.lastname);
      console.log("Token:", userData.token);

      return responseData; // Return the response for further processing if needed
    } else {
      // Log or handle the error message if the status is not 1
      console.error("Error:", responseData.message);
      throw new Error(responseData.message || 'OTP verification failed');
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};


