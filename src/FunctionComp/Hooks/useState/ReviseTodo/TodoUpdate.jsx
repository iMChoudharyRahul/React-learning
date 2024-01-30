import React, { useState } from 'react'

const TodoUpdate = ({todoData, deleteListItem, setTodoData}) => {
  const [editMode, setEditMode] = useState(false);

  let todoContent;
  if(editMode){
//input and save button
  todoContent = (
    <>
    <input type="text" value={todoData.title} 
    onChange={(event)=> {
      setTodoData({
        ...todoData,
        title: event.target.value
      })
    }}
    />
    <button onClick={()=> setEditMode(false)}>Save</button>
    </>
  )
  }else{
    //  title--> todoData and edit button
    todoContent= (
      <>
      {todoData.title}
      <button onClick={() => setEditMode(true)}>Edit</button>
      </>
    )
  }

  return (
    <div>
      {/* <input type="checkbox"  /> */}
      {todoContent}
      <button onClick={()=> deleteListItem(todoData.id)}>Delete</button>
    </div>
  )
}

export default TodoUpdate
/**
 * edit --> save --> edit
 */