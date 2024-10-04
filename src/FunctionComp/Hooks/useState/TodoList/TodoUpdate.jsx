import React, { useState } from "react";

const TodoUpdate = ({ todoData, deleteListItem, setTodoData }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todoData.title);

  const handleEdit = () => {
    setTodoData((prevTodoData) =>
      prevTodoData.map((item) =>
        item.id === todoData.id ? { ...item, title: updatedTitle } : item
      )
    );
    setEditMode(false);
  };

  const handleCheckBox = (e) => {
    setTodoData((prevTodoData) =>
      prevTodoData.map((item) =>
        item.id === todoData.id ? { ...item, done: e.target.checked } : item
      )
    );
  };

  let todoContent;
  if (editMode) {
    // input and save button
    todoContent = (
      <>
        <input
          type="text"
          value={updatedTitle}
          onChange={(event) => setUpdatedTitle(event.target.value)}
        />
        <button onClick={handleEdit}>Save</button>
      </>
    );
  } else {
    // title --> todoData and edit button
    todoContent = (
      <>
        {todoData.title}
        <button onClick={() => setEditMode(true)}>Edit</button>
      </>
    );
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={todoData.done}
        onChange={(e) => handleCheckBox(e)}
      />
      {todoContent}
      <button onClick={() => deleteListItem(todoData.id)}>Delete</button>
    </div>
  );
};

export default TodoUpdate;

//problem --> edit --> input field --> content edit --> refresh ho rhaa ---> refresh --> array bar bar update for every key press
//solution--> edit title ---> alg store kr liya jeshe update --> save click save button --> array me add kr denge
// Array Content Add --> update on id based --> array.id == content.id --> content update