
let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},

{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},

{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}

];

let cardsInPlay = [];


function checkForMatch() {

	if (cardsInPlay[0] === cardsInPlay[1])  {
		alert("You have found a match");
	} else {
		alert("Sorry try again");
	}
}



function flipCard () {

	const cardId = this.getAttribute('data-id');
	this.setAttribute("src", cards[cardId].cardImage);	

	cardsInPlay.push(cards[cardId].rank);
	checkForMatch ();

}




function createBoard() {
	for (let i = 0; i < cards.length; i++) {

  const cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		
	}
}

createBoard ();







