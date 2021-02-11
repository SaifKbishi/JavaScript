
let mycountry = {
 country:'Canada',
 capital:'Ottowa',
 language:'English',
 population:'9',
 num_neighbours: 1,
 describe: function(){
  console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.num_neighbours} neighbouring countries and a capital called ${this.capital}`);  
 },
 checkIsland: function(){
  return mycountry.isIsland= ((this.num_neighbours >= 1)? true:false);  
 }
}


mycountry.describe();

console.log(mycountry.checkIsland());





/*cd bootcamp\BC_exercises\js */
//node 7.2-object_methods.js