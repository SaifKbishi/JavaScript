function getSum(arr1, arr2){
 let sum = 0;
 
 for (let i=0; i < arr1.length; i++){
  sum += arr1[i];
 }
 for (let i=0; i < arr2.length; i++){
  sum += arr2[i];
 }
 return sum;
}
debugger;
 console.log(getSum([1,2,3],[5,66,23]));

//cd bootcamp\BC_exercises\js 
//node 14.1-get_sum.js

//14.1.1
//getSum([1,2,3][5,66,23]);
//const sum = 0;
//14.1.2
//debugger in chrome and VScode

//14.1.3
//the function is called without comma between its 2 arguments
//cannot asmentsign to const
//no returnment
//14.1.4