var cards = [
    {
        rank: "queen",
        suit: "heart",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "heart",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    },
];

var cardsInPlay = [];

var flipCard = function() {
    var cardId = this.getAttribute('data-id'); //cardId assumed in the array order O-3 like an HDD, "this = cards" from line 1, The getAttribute() method returns the value of the attribute with the specified name, of an element.
    console.log("User flipped " + (cards[cardId].rank));
    cardsInPlay.push(cards[cardId].rank);

    this.setAttribute('src', cards[cardId].cardImage) //the only way i can get the cards to show up the html page

    checkForMatch();
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
};

var checkForMatch = function() {
    if (cardsInPlay.length === 2) { //two card need to be in play
        if (cardsInPlay[0] === cardsInPlay[1]) { //Id0card = Id1card
            alert("You found a match!");
        } else {
            alert("Sorry, try again");
        }
        // reset()
    }
};


var createBoard = function() {
    // place all facedown
    for (var i = 0; i < cards.length; i++) {

        var cardElement = document.createElement('img');
        // console.log(cardElement);
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);

        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
        console.log(cardElement);
    }
}

// var reset = function() {
//     cardsInPlay = [];
//     createBoard()
//     document.re
//     return "hello return"
// }

createBoard();
// console.log('hello')

