import React from "react";

// Types
import Task from "../types/Task";

interface TaskListProps {
  tasks: Task[];
}

const TaskList = (props: TaskListProps) => {
  const taskHeaders = props.tasks.map((task) => (
    <li className="flow-root px-4">
      <span className="float-left">{task.title}</span>
      <span className="float-right">
        <span className="mx-4">
          {task.dueDate.getMonth() + 1}/{task.dueDate.getDate()}/
          {task.dueDate.getFullYear()}
        </span>
        <span>{task.difficulty}</span>
      </span>
    </li>
  ));

  return (
    <div className="border h-3/5">
      Task List
      <ul className="text-left">{taskHeaders}</ul>
    </div>
  );
};

export default TaskList;
