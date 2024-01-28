import React, { useState } from 'react'

const TodoList = () => {
    const [inputValue, setInputValue] = useState({});

    const handleAddTodo = () => {
       
    }

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
      <button onClick={handleAddTodo}>add</button>
    </div>
  )
}

export default TodoList
