import React, { useEffect, useState } from "react";
import axios from "axios";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const TaskMainList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/api/tasks/");
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>タスク一覧</h1>
      <AddTask />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskMainList;
