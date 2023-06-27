import { createSlice } from "@reduxjs/toolkit";
import { LEAVES, USERS } from "../types";
import { getLeaveRequest, getUsersData } from "../actions";

const initialState = {
  leaves: [],
  loading: false,
  error: null,
};

const leaveSlice = createSlice({
  name: LEAVES,
  initialState,
  reducers: {},
  extraReducers: {
    [getLeaveRequest.pending]: (state) => {
      state.loading = true;
    },
    [getLeaveRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.leaves = action.payload;
    },
    [getLeaveRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// export const { addItem, removeItem } = usersSlice.actions;
export default leaveSlice.reducer;
