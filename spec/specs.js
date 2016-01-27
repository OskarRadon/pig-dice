describe('Player', function() {
  it("makes a new player with currrentRoll array", function() {
    var testPlayer = new Player("Mike",[6], 12);
    expect(testPlayer.playerName).to.equal("Mike");
    expect(testPlayer.currentRoll).to.eql([6]);
    expect(testPlayer.totalScore).to.equal(12);
  });
});
