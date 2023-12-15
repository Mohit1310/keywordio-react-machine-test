import { configureStore } from "@reduxjs/toolkit";
import dropDownSlice from "./dropDownSlice";

const store = configureStore({
  reducer: {
    dropdown: dropDownSlice,
  },
});

export default store;
