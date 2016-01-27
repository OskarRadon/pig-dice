describe('Player', function() {
  it("makes a new player with currrentRoll array", function() {
    var testPlayer = new Player("Mike", 12);
    expect(testPlayer.playerName).to.equal("Mike");
    expect(testPlayer.totalScore).to.equal(12);
  });
});

describe('diceRoll', function() {
  it("generates a random number",function() {
    expect(isNaN(diceRoll())).to.equal(false);
  });
});

describe('addTotalScore', function(){
  it("adds value from diceRoll to player's totalScore")
  expect(testPlayer.totalScore).to.equal();
});
