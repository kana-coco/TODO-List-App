import React from "react";

const Todo = ({ todo, onToggleTodo, onDeleteTodo }) => (
  <li>
    <span
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={() => onToggleTodo(todo.id)}
    >
      {todo.text}
    </span>
    <button onClick={() => onDeleteTodo(todo.id)}>削除</button>
  </li>
);

export default Todo;
