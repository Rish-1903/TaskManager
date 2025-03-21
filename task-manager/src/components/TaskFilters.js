import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/tasksSlice';

const TaskFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.tasks.filters);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  };

  return (
    <div>
      <select name="status" value={filters.status} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
      <select name="category" value={filters.category} onChange={handleFilterChange}>
        <option value="all">All Categories</option>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="groceries">Groceries</option>
      </select>
      <select name="priority" value={filters.priority} onChange={handleFilterChange}>
        <option value="all">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

export default TaskFilters;
