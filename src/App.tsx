import React, { useEffect, useState } from "react";
import "./App.css";

// Components
import ActiveTaskDetail from "./components/ActiveTaskDetail";
import ActiveTaskOverview from "./components/ActiveTaskOverview";
import TaskList from "./components/TaskList";

// Types
import Task from "./types/Task";

// Test data used during development

const App = () => {
  const [taskArray, setTaskArray] = useState<Task[]>([
    {
      id: 0,
      title: "",
      dueDate: new Date(),
      difficulty: 1,
    },
  ]);
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);

  useEffect(() => {
    setTaskArray([
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
    ]);
  }, []);

  const activeTask = taskArray[activeTaskIndex];

  // Checks boundary conditions before setting a new active task
  const setActiveTaskIndexWrapper = (index: number) => {
    let newActiveTaskIndex = 0;
    index = Math.floor(index);

    if (index >= 0 && index < taskArray.length) {
      newActiveTaskIndex = index;
    }

    setActiveTaskIndex(newActiveTaskIndex);
  };

  const submitTitleChange = (id: number, title: string) => {
    setTaskArray(
      taskArray.map((task) => {
        if (task.id === id) {
          task.title = title;
          return task;
        }

        return task;
      })
    );
  };

  return (
    <div className="App grid grid-cols-2">
      <div className="h-screen">
        <TaskList tasks={taskArray} setActiveTask={setActiveTaskIndexWrapper} />
        <ActiveTaskOverview
          task={activeTask}
          submitTitleChange={submitTitleChange}
          key={activeTask.title}
        />
      </div>
      <div className="h-screen">
        <ActiveTaskDetail task={activeTask} />
      </div>
    </div>
  );
};

export default App;
