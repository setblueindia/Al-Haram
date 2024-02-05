// app/rootReducer.js

import { combineReducers } from 'redux';
import authReducer from '../auth/authSlice';
import loginReducer from '../auth/loginSlice';
import registerReducer from '../auth/registerSlice';
import homeReducer from '../auth/registerSlice';
import otpReducer from '../auth/otpSlice';
import categoryReducer from '../mainStackSlice/categorySlice';
import DrawerListReducer from '../DrawerList/DrawerListSlice';
import bannersReducer from '../mainStackSlice/bannersSlice';
import productsReducer from '../mainStackSlice/productsSlice';
import categoryListReducer from '../mainStackSlice/categoryList';
import addressListReducer from '../mainStackSlice/addressListSlice';
import stateReducer from '../mainStackSlice/stateSlice';
import cityReducer from '../mainStackSlice/citySlice';
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
  addressList:addressListReducer,
  state:stateReducer,
  city:cityReducer,
});

export default rootReducer;
