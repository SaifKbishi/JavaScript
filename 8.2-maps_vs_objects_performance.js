let newObj = {
 name:''
};//3.821

let person3 =  {name: 'Allan'}
let newMap = new Map(); //9.251
const maxCount = 1000000;

//8.2.1
console.time("My operation Obj")// <---- Starts the timer
for(let i =0; i < maxCount; i++){
newObj[i] = i
} console.timeEnd("My operation Obj"); // <---- Stops the time

console.time("My operation1 Map")// <---- Starts the timer
for(let i =0; i < maxCount; i++){
 newMap.set(i,i);
} console.timeEnd("My operation1 Map");

//8.2.2
let found;
console.time("find object operation Obj");// <---- Starts the timer
for(let i =0; i < maxCount; i++){
 found = newObj.hasOwnProperty("999999");
} 
console.timeEnd("find object operation Obj");

console.time("find map operation Map");
for(let i =0; i < maxCount; i++){
 found = newMap.has(999999);
}
console.timeEnd("find map operation Map");

//8.2.3
console.time("add operation Map");
found = newMap.set(maxCount, maxCount);
console.timeEnd("add operation Map");

console.time("add operation Obj");
found = newObj[maxCount] = maxCount;
console.timeEnd("add operation Obj");


//8.2.4
console.time("delete operation Map");
found = newMap.delete(maxCount);
console.timeEnd("delete operation Map");

console.time("delete operation Obj");
found = delete newObj[maxCount];
console.timeEnd("delete operation Obj");





//cd bootcamp\BC_exercises\js 
//node 8.2-maps_vs_objects_performance.js