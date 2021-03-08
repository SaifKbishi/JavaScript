

class Car{
 constructor(brand, speed){
  this.brand = brand;
  this.speed = speed;
 }
 getBrand(){
  return this.brand;
 }
 getSpeed(){
  return this.speed;
 }
 print(){
  console.log(`brand: ${this.getBrand()} speed: ${this.getSpeed()}`);
 }
 setSpeed(new_speed){
  this.speed = new_speed;
  console.log(new_speed);
 }


}//Car

let BMW = new Car('BMW', 150);
let Bugatti = new Car('Bugatti', 180);
let Ferrari = new Car('Ferrari', 210);
let Fiat = new Car('Fiat', 120);

let cars = [];

cars.push(BMW);
cars.push(Bugatti);
cars.push(Ferrari);
cars.push(Fiat);
console.log(cars);

let maxSpeed = cars.reduce((max, val) =>{
 return max.speed > val.speed ? max :val;
});

console.log('maxSpeed: ',maxSpeed);

function sortBySpeed(array){
 let sortedArray = array.sort(function(firstItem, secondItem){
  return firstItem.getSpeed() - secondItem.getSpeed();
 });
 return sortedArray;
}

console.log(sortBySpeed(cars));














//cd bootcamp\BC_exercises\js 
//node 35.2-classes_ex2.js

