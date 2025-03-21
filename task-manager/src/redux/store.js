import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice'; // Import the tasks slice

const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Add the tasks slice to the store
  },
});

export default store;
