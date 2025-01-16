import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './carsSlice.ts';  
import selectedCarReducer from './selectedCarSlice.ts';
import filterReducer from './filterSlice.ts';  
import colorFilterReducer from './colorFilterSlice.ts';

const store = configureStore({
  reducer: {
    cars: carsReducer,            // Keeps car data
    selectedCar: selectedCarReducer,
    filters: filterReducer,          // Manages filter state
    colorFilter: colorFilterReducer, // Manages color filter state
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
