

function numOfSiblings(){
 let numSiblings = window.prompt('How many siblings do you have?');
 numSiblings = Number(numSiblings);
 if(numSiblings != NaN){
  if(numSiblings === 1){
   console.log('1 sibling');
  }else if(numSiblings >1){
   console.log('more than 1 sibling');
  }else{
   console.log('No siblings');
  }
 }
}


/*the '==' sign compares ONLY the value of the variable.
the '===' compares the value and the type of the variable.
*/

/*cd bootcamp\BC_exercises\js */
/*node 4.1_number_of_siblings.js*/