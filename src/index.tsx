import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Importing the global styles
import App from './App.tsx';  // Import your main App component
import { Provider } from 'react-redux';  // To provide Redux store to your app
import store from './redux/store.ts';



// Get the root element where your React app will be rendered
const rootElement = document.getElementById('root') as HTMLElement;

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the application inside the root element
root.render(
  <Provider store={store}>  {/* Wrap your app with the Provider to pass the Redux store */}
    <App />  {/* The main App component */}
  </Provider>
);
