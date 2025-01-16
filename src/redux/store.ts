import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './carsSlice.ts';  // This will still manage your car data
import selectedCarReducer from './selectedCarSlice.ts';  // If you are using this for selected car info
import filterReducer from './filterSlice.ts';  // New filterSlice for managing filters

const store = configureStore({
  reducer: {
    cars: carsReducer,            // Keeps car data
    selectedCar: selectedCarReducer, // Optional if you are using selected car info
    filters: filterReducer,          // Manages filter state
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
