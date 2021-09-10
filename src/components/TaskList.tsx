import React from "react";

// Types
import Task from "../types/Task";

interface TaskListProps {
  tasks: Task[];
}

// Builds due date strings, used by the task header list.
const buildDateString = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};

const TaskList = (props: TaskListProps) => {
  const taskHeaders = props.tasks.map((task, index) => (
    <li className="border flow-root px-4" key={index}>
      <span className="float-left">{task.title}</span>
      <span className="float-right">
        <span className="mx-4">{buildDateString(task.dueDate)}</span>
        <span>
          {task.difficulty}
          {String.fromCodePoint(0x2605)}
        </span>
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
