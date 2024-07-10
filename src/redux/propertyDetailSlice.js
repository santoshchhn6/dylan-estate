import { createSlice } from "@reduxjs/toolkit";

const propertyDetailSlice = createSlice({
  name: "propertyDetail",
  initialState: { propertyDetail: null },
  reducers: {
    setPropertyDetail(state, action) {
      state.propertyDetail = action.payload;
    },
  },
});

export const { setPropertyDetail } = propertyDetailSlice.actions;
export default propertyDetailSlice;
