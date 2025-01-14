// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice.ts';
import carsReducer from './carsSlice.ts';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    cars: carsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Default export
export default store;
