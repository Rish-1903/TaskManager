import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import TaskSearch from './components/TaskSearch';
import TaskNotifications from './components/TaskNotifications';

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskFilters />
      <TaskSearch />
      <TaskNotifications />
      <TaskList />
    </div>
  );
}

export default App;
