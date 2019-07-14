var cards = ["queen", "quene", "king", "king"];

var cardsInPlay = [];

function checkForMatch () {    //checking for match
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}


funtction flipcard () {    //user flips a card
	var cards = cardID;
	console.log("User flipped " + (cards[cardId].rack)); 
	cardsInPlay.push(cards[cardId].rack);
	checkForMatch();
	
}

flipcard(0);
flipcard(2);



/*
var cardOne =  "queen";
var cardTwo =  "king";
var cardThree =  "queen";
var cardFour =  "king";

console.log("User flipped + cardOne");
*/

/*var cardOne = [0];
cardsInPlay.push('cardOne');
console.log("User Flipped " + cardOne);

var cardTwo = [2];
cardsInPlay.push('cardTwo');
console.log("User Flipped " + cardTwo); */

//Check for match
/*
if (cardsInPlay.length === 2) {
  if( cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  }
    else{
      alert("Sorry, try again.");
      console.log(cardsInPlay);
    }
}  */


