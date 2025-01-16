import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorFilterState {
  selectedColor: string; // A single selected color
}

const initialState: ColorFilterState = {
  selectedColor: "", // No color selected initially
};

const colorFilterSlice = createSlice({
  name: "colorFilter",
  initialState,
  reducers: {
    setSelectedColor(state, action: PayloadAction<string>) {
      // Set or reset the selected color
      state.selectedColor = action.payload === state.selectedColor ? "" : action.payload;
    },
    resetColorFilter(state) {
      state.selectedColor = ""; // Reset to no selection
    },
  },
});

export const { setSelectedColor, resetColorFilter } = colorFilterSlice.actions;
export default colorFilterSlice.reducer;
