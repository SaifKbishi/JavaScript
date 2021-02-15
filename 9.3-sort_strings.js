//9.3.a1
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

let sortedArray= foods.sort();
console.log(sortedArray);

//9.3.a2
let reveresedSortedArray = sortedArray.reverse();
console.log(reveresedSortedArray);

//9.3.b1
const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple", ];



//9.3.b2

/*let sortedArray= numbers.sort(function(firstItem, secondItem){
 return firstItem - secondItem;
});
console.log(sortedArray);
 */

const words = ["apple", "supercalifragilisticexpialidocious","hi", "zoo"];
//9.3.c1
let sortedLengthes = words.sort(function(firstItem, secondItem){
 return secondItem.length - firstItem.length;
});

console.log(sortedLengthes);



//cd bootcamp\BC_exercises\js 
//node 9.3-sort_strings.js