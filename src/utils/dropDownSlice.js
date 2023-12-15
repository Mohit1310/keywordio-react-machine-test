import { createSlice } from "@reduxjs/toolkit";

const dropDownSlice = createSlice({
  name: "dropdown",
  initialState: {
    options: ["clicks", "cost", "conversions", "revenue"],
  },
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setSelectedOption } = dropDownSlice.actions;
export default dropDownSlice.reducer;
