/*Create a program that asks the user to enter their name and their age. Print out a message addressed to them that tells them the year that they will turn 100 years old.

Extras:

Add on to the previous program by asking the user for another number and printing out that many copies of the previous message. 
Print out that many copies of the previous message on separate lines. (Hint: the string "\n is the same as pressing the ENTER button)*/

function toOneHundred() {
	
var age = prompt("How old are you?");
var name = prompt("What is your name?");

var years = (100 - age);
var hundred = (2017 + years);

alert(name + ", you will be one hundred in " + hundred);
};

toOneHundred();