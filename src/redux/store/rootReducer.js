<<<<<<< HEAD
=======
// app/rootReducer.js

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
import { combineReducers } from 'redux';
import authReducer from '../auth/authSlice';
import loginReducer from '../auth/loginSlice';
import registerReducer from '../auth/registerSlice';
import homeReducer from '../auth/registerSlice';
import otpReducer from '../auth/otpSlice';
import categoryReducer from '../mainStackSlice/categorySlice';
<<<<<<< HEAD
import DrawerListReducer from '../DrawerList/drawerListSlice';
import bannersReducer from '../mainStackSlice/bannersSlice';
import productsReducer from '../mainStackSlice/productsSlice';
import categoryListReducer from '../mainStackSlice/categoryList';
import addresslistReducer from '../mainStackSlice/addresslistSlice';
=======
import DrawerListReducer from '../DrawerList/DrawerListSlice';
import bannersReducer from '../mainStackSlice/bannersSlice';
import productsReducer from '../mainStackSlice/productsSlice';
import categoryListReducer from '../mainStackSlice/categoryList';
import addressListReducer from '../mainStackSlice/addressListSlice';
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
import stateReducer from '../mainStackSlice/stateSlice';
import cityReducer from '../mainStackSlice/citySlice';
import addressAddReducer from '../mainStackSlice/addressaddSlice';
import selectedFilterReducer from '../mainStackSlice/selectedfilterSlice';
import adddeleteReducer from '../mainStackSlice/addDeleteSlice';
import wishlistReducer from '../mainStackSlice/wishlistSlice';
import addwishlistReducer from '../mainStackSlice/addWishlistSlice';
import productReducer from '../mainStackSlice/MainProductSlice';
import profileUpdateReducer from '../auth/profileSlice';
import passwordReducer from '../auth/passwordSlice';
import forgotpassReducer from '../auth/forgotpassSlice';
import mobileLoginReducer from '../auth/mobileLoginSlice';
<<<<<<< HEAD
import addressgetReducer from '../mainStackSlice/addressgetSlice';
=======
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  register: registerReducer,
  home: homeReducer,
  otp: otpReducer,
  category: categoryReducer,
  Drawer: DrawerListReducer,
  banners: bannersReducer,
  product:productsReducer,
  categoryList: categoryListReducer,
<<<<<<< HEAD
=======
  addressList:addressListReducer,
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  state:stateReducer,
  city:cityReducer,
  addressAdd:addressAddReducer,
  selectedFilter:selectedFilterReducer,
  adddelte:adddeleteReducer,
  wishlist: wishlistReducer,
  addwishlist:addwishlistReducer,
  products:productReducer,
  profileUpdate:profileUpdateReducer,
  password:passwordReducer,
  forgotpass:forgotpassReducer,
<<<<<<< HEAD
  mobileLogin:mobileLoginReducer,
  addresslist:addresslistReducer,
  addressgetReducer:addressgetReducer,
=======
  mobileLogin:mobileLoginReducer
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
});

export default rootReducer;
