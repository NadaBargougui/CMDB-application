import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboards: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    createDashboard: (state, action) => {
      state.dashboards.push(action.payload);
    },
  },
});

export const { createDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
