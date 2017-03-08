/* Take two lists, say for example these two:

  a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
and write a program that returns a list that contains only the elements that are common between the lists (without duplicates). Make sure your program works on two lists of different sizes.

Extras:

Randomly generate two lists to test this
Write this in one line of Python (don’t worry if you can’t figure this out at this point - we’ll get to it soon) */

var length = prompt("How long should your first array be?");
var arr1 = [];

for (var i=0, t=length; i<length; i++) {
    arr1.push(Math.round(Math.random() * t))
}
console.log(arr1);


var length2 = prompt("How long should your second array be?");
var arr2 = [];

for (var i=0, t=length2; i<length2; i++) {
    arr2.push(Math.round(Math.random() * t))
}
console.log(arr2);


function bothArr(arr1, arr2) {
	var arr3 = arr1.concat(arr2);
	 console.log(Array.from(new Set(arr3)));
}

bothArr(arr1, arr2);