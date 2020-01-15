
let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

let cardOne = cards[2];

cardsInPlay.push(cards[2]);


let cardTwo = cards[3];

cardsInPlay.push(cards[3]);

console.log(cardsInPlay);

if (cardsInPlay.length === 2 ) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ("You found a match");
	} else {
		alert ("Sorry try again");
	}
}