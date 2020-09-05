import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const addTodo = (value) => {
    const allTodos = [...todos, { text: value, isCompleted: false }];
    setTodos(allTodos);
  };

  const completeTodo = (index) => {
    const allTodos = [...todos];
    allTodos[index].isCompleted = !allTodos[index].isCompleted;
    setTodos(allTodos);
  };

  const deleteTodo = (index) => {
    const allTodos = [...todos];
    allTodos.splice(index, 1);
    setTodos(allTodos);
  };

  const [todos, setTodos] = useState([
    {
      text: "learn react",
      isCompleted: false,
    },
    {
      text: "Watch Movie",
      isCompleted: true,
    },

    {
      text: "Buy shoes",
      isCompleted: false,
    },
  ]);
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
