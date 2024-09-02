import React from 'react';
import './App.css'; // Keep this if you have custom styles
import TaskList from './TaskList'; // Import the TaskList component
import Animation from './Animation'; // Import the Animation component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do List with 3D Animation</h1>
        <Animation /> {/* Render the 3D animation */}
        <TaskList /> {/* Render the to-do list */}
      </header>
    </div>
  );
}

export default App;
