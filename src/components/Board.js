import Cell from "./Cell"

export default function Board({cellValues, winnerCombination, cellClicked}) {
 
  return (
    <div id="board">
        {cellValues.map((val, idx) => {
            const isHighlight = winnerCombination && winnerCombination.indexOf(idx) >= 0
            return <Cell key={idx} value={val} isHighlight={isHighlight} showCase={() => cellClicked(idx)}/>
        })}
    </div>
  )
}
