/* Write a program that asks the user how many Fibonnaci numbers to generate and then generates them. Take this opportunity to think about how you can use functions. Make sure to ask the user to enter the number of numbers in the sequence to generate.(Hint: The Fibonnaci seqence is a sequence of numbers where the next number in the sequence is the sum of the previous two numbers in the sequence. The sequence looks like this: 1, 1, 2, 3, 5, 8, 13, …) */

function fib(n) {
    var arr = [(n + 1)].fill(0);
    arr[1] = 1;
    for (var i = 2; i <= n; i++){
    arr[i] = arr[i-1] + arr[i-2]
    }
    alert(arr[n])