import React, { useState } from "react";
import axios from "axios";

const AddTask = () => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/tasks/", { name: taskName });
      setTaskName("");
      // タスクの追加後の処理
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="タスクを入力してください"
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default AddTask;
