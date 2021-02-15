
//10.2.1
let numbers =[1,2,3,4,5,6,8];
function doubleValues(arr){
 let newArray2 = arr.map(elem => elem *2);
 return newArray2;
}

//console.log('doubleValues: ', doubleValues(numbers));

//10.2.2
function onlyEvenValues(arr){
 let newArray3 = arr.map(elem => (elem%2)? elem : '');
 return newArray3;
}
//console.log('onlyEvenValues: ', onlyEvenValues(numbers));

//10.2.3
let mixedArray = [1, 'firstStr', 54, 'fg5hy', 25, 'fg5hy', 'lastStr', 485, 25];
let newArray4 =[];
function showFirstAndLast(arr){
arr.forEach(element => {
 if(typeof(element) =="string"){
  newArray4.push(element);
 }
});
 newArray4.splice(1, newArray4.length-2);
 return newArray4;
}
//console.log(showFirstAndLast(mixedArray));

//10.2.4
let vowelsArr=[];
let lettersCount ={};
const string = "Hello and Good Day Your Welcome with a hotdog and ahamburgers";

function vowelCount(aString){
 let arrstring= aString.split('');   //convert string to array of letters
// console.log(arrstring);
 arrstring.forEach(char => {       //store only vowels
  if(isVowel(char)){
   vowelsArr.push(char);
  }
 });
 //console.log('vowelsArr:',vowelsArr);
 vowelsArr.forEach(char => {      //count the appearance of the letters (which are only vowels)
  char.toLowerCase();
  count = lettersCount[char];
  lettersCount[char] = count ? count +1 : 1;
 });
 console.log(lettersCount);
}
function isVowel(bChar){
 return /[aeiou]/.test(bChar);
}
//vowelCount(string);

//10.2.5
let capArray=[];
function capitalize(aString){
 let arrString= aString.split('');
 arrString.forEach(char =>{
  capArray.push(char.toUpperCase());
  capArray.join();  
 });
 //console.log(capArray);
 return capArray.join('');
}
console.log('capitalize',capitalize(string));

//10.2.6
function shiftLetters(){
 
}



//cd bootcamp\BC_exercises\js 
//node 10.2-forEach_Mapping.js