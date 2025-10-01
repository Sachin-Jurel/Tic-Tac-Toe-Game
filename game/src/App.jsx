import React, { useState } from "react";
import "./App.css";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const App = () => {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [Next, setNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    if (Next) {
      nextSquares[i] = "0";
    } else {
      nextSquares[i] = "X";
    }
    setsquares(nextSquares);
    setNext(!Next);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  }

  const restart = ()=>{
    setsquares(Array(9).fill(null));
    setNext(true);
  }

  return (
    <div className="game">
      <div className="game-board">
        <h1>Tic Tac Toe Game</h1>
        <div className="board">
          <div className="boxs">
            <Square
              value={squares[0]}
              className="box"
              onSquareClick={() => handleClick(0)}
            />
            <Square
              value={squares[1]}
              className="box"
              onSquareClick={() => handleClick(1)}
            />
            <Square
              value={squares[2]}
              className="box"
              onSquareClick={() => handleClick(2)}
            />
          </div>
          <div className="boxs">
            <Square
              value={squares[3]}
              className="box"
              onSquareClick={() => handleClick(3)}
            />
            <Square
              value={squares[4]}
              className="box"
              onSquareClick={() => handleClick(4)}
            />
            <Square
              value={squares[5]}
              className="box"
              onSquareClick={() => handleClick(5)}
            />
          </div>
          <div className="boxs">
            <Square
              value={squares[6]}
              className="box"
              onSquareClick={() => handleClick(6)}
            />
            <Square
              value={squares[7]}
              className="box"
              onSquareClick={() => handleClick(7)}
            />
            <Square
              value={squares[8]}
              className="box"
              onSquareClick={() => handleClick(8)}
            />
          </div>
        </div>
        <button onClick={restart}>ReStart</button>
      </div>
      {status ? <div className="winner">{status}</div> : null}
    </div>
  );
};

export default App;
