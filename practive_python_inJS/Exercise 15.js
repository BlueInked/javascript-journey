/* Write a program (using functions!) that asks the user for a long string containing multiple words. Print back to the user the same string, except with the words in backwards order. For example, say I type the string:

  My name is Michele
Then I would see the string:

  Michele is name My
shown back to me. */

var str = prompt("Give me a string:")

//This function makes the string completely backwards
function backwards (str) {
	alert("This is your string backwards: " + str.split("").reverse().join(""));
}
 
 backwards(str);
 
 
//This fuction reverses the word order for the string
function reverse (str) {
	var newStr = str.split(" ").reverse().join(" ");
	alert("This is your string in reverse: " + newStr);
}

reverse(str);