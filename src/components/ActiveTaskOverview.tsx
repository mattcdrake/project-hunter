import React, { useState } from "react";

// Types
import Task from "../types/Task";

interface ActiveTaskOverviewProps {
  task: Task;
  submitTitleChange: (id: number, title: string) => void;
}

const ActiveTaskOverview = (props: ActiveTaskOverviewProps) => {
  const [taskTitle, setTaskTitle] = useState(props.task.title);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const submitTitleChange = (event: React.SyntheticEvent) => {
    event.preventDefault();
    props.submitTitleChange(props.task.id, taskTitle);
  };

  return (
    <div className="border h-2/5">
      <p className="text-2xl">Active Task Overview</p>

      <form onSubmit={submitTitleChange}>
        <label>
          Task Title:
          <input
            type="text"
            value={taskTitle}
            onChange={handleTitleChange}
            className="mx-2"
          />
        </label>
      </form>
    </div>
  );
};

export default ActiveTaskOverview;
