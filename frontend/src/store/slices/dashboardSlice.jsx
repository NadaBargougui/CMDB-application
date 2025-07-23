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
    updateDashboardName(state, action) {
      const { region, oldName, newName } = action.payload;
      const dashboard = state.dashboards.find(
        (db) => db.region === region && db.name === oldName
      );
      if (dashboard) {
        dashboard.name = newName;
      }
    },
  },
});

export const { createDashboard, deleteDashboard, updateDashboardName } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
