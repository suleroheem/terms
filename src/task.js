import React from 'react';

function Task({ task, toggleTask }) {
  return (
    <li>
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={() => toggleTask(task.id)}>
        {task.isDone ? 'Undo' : 'Done'}
      </button>
    </li>
  );
}

export default Task;
