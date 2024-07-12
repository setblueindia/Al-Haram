import { configureStore  } from '@reduxjs/toolkit'
import LangSlices from './Slices/LangSlices';
import UserDataSlice from './Slices/UserData.slice';
import  DrawerList  from './Slices/DrawerSlice';
import AddToCartSlice from './Slices/AddToCartSlice';
import CetegoriesList from './Slices/CetegoriesList';
import HomeScreenData from './Slices/HomeScreenData';




const store = configureStore({
    reducer:{
        lang : LangSlices,
        userData : UserDataSlice,
        Categories : DrawerList,
        AddToCart : AddToCartSlice,
        CetegoriesList : CetegoriesList,
        HomeScreen : HomeScreenData
    }
})

export default store;