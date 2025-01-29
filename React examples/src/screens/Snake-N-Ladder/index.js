import React, { useMemo, useState } from 'react'
import "./style.css"

const matrix = Array.from({length: 10}, () => {
   return new Array(10).fill(0).map((_,i) => i+1)
})

const initialPlayersObj = (numOfPlayers) => {
    const players = []
    Array(numOfPlayers).fill(0).forEach((_, index) => players.push({
        id: `Player ${index+1}`,
        pos: 0,
        coords: [0,0]
    }))
    return players; 
}

const rollDice = () => {
    return Math.floor(Math.random()*6) + 1;
}

const getNextPlayer = (currentPlayerIndex, totalPlayer) => {
    return (currentPlayerIndex+1)%totalPlayer;
}

const SnakesNLaddersOfGame = {
    2:22,
    16:98,
    36:55,
    63:93,
    43:2,
    54:12,
    74:4,
    99:1
}

const checkWinner = (pos) => {
    return pos === 100;
}

const gameActionMessages = {
    stairs: "Great! you have climbed the stairs",
    snake: "Ohh! you have been bitten by the snake",
    numMoreThan100: "Try to get to 100, not more than that"
}

const SnakeNLadder = ({numOfPlayers = 4}) => {
    
    const [players, setPlayers] = useState(initialPlayersObj(numOfPlayers))
    const [currentPlayer, setCurrentPlayer] = useState(0) // taking index of players array
    const [winningStatus, setWinningStatus] = useState(null)
    const [diceNum, setDiceNum] = useState(0)
    const [gameAction, setGameAction] = useState(null) // for showing stairs or snake bite action

    const handleOnRoll = () => {
        const diceNum = rollDice();
        setDiceNum(diceNum);
        setGameAction(prev => null)
        const allPlayers = [...players];
        let newPos = allPlayers[currentPlayer].pos + diceNum;

        if(SnakesNLaddersOfGame[newPos]) {
            if(newPos < SnakesNLaddersOfGame[newPos]) {
                setGameAction(prev=> `${players[currentPlayer].id}, ${gameActionMessages.stairs}`)
            }else {
                setGameAction(prev => `${players[currentPlayer].id}, ${gameActionMessages.snake}`)
            }
            newPos = SnakesNLaddersOfGame[newPos]
        }

        if(newPos <=100) {
            allPlayers[currentPlayer].pos = newPos
            setPlayers(allPlayers);
            if(checkWinner(newPos)){
                setWinningStatus(`${players[currentPlayer].id} wins`)
            }
        }else {
            setGameAction(prev => `${players[currentPlayer].id}, ${gameActionMessages.numMoreThan100}`)
        }
        setCurrentPlayer(getNextPlayer(currentPlayer, numOfPlayers))
    }

    const handleRestart = () => {
        setPlayers(initialPlayersObj(numOfPlayers))
        setCurrentPlayer(0)
        setDiceNum(0)
        setWinningStatus(null)
    }

  return (
    <div className='snake-n-ladder'>
        <h1>
            Snake-N-Ladder Game
        </h1>
        <div className='game-matrix'>
            {
                matrix.map((row, rowIndex) => {
                    return <div className={rowIndex%2 ? 'row-reverse' :'row'} key={`row-${rowIndex+1}`}>
                    {
                        row.map((col, colIndex) => {
                            return <button key={`cell-${colIndex+1}`} className='cell'>
                                {rowIndex * 10 + col}
                            </button>
                        }) 
                    }
                </div>
                })
            }
        </div>
        <div className='game-stats'>
            <div>
                <h3>Dice number: {diceNum || "game to be started"}</h3>
                {
                    players.map((player, index) => {
                        return <div key={`player-${index+1}`}>
                            {player.id}: {player.pos}
                        </div>
                    })
                }
            </div>
            {gameAction ? <strong>{gameAction}</strong> :""}
            {winningStatus ? <strong>{winningStatus}</strong> :""}
        </div>
        {
            winningStatus ? <button className="action-button" onClick={handleRestart}>Restart</button> : <button className="action-button" onClick={handleOnRoll}>
                {players[currentPlayer].id}: Roll Dice
            </button>
        }
    </div>
  )
}

export default SnakeNLadder