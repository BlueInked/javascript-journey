var question1 = "This Marvel character was portrayed in  the an onscreen trilogy by actor, Wesley Snipes.  Who is he?"
var question2 = "This X-man is said to be a master of the weather.  What is her code name?"
var question3 = "One of this character's classic catchphrases is \"Sweet Christmas!|\"  Who is he?"
var question4 = "During the \"Death of Superman\" storyline John Henry Irons donned armor and became who?"
var question5 = "What is Static's (from Milestons/DC's Static Shock Comic) real name?"
var question6 = "What is the codename of Icon's female sidekick?"
var question7 = "In the comic/cartooon series \"The Boondocks\" what is the name of Huey Freeman's younger brother?"
var question8 = "Whose mother told him that he was: \"Movin' with your auntie and unclie in Bal-Air\" (Name the actor.)?"
var question9 = "Who played materialisic Lisa Turtle on the series \"Saved By the Bell\"?"
var question10 = "What woman coined the term \"Womanism\"?"


var answer1 = "Blade"
var answer2 = "Storm"
var answer3 = "Luke Cage"
var answer4 = "Steel"
var answer5 = "Virgil Hawkins"
var answer6 = "Rocket"
var answer7 = "Riley"
var answer8 = "Will Smith"
var answer9 = "Lark Voorhies"
var answer10 = "Alice Walker"

var quiz = [[question1, answer1],[question2, answer2],[question3, answer3],[question4, answer4],[question5, answer5],[question6, answer6],[question7, answer7],[question8, answer8],[question9, answer9],[question10, answer10]];

//console.log(quiz[3][1]);
//Should Print: "Steel"
//console.log(quiz[0][0]);
/*Should Print: "This Marvel character was portrayed in  the an onscreen trilogy by actor, Wesley Snipes.  Who is he?"*/

var score = 0 //intializes score

for(var i = 0; i < quiz.length; i++) {
	//answer from user
	var  answer = prompt(quiz[i][0]);
	//check if answer is correct
	if(answer === quiz[i][1]) {
		alert("Correct!");
		score++;
	} else {
		alert("Wrong!");
	};
};
alert("Game Over, you scored " + score + " points");