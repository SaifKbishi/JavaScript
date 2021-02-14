//9.1.1
function aCallbakcFunc(theString){
 console.log('Good, from the callback function:\n ', theString);
}

function isString(aString, callback){
 if(typeof(aString) === 'string' ){
  console.log('true');
  callback(aString);
 }
}


let str1 ='sdksakj';
let str2 = 254;

//isString(str1,aCallbakcFunc);
//isString(str2), aCallbakcFunc;


//9.1.2

function firstWordUpperCase(aString, aCallback){
 let strArr = aString.split(' ');
 let firstWord = strArr.shift();
 firstWord = firstWord.toLocaleUpperCase('en-US');
 strArr.unshift(firstWord);
 let newStrArr = strArr.join(' ');
 aCallback(newStrArr);
}

function capFirstWord(str){
 console.log(str);
}

//firstWordUpperCase('hello world, how are you', capFirstWord);

//9.1.3
function firstWordUpperCase(aString, aCallback){
 let strArr = aString.split(' ');
 let firstWord = strArr.shift();
 firstWord = firstWord.toLocaleUpperCase('en-US');
 strArr.unshift(firstWord);
 let newStrArr = strArr.join(' ');
 aCallback(newStrArr);
}

function capFirstWord2(str){
 console.log('\x1b[36m'+ str +'\x1b[0m'); 
}
//firstWordUpperCase('hello world, how are you', capFirstWord2);



//9.1.4

function reverseWholeString(aString, bCallback){
 let strArr = aString.split(' ');
 let reverseString = strArr.reverse();  
 let newStrArr = reverseString.join(' ');
 bCallback(newStrArr);
}

function reverseStr(str){
 console.log('\x1b[36m'+ str +'\x1b[0m'); 
}

reverseWholeString('hello world, how are you', reverseStr);






//cd bootcamp\BC_exercises\js 
//node 9.1-callback_functions.js