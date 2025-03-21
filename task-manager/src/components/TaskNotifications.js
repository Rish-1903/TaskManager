import React from 'react';
import { useSelector } from 'react-redux';

const TaskNotifications = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const today = new Date();

  const upcomingTasks = tasks.filter(task => {
    const dueDate = new Date(task.dueDate);
    const timeDiff = dueDate - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff <= 3 && !task.completed;
  });

  return (
    <div>
      <h2>Upcoming Tasks</h2>
      <ul>
        {upcomingTasks.map(task => (
          <li key={task.id}>
            <span>{task.title}</span>
            <span>{task.dueDate}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskNotifications;
