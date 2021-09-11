import React, { useState } from "react";

// Types
import Task from "../types/Task";

interface ActiveTaskOverviewProps {
  task: Task;
}

const ActiveTaskOverview = (props: ActiveTaskOverviewProps) => {
  const [taskTitle, setTaskTitle] = useState(props.task.title);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  return (
    <div className="border h-2/5">
      <p className="text-2xl">Active Task Overview</p>

      <label>
        Task Title:
        <input
          type="text"
          value={taskTitle}
          onChange={handleTitleChange}
          className="mx-2"
        />
      </label>
    </div>
  );
};

export default ActiveTaskOverview;
