import { createSlice } from "@reduxjs/toolkit";

const locationDetailSlice = createSlice({
  name: "locationDetail",
  initialState: { locationDetail: null },
  reducers: {
    setLocationDetail(state, action) {
      state.locationDetail = action.payload;
    },
  },
});

export const { setLocationDetail } = locationDetailSlice.actions;
export default locationDetailSlice;
