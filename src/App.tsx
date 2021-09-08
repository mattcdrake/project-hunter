import React from "react";
import "./App.css";

// Components
import TaskPane from "./components/TaskPane";

// Types
import Task from "./types/Task";

const App = () => {
  return (
    <div className="App">
      <TaskPane tasks={[]} />
    </div>
  );
};

export default App;
