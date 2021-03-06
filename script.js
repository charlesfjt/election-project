const politician = {};
politician.name = "";
politician.electionResults = null;
politician.totalVotes = 0;

const createPolitician = function (name) {
  const politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;

  politician.tallyUpTotalVotes = function () {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  return politician;
}

const leslie = createPolitician("Leslie Doesitall");
const joey = createPolitician("Joey Rocks");

leslie.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

joey.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

leslie.electionResults[9] = 1;
joey.electionResults[9] = 28;

leslie.electionResults[4] = 17;
joey.electionResults[4] = 38;

leslie.electionResults[43] = 11;
joey.electionResults[43] = 27;

leslie.tallyUpTotalVotes();
joey.tallyUpTotalVotes();

if (leslie.totalVotes > joey.totalVotes) {
  winner = leslie.name;
} else if (joey.totalVotes > leslie.totalVotes) {
  winner = joey.name;
} else {
  winner = "DRAW";
}
console.log("And the winner is " + winner + "!!!");