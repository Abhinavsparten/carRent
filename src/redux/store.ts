import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './carsSlice.ts'; 
import selectedCarReducer from './selectedCarSlice.ts'; 

const store = configureStore({
  reducer: {
    cars: carsReducer,
    selectedCar: selectedCarReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
