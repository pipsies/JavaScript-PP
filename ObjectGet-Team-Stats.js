const team = {
    _players: [
      {firstname: 'Lucy', lastname: 'smith', age: 24},
      {firstname: 'John', lastname: 'smith', age: 24},
      {firstname: 'Dean', lastname: 'smith', age: 24}
    ],
    _games: [
      {opponent: 'red', teamPoints: 5 , opponentPoints: 0},
      {opponent: 'blue', teamPoints: 15 , opponentPoints: 4},
      {opponent: 'pink', teamPoints: 2 , opponentPoints: 10}
    ],
  get players() {
  return this._players;
  },
  get games() {
    return this._games;
  },
  
  addPlayer(newFirstName, NewLastName, NewAge){
    let player = {
      firstname: newFirstName,
      lastname: NewLastName,
      age: NewAge
    };
  
  this.players.push(player);
  
  },
  
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
  
    this.games.push(game);
  }
  };
  
  team.addPlayer('Bugs', 'Bunny', 17);
  console.log(team.players)
  team.addGame('Titans', 100, 98);
  console.log(team.games)