

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state of the sidebar
interface SidebarState {
  isOpen: boolean;
}

const initialState: SidebarState = {
  isOpen: false, // Sidebar is closed by default
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeSidebar: (state) => {
      state.isOpen = false; 
    },
    openSidebar: (state) => {
      state.isOpen = true; 
    },
  },
});

export const { toggleSidebar, closeSidebar, openSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
