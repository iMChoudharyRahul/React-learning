import React from 'react'
import TodoUpdate from './TodoUpdate';

const TodoShowList = ({todoData, setTodoData}) => {
    console.log("My data:", todoData); 

    const deleteListItem = (itemId) => {
         //remove itemId on list and return rest of array
         const newUpdatedList = todoData.filter((item)=> item.id !== itemId);
         setTodoData(newUpdatedList);
    };

  return (
    <>
      <ol>
        {
          Array.isArray(todoData) && todoData.map((item)=> (
            <>
            <li key={item.id}>
              <TodoUpdate  todoData={item} deleteListItem={deleteListItem} setTodoData={setTodoData}/>
              {/* {item.title}
              <button onClick={() => deleteListItem(item.id)}>Delete</button> */}
            </li>
            </>
          ))
        }
      </ol>
    </>
  )
}

export default TodoShowList

