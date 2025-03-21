import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/tasksSlice';

const TaskSearch = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setFilter({ searchQuery: e.target.value }));
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={handleSearchChange}
    />
  );
};

export default TaskSearch;
