const listOfNeighbours = [
 ["Canada", "Mexico"],
 ["Spain"],
 ["Norway", "Sweden", "Russia"],
 ];

 function neighbouring(array){
  for(let i=0; i< array.length; i++){
   for(let j=0; j< array[i].length; j++){
    console.log('Neighbour: ', array[i][j]);
   }
  }
 }

 neighbouring(listOfNeighbours);
//cd bootcamp\BC_exercises\js 
//node 13.1-loop_in_a_loop.js