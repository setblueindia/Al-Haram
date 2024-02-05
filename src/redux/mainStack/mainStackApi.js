import axios from "axios";

export const BASE_URL = 'https://alharamstores.com/rest/V1/api/';

export const homeAPI = async (store_id) => {
  try {
    const formData = new FormData();
    formData.append("store_id", store_id);

    const response = await axios.post(`${BASE_URL}getHomeSliderMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // console.log("Full API response:", response);  // Log the entire response

    const responseData = response.data;
    // console.log("data:",responseData.data);
    return responseData;
  } catch (error) {
    // console.error("home error", error);
    throw error;
  }
};
export const CategoryAPI = async (store_id) => {
  try {
    const formData = new FormData();
    formData.append("store_id", store_id);

    const response = await axios.post(`${BASE_URL}getMobileCategoriesList`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // console.log("Categories:", response);  // Log the entire response

    const responseData = response.data;
    // console.log("Categories data:",responseData.data);
    return responseData;
  } catch (error) {
    // console.error("Categories error", error);
    throw error;
  }
};


export const CategoryDrawerList = async (store_id) => {
  try {
    const formData = new FormData();
    formData.append("store_id", store_id);

    const response = await axios.post(`${BASE_URL}getCategories`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // console.log("Categories list :", response);  // Log the entire response

    const responseData = response.data;
    // console.log("Categories data list:",responseData.data);
    return responseData;
  } catch (error) {
    // console.error("Categories error", error);
    throw error;
  }
};
export const CategoryAPIBanner = async (store_id,category_id) => {
  try {
    const formData = new FormData();
    formData.append("store_id", store_id);
    formData.append("category_id", category_id);
    const response = await axios.post(`${BASE_URL}getCategoryBanner`, formData, {
    // const response = await axios.post(`${BASE_URL}getMobileCategoriesList`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // console.log("Categories:", response);  // Log the entire response

    const responseData = response.data;
    // console.log("Categories data:1111111",responseData.data);
    return responseData;
  } catch (error) {
    // console.error("Categories error", error);
    throw error;
  }
};

export const AllCategory = async (store_id,category_id,PageSize,CurPage,customer_id,) => {
  try {
    const formData = new FormData();
    formData.append("store_id", store_id);
    formData.append("category_id", category_id);
    formData.append("PageSize", PageSize);
    formData.append("CurPage", CurPage);
    formData.append("customer_id", customer_id);
    const response = await axios.post(`${BASE_URL}getProductByCateId`, formData, {
    // const response = await axios.post(`${BASE_URL}getMobileCategoriesList`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // console.log("AllCategory:", response);  // Log the entire response

    const responseData = response.data;
    // console.log("AllCategory:1111111",responseData.data);
    return responseData;
  } catch (error) {
    // console.error("AllCategory error", error);
    throw error;
  }
};
export const CategoryFilterAPI = async (store_id,category_id) => {
  try {
    const formData = new FormData();
    formData.append("store_id", store_id);
    formData.append("category_id", category_id);
    const response = await axios.post(`${BASE_URL}getCategoryFilterMethod`, formData, {
    // const response = await axios.post(`${BASE_URL}getMobileCategoriesList`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // console.log("Categories:", response);  // Log the entire response

    const responseData = response.data;
    // console.log("Categories data:1111111",responseData.data);
    return responseData;
  } catch (error) {
    // console.error("Categories error", error);
    throw error;
  }
};
export const AddressList = async (
  customer_id,
  firstname,
  lastname,
  country_id,
  region,
  city,
  address1,
  address2,
  address3,
  telephone,
  store_id
) => {
  try {
    // Set a default value "SA" if country_id is not provided
    const country_id =  "SA";
    const city =  "Jeddah";
    const formData = new FormData();
    formData.append("customer_id", customer_id);
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("country_id", country_id);
    formData.append("region", region);
    formData.append("city", city);
    formData.append("address1", address1);
    formData.append("address2", address2);
    formData.append("address3", address3);
    formData.append("telephone", telephone);
    formData.append("store_id", store_id);

    const response = await axios.post(`${BASE_URL}customerAddressListMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log("Entire Response:", response);

    const responseData = response.data;
    console.log("AddressList0-0-0::::", responseData);

    if (!responseData || !responseData.data) {
      console.warn("Empty response data or missing 'data' property.");
    }

    return responseData;
  } catch (error) {
    console.error("AddressList error::::", error);
    throw error;
  }
};
export const StateApi = async (store_id) => {
  try {
    const formData = new FormData(); // Initialize the FormData object here

    formData.append("country_code", "SA"); // Use "country_code" instead of "country_id"
    formData.append("store_id", store_id);

    const response = await axios.post(`${BASE_URL}countryToStateMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log("countryToState:<<<<", response);

    const responseData = response.data;
    console.log("countryToState::::>>>>>", responseData);

    if (!responseData || !responseData.data) {
      console.warn("Empty countryToState property.");
    }

    return responseData;
  } catch (error) {
    console.error("countryToState error::::", error);
    throw error;
  }
};

export const CityApi = async (state_code,store_id) => {
  try {
    const formData = new FormData(); // Initialize the FormData object here

    formData.append("state_code", state_code); // Use "country_code" instead of "country_id"
    formData.append("store_id", store_id);

    const response = await axios.post(`${BASE_URL}stateToCityMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log("stateToCityMethod:<<<<", response);

    const responseData = response.data;
    console.log("stateToCityMethod::::>>>>>", responseData);

    if (!responseData || !responseData.data) {
      console.warn("Empty countryToState property.");
    }

    return responseData;
  } catch (error) {
    console.error("stateToCityMethod error::::", error);
    throw error;
  }
};