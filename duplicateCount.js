function duplicateCount(text){
  if(text.length ===0) return 0;
  
  let lowtext = text.toLowerCase().split('').sort().join('');
  let totalCounter = 0;
  let counter = 0;
  for(let i=0; i< lowtext.length; i++){
    if(lowtext[i] === lowtext[i+1]){
      counter++;
      continue;
    }else{
      if(counter != 0){
        totalCounter++;
        counter=0;
      }
    }
  }
  return totalCounter;  
}

//match(/([^])\1+/g)

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));

//node duplicateCount.js


/**
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
} */

/**
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
 */