import React, { useState } from "react";
import Square from "./Square";
import "./TicTacToe.css";

const Board = () => {
  const [boxValue, setBoxValue] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkForWinner = () => {
    let winnerIndex = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const logic of winnerIndex) {
      let [a, b, c] = logic;
      if (
        boxValue[a] &&
        boxValue[a] === boxValue[b] &&
        boxValue[a] === boxValue[c]
      ) {
        return boxValue[a];
      }
    }
    return false;
  };

  let isWinner = checkForWinner();

  const handleTurns = (index) => {
    console.log("Check Index value:", index);
    //Checking whether the clicked square is empty or not
    if (boxValue[index] !== null) {
      return;
    }

    let copyStateValue = [...boxValue]; //all null varaible
    copyStateValue[index] = isXTurn ? "X" : "O";
    setBoxValue(copyStateValue);
    setIsXTurn(!isXTurn); // Switching turns after each move
  };

  const handleReset = () => {
    setBoxValue(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <>
      <div className="board-container">
        {isWinner ? (
          <h2>{isWinner} won the game</h2>
        ) : (
          <>
            <h2>TicTacToe Game using React</h2>
          </>
        )}
        <h4>Player {isXTurn ? "X" : "O"} please move</h4>
        <div className="board-row">
          <Square onClick={() => handleTurns(0)} value={boxValue[0]} />
          <Square onClick={() => handleTurns(1)} value={boxValue[1]} />
          <Square onClick={() => handleTurns(2)} value={boxValue[2]} />
        </div>
        <div className="board-row">
          <Square onClick={() => handleTurns(3)} value={boxValue[3]} />
          <Square onClick={() => handleTurns(4)} value={boxValue[4]} />
          <Square onClick={() => handleTurns(5)} value={boxValue[5]} />
        </div>
        <div className="board-row">
          <Square onClick={() => handleTurns(6)} value={boxValue[6]} />
          <Square onClick={() => handleTurns(7)} value={boxValue[7]} />
          <Square onClick={() => handleTurns(8)} value={boxValue[8]} />
        </div>
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Board;
