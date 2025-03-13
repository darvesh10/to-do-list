import React, { useState } from 'react';
import './App.css'

function App() {
  const [task, setTask] = useState(""); // State for input field
  const [tasks, setTasks] = useState([]); // State for task list

  // Function to add task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // Clear input field
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_task, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Darvesh To-Do List App</h1>

      <input 
        type="text" 
        placeholder="Enter a task..." 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} 
            <button onClick={() => deleteTask(index)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
