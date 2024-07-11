import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <Task key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </ul>
  );
}

export default TaskList;
