import { useState } from "react";
import Board from "./Board";
import Modal from "./Modal";
import calculateWinner from "../utils/calculateWinner"

export default function Game() {
  const [cellValues, setCellValues] = useState(["", "", "", "", "", "", "", "", ""])
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false)
  const [numberOfTurn, setNumberOfTurn] = useState(9)
  const [winner, setWinner] = useState();
  const [winningCombination, setWinningCombination] = useState([])


  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";

  const cellClicked = (cellIndex) => {
    if(isCellEmpty(cellIndex)) {

      const newCellVal = [...cellValues]
      newCellVal[cellIndex] = xIsNext ? "X" : "0";

      const newNumberOfTurn = numberOfTurn - 1;


      const calcResult = calculateWinner(newCellVal, cellIndex, newNumberOfTurn)

     

      setCellValues(newCellVal)
      setXIsNext(!xIsNext)
      setIsGameOver(calcResult.hasResult)
      setNumberOfTurn(newNumberOfTurn)
      setWinner(calcResult.winner)
      setWinningCombination(calcResult.winningCombination);
    }
  }

  const onNewGame = () => {
      setCellValues(["", "", "", "", "", "", "", "", ""]);
      setXIsNext(true)
      setIsGameOver(false)
      setNumberOfTurn(9)
      setWinner(undefined)
      setWinningCombination([]);
  }

  return (
    <>
    <div id='game'>
        <h1>The Best Game For Waste Time</h1>
        <Board cellValues={cellValues} winnerCombination={winningCombination} cellClicked={cellClicked}/>
    </div>
    <Modal gameOver={isGameOver} winner={winner} onNewGame={onNewGame}/>
    </>
  )
}
