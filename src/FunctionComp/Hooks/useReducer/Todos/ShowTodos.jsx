import React from "react";

const ShowTodos = ({ stateData, dispatch }) => {
  const handleDelete = (Id) => {
    dispatch({
      type: "DELETE_TODO",
      id: Id,
    });
  };

  return (
    <div>
      <ol>
        {Array.isArray(stateData) &&
          stateData.map((item, index) => (
            <>
              <li key={index}>{item.text}</li>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </>
          ))}
      </ol>
    </div>
  );
};

export default ShowTodos;
