import React from "react";
import Task from "./Task";
import axios from "axios";

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => (
  <ul>
    {tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        onToggleTask={onToggleTask}
        onDeleteTask={onDeleteTask}
      />
    ))}
  </ul>
);

export default TaskList;
