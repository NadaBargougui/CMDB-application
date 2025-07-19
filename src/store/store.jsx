import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import regionReducer from "./slices/regionSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    region: regionReducer,
  },
});
