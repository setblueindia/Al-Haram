import { configureStore  } from '@reduxjs/toolkit'
import LangSlices from './Slices/LangSlices';
import UserDataSlice from './Slices/UserData.slice';




const store = configureStore({
    reducer:{
        lang : LangSlices,
        userData : UserDataSlice
    }
})

export default store;