class Card {
  constructor(suit, rank, value) {
      this.suit = suit;
      this.rank = rank;
      this.value = value;
  }
}
class Deck {
  constructor() {
      this.cards = [];    
  }      
  createDeck() {
      let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
      let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
      let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      for (let i = 0; i < suits.length; i++) {
          for (let j = 0; j < ranks.length; j++) {
              this.cards.push(new Card(suits[i], ranks[j], values[j]));
          }
      }
  }
  shuffleDeck() {
     let location1, location2, tmp;
     for (let i = 0; i < 1000; i++) {
         location1 = Math.floor((Math.random() * this.cards.length));
         location2 = Math.floor((Math.random() * this.cards.length));
         tmp = this.cards[location1];
         this.cards[location1] = this.cards[location2];
         this.cards[location2] = tmp;
      }
  }
}
class Player {
  constructor(name) {
      this.playerName = name;
      this.playerCards = [];
  }
}
class Board {
  constructor() {
      this.cardsInMiddle = [];
      this.players = [];
  }
  start(playerOneName, playerTwoName) {
      this.players.push(new Player(playerOneName));
      this.players.push(new Player(playerTwoName));
      let d = new Deck();
      d.createDeck();
      d.shuffleDeck();    
      this.players[0].playerCards = d.cards.slice(0, 26);
      this.players[1].playerCards = d.cards.slice(26, 52);
  }
}
let gameBoard = new Board();
gameBoard.start('Mario', 'Luigi');
console.log(gameBoard.players)

for(var i=0;i<3;i++){
  if(gameBoard.players[0].playerCards[i].value=== gameBoard.players[1].playerCards[i].value){
    console.log("tie");
  }
  else if(gameBoard.players[0].playerCards[i].value> gameBoard.players[1].playerCards[i].value){
       console.log("you win "); 
  }
    else{
      console.log("you lost");
    }
  
}
class Rank {
  StringBuilder displayCard = new StringBuilder();
        
  switch(rank){
      case 11:
          displayCard.append("Jack");
          break;
      case 12:
          displayCard.append("Queen");
          break;
      case 13:
          displayCard.append("King");
          break;
      case 14:
          displayCard.append("Ace");
          break;    
      default:
          displayCard.append(rank); 
          break;
  }
  
  displayCard.append(" of "); 
  
  switch(suit){
      case 0:
          displayCard.append("Spades");
          break;
      case 1:
          displayCard.append("Hearts");
          break;
      case 2:
          displayCard.append("Clubs");
          break;
      case 3:
          displayCard.append("Diamonds");
          break;
      default: 
          break;
  }
    return displayCard.toString();
}
}