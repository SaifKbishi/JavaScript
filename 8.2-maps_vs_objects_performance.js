let newObj = {
 name:''
};//3.821

let person3 =  {name: 'Allan'}
let newMap = new Map(); //9.251


const maxCount = 1000000;
console.time("My operation")// <---- Starts the timer
for(let i =0; i < maxCount; i++){
//Perform the operation to be measured multiple times
//newObj.name = 'bobo';
newMap.set(person3, 3);


} console.timeEnd("My operation") // <---- Stops the time


//cd bootcamp\BC_exercises\js 
//node 8.2-maps_vs_objects_performance.js