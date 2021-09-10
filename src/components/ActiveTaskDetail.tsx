import React from "react";

// Types
import Task from "../types/Task";

interface ActiveTaskDetailProps {
  task: Task;
}

const ActiveTaskDetail = (props: ActiveTaskDetailProps) => {
  return (
    <div>
      <p className="text-2xl">Active Task Detail</p>
      <div>{props.task.title}</div>
    </div>
  );
};

export default ActiveTaskDetail;
