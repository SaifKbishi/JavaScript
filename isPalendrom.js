const isPalendrom=(str)=>{
  let len = str.length;

  for(let i=0; i<len/2; i++){
    if(str[i] != str[len-i-1]) 
      return false;
  }
  return true;
}

// console.log(isPalendrom('aabaa'))
// console.log(isPalendrom('abna'))
// console.log(isPalendrom('4ghr5rhg4'))

//node isPalendrom.js


//create the longest palendrom from a string
/**string must contain all EVEN quantity or ONE ODD and the rest event  */
const longestPalendrom =(str)=>{
  let len = str.length;
  const strArr = str.split('');
  console.log(strArr);
  let a_map = new Map();
  for(let i=0; i< len; i++){
     //mp.set(str[i], mp.get(str[i])==null? 1:mp.get( str[i])+1);
    a_map.set(str[i], a_map.get(str[i] == null ? 1 : a_map.get(str[i])+1 ))
  }

  for (let [key, value] of a_map.entries()) {
      console.log(key, value)
    }  
}


let str1 = 'aaabb';
let str2 = 'aaabbbcc';

longestPalendrom(str1)