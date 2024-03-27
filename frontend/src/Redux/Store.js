import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";

const store = configureStore({
  reducer: {
    AuthSlice: AuthSliceReducer,
  },
});

export default store;
