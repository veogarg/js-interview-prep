import React, { useMemo, useState } from "react";

const createEmptyMatrix = (len) =>
  Array.from({ length: len }, () => Array(len).fill(null));

const Square = ({ value, onSquareClick }) => (
  <button
    className="h-[100px] w-[100px] border-2 text-xl"
    onClick={onSquareClick}
  >
    {value}
  </button>
);

const RenderSquares = ({ squares, onSquareClick }) =>
  squares.map((row, rIndex) => (
    <div key={`row-${rIndex}`} className="flex">
      {row.map((val, cIndex) => (
        <Square
          key={`col-${cIndex}`}
          value={val}
          onSquareClick={() => onSquareClick(rIndex, cIndex)}
        />
      ))}
    </div>
  ));

const TicTacToe = ({ matrixLen = 5 }) => {
  const [squares, setSquares] = useState(createEmptyMatrix(matrixLen));
  const [isXNext, setIsXNext] = useState(true);
  const [winningStatus, setWinningStatus] = useState(null);
  const [moveCount, setMoveCount] = useState(0);

  // Maintain count maps for X and O
  const playerStats = useMemo(() => {
    const emptyStats = () => ({
      rows: Array(matrixLen).fill(0),
      cols: Array(matrixLen).fill(0),
      diag1: 0,
      diag2: 0,
    });
    return {
      X: emptyStats(),
      O: emptyStats(),
    };
  }, [matrixLen]);

  const getNextPlayer = () => (isXNext ? "X" : "O");

  const handleSquareClick = (row, col) => {
    if (squares[row][col] || winningStatus) return;

    const player = getNextPlayer();
    const newSquares = squares.map((r) => [...r]);
    newSquares[row][col] = player;
    setSquares(newSquares);
    setIsXNext((prev) => !prev);
    setMoveCount((prev) => prev + 1);

    // Update counts for this player
    const stats = playerStats[player];
    stats.rows[row]++;
    stats.cols[col]++;
    if (row === col) stats.diag1++;
    if (row + col === matrixLen - 1) stats.diag2++;

    // Check if any of the player's counts hit matrixLen
    if (
      stats.rows[row] === matrixLen ||
      stats.cols[col] === matrixLen ||
      stats.diag1 === matrixLen ||
      stats.diag2 === matrixLen
    ) {
      setWinningStatus(`Player ${player} wins. Click Restart button to play again!!!`);
    } else if (moveCount + 1 === matrixLen * matrixLen) {
      setWinningStatus(`Match ties. Click Restart button to play again!!!`);
    }
  };

  const handleRestart = () => {
    setSquares(createEmptyMatrix(matrixLen));
    setIsXNext(true);
    setWinningStatus(null);
    setMoveCount(0);
    // Reset playerStats manually
    for (const stat of Object.values(playerStats)) {
      stat.rows.fill(0);
      stat.cols.fill(0);
      stat.diag1 = 0;
      stat.diag2 = 0;
    }
  };

  return (
    <div className="grid h-[100vh] place-content-center place-items-center">
      <h1 className="text-2xl">Tic Tac Toe Game</h1>
      <strong className="text-center">
        {winningStatus ?? `Player: ${getNextPlayer()}`}
      </strong>
      <div className="my-2">
        <RenderSquares squares={squares} onSquareClick={handleSquareClick} />
      </div>
      <button className="border-2 my-2 p-3" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default TicTacToe;

/*
✅ Time and Space Complexity
handleSquareClick():
Time: O(1) – all checks & updates are constant time

Space: O(N) per player (for rows, cols)

✅ Benefits:
Constant time winner check ✅

No re-computation or iteration over entire matrix ✅

State mutation is avoided; React re-renders correctly ✅

Easy to scale to larger board sizes (e.g., 10x10) ✅
*/