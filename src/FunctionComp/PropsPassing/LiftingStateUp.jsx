import React, { useState } from 'react';

// ChildComponentA receives a prop `value` and a function `onUpdate`
const ChildComponentA = ({ value, onUpdate }) => {
  return (
    <div>
      <p>Child Component A</p>
      <p>Value: {value}</p>
      <button onClick={() => onUpdate(value + 1)}>Increment</button>
    </div>
  );
};

// ChildComponentB also receives a prop `value` but only displays it
const ChildComponentB = ({ value }) => {
  return (
    <div>
      <p>Child Component B</p>
      <p>Value: {value}</p>
    </div>
  );
};

// ParentComponent manages the state and passes it down to children
const ParentComponent = () => {
  const [sharedValue, setSharedValue] = useState(0);

  const handleUpdate = (newValue) => {
    setSharedValue(newValue);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponentA value={sharedValue} onUpdate={handleUpdate} />
      <ChildComponentB value={sharedValue} />
    </div>
  );
};

export default ParentComponent;
