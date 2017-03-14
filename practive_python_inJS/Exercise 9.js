/* Generate a random number between 1 and 9 (including 1 and 9). Ask the user to guess the number, then tell them whether they guessed too low, too high, or exactly right. (Hint: remember to use the user input lessons from the very first exercise)

Extras:

Keep the game going until the user types “exit”
Keep track of how many guesses the user has taken, and when the game ends, print this out. */

	var min = Math.ceil(1);
	var max = Math.floor(9);
	
	var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
	
	var guesses = 0;

function guessTheNumber() {
	
	var yourGuess = prompt("I'm thinking of a number between 1 and 9, what is it?");
	
	if(yourGuess == ranNum) {
		alert("You guessed the number correctly it was " +ranNum+ " you guessed it in " +guesses+ " number of guesses!");
	}
	
	while (yourGuess != "exit")	{
		if(yourGuess > ranNum) {
			alert("You guessed too high");
			guesses += 1;
			var yourGuess = prompt("I'm thinking of a number between 1 and 9, what is it?");
		}
		if(yourGuess < ranNum) {
			alert("You guessed too low");
			guesses += 1;
			var yourGuess = prompt("I'm thinking of a number between 1 and 9, what is it?");
		} 
		if(yourGuess == ranNum) {
			alert("You guessed the number correctly it was " +ranNum+ " you guessed it in " +guesses+ " number of guesses!");
			yourGuess = "exit"
	}
	}	

}


guessTheNumber();