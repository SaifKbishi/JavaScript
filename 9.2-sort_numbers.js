const numbers = [1, -5, 666, 2, 400, 11];

//ascending
let sortedArray= numbers.sort(function(firstItem, secondItem){
 return firstItem - secondItem;
});
console.log(sortedArray);

let reveresedSortedArray = numbers.sort(function(firstItem, secondItem){
 return secondItem - firstItem;
});
console.log(reveresedSortedArray);




//cd bootcamp\BC_exercises\js 
//node 9.2-sort_numbers.js