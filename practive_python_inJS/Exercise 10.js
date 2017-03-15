/*Ask the user for a number and determine whether the number is prime or not. (For those who have forgotten, a prime number is a number that has no divisors.). You can (and should!) use your answer to Exercise 4 to help you. Take this opportunity to practice using functions, described below.*/

var divisors = [];

function isPrime() {
	num = prompt("Give me a number:")
	for(s = 1; s <= num; s++) {
		if (num % s == 0) {
			divisors.push(s);
		}
	}
	if(divisors[1] == num) {
		alert("Your number, " +num+ " is a prime number!")
	} else{
		alert("Your number, " +num+ " is not a prime number!")
	}
}

isPrime();