import React, { useState } from "react";
import ShowTodoList from "./ShowTodoList";

let initialValue = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];
let todoId = 3;
const TakeInput = () => {
  //  step-2 ==> take two state first for take input value(intialvalue= '') and second state for show todo list (intialvlaue {item: '', id: ''})
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(initialValue);

  const handleInputValues = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleTodos = () => {
    setTodoList((prevTodo) => [
      ...prevTodo,
      {
        id: todoId++,
        title: inputValue,
        done: false,
      },
    ]);
    setInputValue("");
  };
  return (
    <div>
      {/* step-1 ==> make input(value, onchange) and button (onClick) */}
      <input
        type="text"
        name="todo"
        id="todo"
        value={inputValue}
        onChange={handleInputValues}
      />
      <button type="submit" onClick={handleTodos}>
        Add
      </button>
      {/* step 4 ==> create child comp and pass the props first list data and second update list function */}
      <ShowTodoList todoListData={todoList} setTodoData={setTodoList} />
    </div>
  );
};

export default TakeInput;
/**
 * step-1 ==> make input(value, onchange) and button (onClick)
 * step-2 ==> take two state first for update input value(intialvalue= '') and second state for show todo list (intialvlaue {item: '', id: ''})
 * step 3 ==> update user type input in a state on based on event(event.target.value) and when click on add button 
             update the value on list state add first prv state and update latest value
 * step 4 ==> create child comp and pass the props first list variable and second update list function
 * step 5 ==> Child comp create first order list and map with list variable and second create a remove button (id, onClick(deleteItem(item.id)) ==> use fillter(item.id !== id) => then update with list function) 
 */
