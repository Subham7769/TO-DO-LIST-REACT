import { configureStore } from "@reduxjs/toolkit";
import IsLoggedIn from './Slices/LoginSlice'

const store = configureStore({
    reducer:{
        isLoggedIn: IsLoggedIn
    }
});

export default store;