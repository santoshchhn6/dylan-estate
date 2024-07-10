import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import sellerSlice from "./sellerSlice";
import formSlice from "./formSlice";
import propertyDetailSlice from "./propertyDetailSlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    seller: sellerSlice.reducer,
    form: formSlice.reducer,
    propertyDetail: propertyDetailSlice.reducer,
  },
});

export default store;
