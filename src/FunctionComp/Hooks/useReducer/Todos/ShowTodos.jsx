import React from "react";
import UpdateTodos from "./UpdateTodos";

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
            <React.Fragment key={index}>
              <li
                key={index}
                style={{ textDecoration: item.done ? "line-through" : "none" }}
              >
                <UpdateTodos
                  todoData={item}
                  handleDelete={handleDelete}
                  dispatch={dispatch}
                />
              </li>
            </React.Fragment>
          ))}
      </ol>
    </div>
  );
};

export default ShowTodos;
