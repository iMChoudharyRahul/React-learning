import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'
import ChildComp from './ChildComp';

// useMemo memoizes the return value from the function

export const Parent = () => {
    const [count, setCount] = useState(0);
    const [userName, setUserNAme] = useState('Sonu')
    let userInfo = {
        name: userName,
        role: 'instructor'
    }
    const memoizedValue = useMemo(() => {
        return userInfo
    },[userName])

    // try to pass an array as props with static values
    // pass an array of objects 
    // pass an array of dependant objects
    
    console.log('redering Parent');
  return (
   <>
    <div>Parent</div>
    <div>Count: {count}</div>
    <div>Name: {userName}</div>
    <button onClick={() => setCount(count+1)}>+</button>
    <button onClick={() => setUserNAme('Abhinav')}>update name</button>
    <ChildComp user={memoizedValue}/>
   </>
  )
}