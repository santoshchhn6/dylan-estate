import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { propertyType: null },
  reducers: {
    setPropertyType(state, action) {
      state.propertyType = action.payload;
    },
  },
});

export const { setPropertyType } = formSlice.actions;
export default formSlice;
