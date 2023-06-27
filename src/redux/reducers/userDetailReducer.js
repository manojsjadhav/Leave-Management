import { createSlice } from "@reduxjs/toolkit";
import { USERDETAIL } from "../types";
import { getUserDetails } from "../actions";

// const initialState = {
//   name: '',
//   email: '',
// };

const userDetailSlice = createSlice({
  name: USERDETAIL,
  initialState: {
    userdata: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getUserDetails.pending]: (state) => {
      state.loading = true;
    },
    [getUserDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.userdata = action.payload;
    },
    [getUserDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// console.log({userDetailSlice})

// export const { setUser, clearUser } = userSlice.actions;
export default userDetailSlice.reducer;
