import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state
interface FiltersState {
  selectedMake: string;
  selectedModel: string;
}

interface FilterState {
  filters: FiltersState;
}

const initialState: FilterState = {
  filters: {
    selectedMake: "",
    selectedModel: "",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // Set the filters (selected make and model)
    setFilters: (state, action: PayloadAction<FiltersState>) => {
      state.filters = action.payload;
    },
    // Reset filters to initial state
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const { setFilters, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
