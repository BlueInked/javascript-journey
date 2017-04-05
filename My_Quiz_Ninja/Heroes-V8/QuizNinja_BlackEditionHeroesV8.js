
var quiz = {
	"name" : "Super Hero Quiz - BLERD Edition",
	"description" : "How many superheroes can you name?",
	"question" : "What is the real name of ",
	"questions" : [
	{
		"question" : "Storm", 
		"answer" : "Ororo Munroe"
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
		"question" : "Ironheart", 
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
};


//// views ////
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
var $start = document.getElementById("start");
var $form = document.getElementById("answer");

/// view functions ///

function update(element,content,klass) {
  var p = element.firstChild || document.createElement("p");
  p.textContent = content;
  element.appendChild(p);
  if(klass) {
    p.className = klass;
  }
}

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

// Event listeners
$start.addEventListener('click', function() { play(quiz) } , false);

// hide the form at the start of the game
hide($form);
  
//// function definitions ////

function play(quiz){
  var score = 0 // initialize score
  update($score,score);
  // hide button and show form
  hide($start);
  show($form);
  // add event listener to form for when it's submitted
  $form.addEventListener('submit', function(event) { 
    event.preventDefault();
    check($form[0].value);
    }, false);
  var i = 0;
  chooseQuestion();

  // nested functions
  
  function chooseQuestion() {
    var question = quiz.questions[i].question;
    ask(question);
  }
  
  function ask(question) {
    update($question,quiz.question + question);
    $form[0].value = "";
    $form[0].focus();
  }

  function check(answer) {
    if(answer === quiz.questions[i].answer){
      update($feedback,"Correct!","right");
      // increase score by 1
      score++;
      update($score,score);
    } else {
      update($feedback,"Wrong!","wrong");
    }
    i++;
    if(i === quiz.questions.length) {
      gameOver();
    } else {
      chooseQuestion();
    }
  }

  function gameOver(){
    // inform the player that the game has finished and tell them how many points they have scored
    update($question,"Game Over, you scored " + score + " points");
    hide($form);
    show($start);
  }
}
