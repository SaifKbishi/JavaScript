const isIncreasingArray = (arr)=>{
  return (Math.max(...arr) - Math.min(...arr) - arr.length +1)
}


const arr1 = [6,2,3,8]  //4 5 7
const arr2 = [6,2,3,9 ] //4 5 7 8

console.log(isIncreasingArray(arr1))
console.log(isIncreasingArray(arr2))

//node isIncreasingArray2.js