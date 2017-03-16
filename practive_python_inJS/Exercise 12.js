/* Write a program that takes a list of numbers (for example, a = [5, 10, 15, 20, 25]) and makes a new list of only the first and last elements of the given list. For practice, write this code inside a function. */

var enders = []

function theEnds(arr) {
	enders.push(arr[0]);
	enders.push(arr.pop());
	alert(enders);
}

theEnds([5, 10, 15, 20, 25])