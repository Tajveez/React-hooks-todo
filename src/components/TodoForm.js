import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const addNewTodo = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
  };

  const [text, setText] = useState("");
  return (
    <div>
      <form onSubmit={addNewTodo}>
        <input
          type="text"
          value={text}
          className="input"
          placeholder="Add new Todo"
          onChange={(e) => setText(e.target.value)}
        />
        {/* <button>Add Todo</button> */}
      </form>
    </div>
  );
}
