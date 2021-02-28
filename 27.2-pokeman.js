

function Pokemon(pokemonName, pokemonType, pokemonAttackList){
 this.name = pokemonName;
 this.type = pokemonType;
 this.attackList = pokemonAttackList;
}


let poke1 = new Pokemon('a', 'big', ['sand','wind']);
let poke2 = new Pokemon('b', 'small', ['water', 'air']);
let poke3 = new Pokemon('c', 'big', ['air', 'sand']);


Pokemon.prototype.callPokemon = function(){
 console.log(`i choose you, ${Pokemon.name}`);
}

Pokemon.prototype.attack = function(attackNum){
console.log(`${Pokemon.name} used ${Pokemon.attackList[attackNum]}`);
}

poke1.callPokemon();
poke1.attack([1]);
//cd bootcamp\BC_exercises\js 
//node 27.2-pokeman.js