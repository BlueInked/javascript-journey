/*Let’s say I give you a list saved in a variable: a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]. Write a JS  function that takes this list a and makes a new list that has only the even elements of this list in it.*/

a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

function even(value) {
	return value % 2 == 0;
};

var filtered = a.filter(even);

alert(filtered);
	