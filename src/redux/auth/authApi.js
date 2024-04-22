import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
export const BASE_URL = 'https://alharamstores.com/rest/V1/api/';
export const loginAPI = async (email, password, store_id) => {
  console.log("email", email);
  try {
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);
    formData.append("store_id", store_id);
    const response = await axios.post(`${BASE_URL}loginUser`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Use 'multipart/form-data' for FormData
      },
    });
   
    const responseData = response.data; // Assuming your data is in the response.data property

    console.log("response data", responseData);

    return responseData; // Return the response data

  } catch (error) {
    console.error("Login error", error);
    throw error;
  }
};

// export const loginAPI = async (email,password,store_id) => {
//   console.log("email",email);
//   try {
//     const formData=new FormData();
//     formData.append("username", email);
//     formData.append("password", password);
//     formData.append("store_id", store_id);
//     const response = await axios.post(`${BASE_URL}loginUser`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data', // Use 'multipart/form-data' for FormData
//       },
//     });
   
//     const responseData = response.data; // Assuming your data is in the response.data property

//     console.log("response data", responseData);


// } catch (error) {
// console.error("Login error", error);
// throw error;
// }
// };

// export const loginAPI = async (email,password,store_id,) => {
//   console.log("email",email);
//   try {
//     const formData=new FormData();
//     formData.append("username", email);
//     formData.append("password", password);
//     formData.append("store_id", store_id);
//     const response = await axios.post(`${BASE_URL}loginUser`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data', // Use 'multipart/form-data' for FormData
//       },
//     });
   
//     const responseData = response.data; // Assuming your data is in the response.data property

//     console.log("response data:::", responseData);

// if (responseData && responseData.data && responseData.data) {
//    console.log("login data i:::",responseData.data);
 
  
// return { 
//   user:email,
//    store_id:store_id,
//   success:true,
//   responseData: responseData
//  }; 
// } else {
//   console.error("error -",responseData);
// }

// } catch (error) {
// console.error("Login error", error);
// throw error;
// }
// };
// export const loginAPI = async (email,password) => {
//   console.log("email",email);
//   try {
//     const store_id =  await AsyncStorage.getItem('consoleValue');
//     const formData=new FormData();
//     formData.append("username", email);
//     formData.append("password", password);
//     formData.append("store_id", store_id);
//     const response = await axios.post(`${BASE_URL}loginUser`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     const responseData = response.data;
//     console.log("response data", responseData);
// if (responseData && responseData.data && responseData.data) {
//     const {email,token, firstname,lastname,id,mobile}= responseData.data;
//   console.log("token-----",token);
//   console.log("email1-----",email);
//   console.log("firstname1-----",firstname);
//   console.log("lastname1-----",lastname);
//   console.log("id1-----",id);
//   console.log("mobile1-----",mobile);
//   await AsyncStorage.setItem('token', token);
//   await AsyncStorage.setItem('userData', JSON.stringify());
//   await AsyncStorage.setItem('userData', JSON.stringify({email}));
//   await AsyncStorage.setItem('userData', JSON.stringify({id}));
//   await AsyncStorage.setItem('userData', JSON.stringify({ email, firstname,lastname,id,mobile})); 
//   console.log("email-----",email);
//   console.log("firstname-----",firstname);
//   console.log("lastname-----",lastname);
//   console.log("id-----",id);
//   console.log("mobile-----",mobile);
// return { 
//   user:email,
//    store_id:store_id,
//   success:true }; 
// } else {
//   console.error("error -",responseData);
// }

// } catch (error) {
// console.error("Login error", error);
// throw error;
// }
// };

export const registerAPI = async (firstname, lastname, email, password, otptype, mobile,store_id) => {
  try {
    // const store_id = await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append('mobile', mobile);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('otptype', otptype);
    formData.append('store_id', store_id);
    console.log("Form data:", formData);

    const response = await fetch(`${BASE_URL}mobileOtpRegistrationMethod`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    // Check if response is OK
    if (!response.ok) {
      // Parse error response
      const errorText = await response.text();
      // Construct error message
      const errorMessage = errorText || 'Registration failed';
      throw new Error(errorMessage);
    }

    // Parse registration response
    const responseData = await response.json();
    console.log("Registration Response:", responseData);
    console.log("Full response:", responseData.data); 
    return responseData;
  } catch (error) {
    // Log error for debugging
    console.error("Error in registerAPI:", error);
    // Re-throw the error to propagate it
    throw error;
  }
};

export const MoblieLoginAPI = async (mobile,store_id,otptype) => {
  console.log("mobile", mobile);
  try {
    // const store_id = await AsyncStorage.getItem('consoleValue');login
    const formData = new FormData();
    formData.append("mobile", mobile);
    formData.append("otptype",otptype);
    formData.append("store_id", store_id);
    const response = await axios.post(`${BASE_URL}mobileOtpRegistrationMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const responseData = response.data;
    console.log("response data:::", responseData); 
    return responseData; 

  } catch (error) {
    console.error("mobileLogin error", error);
    
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
      console.error("Response data:", error.response.data); 
    }
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

    return response.data; 

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const Profileupdate = async (firstname,lastname,customer_id,email,store_id) => {
  try {
    // const store_id =  await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("customer_id", customer_id);
    formData.append("email",email);
    formData.append("store_id", store_id);
    const response = await axios.post(`${BASE_URL}customerProfileUpdateMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });
    console.log("Profileupdate:",response);
    
    return response.data; 
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const Changepassw = async (customer_id, store_id, password, new_password) => {
  
  try {
    const formData = new FormData();
    formData.append("customer_id", customer_id);
    formData.append("store_id", store_id); 
    formData.append("password", password);
    formData.append("new_password", new_password);

    const response = await axios.post(`${BASE_URL}customerProfileUpdateMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });

    console.log("Server Response:", response);
    const responseData = response.data || {}; 
    console.log("Profile: ", responseData);

  } catch (error) {
    console.error("Error Profile:", error);
    throw error;
  }
};
export const GoogleloginAPI = async (firstname, lastname, email, otptype, auth, store_id) => {
  try {
    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('otptype', otptype);
    formData.append('auth', auth);
    formData.append('store_id', store_id);
    console.log("Form data:", formData);

    const response = await fetch(`${BASE_URL}mobileOtpRegistrationMethod`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      const errorMessage = errorText || 'Googlelogin failed';
      console.error("Error response:", errorText);
      throw new Error(errorMessage);
    }

    const responseData = await response.json();
    console.log("Googlelogin Response:", responseData);
    console.log("Googlelogin Full response:", responseData.data); 
    return responseData;
  } catch (error) {
    console.error("Error in Googlelogin API:", error);
    throw error;
  }
};

// export const GoogleloginAPI = async (firstname, lastname, email, otptype,auth,store_id) => {
//   try {
//     const formData = new FormData();
//     formData.append('firstname', firstname);
//     formData.append('lastname', lastname);
//     formData.append('email', email);
//     formData.append('otptype', otptype);
//     formData.append('auth',auth);
//     formData.append('store_id', store_id);
//     console.log("Form data:", formData);

//     const response = await fetch(`${BASE_URL}mobileOtpRegistrationMethod`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//       body: formData,
//     });
//     if (!response.ok) {
//       const errorText = await response.text();
//       const errorMessage = errorText || 'Googlelogin failed';
//       throw new Error(errorMessage);
//     }
//     const responseData = await response.json();
//     console.log("Googlelogin Response:", responseData);
//     console.log("Googlelogin Full response:", responseData.data); 
//     return responseData;
//   } catch (error) {
//     console.error("Error in Googlelogin API:", error);
//     throw error;
//   }
// };