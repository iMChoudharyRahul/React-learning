import React, { useReducer } from "react";

const BasicReducer = () => {
  function reducerFun(state, action) {
    if (action.type === "INCREMENT") {
      return { count: state.count + 1 };
    } else if (action.type === "DECREMENT") {
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return state;
    }
    return state;
  }
  // function reducerFun(state, action) {
  //     switch(action.type){
  //       case "INCREMENT" : {
  //         return {count: state.count + 1}
  //       }
  //       case "DECREMENT": {
  //         return {count: state.count - 1}
  //       }
  //       default: {
  //         return state;
  //       }
  //     }
  // }
  const [state, dispatch] = useReducer(reducerFun, { count: 0 });
  console.log("Check Dispatch function:", dispatch);
  console.log("Check state variable:", state);

  return (
    <div>
      <div>count: {state.count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default BasicReducer;
