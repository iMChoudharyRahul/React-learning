import React from 'react'

const TodoShowList = ({todoData, setTodoData}) => {
    console.log("My data:", todoData); 
  return (
    <>
      <ul>
        {
          todoData && todoData.map((item)=> (
            <>
            <li key={item.id}>{item.title}</li>
            </>
          ))
        }
      </ul>
    </>
  )
}

export default TodoShowList

