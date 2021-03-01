//'use strict';

//debugger;
const hero = {
  health: 5,
  power: 68,
  getStrength: function(){
   console.log(this.health);
   if (this.health <= 5){
     return this.power - 10;
    } else return this.power;
  }
 }
 function whoIsStronger(getStrength){
  const myStrength = 82;
  if (getStrength() < myStrength){
   return "I am stronger";
  } else return "You are stronger";
 }
 
console.log(whoIsStronger(this.getStrength(hero)));



//1. 

//cd bootcamp\BC_exercises\js 
//node 28.1-who_is_stronger.js