import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const saveTodos = (todos) => {
    setTodos(todos);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (value) => {
    const allTodos = [...todos, { text: value, isCompleted: false }];
    saveTodos(allTodos);
  };

  const completeTodo = (index) => {
    const allTodos = [...todos];
    allTodos[index].isCompleted = !allTodos[index].isCompleted;
    saveTodos(allTodos);
  };

  const deleteTodo = (index) => {
    const allTodos = [...todos];
    allTodos.splice(index, 1);
    saveTodos(allTodos);
  };

  const todoData = window.localStorage.getItem("todos")
    ? JSON.parse(window.localStorage.getItem("todos"))
    : [];

  const [todos, setTodos] = useState(todoData);
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
