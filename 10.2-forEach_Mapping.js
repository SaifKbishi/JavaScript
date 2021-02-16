
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

function capitalize(aString){
 let capArray=[];
 let arrString= aString.split('');
 arrString.forEach(char =>{
  capArray.push(char.toUpperCase());
  capArray.join();  
 });
 //console.log(capArray);
 return capArray.join('');
}
//console.log('capitalize all string: \n',capitalize(string));

//10.2.6

function shiftLetters(aString){
  let stringArray = aString.split('');
  let aString2=[];

  stringArray.forEach(char =>{
   aString2.push(prevLetter(char));
  });
  let str= aString2.join('');
  return str;
}
function prevLetter(aChar){  
 return String.fromCharCode((aChar.charCodeAt(0)-1));
}
//console.log('shiftLetters: ',shiftLetters('bcdefg'));

//10.2.7
let flag=1;
function swapCase(aString){
 let wordsArray = aString.split(' ');
 let capitalArray =[];
 //debugger;
 //console.log(wordsArray);
 wordsArray.forEach(word => {
  if(flag){
   flag=0;
   capitalArray.push(capitalize(word));   
  }else{
   flag=1;
   capitalArray.push(word);   
  }  
 });
 return capitalArray.join(' ');
}
console.log(swapCase(string));
//const string = "Hello and Good Day Your Welcome with a hotdog and ahamburgers";

//cd bootcamp\BC_exercises\js 
//node 10.2-forEach_Mapping.js
