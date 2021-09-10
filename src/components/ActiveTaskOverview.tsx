import React from "react";

// Types
import Task from "../types/Task";

interface ActiveTaskOverviewProps {
  task: Task;
}

const ActiveTaskOverview = (props: ActiveTaskOverviewProps) => {
  return (
    <div className="border h-2/5">
      <p className="text-2xl">Active Task Overview</p>
      <div>{props.task.title}</div>
    </div>
  );
};

export default ActiveTaskOverview;
