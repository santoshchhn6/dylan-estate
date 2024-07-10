import { createSlice } from "@reduxjs/toolkit";

const sellerSlice = createSlice({
  name: "seller",
  initialState: { seller: null },
  reducers: {
    setSeller(state, action) {
      state.seller = action.payload;
    },
  },
});

export const { setSeller } = sellerSlice.actions;
export default sellerSlice;
