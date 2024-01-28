//Importing useRef hook
import { useState, useEffect, useRef } from 'react'

function StatePrev() {
  const [inputTextValue, setInputTextValue] = useState('')
  const previousValue = useRef('')

  useEffect(() => {
    previousValue.current = inputTextValue
  }, [inputTextValue])

  return (
    <>
      <input
        type="text"
        value={inputTextValue}
        onChange={(e) => setInputTextValue(e.target.value)}
        placeholder="Enter Your Full Name"
      />
      <h2>Current Value: {inputTextValue}</h2>
      <h2>Previous Value: {previousValue.current}</h2>
    </>
  )
}

export default StatePrev;