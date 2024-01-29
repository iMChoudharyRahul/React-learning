import React, { useState } from "react";
import UpdateTodoList from "./UpdateTodoList";

const ShowTodoList = ({ todoListData, setTodoData }) => {

    const removeTodoItem = (id) => {
        let updatedTodoList = todoListData.filter((item) => item.id !== id);
        setTodoData(updatedTodoList);
      };
  return (
    <>
      <ul>
        {Array.isArray(todoListData) &&
          todoListData.map((item) => (
            <>
              <li key={item.id}>
                <UpdateTodoList todoItems={item} setTodoData={setTodoData} removeTodoItem={removeTodoItem}/>
              </li>
            </>
          ))}
      </ul>
    </>
  );
};

export default ShowTodoList;
/**
 * [done] add a checkBox
 * [done] title values show
 * [done] edit button
 * [done] delete button
 * last edit functionality adding
 *   click edit --> show input box and button to save data --> ternary operator or if-else
 *
 */
