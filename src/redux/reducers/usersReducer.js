import { createSlice } from "@reduxjs/toolkit";
import { USERS } from "../types";
import { getUsersData } from "../actions";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: USERS,
  initialState,
  reducers: {},
  extraReducers: {
    [getUsersData.pending]: (state) => {
      state.loading = true;
    },
    [getUsersData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getUsersData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// export const { addItem, removeItem } = usersSlice.actions;
export default usersSlice.reducer;
