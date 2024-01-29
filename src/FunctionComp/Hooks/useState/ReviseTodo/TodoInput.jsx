import React, { useState } from 'react'
import TodoShowList from './TodoShowList';

let intialValue = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
]

let newId = 3;
const TodoInput = () => {
    const [inputValues, setInputValues] = useState('');
    const [todoData, setTodoData] = useState(intialValue);

    const handleTodolist = () => {
        setTodoData([
            ...todoData,
            {
                id: newId++,
                title: inputValues,
                done: false
            }
        ]);
        setInputValues('');
    }

  return (
    <>
      <h2>Todo Task</h2>
      <div>
        <input type="text" value={inputValues} onChange={(e)=> setInputValues(e.target.value)}/>
        <button onClick={handleTodolist}>Add</button>
      </div>
      <TodoShowList todoData={todoData} setTodoData={setTodoData}/>
    </>
  )
}

export default TodoInput;

/**
 * step-1 --> create input field and add button 
 * step 2 --> create state variable for input and add button--> data store by user typing
 * step 3 --> show over data on list 

 */
