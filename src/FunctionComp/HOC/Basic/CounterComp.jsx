import React from "react";
import HigherOrderComp from "./HigherOrder";

const Counter = ({ hocCounter, increment, decrement }) => {
  return (
    <>
      <div>Click Counter : {hocCounter}</div>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => increment(5)}>+5</button>
      <br />
      <br />
      <button disabled={hocCounter < 0} onClick={() => decrement(2)}>
        -
      </button>
      <div>Hover Counter : {hocCounter}</div>
      <button onMouseOver={() => increment(5)}>+</button>
      <br />
      <br />
      <button onMouseOver={() => decrement(5)}>-</button>
    </>
  );
};

export default HigherOrderComp(Counter); // ----> EnhancedComp ----> Counter+123
{
  /* <HigherOrderComp/> */
}
