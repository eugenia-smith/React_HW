import { configureStore } from "@reduxjs/toolkit";
import quote from "./slices/quoteSlice";

const store = configureStore({
  reducer: {
    quote,
  },
});

export default store;
