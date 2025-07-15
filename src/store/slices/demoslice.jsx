/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";

const demoslice = createSlice({
  name: "demo",
  initialState: [],
  reducers: {},
});

export const {} = demoslice.actions;
export default demoslice.reducer;
