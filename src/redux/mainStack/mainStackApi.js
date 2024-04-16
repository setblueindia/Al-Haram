import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const BASE_URL = 'https://alharamstores.com/rest/V1/api/';
export const Graphqrl_URL = 'https://alharamstores.com/'
// export const homeAPI = async () => {
//   try {
//     // Retrieve store_id from AsyncStorage
//     const store_id = await AsyncStorage.getItem('consoleValue');

//     const formData = new FormData();
//     formData.append("store_id", store_id);

//     const response = await axios.post(`${BASE_URL}getHomeSliderMethod`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     const responseData = response.data;

//     return responseData;
//   } catch (error) {
//     throw error;
//   }
// };
export const homeAPI = async (store_id) => {
  try {
    // const store_id =  await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append("store_id", store_id);

    const response = await axios.post(`${BASE_URL}getHomeSliderMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
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

    console.log("Categories:", response);

    const responseData = response.data;
    console.log("Categories data:", responseData.data);
    return responseData;
  } catch (error) {
    console.error("Categories error", error);
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
    const responseData = response.data;
    console.log("Response data:1212222", responseData);
    console.log('Children Data:', responseData.children_data);
    return responseData;
  } catch (error) {
    console.error("Categories error", error);
    throw error;
  }
};
export const CategoryAPIBanner = async (category_id,store_id) => {
  try {
    // Retrieve store_id from AsyncStorage
    // const store_id = await AsyncStorage.getItem('consoleValue');

    const formData = new FormData();
    formData.append("store_id", store_id);
    formData.append("category_id", category_id);

    const response = await axios.post(`${BASE_URL}getCategoryBanner`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log("Categories:", response);  // Log the entire response

    const responseData = response.data;
    console.log("Categories data:1111111", responseData.data);
    return responseData;
  } catch (error) {
    console.error("Categories error", error);
    throw error;
  }
};
export const AllCategory = async (store_id,category_id, PageSize, CurPage, customer_id,color,size,sort_by, sort_action,price_from,price_to) => {
  try {
    // const store_id = await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    
    formData.append("category_id", category_id);
    formData.append("store_id", store_id);
    formData.append("PageSize", PageSize);
    formData.append("CurPage", CurPage);
    formData.append("customer_id", customer_id);
    formData.append("color",color);
    formData.append("size",size);
    formData.append("sort_by",sort_by);
    formData.append("sort_action",sort_action);
    formData.append("price_from",price_from);
    formData.append("price_to",price_to);
      const response = await axios.post(`${BASE_URL}getProductByCateId`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("AllCategory:", response); 
    const responseData = response.data;
    console.log("AllCategorr:::::", responseData.data);
    return responseData;
  } catch (error) {
    console.error("AllCategory error", error);
    throw error;
  }
};
export const CategoryFilterAPI = async (store_id,category_id) => {
  try {
    // const store_id = await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append("store_id", store_id);
    formData.append("category_id", category_id);
    const response = await axios.post(`${BASE_URL}getCategoryFilterMethod`, formData, {
      // const response = await axios.post(`${BASE_URL}getMobileCategoriesList`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log("Response from API::", response);  // Log the entire response

    const responseData = response.data;
    console.log("Categories data:1111111",responseData.data);
    return responseData;
  } catch (error) {
    console.error("Categories error", error);
    throw error;
  }
};

export const StateApi = async (store_id) => {
  try {
    // const store_id = await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append("country_code", "SA");
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
    }
    return responseData;
  } catch (error) {
    console.error("countryToState error::::", error);
    throw error;
  }
};
export const CityApi = async (state_code) => {
  try {
    const store_id = await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append("state_code", state_code);
    formData.append("store_id", store_id);

    const response = await axios.post(`${BASE_URL}stateToCityMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const responseData = response.data;
   
    if (!responseData || !responseData.data) {
     
    }
    return responseData;
  } catch (error) {
    throw error;
  }
};
export const Addressget = async (customer_id,store_id) => {
  try {
    // const store_id = await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append('customer_id', customer_id);
    formData.append('store_id', store_id);

    const response = await axios.post(`${BASE_URL}customerAddressListMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log("AddressAdd Response:", response.data);
    return response.data;
  } catch (error) {
    // console.error("AddressAdd error:", error);
    throw error;
  }
};

export const AddressDelete = async (
  customer_id,
  address_id
) => {
  try {
    const store_id = await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append("customer_id", customer_id);
    formData.append("customer_id", address_id);
    formData.append("store_id", store_id);
    const response = await axios.post(`${BASE_URL}customerAddressDeleteMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    // console.log("Entire Response:", response);
    const responseData = response.data;
    // console.log("AddressDelete::::", responseData);
    if (!responseData || !responseData.data) {
    }
    return responseData;
  } catch (error) {
    // console.error("AddressDelete error::::", error);
    throw error;
  }
};
export const getWishlist = async (customer_id,store_id) => {
  try {
    // const store_id = await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append("customer_id", customer_id);
    formData.append("store_id", store_id);
    const response = await axios.post(`${BASE_URL}getWishlistCollectionMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("get WishlistCollection:<<<<", response);
    const responseData = response.data;
    console.log("get WishlistCollection::::>>>>>", responseData);
    if (!responseData || !responseData.data) {
      console.log("Empty get WishlistCollection property.");
    }

    return responseData;
  } catch (error) {
    console.error("get WishlistCollection error::::", error);
    throw error;
  }
};
export const AddWishlist = async (customer_id, productId, action) => {
  try {
    const formData = new FormData();
    formData.append("customer_id", customer_id);
    formData.append("productId", productId);
    formData.append("action", action);

    const response = await axios.post(`${BASE_URL}addWishlistMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log("Add WishlistCollection:<<<<", response);

    const responseData = response.data;
    console.log("Add WishlistCollection::::>>>>>", responseData);

    if (!responseData || !responseData.data) {
      console.log("Empty Add WishlistCollection property.");
    }

    return responseData;
  } catch (error) {
    console.error("Add WishlistCollection error::::", error);
    throw error;
  }
};
export const AddressAdd = async (customer_id, firstname, lastname, country_id, region, address1, address2, address3, postcode, telephone, city,store_id) => {
  try {
    // const store_id = await AsyncStorage.getItem('consoleValue');
    const formData = new FormData();
    formData.append("customer_id", customer_id);
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("country_id", country_id);
    formData.append("region", region);
    formData.append("address1", address1);
    formData.append("address2", address2);
    formData.append("address3", address3);
    formData.append("postcode", postcode);
    formData.append("telephone", telephone);
    formData.append("city", city);
    formData.append("store_id", store_id);
    const response = await axios.post(`${BASE_URL}customerAddressListMethod`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("AddressAdd", response); // Log the response here
    const responseData = response.data;
    console.log("AddressAdd", responseData);
    if (!responseData || !responseData.data) {
      console.log("AddressAdd property.");
    }

    return responseData;
  } catch (error) {
    console.error("AddressAdd error::::", error);
    throw error;
  }
};

// export const AddressAdd = async (
//   customer_id,
//   firstname,
//   lastname,
//   country_id,
//   region,
//   city,
//   address1,
//   address2,
//   address3,
//   telephone,
//   postcode
// ) => {
//   try {
//     const store_id = await AsyncStorage.getItem('consoleValue');
//     const formData = new FormData();
//     formData.append("customer_id", customer_id);
//     formData.append("firstname", firstname);
//     formData.append("lastname", lastname);
//     formData.append("country_id", country_id );
//     formData.append("region", region);
//     formData.append("city", city);
//     formData.append("address1", address1);
//     formData.append("address2", address2);
//     formData.append("address3", address3);
//     formData.append("postcode", postcode);
//     formData.append("telephone", telephone);
//     formData.append("store_id", store_id);

//     const response = await axios.post('https://alharamstores.com/rest/default/V1/api/customerAddressListMethod',formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       }
//     );
//     console.log("Entire Response:", response.data);
//     if (!response.data || !response.data.data) {
//       console.log("Empty response data or missing 'data' property.");
//     } else {
//       console.log("AddressList data:", response.data.data);
//     }
//     return response.data;
//   } catch (error) {
//     console.error("AddressList error:", error);
//     throw error;
//   }
// };
export const fetchProductsApi = async (sku) => {
  try {

    const defaultStore = 'default';

    const response = await axios.post(
      `${Graphqrl_URL}graphql`,
      {
        query: `
          query GetProducts($sku: String!) {
            products(filter: { sku: { eq: $sku } }) {
              items {
                id
                sku
                name
                stock_status
                description {
                  html
                }
                short_description {
                  html
                }
                special_price
                price_tiers {
                  quantity
                  discount {
                    percent_off
                    amount_off
                  }
                  final_price {
                    value
                    currency
                  }
                }
                price_range {
                  minimum_price {
                    regular_price {
                      value
                      currency
                    }
                  }
                }
                image {
                  url
                  label
                  position
                  disabled
                }
                media_gallery_entries {
                  file
                }
                only_x_left_in_stock
                ... on ConfigurableProduct {
                  configurable_options {
                    id
                    attribute_code
                    label
                    values {
                      value_index
                      label
                      swatch_data {
                        __typename
                        value
                      }
                    }
                  }
                  variants {
                    product {
                      sku
                      media_gallery_entries {
                        file
                      }
                    }
                    attributes {
                      code
                      value_index
                      label
                    }
                  }
                }
                related_products {
                  id
                  name
                  sku
                  image {
                      url
                      label
                      position
                      disabled
                  }
                  price_range {
                      minimum_price {
                      regular_price {
                          value
                          currency
                      }
                      }
                  }
                }
              }
            }
          }
        `,
        variables: { sku }
      },
      {
        headers: {
          Store: defaultStore
        }
      }
    );
    const { items } = response.data.data.products;
    return items;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};