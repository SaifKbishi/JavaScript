function findSmallest(a, b, c){
  if (a < b < c){
   return c;
  } else if (a < c < b) {
   return a;
  } else { 
   return b;
  }
 }
 debugger;
 console.group(findSmallest(52,66, 2));

//cd bootcamp\BC_exercises\js 
//node 14.2-find_smallest.js
/*
1
a. function name does not match
b. no return no log
c. this was to find the largest
2
VScode debugger
3
the call of the function had a typo
and the if condition tested the largest not the smallest
*/