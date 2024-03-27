import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    user: null,
    loggedIn: false,
  },
  reducers: {
    IsLoggedIn(state, action) {
      state.loggedIn = true;
    },
    logout(state, action) {
      state.loggedIn = false;
    },
  },
});

export const { IsLoggedIn, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
