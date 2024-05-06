import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components"

const TaskInput = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonAdd = styled.button`
  width: 15%;
`;

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
    <div>
      <h2>タスクの追加</h2>
      <form onSubmit={handleSubmit}>
        <TaskInput
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="タスクを入力してください"
        />
        <ButtonAdd type="submit">追加</ButtonAdd>
      </form>
    </div>
  );
};

export default AddTask;
