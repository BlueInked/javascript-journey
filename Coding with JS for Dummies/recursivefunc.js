function squareItUp(startingNumber) {
    //Terminnation conditions, invalid input
   if ((typeof startingNumber != 'number') || (startingNumber <= 1 )) {
       return - 1; //exit the function
   }
   square = startingNumber * startingNumber;
    //base condition
   if (square > 1000000) {
       console.log(square); //print the final value
   } else { //if the base conditon isn't met, do it again
       squareItUp(square);
   }
}