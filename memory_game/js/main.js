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
    var cardElement = this.getAttribute('data-id');
    console.log("User flipped " + (cards[cardElement].rank));
    cardsInPlay.push(cards[cardElement].rank);
    checkForMatch();
    console.log(cards[cardElement].cardImage);
    console.log(cards[cardElement].suit);
};

var checkForMatch = function() {
    this['src'] = (cards[0,1,2,3].cardImage);
    cardElement.setAttribute(src[cardId].cardImage);
    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again");
    }
};

var createBoard = function() {
    for (var i = 0; i < cards.length;i++){
        var cardElement = document.create.Element('img');
        cardElement.setAttribute('src', "image/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

createBoard();