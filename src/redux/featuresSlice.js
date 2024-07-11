import { createSlice } from "@reduxjs/toolkit";

const featuresSlice = createSlice({
  name: "features",
  initialState: { furnishing: [], amenities: [], features: null },
  reducers: {
    setFeatures(state, action) {
      state.features = action.payload;
    },
    addFurnishing(state, action) {
      state.furnishing.push(action.payload);
    },
    removeFurnishing(state, action) {
      state.furnishing = state.furnishing.filter((e) => e !== action.payload);
    },
    addAmenities(state, action) {
      state.amenities.push(action.payload);
    },
    removeAmenities(state, action) {
      state.amenities = state.amenities.filter((e) => e != action.payload);
    },
  },
});

export const {
  setFeatures,
  addFurnishing,
  removeFurnishing,
  addAmenities,
  removeAmenities,
} = featuresSlice.actions;
export default featuresSlice;
