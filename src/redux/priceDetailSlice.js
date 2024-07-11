import { createSlice } from "@reduxjs/toolkit";

const priceDetailSlice = createSlice({
  name: "priceDetail",
  initialState: { maintenance_price_type: null, priceDetail: null },
  reducers: {
    setMaintenanceType(state, action) {
      state.maintenance_price_type = action.payload;
    },
    setPriceDetail(state, action) {
      state.priceDetail = action.payload;
    },
  },
});

export const { setMaintenanceType, setPriceDetail } = priceDetailSlice.actions;
export default priceDetailSlice;
