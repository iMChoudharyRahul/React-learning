import React from "react";

const Square = ({ onClick, value }) => {
  return (
    <div className="square-box" onClick={onClick}>
      <h2>{value}</h2>
    </div>
  );
};

export default Square;
