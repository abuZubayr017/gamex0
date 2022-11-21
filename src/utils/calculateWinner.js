const winningMatrix = {
  0: [[1, 2], [3, 6], [4, 8]],
  1: [[0, 2], [4, 7]],
  2: [[0, 1], [5, 8], [4, 6]],
  3: [[0, 6], [4, 5]],
  4: [[3, 5], [1, 7], [2, 6], [0,8]],
  5: [[2, 8], [3, 4]],
  6: [[0, 3], [7, 8], [4, 2]],
  7: [[6, 8], [1, 4]],
  8: [[6, 7], [2, 5], [0, 4]]
}


export default function calculateWinner(cellVal, cellIndex, newNumberOfTurn) { 
  let winningRange = winningMatrix[cellIndex]

  for(let i=0; i < winningRange.length; i++) {
    const currentVal = cellVal[cellIndex]
    const firstOption = cellVal[winningRange[i][0]];
    const secondOption = cellVal[winningRange[i][1]];

    if(currentVal === firstOption && firstOption === secondOption) {
      return{
        hasResult: true,
        winner: currentVal,
        winningCombination: [cellIndex, winningRange[i][0], winningRange[i][1]]
      }
    }
  };

  if(newNumberOfTurn === 0) {
    return {
      hasResult: true,
      winner: undefined,
      winningCombination: []
    }
  }

  return {
    hasResult: false,
    winner: undefined,
    winningCombination: []
  }
}
