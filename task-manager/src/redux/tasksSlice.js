import { createSlice } from '@reduxjs/toolkit';

// Initial state for tasks
const initialState = {
  tasks: [], // List of tasks
  filters: {
    status: 'all', // 'completed', 'incomplete', 'all'
    category: 'all', // 'personal', 'work', 'groceries', etc.
    priority: 'all', // 'high', 'medium', 'low'
    searchQuery: '', // Search query for filtering tasks
  },
};

// Create a slice
const tasksSlice = createSlice({
  name: 'tasks', // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer to add a new task
    addTask: (state, action) => {
      state.tasks.push(action.payload); // Add the new task to the tasks array
    },
    // Reducer to remove a task
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload); // Remove the task by ID
    },
    // Reducer to toggle task completion status
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload); // Find the task by ID
      if (task) task.completed = !task.completed; // Toggle the completion status
    },
    // Reducer to update filters
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }; // Merge new filters with existing ones
    },
    // Reducer to move a task (for drag-and-drop reordering)
    moveTask: (state, action) => {
      const { fromIndex, toIndex } = action.payload; // Get the from and to indices
      const [movedTask] = state.tasks.splice(fromIndex, 1); // Remove the task from its current position
      state.tasks.splice(toIndex, 0, movedTask); // Insert the task at the new position
    },
  },
});

// Export the actions
export const { addTask, removeTask, toggleTaskCompletion, setFilter, moveTask } = tasksSlice.actions;

// Export the reducer
export default tasksSlice.reducer;
