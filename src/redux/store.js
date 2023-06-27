import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./reducers/usersReducer";
import userDetailSlice from "./reducers/userDetailReducer";
import leaveReducer from "./reducers/leaveReducer";

const store = configureStore({
  reducer: {
    userDetail: userDetailSlice,
    users: usersSlice,
    leaves: leaveReducer,
    // Add more reducers here if needed
  },
});

export default store;
