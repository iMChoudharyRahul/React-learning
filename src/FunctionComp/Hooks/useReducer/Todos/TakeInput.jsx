import React, { useReducer, useState } from "react";
import ShowTodos from "./ShowTodos";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "DELETE_TODO": {
      return state.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const TakeInput = () => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialTasks);

  console.log("CHeck Input value:", input);
  const handleTodoInput = () => {
    dispatch({
      type: "ADD_TODO",
      id: nextId++,
      text: input,
    });
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleTodoInput}>Add</button>
      <ShowTodos stateData={state} dispatch={dispatch} />
    </div>
  );
};

export default TakeInput;
