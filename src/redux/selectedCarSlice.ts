import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedCarState {
  id: number | null;
}

const initialState: SelectedCarState = {
  id: null, // Initially no car is selected
};

const selectedCarSlice = createSlice({
  name: 'selectedCar',
  initialState,
  reducers: {
    setSelectedCar: (state, action: PayloadAction<number>) => {
      state.id = action.payload; // Set the selected car id
    },
    clearSelectedCar: (state) => {
      state.id = null; // Clear the selected car id
    },
  },
});

export const { setSelectedCar, clearSelectedCar } = selectedCarSlice.actions;

export default selectedCarSlice.reducer;
