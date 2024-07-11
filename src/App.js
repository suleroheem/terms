import React, { useState } from 'react';
import Header from './header'; // Adjusted to match 'header.js'
import AddTask from './addtask'; // Adjusted to match 'addtask.js'
import TaskList from './TaskList';  // Adjust the path if necessary



const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Learn React', isDone: false },
    { id: 2, description: 'Build a Todo App', isDone: false },
  ]);

  const addTask = (description) => {
    // Generate a new unique ID for the new task
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    
    // Create a new task object
    const newTask = { id: newId, description, isDone: false };

    // Update state with the new task added
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    // Toggle the 'isDone' property of the task with matching ID
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  };

  return (
    <div>
      <Header />
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
