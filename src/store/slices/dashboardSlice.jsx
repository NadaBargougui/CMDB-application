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

    deleteDashboard: (state, action) => {
      // Remove the dashboard by name and region
      const { name, region } = action.payload;
      state.dashboards = state.dashboards.filter(
        (db) => db.name !== name || db.region !== region
      );
    },
  },
});

export const { createDashboard, deleteDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
