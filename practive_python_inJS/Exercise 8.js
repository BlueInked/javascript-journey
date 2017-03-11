/*Make a two-player Rock-Paper-Scissors game. (Hint: Ask for player plays (using input), compare them, print out a message of congratulations to the winner, and ask if the players want to start a new game)

Remember the rules:

Rock beats scissors
Scissors beats paper
Paper beats rock
*/


var gameplay = prompt("Do you want to play Rock Paper Scissors?");



function rockPaperScissors() {
	
	var player1 = prompt("What is your name player one?");
	var player2 = prompt("And your name player two?");
	
	var player1Turn = prompt("Choose: Paper, Scissors, or Rock, " + player1);
	var player2Turn = prompt("Choose: Paper, Scissors, or Rock, " + player2);
	
	if (player1Turn == "Paper" && player2Turn == "Rock" || player1Turn == "Scissors" && player2Turn == "Paper" || player1Turn == "Rock" && player2Turn == "Scissors") {
		alert(player1 + " , You win!!");
	} else if (player2Turn == "Paper" && player1Turn == "Rock" || player2Turn == "Scissors" && player1Turn == "Paper" || player2Turn == "Rock" && player1Turn == "Scissors") {
		alert(player2 + " , You win!!");
	} else if (player1Turn == player2Turn) {
		alert("Players have Tied...");
	} else {
		alert("Someone doesn't know how to play the game...");
	}
	var gameplay = prompt("Do you want to play Rock Paper Scissors?");
} 

function game() {
	
	while (gameplay != "no" || "No" || "n" || "N") {
		rockPaperScissors();
		break;
	}
}

game();