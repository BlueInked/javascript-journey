/* Write a program (function!) that takes a list and returns a new list that contains all the elements of the first list minus all the duplicates.
 */

 
function noDuplicates(arr1, arr2) {
	 var arr3 = arr1.concat(arr2);
	 alert(Array.from(new Set(arr3)));
	
}

noDuplicates([1,5,7,3,5,3,2,3,4], [4,5,7,3,2,7,4,2,3,4,5,6])