quiz = {
	"name" : "Super Hero Quiz - BLERD Edition",
	"description" : "How many superheroes can you name?",
	"question" : "What is the real name of ",
	"questions" : [
	{
		"question" : "Storm", 
		"answer" : "Ororo Muroe"
	},
	{
		"question" : "Static", 
		"answer" : "Virgil Hawkins"
	},
	{
		"question" : "Black Panther", 
		"answer" : "T'Challa"
	},
	{
		"question" : "Icon", 
		"answer" : "Augustus Freeman IV"
	},
	{
		"question" : "Cyborg", 
		"answer" : "Victor Stone"
	},
	{
		"question" : "Green Lantern(4th)", 
		"answer" : "John Stewart"
	},
	{
		"question" : "Spectrum", 
		"answer" : "Monica Rambeau"
	},
	{
		"question" : "Voodoo", 
		"answer" : "Priscilla Kitaen"
	},
	{
		"question" : "Spawn", 
		"answer" : "Al Simmons"
	},
	{
		"question" : "Bumblebee", 
		"answer" : "Karen Beecher"
	},
	{
		"question" : "Moon Girl", 
		"answer" : "Lunella Lafayette"
	},
	{
		"question" : "Misty Knight", 
		"answer" : "Mercedes Knight"
	},
	{
		"question" : "Iroheart", 
		"answer" : "Riri Williams"
	},
	{
		"question" : "Vixen", 
		"answer" : "Mari McCabe"
	},
	{
		"question" : "Blade", 
		"answer" : "Eric Brooks"
	},
	{
		"question" : "Falcon", 
		"answer" : "Sam Wilson"
	},
	{
		"question" : "Power Man/Luke Cage", 
		"answer" : "Carl Lucas"
	},
	{
		"question" : "Black Lightning", 
		"answer" : "Jefferson Pierce"
	},
	{
		"question" : "War Machine", 
		"answer" : "James Rhodes"
	},
	{
		"question" : "Batwing", 
		"answer" : "David Zavimbe"
	},
	{
		"question" : "Steel", 
		"answer" : "John Henry Irons"
	},
	{
		"question" : "Blue Marvel", 
		"answer" : "Adam Brashear"
	},
	{
		"question" : "Brother Voodoo", 
		"answer" : "Jericho Drumm"
	},
	{
		"question" : "Cloak", 
		"answer" : "Ty Johnson"
	},
	{
		"question" : "Deathlok", 
		"answer" : "Michael Collins"
	},
	{
		"question" : "Meteor Man", 
		"answer" : "Jefferson Reed"
	},
	{
		"question" : "Rocket", 
		"answer" : "Raquel Ervin"
	},
	{
		"question" : "Strafe", 
		"answer" : "Malcolm King"
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