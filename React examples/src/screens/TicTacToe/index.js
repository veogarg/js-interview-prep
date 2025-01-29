import React, { useMemo, useState } from "react";

const EmptyArray = (matrixLen) => Array.from({length: matrixLen}, () => new Array(matrixLen).fill(null))

const getWinningCombos = (matrixLen) => {
  const winningCombos = [];
  const diagonal1 = []
  const diagonal2 = []
  for(let row = 0; row< matrixLen; row++) {
    let col = 0
    const horizontals = [];
    const verticals = [];
     
    while(col < matrixLen) {
      horizontals.push([row, col])
      verticals.push([col, row])
      col++
    }

    diagonal1.push([row, row])
    diagonal2.push([row, [matrixLen - row - 1]])
    winningCombos.push(horizontals)
    winningCombos.push(verticals)
  }
  winningCombos.push(diagonal1, diagonal2)

  return winningCombos
}

let squareClicks = 0

const Square = ({value, onSquareClick}) => <button className="h-[100px] w-[100px] border-2 text-xl" onClick={onSquareClick}>
  {value}
</button>

const RenderSquares = ({squares, onSquareClick}) => {
  return squares.map((row, rIndex) => {
    return <div key={`row-${rIndex+1}`} className="flex">
      {
        row.map((col, cIndex) => <Square key={`col-${cIndex}`} onSquareClick={() => onSquareClick(rIndex, cIndex)} value={col} />)
      }
    </div>
  })
}

const TicTacToe = ({matrixLen = 5}) => {
  const[squares, setSquares] = useState(EmptyArray(matrixLen));
  const [isXNext, setIsXNext] = useState(true);
  const [winningStatus, setWinningStatus] = useState(null);

  const winningCombos = useMemo(() => getWinningCombos(matrixLen), [matrixLen])

  const getNextPlayer = () => {
    return isXNext ? "X" : "O"
  }

  const findWinner = () => {
    for(const combo of winningCombos) {
      const [firstCombo] = combo
      let isMatching = true
      for(const colIndex of combo) {
        if(squares[firstCombo[0]][firstCombo[1]] && squares[firstCombo[0]][firstCombo[1]] === squares[colIndex[0]][colIndex[1]]){
          isMatching = true
        }
        else {
          isMatching = false
          break
        }
      }
      if(isMatching) return squares[firstCombo[0]][firstCombo[1]]
    }
    return null;
  }

  const handleSquareClick = (rowIndex, colIndex) => {
    const allSquares = squares;
    if(allSquares[rowIndex][colIndex] || winningStatus) return;
    allSquares[rowIndex][colIndex] = getNextPlayer();
    setSquares(allSquares);
    setIsXNext(prev => !prev);
    squareClicks += 1;

    const hasWinner = findWinner()
    if(hasWinner) setWinningStatus(`Player ${hasWinner} wins. Click Restart button to play again!!!`)
      else  if(squareClicks === matrixLen * matrixLen) setWinningStatus(`Match ties. Click Restart button to play again!!!`)
  };

  const handleRestart = () => {
    setSquares(EmptyArray(matrixLen));
    setIsXNext(true)
    setWinningStatus(null)
    squareClicks = 0
  };

  return (
    <div className="grid h-[100vh] place-content-center place-items-center">
      <h1 className="text-center text-2xl">Tic Tac Toe Game</h1>
      <strong className="text-center">{winningStatus ?? `Player: ${getNextPlayer()}`}</strong>
      <div className="my-2"><RenderSquares squares={squares} onSquareClick={handleSquareClick} /></div>
      <button className="border-2 my-2 p-3" onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default TicTacToe;
