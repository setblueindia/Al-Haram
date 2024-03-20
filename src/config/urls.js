export const API_BASE_URL="https://alharamstores.com";
export const CENTER_POINT="/rest/arabic/V1/api";
export const getApiUrl = (endpoint) => API_BASE_URL + CENTER_POINT+ endpoint

export const LOGIN = getApiUrl('/mobileOtpRegistrationMethod')