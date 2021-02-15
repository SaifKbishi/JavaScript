let person1 =  {name: 'Saif'}
let person2 =  {name: 'Sarah'}
let person3 =  {name: 'Allan'}

const people = new Map();
people.set(person1, 1);
people.set(person2, 2);
people.set(person3, 3);
people.set(name2, 500);


/*
console.log('for each');
people.forEach(entry => {
 console.log(entry);
})*/

console.log('forof');
/*for(const person of people){
 console.log(person[0],person[1]);
}*/

for(const person of people){
 console.log(person[0].name,person[1]);
}

//cd bootcamp\BC_exercises\js 
//node 8.1-maps_with_objects.js