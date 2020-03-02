
// deck; ace stands for 11 and jack queen king stand for 10 each
var deck = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,  
			11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,  
			11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 
			11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]; 

//img url array
var deckImg = ["1.png", "2.png","3.png", "4.png", "5.png", "6.png", 
				"7.png", "8.png", "9.png", "10.png", "11.png", "12.png", 
				"13.png", "14.png", "15.png", "16.png", "17.png", "18.png", 
				"19.png", "20.png", "21.png", "22.png", "23.png", "24.png", 
				"25.png", "26.png", "27.png", "28.png", "29.png", "30.png", 
				"31.png", "32.png", "33.png", "34.png", "35.png", "36.png", 
				"37.png", "38.png", "39.png", "40.png", "41.png", "42.png", 
				"43.png", "44.png", "45.png", "46.png", "47.png", "48.png", 
				"49.png", "50.png", "51.png", "52.png"];

//initial score of each player as the game starts
var dealerScore = 0;
var playerScore = 0;

//main function of the game
function deal(){
	document.getElementById("dealer1").src = "back.png";
	document.getElementById("dealer2").src = "back.png";

	document.getElementById("player1").src = "back.png";
	document.getElementById("player2").src = "back.png";
	
}


//function to draw a random card from the deck
function drawRandomCard(deck){
	var rand = Math.floor(Math.random() * 52);
	
	return deck[rand];
}

/*
*as the game starts, the player and the dealer are
*handed two cards	the player has to click on the start button
*in order for the game to start
*/
function start(){
	document.getElementById("btnDraw").style.display = "inline-block";
	document.getElementById("btnHold").style.display = "inline-block";
	
	//dealer gets 2 cards
	var dealer = document.getElementById("dealerScore");

	var dealerArr = [drawRandomCard(deck), drawRandomCard(deck)];
	console.log(dealerArr);

	dealerScore = dealerArr[0] + dealerArr[1]; //the sum of two cards
	console.log(dealerScore);

	dealer.innerHTML = dealerScore;	

	document.getElementById("dealer1").src = deckImg[dealerArr[0] -1 ];
	document.getElementById("dealer2").src = deckImg[dealerArr[1] -1 ];

	//player gets 2 cards
	var player = document.getElementById('playerScore');
	var playerArr = [drawRandomCard(deck), drawRandomCard(deck)];
	console.log(playerArr);

	playerScore = playerArr[0] + playerArr[1];//the sum of two cards
	console.log(playerScore);

	player.innerHTML = playerScore;

	document.getElementById("player1").src = deckImg[playerArr[0] -1];
	document.getElementById("player2").src = deckImg[playerArr[1] -1];

	document.getElementById("reload").style.display = "none";

	if(dealerScore > 21)
	{
		document.getElementById("playerLabel").innerHTML = "Player has won this Hand!";
		document.getElementById("playerLabel").style.backgroundColor = "green";
		document.getElementById("btnDraw").style.display = "none";
		document.getElementById("btnHold").style.display = "none";
	}

	if(playerScore > 21)
	{
		document.getElementById("dealerLabel").innerHTML = "Dealer has won this Hand!";
		document.getElementById("dealerLabel").style.backgroundColor = "green";
		document.getElementById("btnDraw").style.display = "none";
		document.getElementById("btnHold").style.display = "none";
	}
}

//draw another card
function requestPlayerCard(){
	if(playerScore < 21){
		var player = document.getElementById('playerScore');
		playerScore += drawRandomCard(deck);
		player.innerHTML = playerScore;
	}

	else
		document.getElementById("btnDraw").style.display = "none";

	console.log(playerScore)

	//dealer has to pick a card while you wait until he reaches
	//17 or higher
	while(dealerScore <= 16)
	{
		var dealer = document.getElementById('dealerScore');
		dealerScore += drawRandomCard(deck);
		dealer.innerHTML = dealerScore;
	}

	if(dealerScore > 21)
	{
		document.getElementById("playerLabel").innerHTML = "Player has won this Hand!";
		document.getElementById("playerLabel").style.backgroundColor = "green";
		document.getElementById("btnDraw").style.display = "none";
		document.getElementById("btnHold").style.display = "none";
	}

	console.log(dealerScore)

	//dealer's winning condition
	if(dealerScore <= 21 && dealerScore > playerScore 
		|| playerScore == dealerScore
		|| playerScore > 21 && dealerScore <= 21)
	{
		document.getElementById("dealerLabel").innerHTML = "Dealer has won this Hand!";
		document.getElementById("dealerLabel").style.backgroundColor = "green";
		document.getElementById("btnDraw").style.display = "none";
		document.getElementById("btnHold").style.display = "none";
	}

	//player's winning condition
	else if(playerScore <= 21 && playerScore > dealerScore)
	{
		document.getElementById("playerLabel").innerHTML = "Player has won this Hand!";
		document.getElementById("playerLabel").style.backgroundColor = "green";
		document.getElementById("btnDraw").style.display = "none";
		document.getElementById("btnHold").style.display = "none";
	}
}

//hold button
function completeDealerHand(){
	document.getElementById("btnDraw").style.display = "none";
	document.getElementById("btnHold").style.display = "none";

	//dealer has to pick a card while you wait until he reaches
	//17 or higher
	while(dealerScore <= 16 && dealerScore < 22)
	{
		var dealer = document.getElementById('dealerScore');
		dealerScore += drawRandomCard(deck);
		dealer.innerHTML = dealerScore;
	}

	//dealer's winning condition
	if(dealerScore <= 21 && dealerScore > playerScore 
		|| playerScore == dealerScore
		|| playerScore > 21 && dealerScore <= 21)
	{
		document.getElementById("dealerLabel").innerHTML = "Dealer has won this Hand!";
		document.getElementById("dealerLabel").style.backgroundColor = "green";
		document.getElementById("btnDraw").style.display = "none";
		document.getElementById("btnHold").style.display = "none";
	}

	//player's winning condition
	else if(playerScore <= 21 && playerScore > dealerScore
			|| dealerScore > 21)
	{
		document.getElementById("playerLabel").innerHTML = "Player has won this Hand!";
		document.getElementById("playerLabel").style.backgroundColor = "green";
		document.getElementById("btnDraw").style.display = "none";
		document.getElementById("btnHold").style.display = "none";
	}

}