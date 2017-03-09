/*Ask the user for a string and print out whether this string is a palindrome or not. (A palindrome is a string that reads the same forwards and backwards.)*/

function palindrome(word) {
	if(word == word.split("").reverse().join("")) {
		console.log(word + ", is a palindrome.");
	}else {
		console.log(word + ", is not a palindrome.");
	}
}

palindrome("noon");
palindrome("siesta");