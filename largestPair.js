function largestPairSum(numbers)
{
  console.log(numbers);
  for(let i=0; i<numbers.length; i++){
    sorting(numbers[i], numbers[i+1]);
  }
  console.log(numbers)
  let len = sortedNumbers.length;
  console.log(len);
  console.log(sortedNumbers[len-2], sortedNumbers[len-1])
  console.log('Sum should be', sortedNumbers[len] + sortedNumbers[len-1]);
}

const sorting = (a, b)=>{
  return a-b;
}

console.log(largestPairSum([10,14,2,23,19]))

//cd bootcamp\BC_exercises\js 
//node largestPair.js
