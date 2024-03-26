import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    objID: null,
  },
  reducers: {
    IsLoggedIn(state, action) {
      state.objID = action.payload;
    },
  },
});

export const { IsLoggedIn } = LoginSlice.actions;
export default LoginSlice.reducer;
