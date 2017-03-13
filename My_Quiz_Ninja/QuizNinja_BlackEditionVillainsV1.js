quiz = {
	"name" : "Super Villain Quiz - BLERD Edition",
	"description" : "How many supervillains can you name?",
	"question" : "What is the real name of " ,
	"questions" : [
	{
		"question" : "Black Manta", 
		"answer" : "David"
	},
	{
		"question" : "Killer Croc", 
		"answer" : "Waylon Jones"
	},
	{
		"question" : "Chapel", 
		"answer" : "Bruce Stinson"
	},
	{
		"question" : "Black Mariah", 
		"answer" : "Mariah Dillard"
	},
	{
		"question" : "CottonMouth", 
		"answer" : "Cornell Cottonmouth"
	},
	{
		"question" : "Diamondback", 
		"answer" : "Willis Stryker"
	},
	{
		"question" : "Man-Ape", 
		"answer" : "M'Baku"
	},
	{
		"question" : "Tombstone", 
		"answer" : "Lonnie Lincoln"
	},
	{
		"question" : "Tattooed Man (III)", 
		"answer" : "Mark Richards"
	},
	{
		"question" : "Lady Marabunta", 
		"answer" : "Unknown"
	},
	{
		"question" : "Spider Girl (Old Man Logan)", 
		"answer" : "Ashley Barton"
	},
	{
		"question" : "Bushmaster", 
		"answer" : "John McIver"
	},
	{
		"question" : "Innuendo", 
		"answer" : "Unknown"
	},
	{
		"question" : "Fatality", 
		"answer" : "Yrra Cynril"
	},
	{
		"question" : "Copperhead (Kill Bill)", 
		"answer" : "Vernita Green"
	},
	{
		"question" : "Death Tiger", 
		"answer" : "Unknown"
	},
	{
		"question" : "Killjoy", 
		"answer" : "Killjoy"
	},
	{
		"question" : "K'Ruel", 
		"answer" : "Salamander K'Ruel"
	},
	{
		"question" : "Reverend Doctor Michael Ibn al-Hajj", 
		"answer" : "Achebe"
	},
	{
		"question" : "Killmonger", 
		"answer" : "N'Jadaka"
	},
	{
		"question" : "Moses Magnum", 
		"answer" : "Moses Magnum"
	},
	]
}

var score = 0;


function play(quiz) {
for(var i = 0; i < quiz.questions.length; i++) {
	question = quiz.questions[i].question;
	answer = ask(question);
	check(answer);
}
gameOver();

function ask(question) {
	return prompt(quiz.question + question);
}
function check(answer) {
	if(answer === quiz.questions[i].answer) {
		alert("Correct!");
		score++;
	} else {
		alert("Wrong!");
	}
}
function gameOver() {
	alert("Game Over, you scored " + score + " points.");
}
}


play(quiz);