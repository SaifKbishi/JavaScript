"use strick";
//debugger;

const storm = {
  
  superPower: 'flying',
  printSuperPower: function () {
    return this;
  },
  
};

function printSuperPower(){
  console.log('my superpower is ', this.superPower);
}
//printSuperPower();

storm.printSuperPower()


let car = {
  brand: 'Honda',
  getBrand: function () {
      return this.brand;
  }
}
console.log(car.getBrand()); // Honda


//cd bootcamp\BC_exercises\js 
//node 26.2-super_powers.js

/*
const timmy = {
 year: 1990,
 calcAge: function () {
   console.log(this);
   // console.log(2037 - this.year);
 },
};
 timmy.calcAge();

*/

