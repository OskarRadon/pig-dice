function diceRoll() {
  var randomDice = Math.floor(6 * Math.random() + 1);
  return randomDice;
  // var rolls = [];
  // rolls.push(randomDice);
}

function Player (playerName, currentRoll, totalScore) {
  this.playerName = playerName;
  this.currentRoll = currentRoll;
  this.totalScore = totalScore;
}
