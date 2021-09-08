import React from "react";

// Types
import Task from "../types/Task";

interface TaskPaneProps {
  tasks: Task[];
}

const TaskPane = (props: TaskPaneProps) => {
  return <div className="border w-1/2">Task Pane</div>;
};

export default TaskPane;
