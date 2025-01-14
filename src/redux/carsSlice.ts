
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
}

interface CarsState {
  cars: Car[];
  isLoading: boolean;
  error: string | null;
}

// Initial state for the Redux store
const initialState: CarsState = {
  cars: [],
  isLoading: false,
  error: null,
};

// Fetch cars from the public directory
export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const response = await fetch('/cars.json');
  if (!response.ok) {
    throw new Error('Failed to fetch cars');
  }
  return response.json();
});

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export default carsSlice.reducer;
