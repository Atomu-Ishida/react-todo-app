import React, { useState } from "react";

type Todo = {
  value: string;
};

export const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleOnSubmit = () => {
    if (!text) return;

    const newTodo: Todo = {
      value: text,
    };

    setTodos([newTodo, ...todos]);
    setText("");
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={text}
          onChange={(e) => handleOnChange(e)}
        ></input>
        <input type="submit" value="追加" onSubmit={handleOnSubmit}></input>
      </form>
    </div>
  );
};
