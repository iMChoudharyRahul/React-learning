import React, { useState } from "react";

const UpdateTodoList = ({ todoItems, setTodoData, removeTodoItem }) => {
  const [isEditList, setIsEditList] = useState(false);

  //edit comp
  let todoListContent;
  if (isEditList) {
    {
      todoListContent = (
        <>
          <input
            type="text"
            value={todoItems.title}
            onChange={e =>
              setTodoData({
                ...todoItems,
                title: e.target.value,
              })
            }
          />
          <button onClick={() => setIsEditList(false)}>Save</button>
        </>
      );
    }
  } else {
    todoListContent = (
      <>
        {todoItems.title}
        <button onClick={() => setIsEditList(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <div>
        <input
          type="checkbox"
          name="done"
          id="done-todo"
          checked={todoItems.done}
          onChange={(e) => setTodoData({ ...todoItems, done: e.target.checked })}
        />
        {todoListContent}
        <button onClick={() => removeTodoItem(todoItems.id)}>delete</button>
      </div>
    </> 
  );
};

export default UpdateTodoList;
