import { configureStore  } from '@reduxjs/toolkit'
import LangSlices from './Slices/LangSlices';
import UserDataSlice from './Slices/UserData.slice';
import  DrawerList  from './Slices/DrawerSlice';




const store = configureStore({
    reducer:{
        lang : LangSlices,
        userData : UserDataSlice,
        Categories : DrawerList
    }
})

export default store;