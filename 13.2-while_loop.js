const people = ["Greg", "Mary", "Devon", "James", "Elizabeth"];
let lengths = [];
let elemLength=0;

function lengthesOfWords(array){
 let i=0;
 let arrayLength =  array.length; 
 while(i < arrayLength)
 {  
  lengths.push(array[i].length);
  i++;
 }
 console.log('lengths array: \n',lengths); 
}
lengthesOfWords(people);
/********************/

//13.2.2

/*
the for loop is much easier and more handable.
you define all parameter of a loop in one line.

what will happen if you did not set the incremental variable in while loop or the stopping condition!?  

*/

//cd bootcamp\BC_exercises\js 
//node 13.2-while_loop.js