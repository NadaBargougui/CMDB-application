import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./slices/demoslice";

export const store = configureStore({
  reducer: {
    demo: demoReducer,
  },
});
