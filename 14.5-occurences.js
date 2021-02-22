function countOccurrences (str, char){
 let counter = 0 ;
 for ( let i = 0 ; i < str .length; i ++ ){
 if ( str.charAt(i) === char ){
 counter += 1 ;
 }} return counter ;
 }
console.log( countOccurrences ( "ini mini miny moe" , "n" ));

//cd bootcamp\BC_exercises\js 
//node 14.5-occurences.js

/*
1.
counter + 1 ;

2.breakpoints and watch
3.the counter was not getting updated
 */