import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import regionReducer from "./slices/regionSlice";
import dashboardReducer from "./slices/dashboardSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    region: regionReducer,
    dashboard: dashboardReducer,
  },
});
