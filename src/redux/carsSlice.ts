import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  isAvailable: boolean;
  image: string;
  engine: string;
  fuelType :string;
  color :string;
}

interface CarsState {
  cars: Car[];
  isLoading: boolean;
  error: string | null;
}

// Initial state
const initialState: CarsState = {
  cars: [],
  isLoading: false,
  error: null,
};

// Async thunk for fetching cars from a public file (cars.json)
export const fetchCars = createAsyncThunk<Car[], void>(
  'cars/fetchCars', 
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/cars.json');

      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }

      return response.json(); 
    } catch (error: any) {
      return rejectWithValue(error.message); // Handle error gracefully
    }
  }
);

// Create the slice for managing cars state
const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string; 
      });
  },
});

export default carsSlice.reducer;
