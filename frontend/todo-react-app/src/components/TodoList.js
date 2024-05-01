import React from "react";
import Todo from "./Todo";
import axios from "axios";

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => (
  <ul>
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        onToggleTodo={onToggleTodo}
        onDeleteTodo={onDeleteTodo}
      />
    ))}
  </ul>
);

export default TodoList;
