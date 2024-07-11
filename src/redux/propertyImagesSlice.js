import { createSlice } from "@reduxjs/toolkit";

const propertyImagesSlice = createSlice({
  name: "propertyImages",
  initialState: { images: [] },
  reducers: {
    setPropertyImages(state, action) {
      state.images = [...state.images, action.payload];
    },
  },
});

export const { setPropertyImages } = propertyImagesSlice.actions;
export default propertyImagesSlice;
