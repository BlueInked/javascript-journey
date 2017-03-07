/*Create a program that asks the user for a number and then prints out a list of all the divisors of that number. (If you don’t know what a divisor is, it is a number that divides evenly into another number. For example, 13 is a divisor of 26 because 26 / 13 has no remainder.)*/

var divisors = [];

function getDivisors() {
	num = prompt("Give me a number:")
	for(s = 1; s <= num; s++) {
		if (num % s == 0) {
			divisors.push(s);
		}
	}
	console.log(divisors);
	alert("These are " +num+ "'s divisors: " +divisors);
}

getDivisors();