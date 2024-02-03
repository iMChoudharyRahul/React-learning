import React, { useState } from "react";

const UpdateTodos = ({ todoData, handleDelete, dispatch }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todoData.text);

  const handleEditData = () => {
    dispatch({
      type: "UPDATE_TODO",
      id: todoData.id,
      updatedText: updatedTitle,
    });
    setEditMode(false);
  };

  const handleCheckBox = (event) => {
    dispatch({
      type: "COMPLETE_TODO",
      id: todoData.id,
      completed: event.target.checked,
    });
  };

  let todoContent;
  if (editMode) {
    //input and save button
    todoContent = (
      <>
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <button onClick={handleEditData}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todoData.text}
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
      <button onClick={() => handleDelete(todoData.id)}>delete</button>
    </div>
  );
};

export default UpdateTodos;
