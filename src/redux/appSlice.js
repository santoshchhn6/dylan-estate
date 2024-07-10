import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { formPage: 1 },
  reducers: {
    setFormPage(state, action) {
      state.formPage = action.payload;
    },
  },
});

export const { setFormPage } = appSlice.actions;
export default appSlice;
