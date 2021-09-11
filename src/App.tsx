import React, { useState } from "react";
import "./App.css";

// Components
import ActiveTaskDetail from "./components/ActiveTaskDetail";
import ActiveTaskOverview from "./components/ActiveTaskOverview";
import TaskList from "./components/TaskList";

// Types
import Task from "./types/Task";

// Test data used during development
const testTasks: Task[] = [
  {
    id: 1,
    title: "Go to the grocery store",
    dueDate: new Date("2021-09-12"),
    difficulty: 2,
  },
  {
    id: 2,
    title: "Make a sandwich",
    dueDate: new Date("2021-09-13"),
    difficulty: 3,
  },
  {
    id: 3,
    title: "Build the next unicorn",
    dueDate: new Date("2022-09-12"),
    difficulty: 5,
  },
];

const App = () => {
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const activeTask = testTasks[activeTaskIndex];

  // Checks boundary conditions before setting a new active task
  const setActiveTaskIndexWrapper = (task: number) => {
    let newActiveTaskIndex = 0;
    task = Math.floor(task);

    if (task >= 0 && task < testTasks.length) {
      newActiveTaskIndex = task;
    }

    setActiveTaskIndex(newActiveTaskIndex);
  };

  return (
    <div className="App grid grid-cols-2">
      <div className="h-screen">
        <TaskList tasks={testTasks} setActiveTask={setActiveTaskIndexWrapper} />
        <ActiveTaskOverview task={activeTask} key={activeTask.title} />
      </div>
      <div className="h-screen">
        <ActiveTaskDetail task={activeTask} />
      </div>
    </div>
  );
};

export default App;
