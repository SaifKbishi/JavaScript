const isIncreasingArray = (arr)=>{
  if(arr.length <=1 ) return 0;
  const sortedArr = arr.sort();
  let counter =0;
  for(let i=0; i< sortedArr.length; i++){
    if(sortedArr[i+1] - sortedArr[i] > 1) counter +=(sortedArr[i+1] - sortedArr[i]-1);
  }
  return counter;
}


const arr1 = [6,2,3,8]; //4 5 7
const arr2 = [6,2,3,8,10,11,14]; //4 5 7 9 12 13
const arr3 = [6,2,3,9]; // 4 5 7 8 
const arr4 = [1,4,7,9]; // 2 3 5 6 8



console.log('1: ',isIncreasingArray(arr1))
// console.log('2: ',isIncreasingArray(arr2))
console.log('3: ',isIncreasingArray(arr3))
console.log('4: ',isIncreasingArray(arr4))

//node isIncreasingArray.js