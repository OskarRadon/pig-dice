function diceRoll() {
  var randomDice = Math.floor(6 * Math.random() + 1);
  return randomDice;
}
var totalRound = totalRound + diceRoll();
// var rolls = [];
// rolls.push(randomDice);

function Player (playerName, totalScore) {
  this.playerName = playerName;
  this.totalScore = totalScore;
}
