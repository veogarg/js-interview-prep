import React, { useEffect, useState } from "react";

const EmptyArrayOf9 = Array(9).fill(null);

const findWinner = (squares) => {
  const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for(let i =0; i<winningCombos.length; i++){
    const [a,b,c] = winningCombos[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
  }
  return null;
};

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const[squares, setSquares] = useState(EmptyArrayOf9);
  const [isXNext, setIsXNext] = useState(true);
  const [showRestart, setShowRestart] = useState(false);

  const handleSquareClick = (i) => {
    if (squares[i] && findWinner(sqaures)) return;
    const allSquares = squares.slice();
    allSquares[i] = isXNext ? "X" : "O";
    setSquares(allSquares);
    setIsXNext(!isXNext);
  };

  const handleRestart = () => {
    setSquares(EmptyArrayOf9);
  };

  const winner = findWinner(squares);
  let status;
  if(winner) {
    status = `Winner is: ${winner}`;
  }else if(!squares.includes(null) && !winner) {
    status = 'Match Draws!'
  } else {
    status = `Next Player: ${isXNext ? 'X' : 'O '}`
  }

  useEffect(() => {
    if(!status.includes("Next")){
      setShowRestart(true)
      setIsXNext(true)
    }else {
      setShowRestart(false)
    }
  }, [status])

  return (
    <>
    <h3>Play Tic-Tac-Toe</h3>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
      </div>
      <div className="board-row">
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
      </div>
      <div className="board-row">
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
        <Square value={squares[9]} onSquareClick={() => handleSquareClick(9)} />
      </div>
      {showRestart && <button onClick={handleRestart}>Restart Again?</button>}
    </>
  );
};

export default TicTacToe;
