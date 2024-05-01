import React, { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      onAddTodo(todoText);
      setTodoText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="新しいタスクを追加"
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default AddTodo;
