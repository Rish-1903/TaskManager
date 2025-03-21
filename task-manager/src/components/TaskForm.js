import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('personal');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      category,
      priority,
      dueDate,
      completed: false,
    };
    dispatch(addTask(newTask));
    setTitle('');
    setCategory('personal');
    setPriority('medium');
    setDueDate(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="groceries">Groceries</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <DatePicker
        selected={dueDate}
        onChange={(date) => setDueDate(date)}
        placeholderText="Due date"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
