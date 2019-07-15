var cards = [
{
	rank: "queen",
	suit: "heart",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-dimonds.png"
},
{
	rank: "king",
	suit: "heart",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "king",
	suit: "diamonds"
	cardImage: "images/king-of-diamonds.png"
},
];

var cardsInPlay = [];

var flipCard = function() {
    var cardId = parseInt(this.getAttribute('data-id'),10); // use parseInt to convert to integer
    console.log("User flipped " + (cards[cardId].rank));
    this.src = cards[cardId].cardImage; // add this to set the image
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
};

var checkForMatch = function() {
    this['src'] = (cards[0,1,2,3].cardImage);
    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again");
    }
};
