describe('Player', function() {
  it("makes a new player", function() {
    var testPlayer = new Player("Mike");
    expect(testPlayer.playerName).to.equal("Mike");
  });
});
