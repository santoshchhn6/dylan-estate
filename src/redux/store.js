import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import sellerSlice from "./sellerSlice";
import formSlice from "./formSlice";
import propertyDetailSlice from "./propertyDetailSlice";
import featuresSlice from "./featuresSlice";
import priceDetailSlice from "./priceDetailSlice";
import propertyImagesSlice from "./propertyImagesSlice";
import locationDetailSlice from "./locationDetail";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    seller: sellerSlice.reducer,
    form: formSlice.reducer,
    propertyDetail: propertyDetailSlice.reducer,
    features: featuresSlice.reducer,
    priceDetail: priceDetailSlice.reducer,
    propertyImages: propertyImagesSlice.reducer,
    locationDetail: locationDetailSlice.reducer,
  },
});

export default store;
