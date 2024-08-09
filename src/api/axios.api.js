import { useSelector } from "react-redux"
import {
    AddRemoveToWhishLisstURL,
    AddToCart,
    AddressListURL,
    BASE_URL,
    Banner,
    CartListApi,
    CityListURL,
    CoupanListAPI,
    FilterList,
    ForgetPasswordURL,
    GRAFORL,
    HOMEURL,
    LOGINURL,
    OTPVerification,
    OrderList,
    OrderView,
    PRODUCTLIST,
    PlaceHolder1,
    RefundOrder,
    SINUPURL,
    SetPaymentMethodURL,
    ShippingList,
    StateListURL,
    StatusUpadateURL,
    StoreShippingURL,
    UpdateProfileURL,
    WhishListURL,
    actionCoupan,
    deleteAdress,
    deleteCartItems,
    expireTokenArabic,
    expireTokenDefault,
    getCartItemsCount,
    mobailCetegouries,
    reOrderUrl,
    selectedShippingListMethodURl,
    updateCartitems
} from "../constants/axios.url"
import { POSTFORM, POSTFORM2, POSTFORMGRAPH, POSTJSON, expireTokenFrom } from "./axios.function"
import { NUMBER } from "../constants/constants"

export const useSingUp = async (params) => {
    const res = await POSTFORM(SINUPURL, params)
    return res
}

export const userLogIn = async (params) => {
    const res = await POSTFORM(LOGINURL, params)
    return res
}
export const userLogInWithNumber = async (params) => {
    const res = await POSTFORM(SINUPURL, params)
    return res
}
export const CheckOTP = async (params) => {
    const res = await POSTFORM(OTPVerification, params)
    return res
}

export const HomeApi = async (params) => {
    const res = await POSTFORM(HOMEURL, params)
    return res
}

export const DrowerApi = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}


export const UpdateProfile = async (params) => {
    const res = await POSTFORM(UpdateProfileURL, params)
    return res
}

export const NotificationAIP = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const ReadNotification = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const WalletHistoryAPI = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const SerchAPI = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const AddRemoveToWhishLisst = async (params) => {
    const res = await POSTFORM(AddRemoveToWhishLisstURL, params)
    return res
}
export const WhisList = async (params) => {
    const res = await POSTFORM(WhishListURL, params)
    return res
}
export const ForgetPassword = async (params) => {
    const res = await POSTFORM(ForgetPasswordURL, params)
    return res
}
export const AddressList = async (params) => {
    const res = await POSTFORM(AddressListURL, params)
    return res
}
export const CityList = async (params) => {
    const res = await POSTFORM(CityListURL, params)
    return res
}

export const StateList = async (params) => {
    const res = await POSTFORM(StateListURL, params)
    return res
}

export const ProductDetalsBySKU = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const AddToCartAPI = async (params) => {
    const res = await POSTFORM(AddToCart, params)
    return res
}
export const CartList = async (params) => {
    const res = await POSTFORM(CartListApi, params)
    return res
}

export const CartListCount = async (params) => {
    const res = await POSTFORM(getCartItemsCount, params)
    return res
}

export const DeleteCartItems = async (params) => {
    const res = await POSTFORM(deleteCartItems, params)
    return res
}

export const DeleteAddress = async (params) => {
    const res = await POSTFORM(deleteAdress, params)
    return res
}

export const ExpireToken = async (params , lang) => {
    const addKeyWord = lang == NUMBER.num0 ? "arabic"   : "default" 
    const makeURL = BASE_URL +  "/rest/" +addKeyWord+ "/V1/carts/mine"
    const res = await POSTFORM2(expireTokenDefault , params)
    return res
}
export const AddCustomerToSponser = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const AddCustomerToSponserToGroup = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const GetCustomerListToTranfer = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const GetWallateAmount = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const getShippingListAxios = async (params) => {
    const res = await POSTFORM(ShippingList , params)
    return res
}

export const getStorePickupMethod = async (params) => {
    const res = await POSTFORM(StoreShippingURL , params)
    return res
}

export const getPlaceHolder1 = async (params) =>{
    const res = await POSTJSON(selectedShippingListMethodURl , params)
    return res
}

export const setPaymentMethod = async (params) =>{
    const res = await POSTJSON(SetPaymentMethodURL , params)
    return res
}

export const getCetergourisList = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const getProductDetails = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const getOrderDetailsList = async (params) => {
    const res = await POSTFORM(OrderList, params)
    return res
}

export const getOrderView = async (params) => {
    const res = await POSTFORM(OrderView, params)
    return res
}

export const getProductList = async (params) => {
    const res = await POSTFORM(PRODUCTLIST, params)
    return res
}

export const getFilterList = async (params, lang) =>{
    const res = await POSTFORMGRAPH(GRAFORL, params , lang)
    return res
}

export const  getCoupan = async (params) =>{
    const res = await POSTFORM(CoupanListAPI , params)
    return res
}

export const  getActonCoupan = async (params) =>{
    const res = await POSTFORM(actionCoupan , params)
    return res
}

export const customerSuppot = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}
export const postUpdateCart = async (params) => {
    const res = await POSTFORM(updateCartitems , params)
    return res
}
export const getMobaileCetegouries = async (params) => {
    const res = await POSTFORM(mobailCetegouries , params)
    return res
}
export const postReOrder = async (params) => {
    const res = await POSTFORM(reOrderUrl , params)
    return res
}
export const postRefundOrder = async (params) => {
    const res = await POSTFORM(RefundOrder , params)
    return res
}
export const getTranferAmount = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}
export const getTranferAmountList = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}
export const PlaceeHolder2 = async (params, lang) => {
    const res = await POSTJSON(PlaceHolder1, params, lang)
    return res
}
export const getBanner = async (params, lang) => {
    const res = await POSTFORM(Banner, params, lang)
    return res
}
export const postBeforUrWay = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}
export const postAfterUrWay = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}
export const Storetoken = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const SendNotifiction = async (params, lang) => {
    const res = await POSTFORMGRAPH(GRAFORL, params, lang)
    return res
}

export const StatusUpadate = async (params) => {
    const res = await POSTFORM(StatusUpadateURL , params)
    return res
}