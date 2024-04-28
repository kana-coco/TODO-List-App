import React from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const todos = [
    {id:1, title: 'Task1'},
    {id:2, title: 'Task2'},
  ];

  return (
    <div className="App">
        <h1>ToDo List</h1>
        <TodoList todos={todos}/>
    </div>
  );
};

export default App;
