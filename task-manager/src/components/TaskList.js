import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { moveTask } from '../redux/tasksSlice';

const Task = ({ task, index, moveTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'TASK',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '8px',
        margin: '4px',
        border: '1px solid #ccc',
        backgroundColor: '#f9f9f9',
      }}
    >
      <span>{task.title}</span>
      <span>{task.category}</span>
      <span>{task.priority}</span>
      <span>{task.dueDate ? task.dueDate.toDateString() : 'No due date'}</span>
    </div>
  );
};

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleMoveTask = (fromIndex, toIndex) => {
    dispatch(moveTask({ fromIndex, toIndex }));
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          task={task}
          index={index}
          moveTask={handleMoveTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
