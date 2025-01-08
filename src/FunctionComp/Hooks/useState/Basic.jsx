import React, { useState } from 'react'

const Basic = () => {
 const [count, setCount] = useState(0)
 const increment = () => {
  if(count <= 0){
    setCount(() => setCount(count + 1));
  }
 }
 const decrementCount = () => {
  if(count <= 0){
    setCount(() => setCount(count-1));
  }
 }
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={incrementCount}>Increase</button>
      <button onClick={decrementCount}>Decrease</button>
    </div>
  )
}

export default Basic

/**
 * The above code is a basic example of useState hook.
 * 
 */