import React, { useState } from "react";
import "./style.css";

const rollDice = () => Math.floor(Math.random() * 6) + 1;

const checkWinner = (pos) => pos === 100;

const SnakesAndLaddersMap = {
  2: 22,
  16: 98,
  36: 55,
  63: 93,
  43: 2,
  54: 12,
  74: 4,
  99: 1,
};

const gameMessages = {
  snake: "Ohh! bitten by a snake!",
  ladder: "Great! you climbed a ladder!",
  overshoot: "Try not to go over 100",
};

const createPlayers = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: `Player ${i + 1}`,
    pos: 0,
    color: `hsl(${(i * 100) % 360}, 70%, 50%)`,
  }));

const SnakeNLadder = ({ numOfPlayers = 4 }) => {
  const [players, setPlayers] = useState(createPlayers(numOfPlayers));
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceNum, setDiceNum] = useState(0);
  const [gameAction, setGameAction] = useState(null);
  const [winner, setWinner] = useState(null);

  const matrix = Array.from({ length: 10 }, (_, row) =>
    Array.from({ length: 10 }, (_, col) => {
      const cellNumber =
        row % 2 === 0 ? 100 - row * 10 - (9 - col) : 100 - row * 10 - col;
      return cellNumber;
    })
  );

  const handleRoll = () => {
    if (winner) return;

    const dice = rollDice();
    setDiceNum(dice);
    setGameAction(null);

    const allPlayers = [...players];
    const current = allPlayers[currentPlayer];
    let newPos = current.pos + dice;

    if (SnakesAndLaddersMap[newPos]) {
      const jumpTo = SnakesAndLaddersMap[newPos];
      const message =
        jumpTo > newPos ? gameMessages.ladder : gameMessages.snake;
      setGameAction(`${current.id}: ${message}`);
      newPos = jumpTo;
    }

    if (newPos <= 100) {
      allPlayers[currentPlayer] = { ...current, pos: newPos };
      setPlayers(allPlayers);
      if (checkWinner(newPos)) {
        setWinner(current.id);
        return;
      }
    } else {
      setGameAction(`${current.id}: ${gameMessages.overshoot}`);
    }

    setCurrentPlayer((currentPlayer + 1) % numOfPlayers);
  };

  const handleRestart = () => {
    if (!window.confirm("Restart the game?")) return;
    setPlayers(createPlayers(numOfPlayers));
    setCurrentPlayer(0);
    setDiceNum(0);
    setGameAction(null);
    setWinner(null);
  };

  return (
    <div className="snake-n-ladder">
      <h1>Snake-N-Ladder</h1>

      <div className="game-matrix">
        {matrix.map((row, rIdx) => (
          <div
            key={`row-${rIdx}`}
            className={rIdx % 2 === 0 ? "row" : "row-reverse"}
          >
            {row.map((cell) => (
              <div className="cell" key={cell}>
                {cell}
                <div className="players-inside">
                  {players
                    .filter((p) => p.pos === cell)
                    .map((p, idx) => (
                      <span
                        key={p.id}
                        className="player-token"
                        style={{ backgroundColor: p.color }}
                        title={p.id}
                      >
                        {p.id.slice(-1)}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="game-stats">
        <h3>🎲 Dice: {diceNum || "-"}</h3>
        <h4>🎯 Current: {players[currentPlayer].id}</h4>
        {players.map((p) => (
          <div key={p.id}>
            {p.id}: {p.pos}
          </div>
        ))}
        {gameAction && <strong>{gameAction}</strong>}
        {winner && <h2>🏆 {winner} wins!</h2>}
      </div>

      <button
        className="action-button"
        onClick={winner ? handleRestart : handleRoll}
      >
        {winner ? "Restart" : `${players[currentPlayer].id} → Roll`}
      </button>
    </div>
  );
};

export default SnakeNLadder;
