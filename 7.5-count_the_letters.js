const array = ["Hello","Good Day","Your Welcome","hotdog","hamburgers"];
let lettersCount ={};

let aChar = '';
let count = 0;
let max = '';

function countTheLetter(anArray){
 let stringArray = anArray.join();
 
 for(let i=0; i< stringArray.length; i++){
  aChar = stringArray[i].toLowerCase();
  count = lettersCount[aChar];
  lettersCount[aChar] = count ? count +1 : 1;
  
 }
 console.log(lettersCount);
}

countTheLetter(array);

//cd bootcamp\BC_exercises\js 
//node 7.5-count_the_letters.js

