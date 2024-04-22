import { combineReducers } from 'redux';
import authReducer from '../auth/authSlice';
import loginReducer from '../auth/loginSlice';
import registerReducer from '../auth/registerSlice';
import homeReducer from '../auth/registerSlice';
import otpReducer from '../auth/otpSlice';
import categoryReducer from '../mainStackSlice/categorySlice';
import DrawerListReducer from '../DrawerList/drawerListSlice';
import bannersReducer from '../mainStackSlice/bannersSlice';
import productsReducer from '../mainStackSlice/productsSlice';
import categoryListReducer from '../mainStackSlice/categoryList';
import addresslistReducer from '../mainStackSlice/addresslistSlice';
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
import addressgetReducer from '../mainStackSlice/addressgetSlice';
import changepassReducer from '../auth/changepassSlice';
import userReducer from '../UserProvider/UserActions';
import googleloginReducer from '../auth/googleloginSlice';
import searchReducer from '../mainStackSlice/searchSlice';
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
  mobileLogin:mobileLoginReducer,
  addresslist:addresslistReducer,
  addressgetReducer:addressgetReducer,
  changepassReducer:changepassReducer,
  user: userReducer,
  googleloginReducer:googleloginReducer,
  searchReducer:searchReducer
});

export default rootReducer;
