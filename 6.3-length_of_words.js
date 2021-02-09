
const people = ["Greg", "Mary", "Devon", "James", "Elizabeth"];

let lengths = new Array;
let elemLength=0;
function lengthesOfWords(array){
 for(let i=0; i < array.length; i++){
  //console.log(array[i].length)
  lengths.push(array[i].length);
 }
 console.log('lengths array: \n',lengths);
}


lengthesOfWords(people);

/*cd bootcamp\BC_exercises\js */
/*node 6.3-length_of_words.js*/
