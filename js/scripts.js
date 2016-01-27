function diceRoll() {
  var randomDice = Math.floor(6 * Math.random() + 1);

  if (randomDice !== 1) {
    return randomDice;
  } else {
    // switchPlayer();
  }
}

// var totalRound = 0;
// totalRound += diceRoll();
//
// function switchPlayer() {
// }
//
// function calculateScore() {
// }

function Player (playerName, totalScore) {
  this.playerName = playerName;
  this.totalScore = totalScore;
}
