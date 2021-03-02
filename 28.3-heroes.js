const wonderWoman = {
 name: "Diana Prince"
 }
 const batman = {
 name: "Bruce Wayne"
 }
 const superHeroes = [wonderWoman, batman];

 function printName() {
  console.log(`my name is ${this.name}`);
  }

function printHeroes(heroes, printFunc){
 heroes.forEach(element => {
  printFunc.apply(element);
 });
}  


printHeroes(superHeroes,printName);
//console.log(printHeroes(superHeroes,printName));

//cd bootcamp\BC_exercises\js 
//node 28.3-heroes.js