import React from "react";

const Task = ({ task, onToggleTask, onDeleteTask }) => (
  <li>
    <span
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
      onClick={() => onToggleTask(task.id)}
    >
      {task.text}
    </span>
    <button onClick={() => onDeleteTask(task.id)}>削除</button>
  </li>
);

export default Task;
