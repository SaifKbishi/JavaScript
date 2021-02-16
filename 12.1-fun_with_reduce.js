let array1 = [45, 21, 36, 5];
let array2 = [10, 11, 5, 4];
let numbers = [4, 10, 1];
let numbers2 = [7, 10, 4];
//12.1.1
const maxReducer = (accumulator) => {
 return Math.max(accumulator);
}
//console.log(array1.reduce(maxReducer));

//12.1.2
const evenSum = array2.reduce((accumulator, currebtValue ) => { 
 debugger;
 return accumulator += ((currebtValue%2)==0)? currebtValue:0 ;
});
console.log(evenSum);
/***********************/
const evenSum2 = ((accumulator, currebtValue ) => { 
 return accumulator += ((currebtValue%2)==0)? currebtValue : 0;
});
console.log('try 2',array1.reduce(evenSum2));

//12.1.3
const total = numbers.reduce(myFunc);

function myFunc(sum, elem, index, array) {
 sum += elem;
 if(index === array.length-1){
  return sum / array.length;
 }else{
  return sum;
 }
}
console.log('average: ', total);
/***********************/


//cd bootcamp\BC_exercises\js 
//node 12.1-fun_with_reduce.js