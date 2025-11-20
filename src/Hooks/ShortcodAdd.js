// import axios from 'axios';

import axios from 'axios';
import {BASE_URL} from '../constants/axios.url';

// export const ShortcodAdd = async (shortcode = 'EDJB2828', lang = 'E') => {
//   const RequestURL = `https://apina.address.gov.sa/NationalAddress/NationalAddressByShortAddress/NationalAddressByShortAddress?format=json&page=1&shortaddress=${shortcode}&language=${lang}`;
//   const APIKEY = '7f3d5cffb5d24977a6d977a19dfef0aa';

//   try {
//     const response = await axios.get(RequestURL, {
//       headers: {
//         api_key: APIKEY,
//       },
//     });

//     if (response.data?.success) {
//       return response?.data?.Addresses[0];
//     } else {
//       console.log('API Error:', response?.data);
//     }
//   } catch (error) {
//     console.log('API Error:', error.response?.data || error.message);
//   }
// };

export const ShortcodAdd = async (shortcode, setIsLoading, EN) => {
  setIsLoading(true);
  const RequestURL = `${BASE_URL}/rest/V1/shortaddress/lookup/${shortcode}/${EN}`;
  try {
    const response = await axios.get(RequestURL);
    if (response?.data?.success) {
      setIsLoading(false);
      return response?.data;
    } else {
      setIsLoading(false);
      return response?.data;
    }
  } catch (error) {
    console.log('Short Cod Error:', error.response?.data || error.message);
    setIsLoading(false);
  }
};

// 'EDJB2828'
