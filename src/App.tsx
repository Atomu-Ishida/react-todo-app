import { useState } from "react";

type Todo = {
  value: string;
};

export const App = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <input
          type="submit"
          value="追加"
          onSubmit={(e) => e.preventDefault()}
        ></input>
      </form>
    </div>
  );
};
