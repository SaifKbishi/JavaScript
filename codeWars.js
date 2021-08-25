const iterateOverChar = (string)=>{
 const reg = new RegExp('^[A-Z]');
    if(string.length > 0){
        let counter =1;
        
        for(let i=0; i<string.length; i++){
            let char = string.charAt(i);
            if(reg.test(char)){
                counter++;
            }
        }
        return counter;
    }else{
        return 0
    }
}
console.log(iterateOverChar('saveChangesInTheEditor'));

/**************************************************/
const a1 = ["arp", "live", "strong"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
const a3 = [];
const a4 = ["xyz", "live", "strong"]

function inArray(array1,array2){
  if(array1.length ==0 || array2.length == 0){
   return [];
  }else{
   const arrayOfStringsThatAreSubstrings=[];
   array1.forEach(string =>{
    if( isSubstringInArray(string,array2) != null)
    {
     let word  = isSubstringInArray(string,array2);
     if(word.length>0){
      arrayOfStringsThatAreSubstrings.push(word);
     }     
    }
   })
   console.log('arrayOfStringsThatAreSubstrings: ',arrayOfStringsThatAreSubstrings)
   const sortedArrayOfStringsThatAreSubstrings =arrayOfStringsThatAreSubstrings.sort();
   console.log('sortedArrayOfStringsThatAreSubstrings: ', sortedArrayOfStringsThatAreSubstrings);
   return sortedArrayOfStringsThatAreSubstrings;
 }
}
//check 
isSubstringInArray = (string, arrayToCheck)=>{
 let aString ='';
 arrayToCheck.forEach( stringInArrayToCheck => {
  if(isSubstring(string, stringInArrayToCheck)){
   // console.log('16: ', string)
   // return string;
   aString = string
  }
 })
 
 // console.log('aString',aString);
 return aString;
}
//check if a string is a subString of anopther
const isSubstring=(str1, str2)=>{ //is str1 subsring of str2
 if((str1 != null && str2 != null) && str1.length > str2.length ){
  // console.log('good to compare\n')
  return false;
 }else { //str2 is longer
  for(let i=0; i<str2.length; i++){
   if(str1 == str2.substring(i, i+str1.length)){
    // console.log(str1,'  is substring of', str2);
    return true;
   }   
  }
  return false;
 }
}
const sortArray = (array)=>{
 console.log('sortArray array:',array)
 // console.log('sortArray:')

 for(let i=0; i<array.length; i++){
  // console.log(array[i], array[i+1])
  return array[i] - array[i+1];
 }
}
// console.log(inArray(a1, a2))
// console.log(inArray(a1, a3))
// console.log(inArray(a4, a2))
/**************************************************/
function myDecode(str, num){
 let alphabet = 'abcdefghijklmnopqrstuvwxyz';
 let output= '';
 const strArr = str.split('');
 const alphabetArr= alphabet.split('');
 console.log('strArr', strArr);

 for(let j=0; j<strArr.length; j++){
  let indexOfLetter = alphabetArr.indexOf(strArr[j]);
  console.log('indexOfLetter: ',indexOfLetter);
  let newIndex = (indexOfLetter * num ) % 26;
  console.log('newIndex: ',newIndex);

  output += alphabetArr[newIndex];
  console.log('output: ', output);
 }
 let newNum = num.toString();
 console.log('strArr', strArr);
 console.log('final:', newNum.concat(output));
 return newNum.concat(output)
}
// console.log('here: ',myDecode("mer", 6015))
// console.log('here: ',myDecode("aan", 5057))
// console.log('here: ',myDecode("kuqhkoynvvknsdwljantzkpnmfgf", 1273409))
// console.log('here: ',myDecode("uogbucwnddunktsjfanzlurnyxmx", 1273409))
// console.log('here: ',myDecode("cdcizljymhdmvvypyjamowl", 1544749))
/**************************************************/
function i(word) {
  const vowels = /[aeiou]/g;
 if(word != null  && word.length !=0) {
  let strArray = word.split('');
  const startsWith = new RegExp('^[a-z]');
  let numberOfVowels = word.toLowerCase().match(vowels).length;
  console.log('numberOfVowels: ', numberOfVowels)
  let numberOfConstants = word.length - numberOfVowels;
  console.log('numberOfConstants: ', numberOfConstants)
  if( strArray[0]=== 'I' || startsWith.test(word) || numberOfVowels >= numberOfConstants){
  // if(strArray.length ===0 || strArray[0]=== 'I' || startsWith.test(word) ){
   return "Invalid word"
  }else {
   return 'i'.concat(word);
  }
 }else return "Invalid word"
}
// console.log('Phone ', i('Phone'));
// console.log('World ', i('World'));
// console.log('Human ', i('Human'));
// console.log('', i(''));
// console.log('Inspire', i('Inspire'));
// console.log('Peace', i('Peace'));
// console.log('road', i('road'));
// console.log('East: ',i('East'));
// console.log('null: ',i(null));
/**************************************************/
function lastSurvivor(letters, coords) {
 coords.forEach(index => {
  let str1 = letters.slice(0, index);
  let str2 = letters.slice(index+1);
  letters = str1.concat(str2);
});
console.log(letters)
 return letters;
}
//d
// console.log(lastSurvivor('foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr', [8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18, 74, 59, 51, 47, 75, 49, 23, 56, 1, 33, 39, 33, 34, 44, 25, 0, 51, 25, 36, 32, 57, 10, 57, 12, 51, 55, 24, 55, 31, 49, 6, 15, 10, 48, 27, 29, 38, 30, 35, 42, 23, 32, 9, 39, 39, 36, 8, 29, 2, 33, 14, 3, 13, 25, 9, 25, 18, 10, 1, 2, 20, 8, 2, 11, 5, 7, 0, 10, 10, 8, 12, 3, 5, 1, 7, 7, 5, 1, 4, 0, 4, 0, 0, 1]));
//m
// console.log(lastSurvivor('qgxwmlcmjufrxjutaesqtmumh',[21,11,16,14,18,5,14,10,1,8,1,3,5,1,9,9,8,6,3,3,4,0,1,1]));















