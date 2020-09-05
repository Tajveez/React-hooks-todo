import React from "react";

export default function Todo({ todo, index, completeTodo, deleteTodo }) {
  let todoCompleted = todo.isCompleted ? true : false;
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <input
          onChange={() => completeTodo(index)}
          type="checkbox"
          checked={todoCompleted}
        />
        <button onClick={() => deleteTodo(index)}>delete</button>
      </div>
    </div>
  );
}
